import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import routes from './routes';
import {renderRoutes} from "react-router-config";
import LayoutFactory from "./Layout/LayoutFactory";

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
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );
    res.end(Layout.render(content));
});

export default router;