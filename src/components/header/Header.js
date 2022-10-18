import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./styles/header.css";
import SearchBar from "../search-bar/SearchBar";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import supabase from "../../config/supabase";

const Header = () => {
  const supabase_conn = supabase();
  const [patientData, setPatientData] = useState([]);
  const fetch = () => {
    supabase_conn
      .from("patients") 
      .select("*")
      .then((res) => {
        // console.log(res.data);
        setPatientData(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    fetch();
  });

  const patients = () => {
    return patientData.map((e) => {
      return <Card data={e} />;
    });
  };

  const [modal, setModal] = useState(false);
  return (
    <>
      <header className="landing-page">
        <div className="intro">
          <h1 className="large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </h1>
          <h2 className="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
        <div className="btn-container">
          <a href="#save">
            <Button
              btnName="Save a life"
              btnClass="save-btn"
            />
          </a>
        </div>
      </header>
      <SearchBar />
      <h3 className="save" id='save'>Save a life today</h3>
      <section className="section">
        <div className="card-section">{patients()}</div>
      </section>
      <div className="view-more">
        <Link to="/product">View More</Link>
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default Header;
