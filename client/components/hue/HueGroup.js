import './hue-group.scss'

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setActiveGroup} from '../../slices/hueSlice'

const HueGroup = ({id}) => {

    const dispatch = useDispatch()

    const group = useSelector(state => state.hue.groups.find(group => group.id === id))

    const activeClass = group?.state.any_on ? 'hue-group--active' : ''

    /**
     * Toggle the on-state of the group.
     */
    const toggleLight = () => {
        // toggleLightTrigger({
        //     id: group.id,
        //     on: !group.state.on,
        // })
    }

    /**
     * Set the group's state.
     * @param data
     */
    const updateLightState = data => {
        // updateLightStateTrigger({
        //     id: group.id,
        //     data
        // })
    }

    if (!group) {
        return null
    }

    return (
        <div className={`hue-group ${activeClass}`} onClick={() => dispatch(setActiveGroup({id}))}>
            <div className="hue-group__name">
                {group.name}
            </div>
        </div>
    )
}

export default HueGroup
