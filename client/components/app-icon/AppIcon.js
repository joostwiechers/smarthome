import './app-icon.scss'

import React from 'react'

import {useDispatch} from 'react-redux'
import {setActiveApp} from '../../slices/smarthomeSlice'

/**
 * App icon that sets the active app on click.
 * @param app
 * @returns {JSX.Element}
 * @constructor
 */
const AppIcon = ({app}) => {
    const dispatch = useDispatch()

    return (
        <div className="app-icon" onClick={() => dispatch(setActiveApp({app: app.title}))}>
            <img src={app.img} alt={`${app.title} app icon`} className="app-icon__image" />
        </div>
    )
}

export default AppIcon
