import React, { useState } from "react";
import { Link } from "react-router-dom";
import FundRequest from "./FundRequest";
import Overview from "./Overview";
import Patients from "./Patients";
import "./styles/admin-dashboard.css";

const AdminDashboard = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      {page == 1 && (
        <div className="dashboard admin">
          <div className="left left2">
            <div className="dashboard-links admin-links">
              <p className="dashboard-link link-active admin-link">Hospital</p>
              <p
                onClick={() => {
                  setPage(2);
                }}
                className="dashboard-link link2 admin-link"
              >
                Overview
              </p>
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
            <h3 className="db-h3">Hospital Database</h3>
            <div className="table-container">
              <table>
                <tr>
                  <th>Hospital Name</th>
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Bank Name</th>
                  <th>Account Number</th>
                </tr>
                <tr>
                  <td>St Martin's Hospital</td>
                  <td>08012345678</td>
                  <td>stmartins@gmail.com</td>
                  <td>First Bank PLC</td>
                  <td>10234567890</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
      {page == 2 && (
        <>
          <Overview setPage={setPage} />
        </>
      )}
      {page == 3 && (
        <>
          <FundRequest setPage={setPage} />
        </>
      )}
      {page == 4 && (
        <>
          <Patients setPage={setPage} />
        </>
      )}
    </>
  );
};

export default AdminDashboard;
