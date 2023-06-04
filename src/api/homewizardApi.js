const axios = require('axios')

const config = require('../../config')

const homewizardApi = {
    getLatest: () => {
        return axios(`${config.homewizard.ip}/api/v1/data`)
    }
}

module.exports = homewizardApi
