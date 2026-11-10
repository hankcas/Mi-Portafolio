import { personalInfo } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>
        © {year} {personalInfo.name} · Hecho con React, TypeScript y Vite
      </p>
      <p className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        {personalInfo.location}
      </p>
    </footer>
  )
}
