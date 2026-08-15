import { Link } from "react-router-dom";
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
          <li onClick={() => handleScroll("skills")}>Skills</li>
          <li onClick={() => handleScroll("projects")}>Projects</li>
          <li onClick={() => handleScroll("experience")}>Experience</li>
          <li onClick={() => handleScroll("contact")}>Contact</li>

          {/* Resume page link */}
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}




