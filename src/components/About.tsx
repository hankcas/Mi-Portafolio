import { aboutText, stats } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'
import type { Stat } from '../types/portfolio'
import { revealDelay } from '../utils/reveal'
import styles from './About.module.css'

function TelemetryCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, current } = useCountUp<HTMLSpanElement>(stat.number)

  return (
    <div className={`${styles.statCard} glass`} data-reveal style={revealDelay(index)}>
      <div className={styles.statHead} aria-hidden="true">
        <span>CH-{String(index + 1).padStart(2, '0')}</span>
        <span className={styles.live} />
      </div>
      {/* Screen readers read the final value, not every animation step. */}
      <span className={styles.number} aria-hidden="true" ref={ref}>
        {current}
      </span>
      <span className={styles.srOnly}>{stat.number}</span>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.signal} aria-hidden="true" />
    </div>
  )
}

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <span className="section-label" data-reveal>Sobre mí</span>
      <h2 data-reveal>
        Desarrollador con <span className="gradient-text">mentalidad de ingeniero</span>
      </h2>

      <div className={styles.grid}>
        <div className={styles.text} data-reveal>
          {aboutText.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <TelemetryCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
