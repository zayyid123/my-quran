import React,{useState} from 'react'
import './style.scss'
import fbConfig from "../../config/firebase/index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom'
import MyButton from '../../components/myButton';

const SignUp = () => {
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
    const auth = getAuth(fbConfig);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + ' ' + errorMessage)
      });
  }

  return (
    <div className='container'>
      <div className='signup'>
        <h1>Sign Up</h1>
        <p>Please enter your details.</p>
        <input type="email" placeholder='Email' onChange={changeEmail} />
        <input type="password" placeholder='Password' onChange={changePass} />
        <MyButton title={'Submit'} onClick={handleSubmit} loading={true} />

        <p>Already have an account ? <Link to={'/sign-in'}><span>Sign In</span></Link></p>
      </div>
    </div>
  )
}

export default SignUp