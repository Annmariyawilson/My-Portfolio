'use client';
import React from 'react';
import Image from 'next/image';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        window.location.reload();
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 animate">
            <h2 className="section-title text-center mb-4">Get In Touch</h2>
            <p className="contact-subtitle text-center mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-creative-wrapper mt-5">
              {/* Social Icons (Top Right) */}
              <div className="creative-social-icons">
                <a href="https://linkedin.com/in/annmariyawilson" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/annmariyawilson" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://instagram.com/annmariyawilson_" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </div>

              <div className="row align-items-center h-100">
                {/* Left Side: Form */}
                <div className="col-lg-6 creative-form-col order-2 order-lg-1">
                  <h2 className="creative-title">Let's <span className="text-yellow">talk</span></h2>
                  <p className="creative-subtitle mb-4">
                    To request a quote or want to meet up for coffee, contact me directly or fill out the form and I will get back to you soon.
                  </p>
                  
                  <form
                    id="contactForm"
                    className="creative-form"
                    action="https://formspree.io/f/xvgryprr"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group mb-3">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control creative-input"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label>Your Email</label>
                      <input
                        type="email"
                        name="_replyto"
                        className="form-control creative-input"
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label>Your Message</label>
                      <textarea
                        name="message"
                        className="form-control creative-input"
                        rows={4}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn creative-btn">SEND MESSAGE</button>
                  </form>
                </div>

                {/* Right Side: Image and Blob */}
                <div className="col-lg-6 creative-image-col order-1 order-lg-2 mb-5 mb-lg-0">
                  <div className="creative-blob-container">
                    <div className="creative-blob-outline"></div>
                    <div className="creative-blob-solid"></div>
                    <Image
                      src="/image/removebg-professional.png"
                      alt="Ann Mariya"
                      width={400}
                      height={500}
                      className="creative-person-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
