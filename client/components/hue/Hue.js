import React, {useEffect} from 'react'

import './hue.scss'

import {useGetLightsQuery} from '../../apis/hueApi'
import HueLight from './HueLight'
import {useDispatch} from 'react-redux'
import {setLights} from '../../slices/hueSlice'

const Hue = () => {

    const dispatch = useDispatch()

    const {data: lights = []} = useGetLightsQuery(null, {
        pollingInterval: 1000
    })

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
