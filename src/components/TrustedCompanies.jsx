import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Logopipsum', logo: '🔲' },
  { name: 'Offmax', logo: '⚫' },
  { name: 'Skyhigh', logo: '🌫️' },
  { name: 'NextWave', logo: '🔷' },
  { name: 'InfiniTech', logo: '⚪' },
  { name: 'NetSphere', logo: '🔳' },
];

// Duplicate for a smooth infinite effect
const duplicatedCompanies = [...companies, ...companies];

const TrustedCompanies = () => {
  const animationDuration = 12; // Adjust duration for speed

  return (
    <section className="bg-black text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className='md:flex justify-between my-5 mb-7'>
          <h2 className="text-xl md:text-3xl  md:w-[50%] md:pr-36 font-bold mb-4">
            Trusted by 200+ companies around the world
          </h2>
          <p className="text-[#919090]  text-[16px] md:w-[50%] mb-8">
          Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
          </p>
        </div>
      </div>

      {/* First Row: Right to Left */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: animationDuration, ease: 'linear' }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex w-[192px] h-[72px] items-center justify-center border border-gray-600 rounded-lg">
              <span className="text-xl mr-2">{company.logo}</span>
              <span>{company.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row: Left to Right */}
      <div className="relative overflow-hidden mt-4">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ['-100%', '0%'] }}
          transition={{ repeat: Infinity, duration: animationDuration, ease: 'linear' }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex w-[192px] h-[72px] items-center justify-center border border-gray-600 rounded-lg">
              <span className="text-xl mr-2">{company.logo}</span>
              <span>{company.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
