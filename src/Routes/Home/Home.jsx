import React from "react";
import Navbar from '../../Components/Navbar/Navbar';
import "../Home/Home.css"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import me from '../../asset/Profile.png'
const animations = {
  h1: {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    transition:{ 
      type: "spring", 
      stiffness: 100,
      
    },
    whileInView: {
      x: 0,
      opacity: 1,
    }
  }
}
const Home = () => {
  return <>
    <Navbar/>
    <div className="whole_Main">
      <div className="left">
          <motion.h1 {...animations.h1}>Hi There,<br />
          I'm Saurav <br />
          <span>Pant</span></motion.h1>
          <Typewriter
            options={{
              strings: ["A FrontEnd Developer", "A Backend Developer", "A Creator"],
              autoStart: true,
              loop: true,
              // cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
      </div>
      
      <div className="right">
      <motion.img
      src={me}
      whileHover={{ scale: 1.1,rotate:720, border: "5px solid #222222",borderRadius:20}}
      transition={{ duration: 1 }}
      style={{ border: "5px solid transparent" }}
    />
      </div>
      
    </div>
    </>
};

export default Home;
