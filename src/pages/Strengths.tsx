import { CheckIcon } from "../components/Icons";
import { industries, strengths } from "../data/content";

export default function Strengths() {
  return (
    <section className="strengths-section section-pad" id="strengths">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">05 / Our strengths portfolio</p><h2>Experience that<br /><em>goes further.</em></h2></div>
          <p className="section-lead">Years of dependable logistics and trade compliance for organisations across diverse industries.</p>
        </div>
        <div className="strengths-layout">
          <div className="strengths-card">
            <h3>What sets us apart</h3>
            <div className="strength-grid">{strengths.map((strength) => <div className="strength-item" key={strength}><CheckIcon /><span>{strength}</span></div>)}</div>
          </div>
          <div className="industry-card">
            <p className="eyebrow eyebrow-light">Industries served</p>
            <h3>Many sectors.<br />One trusted partner.</h3>
            <div className="industry-list">{industries.map((industry, index) => <span key={industry}><b>{String(index + 1).padStart(2, "0")}</b>{industry}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
