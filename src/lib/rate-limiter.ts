/**
 * Rate Limiter Utility
 *
 * In-memory rate limiting for API routes to prevent spam and abuse.
 * Tracks requests by identifier (typically IP address) and enforces limits.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

export class RateLimiter {
  private requests: Map<string, RateLimitEntry> = new Map();

  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}

  /**
   * Check if a request is allowed for the given identifier
   * @param identifier - Unique identifier (e.g., IP address)
   * @returns true if allowed, false if rate limited
   */
  check(identifier: string): boolean {
    const now = Date.now();
    const entry = this.requests.get(identifier);

    // First request or window expired
    if (!entry || now > entry.resetTime) {
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return true;
    }

    // Within window, check limit
    if (entry.count < this.maxRequests) {
      entry.count++;
      return true;
    }

    // Rate limited
    return false;
  }

  /**
   * Get remaining time in milliseconds until rate limit resets
   * @param identifier - Unique identifier
   * @returns milliseconds until reset, or 0 if not rate limited
   */
  getTimeUntilReset(identifier: string): number {
    const entry = this.requests.get(identifier);
    if (!entry) return 0;

    const now = Date.now();
    return Math.max(0, entry.resetTime - now);
  }

  /**
   * Cleanup old entries to prevent memory leaks
   * Should be called periodically (e.g., every hour)
   */
  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of Array.from(this.requests.entries())) {
      if (now > entry.resetTime) {
        this.requests.delete(key);
      }
    }
  }

  /**
   * Clear all entries (useful for testing)
   */
  clear(): void {
    this.requests.clear();
  }
}
