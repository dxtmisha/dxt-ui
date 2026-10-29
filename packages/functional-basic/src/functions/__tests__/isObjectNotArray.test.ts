import { describe, it, expect } from 'vitest'
import { isObjectNotArray } from '../isObjectNotArray'

describe('isObjectNotArray', () => {
  describe('Standard functional requirements (Plain and non-array objects)', () => {
    it('should return true for plain objects', () => {
      expect(isObjectNotArray({})).toBe(true)
      expect(isObjectNotArray({ a: 1, b: 'value' })).toBe(true)
    })

    it('should return true for null-prototype objects and custom class instances', () => {
      class CustomEntity {
        name = 'test'
      }

      expect(isObjectNotArray(Object.create(null))).toBe(true)
      expect(isObjectNotArray(new CustomEntity())).toBe(true)
    })

    it('should return true for built-in non-array object instances (Date, RegExp, Map, Set, Error)', () => {
      expect(isObjectNotArray(new Date())).toBe(true)
      expect(isObjectNotArray(/regex/)).toBe(true)
      expect(isObjectNotArray(new Map())).toBe(true)
      expect(isObjectNotArray(new Set())).toBe(true)
      expect(isObjectNotArray(new Error('test'))).toBe(true)
    })

    it('should return true for frozen, sealed, and non-extensible objects', () => {
      expect(isObjectNotArray(Object.freeze({ a: 1 }))).toBe(true)
      expect(isObjectNotArray(Object.seal({ b: 2 }))).toBe(true)
      expect(isObjectNotArray(Object.preventExtensions({ c: 3 }))).toBe(true)
    })

    it('should return true for array-like objects and TypedArrays', () => {
      // eslint-disable-next-line prefer-rest-params
      const args = (function () { return arguments })()
      expect(isObjectNotArray(args)).toBe(true)
      expect(isObjectNotArray({ length: 2, 0: 'a', 1: 'b' })).toBe(true)
      expect(isObjectNotArray(new Uint8Array([1, 2, 3]))).toBe(true)
    })

    it('should return true for Proxy-wrapped plain objects and false for Proxy-wrapped arrays', () => {
      const objectProxy = new Proxy({ id: 1 }, {})
      const arrayProxy = new Proxy([1, 2, 3], {})

      expect(isObjectNotArray(objectProxy)).toBe(true)
      expect(isObjectNotArray(arrayProxy)).toBe(false)
    })
  })

  describe('Array exclusion', () => {
    it('should return false for empty, populated, and nested arrays', () => {
      expect(isObjectNotArray([])).toBe(false)
      expect(isObjectNotArray([1, 2, 3])).toBe(false)
      expect(isObjectNotArray([{ key: 'value' }])).toBe(false)
      expect(isObjectNotArray([[]])).toBe(false)
      expect(isObjectNotArray(new Array(3))).toBe(false)
      expect(isObjectNotArray(Array.from('abc'))).toBe(false)
    })
  })

  describe('Nullish and falsy primitive values', () => {
    it('should return false for null and undefined', () => {
      expect(isObjectNotArray(null)).toBe(false)
      expect(isObjectNotArray(undefined)).toBe(false)
    })

    it('should return false for falsy primitives (0, false, NaN, empty string)', () => {
      expect(isObjectNotArray(0)).toBe(false)
      expect(isObjectNotArray(-0)).toBe(false)
      expect(isObjectNotArray(0n)).toBe(false)
      expect(isObjectNotArray(false)).toBe(false)
      expect(isObjectNotArray(Number.NaN)).toBe(false)
      expect(isObjectNotArray('')).toBe(false)
    })
  })

  describe('Functions and non-object primitive types', () => {
    it('should return false for functions and class constructors', () => {
      class SampleClass {}

      expect(isObjectNotArray(() => {})).toBe(false)
      expect(isObjectNotArray(function namedFunction() {})).toBe(false)
      expect(isObjectNotArray(SampleClass)).toBe(false)
    })

    it('should return false for strings, numbers, booleans, symbols, and bigints', () => {
      expect(isObjectNotArray('string')).toBe(false)
      expect(isObjectNotArray('{}')).toBe(false)
      expect(isObjectNotArray(123)).toBe(false)
      expect(isObjectNotArray(true)).toBe(false)
      expect(isObjectNotArray(Symbol('test'))).toBe(false)
      expect(isObjectNotArray(42n)).toBe(false)
    })
  })

  describe('TypeScript type guard narrowing', () => {
    it('should narrow union of string, array, and object to ObjectItem', () => {
      const candidate: string | number[] | { name: string } = { name: 'Item' }

      if (isObjectNotArray(candidate)) {
        // TypeScript narrows candidate to ObjectItem
        expect(candidate.name).toBe('Item')
      } else {
        expect.unreachable('Should have narrowed candidate to object')
      }
    })

    it('should narrow unknown values and permit index access', () => {
      const candidate: unknown = { count: 10 }

      if (isObjectNotArray(candidate)) {
        expect(candidate.count).toBe(10)
      } else {
        expect.unreachable('Should have narrowed candidate to object')
      }
    })
  })
})
