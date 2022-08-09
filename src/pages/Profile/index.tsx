import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('USER')) {
            navigate('/sign-in')
        }
    }, [])

    return (
        <div className='container'>Profile</div>
    )
}

export default Profile