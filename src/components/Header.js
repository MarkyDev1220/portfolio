import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (target) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => handleScroll("intro")}>Intro</li>
          <li onClick={() => handleScroll("summary")}>Summary</li>
          <li onClick={() => handleScroll("skills")}>Skills</li>
          <li onClick={() => handleScroll("projects")}>Projects</li>
          <li onClick={() => handleScroll("experience")}>Experience</li>
          <li onClick={() => handleScroll("contact")}>Contact</li>

          {/* Resume is a separate page */}
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}






