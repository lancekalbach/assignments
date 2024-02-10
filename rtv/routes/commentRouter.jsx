const express = require("express")
const commentRouter = express.Router()
const Comment = require('../models/comment.jsx')

// Get All comments
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

//get comments by user 
commentRouter.get("/user", (req,res,next) => {
  Comment.find({user: req.auth._id}, (err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

// Add new a new comment
commentRouter.post("/comment", (req, res, next) => {
  req.body.user = req.auth._id
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})

// Delete a comment
commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentId, user: req.auth._id },
    (err, deletedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedComment.title}`)
    }
  )
})

// Update a comment
commentRouter.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedComment)
    }
  )
})

module.exports = commentRouter