const express = require("express")
const Inventory = require('../models/inventory.js')

const inventoryRouter = express.Router()

// Get all
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find()
      .then(inventory => {
        return res.status(200).send(inventory)
      })
      .catch(err => {
        res.status(500)
        next(err)
      })
  })

// Get one
inventoryRouter.get("/:inventoryId", (req, res, next) => {
    const inventoryId = req.params.inventoryId;
    Inventory.findOne({ _id: inventoryId })
      .then(foundItem => {
        if (!foundItem) {
          const error = new Error(`The item with id ${inventoryId} was not found.`)
          res.status(404)
          return next(error)
        }
        res.status(200).send(foundItem);
      })
      .catch(err => {
        res.status(500)
        return next(err)
      })
  })

// Get by type
inventoryRouter.get("/search/cheese", (req, res) => {
    Inventory.find({type: req.query.cheese})
    .then(inventory => {
      return res.status(200).send(inventory)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
  })

// Post one
inventoryRouter.post('/', (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save()
      .then(savedItem => {
        return res.status(201).send(savedItem)
      })
      .catch(err => {
        res.status(500)
        next(err)
      })
  })

  inventoryRouter.delete('/:inventoryId', (req, res) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId })
      .then(deletedItem => {
        if (!deletedItem) {
          return res.status(404).send("Item not found")
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.cheese} from the database`)
      })
      .catch(err => {
        res.status(500)
        next(err)
      })
  })

// Put one/edit one/Edit one
inventoryRouter.put('/:inventoryId', (req, res, next) => {
    Inventory.findOneAndUpdate(
      { _id: req.params.inventoryId }, //Find the one with this id
      req.body, //Update the object with this data
      { new: true } //Send back the updated version
    )
      .then(updatedInventory => {
        if (!updatedInventory) {
          return res.status(404).send("Item not found")
        }
        return res.status(200).send(updatedInventory)
      })
      .catch(err => {
        res.status(500)
        next(err)
      })
  })

module.exports = inventoryRouter