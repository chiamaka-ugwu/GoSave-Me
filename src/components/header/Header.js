import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./styles/header.css";
import SearchBar from "../search-bar/SearchBar";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import supabase from "../../config/supabase";
import CircularProgress from "@mui/material/CircularProgress";
import OfflineBoltTwoToneIcon from "@mui/icons-material/OfflineBoltTwoTone";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import DataSaverOnTwoToneIcon from "@mui/icons-material/DataSaverOnTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import TaskAltTwoToneIcon from "@mui/icons-material/TaskAltTwoTone";
import hero from "../../assets/images/pic2.jpg";

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
  }, []);

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

      <header>
        <div className="landing-page">
          <div className="intro">
            <h1 className="large">
              Join Millions of Kind-Hearted Individuals to save dying patients.
            </h1>
            <p className="small">
              Your little contribution might be all a patient needs to stay
              alive.
            </p>
          </div>
          <div className="btn-container">
            <a href="#save">
              <Button btnName="Save a life" btnClass="save-btn" />
            </a>
          </div>
        </div>
      </header>

      {/* <h3 className="save services">Our Services</h3>
      <div className="donate-boxes">
        <div className="donate-box how">
          <div className="box-content">
            <DataSaverOnTwoToneIcon className="round-icon" />
            <h3>Choose Patient to Save</h3>
            <p>
              As a life-saver, you can select a patient on the platform that you
              will like to help. On checking the patient you will see important
              details about the patient.
            </p>
          </div>
        </div>
        <div className="donate-box how">
          <div className="box-content">
            <VolunteerActivismTwoToneIcon className="round-icon" />
            <h3>Donate to Patient</h3>
            <p>
              Now, you've made up your mind, you can go ahead to donate to one
              or even more patients. While donating you can choose to be
              anonymous.
            </p>
          </div>
        </div>
        <div className="donate-box">
          <div className="box-content">
            <TaskAltTwoToneIcon className="round-icon" />
            <h3>Verify</h3>
            <p>
              GOSAVEME is known to be very transparent, so after donating you
              can check on the contributors feature in the patients page to see
              all contributors.
            </p>
          </div>
        </div>
      </div> */}

      <SearchBar />
      <h3 className="save" id="save">
        Save a life today
      </h3>
      <section className="section">
        <div className="card-section">{patientData && patients()}</div>
      </section>
      <div className="view-more">
        <Link to="/patients">View More</Link>
      </div>

      {/* WHY GO SAVE ME */}
      <h1 className="why-gsm" style={{ textAlign: "center" }}>
        Why People Use GoSaveMe
      </h1>
      <div className="donate-boxes">
        <div className="donate-box how-box">
          <div className="box-content">
            <OfflineBoltTwoToneIcon className="round-icon" />
            <h3>Easy and Fast</h3>
            <p>
              Creating a campaign and donating funds are done seamlessly on
              GOSAVEME.
            </p>
          </div>
        </div>
        <div className="donate-box how-box">
          <div className="box-content">
            <MenuBookTwoToneIcon className="round-icon" />
            <h3>Transparent</h3>
            <p>
              All activities on the GOSAVEME platform are like an open book.
            </p>
          </div>
        </div>
        <div className="donate-box how-box">
          <div className="box-content">
            <Diversity1TwoToneIcon className="round-icon" />
            <h3>Committed</h3>
            <p>
              GOSAVEME is committed to leveraging crowd funding to save lives.
            </p>
          </div>
        </div>
      </div>

      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default Header;
