"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 space-x-12">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Programming Pathshala Logo" 
                width={40} 
                height={40}
                className="w-80 h-10"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link 
                href="/fellowship" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-1"
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Fellowship Program</span>
                  <span className="text-xs" style={{ color: '#3940A0' }}>Launch Tech Career</span>
                </div>
              </Link>
            </div>
            
            <div className="relative group">
              <Link 
                href="/renaissance" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-1"
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Renaissance</span>
                  <span className="text-xs" style={{ color: '#3940A0' }}>Interview Preparation</span>
                </div>
              </Link>
            </div>
            
            <div className="relative group">
              <Link 
                href="/certification" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-1 flex items-center space-x-1"
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">Certification Courses</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <span className="text-xs" style={{ color: '#3940A0' }}>In-Demand Skills</span>
                </div>
              </Link>
            </div>
            
            <div className="relative group">
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 px-1 flex items-center space-x-1"
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">Resources</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <span className="text-xs" style={{ color: '#3940A0' }}>Free Learning</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
                <span 
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            <Link 
              href="/fellowship" 
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">Fellowship Program</span>
                <span className="text-xs" style={{ color: '#3940A0' }}>Launch Tech Career</span>
              </div>
            </Link>
            
            <Link 
              href="/renaissance" 
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">Renaissance</span>
                <span className="text-xs" style={{ color: '#3940A0' }}>Interview Preparation</span>
              </div>
            </Link>
            
            <Link 
              href="/certification" 
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium">Certification Courses</span>
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="text-xs" style={{ color: '#3940A0' }}>In-Demand Skills</span>
              </div>
            </Link>
            
            <Link 
              href="/resources" 
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium">Resources</span>
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="text-xs" style={{ color: '#3940A0' }}>Free Learning</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
