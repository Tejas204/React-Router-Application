import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Users = () => {

  // React Router Dom provides a hook called as useSearchParam. This allows us to add certain queries
  // to the URL
  // Ex: https://www.youtube.com/watch?v=jIKBiFmlS4k&list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG&index=12
  // The part after ? is a search param.

  // The structure of this hook is very similar to useState hook
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamvalue = searchParams.get('filter') === 'active';


  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>

        {/* Can use this for categories in blog website */}
        <button className='submit-button' onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
        <button className='submit-button' onClick={() => setSearchParams({})}>Reset Filter</button>

        {
          searchParamvalue ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
        }
    </div>
  )
}

export default Users