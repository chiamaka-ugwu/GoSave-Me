import React, { useState, useEffect } from "react";
import "./styles/profile.css";
import notice from "../../assets/images/notice.png";
import CircularProgress from "@mui/material/CircularProgress";

const Profile = ({ setPage, user }) => {
  const [loader, setLoader] = useState(false);

  return (
    <>
      {/* {console.log(user)} */}
      {loader == true && (
        <>
          <div className="modal" style={{ color: "#fff" }}>
            <CircularProgress color="inherit" />
          </div>
        </>
      )}

      <div className="dashboard">
        <div className="left left1">
          <div className="dashboard-links">
            <p
              onClick={() => {
                setPage(1);
              }}
              className="dashboard-link"
            >
              Dashboard
            </p>
            <p className="dashboard-link active-link">Profile</p>
            <p
              onClick={() => {
                setPage(3);
              }}
              className="dashboard-link"
            >
              Contact Details
            </p>
          </div>
        </div>
        <div className="right">
          <h3 className="h3">My Profile</h3>
          <div className="info-section">
            <img src={notice} alt="info" />
            <p>
              Hospital name, bank details, licence and registeration number can
              not be changed, if you would like to update your details kindly
              contact the support team.
            </p>
          </div>
          


          
          <div className="hosp-details">
            <div className="details1">
              <label for="hospital-name">Hospital Name</label>
              <input
                type="text"
                name="hospital-name"
                placeholder="Hospital Name"
                value={user.data.hospitalName}
                readOnly
              />
              <label for="CAC Reg No.">CAC Reg No.</label>
              <input
                type="tel"
                name="CAC Reg No."
                placeholder="CAC Reg No."
                value={user.data.CACRegNo}
                readOnly
              />

              <label for="Licence No.">Licence No.</label>
              <input
                type="tel"
                name="Licence No."
                placeholder="Licence No."
                value={user.data.licenseNo}
                readOnly
              />
            </div>
            <div className="details2">
              <label for="account-name">Account Name</label>
              <input
                type="text"
                name="account-name"
                placeholder="Hospital Name"
                value={user.data.accountName}
                readOnly
              />

              <label for="account-number">Account Number</label>
              <input
                type="text"
                name="account-number"
                placeholder="Account Number"
                value={user.data.accountNumber}
                readOnly
              />

              <label for="bank-name">Bank Name</label>
              <input
                type="text"
                name="bank-name"
                placeholder="Bank Name"
                value={user.data.bankName}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
