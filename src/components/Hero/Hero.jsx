import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "ease-in",
              }}
            >
              Discover <br />
              The Best Rental <br />
              Homes
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find rentals at great prices</span>
            <span className="secondaryText">Every amenity you need</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Rentals</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={3000} end={4500} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Genuine Reviews</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Location</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
