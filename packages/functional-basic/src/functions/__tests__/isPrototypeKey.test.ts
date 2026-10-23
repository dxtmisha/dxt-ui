import { describe, it, expect } from 'vitest'
import { isPrototypeKey } from '../isPrototypeKey'

describe('isPrototypeKey', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for __proto__', () => {
      expect(isPrototypeKey('__proto__')).toBe(true)
    })

    it('should return true for constructor', () => {
      expect(isPrototypeKey('constructor')).toBe(true)
    })

    it('should return true for prototype', () => {
      expect(isPrototypeKey('prototype')).toBe(true)
    })

    it('should return false for standard safe property keys', () => {
      expect(isPrototypeKey('id')).toBe(false)
      expect(isPrototypeKey('title')).toBe(false)
      expect(isPrototypeKey('name')).toBe(false)
      expect(isPrototypeKey('value')).toBe(false)
      expect(isPrototypeKey('items')).toBe(false)
    })
  })

  describe('Built-in Object.prototype methods and near-miss strings', () => {
    it('should return false for other Object.prototype method names', () => {
      expect(isPrototypeKey('toString')).toBe(false)
      expect(isPrototypeKey('valueOf')).toBe(false)
      expect(isPrototypeKey('hasOwnProperty')).toBe(false)
      expect(isPrototypeKey('isPrototypeOf')).toBe(false)
      expect(isPrototypeKey('propertyIsEnumerable')).toBe(false)
      expect(isPrototypeKey('toLocaleString')).toBe(false)
      expect(isPrototypeKey('__defineGetter__')).toBe(false)
      expect(isPrototypeKey('__defineSetter__')).toBe(false)
    })

    it('should be strictly case-sensitive and return false for uppercase or mixed-case variants', () => {
      expect(isPrototypeKey('__PROTO__')).toBe(false)
      expect(isPrototypeKey('__Proto__')).toBe(false)
      expect(isPrototypeKey('Constructor')).toBe(false)
      expect(isPrototypeKey('CONSTRUCTOR')).toBe(false)
      expect(isPrototypeKey('Prototype')).toBe(false)
      expect(isPrototypeKey('PROTOTYPE')).toBe(false)
    })

    it('should return false for keys containing whitespace or partial matches', () => {
      expect(isPrototypeKey(' __proto__')).toBe(false)
      expect(isPrototypeKey('__proto__ ')).toBe(false)
      expect(isPrototypeKey(' constructor ')).toBe(false)
      expect(isPrototypeKey('prototype\n')).toBe(false)
      expect(isPrototypeKey('my__proto__')).toBe(false)
      expect(isPrototypeKey('constructorName')).toBe(false)
      expect(isPrototypeKey('prototypeChain')).toBe(false)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return false for empty and whitespace-only strings', () => {
      expect(isPrototypeKey('')).toBe(false)
      expect(isPrototypeKey('   ')).toBe(false)
      expect(isPrototypeKey('\t\n\r')).toBe(false)
    })

    it('should return false for null and undefined', () => {
      expect(isPrototypeKey(null)).toBe(false)
      expect(isPrototypeKey(undefined)).toBe(false)
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should return false for numeric values including 0, negative numbers, and NaN', () => {
      expect(isPrototypeKey(0)).toBe(false)
      expect(isPrototypeKey(-1)).toBe(false)
      expect(isPrototypeKey(123)).toBe(false)
      expect(isPrototypeKey(NaN)).toBe(false)
      expect(isPrototypeKey(Infinity)).toBe(false)
    })

    it('should return false for boolean values', () => {
      expect(isPrototypeKey(false)).toBe(false)
      expect(isPrototypeKey(true)).toBe(false)
    })

    it('should return false for Symbol keys even with matching descriptions', () => {
      expect(isPrototypeKey(Symbol('__proto__'))).toBe(false)
      expect(isPrototypeKey(Symbol('constructor'))).toBe(false)
      expect(isPrototypeKey(Symbol('prototype'))).toBe(false)
      expect(isPrototypeKey(Symbol.iterator)).toBe(false)
    })

    it('should not coerce arrays or objects with custom toString to string keys', () => {
      expect(isPrototypeKey(['__proto__'])).toBe(false)
      expect(isPrototypeKey(['constructor'])).toBe(false)
      expect(isPrototypeKey({ toString: () => '__proto__' })).toBe(false)
      expect(isPrototypeKey({ valueOf: () => 'constructor' })).toBe(false)
      expect(isPrototypeKey(new String('__proto__'))).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should return false for Cyrillic, Vietnamese, CJK, and Emoji keys', () => {
      expect(isPrototypeKey('прототип')).toBe(false)
      expect(isPrototypeKey('khởi_tạo')).toBe(false)
      expect(isPrototypeKey('原型')).toBe(false)
      expect(isPrototypeKey('🔒')).toBe(false)
    })
  })
})
