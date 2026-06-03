import React from 'react';

export default function WhyMe() {
  return (
    <section id="whyme" className="why-me-section">
      <div className="why-me-container">
        {/* Animated Background Text */}
        <div className="why-me-bg-text" aria-hidden="true">
          <span>CREATIVE</span>
          <span className="outline-text">DEVELOPER</span>
          <span>INNOVATOR</span>
        </div>

        <div className="container position-relative z-index-2">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h2 className="why-me-heading animate">
                Do you want a <span className="highlight-gold">creative-thinking</span> developer for your next product?
              </h2>
              <div className="why-me-scroll-wrapper animate delay-1">
                <a href="#contact" className="scroll-down-btn">
                  <span className="scroll-text">Let's Talk</span>
                  <div className="mouse">
                    <div className="wheel"></div>
                  </div>
                  <i className="fas fa-chevron-down arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
