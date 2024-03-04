import React from 'react';

const JourneyComponent = ({ buttonContent, headingContent, paragraphContent }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border-gray-600 border px-5 rounded-full py-2'>{buttonContent}</div>
      <div className='flex flex-col justify-center items-center max-w-xl text-center text-white py-4 mb-4 mx-auto'>
        <h1 className='lg:text-4xl text-xl font-bold py-2 max-w-sm'>{headingContent}</h1>
        <p className='lg:text-base text-sm px-2 lg:px-0'>{paragraphContent}</p>
      </div>
    </div>
  );
};

export default JourneyComponent;