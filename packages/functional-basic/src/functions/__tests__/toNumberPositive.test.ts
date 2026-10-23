import { describe, it, expect } from 'vitest'
import { toNumberPositive } from '../toNumberPositive'

describe('toNumberPositive', () => {
  describe('Numeric primitives', () => {
    it('should return the original number for positive finite numbers', () => {
      expect(toNumberPositive(10)).toBe(10)
      expect(toNumberPositive(1)).toBe(1)
      expect(toNumberPositive(0.001)).toBe(0.001)
      expect(toNumberPositive(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
      expect(toNumberPositive(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER)
    })

    it('should return 0 by default for zero and negative numbers', () => {
      expect(toNumberPositive(0)).toBe(0)
      expect(toNumberPositive(-0)).toBe(0)
      expect(toNumberPositive(-5)).toBe(0)
      expect(toNumberPositive(-123.45)).toBe(0)
    })

    it('should return 0 by default for non-finite numbers (Infinity, -Infinity, NaN)', () => {
      expect(toNumberPositive(Infinity)).toBe(0)
      expect(toNumberPositive(-Infinity)).toBe(0)
      expect(toNumberPositive(NaN)).toBe(0)
    })
  })

  describe('String inputs', () => {
    it('should convert valid positive numeric strings into numbers', () => {
      expect(toNumberPositive('15')).toBe(15)
      expect(toNumberPositive('1')).toBe(1)
      expect(toNumberPositive('0.5')).toBe(0.5)
      expect(toNumberPositive('0,5')).toBe(0.5)
      expect(toNumberPositive('+42')).toBe(42)
    })

    it('should return 0 by default for string zero and negative numeric strings', () => {
      expect(toNumberPositive('0')).toBe(0)
      expect(toNumberPositive('-0')).toBe(0)
      expect(toNumberPositive('-10')).toBe(0)
      expect(toNumberPositive('-0,5')).toBe(0)
    })

    it('should parse positive strings containing thousands separators and unit suffixes', () => {
      expect(toNumberPositive('1 000')).toBe(1000)
      expect(toNumberPositive('1,234.56')).toBe(1234.56)
      expect(toNumberPositive('100px')).toBe(100)
    })
  })

  describe('Empty, nullish, and invalid inputs', () => {
    it('should return 0 by default when called with no arguments, undefined, null, or empty strings', () => {
      expect(toNumberPositive()).toBe(0)
      expect(toNumberPositive(undefined)).toBe(0)
      expect(toNumberPositive(null)).toBe(0)
      expect(toNumberPositive('')).toBe(0)
      expect(toNumberPositive('   ')).toBe(0)
      expect(toNumberPositive('\t\n')).toBe(0)
      expect(toNumberPositive('invalid')).toBe(0)
    })

    it('should safely return default value for non-numeric runtime types', () => {
      // @ts-expect-error testing boolean runtime safety
      expect(toNumberPositive(true)).toBe(0)
      // @ts-expect-error testing boolean runtime safety
      expect(toNumberPositive(false)).toBe(0)
    })
  })

  describe('Custom defaultValue fallback', () => {
    it('should return custom defaultValue when input is nullish, invalid, zero, or negative', () => {
      expect(toNumberPositive(undefined, 1)).toBe(1)
      expect(toNumberPositive(null, 3)).toBe(3)
      expect(toNumberPositive('', 5)).toBe(5)
      expect(toNumberPositive(0, 10)).toBe(10)
      expect(toNumberPositive(-5, 2)).toBe(2)
      expect(toNumberPositive('invalid', 42)).toBe(42)
      expect(toNumberPositive(-1, -99)).toBe(-99)
      expect(toNumberPositive(0, 0.25)).toBe(0.25)
    })

    it('should ignore defaultValue when the parsed input is strictly positive', () => {
      expect(toNumberPositive(10, 50)).toBe(10)
      expect(toNumberPositive('20', 50)).toBe(20)
      expect(toNumberPositive(0.01, 100)).toBe(0.01)
    })
  })
})
