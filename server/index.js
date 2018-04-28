import express from 'express';
import path from 'path';
import parser from 'body-parser';
import db from './db';
import router from './routes';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import {Stragety as LocalStrategy} from 'passport-local';

import http from 'http';
import SocketIO from 'socket.io';

const app = express();
const server = http.createServer();
const io = SocketIO(server);

io.on('connection', socket => {
    console.log('user has connected')
  socket.on('messages', (payload) => {
      console.log('this is getting messages helllo', payload)
    io.emit('messages', payload)
  })
})

server.listen(8080, err => {
    if(err) {
        console.log('error connecting to server..')
    }
    else {
        console.log('connected to server 8080')
    }
})

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(3000, err => {
    if(err) {
        console.log('error connecting to port..')
    }
    else {
        console.log('connected to port 3000')
    }
})

// var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// io.on('connection', function(){ /* … */ });
// server.listen(3000);