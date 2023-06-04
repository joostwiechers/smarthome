const path = require('path')
const express = require('express')

const hueController = require('./controller/hueController')
const homewizardController = require('./controller/homewizardController')

/**
 * Handles all webserver logic.
 */
class Server {
    constructor(config) {
        this.config = config.server
        this.app = express()

        // Add JSON body parsing.
        this.app.use(express.json({limit: '50mb'}))

        // The port the web server will run on.
        this.port = this.config.port || 2412

        // Register the routes and start the server.
        this.registerRoutes()
        this.listen()
    }

    /**
     * Register all available routes that the app allows.
     */
    registerRoutes() {
        this.app.route('/').get((req, res) => res.sendFile(path.resolve('public/index.html')))

        // Homewizard API routes.
        this.app.route('/api/homewizard')
            .get((req, res) => homewizardController.latest(res))

        // Hue API routes
        this.app.route('/api/hue')
            .get((req, res) => hueController.list(res))

        this.app.route('/api/hue/:id/toggle').put((req, res) => hueController.toggle(req, res))

        this.app.route('/api/hue/:id/update').put((req, res) => hueController.update(req, res))

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
