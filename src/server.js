import http from 'http';
import https from 'https';
import fs from 'fs';
import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import morgan from 'morgan'
import React from 'react'
import manifest from '../public/assets/manifest'
import LayoutFactory from './Layout/LayoutFactory'
import Router from './ServerRouter'
import nocache from './express/nocache'
import bodyParser from 'body-parser'

import config from '../config';
import logger from '../libs/log';

const app = express();

const PORT = config.get('PORT');
const PROD = config.get('mode') === 'production';
LayoutFactory.setUrl(config.get('url'))

const redirect = (res) => {
    res.writeHead(302, {location: 'https://proekt-xolod.ru/'})
    res.end();
}

app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(morgan('combined', {stream: logger.stream}));

// Сжимаем файлы
app.use(compress());

// Настраиваем путь для статичных файлов:
app.use(express.static('public', {
    maxage: '1Y',
}));

app.use((req, res, next) => {
    if (PROD) {
        const host = req.headers.host;
        if (req.protocol === 'http' || host.includes('www')) {
            return redirect(res)
        }
    }
    next();
})
app.use('*', nocache);
app.use('/', Router);

if (PROD) {
    LayoutFactory
        .setJsFile(manifest['main.js'])
        .setCssFile(manifest['main.css'])

    const credentials = {
        cert: fs.readFileSync('./ssl/cert.pem', 'utf8'),
        key: fs.readFileSync('./ssl/privkey.pem', 'utf8'),
        ca: fs.readFileSync('./ssl/chain.pem', 'utf8'),
    };
    const httpServer = http.createServer(app);
    const httpsServer = https.createServer(credentials, app);

    httpServer.listen(80, () => {
        logger.info(`Server url: ${config.get('url')}`);
        logger.info(`Server listening on port: 80`);
    });

    httpsServer.listen(443, () => {
        logger.info(`Server url: ${config.get('url')}`);
        logger.info(`Server listening on port: 443`);
    });
} else {
    app.listen(PORT, async () => {
        logger.info(`Server url: ${config.get('url')}`);
        logger.info(`Server listening on port: ${PORT}`);
    });
}

