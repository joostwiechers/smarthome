const hueApi = require('../api/hueApi')

/**
 * Handles all Philips Hue requests.
 */
const hueController = {

    /**
     * Return a list of all available lights.
     * @param response
     */
    list: response => {
        hueApi.lights().then(apiResponse => {
            response.send(hueController.mapResponse(apiResponse))
        })
    },

    /**
     * Return a list of all available groups.
     * @param response
     */
    groups: response => {
        hueApi.groups().then(apiResponse => {
            response.send(hueController.mapResponse(apiResponse).filter(group => group.type === 'Room'))
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
    },

    mapResponse: response => {
        if (!response) {
            return []
        }

        let mapped = []
        Object.keys(response).forEach(key => {
            mapped.push({
                id: key,
                ...response[key]
            })
        })

        return mapped
    }
}

module.exports = hueController
