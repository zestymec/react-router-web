import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setdata] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Kazim0071')
        .then(Response=> Response.json())
        .then(result=>{
            setdata(result)
        } , [])
    })
  return (
    <>
     <img src={data.avatar_url} alt="git pfp" />
    <div className='text-blue-400 text-6xl bg-amber-700 text-center m-5 p-4'>
      Github Name : {data.name}
    </div>
    <div className='text-blue-400 text-6xl bg-amber-700 text-center m-5 p-4'>
      Github followers: {data.followers}
    </div>
    <div className='text-blue-400 text-6xl bg-amber-700 text-center m-5 p-4'>
      Github following: {data.following}
    </div>
    <div className='text-blue-400 text-6xl bg-amber-700 text-center m-5 p-4'>
      Github Company : {data.company}
    </div>
    <div className='text-blue-400 text-6xl bg-amber-700 text-center m-5 p-4'>
      username : {data.login}
    </div>
   
    </>
  )
}

export default Github
