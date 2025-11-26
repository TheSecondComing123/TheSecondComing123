/**
 * GitHub Constants
 * Centralized configuration for GitHub-related features
 */

export const GITHUB_USERNAME = 'TheSecondComing123';
export const GITHUB_YEARS = ['2025', '2024', '2023', '2022', '2021'] as const;
export const CACHE_TTL_DAILY = 24 * 60 * 60; // 24 hours in seconds

/**
 * GitHub contribution graph configuration
 */
export const GITHUB_CONFIG = {
  /** Minimum year for GitHub data (GitHub founded in 2008) */
  MIN_YEAR: 2008,
  /** Number of rows in contribution grid (7 days of week) */
  GRID_ROWS: 7,
  /** Minimum column spacing between month labels */
  MONTH_LABEL_MIN_SPACING: 4,
  /** GitHub activity API endpoint */
  API_ENDPOINT: '/api/github-activity'
} as const;

/**
 * Game of Life constants for contribution graph animation
 */
export const GAME_OF_LIFE = {
  /** Animation interval in milliseconds */
  INTERVAL_MS: 150,
  /** Cell level when spawned (medium green) */
  CELL_SPAWN_LEVEL: 2,
  /** Minimum neighbors for cell to survive */
  MIN_NEIGHBORS_SURVIVE: 2,
  /** Maximum neighbors for cell to survive */
  MAX_NEIGHBORS_SURVIVE: 3,
  /** Number of neighbors needed to spawn new cell */
  NEIGHBORS_TO_SPAWN: 3
} as const;
