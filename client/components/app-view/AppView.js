import './app-view.scss'

import React from 'react'
import {useSelector} from 'react-redux'

import Hue from '../hue/Hue'
import HomeWizard from '../home-wizard/HomeWizard'
import Sonos from "../sonos/Sonos";

/**
 * The app view. The screen excluding the dock.
 * @returns {JSX.Element}
 * @constructor
 */
const AppView = () => {
    const activeApp = useSelector((state) => state.smartHome.activeApp)

    return (
        <main className="app-view">
            {activeApp === 'hue' && <Hue />}
            {activeApp === 'home-wizard' && <HomeWizard />}
            {activeApp === 'sonos' && <Sonos />}
        </main>
    )
}

export default AppView
