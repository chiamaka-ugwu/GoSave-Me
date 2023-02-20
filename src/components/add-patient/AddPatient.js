import React, { useEffect, useState } from "react";
import "./styles/add-patient.css";
import info from "../../assets/images/i-circle.png";
import add from "../../assets/images/add.png";
import Button from "../button/Button";
import supabase from "../../config/supabase";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/modal/Alert";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import CircularProgress from "@mui/material/CircularProgress";

const AddPatient = () => {
  const [patientData, setPatientData] = useState({
    currency: "₦",
  });
  const supabse_conn = supabase();
  const navigate = useNavigate();
  const user_data = supabse_conn.auth.user(); // get logged in hospital
  const [User, setuser] = useState(null);

  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const addPatient = () => {
    // console.log(imgHandler);
    const newPatData = {
      ...patientData,
      images: imgHandler.images,
    };
    const insert = () => {
      supabse_conn
        .from("patients")
        .insert({
          name: patientData.patientName,
          email: patientData.patientEmail,
          nextOfKin: patientData.nextOfKin,
          nextOfKinPhone: patientData.nextOfKinPhone,
          patientData: {
            ...newPatData,
            hospital: User,
          },
          hospital: User.id,
        })
        .then(() => {
          setimgPrevState({
            img1: "",
            img2: "",
            img3: "",
            img4: "",
            File1: "",
            File2: "",
            File3: "",
            File4: "",
          });
          console.log("Done");
        })
        .catch((error) => {
          alert(error);
        });
    };
    setLoader(true);
    supabse_conn
      .from("patients")
      .select("*")
      .eq("email", patientData.patientEmail)
      .then((selectRes) => {
        if (selectRes.error == null) {
          if (selectRes.data.length < 1) {
            insert();
          } else {
            if (selectRes.data[0].status == true) {
              insert();
            } else {
              // alert("Active Patient");
              setError(true);
            }
          }
        } else {
          // alert("error occured");
          console.log("error");
        }
        setLoader(false);
        setAlert(true);
      })
      .catch((error) => {
        // alert("Error occured");
        console.log("error");
      });
  };

  const [imgHandler, setimgHandler] = useState({
    status: false,
    images: [],
    count: 0,
  });

  const bucketHelper = (file) => {
    setLoader(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    supabse_conn.storage
      .from("images")
      .upload(filePath, file)
      .then((response) => {
        if (response.error != null) return alert("Error");
        imgHandler.images.push(response.data.Key);
        setimgHandler({
          ...imgHandler,
          images: imgHandler.images,
          status: false,
          count: imgHandler.count++,
        });
        if (imgHandler.count == 4) {
          addPatient();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [imgPrevState, setimgPrevState] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    File1: "",
    File2: "",
    File3: "",
    File4: "",
  });

  const renderBtn = () => {
    if (
      imgPrevState.img1 == "" ||
      imgPrevState.img2 == "" ||
      imgPrevState.img3 == "" ||
      imgPrevState.img4 == ""
    ) {
      return (
        <Button
          btnName="Submit"
          btnClass="form-submit2"
          type="button"
          style={{ opacity: "0.5", cursor: "no-drop" }}
        />
      );
    } else {
      return <Button btnName="Submit" btnClass="form-submit2" type="submit" />;
    }
  };

  const getUser = () => {
    supabse_conn
      .from("hospital")
      .select("*")
      .eq("email", user_data.email)
      .then((res) => {
        setuser(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user_data == null) return navigate("/login");
    getUser();
  });

  return (
    <>
      {loader == true && (
        <>
          <div className="modal" style={{ color: "#fff" }}>
            <CircularProgress color="inherit" />
          </div>
        </>
      )}

      {alert && (
        <Alert
          msgColor="green"
          iconColor="green"
          msg="Patient Added Succesfully!"
          setAlert={setAlert}
          setError={setError}
          icon={faCircleCheck}
        />
      )}

      {error && (
        <Alert
          msgColor="red"
          iconColor="red"
          msg="Patient Already Registered!"
          setAlert={setAlert}
          setError={setError}
          icon={faCircleXmark}
        />
      )}

      <form
        className="add-patient"
        onSubmit={(e) => {
          e.preventDefault();
          //   addPatient();

          const imgArray = [
            imgPrevState.File1,
            imgPrevState.File2,
            imgPrevState.File3,
            imgPrevState.File4,
          ];

          for (let i = 0; i < imgArray.length; i++) {
            bucketHelper(imgArray[i]);
          }
        }}
      >
        <div className="left">
          <h3>Add Patient</h3>
          <p className="bold">Input patients details and illness description</p>
          <div className="add-patient-form">
            <input
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  patientName: e.target.value,
                });
              }}
              value={patientData.patientName}
              type="text"
              name="patient-name"
              className="full-width"
              placeholder="Patient Name"
              required
            />
            <input
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  patientIllness: e.target.value,
                });
              }}
              value={patientData.patientIllness}
              type="text"
              name="illness"
              className="full-width"
              placeholder="Nature of Illness"
            />
            <input
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  treatment: e.target.value,
                });
              }}
              value={patientData.treatment}
              type="text"
              name="treatment"
              className="full-width"
              placeholder="Treatment Required"
            />
            <textarea
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  description: e.target.value,
                });
              }}
              value={patientData.description}
              name="description"
              rows="5"
              className="full-width"
              placeholder="Description of Illness"
            ></textarea>
            <input
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  patientEmail: e.target.value,
                });
              }}
              value={patientData.patientEmail}
              type="email"
              name="email"
              className="full-width"
              placeholder="Email Address"
            />
            <select
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  patientLocation: e.target.value,
                });
              }}
              value={patientData.patientLocation}
              name="location"
              className="select-location2"
              placeholder="Location"
            >
              <option value="0">Location</option>
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
            <div className="input-group">
              <div className="money money2">
                <select
                  onChange={(e) => {
                    setPatientData({
                      ...patientData,
                      currency: e.target.value,
                    });
                  }}
                  value={patientData.currency}
                  name="currency"
                >
                  <option value="₦">₦</option>
                  <option value="$">$</option>
                  <option value="€">€</option>
                  <option value="£">£</option>
                </select>
                <input
                  onChange={(e) => {
                    setPatientData({
                      ...patientData,
                      amount: e.target.value,
                    });
                  }}
                  value={patientData.amount}
                  type="text"
                  name="amount"
                  className="amount2"
                  placeholder="Amount"
                />
              </div>
              <input
                onChange={(e) => {
                  setPatientData({
                    ...patientData,
                    deadline: e.target.value,
                  });
                }}
                type='date'
                value={patientData.deadline}
                className="amount2 deadline"
                name="deadline"
              />
              {/* <select
                onChange={(e) => {
                  setPatientData({
                    ...patientData,
                    deadline: e.target.value,
                  });
                }}
                value={patientData.deadline}
                className="deadline"
                name="deadline"
              > */}
                {/* <option value="">Deadline</option>
                <option value="Oct. 2022">Oct. 2022</option>
                <option value="Nov. 2022">Nov. 2022</option>
                <option value="Dec. 2022">Dec. 2022</option>
                <option value="Jan. 2023">Jan. 2023</option>
                <option value="Feb. 2023">Feb. 2023</option>
                <option value="Mar. 2023">Mar. 2023</option>
                <option value="Apr. 2023">Apr. 2023</option>
                <option value="May. 2023">May 2023</option>
                <option value="June. 2023">Jun. 2023</option>
                <option value="July. 2023">Jul. 2023</option>
                <option value="Aug. 2023">Aug. 2023</option>
              </select> */}
              <img src={info} className="info" alt="info" />
            </div>
            <p className="bold">Patient's next of kin details</p>
            <input
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  nextOfKin: e.target.value,
                });
              }}
              value={patientData.nextOfKin}
              type="text"
              name="next-of-kin-name"
              className="full-width"
              placeholder="Patient next of kin name"
            />
            <input
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  nextOfKinPhone: e.target.value,
                });
              }}
              value={patientData.nextOfKinPhone}
              type="tel"
              name="next-of-kin-phone"
              className="full-width"
              placeholder="Phone number"
            />
            <input
              onChange={(e) => {
                setPatientData({
                  ...patientData,
                  nextOfKinEmail: e.target.value,
                });
              }}
              value={patientData.nextOfKinEmail}
              type="email"
              name="next-of-kin-email"
              className="full-width"
              placeholder="Email Address"
            />
            {/* <input type="search" name="" id="" /> */}
            {/* <Button btnName='Submit' btnClass='form-submit' type='submit' /> */}
          </div>
        </div>
        <div className="right">
          <h3>Add Images</h3>
          <p className="small">
            Add at least 4 photos for this category <br /> First picture - is
            the title picture.
          </p>
          <div className="patient-images">
            <div className="group2">
              <label for="image1">
                <input
                  type="file"
                  name="image1"
                  id="image1"
                  onChange={(e) => {
                    // bucketHelper(e.target.files[0]);
                    setimgPrevState({
                      ...imgPrevState,
                      img1: URL.createObjectURL(e.target.files[0]),
                      File1: e.target.files[0],
                    });
                  }}
                />
                {imgPrevState.img1 == "" ? (
                  <>
                    <img src={add} alt="add" />
                  </>
                ) : (
                  <>
                    <img src={imgPrevState.img1} className="previewImg" />
                  </>
                )}
              </label>
              <label for="image2">
                <input
                  onChange={(e) => {
                    // bucketHelper(e.target.files[0]);

                    setimgPrevState({
                      ...imgPrevState,
                      img2: URL.createObjectURL(e.target.files[0]),
                      File2: e.target.files[0],
                    });
                  }}
                  type="file"
                  name="image2"
                  id="image2"
                />
                {imgPrevState.img2 == "" ? (
                  <>
                    <img src={add} alt="add" />
                  </>
                ) : (
                  <>
                    <img src={imgPrevState.img2} className="previewImg" />
                  </>
                )}
              </label>
              <label for="image3">
                <input
                  onChange={(e) => {
                    // bucketHelper(e.target.files[0]);

                    setimgPrevState({
                      ...imgPrevState,
                      img3: URL.createObjectURL(e.target.files[0]),
                      File3: e.target.files[0],
                    });
                  }}
                  type="file"
                  name="image3"
                  id="image3"
                />
                {imgPrevState.img3 == "" ? (
                  <>
                    <img src={add} alt="add" />
                  </>
                ) : (
                  <>
                    <img src={imgPrevState.img3} className="previewImg" />
                  </>
                )}
              </label>
              <label for="image4">
                <input
                  onChange={(e) => {
                    // bucketHelper(e.target.files[0]);

                    setimgPrevState({
                      ...imgPrevState,
                      img4: URL.createObjectURL(e.target.files[0]),
                      File4: e.target.files[0],
                    });
                  }}
                  type="file"
                  name="image4"
                  id="image4"
                />
                {imgPrevState.img4 == "" ? (
                  <>
                    <img src={add} alt="add" />
                  </>
                ) : (
                  <>
                    <img src={imgPrevState.img4} className="previewImg" />
                  </>
                )}
              </label>
            </div>
            <p>
              Each picture must not exceed 5 Mb <br /> Supported formats are
              *.jpg and *.png{" "}
            </p>

            {renderBtn()}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPatient;
