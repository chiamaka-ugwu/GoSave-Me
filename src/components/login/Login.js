import React, { useState } from "react";
import "./styles/login.css";
import login from "../../assets/images/Rectangle 70.png";
import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import Modal2 from "../modal/Modal2";
import supabase from "../../config/supabase";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";


const initialFormData = {
  email: "",
  password: "",
};

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const supabse_conn = supabase();
  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    // e.preventDefault();
    setLoader(true);
    supabse_conn.auth
      .signIn({
        email: formData.email,
        password: formData.password,
      })
      .then((data) => {
        console.log(data);
        if (data.data == null) {
          alert(data.error.message);
          setLoader(false);
        } else {
          setLoader(false);
          navigate("/dashboard");
        }
      })
      .catch((e) => {
        console.log(e);
        setLoader(false);
      });
    // console.log(supabase())
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      {loader == true && (
        <div className="modal" style={{ color: "#fff" }}>
          <CircularProgress color="inherit" />
        </div>
      )}

      <div className="login">
        <div className="left">
          <div className="login-form">
            <h3>Log In</h3>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleOnchange}
            />
            <div className="password-group">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                className="login-input"
                placeholder="Password"
                value={formData.password}
                onChange={handleOnchange}
              />
              <FontAwesomeIcon className="eye" onClick={togglePasswordVisiblity} icon={passwordShown ? faEye : faEyeSlash} />
            </div>
            <div className="login-btn-cont">
              {/* <Link to='/dashboard'> */}
              <Button
                onClick={() => {
                  handleSumbit();
                }}
                type="button"
                btnName="Login"
                btnClass="login-btn"
              />
              {/* </Link> */}
            </div>
            <p className="login-text" onClick={() => setModal(true)}>
              Forgot password?
            </p>
            <p className="login-text">
              {" "}
              <span className="do">Do not have an account?</span>
              <Link to="/signup">Sign Up</Link>{" "}
            </p>
          </div>
        </div>
        <div className="right">
          <img src={login} alt="login" />
        </div>
      </div>
      {modal && <Modal2 setModal={setModal} />}
    </>
  );
};

export default Login;
