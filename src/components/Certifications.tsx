import React from 'react';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="cert-bg-shapes">
        <div className="cert-shape shape-1"></div>
        <div className="cert-shape shape-2"></div>
        <div className="cert-shape shape-3"></div>
      </div>
      <div className="container relative">
        <h2 className="section-title" data-title="Credentials">Certifications</h2>
        <div className="row">
          {/* Tata Group Certification */}
          <div className="col-lg-4 col-md-6 animate mt-4">
            <div className="certification-card">
              <h3 className="certification-title">Tata Group - Cybersecurity Analyst Job Simulation</h3>
              <div className="cert-meta">
                <p className="certification-issuer">
                  <i className="fas fa-university"></i>
                  <span><strong>Issuer:</strong> Forage</span>
                </p>
                <p className="certification-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Feb 2024</span>
                </p>
                <p className="cert-id"><i className="fas fa-id-card"></i> KKBAt8SkYC4hSBPfs</p>
              </div>
              <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/gmf3ypEXBj2wvfQWC_Tata%20Group_Exdne3RPDNvbbBXyC_1708620481345_completion_certificate.pdf" target="_blank" rel="noreferrer" className="btn btn-success mt-4">
                <span>View Certificate</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* Accenture Certification */}
          <div className="col-lg-4 col-md-6 animate delay-1 mt-4">
            <div className="certification-card">
              <h3 className="certification-title">Accenture North America - Data Analytics</h3>
              <div className="cert-meta">
                <p className="certification-issuer">
                  <i className="fas fa-university"></i>
                  <span><strong>Issuer:</strong> Forage</span>
                </p>
                <p className="certification-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Feb 2024</span>
                </p>
                <p className="cert-id"><i className="fas fa-id-card"></i> Ao4SFh66XBiq8xMNh</p>
              </div>
              <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_Exdne3RPDNvbbBXyC_1708849965426_completion_certificate.pdf" target="_blank" rel="noreferrer" className="btn btn-success mt-4">
                <span>View Certificate</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* IBM Certification */}
          <div className="col-lg-4 col-md-6 animate delay-2 mt-4">
            <div className="certification-card">
              <h3 className="certification-title">Enterprise Design Thinking Practitioner</h3>
              <div className="cert-meta">
                <p className="certification-issuer">
                  <i className="fas fa-university"></i>
                  <span><strong>Issuer:</strong> IBM</span>
                </p>
                <p className="certification-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Mar 2024</span>
                </p>
              </div>
              <a href="https://www.credly.com/badges/ac2b22a0-6db6-4ca4-9dc1-224441f40f74/linked_in_profile" target="_blank" rel="noreferrer" className="btn btn-success mt-4">
                <span>View Certificate</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* MERN Stack Course */}
          <div className="col-lg-4 col-md-6 animate mt-4">
            <div className="certification-card">
              <h3 className="certification-title">MERN Stack Development Course</h3>
              <div className="cert-meta">
                <p className="certification-issuer">
                  <i className="fas fa-building"></i>
                  <span><strong>Issuer:</strong> Luminar Technolab</span>
                </p>
                <p className="certification-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Calicut, Kerala</span>
                </p>
                <p className="certification-date">
                  <i className="fas fa-clock"></i>
                  <span>May - Dec 2025</span>
                </p>
              </div>
              <a href="https://drive.google.com/file/d/1RRakbO9A7g9SByOrOti4SkGVAuqWlYOK/view" target="_blank" rel="noreferrer" className="btn btn-success mt-4">
                <span>View Certificate</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* Job Application Essentials */}
          <div className="col-lg-4 col-md-6 animate delay-1 mt-4">
            <div className="certification-card">
              <h3 className="certification-title">Job Application Essentials</h3>
              <div className="cert-meta">
                <p className="certification-issuer">
                  <i className="fas fa-university"></i>
                  <span><strong>Issuer:</strong> IBM</span>
                </p>
                <p className="certification-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Apr 2024</span>
                </p>
              </div>
              <a href="https://www.credly.com/badges/e3f22f52-66c2-48d6-b75b-c0b9c4fe7fd6/linked_in_profile" target="_blank" rel="noreferrer" className="btn btn-success mt-4">
                <span>View Certificate</span>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
