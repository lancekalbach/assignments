const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');

const middleware = require("./middle")

app.use(middleware)

app.get("/", (req, res) => {
    const response = {
        message: "This is a custom response",
        data: {
            key1: 'value1',
            key2: 'value2',
        },
        customProperty: req.customProperty,
    }
    res.send(response)
})

// app.use(express.json())

// app.use("/items", (req, res, next) => {
//     console.log("The items middleware was executed")
//     next()
// })

// app.use("/items", (req, res, next) => {
//     req.body = { name: "rick" }
//     next()
// })

// app.get("/items", (req, res, next) => {
//     console.log("get request received")
//     res.send(req.body)
// })

app.listen(7000, () => {
    console.log("Server is running on 7000")
})