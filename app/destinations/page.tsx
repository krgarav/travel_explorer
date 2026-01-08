
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react'

async function fetchDestinations() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
  return res.json()
}

export default async function HomePage() {
  const destinations = await fetchDestinations();
  return (
    <>
      <Header />
      <div className="bg-gray-50 py-12 pt-28">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Top Destinations
          </h1>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((d: any) => (
              <li
                key={d.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col items-center justify-center text-center"
              >
                {/* Optional image */}
                {d.image && (
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}

                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {d.title}
                </h2>

                {d.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {d.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>

  )
}
