import './hue-light.scss'

import React from 'react'
import {useSelector} from 'react-redux'

import {useUpdateLightStateMutation, useToggleLightMutation} from '../../apis/hueApi'
import colors from './colors'

/**
 * Hue Light component.
 * @param id
 * @constructor
 */
const HueLight = ({id}) => {

    // Fetch the light from the store.
    const light = useSelector(state => state.hue.lights.find(light => light.id === id))

    // Set the activeClass class if the light is on.
    const activeClass = light?.state.on === true ? 'hue-light--active' : ''

    // Toggle light API call trigger.
    const [toggleLightTrigger] = useToggleLightMutation()

    // Set light's state API call trigger.
    const [updateLightStateTrigger] = useUpdateLightStateMutation()

    /**
     * Toggle the on-state of the light.
     */
    const toggleLight = () => {
        toggleLightTrigger({
            id: light.id,
            on: !light.state.on,
        })
    }

    /**
     * Set the light's state.
     * @param data
     */
    const updateLightState = data => {
        updateLightStateTrigger({
            id: light.id,
            data
        })
    }

    if (!light) {
        return
    }

    return (
        <div className={`hue-light ${activeClass}`}>
            <div className="hue-light__name" onClick={toggleLight}>
                {light.name}
            </div>

            <div className="hue-light__options">
                <input type="range"
                       className="hue-light__brightness"
                       disabled={light.state.on === false}
                       min={0} max={254}
                       defaultValue={light.state.bri}
                       onChange={event => updateLightState({
                           bri: parseInt(event.target.value),
                           on: event.target.value > 0
                       })} />

                {/*<input type="range"*/}
                {/*       className="hue-light__brightness"*/}
                {/*       disabled={light.state.on === false}*/}
                {/*       min={0} max={65535}*/}
                {/*       defaultValue={light.state.hue}*/}
                {/*       onChange={e => updateLightState({hue: parseInt(e.target.value)})} />*/}

                <div className="hue-light__colors">
                    {colors.map(color =>
                        <div key={color.title} className="hue-light__color" style={{background: color.hex}}
                             onClick={() => updateLightState(color.settings)}></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HueLight
