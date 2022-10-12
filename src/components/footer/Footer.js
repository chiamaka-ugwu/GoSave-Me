import React from 'react';
import './styles/footer.css';
import logo from '../../assets/images/GoSave Me.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="logo2">
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="links2">
                        <ul>
                            <li>
                                <Link to="/add-patient">Add Patient</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/how-it-works">How It Works</Link>
                            </li>
                            <li>
                                <Link to="/donate">Donate</Link>
                            </li>
                        </ul>
                        <ul>
                        <li>
                                <Link to="">Facebook</Link>
                            </li>
                            <li>
                                <Link to="">Instagram</Link>
                            </li>
                            <li>
                                <Link to="">Twitter</Link>
                            </li>
                            <li>
                                <Link to="">LinkedIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
