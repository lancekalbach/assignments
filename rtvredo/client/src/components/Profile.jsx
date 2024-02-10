import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList.jsx'
import CommentList from "./CommentList.jsx"
import { UserContext } from '../context/UserProvider.jsx'
import Commented from './Commented.jsx'

export default function Profile(props){
const { issue } = props
  const { 
    user: { 
      username 
    }, 
    issues, 
    comments,
    getUserIssues,
    getUserComments
  } = useContext(UserContext)

  console.log("userProvider: ", issues)

  useEffect(() => {
    getUserIssues()
  }, [])

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Your Topics</h3>
      <IssueList issues={issues}/>
      <h3>Your Comments</h3>
      
    </div>
  )
}