import { useState, useEffect } from 'react'
import { navLinks } from '../data/portfolio'
import styles from './Navbar.module.css'

export default function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        leo<span>.</span>castro
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button
          className={styles.themeBtn}
          onClick={toggleTheme}
          aria-label={darkMode ? 'Modo claro' : 'Modo oscuro'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Menú"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  )
}
