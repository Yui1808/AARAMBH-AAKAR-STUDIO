import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const Contact = () => {
  const ref = useRef();
  const inView = useInView(ref, { threshold: 0.1 });

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Residential',
    location: 'Noida',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText('xyz@aarambhaakar.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;

    const messageText = 
`*NEW PROJECT INQUIRY - AARAMBH AAKAR STUDIO*

👤 *Client Name:* ${formData.name.trim()}
📞 *Phone / Contact:* ${formData.contact.trim()}
🏛️ *Service Required:* ${formData.service}
📍 *Preferred Studio:* ${formData.location}
📝 *Project Scope / Message:* ${formData.message.trim() ? formData.message.trim() : 'Not specified'}

_Sent via Aarambh Aakar Studio Website_`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919205343489&text=${encoded}`;

    setWaLink(whatsappUrl);
    setSubmitted(true);

    // Open WhatsApp in a new tab immediately
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-watermark">AARAMBH</div>

      <div className={`contact-inner ${inView ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="contact-header">
          <div className="section-label">
            <span className="label-line" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">
            Begin Your <em>Architectural</em><br />Journey With Us
          </h2>
          <p className="contact-subtitle">
            Where Ideas Begin, and Spaces Take Shape. Reach out to AR. Mohit Babu, ER. Abhishek Singh,
            or visit our studios in Noida &amp; Agra.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Studio Locations & Direct Contacts */}
          <div className="contact-cards-col">
            {/* Studio Addresses: Noida & Agra */}
            <div className="studios-pair-card">
              <span className="card-top-tag">Studio Presences</span>
              
              {/* Studio 1: Noida */}
              <div className="studio-location-block">
                <div className="loc-pin">📍</div>
                <div className="loc-info">
                  <span className="loc-city">Noida Studio</span>
                  <h3 className="loc-address">Sector - 63, Noida, Uttar Pradesh</h3>
                  <span className="loc-note">Design &amp; Conceptualization Hub</span>
                </div>
              </div>

              <div className="loc-separator" />

              {/* Studio 2: Agra */}
              <div className="studio-location-block">
                <div className="loc-pin">📍</div>
                <div className="loc-info">
                  <span className="loc-city">Agra Studio</span>
                  <h3 className="loc-address">Albatiya, Agra, Uttar Pradesh</h3>
                  <span className="loc-note">Regional Practice &amp; Execution Office</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Chips: Phone & WhatsApp */}
            <div className="direct-grid">
              <a href="tel:9205343489" className="interactive-chip phone-chip">
                <div className="chip-icon">📞</div>
                <div>
                  <span className="chip-label">Direct Line</span>
                  <span className="chip-value">9205343489</span>
                </div>
              </a>

              <a
                href="https://wa.me/919205343489?text=Hello%20AARAMBH%20AAKAR%20STUDIO%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-chip whatsapp-chip"
              >
                <div className="chip-icon whatsapp-icon">💬</div>
                <div>
                  <span className="chip-label">WhatsApp Us</span>
                  <span className="chip-value">Chat on WhatsApp</span>
                </div>
              </a>
            </div>

            {/* Email & Team Connect Card */}
            <div className="info-card email-card">
              <div className="info-icon">✉️</div>
              <div className="info-body">
                <span className="info-tag">Official Inquiries &amp; Tenders</span>
                <div className="email-row">
                  <span className="email-display">E-mail: <strong>xyz@aarambhaakar.com</strong></span>
                  <button onClick={copyEmail} className="copy-btn">
                    {copied ? '✓ Copied' : '📋 Copy'}
                  </button>
                </div>

                <div className="leadership-quick-line">
                  <span>Principals:</span>
                  <strong>AR. Mohit Babu</strong> (CEO &amp; Founder) &bull; <strong>ER. Abhishek Singh</strong> (Civil Lead)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Consultation Inquiry Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <div className="form-top">
                <span className="form-eyebrow">Project Inquiry</span>
                <h3 className="form-title">Tell Us About Your Vision</h3>
                <p className="form-subtitle">
                  Fill in your details below and our team will get in touch to discuss site feasibility, concept planning, and timelines.
                </p>
              </div>

              {submitted ? (
                <div className="submit-success">
                  <div className="success-icon">💬</div>
                  <h4>Connecting to WhatsApp...</h4>
                  <p>
                    Thank you, <strong>{formData.name}</strong>! Your inquiry details are pre-filled and sent to our official WhatsApp (<strong>9205343489</strong>).
                  </p>
                  
                  <div className="wa-redirect-box">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-open-wa"
                    >
                      <span>Open WhatsApp Chat Directly</span>
                      <span className="wa-icon-arr">↗</span>
                    </a>
                  </div>

                  <p className="wa-help-note">
                    If WhatsApp didn't open automatically, click the green button above to deliver your message.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', contact: '', service: 'Residential', location: 'Noida', message: '' });
                    }}
                    className="btn-reset-form"
                  >
                    ← Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name / Organization *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Mohit / Abhishek"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact">Phone Number *</label>
                      <input
                        id="contact"
                        type="text"
                        required
                        placeholder="e.g. 9205343489"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Preferred Studio</label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      >
                        <option value="Noida">Sector - 63, Noida</option>
                        <option value="Agra">Albatiya, Agra</option>
                        <option value="Other">Pan India / Online Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Architectural Service Required</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Residential">1. Residential Architecture</option>
                      <option value="Commercial">2. Commercial Spaces</option>
                      <option value="Interior">3. Interior Architecture</option>
                      <option value="Landscape">4. Landscape Design</option>
                      <option value="3D Visualization">5. 3D Visualization &amp; Modelling</option>
                      <option value="Renovation">6. Renovation &amp; Re-modelling</option>
                      <option value="Product Designing">7. Product Designing</option>
                      <option value="Furniture Designing">8. Furniture Designing</option>
                      <option value="Customised Lighting">9. Customised Lighting</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Brief Project Description / Scope</label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Provide approximate plot size, requirements, location, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <span>Send Inquiry to WhatsApp (9205343489)</span>
                    <span className="btn-arrow">💬 →</span>
                  </button>

                  <div className="form-meta">
                    <span className="live-dot" />
                    <span>Instant WhatsApp Delivery &bull; 9205343489</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

