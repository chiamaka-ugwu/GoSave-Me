import React, { useState } from "react";
import Button from "../button/Button";
import Modal8 from "./Modal8";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Modal7 = ({ setOpen, signupFinally }) => {
  const [open2, setOpen2] = useState(false);
  const [password, setpassword] = useState({});

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <div className="modal" onClick={() => setOpen(false)}>
        <div
          className="modal-box modal-box2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <h3>Create Password</h3>
            <h4 className="forgot-h4 forgoth4"></h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (password.one !== password.two) {
                  // show error msg
                } else {
                  signupFinally(password.one, setOpen2);
                }
              }}
            >
              <div className="password-group">
                <input
                  onChange={(e) => {
                    setpassword({
                      ...password,
                      one: e.target.value,
                    });
                  }}
                  value={password.one}
                  className="email-phone"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                />
                <FontAwesomeIcon
                  className="eye"
                  onClick={togglePasswordVisiblity}
                  icon={passwordShown ? faEye : faEyeSlash}
                />
              </div>
              <div className="password-group">
                <input
                  onChange={(e) => {
                    setpassword({
                      ...password,
                      two: e.target.value,
                    });
                  }}
                  value={password.two}
                  className="email-phone"
                  type={passwordShown ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <FontAwesomeIcon
                  className="eye"
                  onClick={togglePasswordVisiblity}
                  icon={passwordShown ? faEye : faEyeSlash}
                />
              </div>
              <div className="form-btns form-btns7">
                <a onClick={() => setOpen(false)}>Cancel</a>
                <Button
                  // onClick={() =>
                  //     // setOpen2(true)
                  //     signUpForm()
                  // }
                  btnName="Sign Up"
                  btnClass="continue-btn"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {open2 && (
        <Modal8
          setOpen2={setOpen2}
          link="/"
          message="Your account has been created successfully. Our team will reach out to you after verification."
        />
      )}
    </>
  );
};

export default Modal7;
