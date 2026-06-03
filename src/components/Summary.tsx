import React from 'react';
import Image from 'next/image';

export default function Summary() {
  return (
    <section id="summary" className="summary-premium-section">
      <div className="summary-bg-gradient"></div>
      <div className="container relative">
        <div className="row align-items-center">
          {/* Content */}
          <div className="col-lg-12 animate animate-up text-center">
            <div className="summary-content-box" style={{ paddingRight: 0 }}>
              <h2 className="section-title mb-4 text-white">
                Professional <span style={{ color: '#d4af37' }}>Summary</span>
              </h2>
              
              <p className="summary-text-modern mx-auto" style={{ maxWidth: '800px' }}>
                Results-driven Full-Stack Developer with over a year of experience building scalable web applications and dynamic platforms. Skilled in developing multi-role dashboards, integrating real-time data, and delivering seamless, mobile-first user experiences.
              </p>
              <p className="summary-text-modern mx-auto" style={{ maxWidth: '800px' }}>
                I leverage modern development practices and AI-assisted tools to accelerate workflows, optimize performance, and ensure high-quality outputs. With a strong focus on usability and detail, I collaborate closely with clients to turn ideas into production-ready solutions.
              </p>
              
              <div className="summary-badges mt-5 justify-content-center">
                <div className="s-badge">
                  <i className="fas fa-microchip"></i>
                  <span>Next.js Expert</span>
                </div>
                <div className="s-badge">
                  <i className="fas fa-database"></i>
                  <span>Full-Stack</span>
                </div>
                <div className="s-badge">
                  <i className="fas fa-brain"></i>
                  <span>AI Integrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
