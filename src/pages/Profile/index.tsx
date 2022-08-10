import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

// img
import pp from '../../assets/icon/user.png'

const Profile = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState(localStorage.getItem('EMAIL'))
    const [uid, setuid] = useState(localStorage.getItem('UID'))

    useEffect(() => {
        if (!localStorage.getItem('USER')) {
            navigate('/sign-in')
        }
    }, [])

    return (
        <div className='container'>
            <div className='myProfile'>
                <img src={pp} alt="user" />

                <div>Email : <span>{email}</span></div>
                <div>UID : <span>{uid}</span></div>
            </div>
        </div>
    )
}

export default Profile