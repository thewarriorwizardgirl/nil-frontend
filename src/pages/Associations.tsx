import { CheckIcon } from "../components/Icons";
import { associations } from "../data/content";

export default function Associations() {
  return (
    <section className="associations-section section-pad" id="associations">
      <div className="container association-grid">
        <div className="section-heading">
          <p className="eyebrow">03 / Our associations</p>
          <h2>Built on trust.<br /><em>Recognised for it.</em></h2>
          <p className="section-lead">Our accreditations and industry associations reflect our commitment to professional standards and compliant trade.</p>
        </div>
        <div className="association-list">
          {associations.map((association, index) => (
            <div className="association-row" key={association}><span>{String(index + 1).padStart(2, "0")}</span><strong>{association}</strong><CheckIcon /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
