import Reveal from "./Reveal";
import { EXPERIENCE } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked.</h2>
        </Reveal>

        <div className="timeline">
          <Reveal className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card glass">
              <div className="timeline-top">
                <h3>{EXPERIENCE.role}</h3>
                <span className="timeline-date">{EXPERIENCE.dates}</span>
              </div>
              <p className="timeline-org">{EXPERIENCE.summary}</p>
              <ul className="bullet-list">
                {EXPERIENCE.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
