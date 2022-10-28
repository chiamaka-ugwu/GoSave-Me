import React from "react";
import { Link } from "react-router-dom";
import "./styles/admin-dashboard.css";

const Overview = ({ setPage }) => {
  return (
    <>
      <div className="dashboard admin">
        <div className="left">
          <div className="dashboard-links admin-links">
            <p
              onClick={() => {
                setPage(1);
              }}
              className="dashboard-link link2 admin-link"
            >
              Hospital
            </p>
            <p className="dashboard-link link-active admin-link">Overview</p>
            <p
              onClick={() => {
                setPage(3);
              }}
              className="dashboard-link link2 admin-link"
            >
               Requests
            </p>
            <p
              onClick={() => {
                setPage(4);
              }}
              className="dashboard-link link2 admin-link"
            >
              Patients
            </p>
          </div>
        </div>
        <div className="right">
          <div className="campaign-cont">
            <h4>Campaign Summary</h4>
            <div className="campaign">
              <div className="summary-box">
                <h5>Number of Hospitals</h5>
                <h2>100</h2>
              </div>
              <div className="summary-box">
                <h5>Number of Active Campaigns</h5>
                <h2>100</h2>
              </div>
              <div className="summary-box">
                <h5>Total Amount Raised</h5>
                <h2>₦10,000,000</h2>
              </div>
              <div className="summary-box">
                <h5>Total Amount Targeted</h5>
                <h2>₦10,000,000</h2>
              </div>
            </div>
          </div>
          <div className="campaign-cont">
            <h4>Donation Summary</h4>
            <div className="campaign">
              <div className="summary-box">
                <h5>GoSave Me team</h5>
                <h2>₦10,000,000</h2>
              </div>
              <div className="summary-box">
                <h5>Patient Out Reach</h5>
                <h2>₦10,000,000</h2>
              </div>
              <div className="summary-box">
                <h5>Medical Research</h5>
                <h2>₦10,000,000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
