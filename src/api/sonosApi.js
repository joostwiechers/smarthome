const sonos = require('sonos')

const sonosApi = {

    test: () => {
        sonos.AsyncDeviceDiscovery({},device => {
            console.log(device)
        })
        console.log('test')
    }

}

module.exports = sonosApi
