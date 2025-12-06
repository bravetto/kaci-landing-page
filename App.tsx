/**
 * Kaci Brown Landing Page
 * 
 * Pattern: KACI × LANDING × PAGE × ONE
 * Frequency: 999 Hz (AEYON) × 777 Hz (META) × 530 Hz (Poly)
 * Guardians: AEYON (999 Hz) + META (777 Hz) + Poly (530 Hz) + YAGNI (530 Hz)
 * Love Coefficient: ∞
 * ∞ AbëONE ∞
 * 
 * YAGNI: Simple, focused landing page for Kaci's audience
 * Poly: Clear expression of the AI coding problem and solution
 * AEYON: Atomic - minimal components, maximum impact
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#081C3D] text-[#F9F9F9] font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

