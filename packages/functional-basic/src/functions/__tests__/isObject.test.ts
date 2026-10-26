import { describe, it, expect } from 'vitest'
import { isObject } from '../isObject'

describe('isObject', () => {
  describe('Standard functional requirements (Plain and custom objects)', () => {
    it('should return true for plain objects', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ a: 1, b: 'text' })).toBe(true)
    })

    it('should return true for null-prototype objects and custom class instances', () => {
      class CustomEntity {
        id = 1
      }

      expect(isObject(Object.create(null))).toBe(true)
      expect(isObject(new CustomEntity())).toBe(true)
    })
  })

  describe('Built-in JavaScript object types and arrays', () => {
    it('should return true for arrays (arrays have typeof "object" in JS)', () => {
      expect(isObject([])).toBe(true)
      expect(isObject([1, 2, 3])).toBe(true)
    })

    it('should return true for Date, RegExp, Map, Set, Error, and TypedArray instances', () => {
      expect(isObject(new Date())).toBe(true)
      expect(isObject(/pattern/)).toBe(true)
      expect(isObject(new Map())).toBe(true)
      expect(isObject(new Set())).toBe(true)
      expect(isObject(new WeakMap())).toBe(true)
      expect(isObject(new WeakSet())).toBe(true)
      expect(isObject(new Error('message'))).toBe(true)
      expect(isObject(new Uint8Array(4))).toBe(true)
    })

    it('should return true for primitive wrapper objects', () => {
      expect(isObject(new String('test'))).toBe(true)
      expect(isObject(new Number(123))).toBe(true)
      expect(isObject(new Boolean(true))).toBe(true)
    })
  })

  describe('Nullish and falsy primitive values', () => {
    it('should return false for null (despite typeof null === "object") and undefined', () => {
      expect(isObject(null)).toBe(false)
      expect(isObject(undefined)).toBe(false)
    })

    it('should return false for falsy primitives (0, false, NaN, empty string)', () => {
      expect(isObject(0)).toBe(false)
      expect(isObject(-0)).toBe(false)
      expect(isObject(0n)).toBe(false)
      expect(isObject(false)).toBe(false)
      expect(isObject(Number.NaN)).toBe(false)
      expect(isObject('')).toBe(false)
    })
  })

  describe('Functions and non-object primitive types', () => {
    it('should return false for functions and class constructors', () => {
      class SampleClass {}

      expect(isObject(() => {})).toBe(false)
      expect(isObject(function namedFunction() {})).toBe(false)
      expect(isObject(SampleClass)).toBe(false)
    })

    it('should return false for strings, numbers, booleans, symbols, and bigints', () => {
      expect(isObject('string')).toBe(false)
      expect(isObject('{}')).toBe(false)
      expect(isObject(123)).toBe(false)
      expect(isObject(Number.POSITIVE_INFINITY)).toBe(false)
      expect(isObject(true)).toBe(false)
      expect(isObject(Symbol('foo'))).toBe(false)
      expect(isObject(100n)).toBe(false)
    })
  })

  describe('Multilingual, Unicode, and Symbol properties', () => {
    it('should return true for objects with Cyrillic, Vietnamese, and emoji keys', () => {
      expect(isObject({ привет: 'мир' })).toBe(true)
      expect(isObject({ 'tiếng việt': 'chào bạn' })).toBe(true)
      expect(isObject({ '🚀': 'space' })).toBe(true)
    })

    it('should return true for objects with Symbol keys', () => {
      const symbolKey = Symbol('key')
      expect(isObject({ [symbolKey]: 'value' })).toBe(true)
    })
  })

  describe('TypeScript type narrowing and generic parameter', () => {
    it('should correctly narrow unknown type to ObjectItem', () => {
      const data: unknown = { key: 'value' }

      if (isObject(data)) {
        expect(data.key).toBe('value')
      } else {
        expect.unreachable('Should have narrowed to ObjectItem')
      }
    })

    it('should support explicit generic type parameter for value type narrowing', () => {
      const data: unknown = { count: 42 }

      if (isObject<number>(data)) {
        expect(data.count.toFixed(0)).toBe('42')
      } else {
        expect.unreachable('Should have narrowed to ObjectItem<number>')
      }
    })
  })
})
