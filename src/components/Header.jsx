import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 inset-x-0 backdrop-blur-sm w-full bg-black/30 z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <img src="/gradient-logo.svg" alt="Logo" className="w-[38px] h-[42px]" />
            <span className="text-white font-semibold text-base">Shadient.co</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium text-white">
            <button className="flex items-center gap-2 cursor-pointer">
              Company
              <img src="/dropDownArrow.svg" alt="arrow" className="w-[8.78px] h-[5.2px]" />
            </button>
            <Link to="/service" className="cursor-pointer">Services</Link>
            <Link to="/about-us" className="cursor-pointer">About Us</Link>
          </nav>
          <Button label="CONTACT" />
        </div>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

{/* Mobile Dropdown */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, type: 'spring' }}
      className="md:hidden fixed top-[80px] left-0 w-full backdrop-blur-md bg-[#0D0D0D]/80 z-40 px-6 py-6 text-white"
    >
      <nav className="flex flex-col gap-4 text-sm font-medium">
        <button className="flex items-center gap-2 cursor-pointer">
          Company
          <img src="/dropDownArrow.svg" alt="arrow" className="w-[8.78px] h-[5.2px]" />
        </button>

        {/* Clicking Services closes menu */}
        <Link to="/service" className="cursor-pointer" onClick={() => setIsOpen(false)}>
          Services
        </Link>

        {/* Clicking About Us closes menu */}
        <Link to="/about-us" className="cursor-pointer" onClick={() => setIsOpen(false)}>
          About Us
        </Link>

        <Button label="CONTACT" className="mt-2 w-fit" />
      </nav>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
};

export default Header;
