import React, { useState } from "react";
import Button from "../button/Button";
import "./styles/donate.css";
import Modal from "../modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import MedicalInformationTwoToneIcon from '@mui/icons-material/MedicalInformationTwoTone';

const Donate = () => {
  const [modal, setModal] = useState(false);
  const [donate_type, setdonate_type] = useState("");
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="donate">
        <div className="intro donate-content">
          <h1 className="large">We Need Your Support</h1>
          <h2 className="small">
            You can help GoSaveMe make more impact by donating in any of these
            categories below.
          </h2>
        </div>
      </div>
      <div className="donate-boxes">
        <div className="donate-box how">
          <div className="box-content">
            <Diversity1TwoToneIcon className="round-icon" />
            <h3>Support GoSaveMe Team</h3>
            <p>
              Encourage the GoSaveMe Team to keep the vision of this platform
              alive. Your support will always give us another reason to keep
              pushing.
            </p>
            <Button
              onClick={() => {
                setModal(true);
                setdonate_type("Support GoSaveMe Team");
                setTitle("Support GoSaveMe Team");
              }}
              btnName="Donate"
              btnClass="donate-btn"
            />
          </div>
        </div>
        <div className="donate-box how">
          <div className="box-content">
            <CreditScoreTwoToneIcon className="round-icon" />
            <h3>Fund Patient Outreach</h3>
            <p>
              Our team visits hospitals occasionally to support patients, nurses
              and doctors with gifts, food, cash, other materials and clear out
              some medical bills.
            </p>
            <Button
              onClick={() => {
                setdonate_type("Fund Patient Outreach");
                setModal(true);
                setTitle("Fund Patient Outreach");
              }}
              btnName="Donate"
              btnClass="donate-btn"
            />
          </div>
        </div>
        <div className="donate-box how">
          <div className="box-content">
            <MedicalInformationTwoToneIcon className="round-icon" />
            <h3>Support Medical Research</h3>
            <p>
              We are partnering with medical institutions and teaching hospitals
              to support them with funds to carry out medical researches.
            </p>
            <Button
              onClick={() => {
                setdonate_type("Support Medical Research");
                setModal(true);
                setTitle("Support Medical Research");
              }}
              btnName="Donate"
              btnClass="donate-btn"
            />
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <h3 style={{ textAlign: "center" }}>FAQ</h3>
      <div className="how-it-works faq donate-faq">
        <div className="left">
          <Accordion
            style={{
              background: "#DFF4D7",
              borderRadius: "10px",
              fontSize: "14px",
            }}
            className="faq-box"
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon icon={faAngleDown} className="arrow2" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#DFF4D7",
              borderRadius: "10px",
              fontSize: "14px",
            }}
            className="faq-box"
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon icon={faAngleDown} className="arrow2" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#DFF4D7",
              borderRadius: "10px",
              fontSize: "14px",
            }}
            className="faq-box"
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon icon={faAngleDown} className="arrow2" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="right">
          <Accordion
            style={{
              background: "#DFF4D7",
              borderRadius: "10px",
              fontSize: "14px",
            }}
            className="faq-box"
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon icon={faAngleDown} className="arrow2" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#DFF4D7",
              borderRadius: "10px",
              fontSize: "14px",
            }}
            className="faq-box"
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon icon={faAngleDown} className="arrow2" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              background: "#DFF4D7",
              borderRadius: "10px",
              fontSize: "14px",
            }}
            className="faq-box"
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon icon={faAngleDown} className="arrow2" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Lorem ipsum dolor sit amet.</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {modal && (
        <Modal
          title={title}
          donate_type={donate_type}
          setModal={setModal}
          donate={true}
        />
      )}
    </>
  );
};

export default Donate;
