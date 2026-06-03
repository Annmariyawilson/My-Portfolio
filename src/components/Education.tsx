import React from 'react';
import Image from 'next/image';

export default function Education() {
  return (
    <section id="education" className="edu-premium-section">
      <div className="container relative z-10">
        <div className="row align-items-center">
          
          {/* Content (Now on Right Side) */}
          <div className="col-lg-7 order-1 order-lg-2 animate animate-up">
            <h2 className="section-title text-start mb-5 text-white" style={{ textAlign: 'left' }}>
              Academic <span style={{ color: '#d4af37' }}>Journey</span>
            </h2>
            
            <div className="edu-timeline-premium">
              {/* BCA Milestone */}
              <div className="edu-card-premium">
                <div className="edu-year-premium">2021 – 2024</div>
                <h3 className="edu-degree-premium">Bachelor of Computer Application</h3>
                <p className="edu-university-premium">Kannur University | St. Jude&apos;s Arts and Science College</p>
                <div className="edu-badge-premium">7.5 CGPA</div>
              </div>

              {/* Higher Secondary Milestone */}
              <div className="edu-card-premium mt-4">
                <div className="edu-year-premium">2019 – 2021</div>
                <h3 className="edu-degree-premium">Higher Secondary Education</h3>
                <p className="edu-university-premium">Bio-Science specialization | St. Jude&apos;s H S S</p>
                <div className="edu-badge-premium">76% Aggregate</div>
              </div>
            </div>
          </div>
          
          {/* Animated Graphic (Now on Left Side) */}
          <div className="col-lg-5 order-2 order-lg-1 mb-5 mb-lg-0 animate animate-right">
            <div className="edu-animation-wrapper">
              <div className="edu-circle-1"></div>
              <div className="edu-circle-2"></div>
              <div className="edu-icon-center">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="edu-icon-orbit edu-orbit-1">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="edu-icon-orbit edu-orbit-2">
                <i className="fas fa-certificate"></i>
              </div>
              <div className="edu-icon-orbit edu-orbit-3">
                <i className="fas fa-laptop-code"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
