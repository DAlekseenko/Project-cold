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
console.log(manifest);
LayoutFactory
    .setManifest(manifest)
    .setProd(config.get('mode') === 'production')
    .setProdUrl(config.get('url'));

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

app.use('*', nocache);

app.use('/', Router);

app.listen(PORT, () => {
    logger.info(`Server listening on port: ${PORT}`);
});