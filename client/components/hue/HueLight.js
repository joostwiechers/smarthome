import React from 'react'

import './hue-light.scss'
import {useSetLightBrightnessMutation, useToggleLightMutation} from '../../apis/hueApi'
import {useSelector} from 'react-redux'
import colors from './colors'

const HueLight = ({id}) => {

    const light = useSelector(state => state.hue.lights.find(light => light.id === id))

    const active = light && light.state.on === true ? 'hue-light--active' : ''

    const [toggleLightTrigger] = useToggleLightMutation()

    const [setBrightnessTrigger] = useSetLightBrightnessMutation()

    const toggleLight = () => {
        toggleLightTrigger({
            id: light.id,
            on: !light.state.on,
        })
    }

    const setBrightness = event => {
        setBrightnessTrigger({
            id: light.id,
            data: {
                bri: parseInt(event.target.value),
                on: event.target.value > 0,
            }
        })
    }

    const setColor = data => {
        setBrightnessTrigger({
            id: light.id,
            data
        })
    }

    if (!light) {
        return
    }

    return (
        <div className={`hue-light ${active}`}>
            <div className="hue-light__name" onClick={toggleLight}>
                {light.name}
            </div>

            <div className="hue-light__options">
                <input type="range"
                       className="hue-light__brightness"
                       disabled={light.state.on === false}
                       min={0} max={254}
                       defaultValue={light.state.bri}
                       onChange={setBrightness} />

                {/*<input type="range"*/}
                {/*       className="hue-light__brightness"*/}
                {/*       disabled={light.state.on === false}*/}
                {/*       min={0} max={65535}*/}
                {/*       defaultValue={light.state.hue}*/}
                {/*       onChange={e => setColor({hue: parseInt(e.target.value)})} />*/}

                <div className="hue-light__colors">
                    {colors.map(color =>
                        <div key={color.title} className="hue-light__color" style={{background: color.hex}}
                             onClick={() => setColor(color.settings)}></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HueLight
