import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='container'>
      <div className='signup'>
        <h1>Sign In</h1>
        <p>Please enter your details.</p>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password'  />
        <button >Submit</button>

        <p>Already have an account ? <Link to={'/sign-up'}><span>Login</span></Link></p>
      </div>
    </div>
  )
}

export default SignIn