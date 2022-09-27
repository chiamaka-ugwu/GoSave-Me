import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';

const HomePage = () => {
    window.scroll(0, 0)
    window.onscroll = () => {
        const top = window.scrollY;
        if (top >= 50) {
            document.getElementById('nav').classList = 'nav nav2'
        }else{
            document.getElementById('nav').classList = 'nav'

        }
    }
    return (
        <>
            <Nav id='nav' />
            <Header />
            <Footer />
        </>
    )
}

export default HomePage
