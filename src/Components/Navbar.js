import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const isActiveStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#24AFC1' : 'black'
        }
    }


  return (
    <nav className='primary-nav'>
        {/* To navigate to another route using links, react-router-dom provides us with
        the Link component 
            1. Link provides an anchor component in the dom 
            2. Instead of href, we use the to prop
            3. The to prop accepts the route or path to the new page */}

        {/* Note: Here we give /about instead of just 'about' 
            1. This is called as static routing 
            2. The behaviour will remain same if / is removed 
            3. It is a part of dynamic routing */}

        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}

        {/* ************* NavLink *************** */}

        {/* The navlink component knows whether it is active or not thus helping us style the active link.
            The navlink component receives the active class if the link points to current route */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/users'>Users</NavLink>

        {/* Another way to apply style to active link is using the isActive boolean flag embedded in style. See function isActiveStyle() above*/}
        {/* Note: For this to work, corresponding style in index.css is commented */}
        {/* <NavLink to='/' style={isActiveStyle}>Home</NavLink>
        <NavLink to='/about' style={isActiveStyle}>About</NavLink>
        <NavLink to='/products' style={isActiveStyle}>Products</NavLink> */}
    </nav>
  )
}

export default Navbar