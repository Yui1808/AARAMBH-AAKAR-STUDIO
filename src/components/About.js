import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import { useInView } from '../hooks/useInView';
import './About.css';

function RotatingGeometry() {
  const group = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.2;
      group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <Float floatIntensity={0.4} speed={1.5}>
        <RoundedBox args={[2, 2, 2]} radius={0.1} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#C9A96E"
            metalness={0.7}
            roughness={0.2}
            emissive="#2a1f00"
            emissiveIntensity={0.4}
            wireframe
          />
        </RoundedBox>
      </Float>

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 1.6,
            Math.sin((i / 6) * Math.PI * 2) * 1.6,
            0,
          ]}
        >
          <octahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial color="#C4714A" metalness={0.5} roughness={0.3} />
        </mesh>
      ))}

      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.9, 0.015, 8, 80]} />
        <meshStandardMaterial color="#8B8070" metalness={0.3} roughness={0.5} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

const About = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`about-inner ${inView ? 'visible' : ''}`}>
        <div className="about-3d">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[3, 3, 3]} intensity={1.5} color="#E8D5A3" />
            <pointLight position={[-3, -3, 2]} intensity={0.8} color="#C4714A" />
            <RotatingGeometry />
          </Canvas>
        </div>

        <div className="about-text">
          <div className="section-label">
            <span className="label-line" />
            <span>About the Studio</span>
          </div>

          <h2 className="section-title">
            Architecture begins with<br />
            <em>an idea.</em>
          </h2>

          <p className="about-para">
            <strong>AARAMBH AAKAR STUDIO</strong> is an architectural design firm driven by creativity,
            innovation and thoughtful design. We believe that architecture is not just about constructing
            buildings — it is about creating meaningful spaces that inspire people and enhance everyday living.
          </p>

          <p className="about-para">
            Our approach combines modern architectural practices with cultural values, natural elements
            and functional planning. From conceptual development to detailed design, we transform ideas
            into spaces that reflect identity, purpose and timeless beauty.
          </p>

          <div className="about-words">
            {['AARAMBH', 'AAKAR', 'STUDIO'].map((w, i) => (
              <div key={w} className="word-block" style={{ animationDelay: `${i * 0.15}s` }}>
                <span className="word-en">{w}</span>
                <span className="word-meaning">
                  {['The Beginning of an Idea', 'Giving Shape to Imagination', 'A Space for Creativity'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

