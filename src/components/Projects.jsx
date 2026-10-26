import Reveal from "./Reveal";
import { PROJECTS } from "../data/resumeData";
import { ExternalLinkIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Things I've built.</h2>
          <p className="section-sub">
            A mix of full-stack products and an applied AI project — each one built end-to-end.
          </p>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05} className="project-card">
              <div className="project-top">
                <h3>{project.title}</h3>
                <span className="project-tag">{project.tag}</span>
              </div>
              <p>{project.description}</p>
              <div className="pill-row">
                {project.tech.map((t) => (
                  <span className="pill pill-sm" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" className="link-btn" key={link.label}>
                    {link.label} <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
