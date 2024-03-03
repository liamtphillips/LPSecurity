import React from 'react'
import SecurityLogo from '../assets/logotest2.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="container mx-auto min-h-screen px-4 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex lg:flex-row flex-col ">
        {/* Text section */}
        <div
          className="flex flex-col lg:w-2/3 text-white mt-10 lg:mt-28"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl pb-10">
            <h1 className="lg:text-6xl text-3xl font-bold mb-2">
              Empowering Security Investments
            </h1>
            <h1 className="text-2xl mt-6 text-gray-300 mb-2">Our Story</h1>
            <p className="text-sm lg:text-lg mt-6 text-gray-300">
              LPSecurity sets itself apart with state-of-the-art threat detection and response mechanisms. Leveraging the latest technologies,
              the company provides proactive solutions to identify and neutralize cyber threats before they can cause harm.
              <br></br>
              <br></br>
              In a landscape where cyber threats are ever-evolving, LPSecurity stands out as a beacon of excellence. With its advanced threat detection,
              tailored solutions, and unwavering commitment to client security, LPSecurity is making a significant impact in the cybersecurity industry.
              As businesses seek reliable partners to fortify their digital defenses, LPSecurity's rise marks a new era of cybersecurity solutions that are
              both effective and client-focused.
            </p>
          </div>
        </div>
        {/* Image section */}
        <div
          className="lg:w-1/3 mt-10 flex justify-center items-center" // Modified class names
          initial="hidden"
          animate="visible"
        >
          <img src={SecurityLogo} className="w-100 lg:block" alt="LPSecurity Logo" />
        </div>
      </div>
    </motion.div>
  );
};

export default About