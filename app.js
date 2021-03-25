const express = require('express');
const app = express();
const socket = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');
const Game = require('./models/game');
const quotableAPI = require('./quotableAPI');
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

app.post('/multiplayer', (req, res) => {
  console.log(req.body);
  res.render('multiplayer');
})

app.get('/about', (req, res) => {
  res.render('about');
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// console.log("me "+server.maxHeaderSize);

const io = socket(server);

io.on('connection',(socket)=>{
  console.log('connection made',socket.id);
})

