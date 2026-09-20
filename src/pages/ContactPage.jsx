import { useState } from "react";
import { Link } from "react-router";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Order enquiry",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your API / form service of choice.

  }

  return (
    <div className="atelier-contact">
   

      <div className="page-top">
        <div className="crumb"><Link to="/">Home </Link> / Contact</div>
        <h1 className="page-title">Contact</h1>
        <p className="page-intro">
          Questions about an order, a fit, or a fabric — we read every message and reply within one business day.
        </p>
      </div>

      <div className="contact-wrap">
        <div className="info-col">
          <div className="info-block">
            <div className="info-label">EMAIL</div>
            <div className="info-value">
              <a href="mailto:hello@atelierstudio.com">hello@atelierstudio.com</a>
            </div>
          </div>
          <div className="info-block">
            <div className="info-label">PHONE</div>
            <div className="info-value">
              <a href="tel:+2348001234567">+234 800 123 4567</a>
            </div>
          </div>
          <div className="info-block">
            <div className="info-label">STUDIO</div>
            <div className="info-value">
              14 Constance Close
              <br />
              Abuja, FCT, Nigeria
            </div>
          </div>
          <div className="info-block">
            <div className="info-label">HOURS</div>
            <div className="hours-row">
              <span>Monday – Friday</span>
              <span>9:00 – 18:00</span>
            </div>
            <div className="hours-row">
              <span>Saturday</span>
              <span>10:00 – 16:00</span>
            </div>
            <div className="hours-row">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
          <div className="info-block">
            <div className="info-label">FOLLOW</div>
            <div className="social-row">
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                  <rect x="1.5" y="1.5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="8.5" cy="8.5" r="3.4" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="12.4" cy="4.6" r="0.8" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                  <circle cx="8.5" cy="8.5" r="7" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M6.5 13c1-2.6 1.2-4.2 1.2-5.4a1.8 1.8 0 013.6.2c0 1-.6 2.6-1 3.6"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row two">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
              <option>Order enquiry</option>
              <option>Sizing &amp; fit</option>
              <option>Returns &amp; exchanges</option>
              <option>Wholesale</option>
              <option>Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
          </div>

          <p className="form-note">Fields marked required must be completed before sending.</p>

          <button type="submit" className="submit-btn">
            Send message
          </button>
        </form>
      </div>

      <div className="map-strip">
        <div className="map-box">
          <div className="map-pin">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1C4.5 1 2.5 3 2.5 5.4C2.5 8.6 7 13 7 13S11.5 8.6 11.5 5.4C11.5 3 9.5 1 7 1Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="7" cy="5.4" r="1.6" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Abuja, FCT, Nigeria
          </div>
        </div>
      </div>


    
    </div>
  );
}