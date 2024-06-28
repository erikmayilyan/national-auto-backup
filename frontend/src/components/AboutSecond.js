import React from "react";
import AboutImg2 from "../assets/aboutsecond.png";
import "./About.css";

function AboutSecond() {
  return (
    <div className="about-general general-second">
      <div className="image">
        <img alt="img" src={AboutImg2} />
      </div>
      <div className="the-text second-text">
        <h1>WHAT WE DO</h1>
        <p>Best deals, done right over the phone on any make, any model.</p>
        <p>Outstanding personalized service.</p>
        <p>Valuable professional advice and insider information on current lease specials.</p>
        <p>Cars delivered straight to your door, at no extra charge (in most cases)</p>
        <p>Best price and satisfaction guarantee.</p>
        <p>Just give us a call and see for yourself.</p>
        <p>When you like what hear, and are ready to proceed, we will get a quick credit approval for you (if needed) and then deliver your new vehicle straight to your door - or have it ready to be picked up at our office, per your preference.</p>
        <p>For more information, or if you have any questions, feel free to contact us at any time. We look forward to hearing from you.</p>
      </div>
    </div>
  )
};

export default AboutSecond;