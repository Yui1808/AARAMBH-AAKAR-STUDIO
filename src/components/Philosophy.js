import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from '../hooks/useInView';
import './Philosophy.css';

const principles = [
  {
    num: '01',
    title: 'Contextual Design',
    desc: 'Understanding the site, surroundings and local environment to create architecture that belongs.',
    icon: '⬡',
    color: '#C9A96E',
  },
  {
    num: '02',
    title: 'Functionality',
    desc: 'Creating spaces that are practical, comfortable and efficient — built for the people within.',
    icon: '◻',
    color: '#7A9E7E',
  },
  {
    num: '03',
    title: 'Sustainability',
    desc: 'Encouraging natural light, ventilation and responsible material selection for a greener future.',
    icon: '◈',
    color: '#C4714A',
  },
  {
    num: '04',
    title: 'Innovation',
    desc: 'Exploring creative ideas and contemporary design solutions that push the boundaries of form.',
    icon: '◇',
    color: '#C9A96E',
  },
  {
    num: '05',
    title: 'Human-Centric',
    desc: 'Designing around people\'s needs, comfort and experiences — placing life at the core of architecture.',
    icon: '◎',
    color: '#7A9E7E',
  },
];

function SpinningTorus({ color }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.getElapsedTime() * 0.5;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.3;
  });
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[0.6, 0.12, 12, 60]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

function CardCanvas({ color }) {
  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} color="#E8D5A3" />
      <pointLight position={[-2, -1, 1]} intensity={0.8} color={color} />
      <SpinningTorus color={color} />
    </Canvas>
  );
}

const Philosophy = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });
  const [hovered, setHovered] = useState(null);

  return (
    <section className="philosophy" id="philosophy" ref={ref}>
      <div className="philosophy-inner">
        <div className={`phil-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="label-line" />
            <span>Our Thinking</span>
          </div>
          <h2 className="section-title">
            Design<br /><em>Philosophy</em>
          </h2>
          <p className="phil-intro">
            Every space begins with an idea and evolves into an experience.
            We explore the balance between aesthetics, functionality, sustainability
            and the human spirit.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((p, i) => (
            <div
              key={p.num}
              className={`principle-card ${inView ? 'visible' : ''} ${hovered === i ? 'hovered' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-canvas-wrapper">
                {hovered === i && <CardCanvas color={p.color} />}
                {hovered !== i && (
                  <div className="card-icon-static" style={{ color: p.color }}>{p.icon}</div>
                )}
              </div>
              <div className="principle-content">
                <span className="principle-num" style={{ color: p.color }}>{p.num}</span>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.desc}</p>
              </div>
              <div className="principle-accent" style={{ background: `linear-gradient(135deg, ${p.color}22, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

