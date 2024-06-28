import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import More from "./More";
import Footer from "./Footer";
import Up from "./Up";
import logo from "../assets/logo.png";
import "./Logo.css";
import "./Home.css";

function Home() {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 3000);
  }, []);

  return (
    <div>
      {!done ? (
        <div className="loading">
          <div className="logo-container">
            <img src={logo} alt="Loading Logo" className="the-logo" />
          </div>
          <div className="spinner">
            <h1>NATIONAL AUTO</h1>
            <h3>Leasing & Sales</h3>
          </div>
        </div>
      ) : (
        <div className="the-home-page">
          <div class="navbar-container">
            <div class="navbar-inner">
              <div class="navbar-content">
                <Navbar />
              </div>
            </div>
          </div>
          <Hero />
          <More />
          <Contact />
          <Footer />
          <Up />
        </div>
      )
      }
    </div>
  );
};

export default Home;
