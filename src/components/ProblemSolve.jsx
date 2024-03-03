import React from 'react'
import { motion } from "framer-motion";
import ProblemCard from './ProblemCard';
import { cardsData } from '../data/data';
import JourneyComponent from './JourneyComponent';


const Security = () => {
  return (
    <div id="security" className='min-h-screen'>
      <motion.div
        className='flex flex-col max-w-xl text-center text-white py-4 mb-4 mx-auto'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className='flex text-white justify-center items-center  mt-16 lg:mt-24'>
          <JourneyComponent
            buttonContent="The Problem"
            headingContent="Your Business Is Under Threat"
            paragraphContent="Your sensitive information such as customer data, financial records, and intellectual property are all potentially vulnerable. 
        A security breach can erode customer trust and confidence."
          />
        </div>
      </motion.div>
      <div className='flex justify-center py-10'>
        <div className='grid md:grid-cols-2 grid-cols-1 text-white max-w-6xl gap-10 mt-6'>
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ProblemCard
              title={card.title}
              description={card.description}
              icon={card.icon}
              iconColor={card.iconColor} />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="w-[560px] ml-16 border-indigo-600  border-r-4 hidden py-12 lg:block my-8 "></div>
        <div className='flex text-white justify-center items-center mt-10 lg:mt-0 '>
          <JourneyComponent
            buttonContent="Our Solution"
            headingContent="Cyber Security Made Simple"
            paragraphContent="We take care of all your cyber security needs by offering an all in one solution in the form of a modern dashboard."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Security;