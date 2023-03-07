import React, { useState } from "react";
import "./styles/modal.css";
import supabase from "../../config/supabase";
import { PaystackButton } from "react-paystack";
import Alert from "./Alert";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import notice from "../../assets/images/notice.png";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import Contributors from "./Contributors";

import { useNavigate } from "react-router-dom";

const Modal = ({ setModal, patient, donate, donate_type, title, data, setTarget }) => {
  const [checked, setChecked] = useState(true);

  const [alert, setAlert] = useState(true);
  const [error, setError] = useState(false);

  const [contModal, setContModal] = useState(false);

  const navigate = useNavigate()


  const handleChange = (event) => {
    setContribution({
      ...contribution,
      checkbox: event.target.checked,
    });
  };

  const [contribution, setContribution] = useState({
    currency: "₦",
  });
  const supabse_conn = supabase();

  const updatePatientAmountRaised = () => {
    const new_wallet =
      parseInt(contribution.amount) + parseInt(patient.amount_raised);
    supabse_conn
      .from("patients")
      .update({ amount_raised: new_wallet })
      .eq("id", patient.id)
      .then((res) => {});
  };

  const updateHospitalWallet = () => {
    const hospital_email = patient.patientData.hospital.email; // hospital email

    // get current hospital wallet balance,
    supabse_conn
      .from("hospital")
      .select("*")
      .eq("email", hospital_email)
      .then((res) => {
        const hospital_wallet = res.data[0].wallet;
        // update the balance with the amount donated
        const new_wallet =
          parseInt(contribution.amount) + parseInt(hospital_wallet);
        // save the updated balance
        supabse_conn
          .from("hospital")
          .update({ wallet: new_wallet })
          .eq("email", hospital_email)
          .then((res) => {

          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addContributor = (reference) => {
    const post = (table) => {
      supabse_conn
        .from(table)
        .insert({
          name: contribution.name,
          email: contribution.email,
          location: contribution.location,
          amount: contribution.amount,
          metadata: { ...contribution, reference, patient, type: donate_type },
          patients: patient.id,
        })
        .then((res) => {
          updatePatientAmountRaised();
          updateHospitalWallet();
          console.log(res);
          setAlert(true);
          setModal(false);
          // setAlert(true);
        })
        .catch((error) => {
          alert(error);
        });
    };
    if (donate && donate == true) {
      supabse_conn
        .from("donations")
        .insert({
          name: contribution.name,
          email: contribution.email,
          location: contribution.location,
          amount: contribution.amount,
          metadata: { ...contribution, reference, type: donate_type },
        })
        .then((res) => {
          // setModal(false);
          setAlert(true);
          // setModal(false);
          // setContModal(true);

        })
        .catch((error) => {
          alert(error);
        });
    } else {
      post("contributors");
    }
  };

  //  ALERT



  //   PAYSTACK
  const config = {
    reference: new Date().getTime().toString(),
    email: contribution.email,
    amount: contribution.amount + "00",
    publicKey: "pk_test_d44764b4ef3a7f9be2362c4e4e7289a23259961b",
  };

  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    addContributor(reference);
    // setAlert(true);
    // setContModal(true);
    setModal(false);
    setTarget(false);
    navigate('/alert');

    
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    setModal(false);
    // setAlert(true);
    // setContModal(true);
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  // POPOVER
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {alert && (
        <Alert
          msgColor="green"
          iconColor="green"
          msg="Payment Received!"
          setAlert={setAlert}
          setError={setError}
          icon={faCircleCheck}
        />
      )}
      {console.log(patient)}
      <div className="modal" onClick={() => setModal(false)}>
        <div
          className="modal-box modal-box1"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>{title}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="contribution-form"
          >
            <input
              onChange={(e) => {
                setContribution({
                  ...contribution,
                  name: e.target.value,
                });
              }}
              value={contribution.name}
              type="text"
              name="name"
              className="same-width"
              placeholder="Name"
            />
            <input
              onChange={(e) => {
                setContribution({
                  ...contribution,
                  email: e.target.value,
                });
              }}
              value={contribution.email}
              type="email"
              name="email"
              className="same-width"
              placeholder="Email Address"
            />
            <select
              onChange={(e) => {
                setContribution({
                  ...contribution,
                  location: e.target.value,
                });
              }}
              value={contribution.location}
              name="location"
              className="select-location"
            >
              <option value="none">Location</option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa-Ibom">Akwa-Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT">FCT</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nassarawa">Nassarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>
            <div className="money">
              <select
                onChange={(e) => {
                  setContribution({
                    ...contribution,
                    currency: e.target.value,
                  });
                }}
                value={contribution.currency}
                name="currency"
              >
                <option value="₦">₦</option>
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="£">£</option>
              </select>
              <input
                onChange={(e) => {
                  setContribution({
                    ...contribution,
                    amount: e.target.value,
                  });
                }}
                value={contribution.amount}
                type="tel"
                name="amount"
                placeholder="Amount"
              />
            </div>
            <div className="anonymous">
              <input
                // onChange={(e) => {
                //     setChecked(!checked);
                //     setContribution({
                //         ...contribution,
                //         checkbox: e.target.value,
                //     });
                // }}
                // value={contribution.checkbox}
                value={checked}
                onChange={handleChange}
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <p>Contribute Anonymously</p>
              <img
                src={notice}
                alt="notice"
                className="notice-icon"
                onClick={handleClick}
                aria-describedby={id}
                variant="contained"
              />
              <Popover
                style={{ zIndex: "10000" }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  Donor's name will be Anonymous on the contributors list.
                </Typography>
              </Popover>
            </div>
            {/* <Button
              type="submit"
              btnName="Save a life"
              btnClass="form-submit1"
            /> */}

            <PaystackButton
              {...componentProps}
              className="paystack-btn"
              text="Donate"
            />
          </form>
        </div>
      </div>

      {contModal && <Contributors data={data} setContModal={setContModal} />}
 
    </>
  );
};

export default Modal;
