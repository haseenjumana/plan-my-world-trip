import React, { useState } from 'react'
import ItineraryCard from './components/ItineraryCard'
import mockItinerary from './data/mockItinerary'

export default function App() {
  const [destination, setDestination] = useState('United Arab Emirates')
  const itinerary = mockItinerary[destination] || []

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#dbeafe] via-white to-[#e0f2fe] p-6 overflow-hidden">

      {/* Background Illusion Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-200 opacity-20 rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute top-[50%] left-[40%] w-[200px] h-[200px] bg-purple-300 opacity-10 rounded-full filter blur-xl animate-pulse"></div>
      </div>

      {/* Glass Panel Content */}
      <div className="relative z-10 max-w-6xl mx-auto bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-10 border border-white/30">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-900 drop-shadow">
          🌍 PlanMyTrip: World Travel Itinerary
        </h1>

        <div className="flex justify-center mb-6">
          <select
            className="p-3 border border-blue-300 rounded-lg shadow text-lg bg-white/60 backdrop-blur focus:outline-none"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {Object.keys(mockItinerary).map((place) => (
              <option key={place}>{place}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {itinerary.map((day, index) => (
            <ItineraryCard key={index} day={day} dayNumber={index + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

