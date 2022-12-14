import React from 'react'
import Nav from '../components/nav/Nav';
import HowItWorks from '../components/how-it-works/HowItWorks';
import Footer from '../components/footer/Footer';

const HowItWorksPage = () => {
    window.scroll(0, 0);
    return (
        <>
            <Nav className='nav2' works='active-nav' />
            <HowItWorks />
            <Footer />
        </>
    )
}

export default HowItWorksPage
