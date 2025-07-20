import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:flex lg:justify-between lg:gap-12">
          {/* About Us Section */}
          <div className="lg:flex-shrink-0">
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">ABOUT US</h3>
            <div className="space-y-1 sm:space-y-2">
              <Link href="/community" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Join our Community
              </Link>
              <Link href="/success-stories" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Success Stories
              </Link>
              <Link href="/blogs" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Blogs
              </Link>
              <Link href="/events" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Events
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Terms & Conditions
              </Link>
              <Link href="/refund" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Popular Programs Section */}
          <div className="lg:flex-shrink-0">
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">POPULAR PROGRAMS</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <img 
                  src="/TFP.svg"
                  alt="Tech Fellowship Program"
                  className="w-16 sm:w-20 md:w-24 h-auto object-contain flex-shrink-0"
                />
                <Link href="/tech-fellowship" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm leading-tight">
                  Tech Fellowship Program
                </Link>
              </div>
              
              <div className="flex items-center space-x-2">
                <img 
                  src="/RenaissanceForTTC.svg"
                  alt="Renaissance for Top Tech Companies"
                  className="w-16 sm:w-20 md:w-24 h-auto object-contain flex-shrink-0"
                />
                <Link href="/renaissance" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm leading-tight">
                  Renaissance for Top Tech Companies
                </Link>
              </div>
              
              <div className="flex items-center space-x-2">
                <img 
                  src="/LLD.svg"
                  alt="Low Level Design & Concurrency"
                  className="w-16 sm:w-20 md:w-24 h-auto object-contain flex-shrink-0"
                />
                <Link href="/low-level-design" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm leading-tight">
                  Low Level Design & Concurrency
                </Link>
              </div>
            </div>
          </div>

          {/* More Courses Section */}
          <div className="lg:flex-shrink-0">
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">MORE COURSES</h3>
            <div className="space-y-1 sm:space-y-2">
              <Link href="/java-spring-boot" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Backend Development with Java Spring Boot
              </Link>
              <Link href="/data-structures" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Data Structures & Algorithms Essential
              </Link>
              <Link href="/python" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Become a Python Expert
              </Link>
              <Link href="/cpp" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Begin with Programming in C++
              </Link>
              <Link href="/frontend" className="block text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                Frontend Engineering Pro
              </Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="lg:flex-shrink-0">
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">CONTACT US</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm sm:text-base">📞</span>
                <span className="text-gray-300 text-xs sm:text-sm">+91 9871723495</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-gray-300 text-sm sm:text-base">📍</span>
                <div className="text-gray-300 text-xs sm:text-sm">
                  514, Iconic Corenthum Tower, Noida<br />
                  Sector 62, Noida.
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm sm:text-base">✉️</span>
                <span className="text-gray-300 text-xs sm:text-sm break-all">help@programmingpathshala.com</span>
              </div>
            </div>
            
            <div className="mt-3 sm:mt-4">
              <h4 className="font-semibold text-sm sm:text-base mb-2">SOCIAL LINKS</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <img 
                    src="/youtube.svg" 
                    alt="YouTube" 
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </Link>
                <Link href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <img 
                    src="/instagram.svg" 
                    alt="Instagram" 
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </Link>
                <Link href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <img 
                    src="/linkedin.svg" 
                    alt="LinkedIn" 
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </Link>
                <Link href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-gray-200 transition-colors">
                  <img 
                    src="/facebook.svg" 
                    alt="Facebook" 
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
