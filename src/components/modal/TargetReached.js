import React from "react";
import { useState } from "react";
import Button from "../button/Button";

const TargetReached = ({ setTargetModal }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="modal" onClick={() => setTargetModal(false)}>
        <div
          className="modal-box"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 style={{ width: "95%", margin: "auto" }}>
            The target amount for this patient has been reached. <br />
            Do you still want to donate?
          </h3>
          <div className="">
            <Button
              btnName="Yes"
              onClick={() => setModal(true)}
            />
            <a  onClick={() => setTargetModal(false)}>
              Cancel
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetReached;
