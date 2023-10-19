const path = require('path')
const express = require('express')

const hueController = require('./controller/hueController')
const homeWizardController = require('./controller/homeWizardController')
const sonosController = require('./controller/sonosController')

/**
 * Handles all web server logic.
 */
class Server {
    /**
     * Server constructor.
     * @param config - The config object in the root of the project.
     */
    constructor(config) {
        this.config = config.server
        this.app = express()

        // Add JSON body parsing.
        this.app.use(express.json({limit: '50mb'}))

        // The port the web server will run on.
        this.port = this.config?.port || 2412

        // Register the routes and start the server.
        this.registerRoutes()
        this.listen()
    }

    /**
     * Register all available routes that the app allows.
     */
    registerRoutes() {
        this.app.route('/').get((req, res) => res.sendFile(path.resolve('public/index.html')))

        /**
         * HomeWizard API routes.
         */
        this.app.route('/api/home-wizard')
            .get((req, res) => homeWizardController.latest(res))

        /**
         * Hue API routes.
         */
        this.app.route('/api/hue')
            .get((req, res) => hueController.list(res))

        this.app.route('/api/hue/:id/toggle').put((req, res) => hueController.toggle(req, res))
        this.app.route('/api/hue/:id/update').put((req, res) => hueController.update(req, res))

        /**
         * Sonos API routes.
         */
        this.app.route('/api/sonos').get((req, res) => sonosController.test(req, res))

        // Open up all dist files.
        this.app.use('/dist', express.static(path.resolve('dist/')))
    }

    /**
     * Open the configured port for traffic.
     */
    listen() {
        this.app.listen(this.port, () => console.log(`Listening on port :${this.port}`))
    }
}

module.exports = Server
