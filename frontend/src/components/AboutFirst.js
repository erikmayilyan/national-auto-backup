import React from "react";
import AboutImg from "../assets/aboutfirst.png";
import "./About.css";

function AboutFirst() {
  return (
    <div className="about-general">
      <div className="the-text">
        <h1>YOUR NEW CAR: DELIVERED</h1>
        <p>Contact us by any means you prefer. Either call us at 818.957.5700, or email us from our contact page.</p>
        <p>	Tell us about what car you want. Color, option preferences, buying timeframe, or see what the monthly specials are. (you can also see the specials in the "specials" page on our website).</p>
        <p>	Get the best deal on the spot, either by phone, or email, and enjoy your new vehicle.</p>
      </div>
      <div className="image">
        <img alt="img" src={AboutImg} />
      </div>
    </div>
  )
};

export default AboutFirst;