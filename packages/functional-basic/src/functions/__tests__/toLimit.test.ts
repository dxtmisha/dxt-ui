import { describe, expect, expectTypeOf, it } from 'vitest'
import { toLimit } from '../toLimit'

describe('toLimit', () => {
  describe('Standard functional requirements', () => {
    it('returns default limit when omitted and preserves valid integers within bounds', () => {
      expect(toLimit()).toBe(20)
      expect(toLimit(undefined)).toBe(20)
      expect(toLimit(1)).toBe(1)
      expect(toLimit(25)).toBe(25)
      expect(toLimit(200)).toBe(200)
      expectTypeOf(toLimit(10)).toEqualTypeOf<number>()
    })

    it('supports custom defaultLimit and maxLimit bounds', () => {
      expect(toLimit(undefined, 15)).toBe(15)
      expect(toLimit(undefined, 10, 50)).toBe(10)
      expect(toLimit(35, 10, 50)).toBe(35)
      expect(toLimit(500, 10, 50)).toBe(50)
    })
  })

  describe('Boundary values, non-finite numbers, and truncation', () => {
    it('returns defaultLimit for NaN, Infinity, and -Infinity', () => {
      expect(toLimit(Number.NaN)).toBe(20)
      expect(toLimit(Number.POSITIVE_INFINITY)).toBe(20)
      expect(toLimit(Number.NEGATIVE_INFINITY)).toBe(20)
      expect(toLimit(Number.NaN, 15)).toBe(15)
    })

    it('truncates decimals toward zero and clamps values below 1 or above maxLimit', () => {
      expect(toLimit(0)).toBe(1)
      expect(toLimit(-0)).toBe(1)
      expect(toLimit(0.9)).toBe(1)
      expect(toLimit(-10)).toBe(1)
      expect(toLimit(15.9)).toBe(15)
      expect(toLimit(200.9)).toBe(200)
      expect(toLimit(201)).toBe(200)
      expect(toLimit(Number.MAX_SAFE_INTEGER)).toBe(200)
    })
    it('clamps invalid or out-of-range defaultLimit and maxLimit bounds safely', () => {
      expect(toLimit(10, 20, 0)).toBe(1)
      expect(toLimit(10, 20, -5)).toBe(1)
      expect(toLimit(undefined, 0, 50)).toBe(1)
      expect(toLimit(undefined, -10, 50)).toBe(1)
      expect(toLimit(undefined, 500, 100)).toBe(100)
      expect(toLimit(undefined, Number.NaN, 10)).toBe(10)
      expect(toLimit(500, 10, 50.9)).toBe(50)
      expect(toLimit(15, 10, Number.NaN)).toBe(15)
    })
  })
})
