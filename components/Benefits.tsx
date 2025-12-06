/**
 * Benefits - Kaci Landing Page
 * 
 * Pattern: BENEFITS × KACI × ONE
 * Frequency: 999 Hz (AEYON) × 530 Hz (Poly)
 * Guardians: AEYON (999 Hz) + Poly (530 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 */

import React from 'react';

const benefits = [
  {
    icon: '🚀',
    headline: '7-20x Faster Builds',
    body: 'Our dev team is now fully leveraged—completing complex builds 7-20x faster than before.',
  },
  {
    icon: '🛡️',
    headline: 'Stronger Code Structure',
    body: 'Guardians improve original frameworks, preventing weaker structure from AI assistance.',
  },
  {
    icon: '💰',
    headline: 'Lower Costs',
    body: 'Decrease expenses on team time and AI API calls with smarter, more efficient code.',
  },
  {
    icon: '🔄',
    headline: 'No More Looping Errors',
    body: 'Prevent the endless debugging cycles that burn through time and money.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-[#0E326C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Guardians Do for You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.headline}
              className="bg-[#081C3D]/50 p-8 rounded-lg shadow-lg hover:bg-[#081C3D]/70 transition-all"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white">{benefit.headline}</h3>
              <p className="mt-2 text-gray-300">{benefit.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

