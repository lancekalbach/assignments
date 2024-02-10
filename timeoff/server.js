const express = require("express")
const app = express()
const requestRouter = require('./routes/requestRouter.js') 
const morgan = require("morgan")
const mongoose = require('mongoose');

app.use(express.json())
app.use(morgan('dev'))

//Connect to database
mongoose.connect('mongodb://localhost:27017/timeoffdb',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

//Pull in the request router
app.use('/requests', requestRouter)

//Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

const PORT = 6000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})