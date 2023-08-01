const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
];

app.get("/", (req, res) =>{
    res.send(inventoryItems)
})

app.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredItems = inventoryItems.filter(item => item.type === type)
    res.send(filteredItems)
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
