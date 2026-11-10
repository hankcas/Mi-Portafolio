// Shapes of the content in src/data/portfolio.ts.
// If a field is missing or misspelled there, TypeScript flags it.

export interface PersonalInfo {
  name: string
  fullName: string
  title: string
  subtitle: string
  /** Main pitch shown under the title in the hero. */
  summary: string
  /** What sets the profile apart (Mechatronics + IoT). */
  differentiator: string
  highlights: string[]
  email: string
  phone: string
  github: string
  location: string
  available: boolean
}

export interface Stat {
  number: string
  label: string
}

// Only these icon names exist in Skills.tsx and Projects.tsx.
export type SkillIcon = 'layers' | 'server' | 'cpu' | 'tool' | 'zap'
export type ProjectIcon = 'activity' | 'shield' | 'search'

export interface SkillGroup {
  title: string
  icon: SkillIcon
  items: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  icon: ProjectIcon
}

export interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
}

export interface EducationItem {
  year: string
  title: string
  institution: string
}

export interface NavLink {
  href: `#${string}`
  label: string
}
