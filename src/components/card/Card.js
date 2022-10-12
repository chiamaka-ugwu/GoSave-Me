import React from "react";
import "./styles/card.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import patient from "../../assets/images/patient.png";
import circle from "../../assets/images/i-circle.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../button/Button";

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

const Cards = ({ className, data, edit }) => {
  AOS.init();
  const baseURL =
    "https://jsqckivnjimadtyuxblt.supabase.co/storage/v1/object/public/";
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`card ${className}`}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="card-content">
          <div className="img-container">
            <Link to={`/product-details/${data.id}`}>
              <CardMedia
                component="img"
                height="180"
                image={baseURL + data.patientData.images[0]}
                alt="patient"
              />
              {/* <img className='patient-img' src={baseURL+data.patientData.images[0]} alt="patient" /> */}
            </Link>
          </div>
          <div
            className="target-container"
            onClick={() => {
              navigate("/product-details/" + data.id);
            }}
          >
            <div className="content">
              <div className="target">
                <p className="small">Target</p>
                <p className="bold">
                  {data.patientData.currency}
                  {data.patientData.amount}
                </p>
              </div>
              <div className="amount">
                <p className="small">Amount Raised</p>
                <p className="bold">
                  {data.patientData.currency}
                  {data.amount_raised}
                </p>
              </div>
            </div>
          </div>
          <div
            className="patient-info"
            onClick={() => {
              navigate("/product-details/" + data.id);
            }}
          >
            <div className="content">
              <div className="patient">
                <p className="small">Name of Patient</p>
                <p className="bold">{data.name}</p>
              </div>
              <div className="illness">
                <p className="small">Nature of illness</p>
                <p className="bold">{data.patientData.patientIllness}</p>
              </div>
            </div>
          </div>
          <div className="hospital">
            <div className="content2">
              <p className="small">Name of Hospital</p>
              <p className="bold"> {data.patientData.hospital.name} </p>
              <p className="small days-left">
                Days Left:
                <span className="bold">
                  {" "}
                  30 days
                  <img src={circle} className="circle" />
                </span>
              </p>
            </div>
          </div>
        </div>
        {edit && (
          <>
            <div className="box-group">
              <Button btnName="End Campaign" btnClass="dashboard-btn" />
              <Button btnName="Request Funds" btnClass="dashboard-btn" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
