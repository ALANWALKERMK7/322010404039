const express = require('express')
const mongoose = require('mongoose')
const {connect}= require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const register = require('./routes/register')
const auth = require('./routes/auth')
const train = require('./routes/train')
const app = express()
const port = process.env.url || 3000
app.use(cors()) // Enable CORS for all requests
app.use(express.json())
app.use(bodyParser.json())
app.use('/train', register)
app.use('/train', auth)
app.use('/train', train)
//conect da

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


