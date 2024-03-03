import React from 'react';
import { motion } from 'framer-motion';
import teampic from '../assets/team.png'
import { teamMembersData } from '../data/data';
import TeamCard from '../components/TeamCard';

const Team = () => {

    return (
        <motion.div
            className="container mx-auto min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div className="flex md:flex-row flex-col justify-between gap-y-10 lg:pt-20">
                <div className="mt-10 lg:ml-5 px-4 lg:px-0">
                    <h2 className='lg:text-6xl text-3xl text-white font-bold mb-4'>Meet the team</h2>
                    <p className='text-gray-200 text-lg max-w-lg'>With a wealth of expertise in delivering security solutions to enterprises, our team has directly encountered the prevalent pain points and challenges customers encounter while investing in and deriving value from security products.
                        We've crafted a solution designed to address and resolve these issues, empowering enterprises to navigate the security landscape with greater ease and effectiveness.
                    </p>
                </div>
                <div className="">
                    <img src={teampic} alt="connections" className='px-10' />
                </div>
            </div>
            <div className='w-full py-2 gap-y-4 flex flex-col lg:flex-row lg:grid lg:grid-cols-2 lg:gap-x-4 mb-4 mt-4 items-center'>
                {teamMembersData.map((member, index) => (
                    <TeamCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        experience={member.experience}
                        image={member.image}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Team;
