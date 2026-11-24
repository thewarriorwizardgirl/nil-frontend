import founderPortrait from "../../nil-images/founder.jpeg";

export default function Founder() {
  return (
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
          <p>Mr. Sanjay Kr. Singhal is a distinguished logistics and international trade professional with more than 30 years of experience in customs brokerage, international logistics, EXIM consultancy, foreign trade, and regulatory compliance.</p>
          <p>His strategic leadership, deep industry knowledge, and commitment to ethical business practices have established New India Logistics as a trusted partner across multiple industries.</p>
          <blockquote>“We aim to provide integrated, innovative, and compliance-driven logistics solutions that create value for our clients and contribute to global trade growth.”</blockquote>
        </div>
      </div>
    </section>
  );
}
