import React from 'react';

const DeviceCard = ({ title, text, deviceImage, mtClass }) => {
    return (
      <div className={`border border-gray-800 backdrop-blur-md bg-gray-800/20 shadow-inner rounded-lg w-full lg:max-w-xl ${mtClass}`}>
        <div className='p-6'>
          <h1 className='font-semibold text-3xl text-white'>{title}</h1>
          <p className='text-lg text-gray-400 max-w-md mt-4'>{text}</p>
        </div>
        <img src={deviceImage} alt={title} />
      </div>
    );
  };

export default DeviceCard;