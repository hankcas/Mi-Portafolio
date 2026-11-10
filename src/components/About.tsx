import { aboutText, stats } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <span className="section-label">Sobre mí</span>
      <h2>Desarrollador con mentalidad de ingeniero</h2>

      <div className={styles.grid}>
        <div className={styles.text}>
          {aboutText.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <span className={styles.number}>{s.number}</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
