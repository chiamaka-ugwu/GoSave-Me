import React, { useState } from 'react';
import Button from '../button/Button';
import Modal7 from './Modal7';


const Modal6 = ({setIsModal, data, setData, signUpForm, verifyOTP, signupFinally }) => {
    const [open, setOpen] = useState(false)
    const [otp, setotp] = useState() // set otp
    return (
        <>
            <div className="modal" onClick={() => setIsModal(false)}>
                <div className="modal-box modal-box2" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content3">
                        <h3>Account Verification</h3>
                        <p className="verification">A verification code has been sent to your email 
                            address and phone number. Please enter the code that was sent to you.
                        </p>
                        <div className="verification-code">
                            <input 
                                onChange={(e) => {
                                    setotp(e.target.value) 
                                }}
                                value={otp}
                                type="tel" 
                                className='ver-input' 
                                name="code" 
                            />
                        </div>
                        <div className="form-btns form-btns2 form-btns6">
                            <a onClick={() => setIsModal(false)}>Cancel</a>
                            <Button onClick={() => {
                                verifyOTP(otp, setOpen)  
                            }} btnName='Continue' btnClass='continue-btn' />
                        </div>
                    </div>
                </div>
            </div>
            {open && <Modal7 signupFinally={signupFinally} signUpForm={signUpForm} setOpen={setOpen} data={data} setData={setData} />}
        </>  
    )          
}

export default Modal6
