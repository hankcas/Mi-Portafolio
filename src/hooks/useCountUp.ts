import { useEffect, useRef, useState } from 'react'

/**
 * Telemetry-style counter: animates a value like "10+" from 0 when the
 * element enters the screen. Values without a number ("IoT") stay as they are.
 */
export function useCountUp<T extends HTMLElement>(value: string, duration = 1400) {
  const ref = useRef<T>(null)
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : null
  const suffix = match ? match[2] : ''

  const [current, setCurrent] = useState(target === null ? value : `0${suffix}`)

  useEffect(() => {
    const el = ref.current
    if (!el || target === null) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setCurrent(value)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ease-out
        setCurrent(`${Math.round(target * eased)}${suffix}`)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.6 })

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, target, suffix, duration])

  return { ref, current }
}
