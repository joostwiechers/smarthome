import './dock.scss'

import React from 'react'

import AppIcon from '../app-icon/AppIcon'
import apps from '../../apps'

/**
 * The dock containing the app icons.
 * @returns {JSX.Element}
 * @constructor
 */
const Dock = () => {

    return (
        <aside className="dock">
            {apps.map(app => <AppIcon key={app.title} app={app} />)}
        </aside>
    )
}

export default Dock
