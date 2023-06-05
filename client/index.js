import './index.scss'

import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'

import Smarthome from './components/smarthome/Smarthome'
import {store} from './store'

const root = createRoot(document.getElementById('app'))

root.render(
    <Provider store={store}>
        <Smarthome />
    </Provider>
)
