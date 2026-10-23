import { describe, expect, it } from 'vitest'
import { getStepPercent } from '../getStepPercent'

describe('getStepPercent', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should calculate the percentage for a single step within a 0 to 100 range', () => {
      expect(getStepPercent(0, 100)).toBe(1)
    })

    it('should handle positive ranges not starting at 0', () => {
      expect(getStepPercent(50, 150)).toBe(1)
      expect(getStepPercent(20, 70)).toBe(2)
    })

    it('should handle small and large ranges accurately', () => {
      expect(getStepPercent(0, 10)).toBe(10)
      expect(getStepPercent(0, 1)).toBe(100)
      expect(getStepPercent(0, 1000)).toBe(0.1)
    })
  })

  describe('Boundary values, negative ranges, and decimals', () => {
    it('should return 0 when max is equal to min', () => {
      expect(getStepPercent(0, 0)).toBe(0)
      expect(getStepPercent(10, 10)).toBe(0)
      expect(getStepPercent(-10, -10)).toBe(0)
    })

    it('should return 0 when max is less than min', () => {
      expect(getStepPercent(10, 5)).toBe(0)
      expect(getStepPercent(0, -10)).toBe(0)
      expect(getStepPercent(-5, -20)).toBe(0)
    })

    it('should calculate step percentage across negative-to-positive ranges', () => {
      expect(getStepPercent(-50, 50)).toBe(1)
      expect(getStepPercent(-25, 25)).toBe(2)
    })

    it('should calculate step percentage across purely negative ranges when max > min', () => {
      expect(getStepPercent(-100, -50)).toBe(2)
      expect(getStepPercent(-200, -100)).toBe(1)
    })

    it('should handle fractional and decimal ranges', () => {
      expect(getStepPercent(0, 0.5)).toBe(200)
      expect(getStepPercent(1.5, 4.0)).toBe(40)
    })
  })

  describe('Default and nullish min handling', () => {
    it('should fallback to min = 0 when min is undefined', () => {
      expect(getStepPercent(undefined, 20)).toBe(5)
      expect(getStepPercent(undefined, 100)).toBe(1)
    })

    it('should return 0 when min is undefined and max is less than or equal to 0', () => {
      expect(getStepPercent(undefined, 0)).toBe(0)
      expect(getStepPercent(undefined, -5)).toBe(0)
    })

    it('should fallback to min = 0 when min is null at runtime', () => {
      expect(getStepPercent(null as unknown as undefined, 25)).toBe(4)
    })
  })

  describe('Special numeric values', () => {
    it('should return 0 when either min or max is NaN', () => {
      expect(getStepPercent(NaN, 100)).toBe(0)
      expect(getStepPercent(0, NaN)).toBe(0)
      expect(getStepPercent(NaN, NaN)).toBe(0)
    })

    it('should handle Infinity boundaries', () => {
      expect(getStepPercent(0, Infinity)).toBe(0)
      expect(getStepPercent(0, -Infinity)).toBe(0)
      expect(getStepPercent(Infinity, 100)).toBe(0)
    })
  })
})
