import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import { revealDelay } from '../utils/reveal'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="educacion" className="section">
      <span className="section-label" data-reveal>Educación</span>
      <h2 data-reveal>
        Formación <span className="gradient-text">académica</span>
      </h2>

      <div className={styles.grid}>
        {education.map((item, i) => (
          <article key={item.title} className={`${styles.card} glass`} data-reveal style={revealDelay(i)}>
            <div className={styles.top}>
              <GraduationCap size={18} aria-hidden="true" />
              <span className={styles.year}>{item.year}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
