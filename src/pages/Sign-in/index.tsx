/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MyButton from '../../components/myButton'

const SignIn = (props: any) => {
  return (
    <div className='container'>
      <div className='signup'>
        <h1>Sign In {props.popupProps}</h1>
        <p>Please enter your details.</p>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password'  />
        <MyButton title={'Submit'} onClick={null} loading={false}/>

        <p>Dont have an account ? <Link to={'/sign-up'}><span>Sign Up</span></Link></p>
      </div>
    </div>
  )
}

const reduxState = (state: { popup: any }) => ({
  popupProps: state.popup
})

export default connect(reduxState, null)(SignIn)