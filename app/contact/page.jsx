"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import "./style.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="ks-contact-info-icon" />,
      title: "Phone",
      content: "+91 76580 51945",
      link: "tel:+919876543210",
    },
    {
      icon: <Mail className="ks-contact-info-icon" />,
      title: "Email",
      content: "info@example.com",
      link: "mailto:info@example.com",
    },
    {
      icon: <MapPin className="ks-contact-info-icon" />,
      title: "Office",
      content: "Jalandhar, Punjab, India",
      link: "#",
    },
    {
      icon: <Clock className="ks-contact-info-icon" />,
      title: "Working Hours",
      content: "Mon - Sat, 10:00 AM - 7:00 PM",
      link: "#",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="ks-contact-root">
      <section className="ks-contact-section">
        <div className="ks-contact-container">
          <div className="ks-contact-header">
            <h1 className="ks-contact-title">
              Get In <span className="ks-contact-title-highlight">Touch</span>
            </h1>
            <p className="ks-contact-subtitle">
              Have questions about our services? Ready to start working
              together? We&apos;d love to hear from you and explore how we can
              help.
            </p>
          </div>

          <div className="ks-contact-grid">
            {/* left: info */}
            <div className="ks-contact-info">
              <h2 className="ks-contact-info-title">Contact Information</h2>
              <p className="ks-contact-info-text">
                Reach out through any of the channels below, or fill out the
                form and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="ks-contact-info-list">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link || "#"}
                    className="ks-contact-info-item"
                  >
                    <div className="ks-contact-info-icon-wrap">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="ks-contact-info-item-title">
                        {item.title}
                      </h3>
                      <p className="ks-contact-info-item-text">
                        {item.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="ks-contact-why-box">
                <h3 className="ks-contact-why-title">Why Choose Us?</h3>
                <ul className="ks-contact-why-list">
                  <li>✓ 10+ years of professional experience</li>
                  <li>✓ Personalized service for every client</li>
                  <li>✓ Quick turnaround time</li>
                  <li>✓ Transparent and competitive pricing</li>
                </ul>
              </div>
            </div>

            {/* right: form */}
            <div className="ks-contact-form-wrap">
              <div className="ks-contact-form-card">
                <h2 className="ks-contact-form-title">Send a Message</h2>
                <p className="ks-contact-form-subtitle">
                  Fill out the form below and we&apos;ll connect with you soon.
                </p>

                <form className="ks-contact-form" onSubmit={handleSubmit}>
                  <div className="ks-contact-form-grid">
                    <div>
                      <label
                        htmlFor="name"
                        className="ks-contact-label"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="ks-contact-input"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="ks-contact-label"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="ks-contact-input"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="ks-contact-label"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="ks-contact-input"
                        placeholder="+91 76580 51945"
                      />
                    </div>

                    <div className="ks-contact-full-width">
                      <label
                        htmlFor="message"
                        className="ks-contact-label"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="ks-contact-textarea"
                        placeholder="Tell us how we can help you"
                      />
                    </div>
                  </div>

                  <button type="submit" className="ks-contact-submit-btn">
                    <span>Send Message</span>
                    <Send className="ks-contact-submit-icon" />
                  </button>

                  {isSubmitted && (
                    <p className="ks-contact-success">
                      Thank you! Your message has been received. We will get
                      back to you shortly.
                    </p>
                  )}
                </form>
              </div>

              <div className="ks-contact-cta-strip">
                <p className="ks-contact-cta-text">
                  Prefer to talk directly? Get in touch with us now.
                </p>
                <a
                  href="tel:+917658051945"
                  className="ks-contact-cta-button"
                >
                  Call Now: +91 76580 51945
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
