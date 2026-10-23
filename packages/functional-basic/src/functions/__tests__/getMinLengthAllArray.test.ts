import { describe, it, expect } from 'vitest'
import { getMinLengthAllArray } from '../getMinLengthAllArray'

describe('getMinLengthAllArray', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the length of the shortest string in an array', () => {
      const data = ['apple', 'abc', 'banana']
      expect(getMinLengthAllArray(data)).toBe(3)
    })

    it('should return the length of the only string in a single-element array', () => {
      expect(getMinLengthAllArray(['hello'])).toBe(5)
    })

    it('should return the shortest string length when passed a plain object of strings', () => {
      const sourceObject = { first: 'longer', second: 'ab', third: 'medium' }
      expect(getMinLengthAllArray(sourceObject)).toBe(2)
    })

    it('should find the minimum regardless of position (first, middle, last)', () => {
      expect(getMinLengthAllArray(['a', 'medium', 'longest'])).toBe(1)
      expect(getMinLengthAllArray(['medium', 'a', 'longest'])).toBe(1)
      expect(getMinLengthAllArray(['medium', 'longest', 'a'])).toBe(1)
    })

    it('should handle multiple strings tied for minimum length', () => {
      expect(getMinLengthAllArray(['cat', 'dog', 'fox'])).toBe(3)
    })
  })

  describe('Boundary values and limit thresholds (10,000 items)', () => {
    it('should return 0 if an empty array is passed', () => {
      expect(getMinLengthAllArray([])).toBe(0)
    })

    it('should return 0 if an empty object is passed', () => {
      expect(getMinLengthAllArray({})).toBe(0)
    })

    it('should return 0 if the array contains at least one empty string', () => {
      expect(getMinLengthAllArray(['short', '', 'longest'])).toBe(0)
    })

    it('should handle arrays with exactly 10,000 elements (Math.min spread threshold)', () => {
      const data = new Array<string>(10_000).fill('abcdef')
      data[9_999] = 'xy'
      expect(getMinLengthAllArray(data)).toBe(2)
    })

    it('should handle arrays with 10,001 elements (entering reduce branch)', () => {
      const data = new Array<string>(10_001).fill('abcdef')
      data[0] = 'x'
      expect(getMinLengthAllArray(data)).toBe(1)
    })

    it('should return the length of the shortest string in a large array (>10,000 elements)', () => {
      const data = new Array<string>(11_000).fill('aaaa')
      data[5_000] = 'abc'
      data[10_999] = 'ab'
      expect(getMinLengthAllArray(data)).toBe(2)
    })
  })

  describe('Nullish inputs and element fallbacks', () => {
    it('should safely return 0 when data is null or undefined at runtime', () => {
      expect(getMinLengthAllArray(null as unknown as string[])).toBe(0)
      expect(getMinLengthAllArray(undefined as unknown as string[])).toBe(0)
    })

    it('should return 0 when an array contains null or undefined elements', () => {
      const data = ['hello', undefined as unknown as string, 'world']
      expect(getMinLengthAllArray(data)).toBe(0)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should calculate minimum length for Cyrillic, Vietnamese, CJK, and Emoji strings', () => {
      expect(getMinLengthAllArray(['Приветствие', 'Да', 'Мир'])).toBe(2)
      expect(getMinLengthAllArray(['Chào buổi sáng', 'Xin', 'Việt'])).toBe(3)
      expect(getMinLengthAllArray(['こんにちは世界', '語', '日本'])).toBe(1)
      expect(getMinLengthAllArray(['🚀🔥🎉', '✨'])).toBe(1)
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input array', () => {
      const original = ['longer', 'short', 'mid']
      const copy = [...original]
      getMinLengthAllArray(original)
      expect(original).toEqual(copy)
    })
  })
})
