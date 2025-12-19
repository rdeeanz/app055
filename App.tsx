import React from 'react';
import Hero from './components/Hero';
import RealityCheck from './components/RealityCheck';
import Consequences from './components/Consequences';
import Solution from './components/Solution';
import Comparison from './components/Comparison';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-50 antialiased selection:bg-red-500 selection:text-white">
      <Hero />
      <RealityCheck />
      <Consequences />
      <Solution />
      <Comparison />
      <SocialProof />
      <Offer />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}

export default App;