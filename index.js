const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 9000 })

server.on('connection', function(ws) {
  ws.send('Connected to websocket server!')

  ws.on('message', (data) => {
    ws.send(data.toUpperCase())
  })
    
  ws.on('close', (closeCode) => {
    console.log('Client disconnected...')
  })
})
