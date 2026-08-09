import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./pages/Skills";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Header />

      <main>
        <Routes>
          {/* SINGLE PAGE SCROLLING */}
          <Route
            path="/"
            element={
              <>
                <intro />
                <Home />
                <Summary />
                <Skills />
              
                <Projects />
                <Experience />
                <Contact />
              </>
            }
          />

          {/* RESUME PAGE */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
