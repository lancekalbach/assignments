const express = require("express")
const app = express()
const uuid = require("uuid/v4")

const users = [
    {name: "bob", age:"31"},
    {name: "john", age:"14"}
]

app.get("/", (req, res) => {
    res.send()
})

app.listen(9000, () => {
    console.log("port is running on 9000")
})