import { describe, it, expect } from 'vitest'
import { intersectKey } from '../intersectKey'

describe('intersectKey', () => {
  describe('Standard object intersection', () => {
    it('should return properties of data that exist in comparison', () => {
      const data = { a: 1, b: 2, c: 3 }
      const comparison = { b: 'x', c: 'y', d: 'z' }

      expect(intersectKey(data, comparison)).toEqual({ b: 2, c: 3 })
    })

    it('should return an empty object if no keys intersect', () => {
      const data = { a: 1, b: 2 }
      const comparison = { c: 3, d: 4 }

      expect(intersectKey(data, comparison)).toEqual({})
    })

    it('should only check keys in the source data, ignoring extra keys in comparison', () => {
      const data = { a: 1 }
      const comparison = { a: 10, b: 20, c: 30 }

      expect(intersectKey(data, comparison)).toEqual({ a: 1 })
    })

    it('should preserve values of different types correctly without mutation', () => {
      const data = {
        str: 'hello',
        num: 42,
        bool: true,
        arr: [1, 2, 3],
        obj: { nested: 'value' },
        nil: null,
        undef: undefined
      }
      const comparison = {
        str: null,
        num: null,
        bool: null,
        arr: null,
        obj: null,
        nil: null,
        undef: null
      }

      expect(intersectKey(data, comparison)).toEqual(data)
    })
  })

  describe('Prototype pollution protection (Security & Correctness)', () => {
    it('should NOT intersect with Object.prototype properties (toString, valueOf, constructor) when they are not own properties', () => {
      const data = {
        a: 1,
        toString: 'should-not-leak',
        valueOf: 'should-not-leak',
        constructor: 'should-not-leak',
        hasOwnProperty: 'should-not-leak'
      }
      const comparison = { a: 'target' } // Does not have own toString, valueOf, etc.

      // Only 'a' must be matched, prototype properties in comparison must be ignored
      expect(intersectKey(data, comparison)).toEqual({ a: 1 })
    })

    it('should correctly match prototype-named properties when explicitly defined as own properties in comparison', () => {
      const data = { toString: 'custom-to-string', a: 1 }
      const comparison = { toString: true }

      expect(intersectKey(data, comparison)).toEqual({ toString: 'custom-to-string' })
    })
  })

  describe('Array support', () => {
    it('should work with arrays where indexes act as keys', () => {
      const data = ['apple', 'banana', 'cherry']
      const comparison = ['x', 'y']

      expect(intersectKey(data, comparison)).toEqual({ 0: 'apple', 1: 'banana' })
    })

    it('should not match non-index array prototype properties', () => {
      const data = { slice: 'test', 0: 'first' }
      const comparison = ['zero', 'one']

      expect(intersectKey(data, comparison)).toEqual({ 0: 'first' })
    })
  })

  describe('Null, undefined and invalid input safety', () => {
    it('should return an empty object if data is undefined or null', () => {
      const comparison = { a: 1 }
      expect(intersectKey(undefined, comparison)).toEqual({})
      expect(intersectKey(null, comparison)).toEqual({})
    })

    it('should return an empty object if comparison is undefined or null', () => {
      const data = { a: 1 }
      expect(intersectKey(data, undefined)).toEqual({})
      expect(intersectKey(data, null)).toEqual({})
    })

    it('should return an empty object if either argument is a primitive value', () => {
      // @ts-expect-error testing primitive safety
      expect(intersectKey(0, { a: 1 })).toEqual({})
      // @ts-expect-error testing primitive safety
      expect(intersectKey({ a: 1 }, 'string')).toEqual({})
      // @ts-expect-error testing primitive safety
      expect(intersectKey(false, true)).toEqual({})
      // @ts-expect-error testing primitive safety
      expect(intersectKey(123, 456)).toEqual({})
    })

    it('should work with objects without prototypes (Object.create(null))', () => {
      const data = Object.create(null)
      data.key = 'value'
      const comparison = Object.create(null)
      comparison.key = 'compare'

      expect(intersectKey(data, comparison)).toEqual({ key: 'value' })
    })
  })
})
