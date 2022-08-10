import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './style.scss'

// icon
import iconMenu from '../../assets/icon/menu.png'

const Navbar = () => {
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('USER')) {
            setisLogin(true)
        }
    }, [isLogin])

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are going log out",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('USER')
                Swal.fire(
                    'Log Out',
                    'You are log out',
                    'success'
                ).then((res) => {
                    if (res.isConfirmed) {
                        window.location.href = '/sign-in'
                    }
                })
            }
        })
    }

    const handleShowMenu = () => {
        const myMenu: any = document.querySelector('.menuAlternate')

        if (myMenu.className === 'menuAlternate show') {
            myMenu.classList.remove('show')
        } else {
            myMenu.classList.add('show')
        }

    }

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
                    <Link to={'/profile'}>
                        <p>Profile</p>
                    </Link>
                </div>

                {
                    isLogin ?
                        <div className='btnhNavbar' onClick={handleLogOut} >
                            <div>Log Out</div>
                        </div>
                        :
                        <div className='btnhNavbar'>
                            <Link to={'/sign-up'}>
                                <div>Sign Up</div>
                            </Link>
                            <Link to={'/sign-in'}>
                                <div>Sign In</div>
                            </Link>
                        </div>
                }

                {/* menu alternate */}
                <div className='menuAlternate'>
                    <div className='menuNavbarAlternate'>
                        <Link to={'/'} onClick={handleShowMenu}>
                            <p>Home</p>
                        </Link>
                        <Link to={'/profile'} onClick={handleShowMenu}>
                            <p>Profile</p>
                        </Link>
                    </div>

                    {
                        isLogin ?
                            <div className='btnhNavbarAlternate' onClick={handleLogOut} >
                                <div>Log Out</div>
                            </div>
                            :
                            <div className='btnhNavbarAlternate'>
                                <Link to={'/sign-up'} onClick={handleShowMenu}>
                                    <div>Sign Up</div>
                                </Link>
                                <Link to={'/sign-in'} onClick={handleShowMenu}>
                                    <div>Sign In</div>
                                </Link>
                            </div>
                    }
                </div>

                <div className='iconMenu' onClick={handleShowMenu}>
                    <img src={iconMenu} alt="icon menu" />
                </div>
            </div>
        </div>
    )
}

export default Navbar