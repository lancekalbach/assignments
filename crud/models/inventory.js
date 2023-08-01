const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InventorySchema = new Schema({
    cheese: {
        type: String,
        required: true
    },
    milk: {
        type: String,
        required: true
    },
    oats: {
        type: String,
        required: true
    }, 
    cereal: {
        type: String,
        required: true
    },
    soda: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Inventory", InventorySchema)