import { describe, expect, it } from 'vitest'
import { inArray } from '../inArray'

describe('inArray', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true if a numeric value is present in the array', () => {
      const numbers = [1, 2, 3]
      expect(inArray(numbers, 2)).toBe(true)
    })

    it('should return false if a numeric value is absent from the array', () => {
      const numbers = [1, 2, 3]
      expect(inArray(numbers, 4)).toBe(false)
    })

    it('should work with string elements', () => {
      const letters = ['a', 'b', 'c']
      expect(inArray(letters, 'b')).toBe(true)
      expect(inArray(letters, 'd')).toBe(false)
      expect(inArray(letters, 'B')).toBe(false)
    })

    it('should work with boolean elements', () => {
      expect(inArray([true], true)).toBe(true)
      expect(inArray([true], false)).toBe(false)
      expect(inArray([false], false)).toBe(true)
    })
  })

  describe('Boundary values and array shapes', () => {
    it('should return false for any search value in an empty array', () => {
      expect(inArray([], 1 as never)).toBe(false)
      expect(inArray([], '' as never)).toBe(false)
      expect(inArray([], undefined as never)).toBe(false)
    })

    it('should match single-element arrays and boundary positions (first and last)', () => {
      expect(inArray(['only'], 'only')).toBe(true)
      expect(inArray(['first', 'middle', 'last'], 'first')).toBe(true)
      expect(inArray(['first', 'middle', 'last'], 'last')).toBe(true)
    })

    it('should return true when the value appears multiple times in the array', () => {
      expect(inArray([5, 5, 5], 5)).toBe(true)
    })
  })

  describe('Falsy values and SameValueZero semantics', () => {
    it('should accurately detect falsy values (0, false, empty string, null, undefined)', () => {
      const mixedValues: Array<number | boolean | string | null | undefined> = [0, false, '', null, undefined]

      expect(inArray(mixedValues, 0)).toBe(true)
      expect(inArray(mixedValues, false)).toBe(true)
      expect(inArray(mixedValues, '')).toBe(true)
      expect(inArray(mixedValues, null)).toBe(true)
      expect(inArray(mixedValues, undefined)).toBe(true)
    })

    it('should not conflate different falsy values with each other', () => {
      expect(inArray<unknown>([0], false)).toBe(false)
      expect(inArray<unknown>([0], '')).toBe(false)
      expect(inArray<unknown>([null], undefined)).toBe(false)
      expect(inArray<unknown>([false], null)).toBe(false)
    })

    it('should handle NaN and signed zeroes according to SameValueZero (Array.prototype.includes)', () => {
      expect(inArray([1, NaN, 3], NaN)).toBe(true)
      expect(inArray([1, 2, 3], NaN)).toBe(false)
      expect(inArray([0], -0)).toBe(true)
      expect(inArray([-0], 0)).toBe(true)
    })
  })

  describe('Reference equality for complex types', () => {
    it('should compare objects by reference equality', () => {
      const targetObject = { id: 1 }
      const array = [targetObject]

      expect(inArray(array, targetObject)).toBe(true)
      expect(inArray(array, { id: 1 })).toBe(false)
    })

    it('should compare nested arrays, functions, and symbols by reference', () => {
      const nestedArray = [1, 2]
      const callback = () => 'result'
      const uniqueSymbol = Symbol('token')

      expect(inArray([nestedArray], nestedArray)).toBe(true)
      expect(inArray([nestedArray], [1, 2])).toBe(false)
      expect(inArray([callback], callback)).toBe(true)
      expect(inArray([uniqueSymbol], uniqueSymbol)).toBe(true)
      expect(inArray([uniqueSymbol], Symbol('token'))).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should match Cyrillic, Vietnamese, CJK, and emoji strings accurately', () => {
      const unicodeItems = ['Привет', 'Tiếng Việt', 'こんにちは', '🚀']

      expect(inArray(unicodeItems, 'Привет')).toBe(true)
      expect(inArray(unicodeItems, 'Tiếng Việt')).toBe(true)
      expect(inArray(unicodeItems, 'こんにちは')).toBe(true)
      expect(inArray(unicodeItems, '🚀')).toBe(true)
      expect(inArray(unicodeItems, 'привет')).toBe(false)
    })
  })

  describe('Statefulness and mutation isolation', () => {
    it('should not mutate the input array', () => {
      const originalArray = [10, 20, 30]
      const snapshot = [...originalArray]

      inArray(originalArray, 20)
      inArray(originalArray, 99)

      expect(originalArray).toEqual(snapshot)
    })
  })
})
