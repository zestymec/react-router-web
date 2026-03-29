import React from 'react'
import {userParams} from 'react-router-dom'
function User() {
    const {userid} = userParams ;
  return (
    <div>
      User: {userid}
    </div>
  )
}

export default User
