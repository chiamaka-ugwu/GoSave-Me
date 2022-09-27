import React from 'react';
import Nav from '../components/nav/Nav';
import Donate from '../components/donate/Donate';
import Footer from '../components/footer/Footer';


const DonatePage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className='nav2' donate='active-nav' />
            <Donate />
            <Footer />
        </>
    )
}

export default DonatePage
