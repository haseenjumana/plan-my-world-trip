import React from "react"
import { motion } from "framer-motion"

export default function ItineraryCard({ day, dayNumber }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition"
    >
      <h2 className="text-xl font-semibold mb-2">📅 Day {dayNumber}</h2>
      <ul className="list-disc pl-5 space-y-1">
        {day.activities.map((activity, index) => (
          <li key={index}>📍 {activity}</li>
        ))}
      </ul>
    </motion.div>
  )
}

