const hueApi = require('../api/hueApi')

/**
 * Handles all Philips Hue requests.
 * @type {{update: hueController.update, toggle: hueController.toggle, list: hueController.list}}
 */
const hueController = {

    /**
     * Return a list of all available lights.
     * @param response
     */
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

    /**
     * Toggle a light.
     * @param request
     * @param response
     */
    toggle: (request, response) => {
        hueApi.toggle(request.params.id, request.body.on)
            .then(apiResponse => response.send(apiResponse))
    },

    /**
     * Update a light's state.
     * @param request
     * @param response
     */
    update: (request, response) => {
        hueApi.update(request.params.id, request.body)
            .then(apiResponse => response.send(apiResponse))
    }
}

module.exports = hueController
