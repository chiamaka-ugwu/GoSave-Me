import React from 'react'
import Nav from '../components/nav/Nav';
import HowItWorks from '../components/how-it-works/HowItWorks';

const HowItWorksPage = () => {
    return (
        <>
            <Nav className='nav2' works='active-nav' />
            <HowItWorks />
        </>
    )
}

export default HowItWorksPage
