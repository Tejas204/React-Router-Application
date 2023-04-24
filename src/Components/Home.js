import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

  return (
    <>
    <div>Home Page</div>

    {/* Creating a button */}

    {/* To navigate programatically ie in case of an event click button click,
        react-router-dom provides us with usenavigate hook 
        
        Another arguement can be passed to navigate besides 'order-summary viz {replace:true}
        This will replace history with the browser home page. When the user presses 'go back'
        he will be redirected to the page where google search appears. */}
    <button class='submit-button' onClick={() => navigate('order-summary')}>Submit</button>
    </>
  )
}

export default Home