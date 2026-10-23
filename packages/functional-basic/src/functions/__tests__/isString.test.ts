import { describe, it, expect } from 'vitest'
import { isString } from '../isString'

describe('isString', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for standard string literals and template literals', () => {
      expect(isString('hello')).toBe(true)
      expect(isString(`template ${1}`)).toBe(true)
      expect(isString(String(123))).toBe(true)
    })
  })

  describe('Empty, whitespace-only, and multilingual strings', () => {
    it('should return true for empty and whitespace-only strings', () => {
      expect(isString('')).toBe(true)
      expect(isString('   ')).toBe(true)
      expect(isString('\t\n\r')).toBe(true)
    })

    it('should return true for Cyrillic, Vietnamese, CJK, Emoji, and HTML strings', () => {
      expect(isString('Привет Мир')).toBe(true)
      expect(isString('Học tiếng Việt')).toBe(true)
      expect(isString('こんにちは世界')).toBe(true)
      expect(isString('🚀 🔥 ✨')).toBe(true)
      expect(isString('<script>alert(1)</script>')).toBe(true)
    })
  })

  describe('Nullish and falsy non-string inputs', () => {
    it('should return false for null and undefined', () => {
      expect(isString(null)).toBe(false)
      expect(isString(undefined)).toBe(false)
    })

    it('should return false for falsy numbers, booleans, and bigints', () => {
      expect(isString(0)).toBe(false)
      expect(isString(-0)).toBe(false)
      expect(isString(NaN)).toBe(false)
      expect(isString(false)).toBe(false)
      expect(isString(BigInt(0))).toBe(false)
    })
  })

  describe('Type coercion and non-string data types', () => {
    it('should return false for numbers and booleans', () => {
      expect(isString(123)).toBe(false)
      expect(isString(-42.5)).toBe(false)
      expect(isString(Infinity)).toBe(false)
      expect(isString(-Infinity)).toBe(false)
      expect(isString(true)).toBe(false)
    })

    it('should return false for objects, arrays, and boxed String instances', () => {
      expect(isString({})).toBe(false)
      expect(isString({ toString: () => 'custom' })).toBe(false)
      expect(isString([])).toBe(false)
      expect(isString(['single'])).toBe(false)
      expect(isString(new String('abc'))).toBe(false)
    })

    it('should return false for functions, symbols, RegExp, and Date instances', () => {
      expect(isString(() => 'hello')).toBe(false)
      expect(isString(Symbol('text'))).toBe(false)
      expect(isString(/regex/)).toBe(false)
      expect(isString(new Date())).toBe(false)
    })
  })
})
