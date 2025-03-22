import React from 'react';
import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-[#100f0f] overflow-hidden min-h-screen flex items-center p-12 relative">
      <div className="absolute inset-0 grid grid-cols-16 gap-0">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="w-full h-full border border-gray-700 opacity-10"></div>
                ))}
            </div>
        {/* Content Section */}
        <div className="max-w-lg z-[100]">
          <h3 className="text-[#E9A734] text-lg font-semibold mb-2">About us</h3>
          <h1 className="text-white text-5xl font-bold mb-6">Shadient.co</h1>
          <p className="text-gray-400 leading-relaxed mb-6">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
            feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo
            id odio turpis pharetra elementum. Pulvinar porta porta feugiat
            scelerisque in elit. Morbi rhoncus, tellus, eros
          </p>
          <button className="bg-[#E9A734] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#d88b25] transition">
            CONTACT
          </button>
        </div>

        {/* Background Design */}
        {/* Background Design */}
        <div className="absolute z-[10] inset-0">
          <div style={{borderRadius:"37% 63% 98% 2% / 8% 47% 53% 92% "}} className="absolute left-[-100px] bottom-[-230px] w-96 h-96 bg-[#ef9364] rounded-full blur-3xl " />
          <div style={{borderRadius:"80% 20% 43% 57% / 30% 73% 27% 70% "}} className="absolute right-[-100px] top-[-30px] w-96 h-[400px] bg-[#8879cb] rounded-full blur-3xl " />
        </div>
      </div>

      {/* Company Section */}
      <div className="bg-[#110f0f] min-h-screen z-[999]  text-white p-12">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Company</h2>
          <p className="text-gray-400 leading-relaxed">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Team</h2>
          <p className="text-gray-400 leading-relaxed">
          Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  
          </p>
        </section>

        {/* Button Section */}
        <button className="border cursor-pointer border-yellow-500 text-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:text-black hover:bg-yellow-600 transition-all">
          GO TO HOME
        </button>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
