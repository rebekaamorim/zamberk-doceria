import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Experience from './components/Experience';
import Logistics from './components/Logistics';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-earth-50 font-sans selection:bg-gold-300 selection:text-earth-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Experience />
        <Logistics />
        <Process />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;