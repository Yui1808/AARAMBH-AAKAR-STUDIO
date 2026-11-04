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
            { label: 'Services', id: 'services' },
            { label: 'Process', id: 'process' },
            { label: 'Team', id: 'team' },
            { label: 'Contact', id: 'contact' },
          ].map((l) => (
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
          <p>Contextual &bull; Functional &bull; Sustainable &bull; Innovative &bull; Human-Centric</p>
        </div>
        <div className="f-philosophy">
          <span className="f-label">Studio Locations &amp; Direct Line</span>
          <p>Sector - 63 Noida &bull; Albatiya Agra &nbsp;|&nbsp; Direct: 9205343489 &bull; E-mail: xyz@aarambhaakar.com</p>
        </div>
        <div className="f-philosophy">
          <span className="f-label">Founders &amp; Leadership</span>
          <p>AR. Mohit Babu (CEO &amp; Founder) &bull; ER. Abhishek Singh (Civil Expertise - 8 Yrs)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="f-copy">&copy; {year} Aarambh Aakar Studio. All rights reserved.</span>
        <div className="f-divider" />
        <span className="f-made">Where Ideas Begin, and Spaces Take Shape.</span>
      </div>
    </footer>
  );
};

export default Footer;
