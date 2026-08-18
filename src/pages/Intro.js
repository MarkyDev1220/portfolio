export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">

        {/* LEFT SIDE — TEXT */}
        <div className="intro-text-content">
          <h1 className="intro-title">About Me</h1>

          <p className="intro-text">
            Hello, my name is <strong>Markevian Jones</strong>. I’m an Android Developer with a background in SCADA and industrial operations.
            I build modern mobile apps using Kotlin, Jetpack Compose, MVVM, and Firebase. My experience with real‑time
            industrial systems gives me a strong foundation in automation, reliability, and problem‑solving.
            I enjoy creating tools that help people and designing intuitive, scalable software.
          </p>

          <a href="/resume" className="intro-button">Get my resume</a>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="intro-image-frame">
          <img src="/images/markevian.jpg" alt="Markevian Jones" className="intro-image" />
        </div>

      </div>

      {/* ABOUT BOXES BELOW */}
      <div className="intro-grid">
        <div className="intro-card" data-aos="fade-up">
          <h2>Past</h2>
          <p className="intro-tech">My Journey Begins</p>
          <p>
            I discovered my passion for programming during Covid‑19. After early challenges, I enrolled at Full Sail University of the People
            to study Computer Science and have been learning and growing ever since.
          </p>
        </div>

        <div className="intro-card" data-aos="fade-up">
          <h2>Present</h2>
          <p className="intro-tech">Building and Learning</p>
          <p>
            I’m building Android and web apps using Kotlin, Jetpack Compose, and MVVM. I focus on creating scalable,
            reliable software and solving complex problems through clean design.
          </p>
        </div>

        <div className="intro-card" data-aos="fade-up">
          <h2>Future</h2>
          <p className="intro-tech">Expanding Horizons</p>
          <p>
            I aim to expand into cross‑platform and backend development, creating seamless experiences across Android,
            iOS, and web while leading innovative projects.
          </p>
        </div>

        <div className="intro-card" data-aos="fade-up">
          <h2>Vision</h2>
          <p className="intro-tech">Empowering Innovation</p>
          <p>
            My goal is to lead projects that bridge industrial reliability with modern mobile innovation and mentor
            the next generation of developers.
          </p>
        </div>
      </div>
    </section>
  );
}
