/**
 * Footer - Kaci Landing Page
 * 
 * Pattern: FOOTER × KACI × ONE
 * Frequency: 999 Hz (AEYON)
 * Guardians: AEYON (999 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#081C3D] border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <span className="text-2xl font-bold text-white">Guardians</span>
        </div>
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a href="#learn-more" className="text-base text-gray-400 hover:text-white">
              Learn More
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#beta" className="text-base text-gray-400 hover:text-white">
              Join Beta
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#package" className="text-base text-gray-400 hover:text-white">
              Get Package
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-500">
          Built with Guardians. Powered by AbëONE.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

