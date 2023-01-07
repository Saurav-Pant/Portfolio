import React from "react";
import "./MyDetail.css";
import { motion } from "framer-motion";
import About from "../../asset/About.png";
import { IoPerson } from "react-icons/io5";

const MyDetail = () => {
  return (
    <>
      <div className="About_Section">
        <h1 className="ForDown">
          <IoPerson style={{ color: "black" }} /> About <span>Me</span>
        </h1>
        <div className="About">
          <div className="left_About">
            <motion.img src={About} className="AboutImg" />
          </div>
          <div className="right_About">
            <h1>I'm Saurav</h1>
            <p className="Passion">
              Passionate Full Stack Developer || Web3 Enthusiast
            </p>
            <p className="">
              I have a passion for learning new technologies in web development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDetail;
