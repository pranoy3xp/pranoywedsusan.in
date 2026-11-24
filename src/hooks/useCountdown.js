import { useEffect, useState } from 'react'

function remaining(target) {
  const diff = Math.max(0, target - Date.now())
  return {
    done: diff === 0,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

export function useCountdown(targetDate) {
  const target = targetDate.getTime()
  const [time, setTime] = useState(() => remaining(target))

  useEffect(() => {
    const id = setInterval(() => setTime(remaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return time
}
