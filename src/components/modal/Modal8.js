import React from 'react';
import icon from '../../assets/images/success.png';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Modal8 = ({setOpen2,  message}) => {
    return (
        <>
            <div className="modal" onClick={() => setOpen2(false)}>
                <div className="modal-box modal-box2" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content modal8">
                        <h3>You are all set!</h3>
                        <h4 className='success' style={{textAlign:"center"}}>{message}</h4>
                        <div className="success-cont">
                            <img src={icon} alt="success" />
                        </div>
                        <div className="form-btns form-btns8">
                            {/* <a onClick={() => setOpen2(false)}>Cancel</a> */}
                            <Link to="/dashboard">
                                <Button btnName='Done' btnClass='continue-btn' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal8
