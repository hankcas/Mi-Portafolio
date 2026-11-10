import { ArrowUpRight, Cpu, Layers } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import profileImg from '../assets/profile.webp'
import styles from './Hero.module.css'

export default function Hero() {
  const { typed, done } = useTypewriter(personalInfo.title)

  return (
    <section id="inicio" className={styles.hero}>
      {/* HUD detail: subtle grid, only in the hero */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={`${styles.badge} glass`}>
            <span className={personalInfo.available ? styles.dotOn : styles.dotOff} aria-hidden="true" />
            {personalInfo.available ? 'Disponible para nuevos proyectos' : 'Sin disponibilidad por ahora'}
          </span>

          <p className={styles.greeting}>
            Hola, soy <strong>{personalInfo.name}</strong>
          </p>

          {/* Screen readers get the full title; the typed letters are visual only. */}
          <h1 className={styles.title} aria-label={personalInfo.title}>
            <span className={styles.titleGhost} aria-hidden="true">
              {personalInfo.title}
            </span>
            <span className={styles.titleTyped} aria-hidden="true">
              <span className="gradient-text">{typed}</span>
              <span className={`${styles.caret} ${done ? styles.caretDone : ''}`} />
            </span>
          </h1>

          <p className={styles.summary}>{personalInfo.summary}</p>

          <div className={styles.differentiator}>
            <p>{personalInfo.differentiator}</p>
            <ul aria-label="Diferenciales">
              {personalInfo.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.ctas}>
            <a href="#proyectos" className={styles.btnPrimary}>
              Ver proyectos <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="#contacto" className={`${styles.btnSecondary} glass`}>
              Hablemos
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.ring}>
            <img
              src={profileImg}
              alt={`Foto de ${personalInfo.name}`}
              className={styles.photo}
              width={640}
              height={640}
            />
          </div>
          <span className={`${styles.chip} ${styles.chipTop} glass`}>
            <Layers size={15} aria-hidden="true" /> React · Node · TS
          </span>
          <span className={`${styles.chip} ${styles.chipBottom} glass`}>
            <Cpu size={15} aria-hidden="true" /> Mecatrónica + IoT
          </span>
        </div>
      </div>
    </section>
  )
}
