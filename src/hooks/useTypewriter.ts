import { useEffect, useState } from 'react'

interface TypewriterOptions {
  /** Milliseconds between letters. */
  speed?: number
  /** Milliseconds to wait before the first letter. */
  startDelay?: number
}

/**
 * Reveals `text` one letter at a time. Returns the visible part and
 * whether it finished. With "reduce motion" on, the full text shows at once.
 */
export function useTypewriter(text: string, { speed = 70, startDelay = 400 }: TypewriterOptions = {}) {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [count, setCount] = useState(prefersReducedMotion ? text.length : 0)

  useEffect(() => {
    if (prefersReducedMotion) return

    let timer: number
    const typeNext = (i: number) => {
      setCount(i)
      if (i < text.length) timer = window.setTimeout(() => typeNext(i + 1), speed)
    }
    timer = window.setTimeout(() => typeNext(1), startDelay)

    return () => window.clearTimeout(timer)
  }, [text, speed, startDelay, prefersReducedMotion])

  return { typed: text.slice(0, count), done: count >= text.length }
}
