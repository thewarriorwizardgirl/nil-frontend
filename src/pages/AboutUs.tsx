import { ArrowIcon } from "../components/Icons";

export default function AboutUs() {
  return (
    <section className="intro-section section-pad" id="about">
      <div className="container intro-grid">
        <div className="section-heading">
          <p className="eyebrow">01 / About New India Logistics</p>
          <h2>Trade moves better when you have the <em>right partner.</em></h2>
        </div>
        <div className="intro-copy">
          <p>New India Logistics is a trusted name in international logistics, customs brokerage, EXIM consultancy, and regulatory compliance. Headquartered in New Delhi, we help businesses move goods seamlessly across global markets.</p>
          <p>With decades of industry expertise, we deliver reliable, compliant, and cost-effective solutions tailored to importers, exporters, manufacturers, and multinational organizations.</p>
          <p className="quote-line">“Moving Cargo with Confidence. Delivering Compliance with Excellence.”</p>
          <a className="text-link" href="#founder">Discover our story <ArrowIcon /></a>
        </div>
      </div>
      <div className="container assurance-strip">
        <div className="assurance-item"><span className="assurance-number">30<span>+</span></span><span>Years of industry experience</span></div>
        <div className="assurance-item"><span className="assurance-icon">01</span><span>One partner for your entire supply chain</span></div>
        <div className="assurance-item"><span className="assurance-icon">AEO</span><span>Compliance-led, government-approved service</span></div>
      </div>
    </section>
  );
}
