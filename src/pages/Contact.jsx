import React from 'react'
import { motion } from 'framer-motion';
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <motion.div
      className="container mx-auto min-h-screen px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div>
        <h1 className='lg:text-5xl text-3xl text-white font-bold mt-10 lg:mt-20'>Contact Us</h1>
        <div className='mt-10 text-gray-300'>
          <p>For general enquiries, give us a call.</p>
          <p>For platform demonstrations, please fill out the form below.</p>
        </div>
        <div className='mt-8 flex items-center gap-x-8'>
          <div className='border rounded-full p-4'>
            <FaPhone className='text-white text-3xl' />
          </div>
          <div className='text-white'>
            <p>+44 12345678</p>
            <p>Mon - Fri, 9:00-1800 GMT</p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <form className="w-full  flex md:flex-row flex-col mt-10">
        <div className="flex flex-wrap mb-6">
          {/* Left Column */}
          <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
            <label className="block tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="appearance-none block w-full bg-gray-700/10 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none " id="name" type="text" placeholder="..." />
          </div>
          <div className="w-full md:w-1/2 pr-4 mb-6 md:mb-0">
            <label className="block tracking-wide text-white  text-xs font-bold mb-2" htmlFor="surname">
              Surname
            </label>
            <input className="appearance-none block w-full bg-gray-700/10 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-non" id="surname" type="text" placeholder="..." />
          </div>
          <div className="w-full mt-4 pr-4 mb-6 md:mb-0">
            <label className="block tracking-wide text-white  text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-700/10 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none" id="email" type="email" placeholder="..." />
          </div>
          <div className="w-full mt-4  pr-4 mb-6 md:mb-0">
            <label className="block tracking-wide text-white  text-xs font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input className="appearance-none block w-full bg-gray-700/10 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none" id="phone" type="tel" placeholder="123-456-7890" />
          </div>
          <div className="w-full mt-4 pr-4 mb-6 md:mb-0">
            <label className="block  tracking-wide text-gray-300  text-xs font-bold mb-2" htmlFor="company">
              Company Name
            </label>
            <input className="appearance-none block w-full bg-gray-700/10 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none" id="company" type="text" placeholder="..." />
          </div>
          <div className="w-full mt-4 pr-4 mb-6 md:mb-0">
            <label className="block tracking-wide text-white  text-xs font-bold mb-2" htmlFor="jobTitle" >
              Job Title
            </label>
            <input className="appearance-none block w-full bg-gray-700/10 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none" id="jobTitle" type="text" placeholder="..." />
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full lg:pl-4 mb-6 md:mb-0">
          <div className="mb-6">
            <label className="block tracking-wide text-white text-xs  mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="w-full h-[305px] bg-gray-700/10 text-gray-300 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none" id="message" rows="6" placeholder="..."></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button className="bg-indigo-600 mt-5 hover:bg-indigo-700 transition-all duration-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
          </div>
        </div>
      </form>
      <p className='text-white mt-4 text-sm'>By clicking 'Submit' you consent to allow LPSECURITY to store and process the personal information submitted above to provide you with the content requested.</p>
    </motion.div>
  )
}

export default Contact