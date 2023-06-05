import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {hue} from '../../config'

export const hueApi = createApi({
    reducerPath: 'hueApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    }),
    endpoints: builder => ({
        getLights: builder.query({
            query: () => `hue`
        }),
        toggleLight: builder.mutation({
            query: ({id, on}) => ({
                url: `hue/${id}/toggle`,
                method: 'PUT',
                body: {
                    on
                }
            })
        }),
        updateLightState: builder.mutation({
            query: ({id, data}) => ({
                url: `hue/${id}/update`,
                method: 'PUT',
                body: {
                    ...data
                }
            }),

        })
    })
})

export const {
    useGetLightsQuery,
    useToggleLightMutation,
    useUpdateLightStateMutation,
} = hueApi
