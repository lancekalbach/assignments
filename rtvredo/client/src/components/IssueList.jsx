import React from 'react'
import Issue from './Issue.jsx'
import CommentForm from './CommentForm.jsx'

export default function IssueList(props){
  const { issues } = props
  console.log("issueList: ", issues)
  return (
    <div className="issue-list">
      { issues.map(issue => <Issue issue={issue} key={issue._id} />) }
    </div>

  )
}