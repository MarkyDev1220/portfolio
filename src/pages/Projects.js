export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>

      <div className="projects-grid">

        {/* VIRE App */}
        <div className="project-card" data-aos="fade-up">
          <img src="/images/vire-app.png" alt="VIRE App" className="project-image" />
          <h2>VIRE App</h2>
          <p className="project-tech">
            Made with: Kotlin • Jetpack Compose • Firebase • WebRTC • MVVM Architecture
          </p>
          <p>
            VIRE is a real-time communication app built for Android, featuring video calls,
            messaging, and secure Firebase integration. Designed with Jetpack Compose and
            MVVM architecture for scalability and performance.
          </p>
          <div className="project-links">
            <a href="https://github.com/markydev1220/VIRE" target="_blank" rel="noopener noreferrer" className="project-btn">Code</a>
            <a href="#" className="project-btn">Live</a>
          </div>
        </div>

        {/* Portfolio Website */}
        <div className="project-card" data-aos="fade-up">
          <img src="/images/portfolio-site.png" alt="Portfolio Website" className="project-image" />
          <h2>Portfolio Website</h2>
          <p className="project-tech">
            Made with: React • JavaScript • HTML • CSS • AOS • Netlify
          </p>
          <p>
            A modern, responsive portfolio showcasing my work, skills, and experience.
            Built with React and deployed on Netlify, featuring smooth animations and
            a dark neon theme.
          </p>
          <div className="project-links">
            <a href="https://github.com/markydev1220/portfolio-site" target="_blank" rel="noopener noreferrer" className="project-btn">Code</a>
            <a href="https://markevianjonesportfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">Live</a>
          </div>
        </div>

        {/* Future Project 1 */}
        <div className="project-card" data-aos="fade-up">
          <img src="/images/project-placeholder.png" alt="Future Project" className="project-image" />
          <h2>Future Project 1</h2>
          <p className="project-tech">Made with: TBD</p>
          <p>
            Placeholder for an upcoming project — details will be added soon.
          </p>
          <div className="project-links">
            <a href="#" className="project-btn">Code</a>
            <a href="#" className="project-btn">Live</a>
          </div>
        </div>

        {/* Future Project 2 */}
        <div className="project-card" data-aos="fade-up">
          <img src="/images/project-placeholder.png" alt="Future Project" className="project-image" />
          <h2>Future Project 2</h2>
          <p className="project-tech">Made with: TBD</p>
          <p>
            Placeholder for an upcoming project — details will be added soon.
          </p>
          <div className="project-links">
            <a href="#" className="project-btn">Code</a>
            <a href="#" className="project-btn">Live</a>
          </div>
        </div>

      </div>
    </section>
  );
}