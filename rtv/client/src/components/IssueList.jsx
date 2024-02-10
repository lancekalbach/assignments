import React from 'react'
import Issue from './Issue.jsx'
import Comment from "./Comment.jsx"

export default function IssueList(props){
  const { issues } = props
  return (
    <div className="issue-list">
      { issues.map(issue => <Issue {...issue} key={issue._id} />) }
      {/* {comments.map(comment => <Comment {...comments} key={comment._id} />)} */}
    </div>

  )
}