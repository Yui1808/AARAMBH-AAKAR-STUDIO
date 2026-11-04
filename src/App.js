import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import Different from './components/Different';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Philosophy />
      <Process />
      <Different />
      <Footer />
    </div>
  );
}

export default App;
