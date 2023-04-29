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
            {/* This is because they are related links. They inherit the path of the closest route in which they are rendered. */}
            {/* As featured and new are nested in products, their paths are products/featured and products/new respectively. */}
            {/* However, if we user /new and /featrued; they will be viewed as children of the root instead of products. This will
                trigger the no match route */}

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