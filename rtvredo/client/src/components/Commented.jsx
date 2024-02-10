import React from 'react'
import { useEffect, useState } from 'react'

export default function Commented(props){
  const { comment } = props
  console.log(comment)
  //console.log(text)

  const [userData, setUserData] = useState(null)

  const getUserData = async () => {
    console.log(' getUserData func inside Commented comp')
    const response = await fetch('/auth/id/' + comment.author);
    const data = await response.json();
    setUserData(data);
  }

  useEffect(() => {
    console.log('useEffect Commented Comp')
    getUserData()
  }, [])

  return (
    <div className="comment" onClick={() => console.log('comment info', comment)}>
      <h2>{comment && comment.author.username}'s comment:</h2>
      <p>{ comment.text }</p>
    </div>
  )
}