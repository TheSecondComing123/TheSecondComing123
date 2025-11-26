'use client';

import { useEffect, useState, useCallback, useRef } from 'react'
import { ContributionDay } from '@/lib/github'
import { GITHUB_YEARS, GITHUB_CONFIG, GAME_OF_LIFE } from '@/constants/github'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { cn, theme } from '@/lib/theme'
import { Container } from '@/components/ui/Container'

const getLevelColor = (level: number): string => {
  switch (level) {
    case 0: return theme.github.level0 
    case 1: return theme.github.level1
    case 2: return theme.github.level2 
    case 3: return theme.github.level3
    case 4: return theme.github.level4
    default: return theme.github.level0
  }
}

const getMonthLabels = (data: ContributionDay[]) => {
  const months: { label: string; offset: number }[] = []
  let currentMonth = ''
  let lastOffset = -1
  const MIN_COLUMN_SPACING = GITHUB_CONFIG.MONTH_LABEL_MIN_SPACING

  data.forEach((day, index) => {
    const date = new Date(day.date)
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const col = Math.floor(index / GITHUB_CONFIG.GRID_ROWS)

    // Debugged for like 2 hours don't touch it
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

  // Game of Life logic
  const runGameStep = useCallback(() => {
    setGameData((currentData) => {
      const rows = GITHUB_CONFIG.GRID_ROWS
      const cols = Math.ceil(currentData.length / rows)
      
      return currentData.map((cell, i) => {
        const r = i % rows
        const c = Math.floor(i / rows)
        let neighbors = 0
        
        // Check neighbors
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

        if (isAlive && (neighbors < GAME_OF_LIFE.MIN_NEIGHBORS_SURVIVE || neighbors > GAME_OF_LIFE.MAX_NEIGHBORS_SURVIVE)) {
          newLevel = 0 // Dies
        } else if (!isAlive && neighbors === GAME_OF_LIFE.NEIGHBORS_TO_SPAWN) {
          newLevel = GAME_OF_LIFE.CELL_SPAWN_LEVEL // Becomes alive (medium green)
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
      gameIntervalRef.current = setInterval(runGameStep, GAME_OF_LIFE.INTERVAL_MS)
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

    fetch(`${GITHUB_CONFIG.API_ENDPOINT}?year=${selectedYear}`, {
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
  const monthLabels = displayData?.length > 0 ? getMonthLabels(displayData) : []
  const totalWeeks = displayData?.length > 0 ? Math.ceil(displayData.length / GITHUB_CONFIG.GRID_ROWS) : 0

  return (
    <section id="github" className="pt-4 pb-2">
      <Container>
        <div className={cn("rounded-xl p-6", theme.bg.card, theme.border.subtle)}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <h2 className={cn("text-2xl font-bold ", theme.text.heading)}>
                Contribution Graph
              </h2>
              <div className={cn("flex items-center gap-2 p-1 rounded-lg border", theme.border.control, theme.bg.tertiary)}>
                <button
                  onClick={toggleGame}
                  className={`p-1.5 rounded-md transition-colors ${
                    isPlaying
                      ? 'bg-green-600 text-white'
                      : cn(theme.text.muted, theme.hover.text, theme.hover.bg)
                  }`}
                  title={isPlaying ? "Pause Game of Life" : "Play Game of Life"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                {(isPlaying || gameData.length > 0) && (
                  <button
                    onClick={resetGame}
                    className={cn("p-1.5 rounded-md transition-colors", theme.text.muted, theme.hover.text, theme.hover.bg)}
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
                      : cn("bg-transparent", theme.text.muted, theme.hover.text)
                  }`}
                  aria-label={`View ${year} contributions`}
                  aria-current={selectedYear === year ? "true" : undefined}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          
          {isLoading ? (
            <p className={cn(" py-8", theme.text.muted)}>Loading contributions...</p>
          ) : displayData.length > 0 ? (
            <>
              <div className="mb-4 overflow-x-hidden">
                <div className="flex gap-3">
                  {/* Day labels */}
                  <div className={cn("grid grid-rows-7 gap-1 text-xs  pt-5 auto-rows-fr", theme.text.muted)}>
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
                    <div className={cn("relative text-xs  mb-1 h-4", theme.text.muted)}>
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
                    <div className="grid grid-flow-col auto-cols-[1fr] grid-rows-7 gap-1" role="img" aria-label={`GitHub contribution calendar for ${selectedYear}`}>
                      {displayData.map((day, i) => (
                        <div
                          key={`${day.date}-${i}`}
                          className={cn(
                            'aspect-square rounded-sm border transition-colors duration-150',
                            getLevelColor(day.level),
                            theme.github.border
                          )}
                          title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                          aria-label={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={cn("flex items-center justify-between text-sm ", theme.text.muted)}>
                <span className="text-yellow-400">
                  {isPlaying ? 'Game of Life Running...' : `${totalContributions.toLocaleString()} contributions in ${selectedYear}`}
                </span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={cn(
                          'w-3 h-3 rounded-sm border',
                          getLevelColor(level),
                          theme.github.border
                        )}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </>
          ) : (
            <p className={cn(" py-8", theme.text.muted)}>Could not load contribution data.</p>
          )}
        </div>
      </Container>
    </section>
  )
}
