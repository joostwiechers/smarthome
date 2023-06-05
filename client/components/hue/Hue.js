import './hue.scss'

import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {useGetLightsQuery} from '../../apis/hueApi'
import HueLight from './HueLight'
import {setLights} from '../../slices/hueSlice'

/**
 * Philips Hue app component.
 * @returns {JSX.Element}
 * @constructor
 */
const Hue = () => {

    const dispatch = useDispatch()

    // Fetch the lights and their status from the server.
    const {data: lights = []} = useGetLightsQuery(null, {
        pollingInterval: 1000
    })

    // Set the state with the new data.
    useEffect(() => {
        dispatch(setLights({
            lights
        }))
    }, [lights])

    return (
        <section className="hue">
            {Array.isArray(lights) && lights.map(light => <HueLight id={light.id} key={light.name} />)}
        </section>
    )
}

export default Hue
