import React from 'react';
import "./styles/alert.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Alert = ({msg, setalert, icon}) => {
    return (
        <>
            <div className="modal" onClick={() => setalert(false)} >
                <div className="modal-box modal-box1 alert-box" onClick={(e) => e.stopPropagation()}>
                    <FontAwesomeIcon icon={icon} className='alert-icon' />
                    <h3>{msg}</h3>
                </div>
            </div>    

        </>
    )
}

export default Alert
