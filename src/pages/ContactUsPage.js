import React from 'react'
import ContactUs from '../components/contact-us/ContactUs'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'

const ContactUsPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className='nav2'/>
            <ContactUs />
            <Footer />
        </>
    )
}

export default ContactUsPage
