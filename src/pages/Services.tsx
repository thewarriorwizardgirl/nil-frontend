import ship from "../../nil-images/img1.jpeg";
import plane from "../../nil-images/img2.jpeg";
import train from "../../nil-images/img3.jpeg";
import { ArrowIcon } from "../components/Icons";
import { services } from "../data/content";

export default function Services() {
  return (
    <section className="services-section section-pad" id="services">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">02 / What we do</p><h2>Everything moving.<br /><em>Everything in order.</em></h2></div>
          <p className="section-lead">Integrated logistics and trade solutions, built around dependable delivery and complete statutory compliance.</p>
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
              <div className="service-row" key={service}><span className="service-index">{String(index + 1).padStart(2, "0")}</span><span>{service}</span><ArrowIcon /></div>
            ))}
          </div>
        </div>
        <div className="transport-cards">
          <div className="transport-card transport-air"><img src={plane} alt="" /><span>Air freight</span></div>
          <div className="transport-card transport-sea"><img src={ship} alt="" /><span>Sea freight</span></div>
          <div className="transport-card transport-land"><img src={train} alt="" /><span>Land freight</span></div>
        </div>
      </div>
    </section>
  );
}
