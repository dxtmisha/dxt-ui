import { describe, it, expect } from 'vitest'
import { isArray } from '../isArray'

describe('isArray', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for empty and populated arrays', () => {
      expect(isArray([])).toBe(true)
      expect(isArray([1, 2, 3])).toBe(true)
      expect(isArray(['a', 'b', 'c'])).toBe(true)
      expect(isArray([null, undefined, false, 0, ''])).toBe(true)
    })

    it('should return true for nested arrays and arrays created via Array constructors', () => {
      expect(isArray([[], [1, [2]]])).toBe(true)
      expect(isArray(new Array(3))).toBe(true)
      expect(isArray(Array.of(1, 2))).toBe(true)
      expect(isArray(Array.from('abc'))).toBe(true)
    })

    it('should return true for sparse arrays', () => {
      // eslint-disable-next-line no-sparse-arrays
      expect(isArray([1, , 3])).toBe(true)
      // eslint-disable-next-line no-sparse-arrays
      expect(isArray([, ,])).toBe(true)
    })
  })

  describe('Array-like and iterable objects', () => {
    it('should return false for objects with a numeric length property', () => {
      expect(isArray({ length: 0 })).toBe(false)
      expect(isArray({ 0: 'a', 1: 'b', length: 2 })).toBe(false)
    })

    it('should return false for Set, Map, and TypedArray instances', () => {
      expect(isArray(new Set([1, 2, 3]))).toBe(false)
      expect(isArray(new Map([['key', 'value']]))).toBe(false)
      expect(isArray(new Uint8Array([1, 2, 3]))).toBe(false)
      expect(isArray(new Int32Array(4))).toBe(false)
    })
  })

  describe('Empty, nullish, and falsy inputs', () => {
    it('should return false for null and undefined', () => {
      expect(isArray(null)).toBe(false)
      expect(isArray(undefined)).toBe(false)
    })

    it('should return false for falsy primitive values (0, false, NaN, empty string)', () => {
      expect(isArray(0)).toBe(false)
      expect(isArray(-0)).toBe(false)
      expect(isArray(0n)).toBe(false)
      expect(isArray(false)).toBe(false)
      expect(isArray(Number.NaN)).toBe(false)
      expect(isArray('')).toBe(false)
    })
  })

  describe('Non-array objects and primitive data types', () => {
    it('should return false for plain objects and built-in object instances', () => {
      expect(isArray({})).toBe(false)
      expect(isArray({ a: 1 })).toBe(false)
      expect(isArray(Object.create(null))).toBe(false)
      expect(isArray(new Date())).toBe(false)
      expect(isArray(/regex/)).toBe(false)
      expect(isArray(new Error('test'))).toBe(false)
    })

    it('should return false for primitive wrapper objects', () => {
      expect(isArray(new String('test'))).toBe(false)
      expect(isArray(new Number(123))).toBe(false)
      expect(isArray(new Boolean(true))).toBe(false)
    })

    it('should return false for strings, numbers, booleans, symbols, bigints, and functions', () => {
      expect(isArray('string')).toBe(false)
      expect(isArray('[1, 2, 3]')).toBe(false)
      expect(isArray(123)).toBe(false)
      expect(isArray(true)).toBe(false)
      expect(isArray(Symbol('array'))).toBe(false)
      expect(isArray(100n)).toBe(false)
      expect(isArray(() => [])).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should return true for arrays containing Cyrillic, Vietnamese, and emoji elements', () => {
      expect(isArray(['Привет', 'Мир'])).toBe(true)
      expect(isArray(['tiếng việt', 'chào bạn'])).toBe(true)
      expect(isArray(['🚀', '🔥', '✨'])).toBe(true)
    })
  })

  describe('TypeScript type narrowing and generic parameter', () => {
    it('should correctly narrow unknown type to array', () => {
      const data: unknown = [1, 2, 3]

      if (isArray(data)) {
        expect(data.length).toBe(3)
        expect(data[0]).toBe(1)
      } else {
        expect.unreachable('Should have narrowed to array')
      }
    })

    it('should support explicit generic type parameter for element type narrowing', () => {
      const data: unknown = ['apple', 'banana']

      if (isArray<string>(data)) {
        expect(data.map(item => item.toUpperCase())).toEqual(['APPLE', 'BANANA'])
      } else {
        expect.unreachable('Should have narrowed to string[]')
      }
    })
  })
})
