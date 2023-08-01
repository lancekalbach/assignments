const express = require("express")
const Bounty = require('../models/bount.js')

const bountyRouter = express.Router()

// Get all
bountyRouter.get('/', (req, res, next) => {
  Bounty.find()
    .then(bounties => {
      return res.status(200).send(bounties)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
})

// Get one
bountyRouter.get("/:bountyId", (req, res, next) => {
  const bountyId = req.params.bountyId
  Bounty.findOne(bountyId)
    .then(foundBounty => {
      if (!foundBounty) {
        const error = new Error(`The item with id ${bountyId} was not found.`)
        res.status(404)
        return next(error)
      }
      res.status(200).send(foundBounty)
    })
    .catch(err => {
      res.status(500)
      return next(err)
    })
})

// Get by type
bountyRouter.get("/search/type", (req, res) => {
  Bounty.find({type: req.query.type})
  .then(bounties => {
    return res.status(200).send(bounties)
  })
  .catch(err => {
    res.status(500)
    next(err)
  })
})

// Post one
bountyRouter.post('/', (req, res, next) => {
  const newBounty = new Bounty(req.body)
  newBounty.save()
    .then(savedBounty => {
      return res.status(201).send(savedBounty)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
})

// Delete one
bountyRouter.delete('/:bountyId', (req, res) => {
  Bounty.findOneAndDelete({ _id: req.params.bountyId })
    .then(deletedItem => {
      if (!deletedItem) {
        return res.status(404).send("Item not found")
      }
      return res.status(200).send(`Successfully deleted item ${deletedItem.firstName} from the database`)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
})

// Put one/edit one/Edit one
bountyRouter.put('/:bountyId', (req, res, next) => {
  Bounty.findOneAndUpdate(
    { _id: req.params.bountyId }, //Find the one with this id
    req.body, //Update the object with this data
    { new: true } //Send back the updated version
  )
    .then(updatedBounty => {
      if (!updatedBounty) {
        return res.status(404).send("Item not found")
      }
      return res.status(200).send(updatedBounty)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
})

module.exports = bountyRouter
