const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');
const Game = require('./models/game');
const quotableAPI = require('./quotableAPI');
// const port = 3000;

const expressServer = app.listen(3001);
const io = socketio(expressServer);

mongoose.connect('mongodb://localhost:27017/typego',{useNewUrlParser : true, useUnifiedTopology : true}, ()=>{ console.log('successfully connected')})
//set public files
// const pa = path.join(__dirname, 'public');
// console.log(pa);
// app.use(express.static(path.join(__dirname, 'public')));

//set view engine
// app.set('view engine', 'ejs')

//template engin route
// app.get('/', (req, res) => {
//   res.render('home');
// })

// app.get('/about', (req, res) => {
//   res.render('about');
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })