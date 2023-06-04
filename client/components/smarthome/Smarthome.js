import React from 'react'

import './smarthome.scss'

import Dock from '../dock/Dock'
import AppView from '../app-view/AppView'

const Smarthome = () => {

    return (
        <div className="smarthome">
            <Dock />
            <AppView />
        </div>
    )
}

export default Smarthome
