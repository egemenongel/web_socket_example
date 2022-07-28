const WebSocket = require('ws'); 

const socket = 'ws://server_url';

const ws = new WebSocket(socket);
ws.on('open', function(){
    ws.send('Hello server!');
});

ws.on('message', function(message){
    console.log(`Received msg: ${message}`);
})
