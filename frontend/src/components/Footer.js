import React from "react";
import Logo from "../assets/national.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYelp } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const handleFacebook = () => {
    window.location.href = "https://www.facebook.com/NationalAutoLeasing";
  };

  const handleInstagram = () => {
    window.location.href = "https://www.instagram.com/nationalautola/";
  };

  const handleYelp = () => {
    window.location.href = "https://www.yelp.com/biz/national-auto-leasing-and-sales-glendale-2";
  };

  const handleGoogle = () => {
    window.location.href = "https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html";
  };

  return (
    <footer>
      <div className="darow">
        <div className="thecol">
          <img src={Logo} alt="logo" className="logo" />
          <p>National Auto offers unbeatable prices and personalized service on any make and model, ensuring a hassle-free car buying experience. Discover exceptional deals with no hidden catches at National Auto.</p>
        </div>
        <div className="thecol">
          <h3>Address</h3>
          <p className="add">1358 E. Colorado St Unit B</p>
          <p> Glendale, CA 91205</p>
          <p className="email">info@NationalAutoLa.com</p>
          <h4>+1 818.957.5700</h4>
        </div>
        <div className="thecol">
          <h3>Site Map</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/specials">Specials</a>
            </li>
            <li>
              <a href="/application">Application</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/contacts">Contact</a>
            </li>
          </ul>
        </div>
        <div className="thecol">
          <h3>Connect With Us:</h3>
          <div className="social-icons">
            <FaFacebook className="fab" onClick={handleFacebook} />
            <AiFillInstagram className="fab" onClick={handleInstagram} />
            <FaYelp className="fab" onClick={handleYelp} />
            <FaGooglePlus className="fab" onClick={handleGoogle} />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2024, National Auto Leasing & Sales. All Rights Reserved. | Website Developed by Erik Mayilyan</p>
    </footer>
  )
}

export default Footer;
