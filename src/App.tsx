import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyEther from './components/WhyEther';
import Services from './components/Services';
import Process from './components/Process';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="font-inter text-ether-text bg-ether-dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyEther />
        <Services />
        <Process />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;