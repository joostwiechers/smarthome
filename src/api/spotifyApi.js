const spotifyApi = {

    getToken: async spotifyConfig => {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'client_id': spotifyConfig.client,
                'client_secret': spotifyConfig.secret,
                'grant_type': 'client_credentials'
            }).toString(),
            method: 'POST'
        })

        return response.json().then(x => x)
    }
}

module.exports = spotifyApi