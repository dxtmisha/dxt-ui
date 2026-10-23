import { afterEach, describe, expect, it, vi } from 'vitest'
import * as randomModule from '../random'
import { getRandomText } from '../getRandomText'

describe('getRandomText', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should generate a space-separated string of words with default parameters', () => {
      const text = getRandomText(2, 5)
      expect(typeof text).toBe('string')
      expect(text.trim().length).toBeGreaterThan(0)

      const words = text.split(' ')
      expect(words.length).toBeGreaterThanOrEqual(2)
      expect(words.length).toBeLessThanOrEqual(5)

      words.forEach((word) => {
        expect(word).toMatch(/^#{2,12}$/)
      })
    })

    it('should allow customizing the symbol used for generating words', () => {
      const text = getRandomText(3, 3, '*')
      const words = text.split(' ')

      expect(words.length).toBe(3)
      words.forEach((word) => {
        expect(word).toMatch(/^\*{2,12}$/)
      })
    })

    it('should allow customizing minimum and maximum word lengths', () => {
      const text = getRandomText(4, 4, '@', 5, 5)
      const words = text.split(' ')

      expect(words.length).toBe(4)
      words.forEach((word) => {
        expect(word).toBe('@@@@@')
      })
    })

    it('should generate words within the custom [lengthMin, lengthMax] range', () => {
      const text = getRandomText(10, 10, 'x', 3, 6)
      const words = text.split(' ')

      expect(words.length).toBe(10)
      words.forEach((word) => {
        expect(word.length).toBeGreaterThanOrEqual(3)
        expect(word.length).toBeLessThanOrEqual(6)
        expect(word).toMatch(/^x+$/)
      })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return a single word with no spaces when min and max are both 1', () => {
      const text = getRandomText(1, 1, '#', 4, 4)
      expect(text).toBe('####')
      expect(text.includes(' ')).toBe(false)
    })

    it('should return an empty string when word count is 0 (min = 0, max = 0)', () => {
      expect(getRandomText(0, 0)).toBe('')
    })

    it('should return an empty string when word count range is negative', () => {
      expect(getRandomText(-5, -1)).toBe('')
    })

    it('should handle word length of 0 by joining empty words with spaces', () => {
      const text = getRandomText(3, 3, '#', 0, 0)
      expect(text).toBe('  ')
    })

    it('should handle single-character words (lengthMin = 1, lengthMax = 1)', () => {
      const text = getRandomText(3, 3, 'A', 1, 1)
      expect(text).toBe('A A A')
    })
  })

  describe('Empty, multi-character, and Unicode symbols', () => {
    it('should handle an empty string symbol by returning only separator spaces', () => {
      const text = getRandomText(3, 3, '', 4, 4)
      expect(text).toBe('  ')
    })

    it('should support multi-character symbols repeated per character count', () => {
      const text = getRandomText(2, 2, 'ab', 3, 3)
      expect(text).toBe('ababab ababab')
    })

    it('should support Cyrillic, Vietnamese, CJK, and emoji symbols', () => {
      expect(getRandomText(2, 2, 'Ж', 3, 3)).toBe('ЖЖЖ ЖЖЖ')
      expect(getRandomText(2, 2, 'đ', 2, 2)).toBe('đđ đđ')
      expect(getRandomText(2, 2, '字', 2, 2)).toBe('字字 字字')
      expect(getRandomText(2, 2, '🚀', 2, 2)).toBe('🚀🚀 🚀🚀')
    })
  })

  describe('Deterministic execution with mocked random', () => {
    it('should call random first for word count and then once per word for length', () => {
      const randomSpy = vi.spyOn(randomModule, 'random')
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3)

      const result = getRandomText(1, 5, '#', 2, 8)

      expect(result).toBe('## #### ###')
      expect(randomSpy).toHaveBeenCalledTimes(4)
      expect(randomSpy).toHaveBeenNthCalledWith(1, 1, 5)
      expect(randomSpy).toHaveBeenNthCalledWith(2, 2, 8)
      expect(randomSpy).toHaveBeenNthCalledWith(3, 2, 8)
      expect(randomSpy).toHaveBeenNthCalledWith(4, 2, 8)
    })
  })
})
