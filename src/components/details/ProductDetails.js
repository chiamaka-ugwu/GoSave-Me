import React, { useState, useEffect } from "react";
import Details from "./Details";
import "./styles/prod-details.css";
import SearchBar from "../search-bar/SearchBar";
import Card from "../card/Card";
import { Link, useParams } from "react-router-dom";
import supabase from "../../config/supabase";

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
      .select("*")
      // .eq("id", userID)
      .then((res) => {
        // get actual user
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
        const random_patient = res.data.filter(
          (e) => e.id != actual_user.id
        );
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
            <Card className='prod-card' data={e} />
        </article> 
        </>
      );
    });
  };

  return (
    <>
      {console.log(random_patients)}
      <div className="prod-details">
        <div className="prod-left">
          {patientData ? (
            <>
              <Details data={patientData} />
            </>
          ) : (
            <>
              <span>Loading.....</span>
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

            <h4>Patients in the same location </h4>

            {loading == true ? (
              <>
                <span>Loading.....</span>
              </>
            ) : (
              <>
                {location.length > 0 ? (
                  <>
                    <article>{Location_patients()}</article>
                  </>
                ) : (
                  <>
                    <h4>No patient in same location</h4>
                  <span>Other Patients</span>
                    {random_patients_function()}
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
