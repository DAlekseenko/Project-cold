import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import routes from './routes';
import {renderRoutes} from "react-router-config";
import LayoutFactory from "./Layout/LayoutFactory";
import {Provider} from "react-redux";
import {createStore} from 'redux'

import rootReducer from "./rootReducer";
import logger from "../libs/log"
import Custom from "../models/custom"
import {preparePhone} from "../libs/helper"
import mailer from '../libs/mailer'
import config from '../config';

const router = express.Router({})

router.get('*', (req, res) => {

    const Layout = LayoutFactory.getLayout();

    const store = createStore(rootReducer);

    const context = {
        pageTagsSetter: (title, description) => {
            Layout.setTitle(title)
            Layout.setDescription(description)
        }, setNotFound: () => {
            res.writeHead(404)
        }
    };
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );
    res.end(Layout.render(content));
});

router.post('/request-call', async (req, res) => {

    const {phone, name} = req.body

    const mailOptions = {
        from: 'account.condish@yandex.ru',
        to: config.get('mailTo'),
        subject: 'Заявка с сайта кондиционеров',
        html: 'Перезвоните мне пожалуйста!\n\n' +
        'Телефон: <b>' + phone + '</b>\n\n' +
        'Имя: <b>'+name + '</b>'
    }

    try {
        await mailer.sendMail(mailOptions)
        const custom = await new Custom({name, phone: preparePhone(phone)})
        await custom.save()
        res.end('Ваша заявка успешно принята!')
    } catch (e) {
        logger.error(e)
        res.end('Ошибка на сервере! Повторите позжее...')
    }
})


export default router;