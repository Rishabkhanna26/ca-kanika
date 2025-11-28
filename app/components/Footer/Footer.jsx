// components/Footer/Footer.jsx
"use client";

import { Mail, Phone, MapPin, Scale } from "lucide-react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="ks-footer">
      <div className="ks-footer-inner">
        <div className="ks-footer-grid">
          {/* Brand */}
          <div>
            <div className="ks-footer-brand">
              <div className="ks-footer-logo-icon">
                <img className="ks-logo-icon-footer" src="/Untitled-design.png" alt="" />
              </div>
              <div>
                <h3 className="ks-footer-title">CA Kanika Sharma</h3>
                <p className="ks-footer-subtitle">Chartered Accountant</p>
              </div>
            </div>
            <p className="ks-footer-text">
              Providing expert financial and taxation services with integrity and
              professionalism.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="ks-footer-heading">Quick Links</h4>
            <ul className="ks-footer-list">
              <li>
                <a href="/" className="ks-footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="ks-footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="ks-footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="ks-footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="ks-footer-heading">Contact</h4>
            <ul className="ks-footer-contact-list">
              <li>
                <Mail className="ks-footer-icon" />
                <a href="mailto:info@example.com" className="ks-footer-link">
                  info@example.com
                </a>
              </li>
              <li>
                <Phone className="ks-footer-icon" />
                <a href="tel:+919876543210" className="ks-footer-link">
                  +91 76580 51945
                </a>
              </li>
              <li>
                <MapPin className="ks-footer-icon" />
                <span className="ks-footer-link">
                  Jalandhar, Punjab, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ks-footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} CA Kanika Sharma. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
