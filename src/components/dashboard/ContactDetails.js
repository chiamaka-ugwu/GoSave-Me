import React from "react";
import "./styles/contact-details.css";

const ContactDetails = ({ setPage, user }) => {
  return (
    <>
      {/* {console.log(user)} */}
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
            <p
              onClick={() => {
                setPage(2);
              }}
              className="dashboard-link"
            >
              Profile
            </p>
            <p className="dashboard-link  active-link">Contact Details</p>
          </div>
        </div>
        <div className="right">
          <h3 className="h3">Contact Details</h3>
          <div className="hosp-details hosp-details2">
            <div className="details1">
              <label for="hospital-email">Hospital Email Address</label>
              <input
                type="text"
                name="hospital-email"
                placeholder="Hospital Email Address"
                value={user.data.hospitalEmail}
                readOnly
              />

              <label for="hospital-phone">Hospital Phone number</label>
              <input
                type="tel"
                name="hospital-phone"
                placeholder="Hospital Phone number"
                value={user.data.hospitalPhone}
                readOnly
              />

              <label for="person-email">Person of contact Email Address</label>
              <input
                type="email"
                name="person-email"
                placeholder="Person of contact Email Address"
                value={user.data.directorEmail}
                readOnly
              />

              <label for="person-phone">Person of contact Phone Number</label>
              <input
                type="tel"
                name="person-phone"
                placeholder="Person of contact Phone Number"
                value={user.data.directorPhoneNo}
                readOnly
              />
            </div>
            <div className="details2">
              <label for="account-name">Website</label>
              <input
                type="url"
                name="website"
                placeholder="Organisation Website  URL"
                value={user.data.orgURL}
                readOnly
              />

              <label for="Facebook Page">Facebook Page</label>
              <input
                type="text"
                name="Facebook Page"
                placeholder="Facebook Page"
                value={user.data.facebook}
                readOnly
              />

              <label for="Instagram handle">Instagram handle</label>
              <input
                type="text"
                name="Instagram handle"
                placeholder="Instagram handle"
                value={user.data.instagram}
                readOnly
              />

              <label for="Twitter handle">Twitter handle</label>
              <input
                type="text"
                name="Twitter handle"
                placeholder="Twitter handle"
                value={user.data.twitter}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
