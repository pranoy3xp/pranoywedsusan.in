import { useState } from 'react'

export function Cross({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 32" aria-hidden="true">
      <path d="M10 1.5a2 2 0 0 1 4 0V9h6.5a2 2 0 0 1 0 4H14v17.5a2 2 0 0 1-4 0V13H3.5a2 2 0 0 1 0-4H10z" fill="currentColor" />
    </svg>
  )
}

export function Heart({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Ornament({ className = '' }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament-line" />
      <Heart className="ornament-heart" />
      <Cross className="ornament-cross" />
      <Heart className="ornament-heart" />
      <span className="ornament-line" />
    </div>
  )
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <header className="section-heading reveal">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="script-gradient">{title}</h2>}
      <Ornament />
    </header>
  )
}

// Shows a decorative monogram until a real image is added to /public/images.
export function Photo({ src, alt, className = '', monogram }) {
  const [failed, setFailed] = useState(!src)
  if (failed) {
    return (
      <div className={`${className} photo-fallback`} role="img" aria-label={alt}>
        <span>{monogram}</span>
      </div>
    )
  }
  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} />
}
