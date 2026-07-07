import Reveal from "./Reveal";
import Particles from "./Particles";
import Typewriter from "./Typewriter";
import { PROFILE, SOCIALS } from "../data/resumeData";
import { GithubIcon, LinkedinIcon, MailIcon, LeetcodeIcon, DownloadIcon, ArrowRightIcon } from "./Icons";
import photo from '../assests/kartikdefender.png'
export default function Hero() {
  return (
    <section id="home" className="hero">
      <Particles />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow-pill">
              <span className="ping-dot">
                <span className="ping" />
                <span className="dot" />
              </span>
              Open to Software Engineering roles
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="hero-hi">Hi, I'm</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="hero-title">
              {PROFILE.name}
              <span className="dot-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="hero-role">
              <Typewriter />
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="hero-desc">
              I build efficient, scalable, and user-friendly full-stack applications with
              React.js, Node.js, Express.js and MongoDB — with a strong foundation in Data
              Structures &amp; Algorithms and a growing interest in AI-driven products.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="hero-actions">
              <a href={PROFILE.resumeFile} download className="btn btn-primary">
                <DownloadIcon />
                Download Resume
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
                <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="hero-socials">
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn" title="GitHub">
                <GithubIcon />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn" title="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={SOCIALS.email} aria-label="Email" className="social-btn" title="Email Kartik">
                <MailIcon />
              </a>
              <a href={SOCIALS.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="social-btn" title="LeetCode">
                <LeetcodeIcon />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="hero-card">
          <div className="hero-card-glow" aria-hidden="true" />
          <div className="hero-card-inner glass">
          <div className="avatar-frame">
  <img
    src={photo}
    alt={PROFILE.name}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>
            <div className="hero-card-footer">
              <div>
                <p className="hero-card-name">{PROFILE.name}</p>
                <p className="hero-card-location">{PROFILE.location}</p>
              </div>
              <span className="chip">MERN</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a href="#about" className="scroll-cue hide-mobile" aria-label="Scroll down">
        Scroll
        <span className="scroll-line" />
      </a>
    </section>
  );
}
