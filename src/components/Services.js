import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Residential Architecture',
    subtitle: 'Private Sanctuaries & Villas',
    category: 'Architecture',
    description:
      'Designing bespoke modern residences that balance personal privacy, natural ventilation, open courtyards, and timeless contemporary luxury.',
    tag: 'Form & Living',
    visualType: 'residential',
  },
  {
    id: 2,
    title: 'Commercial Spaces',
    subtitle: 'Offices, Retail & Landmarks',
    category: 'Architecture',
    description:
      'Transforming corporate and commercial footprints into iconic functional spaces that foster productivity, collaboration, and high brand presence.',
    tag: 'Rhythm & Scale',
    visualType: 'commercial',
  },
  {
    id: 3,
    title: 'Interior Architecture',
    subtitle: 'Curated Textures & Spaces',
    category: 'Interiors',
    description:
      'Harmonious spatial planning crafted with rich Indian natural stones, warm timber, earthy lime plasters, and ergonomic layouts.',
    tag: 'Materiality & Mood',
    visualType: 'interior',
  },
  {
    id: 4,
    title: 'Landscape Design',
    subtitle: 'Nature Integration & Water Features',
    category: 'Nature',
    description:
      'Seamless transition between inside and outside through indigenous plantation, step-gardens, courtyard reflection ponds, and stone walkways.',
    tag: 'Flora & Terrain',
    visualType: 'landscape',
  },
  {
    id: 5,
    title: '3D Visualization & Modelling',
    subtitle: 'Photorealistic Digital Twins',
    category: 'Digital',
    description:
      'High-fidelity 3D modeling, cinematic architectural walkthroughs, and sunlight simulation that allow you to live in the space before construction.',
    tag: 'Perspective & Light',
    visualType: 'visualization',
  },
  {
    id: 6,
    title: 'Renovation & Re-modelling',
    subtitle: 'Adaptive Reuse & Modern Retrofit',
    category: 'Architecture',
    description:
      'Breathing fresh vitality into existing structures, upgrading structural integrity while preserving character and infusing modern efficiency.',
    tag: 'Revival & Context',
    visualType: 'renovation',
  },
  {
    id: 7,
    title: 'Product Designing',
    subtitle: 'Bespoke Hardware & Architectural Accents',
    category: 'Design',
    description:
      'Conceptualizing unique architectural handles, tactile fixtures, statement brass fittings, and utilitarian pieces rooted in craft.',
    tag: 'Precision & Craft',
    visualType: 'product',
  },
  {
    id: 8,
    title: 'Furniture Designing',
    subtitle: 'Artisanal Joinery & Bespoke Pieces',
    category: 'Interiors',
    description:
      'Custom sculptured furniture tailored specifically for each project, utilizing solid seasoned wood, cane weaves, and contemporary profiles.',
    tag: 'Timber & Form',
    visualType: 'furniture',
  },
  {
    id: 9,
    title: 'Customised Lighting',
    subtitle: 'Sculptural Fixtures & Ambient Moods',
    category: 'Design',
    description:
      'Sculptural luminaires and architectural light planning that celebrate spatial volume, create nocturnal warmth, and highlight architectural features.',
    tag: 'Illumination & Soul',
    visualType: 'lighting',
  },
];

/* ── Vanilla Creamy Visual Illustration Renderer ──────────────── */
const ServiceVisual = ({ type }) => {
  switch (type) {
    case 'residential':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          <path d="M20 140H220" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Villa Base & Cantilever */}
          <rect x="40" y="70" width="110" height="70" fill="#EFE8DC" stroke="#D5C5AE" strokeWidth="1.2" />
          <rect x="90" y="40" width="110" height="50" fill="#F7F3EB" stroke="#C9A96E" strokeWidth="1.5" />
          {/* Large Glass Corner Windows */}
          <rect x="120" y="48" width="70" height="34" fill="#E8DEC9" fillOpacity="0.4" stroke="#B89758" strokeWidth="1" />
          <line x1="155" y1="48" x2="155" y2="82" stroke="#B89758" strokeWidth="1" />
          {/* Minimalist Column */}
          <line x1="185" y1="90" x2="185" y2="140" stroke="#B89758" strokeWidth="2" />
          {/* Pergola Roof Lines */}
          <line x1="85" y1="36" x2="205" y2="36" stroke="#C9A96E" strokeWidth="1.5" />
          <line x1="100" y1="32" x2="100" y2="40" stroke="#C9A96E" strokeWidth="1.2" />
          <line x1="130" y1="32" x2="130" y2="40" stroke="#C9A96E" strokeWidth="1.2" />
          <line x1="160" y1="32" x2="160" y2="40" stroke="#C9A96E" strokeWidth="1.2" />
          <line x1="190" y1="32" x2="190" y2="40" stroke="#C9A96E" strokeWidth="1.2" />
          {/* Warm Sun Orb */}
          <circle cx="65" cy="40" r="14" fill="#F2DFB8" fillOpacity="0.6" />
        </svg>
      );
    case 'commercial':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          <path d="M15 140H225" stroke="#C9A96E" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Main Tower Monolith */}
          <path d="M60 140V30L125 15V140H60Z" fill="#F2EBE0" stroke="#C9A96E" strokeWidth="1.5" />
          <path d="M125 45L180 35V140H125V45Z" fill="#EAE0D0" stroke="#D5C5AE" strokeWidth="1.2" />
          {/* Vertical Glass Mullions */}
          {[75, 90, 105].map((x) => (
            <line key={x} x1={x} y1="35" x2={x} y2="135" stroke="#C9A96E" strokeWidth="1" strokeDasharray="6 3" />
          ))}
          {[140, 155, 170].map((x) => (
            <line key={x} x1={x} y1="50" x2={x} y2="135" stroke="#B89758" strokeWidth="1" strokeDasharray="6 3" />
          ))}
          {/* Double height entrance canopy */}
          <rect x="50" y="120" width="85" height="4" fill="#C9A96E" />
          <rect x="75" y="124" width="35" height="16" fill="#D8CAB5" stroke="#B89758" strokeWidth="1" />
        </svg>
      );
    case 'interior':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          {/* Arched Wall Alcove */}
          <path d="M50 140V70C50 45 75 30 100 30C125 30 150 45 150 70V140" fill="#F5EFE6" stroke="#C9A96E" strokeWidth="1.5" />
          <path d="M65 140V75C65 55 80 44 100 44C120 44 135 55 135 75V140" fill="#EAE0D0" fillOpacity="0.4" />
          {/* Pedestal & Ceramic Urn */}
          <rect x="88" y="105" width="24" height="35" fill="#E2D4BE" stroke="#B89758" strokeWidth="1" />
          <path d="M96 95C96 90 92 88 100 88C108 88 104 90 104 95C106 100 94 100 96 95Z" fill="#C4714A" stroke="#A85732" strokeWidth="1" />
          {/* Modern Fluted Screen Panel */}
          {[165, 175, 185, 195].map((x) => (
            <line key={x} x1={x} y1="40" x2={x} y2="140" stroke="#D5C5AE" strokeWidth="2.5" />
          ))}
          {/* Floating Floor Accent */}
          <line x1="20" y1="140" x2="220" y2="140" stroke="#C9A96E" strokeWidth="1.5" />
        </svg>
      );
    case 'landscape':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          {/* Terrace Contour Terraces */}
          <path d="M20 140C60 125 110 135 150 120C190 105 210 115 220 110V140H20Z" fill="#ECE5D8" />
          <path d="M20 115C70 100 120 110 160 95C190 85 215 90 220 85V140H20Z" fill="#E2D7C3" fillOpacity="0.5" />
          {/* Stylized Olive / Cypress Tree */}
          <line x1="80" y1="80" x2="80" y2="135" stroke="#7A9E7E" strokeWidth="2" />
          <circle cx="80" cy="70" r="18" fill="#7A9E7E" fillOpacity="0.3" stroke="#7A9E7E" strokeWidth="1.2" />
          <circle cx="80" cy="65" r="12" fill="#7A9E7E" fillOpacity="0.4" stroke="#5D7E61" strokeWidth="1" />
          {/* Reflection Pond */}
          <ellipse cx="160" cy="125" rx="35" ry="8" fill="#D9E4DD" stroke="#7A9E7E" strokeWidth="1.2" />
          <line x1="140" y1="125" x2="180" y2="125" stroke="#A7C2AD" strokeWidth="1" strokeDasharray="4 2" />
          {/* Zen Stepping Stones */}
          <ellipse cx="115" cy="130" rx="8" ry="4" fill="#D5C5AE" stroke="#B89758" strokeWidth="1" />
          <ellipse cx="130" cy="136" rx="9" ry="4.5" fill="#C8BFB0" stroke="#8B8070" strokeWidth="1" />
        </svg>
      );
    case 'visualization':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          {/* Isometric Perspective Grid & Solids */}
          {/* Isometric Top Face */}
          <path d="M120 30L170 58L120 86L70 58L120 30Z" fill="#F8F4EC" stroke="#C9A96E" strokeWidth="1.5" />
          {/* Left Face with Wireframe Division */}
          <path d="M70 58L120 86V135L70 107V58Z" fill="#ECE2D0" stroke="#C9A96E" strokeWidth="1.5" />
          <line x1="95" y1="72" x2="95" y2="121" stroke="#D5C5AE" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="70" y1="82" x2="120" y2="110" stroke="#D5C5AE" strokeWidth="1" strokeDasharray="3 2" />
          {/* Right Face with Shaded Gradient */}
          <path d="M120 86L170 58V107L120 135V86Z" fill="#DFD2BD" stroke="#C9A96E" strokeWidth="1.5" />
          <line x1="145" y1="72" x2="145" y2="121" stroke="#C8BFB0" strokeWidth="1" strokeDasharray="3 2" />
          {/* Coordinate Vector Crosshair */}
          <circle cx="120" cy="86" r="3" fill="#C4714A" />
          <line x1="120" y1="20" x2="120" y2="145" stroke="#C4714A" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
        </svg>
      );
    case 'renovation':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          {/* Split Masonry to Modern Glass */}
          <path d="M30 140V60H110V140H30Z" fill="#E8DEC9" stroke="#B89758" strokeWidth="1.2" />
          {/* Traditional Brick / Stone Arch Pattern */}
          <path d="M50 140V90C50 80 60 70 70 70C80 70 90 80 90 90V140" fill="#FDFBF7" stroke="#A88B50" strokeWidth="1.5" />
          {/* Modern Seamless Glass Intervention */}
          <path d="M110 40H195V140H110V40Z" fill="#F4EFE6" stroke="#C9A96E" strokeWidth="1.8" />
          <line x1="110" y1="40" x2="195" y2="140" stroke="#E8D5A3" strokeWidth="1" opacity="0.5" />
          {/* Diagonal Renovation Transition Ray */}
          <line x1="105" y1="25" x2="115" y2="145" stroke="#C4714A" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="110" cy="85" r="4" fill="#C4714A" />
        </svg>
      );
    case 'product':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          {/* Sculptural Brass Architectural Door Handle */}
          <path
            d="M50 50C50 40 65 35 120 35C175 35 190 40 190 50V60C190 68 180 72 170 72H70C60 72 50 68 50 60V50Z"
            fill="#EAD9BA"
            stroke="#C9A96E"
            strokeWidth="1.5"
          />
          {/* Vertical Pull Stem */}
          <rect x="65" y="72" width="16" height="58" rx="4" fill="#D8C39E" stroke="#B89758" strokeWidth="1.2" />
          <rect x="159" y="72" width="16" height="58" rx="4" fill="#D8C39E" stroke="#B89758" strokeWidth="1.2" />
          {/* Dimension Guidelines & Screws */}
          <circle cx="73" cy="115" r="3" fill="#7A684C" />
          <circle cx="167" cy="115" r="3" fill="#7A684C" />
          <line x1="40" y1="35" x2="40" y2="130" stroke="#C9A96E" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="32" y="85" fill="#8B8070" fontSize="8" fontFamily="Inter" transform="rotate(-90 32 85)">
            140 mm
          </text>
        </svg>
      );
    case 'furniture':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          {/* Sculptural Mid-Century / Indian Teak Lounge Chair */}
          {/* Curved Backrest */}
          <path d="M75 55C85 40 145 40 165 55L155 90H85L75 55Z" fill="#F2E8D8" stroke="#A85732" strokeWidth="1.5" />
          {/* Plush Cushioned Seat */}
          <rect x="70" y="90" width="100" height="18" rx="4" fill="#E5D6C0" stroke="#C4714A" strokeWidth="1.5" />
          {/* Tapered Wooden Legs */}
          <line x1="80" y1="108" x2="68" y2="140" stroke="#8C4728" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="108" x2="172" y2="140" stroke="#8C4728" strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="108" x2="94" y2="135" stroke="#A85732" strokeWidth="2" strokeLinecap="round" />
          <line x1="140" y1="108" x2="146" y2="135" stroke="#A85732" strokeWidth="2" strokeLinecap="round" />
          {/* Handwoven Cane Texture Accent */}
          {[95, 105, 115, 125, 135, 145].map((x) => (
            <line key={x} x1={x} y1="52" x2={x - 8} y2="88" stroke="#D5C5AE" strokeWidth="1" />
          ))}
        </svg>
      );
    case 'lighting':
      return (
        <svg viewBox="0 0 240 160" className="service-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="160" rx="8" fill="#FDFBF7" />
          {/* Ceiling Canopy & Suspension Wire */}
          <line x1="120" y1="10" x2="120" y2="55" stroke="#B89758" strokeWidth="1.5" />
          {/* Tiered Architectural Chandelier / Pendant */}
          <ellipse cx="120" cy="55" rx="38" ry="8" fill="#E8D5A3" stroke="#C9A96E" strokeWidth="1.5" />
          <path d="M82 55L98 90H142L158 55" fill="#F5EBD7" stroke="#C9A96E" strokeWidth="1.2" />
          <ellipse cx="120" cy="90" rx="22" ry="6" fill="#FDF4E1" stroke="#B89758" strokeWidth="1.2" />
          {/* Radiant Light Cone */}
          <path d="M98 92L40 148H200L142 92Z" fill="url(#lightGlow)" fillOpacity="0.45" />
          {/* Glow Definitions */}
          <defs>
            <linearGradient id="lightGlow" x1="120" y1="90" x2="120" y2="148" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F9E8B8" stopOpacity="0.8" />
              <stop offset="1" stopColor="#FAF6EE" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="95" r="8" fill="#FFF2D1" />
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Architecture', 'Interiors', 'Design', 'Nature', 'Digital'];

  const filteredServices =
    activeCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-watermark">AAKAR</div>

      <div className={`services-inner ${inView ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="services-header">
          <div className="section-label">
            <span className="label-line" />
            <span>Our Disciplines</span>
          </div>
          <h2 className="section-title">
            Crafting Spaces,<br />
            <em>Objects &amp; Experiences</em>
          </h2>
          <p className="services-subtitle">
            Nine specialized architectural disciplines articulated through our signature vanilla creamy aesthetic — 
            where functional planning meets cultural poetry and timeless natural textures.
          </p>

          {/* Filter Bar */}
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Vanilla Creamy Visual Header */}
              <div className="service-visual-box">
                <ServiceVisual type={service.visualType} />
                <span className="service-tag-pill">{service.tag}</span>
                <span className="service-number">{String(service.id).padStart(2, '0')}</span>
              </div>

              {/* Service Info Content */}
              <div className="service-content">
                <span className="service-category">{service.category}</span>
                <h3 className="service-name">{service.title}</h3>
                <h4 className="service-subtitle-text">{service.subtitle}</h4>
                <p className="service-desc">{service.description}</p>
              </div>

              {/* Card Footer Interaction */}
              <div className="service-card-footer">
                <span className="service-arrow-label">Inquire Discipline</span>
                <span className="service-arrow">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
