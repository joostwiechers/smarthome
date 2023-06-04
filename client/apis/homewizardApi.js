import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {homewizard} from '../../config'

export const homewizardApi = createApi({
    reducerPath: 'homewizardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    }),
    endpoints: builder => ({
        getUsage: builder.query({
            query: () => `homewizard`
        }),
    })
})

export const {useGetUsageQuery} = homewizardApi
