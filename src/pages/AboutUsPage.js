import React from 'react'
import Nav from '../components/nav/Nav';
import AboutUs from '../components/about-us/AboutUs';
import Footer from '../components/footer/Footer';

const AboutUsPage = () => {
    window.scroll(0, 0);
    return (
        <>
            <Nav className='nav2' />
            <AboutUs />
            <Footer />
        </>
    )
}

export default AboutUsPage
