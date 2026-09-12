import { useState } from 'react'
import './App.css'

const skills = [
  {
    title: 'Programming Languages',
    items: 'Python · HTML5 · CSS3 · JavaScript (ES6+)',
  },
  {
    title: 'Core Concepts',
    items: 'Object-Oriented Programming · File I/O · Exception Handling · Data Structures',
  },
  {
    title: 'Web & Tooling',
    items: 'DOM Manipulation · Git · GitHub · VS Code · REST API Integration',
  },
]

const projects = [
  {
    title: 'Interactive CLI Management System',
    type: '01 / Python application',
    description:
      'Built modular Python applications using object-oriented programming, dynamic user input handling, and persistent data storage via JSON and local files.',
    tags: ['Python', 'OOP', 'JSON', 'File I/O'],
  },
  {
    title: 'Responsive Portfolio Website',
    type: '02 / Frontend experience',
    description:
      'Designed and deployed a multi-page personal website featuring standard web components, custom CSS layouts, and smooth navigation logic.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
  },
  {
    title: 'API Data Fetcher & Visualizer',
    type: '03 / Data utility',
    description:
      'Scripted Python utilities that query external REST APIs, process JSON payloads, and format raw data into readable CLI outputs or styled HTML cards.',
    tags: ['Python', 'REST APIs', 'JSON', 'Data Processing'],
  },
  {
    title: 'Automated File Organizer Script',
    type: '04 / Automation tool',
    description:
      'Created background Python scripts to clean and organize local directories by sorting, renaming, and batch-processing files based on type and date metadata.',
    tags: ['Python', 'Automation', 'File Systems', 'Batch Processing'],
  },
]

const workflow = [
  'Understand the problem and user goals',
  'Shape the simplest useful solution',
  'Build, test, and improve the experience',
  'Launch with a clear path for feedback',
]

const metrics = [
  { value: '10', label: 'Projects built' },
  { value: '05', label: 'Skill areas' },
  { value: '∞', label: 'Things left to learn' },
]

function App() {
  const [isNight, setIsNight] = useState(false)

  return (
    <div className={`page-shell ${isNight ? 'night-mode' : ''}`}>
      <div className="background-blur blur-one" aria-hidden="true" />
      <div className="background-blur blur-two" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">Aoun Mohammad Shah</div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Built</a>
          <a href="#workflow">Focus</a>
          <a href="#contact">Correspondence</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setIsNight((current) => !current)}
          aria-label="Switch between light and dark themes"
        >
          {isNight ? 'Day' : 'Night'}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">Aoun Mohammad Shah / Developer</p>
            <p className="hero-specialty">Python • Web • Product thinking</p>
            <h1>Learning to build useful software and finish what I start.</h1>
            <p className="lead">
              I’m Aoun, a developer interested in how ideas become working products.
              I care about clear interfaces, thoughtful systems, and the patience to
              understand a problem before trying to solve it.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                See what I’ve built
              </a>
              <a className="secondary-btn" href="mailto:oswaldomohammed@gmail.com">
                Email me
              </a>
            </div>

            <div className="badge-row">
              <span>Open to opportunities</span>
              <span>Building in public</span>
            </div>
          </div>

          <div className="hero-panel hero-note reveal-up delay-1">
            <span className="hero-note-mark">→</span>
            <p>Building practical Python tools and clean web experiences, one project at a time.</p>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/oswaldomohammed" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/oswaldomohammed" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <section className="stats reveal-up" aria-label="Record">
          {metrics.map((metric) => (
            <div key={metric.label} className="stat-box">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section className="content-section about" id="about">
          <div className="section-heading reveal-up">
            <p className="section-kicker">01 / About</p>
            <h2>Early in the journey, serious about the work.</h2>
          </div>

          <div className="about-body reveal-up">
            <p>
              I’m still early, and I’d rather say so plainly than dress it up. What I
              have is time, patience for detail, and a habit of seeing a thing through.
            </p>
            <p>
              The record below is the part that is already real. The rest is what I’m
              building now: one careful project, one better question at a time.
            </p>
          </div>

          <div className="skills reveal-up" aria-label="Skills overview">
            {skills.map((skill) => (
              <div key={skill.title} className="skill-group">
                <span className="skill-group-title">{skill.title}</span>
                <span className="skill-group-items">{skill.items}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading reveal-up">
            <p className="section-kicker">02 / Things I’ve built</p>
            <h2>A small record, still growing.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-card reveal-up delay-${index + 1}`}>
                <div className="project-meta">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section workflow-section" id="workflow">
          <div className="section-heading reveal-up">
            <p className="section-kicker">03 / Where the time goes</p>
            <h2>The things I’m practicing.</h2>
          </div>

          <div className="workflow-list">
            {workflow.map((step, index) => (
              <div key={step} className={`workflow-item reveal-up delay-${index + 1}`}>
                <span className="step-index">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section contact-panel reveal-up" id="contact">
          <p className="section-kicker">04 / Correspondence</p>
          <h2>Happy to hear from people building, hiring, or learning the same things.</h2>
          <a href="mailto:oswaldomohammed@gmail.com" className="primary-btn">
            oswaldomohammed@gmail.com
          </a>
          <div className="social-links" aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/oswaldomohammed" target="_blank" rel="noreferrer">
              <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5H3.2V20h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM20.8 13.4c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.8V20h3.3v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.3l.4-6.6Z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/oswaldomohammed" target="_blank" rel="noreferrer">
              <svg className="social-logo" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.67c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.07-1.39-1.07-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.25 1.04 2.8.8.09-.62.34-1.04.61-1.28-2.12-.24-4.35-1.06-4.35-4.71 0-1.04.37-1.89.99-2.56-.1-.24-.43-1.21.09-2.52 0 0 .81-.26 2.62.98A9.1 9.1 0 0 1 12 7.1c.82 0 1.65.11 2.42.36 1.81-1.24 2.62-.98 2.62-.98.52 1.31.19 2.28.09 2.52.62.67.99 1.52.99 2.56 0 3.66-2.23 4.47-4.36 4.71.34.3.65.88.65 1.77v2.51c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">Aoun Mohammad Shah / Built by hand / 2026</footer>
    </div>
  )
}

export default App
