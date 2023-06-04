const hueApi = require('../api/hueApi')

const hueController = {

    list: response => {
        hueApi.lights().then(apiResponse => {
            let lights = [];
            Object.keys(apiResponse).forEach(key => {
                lights.push({
                    id: key,
                    ...apiResponse[key]
                })
            })
            response.send(lights)
        })
    },

    toggle: (request, response) => {
        hueApi.toggle(request.params.id, request.body.on)
            .then(apiResponse => response.send(apiResponse))
    },

    update: (request, response) => {
        hueApi.update(request.params.id, request.body)
            .then(apiResponse => response.send(apiResponse))
    }
}

module.exports = hueController
