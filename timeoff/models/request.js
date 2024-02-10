const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Request Schema
const requestSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    reason: {
        type: String
    }, 
    headshot: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    approved: {
        type: Boolean,
    }
})

module.exports = mongoose.model("Request", requestSchema)