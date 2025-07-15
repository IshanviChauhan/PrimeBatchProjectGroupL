import React from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <span className="font-bold text-xl text-gray-900">
                Programming Pathshala
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link 
                href="/fellowship" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium flex items-center space-x-1"
              >
                <span>Fellowship Program</span>
              </Link>
              <div className="text-xs text-gray-500 absolute -bottom-4 left-0">
                Launch Tech Career
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                href="/renaissance" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium flex items-center space-x-1"
              >
                <span>Renaissance</span>
              </Link>
              <div className="text-xs text-gray-500 absolute -bottom-4 left-0">
                Interview Preparation
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                href="/certification" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium flex items-center space-x-1"
              >
                <span>Certification Courses</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="text-xs text-gray-500 absolute -bottom-4 left-0">
                In-Demand Skills
              </div>
            </div>
            
            <div className="relative group">
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium flex items-center space-x-1"
              >
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="text-xs text-gray-500 absolute -bottom-4 left-0">
                Free Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
