import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">ABOUT US</h3>
            <div className="space-y-3">
              <Link href="/community" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Join our Community
              </Link>
              <Link href="/success-stories" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Success Stories
              </Link>
              <Link href="/blogs" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Blogs
              </Link>
              <Link href="/events" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Events
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link href="/refund" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Popular Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">POPULAR PROGRAMS</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">TFP</span>
                </div>
                <Link href="/tech-fellowship" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tech Fellowship Program
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-cyan-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">REN</span>
                </div>
                <Link href="/renaissance" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Renaissance for Top Tech Companies
                </Link>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">LLD</span>
                </div>
                <Link href="/low-level-design" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Low Level Design & Concurrency
                </Link>
              </div>
            </div>
          </div>

          {/* More Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">MORE COURSES</h3>
            <div className="space-y-3">
              <Link href="/java-spring-boot" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Backend Development with Java Spring Boot
              </Link>
              <Link href="/data-structures" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Data Structures & Algorithms Essential
              </Link>
              <Link href="/python" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Become a Python Expert
              </Link>
              <Link href="/cpp" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Begin with Programming in C++
              </Link>
              <Link href="/frontend" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Frontend Engineering Pro
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">📞</span>
                <span className="text-gray-300 text-sm">+91 9871723495</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-gray-300">📍</span>
                <div className="text-gray-300 text-sm">
                  514, Iconic Corenthum Tower, Noida<br />
                  Sector 62, Noida.
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">✉️</span>
                <span className="text-gray-300 text-sm">help@programmingpathshala.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-4">SOCIAL LINKS</h4>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <span className="font-bold">Y</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <span className="font-bold">📷</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <span className="font-bold">in</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <span className="font-bold">f</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
