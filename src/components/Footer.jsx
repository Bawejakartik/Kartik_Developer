import { NAV_ITEMS, PROFILE, SOCIALS } from "../data/resumeData";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">{PROFILE.initial}</span>
            {PROFILE.name}
          </a>
          <p className="muted footer-tagline">
            Full-Stack Developer &amp; aspiring Software Engineer, building efficient, scalable
            web applications.
          </p>
        </div>

        <div>
          <p className="footer-heading">Navigate</p>
          <ul className="footer-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Elsewhere</p>
          <div className="footer-socials">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn" title="GitHub">
              <GithubIcon width={16} height={16} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn" title="LinkedIn">
              <LinkedinIcon width={16} height={16} />
            </a>
            <a href={SOCIALS.email} aria-label="Email" className="social-btn">
              <MailIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <a href="#home" className="back-to-top">
          Back to top
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
}
