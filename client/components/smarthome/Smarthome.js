import React from 'react'

import './smarthome.scss'

import Dock from '../dock/Dock'
import AppView from '../app-view/AppView'

/**
 * The main app.
 * @returns {JSX.Element}
 * @constructor
 */
const Smarthome = () => {

    return (
        <div className="smarthome">
            <Dock />
            <AppView />
        </div>
    )
}

export default Smarthome
