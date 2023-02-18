import React, { useState } from "react";
import "./styles/nav.css";
import logo from "../../assets/images/GoSave Me.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import supabase from "../../config/supabase";

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

  const newSupabase = supabase();
  const user_data = newSupabase.auth.user();
  const navigate = useNavigate();

  const logOut = () => {
    newSupabase.auth
    .signOut()
    .then(() => {
        navigate('/');
    })
    .catch((error) => {
        console.log(error)
    });
  }


  return (
    <>
      <nav className={`nav ${className}`} id={id}>
        <div className="nav-content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav-links desktop">
            <li>
              <Link
                to="/donate"
                className={`nav-item ${donate}`}
                onClick={toggle}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className={`nav-item ${works}`}
                onClick={toggle}
              >
                How It Works
              </Link>
            </li>
            <li
              className={`nav-item account ${account}`}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faUser} className="person" />
              Account
              <FontAwesomeIcon icon={faAngleDown} className="arrow" />
            </li>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
            >
              {user_data == null ? <>
                <MenuItem onClick={handleClose}>
                    <Link to="/login" className="droplink">
                        Log In
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/signup" className="droplink">
                        Sign Up
                    </Link>
                </MenuItem>
              </> : <>
              <MenuItem onClick={handleClose}>
                    <Link to="/dashboard" className="droplink">
                        Dashboard
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <span className="droplink" onClick={()=>{logOut()}}>
                        Log Out
                    </span>
                </MenuItem>
              </>}
            </Menu>
            <li>
              <Link to="/add-patient" onClick={toggle}>
                <Button btnClass="add-patient-btn" btnName="Add Patient" />
              </Link>
            </li>
          </ul>

          <ul className={isopen ? "nav-links " : "mobile"}>
            <li>
              <Link
                to="/donate"
                className={`nav-item ${donate}`}
                onClick={toggle}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className={`nav-item ${works}`} onClick={toggle}>
                How It Works
              </Link>
            </li>
            <li
              className="nav-item"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faUser} className="person" />
              Account
              <FontAwesomeIcon icon={faAngleDown} className="arrow" />
            </li>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
            >
              {user_data == null ? <>
                <MenuItem onClick={handleClose}>
                    <Link to="/login" className="droplink">
                        Log In
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/signup" className="droplink">
                        Sign Up
                    </Link>
                </MenuItem>
              </> : <>
              <MenuItem onClick={handleClose}>
                    <Link to="/dashboard" className="droplink">
                        Dashboard
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <span className="droplink" onClick={()=>{logOut()}}>
                        Log Out
                    </span>
                </MenuItem>
              </>}
            </Menu>
            <li>
              <Link to="/add-patient" onClick={toggle}>
                <Button btnName="Add Patient" />
              </Link>
            </li>
          </ul>
          <div id="menu" onClick={toggle}>
            <FontAwesomeIcon icon={isopen ? faClose : faBars} size="lg" />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
