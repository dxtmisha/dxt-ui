import { describe, expect, it } from 'vitest'
import { isFilled } from '../isFilled'

describe('isFilled', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for valid non-empty strings', () => {
      expect(isFilled('hello')).toBe(true)
      expect(isFilled(' 123 ')).toBe(true)
      expect(isFilled('valid text')).toBe(true)
      expect(isFilled('true')).toBe(true)
    })

    it('should return true for positive and negative numbers', () => {
      expect(isFilled(1)).toBe(true)
      expect(isFilled(-1)).toBe(true)
      expect(isFilled(42.5)).toBe(true)
      expect(isFilled(Infinity)).toBe(true)
      expect(isFilled(-Infinity)).toBe(true)
    })

    it('should return true for boolean true', () => {
      expect(isFilled(true)).toBe(true)
    })

    it('should return true for populated arrays', () => {
      expect(isFilled([1, 2, 3])).toBe(true)
      expect(isFilled(['item'])).toBe(true)
      expect(isFilled([''])).toBe(true)
      expect(isFilled([null])).toBe(true)
    })

    it('should return true for populated objects with at least one non-null property', () => {
      expect(isFilled({ a: 1 })).toBe(true)
      expect(isFilled({ name: 'Alice', age: 30 })).toBe(true)
      expect(isFilled({ a: null, b: 2 })).toBe(true)
    })

    it('should return true for functions and symbols', () => {
      expect(isFilled(() => {})).toBe(true)
      expect(isFilled(function testFunction() {})).toBe(true)
      expect(isFilled(Symbol('test'))).toBe(true)
      expect(isFilled(Symbol())).toBe(true)
    })

    it('should return true for RegExp instances', () => {
      expect(isFilled(/abc/)).toBe(true)
      expect(isFilled(new RegExp('test'))).toBe(true)
      expect(isFilled(/(?:)/)).toBe(true)
    })

    it('should return true for populated Map and Set instances', () => {
      expect(isFilled(new Map([['key', 'value']]))).toBe(true)
      expect(isFilled(new Set([1, 2, 3]))).toBe(true)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return false for null and undefined', () => {
      expect(isFilled(null)).toBe(false)
      expect(isFilled(undefined)).toBe(false)
    })

    it('should return false for boolean false', () => {
      expect(isFilled(false)).toBe(false)
    })

    it('should return false for NaN', () => {
      expect(isFilled(NaN)).toBe(false)
    })

    it('should return false for empty strings', () => {
      expect(isFilled('')).toBe(false)
    })

    it('should return false for whitespace-only strings', () => {
      expect(isFilled('   ')).toBe(false)
      expect(isFilled('\t\n\r')).toBe(false)
      expect(isFilled('  \t  \n  ')).toBe(false)
    })

    it('should return false for serialized empty string tokens', () => {
      expect(isFilled('undefined')).toBe(false)
      expect(isFilled('null')).toBe(false)
      expect(isFilled('false')).toBe(false)
      expect(isFilled('[]')).toBe(false)
      expect(isFilled(' undefined ')).toBe(false)
      expect(isFilled(' null ')).toBe(false)
      expect(isFilled(' false ')).toBe(false)
      expect(isFilled(' [] ')).toBe(false)
    })

    it('should return false for empty arrays', () => {
      expect(isFilled([])).toBe(false)
    })

    it('should return false for empty plain objects', () => {
      expect(isFilled({})).toBe(false)
    })

    it('should return false for objects where all property values are null or undefined', () => {
      expect(isFilled({ a: null })).toBe(false)
      expect(isFilled({ a: undefined })).toBe(false)
      expect(isFilled({ a: null, b: undefined, c: null })).toBe(false)
    })

    it('should return false for empty Map and Set instances', () => {
      expect(isFilled(new Map())).toBe(false)
      expect(isFilled(new Set())).toBe(false)
    })
  })

  describe('Zero and string zero handling (zeroTrue parameter)', () => {
    it('should treat "0" as empty by default when zeroTrue is omitted or false', () => {
      expect(isFilled('0')).toBe(false)
      expect(isFilled('0', false)).toBe(false)
    })

    it('should treat "0" as filled when zeroTrue is true', () => {
      expect(isFilled('0', true)).toBe(true)
      expect(isFilled(' 0 ', true)).toBe(false)
    })

    it('should treat numeric 0 as empty regardless of zeroTrue', () => {
      expect(isFilled(0)).toBe(false)
      expect(isFilled(-0)).toBe(false)
      expect(isFilled(0, true)).toBe(false)
    })
  })

  describe('Object structure and prototype isolation', () => {
    it('should ignore inherited prototype properties and treat object as empty if no own properties exist', () => {
      const prototypeObject = { inheritedProperty: 100 }
      const instanceObject = Object.create(prototypeObject)

      expect(isFilled(instanceObject)).toBe(false)
    })

    it('should return true for null-prototype objects with own non-null properties', () => {
      const nullPrototypeObject = Object.create(null)
      nullPrototypeObject.ownKey = 'validValue'

      expect(isFilled(nullPrototypeObject)).toBe(true)
    })

    it('should return false for null-prototype objects without own properties', () => {
      const emptyNullPrototypeObject = Object.create(null)
      expect(isFilled(emptyNullPrototypeObject)).toBe(false)
    })

    it('should return true for objects containing falsy non-null values (0, false, empty string)', () => {
      expect(isFilled({ count: 0 })).toBe(true)
      expect(isFilled({ active: false })).toBe(true)
      expect(isFilled({ text: '' })).toBe(true)
    })
  })

  describe('Multilingual and Unicode strings', () => {
    it('should return true for Cyrillic strings', () => {
      expect(isFilled('Привет мир')).toBe(true)
      expect(isFilled('тест')).toBe(true)
    })

    it('should return true for Vietnamese diacritics', () => {
      expect(isFilled('tiếng việt')).toBe(true)
      expect(isFilled('Học tiếng Việt')).toBe(true)
    })

    it('should return true for CJK and Emoji characters', () => {
      expect(isFilled('こんにちは')).toBe(true)
      expect(isFilled('你好')).toBe(true)
      expect(isFilled('🚀')).toBe(true)
      expect(isFilled('✨ 🔥')).toBe(true)
    })
  })

  describe('Type coercion and BigInt', () => {
    it('should return true for non-zero BigInt and false for 0n', () => {
      expect(isFilled(100n)).toBe(true)
      expect(isFilled(-50n)).toBe(true)
      expect(isFilled(0n)).toBe(false)
    })
  })
})
