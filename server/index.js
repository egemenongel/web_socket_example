const WebSocket = require('ws'); 
const PORT = 8000;
const server = new WebSocket.Server({port:PORT});             

server.on('connection',socket=>{
    console.log('Client just connected');

    socket.on('message',message=>{
        console.log(`Received msg: ${message}`);

        server.clients.forEach(function (client){
            client.send(`Someone said: ${message}`);
        })
    });

});

console.log((new Date()) + `Server is listening on port ${PORT}`);