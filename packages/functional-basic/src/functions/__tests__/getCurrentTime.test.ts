import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getCurrentTime } from '../getCurrentTime'

describe('getCurrentTime', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // Set a fixed date: October 15, 2023, 14:30:45
    vi.setSystemTime(new Date(2023, 9, 15, 14, 30, 45))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return current time in milliseconds', () => {
    const result = getCurrentTime()
    expect(result).toBe(new Date(2023, 9, 15, 14, 30, 45).getTime())
  })
})
