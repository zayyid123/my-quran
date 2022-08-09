/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MyButton from '../../components/myButton'
import { signInUserApi } from '../../config/redux/action'

const SignIn = (props: any) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setemail(value);
  };

  const changePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setpassword(value);
  };

  const handleSubmit = async () => {
    const res = await props.signInApi({ email, password }).catch((err: any) => err)

    if (res) {
      window.location.href = '/'
    } else {
      console.log('login failed')
    }
  }

  return (
    <div className='container'>
      <div className='signin'>
        <h1>Sign In {props.popupProps}</h1>
        <p>Please enter your details.</p>
        <input type="email" placeholder='Email' onChange={changeEmail} />
        <input type="password" placeholder='Password' onChange={changePass} />
        <MyButton title={'Sign In'} onClick={handleSubmit} loading={props.isLoading} />

        <p>Dont have an account ? <Link to={'/sign-up'}><span>Sign Up</span></Link></p>
      </div>
    </div>
  )
}

const reduxState = (state: any) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch: any) => ({
  signInApi: (data: any) => dispatch(signInUserApi(data))
})

export default connect(reduxState, reduxDispatch)(SignIn)