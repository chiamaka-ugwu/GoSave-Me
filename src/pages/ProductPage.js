import React from 'react'
import Nav from '../components/nav/Nav';
import SearchBar from '../components/search-bar/SearchBar';
import Product from '../components/product/Product'
import Footer from '../components/footer/Footer';

const ProductPage = () => {
    window.scroll(0, 0)
    return (
        <>
            <Nav className="nav2"/>
            <SearchBar container='search-right' bar='bar' btn='sub-btn' />
            <Product />
            <Footer />
        </>
    )
}

export default ProductPage
