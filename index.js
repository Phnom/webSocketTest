const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)
const initSockets = require('./webbsockets')

initSockets(server)

server.listen(9000)