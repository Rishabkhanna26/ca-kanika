"use client";

import {
  ArrowRight,
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function HomePage() {
  const router = useRouter();

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Clients Served", value: "250+" },
    { label: "Industries Covered", value: "15+" },
    { label: "Client Retention", value: "95%" },
  ];

  const services = [
    {
      icon: <Calculator size={32} />,
      title: "Tax Planning",
      description: "Strategic tax solutions to optimize your financial position",
    },
    {
      icon: <FileText size={32} />,
      title: "Audit & Assurance",
      description:
        "Comprehensive audit services ensuring compliance and accuracy",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Financial Advisory",
      description: "Expert guidance for business growth and profitability",
    },
    {
      icon: <Users size={32} />,
      title: "Business Consulting",
      description:
        "Strategic consulting to streamline operations and improve performance",
    },
  ];

  return (
    <div className="ks-home-root">
      {/* HERO */}
      <section className="ks-hero">
        <div className="ks-hero-bg-grid" />

        <div className="ks-hero-inner">
          <div className="ks-hero-grid">
            {/* LEFT */}
            <div className="ks-hero-left animate-fadeInLeft">
              <h1 className="ks-hero-title">
                Your Trusted
                <span className="ks-hero-highlight">Financial Partner</span>
              </h1>

              <p className="ks-hero-subtitle">
                Professional chartered accountancy services tailored to your
                business needs. Expert guidance in taxation, auditing, and
                financial management.
              </p>

              <div className="ks-hero-cta-row">
                <button
                  onClick={() => router.push("/contact")}
                  className="ks-hero-primary-btn"
                >
                  Get Started
                  <ArrowRight className="ks-hero-primary-icon" />
                </button>

                <button
                  onClick={() => router.push("/services")}
                  className="ks-hero-secondary-btn"
                >
                  View Services
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="ks-hero-right animate-fadeInRight">
              <div className="ks-hero-right-frame">
                <div className="ks-hero-right-card">
                  <div className="ks-hero-profile">
                    <div className="ks-hero-profile-icon-wrap">
                      <Shield className="ks-hero-profile-icon" />
                    </div>

                    <div>
                      <h3 className="ks-hero-profile-name">CA Kanika Sharma</h3>
                      <p className="ks-hero-profile-role">
                        Chartered Accountant
                      </p>
                    </div>
                  </div>

                  <div className="ks-hero-small-stats">
                    <div>
                      <p className="ks-hero-small-stat-value">10+</p>
                      <p className="ks-hero-small-stat-label">
                        Years Experience
                      </p>
                    </div>

                    <div>
                      <p className="ks-hero-small-stat-value">250+</p>
                      <p className="ks-hero-small-stat-label">
                        Happy Clients
                      </p>
                    </div>

                    <div>
                      <p className="ks-hero-small-stat-value">15+</p>
                      <p className="ks-hero-small-stat-label">Industries</p>
                    </div>
                  </div>

                  <p className="ks-hero-card-text">
                    “Our mission is to simplify complex financial challenges and
                    help businesses make confident decisions with clarity and
                    compliance.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATIC STATS */}
      <section className="ks-stats-section">
        <div className="ks-stats-container">
          <div className="ks-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="ks-stats-card">
                <p className="ks-stats-value">{stat.value}</p>
                <p className="ks-stats-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ks-services-section">
        <div className="ks-section-inner">
          <div className="ks-section-header">
            <h2 className="ks-section-title">
              Professional{" "}
              <span className="ks-section-highlight">Services</span>
            </h2>
            <p className="ks-section-subtitle">
              Comprehensive financial and compliance solutions tailored to your
              business requirements.
            </p>
          </div>

          <div className="ks-services-grid">
            {services.map((service) => (
              <div key={service.title} className="ks-service-card">
                <div className="ks-service-icon-wrap">{service.icon}</div>
                <h3 className="ks-service-title">{service.title}</h3>
                <p className="ks-service-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
