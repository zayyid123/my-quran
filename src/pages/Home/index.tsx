/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('USER')) {
      navigate('/sign-in')
    }
  }, [])

  return (
    <div className='container'>
      <div className='homeDetail'>
        <div>My Quran</div>
        <div>~ Al - Quran Online ~</div>
        <div>Read Al-Qur'an Online anywhere and anytime easily.</div>
      </div>
    </div>
  )
}

const reduxState = (state: any) => ({
  user: state.user
})

export default connect(reduxState, null)(Home)