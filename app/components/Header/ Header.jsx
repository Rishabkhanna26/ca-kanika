// components/Header/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale } from "lucide-react";
import "./style.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="ks-header">
      <div className="ks-header-inner">
        {/* Left: Logo */}
        <div className="ks-header-logo">
          <div className="ks-logo-icon">
            <img className="ks-logo-icon-svg" src="/Untitled-design.png" alt="" />
          </div>
          <div>
            <h1 className="ks-logo-title">CA Kanika Sharma</h1>
            <p className="ks-logo-subtitle">Chartered Accountant</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="ks-nav-desktop">
          {navigation.map((item) => (
            <Link key={item.path} href={item.path} className="ks-nav-link">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Call to action */}
        <div className="ks-header-cta">
          <a href="tel:+917658051945" className="ks-header-cta-btn">
            Call Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="ks-nav-mobile-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isMenuOpen && (
        <nav className="ks-nav-mobile">
          {navigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="ks-nav-mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
