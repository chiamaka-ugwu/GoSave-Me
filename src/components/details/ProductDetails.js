import React, { useState, useEffect } from "react";
import Details from "./Details";
import "./styles/prod-details.css";
import SearchBar from "../search-bar/SearchBar";
import Card from "../card/Card";
import { Link, useParams } from "react-router-dom";
import supabase from "../../config/supabase";
import { CircularProgress } from "@mui/material";

const ProductDetails = () => {
  const { userID } = useParams();
  const newSupabase = supabase();
  const [patientData, setPatientData] = useState(null);
  const [location, setLocation] = useState([]);
  const [random_patients, setrandom_patients] = useState([]);
  const [loading, setloader] = useState(false);

  const fetch = () => {
    newSupabase
      .from("patients")
      .select(`*, contributors(*)`)
      // .eq("id", userID)
      .then((res) => {
        // get actual user
        // console.log(res)
        const actual_user = res.data.filter((e) => e.id == userID)[0];
        setPatientData(actual_user);

        // get all patients in same location
        const same_location = res.data.filter(
          (e) =>
            e.patientData.patientLocation ==
            actual_user.patientData.patientLocation
        );

        // filter out actual patient
        const filtered_patient = same_location.filter(
          (e) => e.patientData.id != actual_user.patientData.id
        );
        setLocation(filtered_patient);

        // filter random patients
        const random_patient = res.data.filter((e) => e.id != actual_user.id);
        setrandom_patients(random_patient);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetch();
  });

  const Location_patients = () => {
    return location.map((e) => {
      return (
        <>
          <article>
            <Card className="prod-card" data={e} />
          </article>
        </>
      );
    });
  };

  const random_patients_function = () => {
    return random_patients.map((e) => {
      return (
        <>
          <article>
            <Card className="prod-card" data={e} />
          </article>
        </>
      );
    });
  };

  return (
    <>
      {/* {console.log(random_patients)} */}
      <div className="prod-details">
        <div className="prod-left">
          {loading == true ? (
            <>
              <div className="modal" style={{ color: "#fff" }}>
                <CircularProgress color="inherit" />
              </div>
            </>
          ) : (
            <>
              {patientData ? (
                <>
                  <Details data={patientData} />
                </>
              ) : (
                <>
                  <div className="modal" style={{ color: "#fff" }}>
                    <CircularProgress color="inherit" />
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="prod-right">
          <SearchBar container="search-right" bar="bar2 bar3" btn="sub-btn" />
          <div className="prod-right2">
            {/* <h4>Patients with similar illness</h4>
            <article>
              <Card className='prod-card' />
              </article> */}


            {loading == true ? (
              <>
                <div className="modal" style={{ color: "#fff" }}>
                  <CircularProgress color="inherit" />
                </div>
              </>
            ) : (
              <>
                {location.length > 0 ? (
                  <>
                    <h4>Patients in the same location </h4>
                    <article>{Location_patients()}</article>
                  </>
                ) : (
                  <>
                    <h4>View other patients:</h4>
                    <article>{random_patients_function()}</article>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
