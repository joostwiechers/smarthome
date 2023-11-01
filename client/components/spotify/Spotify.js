import './spotify.scss'

import React, {useEffect, useState} from 'react'
import {useGetTracksQuery, usePlayTrackQuery} from '../../apis/sonosApi'

const Spotify = () => {

    const [query, setQuery] = useState('')
    const [currentTrack, setCurrentTrack] = useState(null)

    const {data} = useGetTracksQuery({
        query,
        type: 'track'
    }, {
        skip: query.length < 3
    })

    usePlayTrackQuery({
        id: currentTrack
    }, {
        skip: !currentTrack,
        forceRefetch: true
    })

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <div className="sonos">
            <div className="search">
                <input type="search" placeholder="Search..." className="search__input" onKeyUp={e => e.key === 'Enter' && setQuery(e.target.value)}/>
                <div className="search__submit">
                    .
                </div>
            </div>

            <div className="tracks">
                {data?.map(item => {
                    return (
                        <div className="track" onClick={() => setCurrentTrack(item.uri)}>
                            <img src={item.album.images[0].url} alt=""/>
                            <div className="track__content">
                                <b>{item.name}</b> <br/>
                                {item.artists[0].name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Spotify
