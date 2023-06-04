const homewizardApi = require('../api/homewizardApi')

const homewizardController = {
    latest: response => {
        return homewizardApi.getLatest()
            .then(apiResponse => response.send(apiResponse.data))
    }
}

module.exports = homewizardController
