import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="bg-gradient-to-r from-[#100f0f] from-55% to-[#100f0f46] fixed top-0 left-0 right-0 z-[999] h-20 flex items-center justify-between px-6 md:px-[70px] py-[24px]"
    >
      {/* Logo Section */}
      <Link to="/">
        <div className="text-[16px] font-bold text-white flex items-center gap-2">
          <img src={logo} alt="Shadient.co Logo" className="h-8" />
          Shadient.co
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-bars text-2xl"></i>}
      </button>

      {/* Navigation Section */}
      <nav className={`flex max-md:flex-col max-md:p-3  items-center gap-6 text-[16px] text-white absolute md:static top-20 right-0 w-full md:w-auto bg-[#100f0f] md:bg-transparent transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <div className="flex  items-center gap-6 md:gap-1 md:cursor-pointer hover:text-[#E9A734]">
          Company <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className="cursor-pointer hover:text-[#E9A734]">
          <Link to={'/service'}>Services</Link>
        </div>
        <div className="cursor-pointer hover:text-[#E9A734]">Resources</div>
        <button className="border text-[14px] border-[#E9A734] text-[#E9A734] rounded-[1000px] px-[24px] py-[10px] hover:bg-[#E9A734] hover:text-black transition">
          CONTACT
        </button>
      </nav>
    </motion.div>
  );
};

export default Header;
