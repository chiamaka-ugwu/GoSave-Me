import React from 'react';
import './styles/card.css';
import { Link } from 'react-router-dom';
import patient from '../../assets/images/patient.png';
import circle from '../../assets/images/i-circle.png'

const Card = ({className}) => {
    return (
        <>
            <div className={`card ${className}`}>
                <div className="card-content">
                    <div className="img-container">
                        <Link to='/product-details'>
                            <img src={patient} alt="patient" />
                        </Link>
                    </div>
                    <div className="target-container">
                        <div className="content">
                            <div className="target">
                                <p className='small'>Target</p>
                                <p className='bold'>₦5,000,000</p>
                            </div>
                            <div className="amount">
                                <p className='small'>Amount Raised</p>
                                <p className='bold'>₦2,000,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="patient-info">
                        <div className="content">
                            <div className="patient">
                                <p className='small'>Name of Patient</p>
                                <p className='bold'>John Doe</p>
                            </div>
                            <div className="illness">
                                <p className='small'>Nature of illness</p>
                                <p className='bold'>Cancer</p>
                            </div>
                        </div>    
                    </div>
                    <div className="hospital">
                        <div className="content2">
                            <p className='small'>Name of Hospital</p>
                            <p className='bold'>Lorem ipsum dolor sit amet, consectetur</p>
                            <p className='small'>Days Left: 
                                <span className='bold'>  30 days   
                                    <img src={circle} className='circle'/>
                                </span> 
                            </p>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
