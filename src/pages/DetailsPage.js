import React from 'react';
import ProductDetails from '../components/details/ProductDetails';
import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';

const DetailsPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className="nav2"/>
            <ProductDetails />
            <Footer />

        </>
    )
}

export default DetailsPage
