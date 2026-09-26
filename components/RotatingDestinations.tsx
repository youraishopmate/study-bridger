'use client'

import { useEffect, useState } from 'react'

const destinations = ['Europe', 'Asia', 'North America', 'Oceania']

export default function RotatingDestinations() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % destinations.length)
    }, 2400)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <p className="destination-line" aria-live="polite">
      Explore your study options in <span>{destinations[index]}</span>
    </p>
  )
}
