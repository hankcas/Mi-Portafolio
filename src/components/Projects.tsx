import { Activity, ArrowUpRight, Navigation, Search, ShieldCheck, type LucideIcon } from 'lucide-react'
import { projects } from '../data/portfolio'
import type { Project, ProjectIcon } from '../types/portfolio'
import { revealDelay } from '../utils/reveal'
import GithubIcon from './GithubIcon'
import styles from './Projects.module.css'

const icons: Record<ProjectIcon, LucideIcon> = {
  navigation: Navigation,
  activity: Activity,
  shield: ShieldCheck,
  search: Search,
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.icon]

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ''} glass`}
      data-reveal
      style={revealDelay(index, 120)}
    >
      {/* HUD detail: targeting corners, only on project cards */}
      <span className={styles.corners} aria-hidden="true" />

      <div className={styles.body}>
        <div className={styles.top}>
          <span className={styles.icon}>
            <Icon size={22} aria-hidden="true" />
          </span>
          {project.featured && <span className={styles.badge}>Destacado</span>}
          <span className={styles.index} aria-hidden="true">
            P/{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        {project.facts && (
          <ul className={styles.facts} aria-label="Datos clave">
            {project.facts.map(fact => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        )}

        <ul className={styles.tech} aria-label="Tecnologías">
          {project.tech.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.demo}>
              {project.demoLabel ?? 'Ver demo'}
              <ArrowUpRight size={16} aria-hidden="true" className={styles.arrow} />
              <span className={styles.srOnly}> de {project.title} (se abre en otra pestaña)</span>
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <GithubIcon size={16} /> Ver código
            <ArrowUpRight size={16} aria-hidden="true" className={styles.arrow} />
            <span className={styles.srOnly}> de {project.title} en GitHub (se abre en otra pestaña)</span>
          </a>
        </div>
      </div>

      {project.image && (
        <figure className={styles.media}>
          <img src={project.image.src} alt={project.image.alt} loading="lazy" width={560} height={895} />
          {project.image.credit && <figcaption>{project.image.credit}</figcaption>}
        </figure>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <span className="section-label" data-reveal>Proyectos</span>
      <h2 data-reveal>
        Lo que he <span className="gradient-text">construido</span>
      </h2>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
