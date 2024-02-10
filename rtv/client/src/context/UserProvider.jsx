import React, { useState } from 'react'
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
    console.log("Stored user:", storedUser)
    const initState = {
      user: storedUser ? JSON.parse(storedUser) : {},
      token: localStorage.getItem("token") || "",
      issues: []
    }

  const [userState, setUserState] = useState(initState)

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
      .catch(err => console.log(err.response.data.errMsg))
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
      .catch(err => console.log(err.response.data.errMsg))
  }
  
  //Navigate to login page. This is a placholder for now
  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      todos: []
    })
    navigate('/')
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

  //Adding a new issue
  function addIssue(newIssue){
    userAxios.post("/api/issue", newIssue)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

    //Adding a new comment
    function addComment(newComment){
        userAxios.post("/api/comment", newComment)
        .then(res => {
            setUserState(prevState => ({
            ...prevState,
            comments: [...prevState.comments, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        addComment
      }}>
      { props.children }
    </UserContext.Provider>
  )
}