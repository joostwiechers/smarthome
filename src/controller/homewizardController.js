const homeWizardApi = require('../api/homeWizardApi')

/**
 * Handles all HomeWizard requests.
 * @type {{latest: (function(*): Promise<*>)}}
 */
const homeWizardController = {
    /**
     * Respond with the latest HomeWizard P1 meter data.
     * @param response
     */
    latest: response => {
        homeWizardApi.getLatest()
            .then(apiResponse => response.send(apiResponse.data))
    }
}

module.exports = homeWizardController
