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
import CreditScoreTwoToneIcon from "@mui/icons-material/CreditScoreTwoTone";
import MedicalInformationTwoToneIcon from "@mui/icons-material/MedicalInformationTwoTone";
import Alert from "../../components/modal/Alert";

const Donate = () => {
  const [modal, setModal] = useState(false);
  const [donate_type, setdonate_type] = useState("");
  const [title, setTitle] = useState("");
  const [alert, setAlert] = useState(false);

  return (
    <>
      {/* {alert && (
        <Alert
          msgColor="green"
          iconColor="green"
          msg="Payment Received!"
          setAlert={setAlert}
          setError={setError}
          icon={faCircleCheck}
        />
      )} */}
      <div className="donate">
        <div className="intro donate-content">
          <h1 className="large large2">We Need Your Support</h1>
          {/* <h2 className="small small2">
            You can help GoSaveMe make more impact by donating in any of these
            categories below.
          </h2> */}
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
      <h3 style={{ textAlign: "center", marginTop: "3rem" }}>FAQs</h3>
      <h4 style={{ textAlign: "center" }}>Frequently Asked Questions</h4>
      <div className="how-it-works faq donate-faq">
        <div className="left">
          <Accordion
            style={{
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
              <Typography
                style={{
                  color: "#F79B39",
                  fontWeight: "600",
                }}
              >
                Why should I donate to GOSAVEME?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We want you to be our partner in saving lifes. We need your help
                to keep this vision alive. We use your donations to fund our
                patients' outreach and also support Medical Research.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
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
              <Typography
                style={{
                  color: "#F79B39",
                  fontWeight: "600",
                }}
              >
                How much can I donate?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can donate as much as you are capable of. We encourage
                donors to give from their hearts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
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
              <Typography
                style={{
                  color: "#F79B39",
                  fontWeight: "600",
                }}
              >
                Can a donor join in the patient outreach?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sure! You are most welcome to join us for patient outreach or
                Medical Research.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="right">
          <Accordion
            style={{
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
              <Typography
                style={{
                  color: "#F79B39",
                  fontWeight: "600",
                }}
              >
                What are the donations used for?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can donate to support the GOSAVEME team or you can donate to
                support our quarterly patient outreach or you can donate to
                support Medical Research.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
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
              <Typography
                style={{
                  color: "#F79B39",
                  fontWeight: "600",
                }}
              >
                Can I donate to more than one cause?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you can donate to do any or all the categories. Eg: You can
                donate to support the GOSAVEME team, support our quarterly
                outreach and medical research.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
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
              <Typography
                style={{
                  color: "#F79B39",
                  fontWeight: "600",
                }}
              >
                How do I verify that my donation went through?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can click on the contribution feature on the patient page to
                see all the contributions made so far.
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
