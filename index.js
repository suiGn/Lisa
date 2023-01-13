const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const WebSocket = require('ws');

app.use(express.static(path.join(__dirname, 'reactjs/build')));
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'reactjs/build', 'index.html'));
});

app.listen(port, () => console.log(`Express server listening on port ${port}!`));

const wss = new WebSocket.Server({ port: 777 });
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Send the message back to the client
    ws.send(`Echo: ${message}`);
  });
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});