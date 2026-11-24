import { config } from '../config.js'
import {
  appleMapsUrl,
  formatDate,
  formatTimeLabel,
  formatWeekday,
  googleCalendarUrl,
  googleMapsUrl,
} from '../utils/events.js'
import { Heart, SectionHeading } from './Decor.jsx'

export default function Celebrations() {
  return (
    <section className="section section-lavender" id="celebrations">
      <SectionHeading eyebrow="The Celebrations" title="Come Celebrate With Us" />

      <div className="venues">
        {config.events.map((event, i) => {
          const date = new Date(event.start)
          const { venue } = event
          return (
            <article key={event.id} className="venue reveal" style={{ '--i': i }}>
              <Heart className="venue-heart" />
              <p className="eyebrow">{event.name}</p>
              <h3>{venue.name}</h3>
              <address>
                {venue.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <p className="venue-day">{formatWeekday(date)}</p>
              <p className="venue-time">
                {formatDate(date)} · {formatTimeLabel(event)}
              </p>
              <div className="venue-links">
                <a href={googleMapsUrl(venue)} target="_blank" rel="noreferrer">
                  Google Maps
                </a>
                <a href={appleMapsUrl(venue)} target="_blank" rel="noreferrer">
                  Apple Maps
                </a>
                <a href={googleCalendarUrl(event)} target="_blank" rel="noreferrer">
                  Calendar
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
