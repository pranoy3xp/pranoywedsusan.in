import { useCountdown } from '../hooks/useCountdown.js'
import { eventRange, googleCalendarUrl, icsDataUrl, mainEvent } from '../utils/events.js'
import { SectionHeading } from './Decor.jsx'

export default function Countdown() {
  const event = mainEvent()
  const { start } = eventRange(event)
  const { done, days, hours, minutes, seconds } = useCountdown(start)

  const units = [
    ['Days', days],
    ['Hours', hours],
    ['Minutes', minutes],
    ['Seconds', seconds],
  ]

  return (
    <section className="section section-lavender" id="countdown">
      <SectionHeading eyebrow="The Countdown" title={done ? 'The Day Is Here' : 'Counting the Days'} />

      <div className="countdown" role="timer" aria-live="off">
        {units.map(([label, value], i) => (
          <div key={label} className="countdown-unit reveal" style={{ '--i': i }}>
            {/* Re-keying on value replays the pop animation each time it changes. */}
            <span key={value} className="countdown-value">
              {String(value).padStart(2, '0')}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="actions reveal" style={{ '--i': 4 }}>
        <a className="button" href={googleCalendarUrl(event)} target="_blank" rel="noreferrer">
          Add to Google Calendar
        </a>
        <a className="button button-outline" href={icsDataUrl(event)} download="wedding-invite.ics">
          Download invite
        </a>
      </div>
    </section>
  )
}
