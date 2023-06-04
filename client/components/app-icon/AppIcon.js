import React from 'react'

import './app-icon.scss'
import {useDispatch} from 'react-redux'
import {setActiveApp} from '../../slices/smarthomeSlice'

const AppIcon = ({app}) => {
    const dispatch = useDispatch()

    return (
        <div className="app-icon" onClick={() => dispatch(setActiveApp({app: app.title}))}>
            <img src={app.img} alt={`${app.title} app icon`} className="app-icon__image" />
        </div>
    )
}

export default AppIcon
