import { Activity, ArrowUpRight, Search, ShieldCheck, type LucideIcon } from 'lucide-react'
import { projects } from '../data/portfolio'
import type { ProjectIcon } from '../types/portfolio'
import { revealDelay } from '../utils/reveal'
import GithubIcon from './GithubIcon'
import styles from './Projects.module.css'

const icons: Record<ProjectIcon, LucideIcon> = {
  activity: Activity,
  shield: ShieldCheck,
  search: Search,
}

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <span className="section-label" data-reveal>Proyectos</span>
      <h2 data-reveal>
        Lo que he <span className="gradient-text">construido</span>
      </h2>

      <div className={styles.grid}>
        {projects.map((project, i) => {
          const Icon = icons[project.icon]
          return (
            <article key={project.title} className={`${styles.card} glass`} data-reveal style={revealDelay(i, 120)}>
              {/* HUD detail: targeting corners, only on project cards */}
              <span className={styles.corners} aria-hidden="true" />

              <div className={styles.top}>
                <span className={styles.icon}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className={styles.index} aria-hidden="true">
                  P/{String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>

              <ul className={styles.tech} aria-label="Tecnologías">
                {project.tech.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <GithubIcon size={16} /> Ver código
                <ArrowUpRight size={16} aria-hidden="true" className={styles.arrow} />
                <span className={styles.srOnly}> de {project.title} en GitHub (se abre en otra pestaña)</span>
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
