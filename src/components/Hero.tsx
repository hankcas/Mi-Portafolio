import { personalInfo } from '../data/portfolio'
import profileImg from '../assets/profile.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>
          {personalInfo.available ? '🟢 Disponible para trabajar' : '🔴 No disponible'}
        </span>
        <h1>
          Hola, soy <span className={styles.accent}>{personalInfo.name}</span>
        </h1>
        <p className={styles.subtitle}>
          {personalInfo.title} · {personalInfo.subtitle}
        </p>
        <p className={styles.description}>
          Construyo aplicaciones web completas con React y Node.js,
          integro soluciones IoT y automatizo procesos con inteligencia artificial.
        </p>
        <div className={styles.ctas}>
          <a href="#proyectos" className={styles.btnPrimary}>Ver proyectos</a>
          <a href="#contacto" className={styles.btnSecondary}>Contacto</a>
        </div>
      </div>
      <div className={styles.imageWrap}>
        <img src={profileImg} alt={personalInfo.name} className={styles.photo} />
      </div>
    </section>
  )
}
