
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import SecurityLogo from '../assets/logotest2.png';
import { motion } from "framer-motion";

const Hero = () => {

      const textSectionVariants = {
        hidden: { opacity: 0, x: '-100vw' },
        visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 1 } }
      };
      
      return (
        <div>
          <motion.div
            className='container mx-auto px-4 pb-4'
            variants={textSectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex lg:flex-row flex-col ">
              {/* Text section */}
              <motion.div
                className="flex flex-col lg:w-2/3 text-white mt-10 lg:mt-28"
                variants={textSectionVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="max-w-3xl pb-10">
                  <h1 className="lg:text-6xl text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 inline-block text-transparent bg-clip-text">
                      A Revolution
                    </span><br /> In Security Investment
                  </h1>
                  <h1 className="text-2xl mt-6 text-gray-300 mb-2">LPSecurity provides your business with</h1>
                  <TypeAnimation
                    sequence={[
                      'Threat Detection and Prevention..',
                      1500,
                      'Vulnerability Management..',
                      1500,
                      'Incident Response and Forensics..',
                      1500,
                      'Network Security..',
                      1500
                    ]}
                    wrapper="span"
                    speed={50}
                    className="lg:text-2xl text-lg font-semibold text-gray-200"
                    repeat={Infinity}
                  />
                  <h1 className="text-2xl text-gray-300 mt-2 ">all in one place.</h1>
                  <p className="text-sm lg:text-2xl mt-6 text-gray-300">
                    We are your shield for seamless cyber security, unifying protection in one powerful dashboard.
                  </p>
                </div>
                <div className="flex pb-6 gap-x-6">
                  <ScrollLink to="security" smooth={true} duration={1000}>
                    <button
                      className="rounded-md text-md px-5 text-white py-2 mt-8 flex items-center gap-x-2 bg-indigo-600
                  hover:bg-indigo-700 transition-all duration-500"
                    >
                      Read On
                      <span className="text-sm"><FaArrowDownLong /></span>
                    </button>
                  </ScrollLink>
                  <RouterLink to="/about">
                  <button className="rounded-md text-md text-white px-4 py-2 mt-8 flex items-center gap-x-2 border
                border-gray-600 hover:border-white transition-all duration-500">
                    Quick Summary
                    <span className="text-sm"><FaArrowRightLong /></span>
                  </button>
                  </RouterLink>
                </div>
              </motion.div>
              {/* Image section */}
              <motion.div
                className="lg:w-1/3 mt-10"
                variants={{
                  hidden: { opacity: 0, },
                  visible: { opacity: 1, transition: { type: 'tween', duration: 1, delay: 0.5, } }
                 }}
                initial="hidden"
                animate="visible"
              >
                <img src={SecurityLogo} className="w-100 hidden lg:block " alt="LPSecurity Logo" />
                <div className="absolute bg-indigo-600 rounded-full w-60 h-60 opacity-50 blur-3xl animate-growShrink top-36 right-24 hidden lg:block"></div>
              </motion.div>
            </div>
          </motion.div>
          </div>
  )
}

export default Hero;