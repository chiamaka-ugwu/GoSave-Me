import React from 'react';
import './button.css'

const Button = ({btnClass, btnName, onClick, type}) => {
    return (
        <>
            <button type={`button ${type}`} className={` button ${btnClass}`} onClick={onClick}>
                {btnName}
            </button>
        </>
    )
}

export default Button
