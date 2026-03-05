import { describe, it, expect } from 'vitest'
import { getStepValue } from '../getStepValue'

describe('getStepValue', () => {
  it('should calculate the absolute value for 1% step within the given range', () => {
    // Range is 0 to 100. 1% is 1.
    expect(getStepValue(0, 100)).toBe(1)
  })

  it('should handle ranges with larger scopes', () => {
    // Range is 0 to 1000. 1% is 10.
    expect(getStepValue(0, 1000)).toBe(10)
  })

  it('should handle ranges not starting at 0', () => {
    // Range is 50 to 250 (difference 200). 1% of 200 is 2.
    expect(getStepValue(50, 250)).toBe(2)
  })

  it('should handle decimal results', () => {
    // Range is 0 to 10. 1% of 10 is 0.1
    expect(getStepValue(0, 10)).toBeCloseTo(0.1)
  })

  it('should fallback to min = 0 if min is undefined', () => {
    // Range is 0 to 500. 1% is 5.
    expect(getStepValue(undefined, 500)).toBe(5)
  })

  it('should return 0 if max is less than or equal to min', () => {
    expect(getStepValue(10, 5)).toBe(0)
    expect(getStepValue(10, 10)).toBe(0)
  })

  it('should return 0 if min is undefined and max <= 0', () => {
    expect(getStepValue(undefined, 0)).toBe(0)
    expect(getStepValue(undefined, -100)).toBe(0)
  })
})
