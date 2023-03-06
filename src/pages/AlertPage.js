import React from "react";
import Alert from "../components/modal/Alert";
import Nav from "../components/nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";


const AlertPage = () => {
  window.scroll(0, 0);


  const navigate = useNavigate();


  return (
    <div>
      <>
        <Nav className="nav2" />
        {/* <Alert /> */}
        <div
          className="alert"
          //   onClick={() => {
          //     setError(false);
          //     setAlert(false);
          //   }}
        >
          <div
            className="modal-box modal-box1 alert-box"
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="alert-icon green"
            />
            <h3 style={{marginTop: '0.5rem'}} className="alert-h3 green">Payment Received</h3>
            <Button onClick = {()=>{navigate(-1)}} style={{marginTop: '3rem'}} btnName='Go Back' />
          </div>
        </div>
      </>
    </div>
  );
};

export default AlertPage;
