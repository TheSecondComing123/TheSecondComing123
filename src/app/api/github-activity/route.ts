import { NextResponse } from 'next/server'
import cache from '@/lib/cache'
import { fetchGitHubContributions, ContributionDay } from '@/lib/github'

interface GitHubActivityApiResponse {
  source: 'graphql' | 'cache'
  data: ContributionDay[]
  totalContributions: number
}

const GITHUB_ACTIVITY_CACHE_KEY = 'github_activity_data'
const CACHE_TTL_DAILY = 24 * 60 * 60

export async function GET(request: Request) {
  const url = new URL(request.url)
  const refreshCache = url.searchParams.get('refresh') === 'true'
  const year = url.searchParams.get('year') || new Date().getFullYear().toString()

  const cacheKey = `${GITHUB_ACTIVITY_CACHE_KEY}_${year}`

  if (refreshCache) {
    cache.del(cacheKey)
  }

  const cachedData = cache.get<GitHubActivityApiResponse>(cacheKey)
  if (cachedData && !refreshCache) {
    return NextResponse.json({ ...cachedData, source: 'cache' })
  }

  try {
    const fromDate = `${year}-01-01`
    const toDate = `${year}-12-31`

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
    return NextResponse.json(
      { error: 'Failed to fetch GitHub activity', details: (error as Error).message },
      { status: 500 }
    )
  }
}
