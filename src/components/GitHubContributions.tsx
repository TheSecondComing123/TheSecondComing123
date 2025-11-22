'use client'

import { useState } from 'react'

export default function GitHubContributions() {
  const [selectedYear, setSelectedYear] = useState('2024')
  const years = ['2025', '2024', '2023', '2022', '2021']

  return (
    <section id="github" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">
            GitHub Contributions
          </h2>
          <div className="flex gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedYear === year
                    ? 'bg-primary text-white'
                    : 'bg-[#24262e] text-gray-400 border border-gray-800'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50">
          <img 
            src={`https://ghchart.rshah.org/22c55e/TheSecondComing123?year=${selectedYear}`}
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
