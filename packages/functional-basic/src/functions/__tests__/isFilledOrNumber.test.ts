import { describe, expect, it } from 'vitest'
import { isFilledOrNumber } from '../isFilledOrNumber'

describe('isFilledOrNumber', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for non-empty strings', () => {
      expect(isFilledOrNumber('hello')).toBe(true)
      expect(isFilledOrNumber('valid text')).toBe(true)
      expect(isFilledOrNumber('true')).toBe(true)
    })

    it('should return true for numbers including 0 and -0', () => {
      expect(isFilledOrNumber(0)).toBe(true)
      expect(isFilledOrNumber(-0)).toBe(true)
      expect(isFilledOrNumber(1)).toBe(true)
      expect(isFilledOrNumber(-42.5)).toBe(true)
    })

    it('should return true for numeric strings including "0"', () => {
      expect(isFilledOrNumber('0')).toBe(true)
      expect(isFilledOrNumber(' 0 ')).toBe(true)
      expect(isFilledOrNumber('-0')).toBe(true)
      expect(isFilledOrNumber('0.0')).toBe(true)
      expect(isFilledOrNumber('123')).toBe(true)
      expect(isFilledOrNumber('-3.14')).toBe(true)
    })

    it('should return true for BigInt including 0n', () => {
      expect(isFilledOrNumber(0n)).toBe(true)
      expect(isFilledOrNumber(100n)).toBe(true)
    })

    it('should return true for boolean true, populated objects, and arrays', () => {
      expect(isFilledOrNumber(true)).toBe(true)
      expect(isFilledOrNumber([1, 2])).toBe(true)
      expect(isFilledOrNumber({ a: 1 })).toBe(true)
    })
  })

  describe('Empty, nullish, and falsy inputs', () => {
    it('should return false for null, undefined, and false', () => {
      expect(isFilledOrNumber()).toBe(false)
      expect(isFilledOrNumber(null)).toBe(false)
      expect(isFilledOrNumber(undefined)).toBe(false)
      expect(isFilledOrNumber(false)).toBe(false)
    })

    it('should return false for NaN', () => {
      expect(isFilledOrNumber(NaN)).toBe(false)
    })

    it('should return false for empty and whitespace-only strings', () => {
      expect(isFilledOrNumber('')).toBe(false)
      expect(isFilledOrNumber('   ')).toBe(false)
      expect(isFilledOrNumber('\t\n')).toBe(false)
    })

    it('should return false for serialized empty string tokens except "0"', () => {
      expect(isFilledOrNumber('undefined')).toBe(false)
      expect(isFilledOrNumber('null')).toBe(false)
      expect(isFilledOrNumber('false')).toBe(false)
      expect(isFilledOrNumber('[]')).toBe(false)
    })

    it('should return false for empty arrays and empty objects', () => {
      expect(isFilledOrNumber([])).toBe(false)
      expect(isFilledOrNumber({})).toBe(false)
      expect(isFilledOrNumber({ a: null, b: undefined })).toBe(false)
    })
  })

  describe('Multilingual and Unicode strings', () => {
    it('should return true for Cyrillic, Vietnamese, and Emoji strings', () => {
      expect(isFilledOrNumber('Привет')).toBe(true)
      expect(isFilledOrNumber('tiếng việt')).toBe(true)
      expect(isFilledOrNumber('🚀')).toBe(true)
    })
  })
})
