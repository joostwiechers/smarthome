const homewizardApi = require('../api/homewizardApi')

/**
 * Handles all HomeWizard requests.
 * @type {{latest: (function(*): Promise<*>)}}
 */
const homewizardController = {
    /**
     * Respond with the latest HomeWizard P1 meter data.
     * @param response
     */
    latest: response => {
        homewizardApi.getLatest()
            .then(apiResponse => response.send(apiResponse.data))
    }
}

module.exports = homewizardController
