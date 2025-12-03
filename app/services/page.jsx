"use client";

import {
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Building,
  ClipboardCheck,
  PieChart,
  Shield,
  Banknote,
  FileSpreadsheet,
  Briefcase,
  Scale,
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
        "Comprehensive audit services ensuring accuracy, compliance, and transparency.",
      features: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Stock & Inventory Audits",
      ],
    },
    {
      icon: <Building className="ks-services-icon" />,
      title: "Company Registration",
      description:
        "Complete assistance in company formation and regulatory compliance.",
      features: [
        "Private Limited Company",
        "Partnership Firm Registration",
        "LLP Formation",
        "Sole Proprietorship",
      ],
    },
    {
      icon: <Scale className="ks-services-icon" />,
      title: "GST Services",
      description:
        "End-to-end GST compliance and advisory services for your business.",
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
        "Financial Restructuring",
        "Cash Flow Management",
      ],
    },
    {
      icon: <FileSpreadsheet className="ks-services-icon" />,
      title: "Accounting & Bookkeeping",
      description:
        "Accurate and timely maintenance of financial records and accounts.",
      features: [
        "Monthly Bookkeeping",
        "Financial Statements",
        "Account Reconciliation",
        "Payroll Management",
      ],
    },
    {
      icon: <Users className="ks-services-icon" />,
      title: "Business Consulting",
      description:
        "Strategic consulting to drive business growth and operational efficiency.",
      features: [
        "Business Planning",
        "Feasibility Studies",
        "Management Consulting",
        "Process Optimization",
      ],
    },
    {
      icon: <ClipboardCheck className="ks-services-icon" />,
      title: "ROC Compliance",
      description:
        "Complete ROC filing and corporate compliance management.",
      features: [
        "Annual Filing",
        "Board Meeting Compliance",
        "Share Transfer",
        "Amendment Services",
      ],
    },
    {
      icon: <PieChart className="ks-services-icon" />,
      title: "Management Reporting",
      description:
        "Insightful financial reports to support informed decision-making.",
      features: [
        "MIS Reports",
        "Budget vs Actual Analysis",
        "Ratio Analysis",
        "Performance Metrics",
      ],
    },
    {
      icon: <Banknote className="ks-services-icon" />,
      title: "Loan & Finance Assistance",
      description:
        "Support in securing business loans and project financing.",
      features: [
        "Project Reports",
        "CMA Data Preparation",
        "Loan Documentation",
        "Financial Projections",
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
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Understanding your needs and objectives." },
    { step: "02", title: "Analysis", desc: "Detailed review of your situation." },
    { step: "03", title: "Solution", desc: "Tailored strategy and execution." },
    { step: "04", title: "Support", desc: "Ongoing guidance and assistance." },
  ];

  return (
    <div className="ks-services-root">

      {/* ---------- HERO SECTION ---------- */}
      <section className="ks-services-hero">
        <div className="ks-services-container">
          <div className="ks-services-hero-grid">

            {/* LEFT TEXT */}
            <div className="ks-services-hero-left">
              <h1 className="ks-services-title">
                Professional
                <span className="ks-services-title-highlight">
                  {" "}Financial & Compliance Services
                </span>
              </h1>

              <p className="ks-services-lead">
                From tax planning and audit to corporate compliance and advisory,
                we provide end-to-end chartered accountancy services to support your growth.
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
                    document.getElementById("services-list")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="ks-services-secondary-btn"
                >
                  View All Services
                </button>
              </div>
            </div>

            {/* RIGHT INFO CARD */}
            <div className="ks-services-hero-right">
              <div className="ks-services-hero-card">
                <div className="ks-services-hero-icon-wrap">
                  <img className="ks-logo-icon-img" src="/Untitled-design.png" alt="CA Logo" />
                </div>

                <h3 className="ks-services-hero-card-title">
                  Trusted Chartered Accountancy Partner
                </h3>

                <p className="ks-services-hero-card-text">
                  We help you stay compliant, optimize taxes, and make confident
                  decisions with expert insights and professional support.
                </p>

                <ul className="ks-services-hero-points">
                  <li>✔ End-to-end compliance management</li>
                  <li>✔ Tailored advisory for individuals & businesses</li>
                  <li>✔ Transparent process & regular communication</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- SERVICES LIST ---------- */}
      <section id="services-list" className="ks-services-section">
        <div className="ks-services-container">

          <div className="ks-services-header">
            <h2 className="ks-services-header-title">
              Our <span className="ks-services-title-highlight">Services</span>
            </h2>
            <p className="ks-services-header-subtitle">
              A complete suite of chartered accountancy services designed to support your business at every stage.
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
                    <li key={feature}>
                      <span className="ks-check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>


              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS SECTION ---------- */}
      <section className="ks-services-process">
        <div className="ks-services-container">

          <div className="ks-services-process-header">
            <h2 className="ks-services-process-title">Our Process</h2>
            <p className="ks-services-process-subtitle">
              A structured approach ensuring clarity, compliance, and long-term success.
            </p>
          </div>

          <div className="ks-services-process-grid">
            {processSteps.map((step) => (
              <div key={step.step} className="ks-services-process-card">

                <div className="ks-services-process-step">{step.step}</div>

                <h3 className="ks-services-process-card-title">{step.title}</h3>

                <p className="ks-services-process-card-text">{step.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
