import React from 'react';

const LandingComponent = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Discover Culinary Excellence
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl">
          Experience a delightful journey through our diverse menu, featuring gourmet dishes made from the freshest ingredients. Perfect for a casual meal or a special occasion.
        </p>
        <a href="#menu" className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Explore Menu
        </a>
        <img
          src="https://images.unsplash.com/photo-1504674900247-e9df14d4d9d0"
          alt="Delicious Food"
          className="mx-auto mt-8 rounded-lg shadow-lg border-4 border-white"
        />
      </div>
    </div>
  );
};

export default LandingComponent;
