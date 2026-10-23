import { describe, it, expect } from 'vitest'
import { getMaxLengthAllArray } from '../getMaxLengthAllArray'

describe('getMaxLengthAllArray', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the length of the longest string in an array', () => {
      const data = ['a', 'abc', 'ab']
      expect(getMaxLengthAllArray(data)).toBe(3)
    })

    it('should return the length of the only string in a single-element array', () => {
      expect(getMaxLengthAllArray(['hello'])).toBe(5)
    })

    it('should return the longest string length when passed a plain object of strings', () => {
      const sourceObject = { first: 'short', second: 'longest_value', third: 'medium' }
      expect(getMaxLengthAllArray(sourceObject)).toBe(13)
    })

    it('should find the maximum regardless of position (first, middle, last)', () => {
      expect(getMaxLengthAllArray(['longest', 'a', 'bb'])).toBe(7)
      expect(getMaxLengthAllArray(['a', 'longest', 'bb'])).toBe(7)
      expect(getMaxLengthAllArray(['a', 'bb', 'longest'])).toBe(7)
    })

    it('should handle multiple strings tied for maximum length', () => {
      expect(getMaxLengthAllArray(['cat', 'dog', 'fox'])).toBe(3)
    })
  })

  describe('Boundary values and limit thresholds (10,000 items)', () => {
    it('should return 0 for an empty array', () => {
      expect(getMaxLengthAllArray([])).toBe(0)
    })

    it('should return 0 for an empty object', () => {
      expect(getMaxLengthAllArray({})).toBe(0)
    })

    it('should return 0 for an array of empty strings', () => {
      expect(getMaxLengthAllArray(['', '', ''])).toBe(0)
    })

    it('should handle arrays with exactly 10,000 elements (Math.max spread threshold)', () => {
      const data = new Array<string>(10_000).fill('a')
      data[9_999] = 'abcdef'
      expect(getMaxLengthAllArray(data)).toBe(6)
    })

    it('should handle arrays with 10,001 elements (entering reduce branch)', () => {
      const data = new Array<string>(10_001).fill('a')
      data[0] = 'first_max'
      expect(getMaxLengthAllArray(data)).toBe(9)
    })

    it('should return the length of the longest string in a large array (>10,000 elements)', () => {
      const data = new Array<string>(11_000).fill('a')
      data[5_000] = 'abc'
      data[10_999] = 'longest_at_end'
      expect(getMaxLengthAllArray(data)).toBe(14)
    })
  })

  describe('Nullish inputs and element fallbacks', () => {
    it('should safely return 0 when data is null or undefined at runtime', () => {
      expect(getMaxLengthAllArray(null as unknown as string[])).toBe(0)
      expect(getMaxLengthAllArray(undefined as unknown as string[])).toBe(0)
    })

    it('should treat null or undefined array elements as length 0', () => {
      const data = ['hi', undefined as unknown as string, null as unknown as string, 'hello']
      expect(getMaxLengthAllArray(data)).toBe(5)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should calculate maximum length for Cyrillic, Vietnamese, CJK, and Emoji strings', () => {
      expect(getMaxLengthAllArray(['Да', 'Приветствие', 'Мир'])).toBe(11)
      expect(getMaxLengthAllArray(['Xin', 'Chào buổi sáng', 'Việt'])).toBe(14)
      expect(getMaxLengthAllArray(['日本', 'こんにちは世界', '語'])).toBe(7)
      expect(getMaxLengthAllArray(['✨', '🚀🔥🎉'])).toBe(6)
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input array', () => {
      const original = ['short', 'longer', 'mid']
      const copy = [...original]
      getMaxLengthAllArray(original)
      expect(original).toEqual(copy)
    })
  })
})
