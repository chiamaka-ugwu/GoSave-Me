import React from 'react';
import './styles/product.css';
import Card from '../card/Card';

const Product = () => {
    return (
        <>
            <div className="card-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
                <Card/>
            </div>
            <div className="btns">
                <button className='btn active-btn' tabIndex='1'>1</button>
                <button className='btn' tabIndex='1'>2</button>
                <button className='btn' tabIndex='1'>3</button>
                <button className='btn' tabIndex='1'>4</button>
            </div>
        </>
    )
}

export default Product
