import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import './Team.css';

const teamMembers = [
  {
    name: 'AR. Mohit Babu',
    role: 'CEO & Founder',
    title: 'Principal Architect & Creative Director',
    expertise: 'Architectural Vision, Conceptual Design, Sustainable Masterplanning',
    quote: 'Architecture is not just about buildings, but creating meaningful spaces that inspire people and enhance everyday living.',
    experience: 'Founder & Design Head',
    avatarTag: 'AR',
    accentColor: '#C9A96E',
  },
  {
    name: 'ER. Abhishek Singh',
    role: 'Civil Engineering Lead & Partner',
    title: 'Head of Civil Engineering & Structural Execution',
    expertise: 'Structural Integrity, RCC Planning, High-Precision Site Execution',
    quote: 'Every great design demands an unshakeable foundation — where architectural imagination meets engineering precision.',
    experience: '8+ Years of Civil Engineering Expertise',
    avatarTag: 'ER',
    accentColor: '#7A9E7E',
  },
];

const Team = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section className="team" id="team" ref={ref}>
      <div className={`team-inner ${inView ? 'visible' : ''}`}>
        {/* Header */}
        <div className="team-header">
          <div className="section-label">
            <span className="label-line" />
            <span>Leadership &amp; Minds</span>
          </div>
          <h2 className="section-title">
            The Minds Behind<br />
            <em>Aarambh Aakar Studio</em>
          </h2>
          <p className="team-intro">
            A potent union of architectural innovation and engineering rigor — transforming vision into enduring, functional spaces.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="team-card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Top Accent Strip */}
              <div className="card-top-accent" style={{ background: member.accentColor }} />

              <div className="card-body">
                {/* Monogram Badge */}
                <div className="avatar-monogram" style={{ borderColor: member.accentColor }}>
                  <span className="monogram-tag" style={{ color: member.accentColor }}>{member.avatarTag}</span>
                </div>

                <div className="member-meta">
                  <span className="member-badge" style={{ color: member.accentColor }}>{member.role}</span>
                  <h3 className="member-name">{member.name}</h3>
                  <h4 className="member-title">{member.title}</h4>
                </div>

                <div className="member-divider" />

                <div className="member-exp">
                  <span className="exp-label">Focus &amp; Expertise</span>
                  <p className="exp-text">{member.expertise}</p>
                </div>

                <div className="member-highlight" style={{ borderColor: `${member.accentColor}33` }}>
                  <span className="highlight-tag" style={{ color: member.accentColor }}>{member.experience}</span>
                </div>

                <blockquote className="member-quote">
                  "{member.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
