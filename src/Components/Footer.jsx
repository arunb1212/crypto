import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              CryptoMarket
            </h3>
            <p className="text-gray-400 text-sm">
              The world's largest crypto market data aggregator. Track prices, analyze charts, and stay updated.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Features</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-400 hover:text-purple-500 text-xl cursor-pointer transition-colors" />
              <FaTwitter className="text-gray-400 hover:text-purple-500 text-xl cursor-pointer transition-colors" />
              <FaInstagram className="text-gray-400 hover:text-purple-500 text-xl cursor-pointer transition-colors" />
              <FaLinkedin className="text-gray-400 hover:text-purple-500 text-xl cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} CryptoMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
