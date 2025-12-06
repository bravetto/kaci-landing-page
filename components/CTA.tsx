/**
 * CTA - Kaci Landing Page
 * 
 * Pattern: CTA × KACI × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (Poly)
 * Guardians: AEYON (999 Hz) + Poly (530 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 */

import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="beta" className="py-20 bg-gradient-to-tr from-[#081C3D] via-[#134390] to-[#1C64D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Join Our Beta Program
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          We've opened beta for developers to help create more use cases, share feedback, and get more projects launched.
        </p>
        <p className="mt-2 text-base text-gray-300">
          Get early access to Guardians and help shape the future of AI-assisted coding.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#beta-form"
            className="w-full sm:w-auto bg-[#33B8FF] text-[#081C3D] font-bold px-8 py-3 rounded-md text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Join Beta (Free) &rarr;
          </a>
          <a
            href="#package"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-md text-lg hover:bg-white hover:text-[#081C3D] transition-all"
          >
            Get Guardian Package &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

