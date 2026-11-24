import { useEffect, useState } from 'react'
import { config } from '../config.js'
import { Heart, SectionHeading } from './Decor.jsx'

// Wishes are stored in the guest's browser only. To collect them centrally,
// replace load/save with calls to a backend (e.g. Firebase, Supabase, a form API).
const STORAGE_KEY = 'wedding-wishes'

function loadWishes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export default function Wishes() {
  const [wishes, setWishes] = useState(loadWishes)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [burst, setBurst] = useState(0)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes))
  }, [wishes])

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setWishes((prev) => [{ id: Date.now(), name: name.trim(), message: message.trim() }, ...prev])
    setName('')
    setMessage('')
    setSent(true)
    setBurst((n) => n + 1)
  }

  return (
    <section className="section section-blush" id="wishes">
      <SectionHeading eyebrow="Prayers & Wishes" title={config.wishes.title} />
      <p className="lead reveal">{config.wishes.subtitle}</p>

      <form className="wish-form reveal" onSubmit={handleSubmit}>
        <label>
          <span>Your name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={60} required />
        </label>
        <label>
          <span>Your prayer or wish</span>
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setSent(false)
            }}
            maxLength={500}
            rows={4}
            required
          />
        </label>
        <div className="burst-wrap">
          <button className="button" type="submit">
            Send blessing
          </button>
          {burst > 0 && (
            <span key={burst} className="burst" aria-hidden="true">
              {Array.from({ length: 10 }, (_, i) => (
                <Heart key={i} style={{ '--a': `${i * 36}deg` }} />
              ))}
            </span>
          )}
        </div>
        {sent && <p className="wish-thanks">Thank you — your blessing has been kept with love.</p>}
      </form>

      {wishes.length > 0 && (
        <ul className="wish-list">
          {wishes.map((wish) => (
            <li key={wish.id}>
              <Heart className="wish-heart" />
              <p>&ldquo;{wish.message}&rdquo;</p>
              <span>— {wish.name}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
