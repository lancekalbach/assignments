const express = require("express")
const commentRouter = express.Router()
const Comment = require('../models/comment.js')
const user = require("../models/user.js")

// Get All comments
commentRouter.get("/", (req, res, next) => {
  Comment.find(async (err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    const commentWithUser = await Promise.all(comments.map( async comment  => {
      const commentUser = await user.findById(comment.author)
      return {...comment.toObject(), commentUser: commentUser}
  }))
    return res.status(200).send(commentWithUser)
  })
})

//get comments by id
commentRouter.get("/:issueId", (req, res, next) => {
  Comment.find({ issueId: req.params.issueId }, async (err, comments) => {
    if (err){
      res.status(500)
      return next(err)
    }
    // await comments.populate("author")
    return res.status(200).send(comments)
  })
})

//get comments by user 
commentRouter.get("/:user", (req,res,next) => {
  Comment.find({user: req.auth._id}, (err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

// Add new a new comment
commentRouter.post("/:issueId", (req, res, next) => {
  req.body.author = req.auth._id
  req.body.issueId = req.params.issueId
  const newComment = new Comment(req.body)
  console.log(newComment)
  newComment.save(async (err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    const postCommentWithUser = await savedComment.populate("author", "-password")
    // const commentUser = await user.findById(newComment.author)
    //   const postCommentWithUser = {...savedComment.toObject(), commentUser: commentUser.withoutPassword()}
      return res.status(201).send(postCommentWithUser)
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
    { _id: req.params.commentId, user: req.auth._id },
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