import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const sonosApi = createApi({
    reducerPath: 'sonosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    }),
    endpoints: builder => ({
        getTracks: builder.query({
            query: ({query, type}) => ({
                url: `sonos/search?type=${type}&q=${query}`,
                method: 'GET',
            })
        }),
        playTrack: builder.query({
            query: ({id}) => ({
                url: `sonos/play?id=${id}`,
                method: 'GET'
            })
        })
    })
})

export const {
    useGetTracksQuery,
    usePlayTrackQuery,
} = sonosApi
