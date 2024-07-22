const express = require('express')
const app = express()
const db = require('./db');



const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('welcome to my rent collection system')
})

const rent=require('./routes/rent')
app.use('/RentDetail',rent)

const property=require('./routes/property')
app.use('/property',property)

const port = 1337;
app.listen(port, () => {
  console.log("server is running ... ", port)
})