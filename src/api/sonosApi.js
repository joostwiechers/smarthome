const {DeviceDiscovery} = require('sonos')
const spotifyApi = require('./spotifyApi')

const sonosApi = {

    test: async config => {

        let tokenData = await spotifyApi.getToken(config.spotify)

        console.log(tokenData)

        fetch('https://api.spotify.com/v1/search?offset=0&limit=20&q=muse&type=track', {
            headers: {
                'Authorization': `Bearer ${tokenData.access_token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => console.log(data.tracks))
            .catch(x => console.log(x))

        DeviceDiscovery({}, device => {
            device.setSpotifyRegion(2311)
            // device.stop()
            // device.play('spotify:track:1AhDOtG9vPSOmsWgNW0BEY')
            //     .catch(e => console.log(e.message))
        })
    },

    search: async (q, type, config) => {
        let tokenData = await spotifyApi.getToken(config.spotify)
        const response = await fetch(`https://api.spotify.com/v1/search?offset=0&limit=20&q=${q}&type=${type}`, {
            headers: {
                'Authorization': `Bearer ${tokenData.access_token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET'
        })

        return response.json().then(data => data)
    },

    play: id => {
        console.log(id)
        DeviceDiscovery({}, device => {
            console.log(id)
            device.setSpotifyRegion(2311)
            device.play(id)
                .catch(e => console.log(e.message))
        })
    }

}

module.exports = sonosApi
