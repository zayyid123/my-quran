/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useState} from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import MyButton from '../../components/myButton';
import { connect } from 'react-redux'
import { registerUserApi } from '../../config/redux/action';

const SignUp = (props: any) => {
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

  const handleSubmit = async() => {
    const res = await props.registerApi({ email, password }).catch((err: any) => err)

    if (res) {
      console.log('akun anda telah terdaftar')
      window.location.href = '/sign-in'
    }else{
      console.log('daftar akun gagal')
    }
  }

  return (
    <div className='container'>
      <div className='signup'>
        <h1>Sign Up</h1>
        <p>Please enter your details.</p>
        <input type="email" placeholder='Email' onChange={changeEmail} />
        <input type="password" placeholder='Password' onChange={changePass} />
        <MyButton title={'Submit'} onClick={handleSubmit} loading={props.isLoading} />

        <p>Already have an account ? <Link to={'/sign-in'}><span>Sign In</span></Link></p>
      </div>
    </div>
  )
}

const reduxState = (state: any) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch: any) => ({
  registerApi: (data: any) => dispatch(registerUserApi(data))
})

export default connect(reduxState, reduxDispatch)(SignUp) 