import { describe, expect, expectTypeOf, it } from 'vitest'
import { toOffset } from '../toOffset'

describe('toOffset', () => {
  describe('Standard functional requirements', () => {
    it('returns 0 when omitted and preserves non-negative integers', () => {
      expect(toOffset()).toBe(0)
      expect(toOffset(undefined)).toBe(0)
      expect(toOffset(0)).toBe(0)
      expect(toOffset(40)).toBe(40)
      expect(toOffset(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER)
      expectTypeOf(toOffset(10)).toEqualTypeOf<number>()
    })
  })

  describe('Boundary values, zero/negative traps, and non-finite numbers', () => {
    it('returns positive 0 for negative values, -0, NaN, and Infinity', () => {
      expect(Object.is(toOffset(-0), 0)).toBe(true)
      expect(Object.is(toOffset(-0.5), 0)).toBe(true)
      expect(toOffset(-10)).toBe(0)
      expect(toOffset(Number.NaN)).toBe(0)
      expect(toOffset(Number.POSITIVE_INFINITY)).toBe(0)
      expect(toOffset(Number.NEGATIVE_INFINITY)).toBe(0)
    })

    it('truncates positive floating-point offsets toward zero', () => {
      expect(toOffset(0.9)).toBe(0)
      expect(toOffset(12.9)).toBe(12)
    })
  })
})
