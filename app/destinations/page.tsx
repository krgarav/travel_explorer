
import React from 'react'

async function fetchDestinations() {
  const res = await fetch('https://api.example.com/destinations')
  return res.json()
}

export default async function HomePage() {
  const destinations = await fetchDestinations()

  return (
    <div>
      <h1>Top Destinations</h1>
      <ul>
        {destinations.map((d: any) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  )
}
