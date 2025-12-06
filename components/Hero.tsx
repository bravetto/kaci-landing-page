/**
 * Hero - Kaci Landing Page
 * 
 * Pattern: HERO × KACI × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (Poly)
 * Guardians: AEYON (999 Hz) + Poly (530 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 */

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#081C3D] via-[#134390] to-[#1C64D9]">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              Guardians for Your Code
            </h1>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-200">
              AI-assisted coding is here to stay… but it can create weaker structure and looping errors that burn through time and money.
            </p>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-[#33B8FF] font-semibold">
              We felt this hard, searched for a solution—there wasn't one—so we built it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#beta"
                className="w-full sm:w-auto bg-[#33B8FF] text-[#081C3D] font-bold px-8 py-3 rounded-md text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
              >
                Join Beta &rarr;
              </a>
              <a
                href="#learn-more"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-md text-lg hover:bg-white hover:text-[#081C3D] transition-all"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
          
          {/* Right: Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-[#0E326C]/50 p-8 rounded-lg border-2 border-[#33B8FF]/30">
                <div className="aspect-square bg-gradient-to-br from-[#134390] to-[#1C64D9] rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-gray-300 text-sm">
                      Photo of Michael & Kaci<br />
                      (Add image here)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

