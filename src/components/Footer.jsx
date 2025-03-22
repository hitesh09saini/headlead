import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8 px-6 md:px-0">
        {/* Company Section */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-4">
            <li><Link to={'/about-us'} className="hover:text-yellow-500 cursor-pointer">About us</Link></li>
            <li className="hover:text-yellow-500 cursor-pointer">Team</li>
            <li className="hover:text-yellow-500 cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-4">
            <li className="hover:text-yellow-500 cursor-pointer">Branding</li>
            <li className="hover:text-yellow-500 cursor-pointer">Web development</li>
            <li className="hover:text-yellow-500 cursor-pointer">Digital marketing</li>
            <li className="hover:text-yellow-500 cursor-pointer">Mobile app</li>
            <li className="hover:text-yellow-500 cursor-pointer">SEO</li>
            <li className="hover:text-yellow-500 cursor-pointer">User testing</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-4">
            <li className="hover:text-yellow-500 cursor-pointer">Blog</li>
            <li className="hover:text-yellow-500 cursor-pointer">Case study</li>
            <li className="hover:text-yellow-500 cursor-pointer">Testimonials</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>
          <ul className="space-y-4">
            <li className="hover:text-yellow-500 cursor-pointer">Instagram</li>
            <li className="hover:text-yellow-500 cursor-pointer">Figma</li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="flex flex-col items-start">
          <div className="text-[16px] mb-3 font-bold text-white flex items-center gap-2">
            <img src={logo} alt="Shadient.co Logo" className="h-8" />
            Shadient.co
          </div>
          <p className="text-gray-400 mb-4">Get latest updates</p>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-2 px-4 rounded-full bg-black border border-gray-600 text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 text-gray-500">
        Created by Shadient.co
      </div>
    </footer>
  );
};

export default Footer;
