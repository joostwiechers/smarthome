import React from 'react'
import './dock.scss'

import AppIcon from '../app-icon/AppIcon'
import apps from '../../apps'

const Dock = () => {

    return (
        <aside className="dock">
            {apps.map(app => <AppIcon key={app.title} app={app} />)}
        </aside>
    )
}

export default Dock
