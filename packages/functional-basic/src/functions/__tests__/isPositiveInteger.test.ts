import { describe, expect, expectTypeOf, it } from 'vitest'
import { isPositiveInteger } from '../isPositiveInteger'

describe('isPositiveInteger', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for positive safe integers', () => {
      expect(isPositiveInteger(1)).toBe(true)
      expect(isPositiveInteger(42)).toBe(true)
      expect(isPositiveInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
    })

    it('should narrow unknown value to number when true', () => {
      const candidate: unknown = 10
      if (isPositiveInteger(candidate)) {
        expectTypeOf(candidate).toEqualTypeOf<number>()
      }
    })
  })

  describe('Boundary values and invalid numbers', () => {
    it('should return false for 0, negative integers, and floats', () => {
      expect(isPositiveInteger(0)).toBe(false)
      expect(isPositiveInteger(-0)).toBe(false)
      expect(isPositiveInteger(-1)).toBe(false)
      expect(isPositiveInteger(-100)).toBe(false)
      expect(isPositiveInteger(1.5)).toBe(false)
      expect(isPositiveInteger(0.1)).toBe(false)
    })

    it('should return false for NaN, Infinity, and unsafe integers', () => {
      expect(isPositiveInteger(NaN)).toBe(false)
      expect(isPositiveInteger(Infinity)).toBe(false)
      expect(isPositiveInteger(-Infinity)).toBe(false)
      expect(isPositiveInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
    })
  })

  describe('Non-number values', () => {
    it('should return false for strings, booleans, nullish values, bigint, objects, and arrays', () => {
      expect(isPositiveInteger('1')).toBe(false)
      expect(isPositiveInteger('')).toBe(false)
      expect(isPositiveInteger(true)).toBe(false)
      expect(isPositiveInteger(false)).toBe(false)
      expect(isPositiveInteger(null)).toBe(false)
      expect(isPositiveInteger(undefined)).toBe(false)
      expect(isPositiveInteger()).toBe(false)
      expect(isPositiveInteger(1n)).toBe(false)
      expect(isPositiveInteger({})).toBe(false)
      expect(isPositiveInteger([1])).toBe(false)
    })
  })
})
