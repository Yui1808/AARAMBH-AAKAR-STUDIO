import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <span className="f-logo-main">AARAMBH AAKAR STUDIO</span>
          <p className="f-tagline">Where Ideas Begin, and Spaces Take Shape.</p>
        </div>

        <div className="footer-links">
          {[
            { label: 'About', id: 'about' },
            { label: 'Philosophy', id: 'philosophy' },
            { label: 'Process', id: 'process' },
            { label: 'Contact', id: 'contact' },
          ].map(l => (
            <button
              key={l.label}
              className="f-link"
              onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="footer-mid">
        <div className="f-philosophy">
          <span className="f-label">Design Philosophy</span>
          <p>Contextual · Functional · Sustainable · Innovative · Human-Centric</p>
        </div>
        <div className="f-philosophy">
          <span className="f-label">Studio Name Meaning</span>
          <p>Aarambh — The Beginning &nbsp;·&nbsp; Aakar — The Form &nbsp;·&nbsp; Studio — The Space</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="f-copy">© {year} Aarambh Aakar Studio. All rights reserved.</span>
        <div className="f-divider" />
        <span className="f-made">Crafted with purpose &amp; passion.</span>
      </div>
    </footer>
  );
};

export default Footer;

