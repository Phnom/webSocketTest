const payload = {
  type: 'SET_USERNAME',
  data: 'Kalle',
}

websocket.send( JSON.stringify(payload))