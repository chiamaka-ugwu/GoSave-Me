import React, { useState } from "react";
import "./styles/modal5.css";
import Button from "../button/Button";
import Modal6 from "./Modal6";

const Modal5 = ({ setOpenModal, data, setData, setOtpTo, otpTo,signUpForm,verifyOTP, signupFinally }) => {
  const [ismodal, setIsModal] = useState(false); 
  return (
    <>
      <div className="modal" onClick={() => setOpenModal(false)}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content3">
            <h3>Account Verification</h3>
            <p className="verification ver2">
              A verification code has been sent to your email address and phone
              number. Please enter the code that was sent to you.
            </p>
            <form className="modal5-form"
             onSubmit={(e) => {
                e.preventDefault()  
                // setData({
                //     ...data,
                //     sendOtpTo:otpTo
                // })

                signUpForm(otpTo,setIsModal) 
                // setIsModal(true)

              }}
              >
              <div className="radio-group">
                <input
                  onChange={(e) => {
                    setOtpTo(e.target.value);
                    // console.log(otpTo);
                  }}
                  className="checkbox"
                  type="radio"
                  name="orgEmail"
                  value={data.hospitalEmail}
                />
                <p>Organisation Email address and Phone number</p>
              </div>
              <div className="radio-group">
                <input
                  onChange={(e) => {
                    setOtpTo(e.target.value);
                    // console.log(otpTo);
                  }}
                  className="checkbox"
                  type="radio"
                  name="orgEmail"
                  value={data.directorEmail}
                />
                <p>Person of contact Email address and Phone number</p>
              </div>
              <div className="form-btns form-btns5">
                <a onClick={() => setOpenModal(false)}>Cancel</a>
                <Button
                    type="submit"
                    btnName="Continue"
                    btnClass="continue-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
        {ismodal && (
            <Modal6 signupFinally={signupFinally} verifyOTP={verifyOTP} data={data} setData={setData} setIsModal={setIsModal} />
        )}
    </>
  );
};

export default Modal5;
