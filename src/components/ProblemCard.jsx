import React from 'react';


const ProblemCard = ({ title, description, icon, }) => {
  return (
    <div className='flex flex-row items-start'>
      <div className='bg-indigo-600 inline-flex p-2 rounded-xl mx-4'>
        <span className='text-3xl'>{icon}</span>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='mt-2 text-sm text-gray-300'>{description}</p>
      </div>
    </div>
  );
};

export default ProblemCard;