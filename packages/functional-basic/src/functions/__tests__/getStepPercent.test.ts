import { describe, it, expect } from 'vitest'
import { getStepPercent } from '../getStepPercent'

describe('getStepPercent', () => {
  it('should calculate the percentage for a single step within the given range', () => {
    // Range is 0 to 100, so 1 step is 1%
    expect(getStepPercent(0, 100)).toBe(1)
  })

  it('should handle ranges not starting at 0', () => {
    // Range is 50 to 150 (difference 100). Step is 100 / 100 = 1
    expect(getStepPercent(50, 150)).toBe(1)
  })

  it('should handle small ranges correctly', () => {
    // Range is 0 to 10. Difference is 10. Step is 100 / 10 = 10
    expect(getStepPercent(0, 10)).toBe(10)
  })

  it('should fallback to min = 0 if min is undefined', () => {
    expect(getStepPercent(undefined, 20)).toBe(5) // 100 / 20 = 5
  })

  it('should return 0 if max is less than or equal to min', () => {
    expect(getStepPercent(10, 5)).toBe(0)
    expect(getStepPercent(10, 10)).toBe(0)
  })

  it('should return 0 if min is undefined and max <= 0', () => {
    expect(getStepPercent(undefined, 0)).toBe(0)
    expect(getStepPercent(undefined, -5)).toBe(0)
  })
})
