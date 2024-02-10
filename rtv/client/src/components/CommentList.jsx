import React from 'react'
import Comment from "./Comment.jsx"

export default function CommentList() {
    const { comments } = props
    return (
        <div className='comments'>
            { comments.map(comment => <Comment {...comment} key={comment._id} />) }
        </div>
    )
}