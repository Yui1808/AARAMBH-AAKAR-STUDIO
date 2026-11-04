import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useInView } from '../hooks/useInView';
import './Process.css';

const steps = [
  { num: '01', stage: 'Understanding', desc: 'Listening to the client\'s vision, needs and aspirations. We immerse ourselves in your world before a single line is drawn.' },
  { num: '02', stage: 'Exploring',      desc: 'Researching the site, context and design possibilities. Every location has a story — we uncover it.' },
  { num: '03', stage: 'Conceptualising',desc: 'Developing ideas, concepts and architectural identity. This is where imagination becomes direction.' },
  { num: '04', stage: 'Designing',      desc: 'Transforming concepts into functional and aesthetic spaces. Precision meets creativity in every detail.' },
  { num: '05', stage: 'Delivering',     desc: 'Providing detailed drawings, visualisations and design solutions that bring your space to life.' },
];

function ProcessOrb() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.getElapsedTime() * 0.3;
    mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#C9A96E"
        metalness={0.8}
        roughness={0.1}
        emissive="#2a1800"
        emissiveIntensity={0.4}
        wireframe
      />
    </mesh>
  );
}

const Process = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section className="process" id="process" ref={ref}>
      <div className="process-inner">
        <div className="process-left">
          <div className={`process-header ${inView ? 'visible' : ''}`}>
            <div className="section-label">
              <span className="label-line" />
              <span>How We Work</span>
            </div>
            <h2 className="section-title">
              Our Design<br /><em>Approach</em>
            </h2>
            <p className="process-intro">
              A structured yet flexible journey — from your vision to a space that truly lives and breathes.
            </p>
          </div>

          <div className="process-orb">
            <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 1.5]}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[3, 3, 3]} intensity={1.5} color="#E8D5A3" />
              <pointLight position={[-2, -2, 2]} intensity={0.8} color="#C4714A" />
              <ProcessOrb />
            </Canvas>
          </div>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`step ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="step-left">
                <div className="step-num">{s.num}</div>
                {i < steps.length - 1 && <div className="step-connector" />}
              </div>
              <div className="step-body">
                <h3 className="step-stage">{s.stage}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

