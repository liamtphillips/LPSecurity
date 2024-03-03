import React from 'react';

const TeamCard = ({ name, role, experience, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col text-center py-10 text-white items-center gap-x-4 `}
    >
      <div className='border-indigo-600 border-2 rounded-full p-1 flex items-center justify-center'>
        <img src={image} className='max-w-40 rounded-full' alt={`Team member - ${name}`} />
      </div>
      <div className={`md:text-left ${
            isEven ? 'lg:border-r-4 border-indigo-600 gap-x-10 lg:pr-10' : 'lg:pl-8'
          }`}>
        <p
          className='max-w-md pl-2 text-lg py-2'
        >
          {experience}
        </p>
        <h1 className='pl-2 text-indigo-400'>{name}</h1>
        <h1 className='pl-2 text-gray-400'>{role}</h1>
      </div>
    </div>
  );
};

export default TeamCard;