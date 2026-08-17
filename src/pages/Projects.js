export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>

      <div className="projects-grid">

        {/* VIRE App */}
        <div className="project-card" data-aos="fade-up">
          <div className="project-content">

            {/* IMAGE */}
            <div className="project-image-container">
              <img 
                src="/images/vire-app.png" 
                alt="VIRE App" 
                className="project-image" 
              />
            </div>

            {/* TEXT */}
            <div className="project-details">
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
                <a 
                  href="https://github.com/markydev1220/VIRE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn"
                >
                  Code
                </a>

                <button className="project-btn">Live</button>
              </div>
            </div>

          </div>
        </div>


        {/* Portfolio Website */}
        <div className="project-card" data-aos="fade-up">
          <div className="project-content">

            {/* IMAGE */}
            <div className="project-image-container">
              <img 
                src="/images/portfolio-site.png" 
                alt="Portfolio Website" 
                className="project-image" 
              />
            </div>

            {/* TEXT */}
            <div className="project-details">
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
                <a 
                  href="https://github.com/MarkyDev1220/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn"
                >
                  Code
                </a>

                <a 
                  href="https://markevianjonesportfolio.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn"
                >
                  Live
                </a>
              </div>
            </div>

          </div>
        </div>


        {/* Placeholder Future Project 1 */}
        <div className="project-card placeholder-card" data-aos="fade-up">
          <div className="project-content">

            {/* IMAGE PLACEHOLDER */}
            <div className="project-image-container">
              <div className="placeholder-image"></div>
            </div>

            {/* TEXT */}
            <div className="project-details">
              <h2>Coming Soon</h2>
              <p className="project-tech">New project in development</p>
              <p>
                A future project will be added here. Stay tuned for updates as more apps,
                websites, and tools are built and released.
              </p>

              <div className="project-links">
                <button className="project-btn" disabled>Code</button>
                <button className="project-btn" disabled>Live</button>
              </div>
            </div>

          </div>
        </div>


        {/* Placeholder Future Project 2 */}
        <div className="project-card placeholder-card" data-aos="fade-up">
          <div className="project-content">

            <div className="project-image-container">
              <div className="placeholder-image"></div>
            </div>

            <div className="project-details">
              <h2>Coming Soon</h2>
              <p className="project-tech">Another project is on the way</p>
              <p>
                This slot is reserved for a future project. More development updates coming soon.
              </p>

              <div className="project-links">
                <button className="project-btn" disabled>Code</button>
                <button className="project-btn" disabled>Live</button>
              </div>
            </div>

          </div>
        </div>


        {/* Placeholder Future Project 3 */}
        <div className="project-card placeholder-card" data-aos="fade-up">
          <div className="project-content">

            <div className="project-image-container">
              <div className="placeholder-image"></div>
            </div>

            <div className="project-details">
              <h2>Coming Soon</h2>
              <p className="project-tech">Future expansion</p>
              <p>
                More projects will be added here as your portfolio continues to grow.
              </p>

              <div className="project-links">
                <button className="project-btn" disabled>Code</button>
                <button className="project-btn" disabled>Live</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


