import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg little-nav">
      <div className="container">
        <Link className="navbar-brand little-logo" to="/"><i className="bi bi-stars"></i> LITTLESTARS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#contactNav" aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="contactNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/collection">Collection</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item ms-lg-3"><Link className="nav-cart" to="/cart"><i className="bi bi-bag-heart"></i> Cart</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="little-footer">
      <h4><i className="bi bi-stars"></i> LITTLESTARS</h4>
      <p>Little outfits, big happy moments.</p>
      <p className="mb-0">© 2026 LITTLESTARS. All rights reserved.</p>
    </footer>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <Header />

      <section className="contact-banner" data-aos="fade-up">
        <span>WE'D LOVE TO HEAR FROM YOU</span>
        <h1>Let's talk, little by little.</h1>
        <p>Questions about our collection? Send us a message.</p>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="contact-eyebrow">GET IN TOUCH</span>
              <h2>We're here to help.</h2>
              <p className="contact-description">
                Have a question about a product, an order or our collection?
                Fill in the form and we'll be happy to hear from you.
              </p>

              <div className="contact-info">
                <div className="contact-info-item">
                  <i className="bi bi-envelope-heart"></i>
                  <div>
                    <h6>Email</h6>
                    <p>hello@littlestars.example</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <i className="bi bi-clock"></i>
                  <div>
                    <h6>Business Hours</h6>
                    <p>Monday – Saturday, 9 AM – 6 PM</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <i className="bi bi-heart"></i>
                  <div>
                    <h6>Our Promise</h6>
                    <p>A friendly response to your questions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a message</h3>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contactName">Your Name</label>
                    <input id="contactName" name="name" type="text" placeholder="Enter your name" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contactEmail">Email Address</label>
                    <input id="contactEmail" name="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contactSubject">Subject</label>
                    <input id="contactSubject" name="subject" type="text" placeholder="How can we help?" required />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contactMessage">Message</label>
                    <textarea id="contactMessage" name="message" rows="5" placeholder="Write your message..." required></textarea>
                  </div>

                  <div className="col-12">
                    <button className="little-btn" type="submit">
                      Send Message <i className="bi bi-send"></i>
                    </button>
                  </div>
                </div>

                {submitted && (
                  <div className="contact-success">
                    Thank you! The demo form was submitted. To receive messages,
                    connect this form to a backend or form service.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}