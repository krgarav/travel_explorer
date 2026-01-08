
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Travel destination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Your Next Adventure
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8">
              Explore beautiful destinations, plan unforgettable trips, and travel the world with ease.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Where are you going?"
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                className="rounded-xl border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Paris",
                image:
                  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
              },
              {
                title: "Bali",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
              },
              {
                title: "New York",
                image:
                  "https://images.unsplash.com/photo-1549921296-3a6b7f8c6b2c",
              },
            ].map((place) => (
              <div
                key={place.title}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {place.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience the beauty and culture of {place.title} with our curated travel packages.
                  </p>
                  <button className="text-blue-600 font-semibold hover:underline">
                    Explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Why Travel With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl bg-gray-50 p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
                <p className="text-gray-600">
                  We offer competitive prices and exclusive deals for top destinations worldwide.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
                <p className="text-gray-600">
                  Book your trips quickly and easily with our seamless booking experience.
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-8 text-center shadow-sm">
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Our travel experts are available around the clock to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>

  );
}
