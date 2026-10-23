import { describe, expect, it } from 'vitest'
import { getStepPercent } from '../getStepPercent'
import { getStepValue } from '../getStepValue'

describe('getStepValue', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should calculate the absolute value for a 1% step within a 0 to 100 range', () => {
      expect(getStepValue(0, 100)).toBe(1)
    })

    it('should handle ranges with larger scopes', () => {
      expect(getStepValue(0, 1000)).toBe(10)
      expect(getStepValue(0, 250)).toBe(2.5)
    })

    it('should handle positive ranges not starting at 0', () => {
      expect(getStepValue(50, 250)).toBe(2)
      expect(getStepValue(100, 150)).toBe(0.5)
    })

    it('should handle decimal results accurately', () => {
      expect(getStepValue(0, 10)).toBeCloseTo(0.1)
      expect(getStepValue(0, 1)).toBeCloseTo(0.01)
    })
  })

  describe('Boundary values, negative ranges, and decimals', () => {
    it('should return 0 when max is equal to min', () => {
      expect(getStepValue(0, 0)).toBe(0)
      expect(getStepValue(10, 10)).toBe(0)
      expect(getStepValue(-10, -10)).toBe(0)
    })

    it('should return 0 when max is less than min', () => {
      expect(getStepValue(10, 5)).toBe(0)
      expect(getStepValue(0, -10)).toBe(0)
      expect(getStepValue(-5, -20)).toBe(0)
    })

    it('should calculate step value across negative-to-positive ranges', () => {
      expect(getStepValue(-50, 50)).toBe(1)
      expect(getStepValue(-100, 300)).toBe(4)
    })

    it('should calculate step value across purely negative ranges when max > min', () => {
      expect(getStepValue(-200, -100)).toBe(1)
      expect(getStepValue(-50, -25)).toBe(0.25)
    })

    it('should handle fractional min and max boundaries', () => {
      expect(getStepValue(0.5, 10.5)).toBeCloseTo(0.1)
    })
  })

  describe('Default and nullish min handling', () => {
    it('should fallback to min = 0 when min is undefined', () => {
      expect(getStepValue(undefined, 500)).toBe(5)
      expect(getStepValue(undefined, 100)).toBe(1)
    })

    it('should return 0 when min is undefined and max is less than or equal to 0', () => {
      expect(getStepValue(undefined, 0)).toBe(0)
      expect(getStepValue(undefined, -100)).toBe(0)
    })

    it('should fallback to min = 0 when min is null at runtime', () => {
      expect(getStepValue(null as unknown as undefined, 300)).toBe(3)
    })
  })

  describe('Special numeric values and reciprocity', () => {
    it('should return 0 when either min or max is NaN', () => {
      expect(getStepValue(NaN, 100)).toBe(0)
      expect(getStepValue(0, NaN)).toBe(0)
      expect(getStepValue(NaN, NaN)).toBe(0)
    })

    it('should handle Infinity boundaries', () => {
      expect(getStepValue(0, Infinity)).toBe(Infinity)
      expect(getStepValue(0, -Infinity)).toBe(0)
      expect(getStepValue(Infinity, 100)).toBe(0)
    })

    it('should be the mathematical reciprocal of getStepPercent for valid ranges', () => {
      const ranges: Array<[number, number]> = [
        [0, 100],
        [25, 175],
        [-50, 150],
        [-100, -20]
      ]

      ranges.forEach(([min, max]) => {
        expect(getStepPercent(min, max) * getStepValue(min, max)).toBeCloseTo(1)
      })
    })
  })
})
