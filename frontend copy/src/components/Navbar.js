import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    {
      id: "home",
      title: "HOME",
      href: "/"
    },
    {
      id: "about",
      title: "ABOUT",
      href: "/about"
    },
    {
      id: "specials",
      title: "SPECIALS",
      href: "/specials"
    },
    {
      id: "application",
      title: "APPLICATIONS",
      href: "/application"
    },
    {
      id: "testimonials",
      title: "TESTIMONIALS",
      href: "/testimonials"
    },
    {
      id: "contact",
      title: "CONTACT",
      href: "/contacts"
    }
  ];

  const onChangeRedirectHome = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nice-logo" onClick={onChangeRedirectHome}>
          <div className="spinner-two">
            <h1 className="spinner-size spinner-nice">NATIONAL AUTO</h1>
            <h3 className="spinner-size">Leasing & Sales</h3>
          </div>
        </div>
        <div className="menu" onClick={() => { setMenuOpen(!menuOpen); }}>
          {menuOpen  ? <FaTimes className="span" /> : <FaBars className="span" />}
        </div>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          {navLinks.map(link => (
            <li key={link.id} className="the-link">
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;
