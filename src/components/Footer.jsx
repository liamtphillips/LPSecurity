import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='bg-gradient-to-t from-indigo-600  to-neutral-950 text-white py-16'>
      <div className="w-full mx-auto container p-4 md:flex md:items-center md:justify-between">
        <div className='flex flex-col'>
          <span className="text-2xl text-white ">Newsletter
          </span>
          <span className='text-sm text-white'>Stay up to date with our latest developments.</span>
          <form action="#" className='mt-4 md:w-[450px] w-full'>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                <input className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-600 sm:rounded-none sm:rounded-l-lg bg-black/10" autoComplete="email" placeholder="Enter your email" type="email" id="email" required="" />
              </div>
              <div>
                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border border-gray-600 bg-gray-600 sm:rounded-none sm:rounded-r-lg">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col mt-3 text-sm items-center text-gray-500 dark:text-gray-400">
          <div className='flex flex-row gap-x-2 items-center'>
            <p className="text-white md:text-lg text-md">© 2023-2024 LPSECURITY
            </p>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='text-white text-3xl md:text-4xl'><FaLinkedin /></a>
            <div className='border-l flex flex-col'>
              <p className='pl-2 text-white '>Cyber Security</p>
              <p className='pl-2 text-white '>Industry Experts</p>
              <p className='pl-2 text-green-400 italic'>For Enterprises</p>
            </div>
          </div>
          <div className='flex flex-row items-center gap-x-4 mt-4'>
            <div className='text-right text-xs  flex flex-col'>
              <p className=''>LPSECURITY LTD, Registered in England & Wales
              </p>
              <p className=''>Company No. 12345678 | VAT No. 12345678
              </p>
            </div>
            <p className='text-2xl text-white'><IoLockClosedOutline /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
