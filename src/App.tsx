import { useEffect, useState } from "react";
import logo from "../nil-images/image.png";
import ship from "../nil-images/img1.jpeg";
import plane from "../nil-images/img2.jpeg";
import train from "../nil-images/img3.jpeg";
import founderPortrait from "../nil-images/founder.jpeg";
import certificationOne from "../nil-images/f1.jpeg";
import certificationTwo from "../nil-images/f2.jpeg";
import certificationThree from "../nil-images/f3.jpeg";
import certificationFour from "../nil-images/f4.jpeg";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Associations", href: "#associations" },
  { label: "Vision", href: "#vision" },
  { label: "Strengths", href: "#strengths" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "International Freight Forwarding (Air, Sea & Land)",
  "Customs Clearance – Import & Export",
  "AEO & Customs Compliance Advisory",
  "EXIM Documentation & Consultancy",
  "DGFT, BIS, WPC & Regulatory Approvals",
  "FSSAI, CDSCO, AQCS, PGA & Legal Compliance Support",
  "Warehousing & Distribution",
  "Supply Chain Management",
  "Project Cargo Handling",
  "Door-to-Door Logistics Solutions",
];

const industries = [
  "Engineering & Industrial Equipment",
  "Textile & Apparel",
  "FMCG",
  "Pharmaceuticals & Healthcare",
  "Electronics & Consumer Goods",
  "Food Processing & Agriculture",
  "Chemicals",
  "Retail & E-Commerce",
  "Automotive Components",
  "Project Cargo & Heavy Equipment",
];

const strengths = [
  "Experienced & qualified team",
  "Strong regulatory & government liaison",
  "Industry expertise & market knowledge",
  "Global network of partners",
  "Customer-centric approach",
  "Ethical business practices",
  "Timely & reliable services",
  "Technology-driven operations",
  "Quality & compliance focus",
  "End-to-end logistics support",
];

const associations = [
  "Custom House Agents Association (CHAA)",
  "North India Shippers Association (NISA)",
  "Accredited Economic Operator (AEO)",
  "ISO 9001:2015 Certified",
  "Government & industry recognitions",
];

const themes = [
  { id: "blue", label: "Blue" },
  { id: "graphite", label: "Graphite" },
  { id: "orange", label: "Orange" },
] as const;

type Theme = (typeof themes)[number]["id"];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function NavigationIcon({ label }: { label: string }) {
  switch (label) {
    case "Home":
      return <path d="m2.5 9 7.5-6 7.5 6M4.5 8v9h11V8M8 17v-5h4v5" />;
    case "About Us":
      return <><circle cx="10" cy="6" r="3" /><path d="M4 17c.4-3 2.4-4.5 6-4.5s5.6 1.5 6 4.5" /></>;
    case "Services":
      return <><path d="M3 6h14M3 10h14M3 14h9" /><circle cx="15.5" cy="14" r="2.5" /></>;
    case "Associations":
      return <><circle cx="7" cy="7" r="2.5" /><circle cx="14" cy="8" r="2" /><path d="M2.5 16c.3-2.4 1.8-3.7 4.5-3.7 2.6 0 4.1 1.3 4.4 3.7M12 12c2.8-.6 4.6.7 5.2 3.3" /></>;
    case "Vision":
      return <><path d="M2.5 10s2.7-5 7.5-5 7.5 5 7.5 5-2.7 5-7.5 5-7.5-5-7.5-5Z" /><circle cx="10" cy="10" r="2" /></>;
    case "Strengths":
      return <><path d="M3 17V9h3v8M8.5 17V5h3v12M14 17v-6h3v6" /><path d="M2 17h16" /></>;
    case "Founder":
      return <><circle cx="10" cy="6.5" r="3" /><path d="M4 17c.5-3.2 2.5-4.8 6-4.8s5.5 1.6 6 4.8" /><path d="M14.5 3.5 16 2l2 2-1.5 1.5" /></>;
    default:
      return <><path d="M4 3h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="m4 5 6 5 6-5" /></>;
  }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10 4 4 8-8" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem("new-india-logistics-theme");
    if (savedTheme === "deep-blue") return "blue";
    return themes.find((option) => option.id === savedTheme)?.id ?? "blue";
  });

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("new-india-logistics-theme", theme);
  }, [theme]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="New India Logistics home">
            <img src={logo} alt="" />
            <span className="brand-copy">
              <strong>New India</strong>
              <span>LOGISTICS</span>
            </span>
          </a>
          <div className="theme-switcher" role="group" aria-label="Choose a color theme">
            {themes.map((option) => (
              <button
                className={`theme-option theme-${option.id}${theme === option.id ? " is-active" : ""}`}
                key={option.id}
                type="button"
                aria-label={`${option.label} theme`}
                aria-pressed={theme === option.id}
                title={`${option.label} theme`}
                onClick={() => setTheme(option.id)}
              />
            ))}
          </div>
          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>
      <nav className="mobile-icon-nav" aria-label="Quick page navigation">
        {navigation.map((item) => (
          <a className="mobile-icon-link" key={item.href} href={item.href} aria-label={item.label} title={item.label}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><NavigationIcon label={item.label} /></svg>
          </a>
        ))}
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow eyebrow-light"><span /> Your trusted partner in global trade</p>
            <h1>
              <span className="hero-headline-desktop">
                Moving Cargo with Confidence.
                <br />
                <span className="hero-second-line">
                  Delivering Compliance with <em>Excellence.</em>
                </span>
              </span>
              <span className="hero-headline-mobile">
                Moving Cargo with
                <br />
                Confidence.
                <br />
                <span className="hero-second-line">
                  Delivering
                  <br />
                  Compliance with
                  <br />
                  <em>Excellence.</em>
                </span>
              </span>
            </h1>
            <p className="hero-intro">
              Reliable logistics, customs compliance, and trade solutions — connecting your
              business to the world.
            </p>
            <div className="hero-actions">
              <a className="button button-orange" href="#services">
                Explore our services <ArrowIcon />
              </a>
              <a className="text-link text-link-light" href="#about">
                Get to know us <span>↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="hero-note-mark">NIL</span>
              <span>AEO certified · Government-approved customs brokers</span>
            </div>
          </div>
          <div className="hero-side-label">NEW DELHI · INDIA</div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About Us">
            <span />
          </a>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="container intro-grid">
            <div className="section-heading">
              <p className="eyebrow">01 / About New India Logistics</p>
              <h2>Trade moves better when you have the <em>right partner.</em></h2>
            </div>
            <div className="intro-copy">
              <p>
                New India Logistics is a trusted name in international logistics, customs
                brokerage, EXIM consultancy, and regulatory compliance. Headquartered in New
                Delhi, we help businesses move goods seamlessly across global markets.
              </p>
              <p>
                With decades of industry expertise, we deliver reliable, compliant, and
                cost-effective solutions tailored to importers, exporters, manufacturers, and
                multinational organizations.
              </p>
              <p className="quote-line">
                “Moving Cargo with Confidence. Delivering Compliance with Excellence.”
              </p>
              <a className="text-link" href="#founder">
                Discover our story <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="container assurance-strip">
            <div className="assurance-item">
              <span className="assurance-number">30<span>+</span></span>
              <span>Years of industry experience</span>
            </div>
            <div className="assurance-item">
              <span className="assurance-icon">01</span>
              <span>One partner for your entire supply chain</span>
            </div>
            <div className="assurance-item">
              <span className="assurance-icon">AEO</span>
              <span>Compliance-led, government-approved service</span>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">02 / What we do</p>
                <h2>Everything moving.<br /><em>Everything in order.</em></h2>
              </div>
              <p className="section-lead">
                Integrated logistics and trade solutions, built around dependable delivery and
                complete statutory compliance.
              </p>
            </div>
            <div className="services-layout">
              <div className="service-feature">
                <img src={plane} alt="Cargo aircraft at an international airport" />
                <div className="service-feature-overlay">
                  <span className="feature-label">Freight · Customs · Compliance</span>
                  <h3>One seamless journey, from origin to destination.</h3>
                  <a className="feature-link" href="#contact">Talk to our team <ArrowIcon /></a>
                </div>
              </div>
              <div className="service-list">
                {services.map((service, index) => (
                  <div className="service-row" key={service}>
                    <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{service}</span>
                    <ArrowIcon />
                  </div>
                ))}
              </div>
            </div>
            <div className="transport-cards">
              <div className="transport-card transport-air">
                <img src={plane} alt="" />
                <span>Air freight</span>
              </div>
              <div className="transport-card transport-sea">
                <img src={ship} alt="" />
                <span>Sea freight</span>
              </div>
              <div className="transport-card transport-land">
                <img src={train} alt="" />
                <span>Land freight</span>
              </div>
            </div>
          </div>
        </section>

        <section className="associations-section section-pad" id="associations">
          <div className="container association-grid">
            <div className="section-heading">
              <p className="eyebrow">03 / Our associations</p>
              <h2>Built on trust.<br /><em>Recognised for it.</em></h2>
              <p className="section-lead">
                Our accreditations and industry associations reflect our commitment to
                professional standards and compliant trade.
              </p>
            </div>
            <div className="association-list">
              {associations.map((association, index) => (
                <div className="association-row" key={association}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{association}</strong>
                  <CheckIcon />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vision-section section-pad" id="vision">
          <div className="container vision-grid">
            <div className="vision-main">
              <p className="eyebrow eyebrow-light">04 / Looking ahead</p>
              <h2>Our <em>vision</em></h2>
              <p>
                To be recognised as a trusted leader in logistics, customs brokerage, and
                international trade solutions — contributing to India&apos;s economic growth
                through stronger global trade and supply chains.
              </p>
              <span className="vision-rule" />
              <span className="vision-caption">A more connected, capable trading future.</span>
            </div>
            <div className="skill-card">
              <div className="skill-topline">
                <span>02 / Skill India Initiative</span>
                <span className="skill-stamp">SKILL<br />INDIA</span>
              </div>
              <h3>Skills that move<br />the nation forward.</h3>
              <p>
                We proudly support professional development, logistics education,
                industry-oriented training, and practical knowledge.
              </p>
              <p>
                Our objective: a skilled workforce ready for the evolving demands of
                logistics, customs, and international trade.
              </p>
              <strong>Skilled Youth. Stronger Nation. Better Tomorrow.</strong>
            </div>
          </div>
        </section>

        <section className="strengths-section section-pad" id="strengths">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">05 / Our strengths portfolio</p>
                <h2>Experience that<br /><em>goes further.</em></h2>
              </div>
              <p className="section-lead">
                Years of dependable logistics and trade compliance for organisations across
                diverse industries.
              </p>
            </div>
            <div className="strengths-layout">
              <div className="strengths-card">
                <h3>What sets us apart</h3>
                <div className="strength-grid">
                  {strengths.map((strength) => (
                    <div className="strength-item" key={strength}>
                      <CheckIcon /><span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="industry-card">
                <p className="eyebrow eyebrow-light">Industries served</p>
                <h3>Many sectors.<br />One trusted partner.</h3>
                <div className="industry-list">
                  {industries.map((industry, index) => (
                    <span key={industry}><b>{String(index + 1).padStart(2, "0")}</b>{industry}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="founder-section section-pad" id="founder">
          <div className="container founder-grid">
            <div className="founder-portrait">
              <img src={founderPortrait} alt="Sanjay Kumar Singhal, founder and director of New India Logistics" />
              <span>Founder &amp; Director</span>
            </div>
            <div className="founder-copy">
              <p className="eyebrow">06 / Meet our founder &amp; director</p>
              <h2>Sanjay Kumar<br /><em>Singhal</em></h2>
              <p className="founder-role">A holistic approach to logistics solutions.</p>
              <p>
                Mr. Sanjay Kr. Singhal is a distinguished logistics and international trade
                professional with more than 30 years of experience in customs brokerage,
                international logistics, EXIM consultancy, foreign trade, and regulatory
                compliance.
              </p>
              <p>
                His strategic leadership, deep industry knowledge, and commitment to ethical
                business practices have established New India Logistics as a trusted partner
                across multiple industries.
              </p>
              <blockquote>
                “We aim to provide integrated, innovative, and compliance-driven logistics
                solutions that create value for our clients and contribute to global trade
                growth.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-grid">
            <div className="contact-message">
              <p className="eyebrow eyebrow-light">07 / Start a conversation</p>
              <h2>Let&apos;s move<br />your business <em>forward.</em></h2>
              <p>Tell us where you want to go. We&apos;ll help you find the right way there.</p>
              <a className="button button-white" href="mailto:ceo@newindialogistics.com">
                Get in touch <ArrowIcon />
              </a>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <span>Call us</span>
                <a href="tel:+911145017120">+91 11 45017120</a>
              </div>
              <div className="contact-item">
                <span>Email</span>
                <a href="mailto:ceo@newindialogistics.com">ceo@newindialogistics.com</a>
              </div>
              <div className="contact-item">
                <span>Visit us</span>
                <address>
                  Shreeram Plaza, 1st Floor, Plot No. 15,<br />
                  KH. No. 388 &amp; 389, Sainik Enclave,<br />
                  Main Najafgarh Road, New Delhi – 110043
                </address>
              </div>
              <a className="contact-website" href="https://www.newindialogistics.com">
                www.newindialogistics.com <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <img src={logo} alt="" />
              <span className="brand-copy">
                <strong>New India</strong>
                <span>LOGISTICS</span>
              </span>
            </a>
            <p>Your trusted partner in global trade, customs compliance &amp; supply chain excellence.</p>
          </div>
          <div className="footer-links">
            <span className="footer-title">Explore</span>
            {navigation.slice(0, 5).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div className="footer-links">
            <span className="footer-title">Get in touch</span>
            <a href="tel:+911145017120">+91 11 45017120</a>
            <a href="mailto:ceo@newindialogistics.com">ceo@newindialogistics.com</a>
            <a href="https://www.newindialogistics.com">newindialogistics.com</a>
          </div>
          <div className="footer-certifications">
            <span className="footer-title">Our certifications &amp; associations</span>
            <div className="certification-logos">
              {[certificationOne, certificationTwo, certificationThree, certificationFour].map((image, index) => (
                <div className="certification-logo" key={image}>
                  <img src={image} alt={`Certification or industry association ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} New India Logistics. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <div className="fixed-footer-bar">
        <div className="fixed-footer-copy">
          <strong>New India Logistics</strong>
          <span>Need help with your next shipment?</span>
        </div>
        <div className="fixed-footer-accreditations" aria-label="Certifications and associations">
          <strong>Certifications &amp; associations</strong>
          <span>AEO Certified <i /> ISO 9001:2015 <i /> CHAA <i /> NISA</span>
        </div>
        <a href="tel:+911145017120">
          Request a callback <ArrowIcon />
        </a>
      </div>
      <a
        className="whatsapp-callback"
        href="https://wa.me/911145017120?text=Hello%20New%20India%20Logistics%2C%20I%20would%20like%20a%20callback%20about%20your%20logistics%20services."
        target="_blank"
        rel="noreferrer"
        aria-label="Request a WhatsApp callback"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20l.9-4.4A8.4 8.4 0 1 1 20.5 11.7Z" />
          <path d="M8.2 7.8c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .3-.2 1-.6 1.3-.4.4-1.1.6-1.8.5-1.1-.2-2.5-.8-3.8-2-1.2-1-2-2.3-2.2-3.3-.2-.9 0-1.8.5-2.3Z" />
        </svg>
        <span>Request a WhatsApp callback</span>
      </a>
    </>
  );
}

export default App;
