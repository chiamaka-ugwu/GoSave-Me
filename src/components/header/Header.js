import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./styles/header.css";
import SearchBar from "../search-bar/SearchBar";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import supabase from "../../config/supabase";
import CircularProgress from "@mui/material/CircularProgress";

const Header = () => {
  const [loader, setLoader] = useState(false);
  const supabase_conn = supabase();
  const [patientData, setPatientData] = useState([]);
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
    fetch();
  },[]);

  const patients = () => {
    return patientData.map((e) => {
      return <Card data={e} />;
    });
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      {loader == true && (
        <>
          <div className="modal" style={{ color: "#fff" }}>
            <CircularProgress color="inherit" />
          </div>
        </>
      )}

      <header className="landing-page">
        <div className="intro">
          <h1 className="large">
            Join Millions of Kind-Hearted Individuals to save dying patients.
          </h1>
          <h2 className="small">
            Your little contribution might be all a patient needs to stay alive.
          </h2>
        </div>
        <div className="btn-container">
          <a href="#save">
            <Button btnName="Save a life" btnClass="save-btn" />
          </a>
        </div>
      </header>
      <SearchBar />
      <h3 className="save" id="save">
        Save a life today
      </h3>
      <section className="section">
        <div className="card-section">{patients()}</div>
      </section>
      <div className="view-more">
        <Link to="/product">View More</Link>
      </div>



      {/* WHY GO SAVE ME */}
      <h1 className="why-gsm" style={{ textAlign: "center" }}>Why People Use GoSaveMe</h1>
      <div className="donate-boxes">
        <div className="donate-box how-box">
          <div className="box-content">
            <h3>Easy and Fast</h3>
            <p>
              Encourage the GoSaveMe Team to keep the vision of this platform
              alive. Your support will always give us another reason to keep
              pushing.
            </p>
          </div>
        </div>
        <div className="donate-box how-box">
          <div className="box-content">
            <h3>Transparent</h3>
            <p>
              Our team visits hospitals occasionally to support patients, nurses
              and doctors with gifts, food, cash, other materials and clear out
              some medical bills.
            </p>
          </div>
        </div>
        <div className="donate-box how-box">
          <div className="box-content">
            <h3>Committed</h3>
            <p>
              We are partnering with institutions to support them with funds to
              carry out medical researches.
            </p>
          </div>
        </div>
      </div>

      {modal && <Modal setModal={setModal} />}

      
    </>
  );
};

export default Header;
