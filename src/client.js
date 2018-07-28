import React from 'react';
import {hydrate} from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './StylusCSS/main'
import routes from './routes';
import rootReducer from "./rootReducer";

const AppRouter = () => {

    const store = createStore(
        rootReducer, window.__INITIAL_STATE__, applyMiddleware(thunk)
    );

    return (
        <Provider store={store}>
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>
    )
}

hydrate(<AppRouter />, document.getElementById('app'));