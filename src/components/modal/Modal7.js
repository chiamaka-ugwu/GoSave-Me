import React, { useState } from "react";
import Button from "../button/Button";
import Modal8 from "./Modal8";

const Modal7 = ({ setOpen, signupFinally }) => {
  const [open2, setOpen2] = useState(false);
  const [password, setpassword] = useState({});
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
              <input
                onChange={(e) => {
                  setpassword({
                    ...password,
                    one: e.target.value,
                  });
                }}
                value={password.one}
                className="email-phone"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <input
                onChange={(e) => {
                  setpassword({
                    ...password,
                    two: e.target.value,
                  });
                }}
                value={password.two}
                className="email-phone"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
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
          link="/dashboard"
          message="Your account has been created successfully"
        />
      )}
    </>
  );
};

export default Modal7;
