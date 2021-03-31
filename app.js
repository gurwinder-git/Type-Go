const express = require('express');
const app = express();
const socket = require('socket.io');
// const mongoose = require('mongoose');
const path = require('path');
// const Game = require('./models/game');
// const quotableAPI = require('./quotableAPI');
const port = 4000;

app.use(express.urlencoded())

// mongoose.connect('mongodb://localhost:27017/typego',{useNewUrlParser : true, useUnifiedTopology : true}, ()=>{ console.log('successfully connected')})

app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('view engine', 'ejs')

// template engin route
app.get('/', (req, res) => {
  res.render('home');
})

app.post('/creategame', (req, res) => {
  // console.log(req.body);
  res.render('creategame');
})

app.post('/joingame', (req, res) => {
  // console.log(req.body);
  res.render('joingame');
})

app.get('/about', (req, res) => {
  res.render('about');
})


//server setup
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//socket io setup
const io = socket(server);

io.on('connection',(socket)=>{
  // console.log('connection made',socket.id);
  
  socket.on('createRoom',(roomCode)=>{
    socket.join(roomCode.roomCode);                                   //this will create room
    console.log('room created having id:',roomCode.roomCode);
    // socket.emit('createRoom', roomCode);
    // console.log(rooms);
  })

  socket.on('joinRoom',(roomCode)=>{
    socket.join(roomCode.roomCode);
    console.log('room joined having id:',roomCode.roomCode);
    // socket.emit('createRoom', roomCode);
    // console.log(rooms);
  })

  socket.on('startGame',(startCredentials)=>{
    // console.log(startCredentials.roomCode);
    io.sockets.in(startCredentials.roomCode).emit('startGame',startCredentials);
    // io.sockets.emit('startGame',startCredentials);
  })
  
  socket.on('result',(myData)=>{
    // console.log(myData);
    io.sockets.in(myData.roomCode).emit('result',myData);
    // io.sockets.emit('result',myData);
  })

});