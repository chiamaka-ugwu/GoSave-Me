import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Card from "../card/Card";
import "./styles/dashboard.css";
import supabase from "../../config/supabase";
import Profile from "./Profile";
import ContactDetails from "./ContactDetails";

const Dashboard = () => {
  const newSupabase = supabase();
  const [user, setuser] = useState("");

  const [patientData, setPatientData] = useState([]);

  const user_data = newSupabase.auth.user();
  const Email = user_data.email;

  const fetch = () => {
    newSupabase
      .from("patients")
      .select("*")
      .then((res) => {
        setPatientData(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getUser();
    fetch();
    // console.log(user_data);
  });
  const getUser = () => {
    newSupabase
      .from("hospital")
      .select("*")
      .eq("email", Email)
      .then((res) => {
        // console.log(res);
        setuser(res.data[0]);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const patients = () => {
    return patientData.map((e) => {
      return (
        <>
          <div className="box">
            <Card className="card2" data={e} edit={true} />
          </div>
        </>
      );
    });
  };

  const [page, setPage] = useState(1);

  return (
    <>
      {page == 1 && (
        <div className="dashboard">
          <div className="left left1">
            <div className="dashboard-links">
              <p className="dashboard-link active-link">Dashboard</p>
              <p
                onClick={() => {
                  setPage(2);
                }}
                className="dashboard-link"
              >
                Profile
              </p>
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
            <h3 className="h3">My Patients</h3>
            <div className="my-patients">
              {patients()}
              {/* <div className="box"> 
              <div className="box-group">
                <Button btnName="End Campaign" btnClass="dashboard-btn" />
                <Button btnName="Request Funds" btnClass="dashboard-btn" />
              </div>
            </div>  */}
            </div>
          </div>
        </div>
      )}
      {page == 2 && (
        <>
          <Profile user={user} setPage={setPage} />
        </>
      )}
      {page == 3 && (
        <>
          <ContactDetails setPage={setPage} />
        </>
      )}
    </>
  );
};

export default Dashboard;
