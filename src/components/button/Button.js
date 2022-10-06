import React from 'react';
import './button.css'

const Button = ({btnClass, btnName, onClick, type, style}) => {
    return (
        <>
            <button type={`button ${type}`} style={style && style} className={` button ${btnClass}`} onClick={onClick}>
                {btnName}
            </button>
        </>
    )
}

export default Button
