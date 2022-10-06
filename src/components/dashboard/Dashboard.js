import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import Card from "../card/Card";
import "./styles/dashboard.css";
import supabase from "../../config/supabase";

const Dashboard = () => {
    const newSupabase = supabase();
    const [User, setuser] = useState("");
    const user_data = newSupabase.auth.user();
    const Email = user_data.email;
    useEffect(()=>{
        getUser()
    })
  const getUser = () => {
    newSupabase
      .from("hospital")
      .select("*")
      .eq("email", Email)
      .then((res) => {
        console.log(res);
        // setuser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>  

      <div className="dashboard">
        <div className="left left1">
          <div className="dashboard-links">
            <Link to="/dashboard" className="dashboard-link">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="right">
          <h3 className="h3">My Patients</h3>
          <div className="my-patients">
            <div className="box">
              <Card className="card2" />
              <div className="box-group">
                <Button btnName="End Campaign" btnClass="dashboard-btn" />
                <Button btnName="Request Funds" btnClass="dashboard-btn" />
              </div>
            </div>
            <div className="box">
              <Card className="card2" />
              <div className="box-group">
                <Button btnName="End Campaign" btnClass="dashboard-btn" />
                <Button btnName="Request Funds" btnClass="dashboard-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
