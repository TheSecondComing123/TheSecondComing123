'use client';

import { useEffect, useState, useCallback, useRef } from 'react'
import { ContributionDay } from '@/lib/github'
import { GITHUB_YEARS } from '@/constants/github'
import { Play, Pause, RotateCcw } from 'lucide-react'

const getLevelColor = (level: number): string => {
  switch (level) {
    case 0: return 'bg-green-950/30'
    case 1: return 'bg-green-800'
    case 2: return 'bg-green-700'
    case 3: return 'bg-green-600'
    case 4: return 'bg-green-500'
    default: return 'bg-green-950/30'
  }
}

const getMonthLabels = (data: ContributionDay[]) => {
  const months: { label: string; offset: number }[] = []
  let currentMonth = ''
  let lastOffset = -1
  const MIN_COLUMN_SPACING = 4

  data.forEach((day, index) => {
    const date = new Date(day.date)
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const col = Math.floor(index / 7)

    // Only add month if it's different AND far enough from the last label
    if (month !== currentMonth && (lastOffset === -1 || col - lastOffset >= MIN_COLUMN_SPACING)) {
      currentMonth = month
      lastOffset = col
      months.push({ label: month, offset: col })
    }
  })

  return months
}

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionDay[]>([])
  const [gameData, setGameData] = useState<ContributionDay[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [totalContributions, setTotalContributions] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedYear, setSelectedYear] = useState('2025')
  const years = GITHUB_YEARS
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Game of Life Logic
  const runGameStep = useCallback(() => {
    setGameData((currentData) => {
      const rows = 7
      const cols = Math.ceil(currentData.length / rows)
      
      return currentData.map((cell, i) => {
        const r = i % rows
        const c = Math.floor(i / rows)
        let neighbors = 0
        
        // Check 8 neighbors
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue
            
            const nr = r + dr
            const nc = c + dc
            
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
              const ni = nc * rows + nr
              if (ni < currentData.length && currentData[ni].level > 0) {
                neighbors++
              }
            }
          }
        }
        
        const isAlive = cell.level > 0
        let newLevel = cell.level
        
        if (isAlive && (neighbors < 2 || neighbors > 3)) {
          newLevel = 0 // Dies
        } else if (!isAlive && neighbors === 3) {
          newLevel = 2 // Becomes alive (medium green)
        }
        
        return { ...cell, level: newLevel }
      })
    })
  }, [])

  useEffect(() => {
    if (isPlaying) {
      if (gameData.length === 0) {
        setGameData(data)
      }
      gameIntervalRef.current = setInterval(runGameStep, 150)
    } else {
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current)
      }
    }
    return () => {
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current)
      }
    }
  }, [isPlaying, data, runGameStep, gameData.length])

  const toggleGame = () => {
    if (!isPlaying && gameData.length === 0) {
      setGameData(data)
    }
    setIsPlaying(!isPlaying)
  }

  const resetGame = () => {
    setIsPlaying(false)
    setGameData([])
  }

  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    // Reset game when year changes
    setIsPlaying(false)
    setGameData([])

    fetch(`/api/github-activity?year=${selectedYear}`, {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(result => {
        setData(result.data)
        setTotalContributions(result.totalContributions)
        setIsLoading(false)
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error loading contributions:', error)
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [selectedYear])

  const displayData = isPlaying || gameData.length > 0 ? gameData : data
  const monthLabels = displayData.length > 0 ? getMonthLabels(displayData) : []
  const totalWeeks = displayData.length > 0 ? Math.ceil(displayData.length / 7) : 0

  return (
    <section id="github" className="pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24262e] rounded-xl p-6 border border-gray-800/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-white">
                Contribution Graph
              </h2>
              <div className="flex items-center gap-2 bg-black/20 p-1 rounded-lg border border-white/5">
                <button
                  onClick={toggleGame}
                  className={`p-1.5 rounded-md transition-colors ${
                    isPlaying 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                  title={isPlaying ? "Pause Game of Life" : "Play Game of Life"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                {(isPlaying || gameData.length > 0) && (
                  <button
                    onClick={resetGame}
                    className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Reset to GitHub Data"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
              </div>
            </div>
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
          ) : displayData.length > 0 ? (
            <>
              <div className="mb-4 overflow-x-auto">
                <div className="flex gap-3">
                  {/* Day labels */}
                  <div className="grid grid-rows-7 gap-1 text-xs text-gray-400 pt-5 auto-rows-fr">
                    <div className="flex items-center">Mon</div>
                    <div></div>
                    <div className="flex items-center">Wed</div>
                    <div></div>
                    <div className="flex items-center">Fri</div>
                    <div></div>
                    <div></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Month labels */}
                    <div className="relative text-xs text-gray-400 mb-1 h-4">
                      {monthLabels.map((month, index) => (
                        <div
                          key={index}
                          className="absolute"
                          style={{
                            left: `${(month.offset / totalWeeks) * 100}%`
                          }}
                        >
                          {month.label}
                        </div>
                      ))}
                    </div>

                    {/* Contribution grid */}
                    <div className="grid grid-flow-col auto-cols-[1fr] grid-rows-7 gap-1">
                      {displayData.map((day, i) => (
                        <div
                          key={`${day.date}-${i}`}
                          className={`aspect-square rounded-sm ${getLevelColor(day.level)} border border-green-900/30 transition-colors duration-150`}
                          title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="text-yellow-400">
                  {isPlaying ? 'Game of Life Running...' : `${totalContributions.toLocaleString()} contributions in the last year`}
                </span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-3 h-3 rounded-sm ${getLevelColor(level)} border border-green-900/30`}
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
