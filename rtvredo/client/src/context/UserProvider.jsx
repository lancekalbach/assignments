import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
    const storedUser = localStorage.getItem("user")
    // console.log("Stored user:", storedUser)
    const initState = {
      user: JSON.parse(storedUser) || {},
      token: localStorage.getItem("token") || "",
      issues: [],
      errMsg: ""
    }

  const [userState, setUserState] = useState(initState)
  const [update, setUpdate] = useState(0)
  const [comments, setComments] = useState([])
  const [allIssues, setAllIssues] = useState([])

  const getAllCommentsByIssueId = async (anything) => {
        console.log('inside GetallComments')
        const response = await userAxios.get("/api/comment/" + anything)
        
        
        .then(res => {
            if (res.data.length > 0){console.log("comments " + anything, res.data)}
            setComments(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
      }


  //User signup
  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        console.log("Received user:", user)
        console.log("Received token:", token)
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  //User Login
  function login(credentials){
    axios.post("auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }
  
  //Navigate to login page
  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
    //   issues: [],
    //   comments: []
    })
    navigate('/')
  }

  function handleAuthErr(errMsg){
    setUserState(prevState => ({
        ...prevState,
        errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState => ({
        ...prevState,
        errMsg: ""
    }))
  }

  //get all issues
  function getAllIssues(){
    userAxios.get("/api/issue/getAll")
      .then(res => {
        setAllIssues(res.data)
      })
      .catch(err => console.log(err/*.response.data.errMsg*/))
  }

  //get all comments
  function getAllComments(){
    userAxios.get("/api/comment")
    .then(res => {
        setUserState(prevState => ({
            ...prevState,
            comments: res.data
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  //
  //get all comments per issue
  async function getAllCommentsIssue(issueId){

    const response = await userAxios.get("/api/comment/" + issueId)
        .then(res => {
            console.log("comments")
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    const data = response?.json()
    return data;

  }

  //Getting the users posted issues
  function getUserIssues(){
    userAxios.get("/api/issue/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  //getting the users posted comments
  function getUserComments(){
    userAxios.get("/api/comment/user")
    .then(res => {
        setUserState(prevState => ({
            ...prevState,
            comments: res.data
        }))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  //Adding a new issue
  function addIssue(newIssue){
    userAxios.post("/api/issue", newIssue)
        .then(res => {
            console.log('addissue context', res.data)
        setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
        // console.log(userState)
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

//   function testStuff() {
//     setCount(prevCount=> prevCount+1)
//   }

    //Adding a new comment
    function addComment(newComment){
        //testStuff()
        userAxios.post("/api/comment", newComment)
        .then(res => {
            setUserState(prevState => ({
            ...prevState,
            comments: [...prevState.comments, res.data]
            })) 
            
        })
        .catch(err => console.log(err.response.data.errMsg))
        //return getAllComments()
    }

    //trying to connect comments to issueComment under the issue
    function addIssueComment(issueId, newComment) {
        userAxios.post(`/api/comment/${issueId}`, newComment)
        .then(res => {
            console.log(res.data)
            setUserState(prevState => {
                const updatedIssues = prevState.issues.map(issue => {
                    return issue._id !== issueId ? issue : {...issue, commentInfo : [...issue.commentInfo, res.data]}
                })
                return {...prevState, issues : updatedIssues}
            })
            setAllIssues(prevIssues => {
                return prevIssues.map(issue => issue._id === issueId ? {...issue, commentInfo: [...issue.commentInfo, res.data]} : issue)
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    console.log(userState)

    //handling upvote
    function handleUpvote(issueId) {
        userAxios.put(`/api/issue/${issueId}/upvote`)
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              upvotes: { ...prevState.upvotes, [issueId]: res.data.upvotes }
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

    //handling downvote
    function handleDownvote(issueId) {
        userAxios.put(`/api/issue/${issueId}/downvote`)
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              downvotes: { ...prevState.downvotes, [issueId]: res.data.downvotes }
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

      ///////
      const [issues, setIssues] = useState([]);
       
      const updateIssues = (newIssues) => {
        setIssues(newIssues)
     }

      function getEverything(){
        userAxios.get('/api/issue/getAll')
        .then(res => updateIssues(res.data))
        .catch(err => console.log(err))
      }

      // create a state for the data above
      // set state in getEverything()
      // pass that state out through context
      // consume that state in public page 
      // map over and create your html
      //wipe the db

      useEffect(() => {
        getEverything()
      }, [])

      console.log(allIssues)

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        addComment,
        resetAuthErr,
        getAllIssues,
        getUserIssues,
        getAllComments,
        getUserComments,
        handleUpvote,
        handleDownvote,
        addIssueComment,
        getAllCommentsIssue,
        comments,
        setComments,
        getAllCommentsByIssueId,
        update, setUpdate,
        issues,
        allIssues
      }}>
      { props.children }
    </UserContext.Provider>
  )
}