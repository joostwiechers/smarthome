const sonosApi = require('../api/sonosApi')
const config = require('../../config')

const sonosController = {
    test: (request, response) => {
        sonosApi.test(config)
        response.send(
            ''
        )
    },

    search: async (request, response) => {
        let data = await sonosApi.search(request.query.q, request.query.type, config)
        response.send(
            data[request.query.type + 's']?.items
        )
    },

    play: (request, response) => {
        sonosApi.play(request.query.id)
        response.send(true)
    }
}

module.exports = sonosController
