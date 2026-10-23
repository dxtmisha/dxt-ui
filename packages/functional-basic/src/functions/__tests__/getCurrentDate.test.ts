/**
 * @vitest-environment jsdom
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getCurrentDate } from '../getCurrentDate'

describe('getCurrentDate', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // Fixed date: October 15, 2023, 14:30:45
    vi.setSystemTime(new Date(2023, 9, 15, 14, 30, 45))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Standard functional requirements (GeoDate formats)', () => {
    it('should return full ISO-like datetime by default when no format is provided', () => {
      const result = getCurrentDate()
      expect(result).toMatch(/^2023-10-15T14:30:45[+-]\d{2}:\d{2}$/)
    })

    it('should return identical output when "datetime" or undefined is explicitly passed', () => {
      expect(getCurrentDate('datetime')).toBe(getCurrentDate())
      expect(getCurrentDate(undefined)).toBe(getCurrentDate())
    })

    it('should return only the date portion ("YYYY-MM-DD") for format "date"', () => {
      expect(getCurrentDate('date')).toBe('2023-10-15')
    })

    it('should return year and month ("YYYY-MM") for format "year-month"', () => {
      expect(getCurrentDate('year-month')).toBe('2023-10')
    })

    it('should return standard ISO date ("YYYY-MM-DD") for date-part formats ("year", "month", "day")', () => {
      expect(getCurrentDate('year')).toBe('2023-10-15')
      expect(getCurrentDate('month')).toBe('2023-10-15')
      expect(getCurrentDate('day')).toBe('2023-10-15')
    })

    it('should return time with timezone offset ("THH:mm:ss±HH:mm") for format "time"', () => {
      expect(getCurrentDate('time')).toMatch(/^T14:30:45[+-]\d{2}:\d{2}$/)
    })

    it('should return standard ISO time ("THH:mm:ss±HH:mm") for time-part formats ("hour", "minute", "second")', () => {
      expect(getCurrentDate('hour')).toMatch(/^T14:30:45[+-]\d{2}:\d{2}$/)
      expect(getCurrentDate('minute')).toMatch(/^T14:30:45[+-]\d{2}:\d{2}$/)
      expect(getCurrentDate('second')).toMatch(/^T14:30:45[+-]\d{2}:\d{2}$/)
    })
  })

  describe('Boundary values, zero-padding, and calendar edge cases', () => {
    it('should zero-pad single-digit month, day, hour, minute, and second values', () => {
      vi.setSystemTime(new Date(2023, 0, 5, 3, 4, 9))

      expect(getCurrentDate('date')).toBe('2023-01-05')
      expect(getCurrentDate('year-month')).toBe('2023-01')
      expect(getCurrentDate('time')).toMatch(/^T03:04:09[+-]\d{2}:\d{2}$/)
      expect(getCurrentDate('datetime')).toMatch(/^2023-01-05T03:04:09[+-]\d{2}:\d{2}$/)
    })

    it('should accurately format midnight (00:00:00) and end-of-day (23:59:59) boundaries', () => {
      vi.setSystemTime(new Date(2023, 5, 1, 0, 0, 0))
      expect(getCurrentDate('datetime')).toMatch(/^2023-06-01T00:00:00[+-]\d{2}:\d{2}$/)
      expect(getCurrentDate('time')).toMatch(/^T00:00:00[+-]\d{2}:\d{2}$/)

      vi.setSystemTime(new Date(2023, 5, 1, 23, 59, 59))
      expect(getCurrentDate('datetime')).toMatch(/^2023-06-01T23:59:59[+-]\d{2}:\d{2}$/)
      expect(getCurrentDate('time')).toMatch(/^T23:59:59[+-]\d{2}:\d{2}$/)
    })

    it('should handle leap year date (February 29)', () => {
      vi.setSystemTime(new Date(2024, 1, 29, 12, 0, 0))

      expect(getCurrentDate('date')).toBe('2024-02-29')
      expect(getCurrentDate('year-month')).toBe('2024-02')
      expect(getCurrentDate('datetime')).toMatch(/^2024-02-29T12:00:00[+-]\d{2}:\d{2}$/)
    })
  })

  describe('Dynamic time progression and state isolation', () => {
    it('should reflect system clock progression across consecutive calls', () => {
      vi.setSystemTime(new Date(2023, 11, 31, 23, 59, 59))
      expect(getCurrentDate('date')).toBe('2023-12-31')

      vi.advanceTimersByTime(1000)
      expect(getCurrentDate('date')).toBe('2024-01-01')
      expect(getCurrentDate('datetime')).toMatch(/^2024-01-01T00:00:00[+-]\d{2}:\d{2}$/)
    })
  })
})
