import { BrainCircuit, Cpu, Layers, Server, Wrench, type LucideIcon } from 'lucide-react'
import { skills } from '../data/portfolio'
import type { SkillIcon } from '../types/portfolio'
import { revealDelay } from '../utils/reveal'
import styles from './Skills.module.css'

const icons: Record<SkillIcon, LucideIcon> = {
  layers: Layers,
  server: Server,
  cpu: Cpu,
  tool: Wrench,
  zap: BrainCircuit,
}

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <span className="section-label" data-reveal>Habilidades</span>
      <h2 data-reveal>
        Stack <span className="gradient-text">técnico</span>
      </h2>

      <div className={styles.grid}>
        {skills.map((group, i) => {
          const Icon = icons[group.icon]
          return (
            <article key={group.title} className={`${styles.card} glass`} data-reveal style={revealDelay(i)}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className={styles.tags}>
                {group.items.map(item => (
                  <li key={item} className={styles.tag}>{item}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
