import type { CSSProperties } from 'react'

/** Staggers the scroll-reveal of items in a list: 0ms, 90ms, 180ms... */
export function revealDelay(index: number, step = 90): CSSProperties {
  return { '--reveal-delay': `${index * step}ms` } as CSSProperties
}
