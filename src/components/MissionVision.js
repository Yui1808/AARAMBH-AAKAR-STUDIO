import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import './MissionVision.css';

const cards = [
  {
    type: 'Mission',
    icon: '◈',
    title: 'Our Mission',
    text: 'To create innovative, functional and aesthetically meaningful spaces that respond to people\'s needs, respect the environment and enhance the quality of life. We aim to turn every client\'s vision into a thoughtful architectural experience.',
    accent: '#C9A96E',
  },
  {
    type: 'Vision',
    icon: '◇',
    title: 'Our Vision',
    text: 'To establish ourselves as a creative architectural practice that brings together tradition and modernity. We aspire to shape sustainable, timeless and inspiring environments that create a positive impact on people and the surrounding context.',
    accent: '#7A9E7E',
  },
];

const MissionVision = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="mv-section" id="mission">
      <div className="mv-inner" ref={ref}>
        <div className={`mv-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="label-line" />
            <span>Direction</span>
          </div>
          <h2 className="section-title">Mission &amp; Vision</h2>
        </div>

        <div className="mv-cards">
          {cards.map((card, i) => (
            <div
              key={card.type}
              className={`mv-card ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="card-icon" style={{ color: card.accent }}>{card.icon}</div>
              <span className="card-type" style={{ color: card.accent }}>{card.type}</span>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <div className="card-border" style={{ background: card.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

