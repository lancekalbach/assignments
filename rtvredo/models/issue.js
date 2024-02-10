const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    commenter: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    upvotes: { 
        type: Number, 
        default: 0 
    },
    downvotes: { 
        type: Number, 
        default: 0 
    },
})

module.exports = mongoose.model("Issue", issueSchema)