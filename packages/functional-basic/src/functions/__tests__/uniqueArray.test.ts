import { describe, it, expect } from 'vitest'
import { uniqueArray } from '../uniqueArray'

describe('uniqueArray', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should remove duplicate numbers and strings while preserving first-seen order', () => {
      expect(uniqueArray([1, 2, 2, 3, 1, 4, 3])).toEqual([1, 2, 3, 4])
      expect(uniqueArray(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c'])
    })

    it('should return an identical sequence when the input array has no duplicates', () => {
      expect(uniqueArray([10, 20, 30])).toEqual([10, 20, 30])
    })

    it('should collapse an array of identical values into a single element', () => {
      expect(uniqueArray(['repeat', 'repeat', 'repeat'])).toEqual(['repeat'])
      expect(uniqueArray([7, 7, 7, 7])).toEqual([7])
    })

    it('should handle an array with a single element correctly', () => {
      expect(uniqueArray([42])).toEqual([42])
      expect(uniqueArray(['single'])).toEqual(['single'])
    })
  })

  describe('Boundary numeric, boolean, and special values', () => {
    it('should treat 0, -0, and +0 as equal under SameValueZero semantics', () => {
      const result = uniqueArray([0, -0, 1, +0])
      expect(result).toEqual([0, 1])
    })

    it('should deduplicate multiple NaN values into a single NaN', () => {
      const result = uniqueArray([Number.NaN, 1, Number.NaN, 2])
      expect(result).toEqual([Number.NaN, 1, 2])
    })

    it('should distinguish between POSITIVE_INFINITY and NEGATIVE_INFINITY', () => {
      const result = uniqueArray([
        Number.POSITIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY,
        Number.NEGATIVE_INFINITY
      ])
      expect(result).toEqual([Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])
    })

    it('should deduplicate boolean values including false', () => {
      expect(uniqueArray([false, true, false, true])).toEqual([false, true])
    })

    it('should accurately deduplicate BigInt values', () => {
      expect(uniqueArray([1n, 2n, 1n, 3n, 2n])).toEqual([1n, 2n, 3n])
    })

    it('should deduplicate identical Symbol references while keeping distinct instances with identical description', () => {
      const sharedSymbol = Symbol('shared')
      const uniqueSymbol1 = Symbol('test')
      const uniqueSymbol2 = Symbol('test')

      const result = uniqueArray([sharedSymbol, uniqueSymbol1, sharedSymbol, uniqueSymbol2])
      expect(result).toEqual([sharedSymbol, uniqueSymbol1, uniqueSymbol2])
      expect(result).toHaveLength(3)
    })
  })

  describe('Defensive runtime behavior and nullish inputs', () => {
    it('should return an empty array when given an empty array', () => {
      expect(uniqueArray([])).toEqual([])
    })

    it('should return an empty array when called without arguments or with undefined', () => {
      expect(uniqueArray()).toEqual([])
      expect(uniqueArray(undefined)).toEqual([])
    })

    it('should return an empty array when given null', () => {
      expect(uniqueArray(null)).toEqual([])
    })

    it('should return an empty array when passed non-array values at runtime', () => {
      // @ts-expect-error Runtime defensive check
      expect(uniqueArray('invalid-string')).toEqual([])
      // @ts-expect-error Runtime defensive check
      expect(uniqueArray(12345)).toEqual([])
      // @ts-expect-error Runtime defensive check
      expect(uniqueArray({})).toEqual([])
      // @ts-expect-error Runtime defensive check
      expect(uniqueArray(true)).toEqual([])
    })

    it('should deduplicate null, undefined, and empty string elements', () => {
      expect(uniqueArray([null, undefined, null, '', undefined, ''])).toEqual([
        null,
        undefined,
        ''
      ])
    })

    it('should handle sparse arrays containing holes', () => {
      // eslint-disable-next-line no-sparse-arrays
      const sparseArray = [1, , 2, , 1]
      expect(uniqueArray(sparseArray)).toEqual([1, undefined, 2])
    })
  })

  describe('Reference types (objects, arrays, and functions)', () => {
    it('should deduplicate identical object references while keeping distinct instances with equal shape', () => {
      const sharedObject = { id: 1 }
      const distinctClone = { id: 1 }

      const result = uniqueArray([sharedObject, distinctClone, sharedObject])
      expect(result).toEqual([sharedObject, distinctClone])
      expect(result).toHaveLength(2)
      expect(result[0]).toBe(sharedObject)
      expect(result[1]).toBe(distinctClone)
    })

    it('should deduplicate identical function and array references', () => {
      const callback = () => true
      const nestedArray = [1, 2]

      const result = uniqueArray<unknown>([callback, nestedArray, callback, nestedArray])
      expect(result).toEqual([callback, nestedArray])
    })

    it('should preserve distinct Date and RegExp instances while deduplicating shared references', () => {
      const sharedDate = new Date('2026-01-01')
      const sharedRegex = /test/g

      const result = uniqueArray([sharedDate, sharedRegex, sharedDate, sharedRegex])
      expect(result).toEqual([sharedDate, sharedRegex])
      expect(result).toHaveLength(2)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should accurately deduplicate Cyrillic, Vietnamese, CJK, and Emoji strings', () => {
      const input = [
        'Привет',
        'привет',
        'Привет',
        'Tiếng Việt',
        'Tiếng Việt',
        '你好',
        '🚀',
        '🚀'
      ]
      expect(uniqueArray(input)).toEqual([
        'Привет',
        'привет',
        'Tiếng Việt',
        '你好',
        '🚀'
      ])
    })
  })

  describe('Statefulness and input immutability', () => {
    it('should return a new array reference and not mutate the input array', () => {
      const sourceArray = [3, 1, 2, 1, 3]
      const result = uniqueArray(sourceArray)

      expect(result).not.toBe(sourceArray)
      expect(sourceArray).toEqual([3, 1, 2, 1, 3])
    })

    it('should support readonly tuple arrays (as const)', () => {
      const readonlyTuple = [1, 2, 3, 2, 1] as const
      const result = uniqueArray(readonlyTuple)

      expect(result).toEqual([1, 2, 3])
    })
  })
})
