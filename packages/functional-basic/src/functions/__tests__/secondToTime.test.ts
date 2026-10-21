import { describe, expect, it } from 'vitest'
import { secondToTime } from '../secondToTime'

describe('secondToTime', () => {
  it('should convert seconds to mm:ss format', () => {
    expect(secondToTime(10)).toBe('00:10')
    expect(secondToTime(59)).toBe('00:59')
    expect(secondToTime(60)).toBe('01:00')
    expect(secondToTime(65)).toBe('01:05')
    expect(secondToTime(125)).toBe('02:05')
    expect(secondToTime(3599)).toBe('59:59')
    expect(secondToTime(3600)).toBe('60:00')
  })

  it('should handle string inputs', () => {
    expect(secondToTime('125')).toBe('02:05')
    expect(secondToTime('65')).toBe('01:05')
    expect(secondToTime('0')).toBe('00:00')
  })

  it('should truncate floating-point seconds without IEEE-754 precision artifacts', () => {
    expect(secondToTime(65.4)).toBe('01:05')
    expect(secondToTime(65.999)).toBe('01:05')
    expect(secondToTime(5.2)).toBe('00:05')
    expect(secondToTime(0.8)).toBe('00:00')
  })

  describe('hours formatting via hasHour', () => {
    it('should format as hh:mm:ss when hasHour is true for >= 1 hour', () => {
      expect(secondToTime(3600, true)).toBe('01:00:00')
      expect(secondToTime(3665, true)).toBe('01:01:05')
      expect(secondToTime(7200, true)).toBe('02:00:00')
      expect(secondToTime(36000, true)).toBe('10:00:00')
    })

    it('should format as 00:mm:ss when hasHour is true for < 1 hour', () => {
      expect(secondToTime(65, true)).toBe('00:01:05')
      expect(secondToTime(125, true)).toBe('00:02:05')
      expect(secondToTime(10, true)).toBe('00:00:10')
    })

    it('should return 00:00:00 when hasHour is true for 0 or negative values', () => {
      expect(secondToTime(0, true)).toBe('00:00:00')
      expect(secondToTime(-10, true)).toBe('00:00:00')
      expect(secondToTime(undefined, true)).toBe('00:00:00')
    })
  })

  it('should return 00:00 for 0 or negative values', () => {
    expect(secondToTime(0)).toBe('00:00')
    expect(secondToTime(-10)).toBe('00:00')
    expect(secondToTime(-100)).toBe('00:00')
  })

  it('should handle undefined, null, and non-numeric strings', () => {
    expect(secondToTime(undefined)).toBe('00:00')
    expect(secondToTime(null as any)).toBe('00:00')
    expect(secondToTime('invalid')).toBe('00:00')
    expect(secondToTime('')).toBe('00:00')
  })
})
