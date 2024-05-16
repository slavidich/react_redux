import React from "react";
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux"
import {configureStore, Tuple} from '@reduxjs/toolkit'
import { BrowserRouter } from "react-router-dom";

import ReduxApp from "./components/app-redux"
import reducer from './redux/reducers/index'
import logging from "./redux/middlewares/logging"

const store = configureStore({
    reducer: reducer,
    middleware: () => new Tuple(logging)
})

const root = createRoot(document.getElementById('root'))
root.render(
            <Provider store={store}>
                <BrowserRouter>
                    <ReduxApp />
                </BrowserRouter>
            </Provider>
            );