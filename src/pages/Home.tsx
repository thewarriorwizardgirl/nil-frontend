import { ArrowIcon } from "../components/Icons";

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow eyebrow-light"><span /> Your trusted partner in global trade</p>
        <h1>
          <span className="hero-headline-desktop">New India Logistics</span>
          <span className="hero-headline-mobile">New India<br />Logistics</span>
        </h1>
        <p className="hero-intro hero-tagline">
          <span className="hero-headline-desktop">Moving Cargo with Confidence.<br />Delivering Compliance with <em>Excellence.</em></span>
          <span className="hero-headline-mobile">Moving Cargo with Confidence.<br />Delivering Compliance<br />with <em>Excellence.</em></span>
        </p>
        <div className="hero-actions">
          <a className="button button-orange" href="#services">Explore our services <ArrowIcon /></a>
          <a className="text-link text-link-light" href="#about">Get to know us <span>↓</span></a>
        </div>
        <div className="hero-note">
          <span className="hero-note-mark">NIL</span>
          <span>AEO certified · Government-approved customs brokers</span>
        </div>
      </div>
      <div className="hero-side-label">NEW DELHI · INDIA</div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About Us"><span /></a>
    </section>
  );
}
