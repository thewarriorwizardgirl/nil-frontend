import logo from "../../nil-images/image.png";
import certificationOne from "../../nil-images/f1.jpeg";
import certificationTwo from "../../nil-images/f2.jpeg";
import certificationThree from "../../nil-images/f3.jpeg";
import certificationFour from "../../nil-images/f4.jpeg";
import { ArrowIcon } from "./Icons";
import { navigation } from "../data/navigation";

export default function Footer() {
  const certifications = [certificationOne, certificationTwo, certificationThree, certificationFour];

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <img src={logo} alt="" />
              <span className="brand-copy"><strong>New India</strong><span>LOGISTICS</span></span>
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
              {certifications.map((image, index) => (
                <div className="certification-logo" key={image}><img src={image} alt={`Certification or industry association ${index + 1}`} /></div>
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
        <div className="fixed-footer-copy"><strong>New India Logistics</strong><span>Need help with your next shipment?</span></div>
        <div className="fixed-footer-accreditations" aria-label="Certifications and associations">
          <strong>Certifications &amp; associations</strong>
          <span>AEO Certified <i /> ISO 9001:2015 <i /> CHAA <i /> NISA</span>
        </div>
        <a href="tel:+911145017120">Request a callback <ArrowIcon /></a>
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
