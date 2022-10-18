import React, { useState } from "react";
import Button from "../button/Button";
import "./styles/donate.css";
import Modal from "../modal/Modal";

const Donate = () => {
  const [modal, setModal] = useState(false);
  const [donate_type, setdonate_type] = useState("");
  const [title, setTitle] = useState(""); 
  return (
    <>
      <div className="donate">
        <div className="intro donate-content">
          <h1 className="large">Lorem ipsum dolor sit amet</h1>
          <h2 className="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </h2>
        </div>
      </div>
      <div className="donate-boxes">
        <div className="donate-box">
          <div className="box-content">
            <h3>Support GoSave Me Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <Button
              onClick={() => {
                setModal(true);
                setdonate_type("Support GoSave Me Team");
              }}
              btnName="Donate"
              btnClass="donate-btn"
            />
          </div>
        </div>
        <div className="donate-box">
          <div className="box-content">
            <h3>Fund Patient Outreach</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <Button
              onClick={() => {
                setdonate_type("Fund Patient Outreach");
                setModal(true);
              }}
              btnName="Donate"
              btnClass="donate-btn"
            />
          </div>
        </div>
        <div className="donate-box">
          <div className="box-content">
            <h3>Support Medical Research</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <Button
              onClick={() => {
                setdonate_type("Support Medical Research");
                setModal(true);
              }}
              btnName="Donate"
              btnClass="donate-btn"
            />
          </div>
        </div>
      </div>
      {modal && <Modal donate_type={donate_type} setModal={setModal} donate={true} />}
    </>
  );
};

export default Donate;
