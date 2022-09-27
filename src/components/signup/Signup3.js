import React, { useState, useEffect } from "react";
import "./styles/signup3.css";
import Button from "../../components/button/Button";
import notice from "../../assets/images/notice.png";
import Modal5 from "../modal/Modal5";

const Signup3 = ({ action, data, setData, signUpForm ,verifyOTP,signupFinally}) => {
  // window.scroll(0, 0)
  // useEffect(()=>{
  //     console.log(data)
  // }, [])
  const [openModal, setOpenModal] = useState(false);
  const [otpTo, setOtpTo] = useState()
  return (
    <>
      <form
        className="login-form signup-form"
        onSubmit={(e) => {
            e.preventDefault();
            setOpenModal(true);
        //   signUpForm();
        }}
      >
        <h4 className="signup-h4">Create an Account to Get Started</h4>
        <div className="notice-cont">
          <img src={notice} alt="notice" />
          <p className="notice-text">
            In order to protect our life savers, only <b>Hospitals</b> can
            create accounts and add patients. If you are an individual, kindly
            contact the hospital administering treatment for assistance.
          </p>
        </div>
        <div className="linked-btns">
          <button type="button" className="link-btn active">
            1
          </button>
          <div className="line active"></div>
          <button type="button" className="link-btn active">
            2
          </button>
          <div className="line active"></div>
          <button type="button" className="link-btn active">
            3
          </button>
        </div>
        <h4 className="title">Person of Contact Info</h4>
        <h5 className="instruction inst2">
          Input details of your organisation's person of contact most preferably
          the medical director
        </h5>
        <input
          onChange={(e) => {
            setData({
              ...data,
              medicalDirector: e.target.value,
            });
          }}
          value={data.medicalDirector}
          type="text"
          name="medical-director"
          className="login-input"
          placeholder="Name Of Medical Director"
        />
        <input
          onChange={(e) => {
            setData({
              ...data,
              directorEmail: e.target.value,
            });
          }}
          value={data.directorEmail}
          type="email"
          name="directorEmail"
          className="login-input"
          placeholder="Email Address of Medical Director"
        />
        <input
          onChange={(e) => {
            setData({
              ...data,
              directorPhoneNo: e.target.value,
            });
          }}
          value={data.directorPhoneNo}
          type="tel"
          name="directorPhone"
          className="login-input"
          placeholder="Phone Number of Medical Director"
        />
        <div className="signup-btn-cont3">
          <p onClick={() => action(2)} className="prev">
            Previous
          </p>
          <Button type="submit" btnName="Submit" btnClass="continue-btn2" />
        </div>
      </form>
      {openModal && (
        <Modal5 signupFinally={signupFinally} setOpenModal={setOpenModal} verifyOTP={verifyOTP} data={data} setData={setData} setOtpTo={setOtpTo} otpTo={otpTo} signUpForm={signUpForm} />
      )}
    </>
  );
};

export default Signup3;
