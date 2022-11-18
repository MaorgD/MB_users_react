import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginSign = () => {
  const nav = useNavigate()

  
  return (
    <div className='text-center' >
      <h2>welcome login or Sign in to our web</h2>
      <div >

        <button className='btn btn-info m-3'onClick={()=>{nav('/login')}} >login</button>
        <button className='btn btn-info m-3' onClick={()=>{nav('/signup')}} >sign Up</button>
      </div>

    </div>
  )
}

export default LoginSign