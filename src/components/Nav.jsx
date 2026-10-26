import { useState } from "react";
import { NAV_ITEMS, PROFILE } from "../data/resumeData";
import useTheme from "../hooks/useTheme";
import useActiveSection from "../hooks/useActiveSection";
import { SunIcon, MoonIcon } from "./Icons";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = ["home", ...NAV_ITEMS.map((n) => n.id)];
  const active = useActiveSection(sectionIds);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <a href="#home" className="brand glass">
          <span className="brand-mark">{PROFILE.initial}</span>
          <span className="brand-name">{PROFILE.name}</span>
        </a>

        <nav className="nav-links glass">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${active === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle glass" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#contact" className="btn btn-primary btn-sm hide-mobile">
            Let's talk
          </a>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="mobile-link" onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
