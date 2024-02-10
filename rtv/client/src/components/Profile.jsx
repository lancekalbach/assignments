import React, { useContext } from 'react'
import IssueForm from './IssueForm.jsx'
import IssueList from './IssueList.jsx'
import Issue from './Issue.jsx'
import CommentForm from './CommentForm.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addIssue,
    addComment, 
    issues 
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Post An Issue</h3>
      <IssueForm addIssue={addIssue}/>
      <h3>Your Topics</h3>
      <IssueList issues={issues}/>
      <h3>Add Comment</h3>
      <CommentForm addComment={addComment}/>
    </div>
  )
}