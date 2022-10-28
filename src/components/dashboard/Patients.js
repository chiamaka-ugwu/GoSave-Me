import React from "react";

const Patients = ({ setPage }) => {
  return (
    <>
      <div className="dashboard admin">
        <div className="left left2">
          <div className="dashboard-links admin-links">
            <p
              onClick={() => {
                setPage(1);
              }}
              className="dashboard-link link2 admin-link"
            >
              Hospital
            </p>
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
            <p className="dashboard-link link-active admin-link">Patients</p>
          </div>
        </div>
        <div className="right">
          <h3 className="db-h3">Patients Database</h3>
          <div className="table-container">
            <table>
              <tr>
                <th>Patients Name</th>
                <th>Next of Kin</th>
                <th>Next of Kin's contact</th>
                <th>Hospital Name</th>
                <th>Amount Needed</th>
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
    </>
  );
};

export default Patients;
