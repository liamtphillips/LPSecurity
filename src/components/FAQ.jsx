import React from 'react'
import { IoMdArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import FAQCard from './FAQCard';
import { sections } from '../data/data';
import AnimatedPath from '../components/AnimatedPath';

const ServicesTest = () => {

  return (
    <div id="solution" className='container mx-auto min-h-screen max-w-screen'>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
         <svg className='ml-8 hidden lg:block' width="593" height="285" viewBox="0 0 593 285" fill="none">
            <AnimatedPath svgPathId="svgPath2" scrollMultiplier={7} />
            <path id="svgPath2" d="M591 0C591 90.6596 564.012 140.247 492.234 141.249C434.812 142.05 258.527 139.583 177.562 139.249C116 138.995 -2.5 151 2.99999 284.5" stroke="#4B50E6" strokeWidth="4" />
          </svg>
      </motion.div>
      <div className='mt-10 lg:mt-0'>
        {sections.map((section, index) => (
          <FAQCard key={index} {...section} />
        ))}
      </div>
     
      <motion.div
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ duration: 0.5, delay: 0.5 }}
       variants={{
         hidden: { opacity: 0, x: 50 },
         visible: { opacity: 1, x: 0 },
       }}
     >
      <div className='hidden border-gray-600 rounded-full border p-4 lg:inline-flex items-center justify-center'>
        <h1 className='text-3xl text-white'><IoMdArrowDown /></h1>
        </div>
      </motion.div>
    </div>

  )
}

export default ServicesTest