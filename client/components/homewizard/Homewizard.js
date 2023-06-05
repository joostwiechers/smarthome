import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import Card from '../card/Card'
import {useGetUsageQuery} from '../../apis/homewizardApi'
import {setData} from '../../slices/homewizardSlice'

/**
 * The Homewizard app. Shows the current Watt usage.
 * @constructor
 */
const Homewizard = () => {
    const dispatch = useDispatch()

    // Fetch the usage from the P1 meter.
    const {data = {}} = useGetUsageQuery(null, {
        pollingInterval: 2000
    })

    // Update the store.
    useEffect(() => {
        dispatch(setData({data}))
    }, [data])

    if (!data) {
        return
    }

    return (
        <>
            {data.active_power_w && <Card title={'Verbruik (watt)'} subtitle={data.active_power_w} />}
        </>
    )
}

export default Homewizard
