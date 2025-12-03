"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Target,
  Users,
  ArrowRight,
  Calculator,
  FileText,
  TrendingUp,
  Shield,
} from "lucide-react";
import "./style.css";

export default function AboutPage() {
  const qualifications = [
    {
      icon: <GraduationCap size={20} />,
      title: "Chartered Accountant",
      description: "Institute of Chartered Accountants of India (ICAI)",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Advanced Taxation",
      description: "Specialized in Direct and Indirect Taxation",
    },
    {
      icon: <Award size={20} />,
      title: "Audit Specialist",
      description: "Certified in Statutory and Internal Audits",
    },
  ];

  const experience = [
    {
      year: "2014 - Present",
      title: "Independent Practice",
      description:
        "Providing comprehensive CA services to businesses and individuals",
    },
    {
      year: "2012 - 2014",
      title: "Senior Associate",
      description: "Worked with leading audit and taxation firm",
    },
    {
      year: "2010 - 2012",
      title: "Article Assistant",
      description: "Completed articleship with renowned CA firm",
    },
  ];

  const values = [
    {
      icon: <Target size={28} />,
      title: "Integrity",
      description:
        "Maintaining the highest ethical standards in all our dealings",
    },
    {
      icon: <Users size={28} />,
      title: "Client Focus",
      description: "Your success is our priority, always putting clients first",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Excellence",
      description: "Delivering exceptional service with attention to detail",
    },
  ];

  return (
    <div className="about-root pt-16">
      {/* Hero / Intro */}
      <section className="about-hero" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-left animate-fadeInLeft">
              <div className="badge compact">
                <span className="badge-dot" />
                Trusted Chartered Accountant for modern businesses
              </div>

              <h1 className="about-title">
                About{" "}
                <span className="about-title-accent">CA Kanika Sharma</span>
              </h1>

              <p className="about-lead">
                With over a decade of experience in the field of chartered
                accountancy, I have been dedicated to helping businesses and
                individuals navigate complex financial landscapes with
                confidence and clarity.
              </p>

              <p className="about-body">
                My approach combines technical expertise with personalized
                service, ensuring that each client receives tailored solutions
                that align with their unique goals and circumstances.
              </p>
            </div>

            <div className="about-right animate-fadeInRight">
              <div className="profile-frame">
                <div className="profile-card">
                  <div className="profile-head">
                    <h3 className="profile-title">Professional Profile</h3>
                    <p className="profile-sub">Qualifications & Expertise</p>
                  </div>

                  <div className="quals">
                    {qualifications.map((q, i) => (
                      <div
                        key={i}
                        className="qual-item"
                        title={q.title}
                      >
                        <div className="qual-icon">{q.icon}</div>
                        <div>
                          <div className="qual-title">{q.title}</div>
                          <div className="qual-desc">{q.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="highlight-box">
                    <p className="highlight-text">
                      “Our approach is to combine technical expertise with a
                      deep understanding of each client's unique financial
                      journey.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="journey-section">
        <div className="container">
          <div className="journey-header text-center">
            <h2 className="journey-title">Professional Journey</h2>
            <p className="journey-sub">A track record of excellence and continuous growth</p>
          </div>

          <div className="journey-wrap">
            <div className="journey-line" />

            <div className="journey-list">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className={
                    "journey-row " + (idx % 2 === 0 ? "row-normal" : "row-reverse")
                  }
                >
                  <div className="journey-card animate-fadeIn">
                    <div className="journey-year" style={{ color: "#009B77", fontWeight: 700 }}>
                      {exp.year}
                    </div>
                    <h3 className="journey-job">{exp.title}</h3>
                    <p className="journey-desc">{exp.description}</p>
                  </div>

                  <div className="journey-dot" />

                  <div className="journey-empty" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div className="values-header text-center">
            <h2 className="values-title">
              Our Core <span className="about-title-accent">Values</span>
            </h2>
            <p className="values-sub">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon-wrap">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - CTA style */}
      <section className="why-choose" style={{ backgroundColor: "#002B7F", color: "#fff" }}>
        <div className="container text-center">
          <h2 className="why-title">Why Choose CA Kanika Sharma?</h2>

          <div className="why-grid">
            <div className="why-card translucent">
              <h3 className="why-card-title">Personalized Attention</h3>
              <p>Every client receives dedicated, one-on-one service tailored to their needs</p>
            </div>

            <div className="why-card translucent">
              <h3 className="why-card-title">Expert Knowledge</h3>
              <p>Stay compliant with latest regulations and tax laws</p>
            </div>

            <div className="why-card translucent">
              <h3 className="why-card-title">Timely Service</h3>
              <p>Never miss a deadline with our efficient service delivery</p>
            </div>

            <div className="why-card translucent">
              <h3 className="why-card-title">Transparent Pricing</h3>
              <p>Clear, upfront pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
