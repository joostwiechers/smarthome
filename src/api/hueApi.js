const config = require('../../config')

const hueApi = {
    lights: () => {
        return fetch(`${config.hue.ip}/api/${config.hue.username}/lights`)
            .then(response => response.json())
    },

    light: id => {
        return fetch(`${config.hue.ip}/api/${config.hue.username}/lights/${id}`)
    },

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
