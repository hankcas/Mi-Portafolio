import { personalInfo } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <span className="section-label">Contacto</span>
      <h2>Hablemos</h2>
      <p className={styles.intro}>
        ¿Tienes un proyecto en mente o buscas un desarrollador? Escríbeme.
      </p>

      <div className={styles.links}>
        <a href={`mailto:${personalInfo.email}`} className={styles.card}>
          <span className={styles.icon}>✉️</span>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>{personalInfo.email}</span>
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.card}>
          <span className={styles.icon}>💻</span>
          <span className={styles.label}>GitHub</span>
          <span className={styles.value}>hankcas</span>
        </a>
        <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className={styles.card}>
          <span className={styles.icon}>📱</span>
          <span className={styles.label}>Teléfono</span>
          <span className={styles.value}>{personalInfo.phone}</span>
        </a>
      </div>
    </section>
  )
}
