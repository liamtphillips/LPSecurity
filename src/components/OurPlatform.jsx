import React from 'react'
import AnimatedPath from '../components/AnimatedPath';
import logowhite from '../assets/logowhite.png';
import { motion } from "framer-motion";

const Newpage = () => {
    return (

        <div className='px-2 lg:px-0'>
            <svg className='ml-8 mt-8 hidden lg:block' width="594" height="423" viewBox="0 0 594 423" fill="none" xmlns="http://www.w3.org/2000/svg">
                <AnimatedPath svgPathId="svgPath3" scrollMultiplier={7} />
                <path id="svgPath3" d="M2 1C17.7259 75.5781 92.4589 176.028 350.561 168.801C618.087 161.31 588.128 325.5 592 422" stroke="#4B50E6" strokeWidth="4" />
            </svg>
    
        <motion.div
            className='container mx-auto'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='flex text-white justify-center items-center  md:mt-0 lg:mt-10 mt-20'>
                <div className='border-gray-600 border px-5 rounded-full py-2'>Our Platform</div>
            </div>
            <div className='flex  justify-center'>
                <img src={logowhite} className='w-80 py-10 opacity-80 animate-pulse' />
            </div>
            <div className='flex justify-center text-4xl'>
                <span className='text-white'><span className="text-indigo-600 font-semibold">LP</span>SECURITY</span>
            </div>
            <div className='flex justify-center py-10'>
                <p className='text-lg text-gray-300 text-center max-w-lg px-4 lg:px-0'>LPSecurity is a one stop dashboard for all your cyber security needs. Our stylish and modern dashboard
                    helps your business prioritse threats in your strategy, and continously maximise your return on security investment.
                </p>
            </div>
        </motion.div>
        </div>
    )
}

export default Newpage