/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = (props: any) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('USER')) {
      console.log(props.user)
    } else {
      console.log('login duls gan')
      navigate('/sign-in')
    }
  }, [])
  
  const handleLogOut = () => {
    localStorage.removeItem('USER')
    navigate('/sign-in')
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to={'/sign-up'}>
        <button>Sign Up</button>
      </Link>

      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

const reduxState = (state: any) => ({
  user: state.user
})

export default connect(reduxState, null)(Home)