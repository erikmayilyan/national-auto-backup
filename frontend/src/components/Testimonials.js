import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Up from "./Up";
import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { FaYelp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";
import axios from "axios";

function Testimonials () {
  const [reviews, setReviews] = useState([]);

  const slider = useRef();
  let page = 0;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://national-auto-backup-frontend.onrender.com/api/reviews`
        );
        if (response.data) {
          setReviews(response.data);
        };
      } catch (error) {
        console.log('Error fetching reviews: ', error);
      }
    };

    fetchReviews();
  }, []);

  const slideForward = () => {
    if (page > -50) {
      page -= 20;
    };
    slider.current.style.transform = `translateX(${page}%)`
  };

  const slideBackward = () => {
    if (page < 0) {
      page += 20;
    };
    slider.current.style.transform = `translateX(${page}%)`
  };

  const displayStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} />);
    };
    return stars;
  };

  const handleReviewClickYelp = () => {
    window.location.href = "https://www.yelp.com/biz/national-auto-leasing-and-sales-glendale-2";
  };

  const handleReviewClickGoogle = () => {
    window.location.href = "https://www.google.com/maps/place/National+Auto+Leasing+and+Sales/@34.1425586,-118.2352573,15z/data=!4m2!3m1!1s0x0:0xf3c29a213e8adfb1?sa=X&ved=1t:2428&ictx=111";
  };

  return (
    <div className="testimonials">
      <div className="the-home-page">
        <div className="navbar-container">
          <div className="navbar-inner">
            <div className="navbar-content">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
      <div className="testhero container">
        <div className="testhero-text">
          <h1>LEAVE A REVIEW</h1>
          <p>Share your experience with National Auto Leasing & Financing to help others make informed decisions. Your review can make a difference in guiding future customers towards exceptional service.</p>
          <button className="reviewbtn" onClick={handleReviewClickGoogle}><FaGoogle className="reviewlogo" />  LEAVE A REVIEW ON GOOGLE</button>
          <button className="reviewbtn" onClick={handleReviewClickYelp}><FaYelp className="reviewlogo" />  LEAVE A REVIEW ON YELP</button>
        </div>
      </div>
      <div className="googlereviews">
        <h2>TESTIMONIALS</h2>
        <IoChevronBackCircle className="back-btn" onClick={slideBackward} />
        <IoChevronForwardCircleSharp className="next-btn" onClick={slideForward} />
        <div className="test-slider">
          <ul ref={slider}>
          {
            reviews.length > 0 ? (
              reviews.map((review) => (
                <li>
                  <div key={review.author_name} className="testimonial">
                    <div className="user-info">
                      <img src={review.profile_photo_url} alt="img" />
                      <div className="info-test">
                        <h3>{review.author_name}</h3>
                        <p className="the-stars">{displayStars(review.rating)}</p>
                      </div>
                    </div>
                    <p>{review.text}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>No Results Available</p>
            )
          }
          </ul>
        </div>
        <p className="thankyou">FOR MORE REVIEWS PLEASE VISIT GOOGLE REVIEWS OR YELP! THANK YOU!</p>
      </div>
      <Footer />
      <Up />
    </div>
  );
};

export default Testimonials;
