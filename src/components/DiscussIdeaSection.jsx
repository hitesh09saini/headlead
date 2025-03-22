import React from 'react';

const DiscussIdeaSection = () => {
  return (
    <div className="bg-[#110f0f]  md:min-h-screen flex items-center p-9 justify-center">
      <div className='flex flex-col gap-6 w-[90%]'>
        <div className="bg-yellow-500 rounded-lg p-12  text-center">
          <h1 className="text-xl md:text-3xl font-bold text-black">Let’s discuss the idea</h1>
          <p className=" text-[#4e4d4d] mt-4">Risus commodo id odio turpis pharetra elementum. Pulvinar porta <br /> porta feugiat scelerisque in elit.</p>

          <div className="flex items-center gap-6 justify-center mt-8">
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-3 w-72 h-[52px]  border border-gray-600 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-full">
              Send
            </button>
          </div>


        </div>
        <div className='flex justify-end'>
          <button className="border cursor-pointer border-yellow-500 text-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:text-black hover:bg-yellow-600 transition-all">
            GO TO TOP
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscussIdeaSection;
