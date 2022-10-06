import React, { useState} from 'react';
import './styles/modal2.css';
import Button from '../button/Button';
import Modal3 from './Modal3';

const Modal2 = ({setModal}) => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <div className="modal" onClick={() => setModal(false)}>
                <div className="modal-box modal-box2" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        <h3>Forgot Password?</h3>
                        <h4 className='forgot-h4'>Enter either:</h4>
                        <p className="forgot-p">Your organisation email address or phone number</p>
                        <h4 className='forgot-h4'>Or</h4>
                        <p className="forgot-p">Your person of contact email address or phone number</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input className='email-phone' type="text" placeholder='Email address / Phone number' />
                            <div className="form-btns">
                                <a onClick={() => setModal(false)}>Cancel</a>
                                <Button onClick={() => setIsModal(true)} btnName='Continue' btnClass='continue-btn' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {isModal && <Modal3 setIsModal={setIsModal}/>}

        </>
    )
}

export default Modal2
