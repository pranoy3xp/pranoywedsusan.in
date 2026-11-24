import { config } from '../config.js'
import { formatDate, formatWeekday, mainEvent } from '../utils/events.js'
import { Cross, Heart, Photo } from './Decor.jsx'
import Dove from './Dove.jsx'

export default function Hero() {
  const [first, second] = config.couple.shortNames
  const { eyebrow, subtitle, photo, verse, place } = config.hero
  const date = new Date(mainEvent().start)

  return (
    <section className="hero" id="top">
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />

      <div className="dove-wrap dove-left" aria-hidden="true">
        <Dove />
      </div>
      <div className="dove-wrap dove-right" aria-hidden="true">
        <Dove className="dove-flip" />
      </div>

      <div className="hero-content">
        <div className="hero-rise" style={{ '--delay': '0.1s' }}>
          <Cross className="hero-cross" />
        </div>
        <p className="eyebrow hero-rise" style={{ '--delay': '0.25s' }}>
          {eyebrow}
        </p>
        <p className="hero-subtitle hero-rise" style={{ '--delay': '0.35s' }}>
          {subtitle}
        </p>

        <div className="hero-rise" style={{ '--delay': '0.5s' }}>
          <div className="hero-frame">
            <Photo className="hero-photo" src={photo} alt={`${first} and ${second}`} monogram={`${first[0]} & ${second[0]}`} />
            <span className="sparkle" aria-hidden="true">✦</span>
            <span className="sparkle" aria-hidden="true">✧</span>
            <span className="sparkle" aria-hidden="true">✦</span>
            <span className="sparkle" aria-hidden="true">✧</span>
          </div>
        </div>

        <h1 className="hero-names hero-rise" style={{ '--delay': '0.75s' }}>
          <span className="script-gradient">{first}</span>
          <Heart className="hero-heart" />
          <span className="sr-only">and</span>
          <span className="script-gradient">{second}</span>
        </h1>

        <blockquote className="hero-verse hero-rise" style={{ '--delay': '0.95s' }}>
          <p>&ldquo;{verse.text}&rdquo;</p>
          <cite>{verse.reference}</cite>
        </blockquote>

        <p className="hero-date hero-rise" style={{ '--delay': '1.1s' }}>
          {formatWeekday(date)} · {formatDate(date)}
        </p>
        <p className="hero-place hero-rise" style={{ '--delay': '1.2s' }}>
          {place}
        </p>
      </div>

      <a className="scroll-cue" href="#invitation" aria-label="Scroll to invitation">
        <Heart />
      </a>
    </section>
  )
}
