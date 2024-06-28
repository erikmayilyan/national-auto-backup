import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Up from "./Up";
import { useNavigate } from 'react-router-dom';
import "./Specials.css";

function Specials () {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/application');
  };

  return (
    <div className="specials">
      <div className="the-home-page">
        <div className="navbar-container">
          <div className="navbar-inner">
            <div className="navbar-content">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className="specialshero container">
        <div className="specialshero-text">
          <h1>SPECIALS</h1>
          <p>The Specials section at National Auto Leasing & Sales showcases exclusive deals on select cars, offering significant savings and exceptional value for our customers. Explore our limited-time offers and drive away with the best prices on top-quality vehicles.</p>
          <button className="reviewbtn" onClick={handleClick}>APPLY FOR CREDIT NOW</button>
        </div>
      </div>
      <div className="monthly">
        <h3>MONTHLY SPECIALS</h3>
        <p>To receive a listing of current offers, please contact National Auto Sales & Leasing by phone or email. Have a heavnely day!</p>
      </div>
      <Footer />
      <Up />
    </div>
  )
};

export default Specials;