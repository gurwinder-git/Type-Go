const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//set public files
// const pa = path.join(__dirname, 'public');
// console.log(pa);
app.use(express.static(path.join(__dirname, 'public')));

//set view engine
app.set('view engine', 'hbs')

//template engin route
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})