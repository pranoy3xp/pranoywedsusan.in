import { config } from '../config.js'
import { coupleTitle, formatDate } from '../utils/events.js'
import { Ornament } from './Decor.jsx'

export default function Footer() {
  const { contact, credits } = config

  return (
    <footer className="footer">
      <p className="footer-names script-gradient">{coupleTitle()}</p>
      <Ornament />
      <ul>
        {config.events.map((event) => (
          <li key={event.id}>
            {event.name} · {formatDate(new Date(event.start))}
          </li>
        ))}
      </ul>
      <p>
        For any details, call {contact.name} on{' '}
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
      </p>
      <p className="footer-glory">{credits.glory}</p>
      <p className="footer-small">{credits.from}</p>
      {config.music && <p className="footer-small">Music: {credits.music}</p>}
    </footer>
  )
}
