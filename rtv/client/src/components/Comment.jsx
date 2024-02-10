import React from 'react'

export default function Comment(props){
  const { comment, _id } = props
  return (
    <div className="comment">
      <p>{ comment }</p>
    </div>
  )
}