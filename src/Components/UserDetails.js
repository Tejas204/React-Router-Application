import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

  // React router dom provides us with a hook called useParams which can be used to make API calls
  // In this scenario, it will be used to get the URL.
  // This hook returns a key value pair
  const params = useParams();

  // The params.userId is the userId param that we passed when creating the route
  const userId = params.userId;  

  return (
    <div>USer Details: {userId}</div>
  )
}

export default UserDetails