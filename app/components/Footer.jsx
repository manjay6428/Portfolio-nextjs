import React from "react";
import SocialHandles from "./SocialHandles";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Manjay.</h2>
          <p className="text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex space-x-6 my-4 md:my-0">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#work" className="hover:text-orange-500 transition">
            Work
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        <SocialHandles />
      </div>
    </footer>
  );
};

export default Footer;
