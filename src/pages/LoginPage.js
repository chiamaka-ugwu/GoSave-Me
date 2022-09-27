import React from 'react'
import Login from '../components/login/Login'
import Nav from '../components/nav/Nav'

const LoginPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className='nav2' login='active-nav' />
            <Login />
        </>
    )
}

export default LoginPage
