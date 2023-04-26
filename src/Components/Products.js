import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <div>
            <input type='search' placeholder='Search products'></input>
        </div>  

        <nav className='secondary-nav'>
            {/* Note: we dont use / for nested routes as of now */}
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
    </>
  )
}

export default Products