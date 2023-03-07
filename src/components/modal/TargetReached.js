import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import Modal from "./Modal";
import './styles/target.css';

const TargetReached = ({ setTarget,data, setAlert}) => {
  const [modal, setModal] = useState(false);
  const setModals = () => {
    setModal(true);
    // setTarget(false);

  }

  return (
    <>
      <div className="modal cont-modal target-modal" onClick={() => setTarget(false)}>
        <div
          className="modal-box modal-box2 modal-box3"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 style={{ width: "95%", margin: "auto" }}>
            The target amount for this patient has been reached. <br /> <br />
            Do you still want to donate?
          </h3>
          <div className="yes-cont">
            <Button
              btnName="Yes"
              onClick={setModals}
            />
            <a className="cancel" onClick={() => setTarget(false)}>
              Cancel
            </a>
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
    </>
  );
};

export default TargetReached;
