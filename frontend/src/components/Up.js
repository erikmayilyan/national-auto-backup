import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Up.css";

function Up() {
  const [visible, setVisible] = useState(false);

  const top = () => {
    window.scrollTo(0, 0)
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <button onClick={top} className={`up ${visible ? "visible" : ""}`}>
      <FaArrowUp className="the-up-arrow" />
    </button>
  )
};

export default Up;