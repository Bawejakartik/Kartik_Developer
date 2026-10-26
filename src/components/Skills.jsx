import Reveal from "./Reveal";
import { SKILLS } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Tools &amp; technologies I work with.</h2>
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05} className="skill-card">
              <h3>{group.category}</h3>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
