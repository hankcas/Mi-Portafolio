import { experience } from '../data/portfolio'
import { revealDelay } from '../utils/reveal'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <span className="section-label" data-reveal>Experiencia</span>
      <h2 data-reveal>
        Trayectoria <span className="gradient-text">profesional</span>
      </h2>

      <ol className={styles.timeline}>
        {experience.map((item, i) => {
          const isCurrent = item.period.includes('Presente')
          return (
            <li key={`${item.company}-${item.period}`} className={styles.entry} data-reveal style={revealDelay(i)}>
              <span className={`${styles.dot} ${isCurrent ? styles.dotCurrent : ''}`} aria-hidden="true" />
              <div className={`${styles.card} glass`}>
                <div className={styles.meta}>
                  <span className={styles.period}>{item.period}</span>
                  {isCurrent && <span className={styles.current}>En curso</span>}
                </div>
                <h3>{item.title}</h3>
                <span className={styles.company}>{item.company}</span>
                <p>{item.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
