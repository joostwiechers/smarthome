import React from 'react'
import {useSelector} from 'react-redux'

import './app-view.scss'

import Hue from '../hue/Hue'
import Homewizard from '../homewizard/Homewizard'

const AppView = () => {
    const activeApp = useSelector((state) => state.smartHome.activeApp)

    return (
        <main className="app-view">
            {activeApp === 'hue' && <Hue />}
            {activeApp === 'homewizard' && <Homewizard />}
        </main>
    )
}

export default AppView
