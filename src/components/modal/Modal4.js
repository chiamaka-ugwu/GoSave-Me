import React, { useState } from 'react';
import './styles/modal4.css';
import Button from '../button/Button';
import Modal8 from './Modal8';


const Modal4 = ({setIsModal2}) => {
    const [open2, setOpen2] = useState(false);
    return (
        <>
            <div className="modal" onClick={() => setIsModal2(false)}>
                <div className="modal-box modal-box2" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        <h3>Reset Password</h3>
                        <h4 className='forgot-h4 forgoth4'>Enter new password</h4>
                        <form>
                            <input className='email-phone' type="password" placeholder='New Password' />
                            <input className='email-phone' type="password" placeholder='Confirm Password' />
                            <div className="form-btns">
                                <a onClick={() => setIsModal2(false)}>Cancel</a>
                                <Button onClick={() => setOpen2(true)} btnName='Reset Password' btnClass='continue-btn' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {open2 && 
                <Modal8 setOpen2={setOpen2} link='/dashboard' 
                    message='Password Reset Successfully'
                />
            }

        </>
    )
}

export default Modal4
