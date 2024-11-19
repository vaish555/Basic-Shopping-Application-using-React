import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className='Navbar'>
        <NavLink to='watches'>Watches</NavLink>
        <NavLink to='laptops'>Laptops</NavLink>
        <NavLink to='mobiles'>Mobiles</NavLink>
        <NavLink to='fashion'>Fashion</NavLink>
      </div>
      <Outlet/>
    </div>

  )
}

export default Products
