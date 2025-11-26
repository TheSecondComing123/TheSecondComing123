import { NextResponse } from 'next/server'
import cache from '@/lib/cache'
import { fetchGitHubContributions, ContributionDay } from '@/lib/github'
import { CACHE_TTL_DAILY, GITHUB_CONFIG } from '@/constants/github'
import { CACHE_CONFIG, DATE_FORMATS } from '@/constants/api'

interface GitHubActivityApiResponse {
  source: 'graphql' | 'cache'
  data: ContributionDay[]
  totalContributions: number
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const refreshCache = url.searchParams.get(CACHE_CONFIG.REFRESH_PARAM) === CACHE_CONFIG.REFRESH_VALUE
  const yearParam = url.searchParams.get('year') || new Date().getFullYear().toString()

  // Validate year
  const year = parseInt(yearParam, 10)
  const currentYear = new Date().getFullYear()
  if (isNaN(year) || year < GITHUB_CONFIG.MIN_YEAR || year > currentYear) {
    return NextResponse.json(
      { error: 'Invalid year parameter', details: `Year must be between ${GITHUB_CONFIG.MIN_YEAR} and ${currentYear}` },
      { status: 400 }
    )
  }

  const cacheKey = `${CACHE_CONFIG.PREFIX}_${year}`

  if (refreshCache) {
    cache.del(cacheKey)
  }

  const cachedData = cache.get<GitHubActivityApiResponse>(cacheKey)
  if (cachedData && !refreshCache) {
    return NextResponse.json({ ...cachedData, source: 'cache' })
  }

  try {
    const fromDate = `${year}${DATE_FORMATS.YEAR_START}`
    const toDate = `${year}${DATE_FORMATS.YEAR_END}`

    const { contributions, totalContributions } = await fetchGitHubContributions(fromDate, toDate)

    const activityData: GitHubActivityApiResponse = {
      source: 'graphql',
      data: contributions,
      totalContributions: totalContributions
    }

    cache.set(cacheKey, activityData, CACHE_TTL_DAILY)
    return NextResponse.json(activityData)

  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)

    // Check for errors
    if (errorMessage.includes('GITHUB_ACCESS_TOKEN')) {
      return NextResponse.json(
        { error: 'GitHub authentication failed', details: 'Missing or invalid GitHub access token' },
        { status: 401 }
      )
    }

    if (errorMessage.includes('rate limit')) {
      return NextResponse.json(
        { error: 'GitHub API rate limit exceeded', details: 'Please try again later' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to fetch GitHub activity', details: errorMessage },
      { status: 500 }
    )
  }
}
