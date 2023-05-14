import React from "react";
import "./styles/about-us.css";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/about.png";
import amaka from '../../assets/images/amaka.jpg';
import lolia from '../../assets/images/lolia.jpeg';
import anthony from '../../assets/images/anthony.jpeg';
import grace from '../../assets/images/grace.jpeg';
import aku from '../../assets/images/aku.jpeg';


const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="left">
          <h1>About Us</h1>
          <p>
           GOSAVEME is designed to be the most trusted online crowdfunding website for hospital patients in need of financial assistance to help them get the best of medical care to stay alive. So, GOSAVEME allows people to raise money to treat very serious illnesses and accidents. 
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
            <img src={amaka} alt="team" width="160" height='180' />
            <h4>Chiamaka Ugwu</h4>
            <p>Team Lead</p>
          </div>
          <div className="team">
            <img src={lolia} alt="team" width="160" height='180' />
            <h4>Lolia Nnodim</h4>
            <p>Product</p>
          </div>
          <div className="team">
            <img src={anthony} alt="team" width="160" height='180' />
            <h4>Anthony Oyovwikefe</h4>
            <p>Operations</p>
          </div>
          <div className="team">
            <img src={grace} alt="team" width="160" height='180' />
            <h4>Grace Okoroafor</h4>
            <p>Partnerships and Strategies</p>
          </div>
          <div className="team">
            <img src={aku} alt="team" width="160" height='180' />
            <h4>Akunnaya Stewart</h4>
            <p>Campaigns</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
