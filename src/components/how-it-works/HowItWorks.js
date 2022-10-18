import React, { useState } from "react";
import "./styles/how-it-works.css";
import image from '../../assets/images/pics.png';
import arrow from '../../assets/images/arrow2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const HowItWorks = () => {
    const box = document.querySelectorAll(".faq-box")
    const text = document.querySelectorAll(".faq-text");

    box.forEach((box) => {
        box.addEventListener('click', () =>{
            box.classList.toggle("active-box");
        })
    })
    text.forEach((text) => {
        text.addEventListener('click', () =>{
            text.classList.toggle("active-box");
        })
    })
    

  return (
    <>
        <div className="how-it-works">
            <div className="left">
                <div className="group1">
                    <div className="group-text">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h3>
                    </div>
                </div>
                <div className="group2">
                    <h3>How It Works</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </div>
            <div className="right">
                <img src={image} alt="images" />
            </div>
        </div>


        {/* FAQ SECTION */}
        <div className="how-it-works faq">
            <div className="left">
                <Accordion style={{background: '#DFF4D7', borderRadius: '10px', fontSize:'14px'}} className="faq-box">
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faAngleDown} className="arrow2" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Lorem ipsum dolor sit amet.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{background: '#DFF4D7', borderRadius: '10px', fontSize:'14px'}} className="faq-box">
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faAngleDown} className="arrow2" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Lorem ipsum dolor sit amet.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{background: '#DFF4D7', borderRadius: '10px', fontSize:'14px'}} className="faq-box">
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faAngleDown} className="arrow2" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Lorem ipsum dolor sit amet.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>                                  
            </div>
            <div className="right">
            <Accordion style={{background: '#DFF4D7', borderRadius: '10px', fontSize:'14px'}} className="faq-box">
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faAngleDown} className="arrow2" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Lorem ipsum dolor sit amet.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{background: '#DFF4D7', borderRadius: '10px', fontSize:'14px'}} className="faq-box">
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faAngleDown} className="arrow2" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Lorem ipsum dolor sit amet.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{background: '#DFF4D7', borderRadius: '10px', fontSize:'14px'}} className="faq-box">
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faAngleDown} className="arrow2" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Lorem ipsum dolor sit amet.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </>
  );
};

export default HowItWorks;
