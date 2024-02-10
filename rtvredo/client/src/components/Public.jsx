import React, { useEffect } from 'react'
import IssueList from './IssueList.jsx'
import IssueForm from './IssueForm.jsx'
import CommentForm from './CommentForm.jsx'
import Comment from './Commented.jsx'
import { UserContext } from '../context/UserProvider.jsx'
import { useContext } from 'react'


export default function Public(){
    const { 
        user: { 
          username 
        }, 
        addIssue,
        issues, 
        addComment,
        comments,
        getAllIssues,
        getAllComments,
        handleVotes,
        addIssueComment,
        getCommentsForIssue,
        allIssues
      } = useContext(UserContext)

      useEffect(() => {
        getAllIssues()
      }, [])

  return (
    <div className="public">
        <div className='public-issue-form'>
            <h2>Post</h2>
            <IssueForm addIssue={addIssue}/>
        </div>

        <div>
            <IssueList issues={allIssues}/>
            {/* <CommentForm addComment={addComment} /> */}
        </div>
    </div>
  )
}

