"use client";

import {
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Building,
  ClipboardList,
  FileSpreadsheet,
  Briefcase,
  Scale,
  Shield,
} from "lucide-react";
import { useRouter } from "next/navigation";
import "./style.css";

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      icon: <Calculator className="ks-services-icon" />,
      title: "Tax Planning & Compliance",
      description:
        "Strategic tax planning to minimize liabilities while ensuring full compliance with regulations.",
      features: [
        "Income Tax Returns",
        "Tax Optimization Strategies",
        "TDS & Advance Tax Management",
        "Tax Appeal & Litigation Support",
      ],
    },
    {
      icon: <FileText className="ks-services-icon" />,
      title: "Audit & Assurance",
      description:
        "Comprehensive audit services to ensure financial transparency and regulatory compliance.",
      features: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Risk & Control Assessment",
      ],
    },
    {
      icon: <Users className="ks-services-icon" />,
      title: "Business & Company Setup",
      description:
        "End-to-end support for business registration and regulatory compliance.",
      features: [
        "Company Incorporation",
        "Partnership & LLP Registration",
        "Compliance Filings",
        "Licenses & Registrations",
      ],
    },
    {
      icon: <Building className="ks-services-icon" />,
      title: "Corporate Compliance",
      description:
        "Ongoing corporate governance support to keep your business fully compliant.",
      features: [
        "ROC Filings",
        "Board & Shareholder Compliances",
        "Secretarial Compliances",
        "Documentation Support",
      ],
    },
    {
      icon: <FileSpreadsheet className="ks-services-icon" />,
      title: "Accounting & Bookkeeping",
      description:
        "Accurate and timely financial record-keeping for better decision-making.",
      features: [
        "Bookkeeping Services",
        "Finalization of Accounts",
        "MIS Reporting",
        "Accounting System Setup",
      ],
    },
    {
      icon: <ClipboardList className="ks-services-icon" />,
      title: "GST Services",
      description:
        "Complete GST support from registration to ongoing compliance and audits.",
      features: [
        "GST Registration",
        "GST Return Filing",
        "Input Tax Credit Management",
        "GST Audit & Litigation",
      ],
    },
    {
      icon: <TrendingUp className="ks-services-icon" />,
      title: "Financial Advisory",
      description:
        "Expert financial guidance to help your business grow and prosper.",
      features: [
        "Business Valuation",
        "Investment Planning",
        "Budgeting & Forecasting",
        "Cash Flow Management",
      ],
    },
    {
      icon: <Briefcase className="ks-services-icon" />,
      title: "Startup Services",
      description:
        "Comprehensive support for startups from inception to growth.",
      features: [
        "Startup Registration",
        "Funding Assistance",
        "Compliance Management",
        "Financial Planning",
      ],
    },
    {
      icon: <Shield className="ks-services-icon" />,
      title: "FEMA & NRI Services",
      description:
        "Specialized services for foreign exchange and NRI compliance.",
      features: [
        "FEMA Compliance",
        "NRI Taxation",
        "Foreign Investment",
        "Repatriation Services",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Understanding your needs and objectives.",
    },
    {
      step: "02",
      title: "Analysis",
      desc: "Detailed review of your financial and compliance landscape.",
    },
    {
      step: "03",
      title: "Solution",
      desc: "Designing tailored strategies and recommendations.",
    },
    {
      step: "04",
      title: "Support",
      desc: "Ongoing assistance and regular monitoring.",
    },
  ];

  return (
    <div className="ks-services-root">
      {/* Hero */}
      <section className="ks-services-hero">
        <div className="ks-services-container">
          <div className="ks-services-hero-grid">
            <div className="ks-services-hero-left">
              <h1 className="ks-services-title">
                Professional
                <span className="ks-services-title-highlight">
                  {" "}
                  Financial & Compliance Services
                </span>
              </h1>
              <p className="ks-services-lead">
                From tax planning and audit to corporate compliance and advisory,
                we provide end-to-end chartered accountancy services to support
                your growth.
              </p>
              <div className="ks-services-hero-cta-row">
                <button
                  onClick={() => router.push("/contact")}
                  className="ks-services-primary-btn"
                >
                  Book a Consultation
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("services-list")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="ks-services-secondary-btn"
                >
                  View All Services
                </button>
              </div>
            </div>

            <div className="ks-services-hero-right">
              <div className="ks-services-hero-card">
                <div className="ks-services-hero-icon-wrap">
                <img className="ks-logo-icon-img" src="/Untitled-design.png" alt="" />

                </div>
                <h3 className="ks-services-hero-card-title">
                  Trusted Chartered Accountancy Partner
                </h3>
                <p className="ks-services-hero-card-text">
                  We help you stay compliant, optimize taxes, and make confident
                  decisions with accurate financial insights and professional
                  guidance.
                </p>
                <ul className="ks-services-hero-points">
                  <li>✔ End-to-end compliance management</li>
                  <li>✔ Tailored advisory for individuals and businesses</li>
                  <li>✔ Transparent processes and regular communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section id="services-list" className="ks-services-section">
        <div className="ks-services-container">
          <div className="ks-services-header">
            <h2 className="ks-services-header-title">
              Our <span className="ks-services-title-highlight">Services</span>
            </h2>
            <p className="ks-services-header-subtitle">
              A complete suite of chartered accountancy services designed to
              support your business at every stage.
            </p>
          </div>

          <div className="ks-services-grid">
            {services.map((service) => (
              <div key={service.title} className="ks-services-card">
                <div className="ks-services-card-icon-wrap">
                  {service.icon}
                </div>
                <h3 className="ks-services-card-title">{service.title}</h3>
                <p className="ks-services-card-text">{service.description}</p>
                <ul className="ks-services-card-features">
                  {service.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ks-services-process">
        <div className="ks-services-container">
          <div className="ks-services-process-header">
            <h2 className="ks-services-process-title">Our Process</h2>
            <p className="ks-services-process-subtitle">
              A structured approach that ensures clarity, compliance, and
              long-term success.
            </p>
          </div>

          <div className="ks-services-process-grid">
            {processSteps.map((item) => (
              <div key={item.step} className="ks-services-process-card">
                <div className="ks-services-process-step">{item.step}</div>
                <h3 className="ks-services-process-card-title">
                  {item.title}
                </h3>
                <p className="ks-services-process-card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
