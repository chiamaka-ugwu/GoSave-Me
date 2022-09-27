import React, { useState } from 'react';
import Button from '../button/Button';
import './styles/modal3.css';
import Modal4 from './Modal4';


const Modal3 = ({setIsModal}) => {
    const [isModal2, setIsModal2] = useState(false);
    return (
        <>
            <div className="modal" onClick={() => setIsModal(false)}>
                <div className="modal-box modal-box2 modal-box3" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content3">
                        <h3>Forgot Password?</h3>
                        <p className="verification">A verification code has been sent to your email 
                            address and phone number. Please enter the code that was sent to you.
                        </p>
                        <div className="verification-code">
                            <input type="text" className='code' name="code" value='5' />
                            <input type="text" className='code' name="code"  />
                            <input type="text" className='code' name="code"  />
                            <input type="text" className='code' name="code"  />
                            <input type="text" className='code' name="code"  />
                            <input type="text" className='code' name="code"  />
                        </div>
                        <div className="form-btns form-btns2">
                            <a onClick={() => setIsModal(false)}>Cancel</a>
                            <Button onClick={() => setIsModal2(true)} btnName='Continue' btnClass='continue-btn' />
                        </div>
                    </div>
                </div>
            </div>        
            {isModal2 && <Modal4 setIsModal2={setIsModal2}/>}

        </>
    )
}

export default Modal3
