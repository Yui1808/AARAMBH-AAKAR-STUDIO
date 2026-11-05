import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';
import './Hero.css';

/* ── 3D SCENE ELEMENTS ───────────────────────────────────────── */

function ArchForm({ position, rotation, scale }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.12 + rotation[1];
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.07) * 0.1 + rotation[0];
    }
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-0.6, 0);
    s.lineTo(-0.6, 1.4);
    s.absarc(0, 1.4, 0.6, Math.PI, 0, false);
    s.lineTo(0.6, 0);
    s.lineTo(0.42, 0);
    s.lineTo(0.42, 1.38);
    s.absarc(0, 1.4, 0.42, 0, Math.PI, true);
    s.lineTo(-0.42, 0);
    s.closePath();

    return new THREE.ExtrudeGeometry(s, {
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 4,
    });
  }, []);

  return (
    <mesh ref={mesh} position={position} scale={scale} geometry={shape}>
      <meshStandardMaterial
        color="#C9A96E"
        metalness={0.6}
        roughness={0.3}
        emissive="#3A2800"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function FloatingCube({ position, size, speed, offset }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    mesh.current.rotation.x = t * 0.4;
    mesh.current.rotation.y = t * 0.6;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial
        color="#8B8070"
        metalness={0.4}
        roughness={0.5}
        transparent
        opacity={0.5}
        wireframe
      />
    </mesh>
  );
}

function FloatingSphere({ position, radius, speed, offset }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.4;
    mesh.current.position.x = position[0] + Math.cos(t * 0.5) * 0.15;
  });

  return (
    <Float floatIntensity={0.5} speed={2}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={1}
          roughness={0.0}
          thickness={0.5}
          ior={1.4}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.5}
          color="#C9A96E"
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef();
  const count = 500;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.015;
      points.current.rotation.x = clock.getElapsedTime() * 0.008;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C9A96E"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
}

function CameraRig() {
  const { camera } = useThree();
  useFrame(({ mouse }) => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── HERO SECTION ────────────────────────────────────────────── */

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-canvas">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#E8D5A3" />
          <pointLight position={[-5, -3, 2]} intensity={0.8} color="#C4714A" />
          <pointLight position={[0, 3, -2]} intensity={0.5} color="#7A9E7E" />

          <Stars radius={80} depth={40} count={800} factor={2} fade speed={0.5} />
          <ParticleField />

          <Float floatIntensity={0.5} speed={1.5}>
            <ArchForm position={[0, -0.5, 0]} rotation={[0, 0, 0]} scale={1.2} />
          </Float>

          <FloatingCube position={[-3.5, 1, -1]} size={0.6} speed={0.3} offset={0} />
          <FloatingCube position={[3.2, -1.2, -0.5]} size={0.4} speed={0.25} offset={2} />
          <FloatingCube position={[-2.5, -2, 1]} size={0.35} speed={0.4} offset={4} />

          <FloatingSphere position={[2.8, 1.5, 0.5]} radius={0.45} speed={0.3} offset={1} />
          <FloatingSphere position={[-2, 0.5, -0.5]} radius={0.3} speed={0.35} offset={3} />

          <Environment preset="city" />
          <CameraRig />
        </Canvas>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Architectural Design Studio</span>
          <span className="eyebrow-line" />
        </div>

        <h1 className="hero-title">
          <span className="title-word title-gold" style={{ fontFamily: "'BlackpoolGothic', 'Blackpool Gothic', sans-serif" }}>AARAMBH</span>
          <span className="title-word title-light" style={{ fontFamily: "'BlackpoolGothic', 'Blackpool Gothic', sans-serif" }}>AAKAR</span>
          <span className="title-word title-thin" style={{ fontFamily: "'BlackpoolGothic', 'Blackpool Gothic', sans-serif" }}>STUDIO</span>
        </h1>

        <p className="hero-tagline">
          Where Ideas Begin,<br />
          <em>and Spaces Take Shape.</em>
        </p>

        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Our Story
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
          >
            Our Process →
          </button>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      <div className="hero-gradient" />
    </section>
  );
};

export default Hero;
