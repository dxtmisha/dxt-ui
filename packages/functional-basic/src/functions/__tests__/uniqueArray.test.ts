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
    })
  })

  describe('Boundary numeric, boolean, and special values', () => {
    it('should treat 0 and -0 as equal under SameValueZero semantics', () => {
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
  })

  describe('Empty and nullish elements', () => {
    it('should return an empty array when given an empty array', () => {
      expect(uniqueArray([])).toEqual([])
    })

    it('should deduplicate null, undefined, and empty string elements', () => {
      expect(uniqueArray([null, undefined, null, '', undefined, ''])).toEqual([
        null,
        undefined,
        ''
      ])
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
  })
})
