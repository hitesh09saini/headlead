import React from 'react';
import telescope from '../assets/telescope.png'

const WhyChooseUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex max-md:flex-col items-center w-full max-w-5xl">
        {/* Illustration */}
        <div className="w-1/2">
          <img src={telescope} alt="Person with telescope" className="max-w-full h-auto" />
        </div>

        {/* Text Content */}
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Why choose us</h2>
          <p className="text-[#919090] ">
            Commodo diam vulputate dui proin quis enim nibh. Non integer scelerisque libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus ut eu elit.
            Morbi aliquam porttitor mattis consequat neque, tellus blandit.
          </p>
          <button className="border cursor-pointer border-yellow-500 text-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:text-black hover:bg-yellow-600 transition-all">
            LET'S CONNECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
