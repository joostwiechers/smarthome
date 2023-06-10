import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import Card from '../card/Card'
import {useGetUsageQuery} from '../../apis/homeWizardApi'
import {setData} from '../../slices/homeWizardSlice'

/**
 * The HomeWizard app. Shows the current Watt usage.
 */
const HomeWizard = () => {
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
        <div className="home-wizard">
            {data.active_power_w && <Card title={'Verbruik (watt)'} subtitle={data.active_power_w} />}
        </div>
    )
}

export default HomeWizard
