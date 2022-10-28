import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../card/Card";
import "./styles/dashboard.css";
import supabase from "../../config/supabase";
import Profile from "./Profile";
import ContactDetails from "./ContactDetails";
import { CircularProgress } from "@mui/material";


const Dashboard = () => {
  const newSupabase = supabase();
  const navigateTo = useNavigate();
  const [user, setuser] = useState("");
  const [loader, setloader] = useState();
  const [patientData, setPatientData] = useState([]);
  const user_data = newSupabase.auth.user();
  let Email = ""
  if (user_data == null) {
    navigateTo("/");
  } else {
     Email = user_data.email;
  }

  const [load, setLoad] = useState(false);


  const fetch = () => {
    setLoad(true);
    newSupabase
      .from("patients")
      .select("*")
      .eq("hospital", user.id)
      .then((res) => {
        if (res.error !== null) {
          // alert(res.error.message);
        } else {
          if (res.data.length > 0) {
            setPatientData(res.data);
            setLoad(false);
          } else {
            setPatientData([]);
            setLoad(false);

          }
        }
        // setloader(false);
      })
      .catch((error) => {
        setLoad(false);
      });
  };

  useEffect(() => {
    getUser();
    fetch();
    // console.log(user);
  },[]);
  const getUser = () => {
    // setloader(true);
    newSupabase
      .from("hospital")
      .select("*")
      .eq("email", Email)
      .then((res) => {
        // console.log(res);
        setuser(res.data[0]);
        // setloader(false);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const patients = () => {
    if (patientData.length < 1) {
      return <>{/* <span>No data found</span> */}</>;
    } else {
      return patientData.map((e) => {
        return (
          <>
            <div className="box">
              <Card
                className="card2"
                data={e}
                edit={true}
                loader={loader}
                setloader={setloader}
                supabase={newSupabase}
              />
            </div>
          </>
        );
      });
    }
  };

  const [page, setPage] = useState(1);

  return (
    <>
      {/* {console.log(user_data)} */}
      {load == true && (
        <>
          <div className="modal" style={{ color: "#fff" }}>
            <CircularProgress color="inherit" />
          </div>
        </>
      )}
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
          <ContactDetails user={user} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default Dashboard;
