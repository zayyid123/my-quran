/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from 'react'
import './style.scss'

const MyButton = ({ title, loading, onClick }: { title: any, loading: any, onClick: any }) => {

    if (loading === true) {
        return <div className='myButton disabled' >Loading...</div>
    }
    
  return (
      <div className='myButton' onClick={onClick} >{title}</div>
  )
}

export default MyButton