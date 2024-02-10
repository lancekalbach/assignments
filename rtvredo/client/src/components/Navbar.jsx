import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
  return (
    <div className="navbar">
      <Link className='profile-link' to="/profile">Profile</Link>
      <Link className='public-link' to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}