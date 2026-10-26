import Reveal from "./Reveal";
import Counter from "./Counter";
import { ABOUT, STATS } from "../data/resumeData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Curious, consistent, and building in public.</h2>
          <p className="section-sub">
            I'm an aspiring Software Engineer with a strong foundation in Data Structures &amp;
            Algorithms, Object-Oriented Programming and full-stack MERN development — focused
            on writing clean, efficient code that solves real problems.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text glass">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className={i > 0 ? "muted" : ""}>
                {p}
              </p>
            ))}
            <ul className="check-list">
              {ABOUT.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="about-cards">
            {ABOUT.cards.map((card) => (
              <div className="info-card" key={card.label}>
                <span className="info-label">{card.label}</span>
                <span className="info-value">{card.value}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="stats-row">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter to={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
