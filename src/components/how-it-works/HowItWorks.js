import React, { useState } from "react";
import "./styles/how-it-works.css";
import image from "../../assets/images/pics.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import FileUploadTwoToneIcon from "@mui/icons-material/FileUploadTwoTone";
import DownloadForOfflineTwoToneIcon from "@mui/icons-material/DownloadForOfflineTwoTone";
import DataSaverOnTwoToneIcon from "@mui/icons-material/DataSaverOnTwoTone";
import VolunteerActivismTwoToneIcon from "@mui/icons-material/VolunteerActivismTwoTone";
import TaskAltTwoToneIcon from "@mui/icons-material/TaskAltTwoTone";

const HowItWorks = () => {
  return (
    <>
      <div className="how-it-works">
        <div className="left">
          <div className="group1">
            <div className="group-text">
              <h1>What is GOSAVEME?</h1>
              <h3>
                GOSAVEME is designed to be the most trusted online crowdfunding
                website for hospital patients in need of financial assistance to
                help them get the best of medical care to stay alive. So,
                GOSAVEME allows people to raise money to treat very serious
                illnesses and accidents.
              </h3>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="images" />
        </div>
      </div>

      {/* HOW IT WORKS */}
      <h3 style={{ textAlign: "center" }}>How It Works</h3>
      <h4 style={{ textAlign: "center" }}>Create Campaign</h4>
      <div className="donate-boxes">
        <div className="donate-box how">
          <div className="box-content">
            <PersonAddAltTwoToneIcon className="round-icon" />
            <h3>Create Account</h3>
            <p>
              The hospital where the patient is currently being treated will
              create an account. This is to reduce fraud and maintain
              accountability.
            </p>
          </div>
        </div>
        <div className="donate-box how">
          <div className="box-content">
            <FileUploadTwoToneIcon className="round-icon" />
            <h3>Upload Patient & Share</h3>
            <p>
              The hospital can now go ahead to upload the patient and also set
              the amount needed. Then you can share for people to see and
              contribute.
            </p>
          </div>
        </div>
        <div className="donate-box how">
          <div className="box-content">
            <DownloadForOfflineTwoToneIcon className="round-icon" />
            <h3>Withdraw Funds</h3>
            <p>
              Once the target is achieved or deadline reached the funds raised
              can be withdrawn by the patient through the hospital.
            </p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>How It Works</h3>
      <h4 style={{ textAlign: "center" }}>Save a Life</h4>
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
      </div>

      {/* FAQ SECTION */}
      <h3 style={{ textAlign: "center" }}>FAQs</h3>
      <h4 style={{ textAlign: "center" }}>Frequently Asked Questions</h4>
      <div className="how-it-works faq">
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
                What is GOSAVEME?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                GOSAVEME is designed to be the most trusted online crowdfunding
                website for hospital patients in need of financial assistance to
                help them get the best of medical care to stay alive. So,
                GOSAVEME allows people to raise money to treat very serious
                illnesses and accidents.
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
                Who can create a GOSAVEME campaign?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For now, only hospitals can create a GOSAVEME for patients. This
                is done to ensure that all campaigns created on our platforms
                are verified and true.
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
                How much can be raised on GOSAVEME?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Campaigns can be created to raise any amount needed by the
                patient. However, campaigns can only be created by hospitals and
                only if it's verified, people can join in the campaign.
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
                How do we get the money that is raised?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Very Simple. Once the target is achieved or deadline reached,
                the patient can withdraw the funds through the hospital. The
                hospital is not to take a charge for this transaction.
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
                Can I donate to more than one patient?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Of course, you can. On GOSAVEME, kindness has no boundaries. You
                can donate to save as many lives as possible. Thanks for being
                so kind.
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
    </>
  );
};

export default HowItWorks;
