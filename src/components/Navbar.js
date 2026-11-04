import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Philosophy', 'Services', 'Process', 'Team', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="logo-main">AARAMBH</span>
        <span className="logo-sub">AAKAR STUDIO</span>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <button key={link} className="nav-link" onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'bar bar1 open' : 'bar bar1'} />
        <span className={menuOpen ? 'bar bar2 open' : 'bar bar2'} />
        <span className={menuOpen ? 'bar bar3 open' : 'bar bar3'} />
      </button>
    </nav>
  );
};

export default Navbar;

