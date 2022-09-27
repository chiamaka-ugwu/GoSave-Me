import React, { useState, useEffect } from "react";
import "./styles/signup.css";
import login from "../../assets/images/Rectangle 70.png";
import Button from "../../components/button/Button";
import notice from "../../assets/images/notice.png";
import supabase from "../../config/supabase";
import "./styles/signup3.css";
import Pagetwo from "./Signup2";
import Pagethree from "./Signup3";

const Signup = () => {
  const supabse_conn = supabase();
  const [userData, setUserdata] = useState();

  const [data, setData] = useState({});

  // register to a public table

  const signUpForm = (otpTo, setIsModal) => {
    console.log("started");
    console.log(data);
    let otp = new Date().getTime().toString().substring(9, 13);
    supabse_conn
      .from("hospital")
      .select("email, phone")
      .or(
        `email.eq.${otpTo},phone.eq.${data.hospitalPhone},name.eq.${data.hospitalName}`
      )
      .then((selectRes) => {
        if (selectRes.error == null) {
          if (selectRes.data.length < 1) {
            supabse_conn
              .from("hospital")
              .insert({
                name: data.hospitalName,
                email: otpTo,
                phone: data.hospitalPhone,
                address: data.hospitalAddress,
                data,
                otp: otp,
              })
              .then((res) => {
                // make api call to send otp

                // if(res.error == null){
                //     if(res.data.length > 0){
                //         setIsModal(true)
                //     }
                // }
                setIsModal(true);
                console.log(res.data[0]);
                setUserdata(res.data[0]);
              })
              .catch((error) => {
                // add a custom sneakbar for error
                alert(error);
              });
          } else {
            alert("Email already used");
          }
        } else {
          alert("Error occured");
        }
        // console.log(selectRes);
        console.log("donex");
      });

    // // console.log(data)
  };

  // verify otp
  const verifyOTP = (otp, setOpen) => {
    // check if returned otp is == what the user typed
    if (userData.otp == otp) {
      setOpen(true);
    } else {
      alert("Invalid pin");
    }
  };

  // Finally signup user
  const signupFinally = (password, setOpen2) => {
    console.log("Started")
    let email = userData.email;
    supabse_conn.auth
      .signUp({
        email: email,
        password: password,
      })
      .then((response) => {
        supabse_conn.auth
          .signIn({
            email: email,
            password: password,
          })
          .then((res) => {
            if (res) {
              setOpen2(true);
              console.log("Done")
            }
          });
      })
      .catch((error) => {
        console.log(error)
        alert("Error occured");
      });
  };

  const [page, setpage] = useState(1);

  return (
    <>
      <div className="login signup">
        <div className="left">
          <form
            className="login-form signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              setpage(2);
            }}
          >
            {page == 1 && (
              <>
                <h4 className="signup-h4">Create an Account to Get Started</h4>
                <div className="notice-cont">
                  <img src={notice} alt="notice" />
                  <p className="notice-text">
                    In order to protect our life savers, only <b>Hospitals</b>{" "}
                    can create accounts and add patients. If you are an
                    individual, kindly contact the hospital administering
                    treatment for assistance.
                  </p>
                </div>
                <div className="linked-btns">
                  <button type="button" className="link-btn active">
                    1
                  </button>
                  <div className="line"></div>
                  <button type="button" className="link-btn">
                    2
                  </button>
                  <div className="line"></div>
                  <button type="button" className="link-btn">
                    3
                  </button>
                </div>
                <div>
                  <h4 className="title">Organisation Info</h4>
                  <h5 className="instruction">
                    Input details of your organisation
                  </h5>
                  <input
                    onChange={(e) => {
                      setData({
                        ...data,
                        hospitalName: e.target.value,
                      });
                    }}
                    required
                    value={data.hospitalName}
                    type="text"
                    name="hospital-name"
                    className="login-input"
                    placeholder="Hospital Name"
                  />
                  <input
                    onChange={(e) => {
                      setData({
                        ...data,
                        hospitalEmail: e.target.value,
                      });
                    }}
                    value={data.hospitalEmail}
                    type="email"
                    name="hospital-email"
                    className="login-input"
                    placeholder="Email Address"
                  />
                  <input
                    onChange={(e) => {
                      setData({
                        ...data,
                        hospitalPhone: e.target.value,
                      });
                    }}
                    value={data.hospitalPhone}
                    type="tel"
                    name="hospital-phone"
                    className="login-input"
                    placeholder="Phone"
                  />
                  <input
                    onChange={(e) => {
                      setData({
                        ...data,
                        hospitalAddress: e.target.value,
                      });
                    }}
                    value={data.hospitalAddress}
                    type="text"
                    name="hospital-address"
                    className="login-input"
                    placeholder="Address"
                  />
                  <input
                    onChange={(e) => {
                      setData({
                        ...data,
                        CACRegNo: e.target.value,
                      });
                    }}
                    value={data.CACRegNo}
                    type="text"
                    name="CAC Reg No."
                    className="login-input"
                    placeholder="CAC Reg No."
                  />
                  <input
                    onChange={(e) => {
                      setData({
                        ...data,
                        licenseNo: e.target.value,
                      });
                    }}
                    value={data.licenseNo}
                    type="text"
                    name="Licence No."
                    className="login-input"
                    placeholder="Licence No."
                  />
                  <div className="login-btn-cont signup-cont">
                    <Button btnName="Continue" btnClass="continue-btn" />
                  </div>
                </div>
              </>
            )}
            {/* page two */}
            {page == 2 && (
              <>
                <Pagetwo data={data} setData={setData} action={setpage} />
              </>
            )}
          </form>
          {/* page three */}
          {page == 3 && (
            <>
              <Pagethree
                data={data}
                setData={setData}
                signUpForm={signUpForm}
                action={setpage}
                verifyOTP={verifyOTP}
                signupFinally={signupFinally}
              />
            </>
          )}
        </div>
        <div className="right">{/* <img src={login} alt="login" /> */}</div>
      </div>
    </>
  );
};

export default Signup;
