const express = require("express")
const Request = require('../models/request.js')

const requestRouter = express.Router()

// Get all
requestRouter.get('/', (req, res, next) => {
  Request.find()
    .then(requests => {
      return res.status(200).send(requests)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
})

// Get one
requestRouter.get("/:requestId", (req, res, next) => {
  const requestId = req.params.requestId
  Request.findOne(requestId)
    .then(foundRequest => {
      if (!foundRequest) {
        const error = new Error(`The item with id ${requestId} was not found.`)
        res.status(404)
        return next(error)
      }
      res.status(200).send(foundRequest)
    })
    .catch(err => {
      res.status(500)
      return next(err)
    })
})

// Get by first name
requestRouter.get("/search/firstName", (req, res, next) => {
  Request.find({type: req.query.firstName})
  .then(requests => {
    return res.status(200).send(requests)
  })
  .catch(err => {
    res.status(500)
    next(err)
  })
})

// Post one
requestRouter.post('/', (req, res, next) => {
  const newRequest = new Request(req.body)
  newRequest.save()
    .then(savedRequest => {
      return res.status(201).send(savedRequest)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
})

// Delete one
requestRouter.delete('/:requestId', (req, res, next) => {
  Request.findOneAndDelete({ _id: req.params.requestId })
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
requestRouter.put('/:requestId', (req, res, next) => {
  Request.findOneAndUpdate(
    { _id: req.params.requestId }, //Find the one with this id
    req.body, //Update the object with this data
    { new: true } //Send back the updated version
  )
    .then(updatedRequest => {
      if (!updatedRequest) {
        return res.status(404).send("Item not found")
      }
      return res.status(200).send(updatedRequest)
    })
    .catch(err => {
      res.status(500)
      next(err)
    })
})

requestRouter.put('/approve/:requestId', (req, res, next) => {
    const requestId = req.params.requestId
    const newApprovalStatus = req.body.approved
  
    Request.findOneAndUpdate(
      { _id: requestId },
      { approved: newApprovalStatus },
      { new: true }
    )
      .then(updatedRequest => {
        if (!updatedRequest) {
          return res.status(404).send("Item not found")
        }
        return res.status(200).send(updatedRequest)
      })
      .catch(err => {
        res.status(500)
        next(err)
      })
  })
  

module.exports = requestRouter
