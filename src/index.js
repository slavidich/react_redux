import React from "react";
import { createRoot } from 'react-dom/client';
import ReduxApp from "./components/app-redux"
import {Provider} from "react-redux"
import {configureStore} from '@reduxjs/toolkit'
import reducer from './redux/reducers/index'

const store = configureStore({
    reducer: reducer
})

const root = createRoot(document.getElementById('root'))
root.render(<Provider store={store}>
                <ReduxApp />
            </Provider>);