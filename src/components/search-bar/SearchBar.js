import React from 'react';
import './styles/search-bar.css'

const SearchBar = ({container, bar, btn}) => {
    return (
        <>
        <div className={`input-container ${container}`}>
                <input type="text" name='search-bar' className={`search-bar ${bar}`} placeholder='Search for a patient or hospital' />
                <input type="submit" className={`submit-btn ${btn}`} value="Search" />
            </div>
        </>
    )
}

export default SearchBar
