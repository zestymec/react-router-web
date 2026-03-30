import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userid} = useParams() 
  return (
    <div className='text-center bg-amber-800 text-5xl text-amber-200'>
      User: {userid}
    </div>
  )
}

export default User
