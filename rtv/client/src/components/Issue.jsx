import React from 'react'
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'

export default function Issue(props){
  const { title, description, imgUrl, _id } = props
  return ( //Returning the list of the issues and connecting the comments to the
  //issues as well as the comment form
    <div className="issue">
      <h1>{ title }</h1>
      <h3>{ description }</h3>
      <img src={imgUrl} alt={imgUrl} width={300}/>
      
      {/* <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      
      <CommentForm addComment={addComment} /> */}
    </div>
  )
}