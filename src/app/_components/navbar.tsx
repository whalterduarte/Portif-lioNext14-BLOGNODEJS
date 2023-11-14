/* eslint-disable react/no-unknown-property */

'use client';


import { cn } from '@/lib/utils';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styleNav from './navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 right-0 m-4  ${isMenuOpen ? 'z-50' : ''}`}>
      <button
        className="text-white p-2 bg-primary rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-primary p-4 rounded-md transition-opacity duration-500 ease-in-out opacity-100">
          <div className="flex flex-col space-y-4 items-center">
            <a href="#" className="text-white hover:bg-white hover:text-gray-600 p-2 rounded" onClick={closeMenu}>
              Home
            </a>
            <a href="#" className="text-white hover:bg-white hover:text-gray-600 p-2 rounded" onClick={closeMenu}>
              About
            </a>
            <a href="#" className="text-white hover:bg-white hover:text-gray-600 p-2 rounded" onClick={closeMenu}>
              Services
            </a>
            <a href="#" className="text-white hover:bg-white hover:text-gray-600 p-2 rounded" onClick={closeMenu}>
              Contact
            </a>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
