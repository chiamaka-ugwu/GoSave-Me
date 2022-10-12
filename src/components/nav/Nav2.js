import React, { useState } from "react";
import logo from "../../assets/images/GoSave Me.png";
import { Link } from "react-router-dom";
import './styles/nav2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons'


const Nav2 = () => {
    const [isopen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isopen);

    return (
        <>
            <nav className='nav2 nav3'>
                <div className="nav-content">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div id="menu" onClick={toggle}><FontAwesomeIcon icon={isopen ? faClose : faBars} size="lg"  /></div>
                </div>
                
            </nav>
        </>
    )
}

export default Nav2
