import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link to="/" onClick={closeMenu}>
            MJ
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#intro" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#interested" onClick={closeMenu}>
                Interests
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <Link to="/resume" className="resume-btn" onClick={closeMenu}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}