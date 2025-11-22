'use client'

import { useEffect, useState } from 'react'

interface ContributionDay {
  date: string
  count: number
  level: number
}

const getLevelColor = (level: number): string => {
  switch (level) {
    case 0: return 'bg-gray-800'
    case 1: return 'bg-primary/20'
    case 2: return 'bg-primary/40'
    case 3: return 'bg-primary/60'
    case 4: return 'bg-primary'
    default: return 'bg-gray-800'
  }
}

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionDay[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedYear, setSelectedYear] = useState('2025')
  const years = ['2025', '2024', '2023', '2022', '2021']

  useEffect(() => {
    setIsLoading(true)
    fetch(`/api/github-activity?year=${selectedYear}`)
      .then(res => res.json())
      .then(result => {
        setData(result.data)
        setTotalContributions(result.totalContributions)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error loading contributions:', error)
        setIsLoading(false)
      })
  }, [selectedYear])

  return (
    <section id="github" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-2">
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
        {isLoading ? (
          <div className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50">
            <p className="text-gray-400">Loading contributions...</p>
          </div>
        ) : data.length > 0 ? (
          <>
            <p className="text-sm text-gray-400 mb-4">
              {totalContributions.toLocaleString()} contributions in the last year
            </p>
            <div className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50 overflow-x-auto">
              <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">
                {data.map((day) => (
                  <div
                    key={day.date}
                    className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)}`}
                    title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50">
            <p className="text-gray-400">Could not load contribution data.</p>
          </div>
        )}
      </div>
    </section>
  )
}
