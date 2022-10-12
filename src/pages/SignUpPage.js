import React from 'react'
import Nav from '../components/nav/Nav'
import Signup from '../components/signup/Signup'

const SignUpPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className='nav2' account='active-nav' />
            <Signup />
        </>
    )
}

export default SignUpPage
