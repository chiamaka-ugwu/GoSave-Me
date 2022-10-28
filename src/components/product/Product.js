import React, { useEffect, useState } from "react";
import "./styles/product.css";
import Card from "../card/Card";
import supabase from "../../config/supabase";
import { CircularProgress } from "@mui/material";

const Product = () => {
  const supabase_conn = supabase();
  const [patientData, setPatientData] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetch = () => {
    setLoader(true);
    supabase_conn
      .from("patients")
      .select("*")
      .then((res) => {
        // console.log(res.data);
        setPatientData(res.data);
        setLoader(false);
      })
      .catch((error) => {
        alert(error);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetch() 
  },[]);

  const patients = () => {
    return patientData.map((e) => {
      return <Card className="more-card" data={e} />;
    });
  };

  return (
    <>
      {loader == true && (
        <>
          <div className="modal" style={{ color: "#fff" }}>
            <CircularProgress color="inherit" />
          </div>
        </>
      )}
      <div className="card-container">{patients()}</div>
      <div className="btns">
        <button className="btn active-btn" tabIndex="1">
          1
        </button>
        <button className="btn" tabIndex="1">
          2
        </button>
        <button className="btn" tabIndex="1">
          3
        </button>
        <button className="btn" tabIndex="1">
          4
        </button>
      </div>
    </>
  );
};

export default Product;
