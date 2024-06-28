import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import AboutFirst from "./AboutFirst";
import AboutSecond from "./AboutSecond";
import Up from "./Up";
import Footer from "./Footer";
import "./Logo.css";
import "./Home.css";

function About() {
  return (
    <div>
      <div className="the-home-page">
        <div class="navbar-container">
          <div class="navbar-inner">
            <div class="navbar-content">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <AboutFirst />
      <AboutSecond />
      <Footer />
      <Up />
    </div>
  )
};

export default About;