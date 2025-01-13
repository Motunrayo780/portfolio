import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              MyPortfolio
            </a>
          </div>


  {/* Social Media Icons */}
  <ul className="hidden md:flex space-x-4 text-xl">
          <li className="hover:text-gray-300 transition duration-300">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="hover:text-gray-300 transition duration-300">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div> 



          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

        
        </div>
      </div>

    
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
