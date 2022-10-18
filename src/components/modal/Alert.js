import React from 'react';
import "./styles/alert.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Alert = ({msg, setAlert, icon, msgColor, iconColor, setError }) => {
    return (
        <>
            <div className="alert" 
                onClick={() => {
                    setError(false); 
                    setAlert(false);
                }} 
            >
                <div className="modal-box modal-box1 alert-box" onClick={(e) => e.stopPropagation()}>
                    <FontAwesomeIcon icon={icon} className={` alert-icon ${iconColor}`} />
                    <h3 className={`alert-h3 ${msgColor}`}>{msg}</h3>
                </div>
            </div>    

        </>
    )
}

export default Alert
