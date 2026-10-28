import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

const icons = {
  activity: '📊',
  layout: '📋',
  message: '🤖',
}

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <span className="section-label">Proyectos</span>
      <h2>Lo que he construido</h2>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.icon}>{icons[project.icon] || '📁'}</span>
              <h3>{project.title}</h3>
            </div>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.tech}>
              {project.tech.map((t, j) => (
                <span key={j} className={styles.tag}>{t}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ver en GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
