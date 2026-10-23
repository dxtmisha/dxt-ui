import { describe, expect, it } from 'vitest'
import { secondToTime } from '../secondToTime'

describe('secondToTime', () => {
  describe('Standard functional requirements (MM:SS format)', () => {
    it('should convert seconds to MM:SS format with leading zeros', () => {
      expect(secondToTime(1)).toBe('00:01')
      expect(secondToTime(10)).toBe('00:10')
      expect(secondToTime(59)).toBe('00:59')
      expect(secondToTime(60)).toBe('01:00')
      expect(secondToTime(65)).toBe('01:05')
      expect(secondToTime(125)).toBe('02:05')
    })

    it('should accumulate minutes beyond 59 when hasHour is false or omitted', () => {
      expect(secondToTime(3599)).toBe('59:59')
      expect(secondToTime(3600)).toBe('60:00')
      expect(secondToTime(3665, false)).toBe('61:05')
      expect(secondToTime(6000)).toBe('100:00')
    })
  })

  describe('Hours formatting (HH:MM:SS format via hasHour)', () => {
    it('should format as HH:MM:SS when hasHour is true for durations >= 1 hour', () => {
      expect(secondToTime(3600, true)).toBe('01:00:00')
      expect(secondToTime(3665, true)).toBe('01:01:05')
      expect(secondToTime(7200, true)).toBe('02:00:00')
      expect(secondToTime(36000, true)).toBe('10:00:00')
      expect(secondToTime(360000, true)).toBe('100:00:00')
    })

    it('should format as 00:MM:SS when hasHour is true for durations < 1 hour', () => {
      expect(secondToTime(1, true)).toBe('00:00:01')
      expect(secondToTime(10, true)).toBe('00:00:10')
      expect(secondToTime(65, true)).toBe('00:01:05')
      expect(secondToTime(125, true)).toBe('00:02:05')
      expect(secondToTime(3599, true)).toBe('00:59:59')
    })

    it('should return 00:00:00 when hasHour is true for 0, negative, or invalid values', () => {
      expect(secondToTime(0, true)).toBe('00:00:00')
      expect(secondToTime(-10, true)).toBe('00:00:00')
      expect(secondToTime(undefined, true)).toBe('00:00:00')
      expect(secondToTime('invalid', true)).toBe('00:00:00')
    })
  })

  describe('Boundary values and floating-point truncation', () => {
    it('should truncate floating-point seconds down via Math.floor without precision artifacts', () => {
      expect(secondToTime(65.4)).toBe('01:05')
      expect(secondToTime(65.999)).toBe('01:05')
      expect(secondToTime(5.2)).toBe('00:05')
      expect(secondToTime(3665.9, true)).toBe('01:01:05')
    })

    it('should return 00:00 when positive fractional seconds are less than 1 second (0 < time < 1)', () => {
      expect(secondToTime(0.1)).toBe('00:00')
      expect(secondToTime(0.8)).toBe('00:00')
      expect(secondToTime(0.999, true)).toBe('00:00:00')
    })

    it('should return 00:00 for 0 and negative numbers', () => {
      expect(secondToTime(0)).toBe('00:00')
      expect(secondToTime(-0)).toBe('00:00')
      expect(secondToTime(-1)).toBe('00:00')
      expect(secondToTime(-10)).toBe('00:00')
      expect(secondToTime(-100)).toBe('00:00')
    })
  })

  describe('String coercion, empty, and nullish inputs', () => {
    it('should parse numeric string inputs accurately', () => {
      expect(secondToTime('125')).toBe('02:05')
      expect(secondToTime('65')).toBe('01:05')
      expect(secondToTime('3661', true)).toBe('01:01:01')
      expect(secondToTime('0')).toBe('00:00')
    })

    it('should safely handle undefined, null, NaN, and non-numeric strings', () => {
      expect(secondToTime(undefined)).toBe('00:00')
      // @ts-expect-error testing null input at runtime
      expect(secondToTime(null)).toBe('00:00')
      expect(secondToTime(Number.NaN)).toBe('00:00')
      expect(secondToTime('invalid')).toBe('00:00')
      expect(secondToTime('')).toBe('00:00')
      expect(secondToTime('   ')).toBe('00:00')
    })
  })
})
