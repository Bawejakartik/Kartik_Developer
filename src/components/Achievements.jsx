import Reveal from "./Reveal";
import { ACHIEVEMENTS } from "../data/resumeData";

export default function Achievements() {
  return (
    <section id="achievements" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Achievements</span>
          <h2 className="section-title">Milestones &amp; certifications.</h2>
        </Reveal>

        <div className="achieve-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="achieve-card glass">
              <span className="achieve-icon">{item.icon}</span>
              <div>
                <p className="achieve-title">{item.title}</p>
                <p className="achieve-date">
                  {item.date}
                  {item.link && (
                    <>
                      {" "}
                      · <a href={item.link} target="_blank" rel="noreferrer">View Certificate</a>
                    </>
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
