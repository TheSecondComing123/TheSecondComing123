/**
 * API Constants
 * Centralized API endpoints, cache configuration, and date formats
 */

/**
 * API endpoint paths
 */
export const API_ENDPOINTS = {
  /** GitHub activity data endpoint */
  GITHUB_ACTIVITY: '/api/github-activity'
} as const;

/**
 * Cache configuration
 */
export const CACHE_CONFIG = {
  /** Cache key prefix for GitHub activity data */
  PREFIX: 'github_activity_data',
  /** Query parameter for cache refresh */
  REFRESH_PARAM: 'refresh' as const,
  /** Value for refresh parameter to trigger cache clear */
  REFRESH_VALUE: 'true' as const
} as const;

/**
 * Date format strings for API queries
 * Note: The GitHub library adds timestamps, so only provide date portion
 */
export const DATE_FORMATS = {
  /** Year start date suffix (e.g., "2024-01-01") - timestamp added by library */
  YEAR_START: '-01-01',
  /** Year end date suffix (e.g., "2024-12-31") - timestamp added by library */
  YEAR_END: '-12-31'
} as const;
