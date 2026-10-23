import { describe, it, expect } from 'vitest'
import { toPercentBy100 } from '../toPercentBy100'

describe('toPercentBy100', () => {
  describe('Standard percentage calculations (0 to 100 range)', () => {
    it('should convert standard values within maxValue to percentages between 0 and 100', () => {
      expect(toPercentBy100(100, 50)).toBe(50)
      expect(toPercentBy100(200, 20)).toBe(10)
      expect(toPercentBy100(4, 1)).toBe(25)
      expect(toPercentBy100(8, 6)).toBe(75)
    })

    it('should return 100 when value equals maxValue', () => {
      expect(toPercentBy100(10, 10)).toBe(100)
      expect(toPercentBy100(100, 100)).toBe(100)
      expect(toPercentBy100(0.5, 0.5)).toBe(100)
    })
  })

  describe('Boundary values and division-by-zero protection', () => {
    it('should return 0 when value is 0 and maxValue is non-zero', () => {
      expect(toPercentBy100(100, 0)).toBe(0)
      expect(toPercentBy100(1, 0)).toBe(0)
    })

    it('should return value * 100 when maxValue is 0 (or -0)', () => {
      expect(toPercentBy100(0, 5)).toBe(500)
      expect(toPercentBy100(0, 0)).toBe(0)
      expect(toPercentBy100(0, -2)).toBe(-200)
      expect(toPercentBy100(-0, 0.5)).toBe(50)
    })

    it('should return percentages greater than 100 when value exceeds maxValue', () => {
      expect(toPercentBy100(100, 150)).toBe(150)
      expect(toPercentBy100(50, 200)).toBe(400)
    })
  })

  describe('Negative and floating-point values', () => {
    it('should handle negative values and negative maxValues', () => {
      expect(toPercentBy100(100, -25)).toBe(-25)
      expect(toPercentBy100(-100, 25)).toBe(-25)
      expect(toPercentBy100(-100, -50)).toBe(50)
    })

    it('should accurately calculate floating-point percentages', () => {
      expect(toPercentBy100(2.5, 1.25)).toBeCloseTo(50, 10)
      expect(toPercentBy100(3, 1)).toBeCloseTo(33.3333333333, 8)
    })
  })
})
