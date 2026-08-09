import { Link } from "react-scroll";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="summary" smooth={true} duration={500}>Summary</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>

          {/* Resume is a separate page */}
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}




