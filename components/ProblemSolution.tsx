/**
 * Problem Solution - Kaci Landing Page
 * 
 * Pattern: PROBLEM × SOLUTION × KACI × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META)
 * Guardians: AEYON (999 Hz) + META (777 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 */

import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="learn-more" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            The Problem We Solved
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            AI-assisted coding is here to stay… but it can create weaker structure and looping errors that burn through time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="bg-[#1754B5]/20 p-8 rounded-lg border border-blue-900">
            <h3 className="text-2xl font-bold text-white mb-6">The Challenge</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="font-bold text-red-400 mr-3">⚠️</span>
                <span>Weaker code structure from AI assistance</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-400 mr-3">🔄</span>
                <span>Looping errors that waste time and money</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-400 mr-3">💰</span>
                <span>Burning through budgets on fixes and rewrites</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-red-400 mr-3">⏱️</span>
                <span>Time lost debugging AI-generated issues</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-2xl font-bold text-[#33B8FF] mb-2">The Solution</h3>
            <h4 className="text-3xl font-extrabold text-white mt-1 mb-4">
              Guardians for Your Code
            </h4>
            <p className="mt-4 text-lg text-gray-300 mb-6">
              We felt this hard, searched for a solution—there wasn't one—so we built it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#33B8FF] font-bold mr-3 text-xl">1.</span>
                <div>
                  <p className="font-bold text-white">Improves Original Frameworks</p>
                  <p className="text-gray-300 text-sm mt-1">Strengthens code structure, prevents degradation</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#33B8FF] font-bold mr-3 text-xl">2.</span>
                <div>
                  <p className="font-bold text-white">Increases Speed & Efficiency</p>
                  <p className="text-gray-300 text-sm mt-1">7-20x faster builds, fewer iterations</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#33B8FF] font-bold mr-3 text-xl">3.</span>
                <div>
                  <p className="font-bold text-white">Decreases Overall Expenses</p>
                  <p className="text-gray-300 text-sm mt-1">Saves on team time and AI API calls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

