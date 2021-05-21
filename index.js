const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 9000 })

let IDCounter = 1
const clients = []

server.on('connection', function(ws) {
  const client = {
    ws,
    id: IDCounter,
    username: `User ${IDCounter}`
  }

  IDCounter++
  clients.push(client)

  ws.send('Connected to websocket server!')

  ws.on('message', (data) => {
    clients.forEach(client => {
      client.ws.send(data)
    })
  })
    
  ws.on('close', (closeCode) => {
    console.log('Client disconnected...')
  })

  /* 
  ws.on('message', (data) => {
    const payload = JSON.parse(data)
    switch(payload.type) {
      case 'SET_USERNAME':
        // heres the stuff
        break
      }
  })
  */
})