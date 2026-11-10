import { useEffect } from 'react'

/**
 * Fades in every element marked with `data-reveal` when it enters the screen.
 * The animation itself lives in global.css; this hook only adds `is-visible`.
 */
export function useRevealOnScroll(): void {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    // Old browsers: show everything right away instead of hiding content.
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // animate only once
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
