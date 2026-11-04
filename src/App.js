import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Process from './components/Process';
import Different from './components/Different';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Philosophy />
      <Services />
      <Process />
      <Different />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
