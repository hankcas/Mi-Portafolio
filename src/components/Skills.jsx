import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

const icons = {
  layers: '◇',
  server: '⬡',
  cpu: '⚙',
  tool: '⚡',
  zap: '✦',
}

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <span className="section-label">Habilidades</span>
      <h2>Stack técnico</h2>

      <div className={styles.grid}>
        {skills.map((group, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{icons[group.icon] || '•'}</span>
              <h3>{group.title}</h3>
            </div>
            <div className={styles.tags}>
              {group.items.map((item, j) => (
                <span key={j} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
