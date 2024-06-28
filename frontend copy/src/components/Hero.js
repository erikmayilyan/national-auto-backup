import React from "react";
import { IoCall } from "react-icons/io5";
import Sclass from "../assets/sclass.png";
import Toyota from "../assets/toyota.png";
import BMW from "../assets/bmw.png";
import Honda from "../assets/honda.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "./Hero.css";

SwiperCore.use([Autoplay]);

function Hero() {
  const handleCallClick = () => {
    window.location.href = "tel:+18189575700"; 
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }} 
    >
      <SwiperSlide>
        <section id="home" className="container-home">
          <div className="the-home">
            <div className="flex-container">
              <IoCall alt="call" className="size-32" />
              <span onClick={handleCallClick}>818 957 5700</span>
            </div>
            <div className="flex-row-center">
              <h1 className="combined-class">
                <FaRegCircleCheck className="circle" /> Any Make <br className="hidden sm-block" />{" "}
                <span><FaRegCircleCheck className="circle" /> Any Model</span> <br className="hidden sm-block" />{" "}
                <FaRegCircleCheck className="circle" /> Any Time <br className="hidden sm-block" />{" "}
                <span className="text-gradient">Unbeatable Price </span><span className="text-gradient"><br className="hidden sm-block" />{" "} <b className="no-catch">No Catch</b></span>
              </h1>
              <div className="the-second-part">
                <img src={Sclass} alt="sclass" className="the-car-img" />
                <div className="cool-effects"></div>
                <div className="second-effects"></div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section id="home" className="container-home">
          <div className="the-home">
            <div className="flex-container flex-very-nice-container">
              <IoCall alt="call" className="size-32" />
              <span onClick={handleCallClick}>818 957 5700</span>
            </div>
            <div className="flex-row-center">
              <h1 className="combined-class part-second">
                <FaRegCircleCheck className="circle" /> <span className="personalized">Personal Service</span> <br className="hidden sm-block" />{" "}
                <span><FaRegCircleCheck className="circle" /> No-Mark Up</span> <br className="hidden sm-block" />{" "}
                <FaRegCircleCheck className="circle" /> No Husstle <br className="hidden sm-block" />{" "}
                <span className="text-gradient">Get your car </span><span className="text-gradient"><br className="hidden sm-block" />{" "} <b className="no-catch">Call Today</b></span>
              </h1>
              <div className="the-second-part">
                <img src={BMW} alt="bmw" className="the-car-img car-bmw" />
                <div className="cool-effects"></div>
                <div className="second-effects"></div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section id="home" className="container-home">
          <div className="the-home">
            <div className="flex-container flex-nice-container">
              <IoCall alt="call" className="size-32" />
              <span onClick={handleCallClick}>818 957 5700</span>
            </div>
            <div className="flex-row-center">
              <h1 className="combined-class">
                <FaRegCircleCheck className="circle" /> Save Money <br className="hidden sm-block" />{" "}
                <span><FaRegCircleCheck className="circle" /> Save Time</span> <br className="hidden sm-block" />{" "}
                <FaRegCircleCheck className="circle" /> Save Nerves <br className="hidden sm-block" />{" "}
                <span className="text-gradient">We've get you </span><span className="text-gradient"><br className="hidden sm-block" />{" "} <b className="no-catch">Covered</b></span>
              </h1>
              <div className="the-second-part">
                <img src={Toyota} alt="toyota" className="the-car-img" />
                <div className="cool-effects"></div>
                <div className="second-effects"></div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section id="home" className="container-home">
          <div className="the-home">
            <div className="flex-container flex-nice-container">
              <IoCall alt="call" className="size-32" />
              <span onClick={handleCallClick}>818 957 5700</span>
            </div>
            <div className="flex-row-center">
              <h1 className="combined-class part-second">
                <FaRegCircleCheck className="circle" /> Leasing & Financing <br className="hidden sm-block" />{" "}
                <span><FaRegCircleCheck className="circle" /> Friendly Services</span> <br className="hidden sm-block" />{" "}
                <FaRegCircleCheck className="circle" /> Any Budget <br className="hidden sm-block" />{" "}
                <span className="text-gradient">Getting a new car </span><span className="text-gradient"><br className="hidden sm-block" />{" "} <b className="no-catch">Made Easy</b></span>
              </h1>
              <div className="the-second-part">
                <img src={Honda} alt="honda" className="the-car-img" />
                <div className="cool-effects"></div>
                <div className="second-effects"></div>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
