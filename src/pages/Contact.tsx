import { ArrowIcon } from "../components/Icons";

export default function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container contact-grid">
        <div className="contact-message">
          <p className="eyebrow eyebrow-light">07 / Start a conversation</p>
          <h2>Let&apos;s move<br />your business <em>forward.</em></h2>
          <p>Tell us where you want to go. We&apos;ll help you find the right way there.</p>
          <a className="button button-white" href="mailto:ceo@newindialogistics.com">Get in touch <ArrowIcon /></a>
        </div>
        <div className="contact-details">
          <div className="contact-item"><span>Call us</span><a href="tel:+911145017120">+91 11 45017120</a></div>
          <div className="contact-item"><span>Email</span><a href="mailto:ceo@newindialogistics.com">ceo@newindialogistics.com</a></div>
          <div className="contact-item"><span>Visit us</span><address>Shreeram Plaza, 1st Floor, Plot No. 15,<br />KH. No. 388 &amp; 389, Sainik Enclave,<br />Main Najafgarh Road, New Delhi – 110043</address></div>
          <a className="contact-website" href="https://www.newindialogistics.com">www.newindialogistics.com <ArrowIcon /></a>
        </div>
      </div>
    </section>
  );
}
