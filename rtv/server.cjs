const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')

process.env.SECRET

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb://localhost:27017/rtv',
  () => console.log('Connected to the DB')
)

app.use('/auth', require('./routes/authRouter.jsx'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/issue', require('./routes/issueRouter.jsx'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizeError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(6000, () => {
  console.log(`Server is running on local port 6000`)
})