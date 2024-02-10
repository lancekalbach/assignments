import React from 'react'
import { useEffect, useContext } from 'react'
import Comment from "./Commented.jsx"
import { UserContext } from '../context/UserProvider.jsx'

export default function CommentList(props) {
    const { getAllComments } = useContext(UserContext)
    const { comments } = props
    console.log(comments)
    // useEffect( () => {
    //     getAllComments()
    // }, [])
    return (
        <div className='comments'>
            { comments.map(comment => <Comment {...comment} key={comment._id} />) }
        </div>
    )
}