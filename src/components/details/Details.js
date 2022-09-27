import React, { useState } from 'react';
import './styles/details.css';
import patient from '../../assets/images/patient2.png';
import { Link } from 'react-router-dom';
import circle from '../../assets/images/i-circle.png';
import contributors from '../../assets/images/contributors.png';
import share from '../../assets/images/share.png'
import Button from '../button/Button';
import Modal from '../modal/Modal';


const Details = () => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className="card-details">
                <div className="details-content">
                    <div className="img-container">
                        <img src={patient} alt="patient" />
                    </div>
                    <div className="more">
                        <Link to='' className='view'>View more pictures</Link>
                    </div>
                    <div className="target-container2">
                        <div className="content3">
                            <div className="target">
                                <p className='small small2'>Target</p>
                                <p className='bold bold2'>₦5,000,000</p>
                            </div>
                            <div className="amount-raised">
                                <p className='small small2'>Amount Raised</p>
                                <p className='bold bold2'>₦2,000,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="patient-info">
                        <div className="content3">
                            <div className="patient">
                                <p className='small small2'>Name of Patient</p>
                                <p className='bold bold2'>John Doe</p>
                            </div>
                            <div className="illness">
                                <p className='small small2'>Nature of illness</p>
                                <p className='bold bold2'>Cancer</p>
                            </div>
                            <div className="treatment">
                                <p className='small small2'>Treatment Required</p>
                                <p className='bold bold2'>Chemotherapy</p>
                            </div>
                        </div>    
                    </div>
                    <div className="description">
                        <div className="content4">
                            <p className="small small2">Description</p>
                            <p className="bold bold2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                        </div>
                    </div>
                    <div className="hospital-details">
                        <div className="content4">
                            <p className="bold bold2">Hospital Details</p>
                        </div>
                        <div className="content3 hospitals">
                            <div className="hospital-name">
                                <p className='small small2'>Name of Hospital</p>
                                <p className='bold bold2'>Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="location">
                                <p className="small small2">Location</p>
                                <p className="bold bold2">Rivers State</p>
                            </div>
                        </div>
                        <div className="content3 email-address">
                            <div className="email">
                                <p className='small small2'>Email Address</p>
                                <p className='bold bold2'>hospital@gmail.com</p>
                            </div>
                            <div className="phone">
                                <p className="small small2">Phone Number</p>
                                <p className="bold bold2">+2349087654321</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="content2">
                                <p className="small small2">Address</p>
                                <p className="bold bold2 add">Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                                <p className='small small2 days-left'>Days Left: 
                                    <span className='bold bold2'>  30 days   
                                        <img src={circle} className='circle'/>
                                    </span> 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="content5">
                            <Link to=''>
                                <div className="contributors">
                                    <div className="icon">
                                        <img src={contributors} alt="icon" />
                                    </div>
                                    <p className="bold bold2">Contributors</p>
                                </div>
                            </Link>
                            <Link to=''>
                                <div className="share">
                                    <div className="icon">
                                        <img src={share} alt="icon" />
                                    </div>
                                    <p className="bold bold2">Share</p>
                                </div>
                            </Link>
                            <Button btnName='Save My Life' onClick={() => setModal(true)} btnClass='card-footer-btn' />
                        </div>
                    </div>
                </div>
            </div>
            {modal && <Modal setModal={setModal}/>}

        </>
    )
}

export default Details
