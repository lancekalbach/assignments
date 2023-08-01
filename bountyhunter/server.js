const express = require("express")
const app = express()
const bountyRouter = require('./router/bountyRouter.js') 
const morgan = require("morgan")
const mongoose = require('mongoose');

app.use(express.json())
app.use(morgan('dev'))

//Connect to database
mongoose.connect('mongodb://localhost:27017/bountiesdb',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

//Pull in bounty router
app.use('/bounties', bountyRouter)

//Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

const PORT = 6000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
