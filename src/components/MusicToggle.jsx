import { useRef, useState } from 'react'
import { config } from '../config.js'

export default function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  if (!config.music || unavailable) return null

  async function toggle() {
    const audio = audioRef.current
    if (audio.paused) {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        setUnavailable(true)
      }
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={config.music} loop preload="none" onError={() => setUnavailable(true)} />
      <button
        type="button"
        className={`music-toggle ${playing ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        aria-pressed={playing}
      >
        <span className="bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
    </>
  )
}
