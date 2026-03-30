import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/zestymec')
        .then(Response=> Response.json())
        .then(data=>{
            setdata(data)
        })
    })
  return (
    <div className='text-blue-400 text-6xl bg-amber-700 text-center m-5 p-4'>
      Github followers of Umer :
    </div>
  )
}

export default Github
