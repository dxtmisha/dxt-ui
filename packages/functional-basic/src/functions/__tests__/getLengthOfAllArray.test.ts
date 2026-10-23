import { describe, it, expect } from 'vitest'
import { getLengthOfAllArray } from '../getLengthOfAllArray'

describe('getLengthOfAllArray', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return an array of lengths from an array of strings', () => {
      const data = ['apple', 'banana', 'cherry']
      expect(getLengthOfAllArray(data)).toEqual([5, 6, 6])
    })

    it('should return a single-element array for a single-item string array', () => {
      expect(getLengthOfAllArray(['hello'])).toEqual([5])
    })

    it('should return an array of value lengths when passed a plain object of strings', () => {
      const sourceObject = { start: 'one', middle: 'four', end: 'three' }
      expect(getLengthOfAllArray(sourceObject)).toEqual([3, 4, 5])
    })
  })

  describe('Boundary values and empty inputs', () => {
    it('should return an empty array when an empty array is passed', () => {
      expect(getLengthOfAllArray([])).toEqual([])
    })

    it('should return an empty array when an empty object is passed', () => {
      expect(getLengthOfAllArray({})).toEqual([])
    })

    it('should handle an array containing empty strings', () => {
      const data = ['', 'a', '']
      expect(getLengthOfAllArray(data)).toEqual([0, 1, 0])
    })

    it('should count whitespace characters in whitespace-only strings', () => {
      const data = [' ', '   ', '\t\n']
      expect(getLengthOfAllArray(data)).toEqual([1, 3, 2])
    })
  })

  describe('Nullish elements and fallback branch (item?.length ?? 0)', () => {
    it('should return 0 for null or undefined elements inside an array', () => {
      const data = ['abc', undefined as unknown as string, null as unknown as string, 'de']
      expect(getLengthOfAllArray(data)).toEqual([3, 0, 0, 2])
    })

    it('should return 0 for null or undefined property values inside an object', () => {
      const sourceObject = {
        first: 'hello',
        second: null as unknown as string,
        third: undefined as unknown as string
      }
      expect(getLengthOfAllArray(sourceObject)).toEqual([5, 0, 0])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should calculate lengths for Cyrillic strings', () => {
      expect(getLengthOfAllArray(['Привет', 'Мир'])).toEqual([6, 3])
    })

    it('should calculate lengths for Vietnamese strings with diacritics', () => {
      expect(getLengthOfAllArray(['Xin chào', 'Việt Nam'])).toEqual([8, 8])
    })

    it('should calculate lengths for CJK strings', () => {
      expect(getLengthOfAllArray(['こんにちは', '你好世界', '안녕하세요'])).toEqual([5, 4, 5])
    })

    it('should calculate UTF-16 code unit lengths for Emoji strings', () => {
      expect(getLengthOfAllArray(['✨', '🚀', '🔥🎉'])).toEqual([1, 2, 4])
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input array or object', () => {
      const originalArray = ['one', 'two']
      const arrayCopy = [...originalArray]
      getLengthOfAllArray(originalArray)
      expect(originalArray).toEqual(arrayCopy)

      const originalObject = { a: 'one', b: 'two' }
      const objectCopy = { ...originalObject }
      getLengthOfAllArray(originalObject)
      expect(originalObject).toEqual(objectCopy)
    })
  })
})
