import { describe, it, expect } from 'vitest'
import { isSelectedByList } from '../isSelectedByList'

describe('isSelectedByList', () => {
  describe('Single value comparisons (Happy path)', () => {
    it('should return true if a single value matches a single selected target', () => {
      expect(isSelectedByList('apple', 'apple')).toBe(true)
      expect(isSelectedByList(10, 10)).toBe(true)
      expect(isSelectedByList(false, false)).toBe(true)
    })

    it('should return false if a single value does not match a single selected target', () => {
      expect(isSelectedByList('apple', 'banana')).toBe(false)
      expect(isSelectedByList(10, 20)).toBe(false)
      expect(isSelectedByList(false, true)).toBe(false)
    })

    it('should return true if a single value is present within the selected array', () => {
      expect(isSelectedByList('apple', ['banana', 'apple', 'cherry'])).toBe(true)
      expect(isSelectedByList(0, [1, 0, 2])).toBe(true)
    })

    it('should return false if a single value is not present within the selected array', () => {
      expect(isSelectedByList('date', ['banana', 'apple', 'cherry'])).toBe(false)
      expect(isSelectedByList(99, [1, 2, 3])).toBe(false)
    })
  })

  describe('Array of values comparisons', () => {
    it('should return true if all values in the array match a single selected target', () => {
      expect(isSelectedByList(['apple', 'apple'], 'apple')).toBe(true)
    })

    it('should return false if any value in the array does not match a single selected target', () => {
      expect(isSelectedByList(['apple', 'banana'], 'apple')).toBe(false)
    })

    it('should return true if all values in the array are present within the selected array', () => {
      expect(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])).toBe(true)
      expect(isSelectedByList([1, 2, 3], [3, 2, 1])).toBe(true)
    })

    it('should return false if at least one value in the array is missing from the selected array', () => {
      expect(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])).toBe(false)
      expect(isSelectedByList([1, 4], [1, 2, 3])).toBe(false)
    })
  })

  describe('Numeric equivalence between numbers and numeric strings', () => {
    it('should match single numeric string against number or array of numbers', () => {
      expect(isSelectedByList<number | string>('5', 5)).toBe(true)
      expect(isSelectedByList<number | string>(5, '5')).toBe(true)
      expect(isSelectedByList<number | string>('0', [1, 0, 2])).toBe(true)
    })

    it('should match an array of mixed numbers and numeric strings against selected targets', () => {
      expect(isSelectedByList<number | string>(['1', 2, '0'], [0, '1', '2', 3])).toBe(true)
      expect(isSelectedByList<number | string>(['5', 5], 5)).toBe(true)
      expect(isSelectedByList<number | string>(['1', 99], [1, 2, 3])).toBe(false)
    })
  })

  describe('Empty, nullish, and boundary inputs', () => {
    it('should return true for an empty values array (vacuous truth of Array.prototype.every)', () => {
      expect(isSelectedByList([], ['apple', 'banana'])).toBe(true)
      expect(isSelectedByList([], [])).toBe(true)
    })

    it('should return false for non-empty values when selected is an empty array', () => {
      expect(isSelectedByList('apple', [])).toBe(false)
      expect(isSelectedByList(['apple'], [])).toBe(false)
    })

    it('should return false when values is null, undefined, or contains nullish elements', () => {
      expect(isSelectedByList(null, null)).toBe(false)
      expect(isSelectedByList(undefined, undefined)).toBe(false)
      expect(isSelectedByList(['apple', null], ['apple', null])).toBe(false)
      expect(isSelectedByList(['apple', undefined], ['apple', undefined])).toBe(false)
    })

    it('should handle falsy values like 0, false, and empty string accurately', () => {
      expect(isSelectedByList([0, 0], 0)).toBe(true)
      expect(isSelectedByList([false, true], [true, false])).toBe(true)
      expect(isSelectedByList(['', 'a'], ['', 'a', 'b'])).toBe(true)
    })
  })

  describe('Multilingual, Unicode, and immutability guarantees', () => {
    it('should support Cyrillic, Vietnamese, CJK, and Emoji lists without mutating inputs', () => {
      const values = ['Привет', 'tiếng Việt', '🚀']
      const selected = ['🚀', 'Привет', 'こんにちは', 'tiếng Việt']
      const valuesSnapshot = [...values]
      const selectedSnapshot = [...selected]

      expect(isSelectedByList(values, selected)).toBe(true)
      expect(values).toEqual(valuesSnapshot)
      expect(selected).toEqual(selectedSnapshot)
    })
  })
})
