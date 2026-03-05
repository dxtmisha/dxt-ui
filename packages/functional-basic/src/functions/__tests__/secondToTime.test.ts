import { describe, it, expect } from 'vitest'
import { secondToTime } from '../secondToTime'

describe('secondToTime', () => {
  it('should convert seconds to mm:ss format', () => {
    expect(secondToTime(65)).toBe('01:05')
    expect(secondToTime(3600)).toBe('60:00')
    expect(secondToTime(10)).toBe('00:10')
  })

  it('should handle string inputs', () => {
    expect(secondToTime('125')).toBe('02:05')
  })

  it('should return 00:00 for 0 or negative values', () => {
    expect(secondToTime(0)).toBe('00:00')
    expect(secondToTime(-10)).toBe('00:00')
  })

  it('should handle undefined', () => {
    expect(secondToTime(undefined)).toBe('00:00')
  })
})
