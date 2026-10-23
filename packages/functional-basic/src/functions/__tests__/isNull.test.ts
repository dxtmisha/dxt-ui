import { describe, it, expect } from 'vitest'
import { isNull } from '../isNull'

describe('isNull', () => {
  describe('Standard functional requirements (Nullish values)', () => {
    it('should return true for null', () => {
      expect(isNull(null)).toBe(true)
    })

    it('should return true for undefined and void 0', () => {
      expect(isNull(undefined)).toBe(true)
      expect(isNull(void 0)).toBe(true)
    })
  })

  describe('Falsy non-nullish primitive values', () => {
    it('should return false for numeric zero variations and NaN', () => {
      expect(isNull(0)).toBe(false)
      expect(isNull(-0)).toBe(false)
      expect(isNull(0n)).toBe(false)
      expect(isNull(Number.NaN)).toBe(false)
    })

    it('should return false for boolean false', () => {
      expect(isNull(false)).toBe(false)
    })

    it('should return false for empty and whitespace-only strings', () => {
      expect(isNull('')).toBe(false)
      expect(isNull('   ')).toBe(false)
      expect(isNull('\t\n')).toBe(false)
    })
  })

  describe('Serialized nullish strings and non-nullish primitives', () => {
    it('should return false for string literals "null" and "undefined"', () => {
      expect(isNull('null')).toBe(false)
      expect(isNull('undefined')).toBe(false)
    })

    it('should return false for truthy numbers, strings, booleans, symbols, and bigints', () => {
      expect(isNull(1)).toBe(false)
      expect(isNull(-1)).toBe(false)
      expect(isNull(Number.POSITIVE_INFINITY)).toBe(false)
      expect(isNull('text')).toBe(false)
      expect(isNull(true)).toBe(false)
      expect(isNull(Symbol('null'))).toBe(false)
      expect(isNull(42n)).toBe(false)
    })
  })

  describe('Objects, arrays, and functions', () => {
    it('should return false for empty and populated objects, including Object.create(null)', () => {
      expect(isNull({})).toBe(false)
      expect(isNull({ key: null })).toBe(false)
      expect(isNull(Object.create(null))).toBe(false)
    })

    it('should return false for arrays, functions, and built-in object instances', () => {
      expect(isNull([])).toBe(false)
      expect(isNull([null, undefined])).toBe(false)
      expect(isNull(() => null)).toBe(false)
      expect(isNull(new Date())).toBe(false)
      expect(isNull(/regex/)).toBe(false)
      expect(isNull(new Map())).toBe(false)
      expect(isNull(new Set())).toBe(false)
    })
  })
})
