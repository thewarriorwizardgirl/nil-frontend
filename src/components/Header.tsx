import { useState } from "react";
import logo from "../../nil-images/image.png";
import { navigation } from "../data/navigation";
import { ArrowIcon, NavigationIcon } from "./Icons";
import type { Theme } from "../App";

type HeaderProps = {
  activeHref: string;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

const themes: { id: Theme; label: string }[] = [
  { id: "blue", label: "Blue" },
  { id: "graphite", label: "Graphite" },
  { id: "orange", label: "Orange" },
];

export default function Header({ activeHref, theme, onThemeChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="New India Logistics home">
            <img src={logo} alt="" />
            <span className="brand-copy">
              <strong>New India</strong>
              <span>LOGISTICS</span>
            </span>
          </a>
          <div className="theme-switcher" role="group" aria-label="Choose a color theme">
            {themes.map((option) => (
              <button
                className={`theme-option theme-${option.id}${theme === option.id ? " is-active" : ""}`}
                key={option.id}
                type="button"
                aria-label={`${option.label} theme`}
                aria-pressed={theme === option.id}
                title={`${option.label} theme`}
                onClick={() => onThemeChange(option.id)}
              />
            ))}
          </div>
          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={activeHref === item.href ? "is-active" : ""}
                aria-current={activeHref === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>
      <nav className="mobile-icon-nav" aria-label="Quick page navigation">
        {navigation.map((item) => (
          <a className={`mobile-icon-link${activeHref === item.href ? " is-active" : ""}`} key={item.href} href={item.href} aria-label={item.label} title={item.label}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><NavigationIcon label={item.label} /></svg>
          </a>
        ))}
      </nav>
    </>
  );
}
