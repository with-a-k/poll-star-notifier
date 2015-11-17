const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
  socket.on('message', function (channel, message) {
  	console.log('Received' + message);
    io.sockets.emit(channel + ':', message);
  });
});

http.listen(process.env.PORT || 4000, function(){
  console.log('Your server is up and running on Port 4000. Good job!');
});