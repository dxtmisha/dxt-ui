import { describe, it, expect } from 'vitest'
import { isIntegerBetween } from '../isIntegerBetween'

describe('isIntegerBetween', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true when value equals the floored target', () => {
      expect(isIntegerBetween(5, 5)).toBe(true)
      expect(isIntegerBetween(5, 5.2)).toBe(true)
      expect(isIntegerBetween(5, 5.999)).toBe(true)
    })

    it('should return true when value falls strictly within the [floor(between), floor(between) + 1) interval', () => {
      expect(isIntegerBetween(5.5, 5)).toBe(true)
      expect(isIntegerBetween(5.99, 5.1)).toBe(true)
      expect(isIntegerBetween(10.25, 10.75)).toBe(true)
    })

    it('should return false when value is outside the interval', () => {
      expect(isIntegerBetween(4.9, 5)).toBe(false)
      expect(isIntegerBetween(6.1, 5)).toBe(false)
      expect(isIntegerBetween(10, 5)).toBe(false)
    })
  })

  describe('Boundary values and half-open interval [floor, floor + 1) thresholds', () => {
    it('should include the exact lower boundary (value === Math.floor(between))', () => {
      expect(isIntegerBetween(3, 3.8)).toBe(true)
      expect(isIntegerBetween(0, 0.99)).toBe(true)
    })

    it('should exclude the exact upper boundary (value === Math.floor(between) + 1)', () => {
      expect(isIntegerBetween(6, 5)).toBe(false)
      expect(isIntegerBetween(6, 5.999999)).toBe(false)
      expect(isIntegerBetween(1, 0)).toBe(false)
    })

    it('should handle floating-point precision boundaries near floor and floor + 1', () => {
      expect(isIntegerBetween(5 - 1e-12, 5.5)).toBe(false)
      expect(isIntegerBetween(6 - 1e-12, 5.5)).toBe(true)
    })
  })

  describe('Zero and negative number handling', () => {
    it('should handle 0 and -0 correctly', () => {
      expect(isIntegerBetween(0, 0)).toBe(true)
      expect(isIntegerBetween(-0, 0)).toBe(true)
      expect(isIntegerBetween(0, -0)).toBe(true)
      expect(isIntegerBetween(0.5, 0)).toBe(true)
      expect(isIntegerBetween(-0.001, 0)).toBe(false)
    })

    it('should handle negative integer targets (interval [between, between + 1))', () => {
      // Math.floor(-5) === -5 -> interval [-5, -4)
      expect(isIntegerBetween(-5, -5)).toBe(true)
      expect(isIntegerBetween(-4.5, -5)).toBe(true)
      expect(isIntegerBetween(-4, -5)).toBe(false)
      expect(isIntegerBetween(-5.1, -5)).toBe(false)
    })

    it('should handle negative fractional targets where Math.floor rounds toward -Infinity', () => {
      // Math.floor(-5.5) === -6 -> interval [-6, -5)
      expect(isIntegerBetween(-6, -5.5)).toBe(true)
      expect(isIntegerBetween(-5.8, -5.5)).toBe(true)
      expect(isIntegerBetween(-5.1, -5.5)).toBe(true)
      expect(isIntegerBetween(-5, -5.5)).toBe(false)
      expect(isIntegerBetween(-6.01, -5.5)).toBe(false)
    })
  })

  describe('Special numeric values (NaN and Infinity)', () => {
    it('should return false when value or between is NaN', () => {
      expect(isIntegerBetween(Number.NaN, 5)).toBe(false)
      expect(isIntegerBetween(5, Number.NaN)).toBe(false)
      expect(isIntegerBetween(Number.NaN, Number.NaN)).toBe(false)
    })

    it('should return false when value or between is Infinity or -Infinity', () => {
      expect(isIntegerBetween(Number.POSITIVE_INFINITY, 5)).toBe(false)
      expect(isIntegerBetween(Number.NEGATIVE_INFINITY, 5)).toBe(false)
      expect(isIntegerBetween(5, Number.POSITIVE_INFINITY)).toBe(false)
      expect(isIntegerBetween(5, Number.NEGATIVE_INFINITY)).toBe(false)
    })
  })
})
