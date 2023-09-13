const config = require('../../config')

/**
 * All the used Philips Hue API endpoints.
 * @type {{light: (function(*): Promise<any>), update: (function(*, *): Promise<void | void>), toggle: (function(*, boolean=, {}=): Promise<void | void>), lights: (function(): Promise<any>)}}
 */
const hueApi = {

    defaultHeaders: {
        'hue-application-key': config.hue.username
    },

    /**
     * Fetch all the available lights.
     * @returns {Promise<any>}
     */
    lights: () => {
        return fetch(`${config.hue.ip}/api/${config.hue.username}/lights`)
            .then(response => response.json())
    },

    /**
     * Fetch all the available lights.
     * @returns {Promise<any>}
     */
    groups: () => {
        return fetch(`${config.hue.ip}/api/${config.hue.username}/groups`)
            .then(response => response.json())
    },

    /**
     * Fetch a specific light.
     * @param id
     * @returns {Promise<any>}
     */
    light: id => {
        return fetch(`${config.hue.ip}/api/${config.hue.username}/lights/${id}`)
            .then(response => response.json())
    },

    /**
     * Toggle a light's on state.
     * @param id
     * @param on
     * @param lightConfig
     * @returns {Promise<void>}
     */
    toggle: (id, on = true, lightConfig = {}) => {
        return fetch(`${config.hue.ip}/api/${config.hue.username}/lights/${id}/state`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...lightConfig,
                on
            })
        }).then(response => response.json()).then(response => console.log(response))
    },

    /**
     * Update a light's state.
     * @param id
     * @param body
     * @returns {Promise<void>}
     */
    update: (id, body) => {
        return fetch(`${config.hue.ip}/api/${config.hue.username}/lights/${id}/state`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...body})
        }).then(response => response.json()).then(response => console.log(response))
    },
}

module.exports = hueApi
