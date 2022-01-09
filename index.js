const Server = require('../server/index')
const onServerRunning = require('./utils/onServerRunning')

const serverConfig = { 
    port: 5000,
    onServerRunning: onServerRunning
}

const server = new Server(serverConfig)

server.start()