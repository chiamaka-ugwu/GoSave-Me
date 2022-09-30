import React, { useState } from "react";
import "./styles/nav.css";
import logo from "../../assets/images/GoSave Me.png";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import person from "../../assets/images/person.png";
import arrow from "../../assets/images/arrow.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons'


const Nav = ({ className, donate, works, account, id }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [isopen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isopen);

    return (
        <>
            <nav className={`nav ${className}`} id={id}>
                <div className="nav-content">
                    <div className="logo">
                        <Link to="/">
                        <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="nav-links false">
                        <li>
                            <Link to="/donate" className={`nav-item ${donate}`} onClick={toggle}>
                                Donate
                            </Link>
                        </li>
                        <li>
                        <Link to="/admin-dashboard" className={`nav-item ${works}`} onClick={toggle}>
                            How It Works
                        </Link>
                        </li>
                        <li className="nav-item account"
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick} >
                            <img src={person} alt="person" className='person' />
                            Account
                            <img src={arrow} alt="arrow" className='arrow' />
                        </li>
                            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{"aria-labelledby": "basic-button",}}>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/login' className="droplink">Log in</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/signup' className="droplink">Sign up</Link>
                                </MenuItem>
                            </Menu>
                        <li>
                            <Link to="/add-patient" onClick={toggle}>
                                <Button btnName="Add Patient" />
                            </Link>
                        </li>
                    </ul>


                    <ul className={isopen ? "nav-links " : "none"}>
                        <li>
                            <Link to="/donate" className={`nav-item ${donate}`} onClick={toggle}>
                                Donate
                            </Link>
                        </li>
                        <li>
                            <Link to="" className={`nav-item ${works}`} onClick={toggle}>
                                How It Works
                            </Link>
                        </li>
                        <li className="nav-item"
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick} >
                            <img src={person} alt="person" className='person' />
                            Account
                            <img src={arrow} alt="arrow" className='arrow' />
                        </li>
                            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{"aria-labelledby": "basic-button",}}>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/login'>Log in</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/signup'>Sign up</Link>
                                </MenuItem>
                            </Menu>
                        <li>
                            <Link to="/add-patient" onClick={toggle}>
                                <Button btnName="Add Patient" />
                            </Link>
                        </li>
                    </ul>
                    <div id="menu" onClick={toggle}><FontAwesomeIcon icon={isopen ? faClose : faBars} size="lg"  /></div>
                </div>
            </nav>
        </>
    );
};
export default Nav;
