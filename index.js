var express = require('express');
var app = express();
var socket = require('socket.io');
var jwt = require('jsonwebtoken');
var path = require('path');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./routes/api')(router);

var b;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost/chatLogin', function(err) {
    if (err) {
        console.log('Error to connect to mongodb: ' + err);
    }
    else {
        console.log('successfully connected to mongodb');
    }
});


var server = app.listen(3000, function() {
    console.log('listening on port 3000');
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var io = socket(server);
io.on('connection', function(socket) {
    console.log('connection start', socket.id);

    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });
});