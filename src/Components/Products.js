import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <div>
            <input type='search' placeholder='Search products'></input>
        </div>  

        <nav className='secondary-nav'>
            {/* Note: we dont use / for nested routes as of now */}

            {/* Even though we created nested routes in App.js; React does not know where to render the components.
                For this, we have a component called as 'Outlet'; added just below the Link component*/}
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>

            {/* Outlet component */}
            <Outlet/>
        </nav>
    </>
  )
}

export default Products