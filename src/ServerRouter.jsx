import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import routes from './routes';
import {renderRoutes} from "react-router-config";
import LayoutFactory from "./Layout/LayoutFactory";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./rootReducer";


export const store = createStore(rootReducer, applyMiddleware(thunk));
const router = express.Router();

router.get('*', (req, res) => {

    const Layout = LayoutFactory.getLayout();

    const context = {
        pageTitleSetter: (title) => {
            Layout.setTitle(title)
        }, setNotFound: () => {
            res.status(404)
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

router.post('/request-call', (req, res) => {
    console.log(req.body);
    res.end('Все отлично');
});

export default router;