import { describe, it, expect } from 'vitest'
import { isIntegerBetween } from '../isIntegerBetween'

describe('isIntegerBetween', () => {
  it('should return true if value equals the floored target', () => {
    expect(isIntegerBetween(5, 5)).toBe(true)
    expect(isIntegerBetween(5, 5.2)).toBe(true) // 5 >= 5 and 5 < 6
    expect(isIntegerBetween(5, 5.9)).toBe(true) // 5 >= 5 and 5 < 6
  })

  it('should return true if value is within the [floor, floor + 1) interval', () => {
    expect(isIntegerBetween(5.5, 5)).toBe(true) // 5.5 >= 5 and 5.5 < 6
    expect(isIntegerBetween(5.99, 5.1)).toBe(true) // 5.99 >= 5 and 5.99 < 6
  })

  it('should return false if value is outside the interval', () => {
    expect(isIntegerBetween(4.9, 5)).toBe(false)
    expect(isIntegerBetween(6, 5)).toBe(false)
  })

  it('should handle negative numbers correctly', () => {
    // floor(-5.5) -> -6. Interval: [-6, -5)
    expect(isIntegerBetween(-5.8, -5.5)).toBe(true) // -5.8 >= -6 and -5.8 < -5
    expect(isIntegerBetween(-5.1, -5.5)).toBe(true) // -5.1 >= -6 and -5.1 < -5
    expect(isIntegerBetween(-4.9, -5.5)).toBe(false)
  })
})
