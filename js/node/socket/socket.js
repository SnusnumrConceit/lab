const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 3000 })
console.log('server created');

server.on('connection', ws => {
  ws.on('message', message => {
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  })
  ws.send('Hello man');
  console.log('server start');
})