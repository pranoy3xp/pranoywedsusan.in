import { useState } from 'react'
import { Heart } from './Decor.jsx'

const COLORS = ['#f7c6d9', '#e48fb0', '#cdbcf0', '#b9a2e6', '#ffd9e6']

function makePetals(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    heart: i % 3 === 0,
    color: COLORS[i % COLORS.length],
    x: Math.random() * 100,
    size: 10 + Math.random() * 10,
    duration: 14 + Math.random() * 12,
    // Negative delays scatter petals across the screen on first paint.
    delay: -Math.random() * 26,
    sway: 2 + Math.random() * 2,
  }))
}

export default function FloatingPetals({ count = 16 }) {
  const [petals] = useState(() => makePetals(count))

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className={`petal ${p.heart ? 'petal-heart' : 'petal-leaf'}`}
          style={{
            '--x': `${p.x}%`,
            '--size': `${p.size}px`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--sway': `${p.sway}s`,
            '--c': p.color,
          }}
        >
          <span>{p.heart && <Heart />}</span>
        </span>
      ))}
    </div>
  )
}
