import React from "react";
import { useNavigate } from 'react-router-dom';
import "./About.css";

function AboutUs() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/application');
  };

  return (
    <div className="aboutus container">
      <div className="aboutus-text">
        <h1>ABOUT US</h1>
        <p>It's our job to give you the lowest price right away - it's what we do. Easy, quick and hassle-free. Whether at our office or right over the phone, we'll give you the best deal and deliver the car straight to your door, saving you time and thousands of dollars.</p>
        <button className="btn" onClick={handleClick}>APPLY FOR CREDIT NOW</button>
      </div>
    </div>
  )
};

export default AboutUs;