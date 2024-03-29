import React, { useState } from "react";
import "./styles/contact-us.css";
import contact from "../../assets/images/contact.png";
import Button from "../button/Button";
import supabase from "../../config/supabase";
import Alert from "../../components/modal/Alert";
import {
  faCircleCheck,
  faCircleXmark,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  const [contactData, setContactData] = useState({});
  const supabse_conn = supabase();

  const addContact = () => {
    supabse_conn
      .from("contactUs")
      .insert({
        firstName: contactData.name,
        lastName: contactData.lastName,
        email: contactData.email,
        message: contactData.message,
        metadata: { ...contactData },
      })
      .then((res) => {
        if (res) {
          console.log(res);
          setAlert(true);
          setContactData({
            ...contactData,
            name: "",
            lastName: "",
            email: "",
            message: "",
          });
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  return (
    <>
      {alert && (
        <Alert
          msgColor="green"
          iconColor="green"
          msg="Message sent! We will get back to you."
          setAlert={setAlert}
          setError={setError}
          icon={faCircleCheck}
        />
      )}
      <div className="contact-us">
        <div className="left">
          <div className="contact-img">
            <img src={contact} alt="contact" />
          </div>
          <div className="contact-links">
            <a className="tel-link" href="tel:+2347066087325">
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              <span class="tel">+234 706 608 7325</span>
            </a>
            <a className="tel-link" href="https://wa.me/+2347034100741">
              <FontAwesomeIcon className="icon2" icon={faPhone} />
              <span class="tel">+234 703 410 0741</span>
            </a>
          </div>
        </div>
        <div className="right">
          <h1 className="touch">Get in touch</h1>
          <p>
            Have an inquiry or some feedback for us? <br />
            Fill out the form below to contact our team.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Started");
              console.log(contactData);
              addContact();
              console.log("Done");
            }}
            className="contact-form"
          >
            <div className="contact-name">
              <input
                onChange={(e) => {
                  setContactData({
                    ...contactData,
                    name: e.target.value,
                  });
                }}
                value={contactData.name}
                type="text"
                name="name"
                placeholder="First Name"
              />
              <input
                onChange={(e) => {
                  setContactData({
                    ...contactData,
                    lastName: e.target.value,
                  });
                }}
                value={contactData.lastName}
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <input
              onChange={(e) => {
                setContactData({
                  ...contactData,
                  email: e.target.value,
                });
              }}
              value={contactData.email}
              type="text"
              name="email"
              className="email"
              placeholder="Email Address"
            />
            <textarea
              onChange={(e) => {
                setContactData({
                  ...contactData,
                  message: e.target.value,
                });
              }}
              value={contactData.message}
              name="message"
              rows="5"
              placeholder="Message"
            ></textarea>
            <Button type="submit" btnName="Contact Us" />
          </form>
        </div>
      </div>
      {error && (
        <Alert
          iconColor="red"
          msgColor="red"
          msg="Message not sent! Please check your network."
          setError={setError}
          icon={faCircleXmark}
          setAlert={setAlert}
        />
      )}
    </>
  );
};

export default ContactUs;
