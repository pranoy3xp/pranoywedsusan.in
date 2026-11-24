import { config } from '../config.js'
import { formatDate, formatTimeLabel, formatWeekday } from '../utils/events.js'
import { Heart, SectionHeading } from './Decor.jsx'

function Person({ person, index }) {
  return (
    <div className="person reveal" style={{ '--i': index }}>
      <h3 className="script-gradient">{person.name}</h3>
      <p className="relation">{person.relation}</p>
      <p className="parents">{person.parents}</p>
      <p className="house">{person.house}</p>
    </div>
  )
}

export default function Invitation() {
  const { bride, groom } = config.couple

  return (
    <section className="section section-blush" id="invitation">
      <SectionHeading eyebrow="Holy Matrimony" title="With Joyful Hearts" />
      <p className="lead reveal">{config.invitation.intro}</p>

      <div className="couple">
        <Person person={bride} index={0} />
        <div className="couple-heart reveal" style={{ '--i': 1 }} aria-hidden="true">
          <Heart />
        </div>
        <Person person={groom} index={2} />
      </div>

      <ol className="schedule">
        {config.events.map((event, i) => {
          const date = new Date(event.start)
          return (
            <li key={event.id} className="reveal" style={{ '--i': i }}>
              <Heart className="schedule-heart" />
              <p className="schedule-name">{event.name}</p>
              <p className="schedule-date">
                {formatWeekday(date)}, {formatDate(date)}
              </p>
              <p className="schedule-meta">
                {formatTimeLabel(event)} · {event.venue.name}, {event.venue.shortLocation}
              </p>
            </li>
          )
        })}
      </ol>

      <p className="closing reveal">{config.invitation.closing}</p>
    </section>
  )
}
