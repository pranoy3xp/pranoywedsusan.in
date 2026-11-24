import { config } from '../config.js'

const { timeZone } = config

export const coupleTitle = () => config.couple.shortNames.join(' & ')

export const mainEvent = () => config.events.find((e) => e.main) ?? config.events[0]

export function eventRange(event) {
  const start = new Date(event.start)
  const end = new Date(start.getTime() + (event.durationHours ?? 4) * 3600_000)
  return { start, end }
}

export const formatWeekday = (date) =>
  new Intl.DateTimeFormat('en-GB', { timeZone, weekday: 'long' }).format(date)

export const formatDate = (date) =>
  new Intl.DateTimeFormat('en-GB', { timeZone, day: 'numeric', month: 'long', year: 'numeric' }).format(date)

export const formatTime = (date) =>
  new Intl.DateTimeFormat('en-US', { timeZone, hour: 'numeric', minute: '2-digit' }).format(date)

export const formatTimeLabel = (event) =>
  `${formatTime(new Date(event.start))}${event.onwards ? ' onwards' : ''}`

const fullAddress = (venue) => [venue.name, ...venue.address].join(', ')

const describe = (event) =>
  `Together with our families, we invite you and your family to ${event.name.replace(/^The /, 'the ')} on ${formatDate(
    new Date(event.start),
  )} at ${event.venue.name}, ${event.venue.shortLocation}.`

const toUtcStamp = (date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

export function googleCalendarUrl(event) {
  const { start, end } = eventRange(event)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${coupleTitle()} — ${event.name}`,
    dates: `${toUtcStamp(start)}/${toUtcStamp(end)}`,
    details: describe(event),
    location: fullAddress(event.venue),
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

const escapeIcs = (text) => text.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n')

export function icsDataUrl(event) {
  const { start, end } = eventRange(event)
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'BEGIN:VEVENT',
    `UID:${toUtcStamp(start)}-${event.id}@invitation`,
    `DTSTAMP:${toUtcStamp(start)}`,
    `DTSTART:${toUtcStamp(start)}`,
    `DTEND:${toUtcStamp(end)}`,
    `SUMMARY:${escapeIcs(`${coupleTitle()} — ${event.name}`)}`,
    `LOCATION:${escapeIcs(fullAddress(event.venue))}`,
    `DESCRIPTION:${escapeIcs(describe(event))}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`
}

export const googleMapsUrl = ({ lat, lng }) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

export const appleMapsUrl = ({ lat, lng, name }) =>
  `https://maps.apple.com/?daddr=${lat},${lng}&q=${encodeURIComponent(name)}`
