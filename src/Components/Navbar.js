import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* To navigate to another route using links, react-router-dom provides us with
        the Link component 
            1. Link provides an anchor component in the dom 
            2. Instead of href, we use the to prop
            3. The to prop accepts the route or path to the new page */}

        {/* Note: Here we give /about instead of just 'about' 
            1. This is called as static routing 
            2. The behaviour will remain same if / is removed 
            3. It is a part of dynamic routing */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
    </nav>
  )
}

export default Navbar