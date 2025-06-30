import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage; 