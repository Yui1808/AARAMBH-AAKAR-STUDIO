import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useInView } from '../hooks/useInView';
import './Different.css';

function FloatingArch() {
  const group = useRef();
  useFrame(({ clock, mouse }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.1 + mouse.x * 0.3;
    group.current.rotation.x = mouse.y * 0.1;
  });

  const archParts = [
    { pos: [-1.2, -1, 0], scale: [0.4, 2, 0.3] },   // left pillar
    { pos: [ 1.2, -1, 0], scale: [0.4, 2, 0.3] },   // right pillar
    { pos: [ 0,  1.1, 0], scale: [3.2, 0.3, 0.3] }, // lintel
  ];

  return (
    <group ref={group}>
      <Float floatIntensity={0.3} speed={1}>
        {archParts.map((p, i) => (
          <mesh key={i} position={p.pos}>
            <boxGeometry args={p.scale} />
            <meshStandardMaterial
              color="#C9A96E"
              metalness={0.7}
              roughness={0.2}
              emissive="#1a1000"
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}

        {/* arch ring on top */}
        <mesh position={[0, 1.1, 0]} rotation={[0, 0, 0]}>
          <torusGeometry args={[1.2, 0.18, 12, 50, Math.PI]} />
          <meshStandardMaterial color="#C9A96E" metalness={0.7} roughness={0.2} />
        </mesh>

        {/* orbiting accent */}
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 3) * Math.PI * 2) * 2.2,
              Math.sin((i / 3) * Math.PI * 2) * 2.2,
              -0.5,
            ]}
          >
            <tetrahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial color="#C4714A" metalness={0.5} roughness={0.3} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

const highlights = [
  { label: 'Individual Identity', desc: 'Every project gets a unique architectural solution — no fixed design language.' },
  { label: 'Detail & Craft',      desc: 'Meticulous attention to detail from conceptual sketches to final delivery.' },
  { label: 'Material Exploration',desc: 'Thoughtful selection of materials that connect spaces with their context.' },
  { label: 'Timeless Expression', desc: 'A balance between contemporary design and enduring architectural principles.' },
];

const Different = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section className="different" id="different" ref={ref}>
      <div className="different-bg-text">AAKAR</div>

      <div className="different-inner">
        <div className="different-left">
          <div className={`diff-header ${inView ? 'visible' : ''}`}>
            <div className="section-label">
              <span className="label-line" />
              <span>What Sets Us Apart</span>
            </div>
            <h2 className="section-title">
              Every Project<br />
              <em>Deserves Its Own</em><br />
              Identity.
            </h2>
            <p className="diff-intro">
              We do not follow a fixed design language. Instead, we explore each project's purpose,
              context and possibilities to develop unique architectural solutions that connect people
              with their surroundings.
            </p>
          </div>

          <div className={`highlights ${inView ? 'visible' : ''}`}>
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="highlight-item"
                style={{ transitionDelay: `${i * 0.1 + 0.3}s` }}
              >
                <span className="hi-dot" />
                <div>
                  <span className="hi-label">{h.label}</span>
                  <p className="hi-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`different-right ${inView ? 'visible' : ''}`}>
          <div className="diff-canvas">
            <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.5]}>
              <ambientLight intensity={0.3} />
              <directionalLight position={[4, 4, 4]} intensity={1.5} color="#E8D5A3" />
              <pointLight position={[-3, -2, 3]} intensity={0.9} color="#C4714A" />
              <pointLight position={[2, 2, -2]} intensity={0.5} color="#7A9E7E" />
              <FloatingArch />
            </Canvas>
          </div>

          <div className="tagline-box">
            <span className="tagline-quote">"</span>
            <p className="tagline-text">Where Ideas Begin,<br /><em>and Spaces Take Shape.</em></p>
            <div className="tagline-attr">— AARAMBH AAKAR STUDIO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;

