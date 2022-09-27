import React, { useState } from 'react';
import './styles/login.css';
import login from '../../assets/images/Rectangle 70.png';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import Modal2 from '../modal/Modal2';

const Login = () => {
    const [modal, setModal] = useState(false);


    return (
        <>
            <div className="login">
                <div className="left">
                    <form className='login-form'>
                        <h3>Log In</h3>
                        <input type="text" name='hospital-name' className='login-input' placeholder='Name Of Hopital' />
                        <input type="text" name='hospital-email' className='login-input' placeholder='Email Address' />
                        <div className="login-btn-cont">
                            <Link to='/dashboard'>
                                <Button btnName='Login' btnClass='login-btn' />
                            </Link>
                        </div>
                        <p className='login-text' onClick={() => setModal(true)}>Forgot password?</p>
                        <p className='login-text'> <span>Do not have an account?</span><Link to='/signup'>Sign Up</Link> </p>
                    </form>
                </div>
                <div className="right">
                    <img src={login} alt="login" />
                </div>
            </div>
            {modal && <Modal2 setModal={setModal}/>}


        </>
    )
}

export default Login
