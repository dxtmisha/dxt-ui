import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getCurrentTime } from '../getCurrentTime'

describe('getCurrentTime', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // Fixed date: October 15, 2023, 14:30:45.123
    vi.setSystemTime(new Date(2023, 9, 15, 14, 30, 45, 123))
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return the current timestamp in milliseconds matching Date.now()', () => {
      const expectedTimestamp = new Date(2023, 9, 15, 14, 30, 45, 123).getTime()
      const result = getCurrentTime()

      expect(result).toBe(expectedTimestamp)
      expect(typeof result).toBe('number')
      expect(Number.isInteger(result)).toBe(true)
    })

    it('should delegate directly to Date.now()', () => {
      const dateNowSpy = vi.spyOn(Date, 'now').mockReturnValue(1700000000000)

      expect(getCurrentTime()).toBe(1700000000000)
      expect(dateNowSpy).toHaveBeenCalledOnce()
    })
  })

  describe('Boundary values and epoch thresholds', () => {
    it('should accurately return 0 at the Unix epoch (1970-01-01T00:00:00.000Z)', () => {
      vi.setSystemTime(new Date(0))

      expect(getCurrentTime()).toBe(0)
    })

    it('should handle negative timestamps prior to the Unix epoch (before 1970)', () => {
      const preEpochDate = new Date('1969-12-31T23:59:59.000Z')
      vi.setSystemTime(preEpochDate)

      expect(getCurrentTime()).toBe(-1000)
    })

    it('should handle sub-second millisecond precision (1ms and 999ms)', () => {
      vi.setSystemTime(new Date(1))
      expect(getCurrentTime()).toBe(1)

      vi.setSystemTime(new Date(999))
      expect(getCurrentTime()).toBe(999)
    })

    it('should handle far-future dates beyond the 32-bit Unix timestamp limit (Year 2038+)', () => {
      const futureDate = new Date('2100-01-01T00:00:00.000Z')
      vi.setSystemTime(futureDate)

      expect(getCurrentTime()).toBe(futureDate.getTime())
      expect(getCurrentTime()).toBeGreaterThan(2147483647000)
    })
  })

  describe('Dynamic time progression and determinism', () => {
    it('should return identical values when invoked multiple times at the same frozen tick', () => {
      const firstCall = getCurrentTime()
      const secondCall = getCurrentTime()

      expect(firstCall).toBe(secondCall)
    })

    it('should advance monotonically as system time progresses', () => {
      const initialTime = getCurrentTime()

      vi.advanceTimersByTime(500)
      expect(getCurrentTime()).toBe(initialTime + 500)

      vi.advanceTimersByTime(59_500)
      expect(getCurrentTime()).toBe(initialTime + 60_000)
    })
  })
})
