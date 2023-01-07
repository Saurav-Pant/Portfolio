import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import { motion } from "framer-motion"
import { FaHome } from "react-icons/fa";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TiContacts } from "react-icons/ti";
import { GiHiveMind } from "react-icons/gi";
// import Toggle from '../Toggle/Toggle';


const Navbar = () => {
  return (
        <>
        <div className="Whole_Nav">

            <motion.div className="logo_pic"
              initial={{ x:0,opacity:0}}
              animate={{ x:100,opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay:.6 }}
            >

             <h1><Link to="/" className='same1'>SauraV</Link> </h1>

            </motion.div>

            {/* NavSection */}
            {/* <Toggle/> */}

            <div className="main_nav">
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <Link to="/" className='same'>                        
                            <FaHome className='icon' /> HOME</Link>  
                   </li>

                    <li>
                        <Link to="/About" className='same' id="about"> <BsFileEarmarkPersonFill className='icon'/>ABOUT</Link>
                    </li>

                    <li>
                        <Link to="/Project" className='same' id='project'><HiOutlineComputerDesktop className='icon'/>PROJECTS</Link>
                    </li>

                    <li>
                        <Link to="/Skills" className='same' id='skill'> <GiHiveMind className='icon'/>SKILLS</Link>
                    </li>

                    <li>
                        <Link to="/Contact" className='same' id='contact'><TiContacts className='icon'/>CONTACT</Link>
                        
                    </li>

                </ul>
            </div>
        </div>

        </>
  )
}

export default Navbar