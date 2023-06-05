const axios = require('axios')

const config = require('../../config')

/**
 * All the HomeWizard API endpoints.
 * @type {{getLatest: (function(): Promise<axios.AxiosResponse<any>> | *)}}
 */
const homewizardApi = {

    /**
     * Get the latest API usage.
     * @returns {Promise<axios.AxiosResponse<any>> | *}
     */
    getLatest: () => {
        return axios(`${config.homewizard.ip}/api/v1/data`)
    }
}

module.exports = homewizardApi
