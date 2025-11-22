'use client'

import { useEffect, useState } from 'react'

interface ContributionDay {
  date: string
  count: number
  level: number
}

const getLevelColor = (level: number): string => {
  switch (level) {
    case 0: return 'bg-[#1a1d24]'
    case 1: return 'bg-green-800'
    case 2: return 'bg-green-700'
    case 3: return 'bg-green-600'
    case 4: return 'bg-green-500'
    default: return 'bg-[#1a1d24]'
  }
}

const getMonthLabels = (data: ContributionDay[]) => {
  const months: { label: string; offset: number }[] = []
  let currentMonth = ''
  
  data.forEach((day, index) => {
    const date = new Date(day.date)
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const col = Math.floor(index / 7)
    
    if (month !== currentMonth) {
      currentMonth = month
      months.push({ label: month, offset: col })
    }
  })
  
  return months
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

  const monthLabels = data.length > 0 ? getMonthLabels(data) : []

  return (
    <section id="github" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">
              Contribution Graph
            </h2>
            <div className="flex gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                    selectedYear === year
                      ? 'bg-green-600 text-white'
                      : 'bg-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          
          {isLoading ? (
            <p className="text-gray-400 py-8">Loading contributions...</p>
          ) : data.length > 0 ? (
            <>
              <div className="mb-4 overflow-x-auto">
                <div className="flex gap-2">
                  {/* Day labels */}
                  <div className="flex flex-col gap-[2px] text-xs text-gray-400 pt-5">
                    <div className="h-[10px] flex items-center">Mon</div>
                    <div className="h-[10px]"></div>
                    <div className="h-[10px] flex items-center">Wed</div>
                    <div className="h-[10px]"></div>
                    <div className="h-[10px] flex items-center">Fri</div>
                    <div className="h-[10px]"></div>
                    <div className="h-[10px]"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Month labels */}
                    <div className="flex text-xs text-gray-400 mb-1">
                      {monthLabels.map((month, index) => (
                        <div
                          key={index}
                          className="relative"
                          style={{ 
                            width: `${index < monthLabels.length - 1 
                              ? (monthLabels[index + 1].offset - month.offset) * 12 
                              : ((data.length / 7) - month.offset) * 12}px`
                          }}
                        >
                          {month.label}
                        </div>
                      ))}
                    </div>
                    
                    {/* Contribution grid */}
                    <div className="grid grid-flow-col auto-cols-fr grid-rows-7 gap-[2px]">
                      {data.map((day) => (
                        <div
                          key={day.date}
                          className={`aspect-square rounded-sm ${getLevelColor(day.level)}`}
                          title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="text-yellow-400">{totalContributions.toLocaleString()} contributions in the last year</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(level)}`}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-400 py-8">Could not load contribution data.</p>
          )}
        </div>
      </div>
    </section>
  )
}
