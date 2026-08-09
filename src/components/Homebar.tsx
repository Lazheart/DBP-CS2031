import { useState, useEffect } from "react";

export const Homebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`homebar ${scrolled ? "homebar--scrolled" : ""}`} id="homebar">
      <div className="homebar__inner">
        {/* Logo + Brand */}
        <a href="#" className="homebar__brand" onClick={scrollToTop}>
          <img
            src={`${import.meta.env.BASE_URL}dbp-cs2031.png`}
            alt="DBP CS2031 Logo"
            className="homebar__logo"
          />
          <span className="homebar__brand-text">
            CS2031 · DBP
          </span>
        </a>

        {/* Hamburger (mobile) */}
        <button
          className={`homebar__hamburger ${menuOpen ? "homebar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`homebar__links ${menuOpen ? "homebar__links--open" : ""}`}>
          <li>
            <a
              href="#about"
              className="homebar__link"
              onClick={(e) => scrollToSection(e, "about")}
            >
              Sobre este Proyecto
            </a>
          </li>
          <li>
            <a
              href="#team-section"
              className="homebar__link"
              onClick={(e) => scrollToSection(e, "team-section")}
            >
              Colaboradores
            </a>
          </li>
          <li>
            <a
              href="#modules-section"
              className="homebar__cta"
              onClick={(e) => scrollToSection(e, "modules-section")}
            >
              Módulos
              <svg
                className="homebar__cta-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Homebar;