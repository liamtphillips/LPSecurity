import React from 'react';
import AnimatedPath from '../components/AnimatedPath';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import JourneyComponent from '../components/JourneyComponent';
import DeviceCard from '../components/DeviceCard';
import { deviceData } from '../data/data';

const DrawPathOnScroll = () => {

  return (
    <div className='min-h-screen mt-10 '>
      <svg className='absolute z-[-1] hidden lg:block' width="1155" height="840" viewBox="0 0 1155 792" fill="none">
        <AnimatedPath svgPathId="svgPath4" scrollMultiplier={7.5} />
        <path id="svgPath4"
          d="M620.152 0C620.152 97.9769 588.053 205.103 513.096 206.186C453.131 207.052 269.038 204.385 184.487 204.024C120.683 203.752 -1.68709 216.529 2.08524 357.757C3.51361 404.768 45.8445 501.276 203.741 511.218C361.638 521.161 600.356 222.153 756.75 255.676L949.768 337.732L1084.39 452.311L1097.75 494.339C1120.02 558.383 1101.71 650.947 986.886 728"
          stroke="#4B50E6"
          strokeWidth="4" />
      </svg>

      <div className='flex flex-col lg:flex-row lg:gap-40 gap-10 items-center justify-center '>
        {deviceData.map((item, index) => (
           <motion.div
           key={index}
           initial='hidden'
           whileInView='visible'
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
           variants={{
             hidden: {
               opacity: 0,
               y: index % 2 === 0 ? -50 : 50,
             },
             visible: { opacity: 1, y: 0 },
           }}
           >
          <DeviceCard key={index} {...item} mtClass={index === 1 ? 'lg:mt-20' : ''} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='flex text-white justify-center items-center  mt-36'>
          <JourneyComponent
            buttonContent="In Conclusion"
            headingContent="Your Business Is Safe In Our Hands"
            paragraphContent="Our commitment to safeguarding your digital assets is unparalleled, trust in our expertise to deliver a secure environment for your business operations."
          />
        </div>
        <div className="flex items-center justify-center mb-32">
          <Link
            to="/contact"
            className="text-white border-2 text-xl  border-indigo-700 px-6 py-2 rounded-md hover:bg-indigo-700 transition-all duration-500"
          >
            Request a Demo
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default DrawPathOnScroll;
