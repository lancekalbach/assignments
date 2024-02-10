const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')
const user = require("../models/user.js")
const comment = require('../models/comment.js')


// Get All issues
issueRouter.get("/", (req, res, next) => {
  Issue.find( async (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    const issueWithUser = await Promise.all(issues.map( async issue  => {
        const issueUser = await user.findById(issue.author)
        const issueComment = await comment.findById(issue._id)
        return {...issue.toObject(), issueUser: issueUser.withoutPassword(), commentInfo: issueComment}
    }))
    return res.status(200).send(issueWithUser)
  })
})

//Get issues by user id
issueRouter.get("/user", async (req,res,next) => {
  try{

    const issueArr = await Issue.find({author : req.auth._id})

    const issuesWithInfo = await Promise.all(issueArr.map(async issue => {
      const commentInfo =  await comment.find({issueId: issue._id}).populate('author', '-password')
      const userInfo = await user.findById(issue.author)

      return {...issue.toObject(), commentInfo, userInfo: userInfo.withoutPassword()}
    }))
    res.status(200).send(issuesWithInfo)
  } catch(err){
    res.status(500)
    return next(err)
  }
})

issueRouter.get('/getAll', async (req,res,next) => {
  try{

    const issueArr = await Issue.find()

    const issuesWithInfo = await Promise.all(issueArr.map(async issue => {
      const commentInfo =  await comment.find({issueId: issue._id}).populate('author', '-password')
      const userInfo = await user.findById(issue.author)

      return {...issue.toObject(), commentInfo, userInfo: userInfo.withoutPassword()}
    }))
    res.status(200).send(issuesWithInfo)
  } catch(err){
    res.status(500)
    return next(err)
  }
})

// Add new issue
issueRouter.post("/", (req, res, next) => {
    console.log('inside issueRouter', req.auth.username)
    req.body.author = req.auth._id;
    const newIssue = new Issue(req.body);
    newIssue.save( async (err, savedIssue) => {
      if (err) {
        return handleErrors(res, next, err);
      }
      const issueUser = await user.findById(newIssue.author)
      const postWithUser = {...savedIssue.toObject(), issueUser: issueUser.withoutPassword()}
      return res.status(201).send(postWithUser);
    });
  });


// Delete issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})

// Update issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

//update downvote or upvote
//upvote
issueRouter.put("/:issueId/upvote", async (req,res) => {
  try {
    const issue = await Issue.findById(req.params.issueId)
    issue.upvotes += 1
    await issue.save()
    res.status(200)
  }

  catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while upvoting the issue.' })
  }
})

//downvote 
issueRouter.put("/:issueId/downvote", async (req,res) => {
  try {
    const issue = await Issue.findById(req.params.issueId)
    issue.downvotes -= 1
    await issue.save()
    res.status(200)
  }

  catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while downvoting the issue.' })
  }
})

module.exports = issueRouter