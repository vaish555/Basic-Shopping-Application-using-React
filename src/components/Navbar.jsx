import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../css/Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/about'>About Us</NavLink>
       <NavLink to='/signup'>Signup</NavLink>
       <NavLink to='/login'>Login</NavLink>
       <NavLink to='/products'>Products</NavLink>
    </div>
  )
}

export default Navbar
