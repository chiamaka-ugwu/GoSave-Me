import React from "react";

const Contributors = ({ setContModal, data }) => {
  console.log(data);
  const contributors = () => {
    return data.contributors.map((e) => {
      return (
        <>
          <div className="modal-content cont-content">
            <div className="contr">
              <div className="cont-left">
                {e.metadata.checkbox ? (
                  <>
                    <p className="small">Anonymous</p>
                  </>
                ) : (
                  <>
                    <p className="small"> {e.name} </p>
                  </>
                )}
              </div>
              <div className="cont-right">
                <p className="small">
                  {e.metadata.currency}
                  {e.amount}
                </p>
              </div>
            </div>
            <div className="form-btns form-btns7">
              <a className="cont-cancel" onClick={() => setContModal(false)}>
                Cancel
              </a>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div className="modal cont-modal" onClick={() => setContModal(false)}>
        <div
          className="modal-box modal-box2 cont-box"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="cont-h3">Contributors</h3>
          {contributors()}
        </div>
      </div>
    </>
  );
};

export default Contributors;
