const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan')

app.use(morgan('dev')) //Logs requests to the console

const todoList = [
    {
        name: "Apples",
        description: "Go to the store and buy 3 apples",
        imageUrl: "apple.image",
        completed: false,
        _id: uuidv4(),
    },

    {
        name: "Pears",
        description: "Go to the store and buy 3 pears",
        imageUrl: "pear.image",
        completed: false,
        _id: uuidv4(),
    },

    {
        name: "Cheese",
        description: "I need some cheese, go to the store and buy some",
        imageUrl: "cheese.image",
        completed: false,
        _id: uuidv4()
    }
]

app.get('/', (req, res) => {
    res.send(todoList)
  })

  //Put/Edit
  app.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(updatedTodo)
  })

  //Delete
  app.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoList.findIndex(todo => todo._id === todoId);
      todoList.splice(todoIndex, 1)
      res.send("Deleted todo item")
  })

  //Get one
  app.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todoList.find(todo => todo._id === todoId)
    res.send(foundTodo)
  })

app.listen(7000, () => {
    console.log("Server is running on 7000")
})