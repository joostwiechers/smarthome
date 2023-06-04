import React, {useEffect} from 'react'

import Card from '../card/Card'
import {useGetUsageQuery} from '../../apis/homewizardApi'
import {useDispatch} from 'react-redux'
import {setData} from '../../slices/homewizardSlice'

const Homewizard = () => {
    const dispatch = useDispatch()
    const {data = {}} = useGetUsageQuery(null, {
        pollingInterval: 2000
    })

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
