import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Navbar = () => {
    return (
        <div className='myNavbar'>
            <div className='innerNavbar'>
                <div className='logoNavbar'>
                    <Link to={'/'}>
                        <p className='logo'>My-Quran</p>
                    </Link>
                </div>

                <div className='menuNavbar'>
                    <Link to={'/'}>
                        <p>Home</p>
                    </Link>
                    <p>Quran</p>
                    <p>Profil</p>
                </div>

                <div className='btnhNavbar'>
                    <Link to={'/sign-up'}>
                        <div>Sign Up</div>
                    </Link>
                    <Link to={'/sign-in'}>
                        <div>Sign In</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar