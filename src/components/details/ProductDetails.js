import React from 'react';
import Details from './Details';
import './styles/prod-details.css';
import SearchBar from '../search-bar/SearchBar';
import Card from '../card/Card';

const ProductDetails = () => {
    return (
        <>
            <div className="prod-details">
                <div className="prod-left">
                    <Details />
                </div>
                <div className="prod-right">
                    <SearchBar container='search-right' bar='bar2 bar3' btn='sub-btn' />
                    <div className="prod-right2">
                        <h4>Patients With Similar illness</h4>
                        <article>
                            <Card className='prod-card' />
                            <Card className='prod-card' />
                        </article>
                        <h4>Patients in the same location </h4>
                        <article>
                            <Card className='prod-card' />
                            <Card className='prod-card' />
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
