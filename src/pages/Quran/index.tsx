import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Quran = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('USER')) {
            navigate('/sign-in')
        }
    }, [])

    return (
        <div className='container'>Quran</div>
    )
}

export default Quran