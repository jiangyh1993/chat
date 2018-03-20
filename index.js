var express = require('express');
var app = express();
var socket = require('socket.io');

app.use(express.static('public'));

var server = app.listen(3000, function() {
    console.log('listening on port 3000');
});

var io = socket(server);
io.on('connection', function(socket) {
    console.log('connection start', socket.id);
});