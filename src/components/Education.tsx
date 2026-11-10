import { education } from '../data/portfolio'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section className="section">
      <span className="section-label">Educación</span>
      <h2>Formación académica</h2>

      <div className={styles.grid}>
        {education.map((item, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.year}>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
