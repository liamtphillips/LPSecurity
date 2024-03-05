import React from 'react';
import { motion } from 'framer-motion';


const FAQCard = ({ icon, title, lineOne, lineTwo, lineThree }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.5}}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className='w-full py-2 gap-y-4 flex flex-col mb-4 mt-4 '>
        <div className='flex flex-row text-white items-center gap-x-4 ml-1'>
          <div className='border-gray-600 rounded-full border p-4 flex items-center justify-center'>
            <h1 className='text-3xl'>{icon}</h1>
          </div>
          <h1 className='font-bold text-lg lg:text-3xl'>{title}</h1>
        </div>
        <div className='border-l-4 mt-4 border-indigo-600 ml-8 text-gray-300'>
          <p className='lg:text-lg text-base px-4 mb-4 pl-12 max-w-6xl'>
            {lineOne}
          </p>
          <p className='lg:text-lg text-base px-4 mb-4 pl-12 max-w-6xl'>
            {lineTwo}
          </p>
          <p className='lg:text-lg text-base px-4 pl-12 max-w-6xl'>
            {lineThree}
          </p>
        </div>
      </div>
      
    </motion.div>
  );
};

export default FAQCard;