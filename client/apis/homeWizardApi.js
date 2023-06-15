import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const homeWizardApi = createApi({
    reducerPath: 'homeWizardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    }),
    endpoints: builder => ({
        getUsage: builder.query({
            query: () => `home-wizard`
        }),
    })
})

export const {useGetUsageQuery} = homeWizardApi
