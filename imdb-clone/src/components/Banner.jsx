import React from 'react'

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[150vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/736x/6d/22/3f/6d223f50dfe4af0e0088c351ed1a4464.jpg)`,
      }}
    >
      <div className='text-white text-center w-full bg-gray-900/60 p-4'>
        KALKI 2898AD
      </div>
      
    </div>
  );
}

export default Banner