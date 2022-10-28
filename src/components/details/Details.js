import React, { useState } from "react";
import "./styles/details.css";
import circle from "../../assets/images/i-circle.png";
import contributors from "../../assets/images/contributors.png";
import share from "../../assets/images/share.png";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import Alert from "../modal/Alert";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import CardMedia from "@mui/material/CardMedia";
import Contributors from "../modal/Contributors";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal2 from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Popover from "@mui/material/Popover";
import Typography2 from "@mui/material/Typography";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const Details = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const baseURL =
    "https://jsqckivnjimadtyuxblt.supabase.co/storage/v1/object/public/";
  const [contModal, setContModal] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  const open2 = Boolean(anchorEl);
  const id = open2 ? "simple-popover" : undefined;

  const otherImages = () => {
    return data.patientData.images.map((e) => {
      return (
        <>
          <img className="patient-modal" src={baseURL + e} alt="patient" />
        </>
      );
    });
  };
  return (
    <>
      {/* {console.log(data)} */}
      {alert == true && (
        <Alert msg="Success" setAlert={setAlert} icon={faCircleCheck} />
      )}
      <div className="card-details">
        <div className="details-content">
          <div className="img-container">
            <CardMedia
              component="img"
              height="180"
              image={baseURL + data.patientData.images[0]}
              alt="patient"
            />
          </div>
          <div className="more">
            <p className="view" onClick={handleOpen}>
              View more pictures
            </p>

            <Modal2
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style} className="img-modal">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    showArrows={false}
                    renderIndicator={(
                      onClickHandler,
                      isSelected,
                      index,
                      label
                    ) => {
                      const defStyle = {
                        marginLeft: 20,
                        marginTop: "10",
                        color: "transparent",
                        cursor: "pointer",
                        width: "15px",
                        height: "15px",
                        borderRadius: "100%",
                        padding: "6px",
                        fontSize: "1px",
                      };
                      const style = isSelected
                        ? { ...defStyle, backgroundColor: "#A038C7" }
                        : { ...defStyle, backgroundColor: "#C4C4C4" };
                      return (
                        <span
                          style={style}
                          onClick={onClickHandler}
                          onKeyDown={onClickHandler}
                          value={index}
                          key={index}
                          role="button"
                          tabIndex={0}
                          aria-label={`${label} ${index + 1}`}
                        >
                          {index}
                        </span>
                      );
                    }}
                  >
                    <div>{otherImages()}</div>
                    {/* <div>{otherImages()}</div>
                    <div>{otherImages()}</div> */}
                  </Carousel>
                </Box>
              </Fade>
            </Modal2>
          </div>
          <div className="target-container2">
            <div className="content3">
              <div className="target">
                <p className="small small2">Target</p>
                <p className="bold bold2">
                  {data.patientData.currency}
                  {data.patientData.amount}
                </p>
              </div>
              <div className="amount-raised">
                <p className="small small2">Amount Raised</p>
                <p className="bold bold2">
                  {data.patientData.currency}
                  {data.amount_raised}
                </p>
              </div>
            </div>
          </div>
          <div className="patient-info">
            <div className="content3 pinfo">
              <div className="patient">
                <p className="small small2">Name of Patient</p>
                <p className="bold bold2">{data.name}</p>
              </div>
              <div className="illness">
                <p className="small small2">Nature of illness</p>
                <p className="bold bold2">{data.patientData.patientIllness}</p>
              </div>
              <div className="treatment">
                <p className="small small2">Treatment Required</p>
                <p className="bold bold2">{data.patientData.treatment}</p>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="content4">
              <p className="small small2">Description</p>
              <p className="bold bold2">{data.patientData.description}</p>
            </div>
          </div>
          <div className="hospital-details">
            <div className="content4">
              <p className="bold bold2">Hospital Details</p>
            </div>
            <div className="content3 hospitals">
              <div className="hospital-name">
                <p className="small small2">Name of Hospital</p>
                <p className="bold bold2">{data.patientData.hospital.name}</p>
              </div>
              <div className="location">
                <p className="small small2">Location</p>
                <p className="bold bold2">
                  {data.patientData.patientLocation} State
                </p>
              </div>
            </div>
            <div className="content3 email-address">
              <div className="email">
                <p className="small small2">Email Address</p>
                <p className="bold bold2">{data.patientData.hospital.email}</p>
              </div>
              <div className="phone">
                <p className="small small2">Phone Number</p>
                <p className="bold bold2">{data.patientData.hospital.phone}</p>
              </div>
            </div>
            <div className="address">
              <div className="content2">
                <p className="small small2">Address</p>
                <p className="bold bold2 add">
                  {data.patientData.hospital.address}
                </p>
                <p className="small small2 days-left">
                  Deadline:
                  <span style={{marginLeft: "0.5rem"}} className="bold bold2">
                    {data.patientData.deadline}
                    {/* <img
                      src={circle}
                      className="circle"
                      onClick={handleClick}
                      aria-describedby={id}
                      variant="contained"
                    /> */}
                    <Popover
                      id={id}
                      open2={open2}
                      anchorEl={anchorEl}
                      onClose={handleClose2}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <Typography2 sx={{ p: 2 }}>
                        The number of days left till the campaign expires
                      </Typography2>
                    </Popover>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="content5">
              <div className="contributors" onClick={() => setContModal(true)}>
                <div className="icon">
                  <img src={contributors} alt="icon" />
                </div>
                <p className="bold bold2">Contributors</p>
              </div>
              <div className="share">
                <div className="icon">
                  <img src={share} alt="icon" />
                </div>
                <p className="bold bold2">Share</p>
              </div>
              <Button
                btnName="Save My Life"
                onClick={() => setModal(true)}
                btnClass="card-footer-btn"
              />
            </div>
            <div className="share-lin">
              <FacebookShareButton />
              <TwitterShareButton />
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          title="Contribute To Save A Life"
          setModal={setModal}
          patient={data}
          setAlert={setAlert}
        />
      )}
      {contModal && <Contributors data={data} setContModal={setContModal} />}
    </>
  );
};

export default Details;
