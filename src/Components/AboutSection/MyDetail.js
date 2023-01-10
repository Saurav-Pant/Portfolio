import React from "react";
import "./MyDetail.css";
import { motion } from "framer-motion";
import About from "../../asset/About.png";
import { IoPerson } from "react-icons/io5";

const animations2 = {
  h1: {
    initial: { y: "-100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  p: {
    initial: { y: "200%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  img: {
    initial: {
      y: "100%",
      opacity: 0,
    },
    transition: {
      type: "spring",
      stiffness: 100,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  },
};

const MyDetail = () => {
  return (
    <>
      <div className="About_Section">
        <motion.h1 className="ForDown" {...animations2.h1}>
          <IoPerson style={{ color: "black" }} /> About <span>Me</span>
        </motion.h1>
        <div className="About">
          <div className="left_About">
            <motion.img
              src={About}
              {...animations2.img}
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 1 }}
              className="AboutImg"
            />
          </div>
          <div className="right_About">
            <h1>I'm Saurav</h1>
            <motion.p className="Passion" {...animations2.p}>
              Passionate Full Stack Developer || Web3 Enthusiast
            </motion.p>
            <p className="Passion2">
              I have a passion for learning new technologies in web development
              and i want to explore field of web3 as soon as possible.
            </p>
            <motion.div className="resume" {...animations2.h1}>
              <button>Resume</button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDetail;
