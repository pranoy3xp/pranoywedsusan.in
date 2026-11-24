import { config } from '../config.js'
import { Cross, SectionHeading } from './Decor.jsx'

export default function Blessing() {
  const { lines, reference, cord } = config.blessing
  const [first, second] = config.couple.shortNames

  return (
    <section className="section section-blush" id="blessing">
      <SectionHeading eyebrow="God's Word" title="Love Never Fails" />

      <blockquote className="verse-card reveal">
        <span className="quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        {lines.map((line, i) => (
          <p key={line} className="verse-line reveal" style={{ '--i': i + 2 }}>
            {line}
          </p>
        ))}
        <cite className="reveal" style={{ '--i': lines.length + 2 }}>
          {reference}
        </cite>
      </blockquote>

      <div className="cord reveal">
        <div className="cord-names">
          <span className="script-gradient">{first}</span>
          <Cross className="cord-cross" />
          <span className="script-gradient">{second}</span>
        </div>
        <p className="cord-verse">&ldquo;{cord.text}&rdquo;</p>
        <cite>{cord.reference}</cite>
        <p className="cord-tagline">{cord.tagline}</p>
      </div>
    </section>
  )
}
