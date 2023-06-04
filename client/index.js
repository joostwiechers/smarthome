import React from 'react'

import './index.scss'

import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Smarthome from './components/smarthome/Smarthome'
import {Provider} from 'react-redux'
import {store} from './store'

const root = createRoot(document.getElementById('app'))

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Smarthome />
        </BrowserRouter>
    </Provider>
)
