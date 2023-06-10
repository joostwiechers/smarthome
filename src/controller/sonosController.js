const sonosApi = require('../api/sonosApi')

const sonosController = {
    test: (request, response) => {
        sonosApi.test()
        response.send(
            ''
        )
    }
}

module.exports = sonosController
