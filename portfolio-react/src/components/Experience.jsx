import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <span className="section-label">Experiencia</span>
      <h2>Trayectoria profesional</h2>

      <div className={styles.timeline}>
        {experience.map((item, i) => (
          <div key={i} className={styles.entry}>
            <div className={styles.dot} />
            <div className={styles.card}>
              <span className={styles.period}>{item.period}</span>
              <h3>{item.title}</h3>
              <span className={styles.company}>{item.company}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
