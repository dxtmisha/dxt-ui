import { describe, it, expect } from 'vitest'
import { toPercent } from '../toPercent'

describe('toPercent', () => {
  describe('Standard percentage calculations (0 to 1 range)', () => {
    it('should convert standard values within maxValue to ratios between 0 and 1', () => {
      expect(toPercent(100, 50)).toBe(0.5)
      expect(toPercent(200, 20)).toBe(0.1)
      expect(toPercent(4, 1)).toBe(0.25)
      expect(toPercent(8, 6)).toBe(0.75)
    })

    it('should return 1 when value equals maxValue', () => {
      expect(toPercent(10, 10)).toBe(1)
      expect(toPercent(100, 100)).toBe(1)
      expect(toPercent(0.5, 0.5)).toBe(1)
    })
  })

  describe('Boundary values and division-by-zero protection', () => {
    it('should return 0 when value is 0 and maxValue is non-zero', () => {
      expect(toPercent(100, 0)).toBe(0)
      expect(toPercent(1, 0)).toBe(0)
    })

    it('should return value directly when maxValue is 0 (or -0) to prevent division by zero', () => {
      expect(toPercent(0, 50)).toBe(50)
      expect(toPercent(0, 0)).toBe(0)
      expect(toPercent(0, -15)).toBe(-15)
      expect(toPercent(-0, 25)).toBe(25)
    })

    it('should return ratios greater than 1 when value exceeds maxValue', () => {
      expect(toPercent(100, 150)).toBe(1.5)
      expect(toPercent(50, 200)).toBe(4)
    })
  })

  describe('Negative and floating-point values', () => {
    it('should handle negative values and negative maxValues', () => {
      expect(toPercent(100, -25)).toBe(-0.25)
      expect(toPercent(-100, 25)).toBe(-0.25)
      expect(toPercent(-100, -50)).toBe(0.5)
    })

    it('should accurately calculate floating-point ratios', () => {
      expect(toPercent(2.5, 1.25)).toBeCloseTo(0.5, 10)
      expect(toPercent(3, 1)).toBeCloseTo(0.3333333333, 8)
    })
  })
})
