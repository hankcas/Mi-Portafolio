import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { revealDelay } from '../utils/reveal'
import GithubIcon from './GithubIcon'
import styles from './Contact.module.css'

const githubUser = personalInfo.github.split('/').pop()

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className={`${styles.panel} glass`} data-reveal>
        <span className="section-label">Contacto</span>
        <h2>
          ¿Construimos algo <span className="gradient-text">juntos</span>?
        </h2>
        <p className={styles.intro}>
          ¿Tienes un proyecto en mente o buscas un Full Stack Developer? Escríbeme y te respondo pronto.
        </p>
        <p className={styles.location}>
          <MapPin size={14} aria-hidden="true" /> {personalInfo.location}
        </p>

        <div className={styles.links}>
          <a href={`mailto:${personalInfo.email}`} className={styles.card} data-reveal style={revealDelay(1)}>
            <Mail size={20} aria-hidden="true" className={styles.icon} />
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{personalInfo.email}</span>
            <ArrowUpRight size={16} aria-hidden="true" className={styles.arrow} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            data-reveal
            style={revealDelay(2)}
          >
            <span className={styles.icon}>
              <GithubIcon size={20} />
            </span>
            <span className={styles.label}>GitHub</span>
            <span className={styles.value}>{githubUser}</span>
            <ArrowUpRight size={16} aria-hidden="true" className={styles.arrow} />
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className={styles.card}
            data-reveal
            style={revealDelay(3)}
          >
            <Phone size={20} aria-hidden="true" className={styles.icon} />
            <span className={styles.label}>Teléfono</span>
            <span className={styles.value}>{personalInfo.phone}</span>
            <ArrowUpRight size={16} aria-hidden="true" className={styles.arrow} />
          </a>
        </div>
      </div>
    </section>
  )
}
