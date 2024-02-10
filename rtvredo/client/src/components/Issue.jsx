import React, { useContext, useEffect, useState } from 'react'
import CommentForm from './CommentForm.jsx'
import Commented from './Commented.jsx'
import { UserContext } from '../context/UserProvider.jsx'
import axios from 'axios'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function Issue(props) {
  const { issue } = props
  const { addComment, handleUpvote, handleDownvote, comments, setComments, getAllCommentsByIssueId, getAllIssues, count, issues} = useContext(UserContext)

  console.log(issue)
    
  return (
    <div className="issue">
        <div>
      
        <div key={issue._id}>
            <h1>{issue.author}'s post</h1>
            <h1>{issue.title}</h1>
            <h3>{issue.description}</h3>
            <img src={issue.imgUrl} alt={issue.imgUrl} width={300} />
        </div>
 
    </div>
      
      <CommentForm addComment={addComment} issueId={issue._id} />
      
        <div className="comments">
        {issue.commentInfo.map((comment) => {
            // console.log(comment)
            return (<Commented key={comment._id} comment={comment} />)
        })}
        </div>
        </div>
  )
}


