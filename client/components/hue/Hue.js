import './hue.scss'

import React, {useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useGetLightsQuery, useGetGroupsQuery} from '../../apis/hueApi'
import HueLight from './HueLight'
import {setLights, setGroups} from '../../slices/hueSlice'
import HueGroup from './HueGroup'

/**
 * Philips Hue app component.
 * @returns {JSX.Element}
 * @constructor
 */
const Hue = () => {

    const dispatch = useDispatch()

    const activeGroup = useSelector(state => state.hue.activeGroup)

    // Fetch the lights and their status from the server.
    const {data: lights = []} = useGetLightsQuery(null, {
        pollingInterval: 1000
    })

    // Fetch the rooms and their statuses from the server.
    const {data: groups = []} = useGetGroupsQuery(null, {
        pollingInterval: 1000
    })

    let lightIds = useSelector(state => state.hue.groups?.find(group => group.id === activeGroup)?.lights)
    const visibleLights = lightIds?.map(lightId => lights.find(light => light.id === lightId))

    // Set the state with the new data.
    useEffect(() => {
        dispatch(setLights({
            lights
        }))
    }, [lights])

    // Set the state with the new data.
    useEffect(() => {
        dispatch(setGroups({
            groups
        }))
    }, [groups])

    return (
        <section className="hue">
            <div className="hue__groups">
                {groups.map(group => <HueGroup id={group.id} key={group.id} />)}
            </div>
            <div className="hue__lights">
                {visibleLights?.map(light => <HueLight id={light.id} key={light.id} />)}
            </div>
        </section>
    )
}

export default Hue
