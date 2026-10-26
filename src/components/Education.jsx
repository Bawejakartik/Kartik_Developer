import Reveal from "./Reveal";
import { EDUCATION } from "../data/resumeData";

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic background.</h2>
        </Reveal>

        <div className="timeline">
          <Reveal className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card glass">
              <div className="timeline-top">
                <h3>{EDUCATION.degree}</h3>
                <span className="timeline-date">{EDUCATION.dates}</span>
              </div>
              <p className="timeline-org">{EDUCATION.institution}</p>
              <div className="timeline-meta">
                <span className="chip chip-outline">CGPA: {EDUCATION.cgpa}</span>
                <span className="chip chip-outline">{EDUCATION.status}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
