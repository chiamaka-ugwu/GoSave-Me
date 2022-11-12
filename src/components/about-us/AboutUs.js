import React from "react";
import "./styles/about-us.css";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/about.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="left">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mission">
            <div className="cont">
              <h3>Our Mission</h3>
              <p>
                We are on a mission to reduce illness-induced deaths by
                creating a transparent and trusted platform and program that
                allows kind hearted individuals donate to save dying patients.
              </p>
            </div>
            <div className="cont">
              <h3>Our Vision</h3>
              <p>
                To have a world where crowdfunding inspired by kindness and
                goodwill is instrumental to restore the health of people.Our
                friends shouldn't die because they don't have money to pay to
                get treated of an illness.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="image" />
        </div>
      </div>

      {/* MEET THE TEAM */}
      <div className="meet">
        <h3>Meet the Team</h3>
        <div className="meet-team">
          <div className="team">
            <img src={logo} alt="team" />
            <h4>Full name of person</h4>
            <p>Position</p>
          </div>
          <div className="team">
            <img src={logo} alt="team" />
            <h4>Full name of person</h4>
            <p>Position</p>
          </div>
          <div className="team">
            <img src={logo} alt="team" />
            <h4>Full name of person</h4>
            <p>Position</p>
          </div>
          <div className="team">
            <img src={logo} alt="team" />
            <h4>Full name of person</h4>
            <p>Position</p>
          </div>
          <div className="team">
            <img src={logo} alt="team" />
            <h4>Full name of person</h4>
            <p>Position</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
