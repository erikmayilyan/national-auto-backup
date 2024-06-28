import React from "react";
import BMW2 from "../assets/series.png";
import "./More.css";

function More() {
  return (
    <section id="features" className="section">
      <div className="sectionInfo">
        <h3 className="moreTitle">
          WELCOME TO NATIONAL AUTO LEASING & SALES
        </h3>
        <p>
        It's no secret that buying a car at an auto dealership can be a stressful, annoying and time-consuming process. You don't need to waste your time and money any longer. Not to mention the aggravation.
        <br />
        <br />
        It's our job to give you the lowest price right away - it's what we do. Easy, quick and hassle-free. Whether at our office or right over the phone, we'll give you the best deal and deliver the car straight to your door, saving you time and thousands of dollars.</p>
      </div>
      <div className="imageInfo">
        <img src={BMW2} alt="bmw" className="car-img" />
      </div>
    </section>
  )
};

export default More;