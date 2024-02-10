import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const initInputs = {
  text: ""
}

export default function CommentForm(props){
  const [input, setInputs] = useState(
    initInputs
)

const [submittedComments, setSubmittedComments] = useState([])

  const { addIssueComment } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssueComment(props.issueId, input)
    setSubmittedComments([...submittedComments, input])
    setInputs(initInputs)
  }

  const { text } = input
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="text" 
        value={text}
        onChange={handleChange} 
        placeholder="Add Comment:"/>
      <button>Post Comment</button>
    </form>
  )
}