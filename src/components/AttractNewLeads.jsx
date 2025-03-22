import React from 'react';
import { motion } from 'framer-motion';

const AttractNewLeads = () => {
    return (
        <div className="relative w-full  h-screen bg-[#110f0f] overflow-hidden flex items-center justify-center">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-500 opacity-20" /> */}
            <div className="absolute inset-0 grid grid-cols-16 gap-0">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="w-full h-full border border-gray-700 opacity-10"></div>
                ))}
            </div>

            <div className="relative z-[100] pt-[100px] w-[400px] sm:w-[600px]  ">
                <motion.div
                    initial={{ y: 1000, opacity: 0.5, scale: 0.2, rotate: 360 }}
                    animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
                    transition={{
                        y: { duration: 1, ease: 'easeOut' },
                        scale: { duration: 1, ease: 'easeOut', delay: 1 },
                        rotate: { duration: 1.2, ease: 'easeOut' },
                        width: { duration: 1.5, ease: 'easeOut', delay: 1 },
                        opacity: { duration: 1, ease: 'easeOut' },
                    }}
                    className="text-white text-center text-[70px] flex flex-col font-bold leading-none tracking-tight"
                >
                    Attract
                    <span className="text-8xl font-bold bg-gradient-to-r from-[#c78588] via-[#e08b0b] to-cyan-400 bg-clip-text text-transparent">
                        NewLeads
                    </span>
                    <span className=""> like never</span>
                    before
                </motion.div>


                <p className="text-[#919090]  mt-4 text-lg">
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                </p>

                <div className="flex items-center gap-6 justify-center mt-8">
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-6 py-3 w-72 h-[52px]  border border-gray-600 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full">
                        ATTRACT
                    </button>
                </div>

            </div>

            {/* Background Design */}
            <div className="absolute z-[10] inset-0">
                <div style={{ borderRadius: "37% 63% 98% 2% / 8% 47% 53% 92% " }} className="absolute left-[-100px] bottom-[-230px] w-96 h-96 bg-[#ef9364] rounded-full blur-3xl " />
                <div style={{ borderRadius: "80% 20% 43% 57% / 30% 73% 27% 70% " }} className="absolute right-[-100px] top-[-30px] w-96 h-[400px] bg-[#8879cb] rounded-full blur-3xl " />
            </div>
        </div>
    );
};

export default AttractNewLeads;
