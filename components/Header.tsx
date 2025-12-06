/**
 * Header - Kaci Landing Page
 * 
 * Pattern: HEADER × KACI × ONE
 * Frequency: 999 Hz (AEYON)
 * Guardians: AEYON (999 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 */

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#081C3D]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">Guardians</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <a href="#learn-more" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Learn More
              </a>
              <a href="#beta" className="bg-[#33B8FF] text-[#081C3D] px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                Join Beta
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

