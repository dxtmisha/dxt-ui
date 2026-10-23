import { afterEach, describe, expect, it, vi } from 'vitest'
import * as randomModule from '../random'
import { getRandomItem } from '../getRandomItem'

describe('getRandomItem', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return a random element from a numeric array', () => {
      const array = [1, 2, 3, 4, 5]
      const result = getRandomItem(array)

      expect(result).toBeDefined()
      expect(array).toContain(result)
    })

    it('should return a random value from a plain object', () => {
      const object = { first: 10, second: 20, third: 30 }
      const result = getRandomItem(object)

      expect(result).toBeDefined()
      expect(Object.values(object)).toContain(result)
    })

    it('should return the scalar value itself when input is neither an array nor an object', () => {
      expect(getRandomItem('test')).toBe('test')
      expect(getRandomItem(42)).toBe(42)
      expect(getRandomItem(true)).toBe(true)
    })
  })

  describe('Boundary values and deterministic index selection', () => {
    it('should return the single element from a single-item array', () => {
      const randomSpy = vi.spyOn(randomModule, 'random')
      expect(getRandomItem(['only'])).toBe('only')
      expect(randomSpy).toHaveBeenCalledWith(0, 0)
    })

    it('should return the single value from a single-key object', () => {
      const randomSpy = vi.spyOn(randomModule, 'random')
      expect(getRandomItem({ single: 'value' })).toBe('value')
      expect(randomSpy).toHaveBeenCalledWith(0, 0)
    })

    it('should return the first element when random returns 0', () => {
      vi.spyOn(randomModule, 'random').mockReturnValue(0)

      expect(getRandomItem(['alpha', 'beta', 'gamma'])).toBe('alpha')
      expect(getRandomItem({ first: 'alpha', second: 'beta', third: 'gamma' })).toBe('alpha')
    })

    it('should return the last element when random returns length - 1', () => {
      const randomSpy = vi.spyOn(randomModule, 'random').mockReturnValue(2)

      expect(getRandomItem(['alpha', 'beta', 'gamma'])).toBe('gamma')
      expect(randomSpy).toHaveBeenCalledWith(0, 2)

      expect(getRandomItem({ first: 'alpha', second: 'beta', third: 'gamma' })).toBe('gamma')
    })
  })

  describe('Empty and nullish inputs', () => {
    it('should return undefined for an empty array', () => {
      const randomSpy = vi.spyOn(randomModule, 'random')
      expect(getRandomItem([])).toBeUndefined()
      expect(randomSpy).not.toHaveBeenCalled()
    })

    it('should return undefined for an empty object', () => {
      const randomSpy = vi.spyOn(randomModule, 'random')
      expect(getRandomItem({})).toBeUndefined()
      expect(randomSpy).not.toHaveBeenCalled()
    })

    it('should return undefined when called with no arguments, undefined, or null', () => {
      expect(getRandomItem()).toBeUndefined()
      expect(getRandomItem(undefined)).toBeUndefined()
      expect(getRandomItem(null)).toBeUndefined()
    })
  })

  describe('Falsy values and non-standard data types', () => {
    it('should preserve falsy scalar values (0, false, empty string, NaN)', () => {
      expect(getRandomItem(0)).toBe(0)
      expect(getRandomItem(-0)).toBe(-0)
      expect(getRandomItem(false)).toBe(false)
      expect(getRandomItem('')).toBe('')
      expect(Number.isNaN(getRandomItem(NaN))).toBe(true)
    })

    it('should correctly return falsy elements stored inside an array', () => {
      expect(getRandomItem([0])).toBe(0)
      expect(getRandomItem([false])).toBe(false)
      expect(getRandomItem([''])).toBe('')
      expect(getRandomItem([null])).toBeNull()
      expect(getRandomItem([undefined])).toBeUndefined()
    })

    it('should correctly return falsy values stored inside an object', () => {
      expect(getRandomItem({ zero: 0 })).toBe(0)
      expect(getRandomItem({ flag: false })).toBe(false)
      expect(getRandomItem({ empty: '' })).toBe('')
      expect(getRandomItem({ nothing: null })).toBeNull()
      expect(getRandomItem({ missing: undefined })).toBeUndefined()
    })

    it('should handle arrays of complex objects and nested arrays', () => {
      const firstItem = { id: 1, label: 'First' }
      const secondItem = { id: 2, label: 'Second' }
      const items = [firstItem, secondItem]

      const result = getRandomItem(items)
      expect(result === firstItem || result === secondItem).toBe(true)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle arrays and objects with Cyrillic, Vietnamese, CJK, and emoji strings', () => {
      const unicodeArray = ['Привет', 'Xin chào', 'こんにちは', '🚀🔥']
      const arrayResult = getRandomItem(unicodeArray)
      expect(unicodeArray).toContain(arrayResult)

      const unicodeObject = {
        ru: 'Мир',
        vi: 'Thế giới',
        jp: '世界',
        emoji: '✨'
      }
      const objectResult = getRandomItem(unicodeObject)
      expect(Object.values(unicodeObject)).toContain(objectResult)
    })
  })

  describe('Statefulness and mutation isolation', () => {
    it('should not mutate the input array or object', () => {
      const originalArray = [10, 20, 30]
      const arraySnapshot = [...originalArray]
      getRandomItem(originalArray)
      expect(originalArray).toEqual(arraySnapshot)

      const originalObject = { alpha: 1, beta: 2, gamma: 3 }
      const objectSnapshot = { ...originalObject }
      getRandomItem(originalObject)
      expect(originalObject).toEqual(objectSnapshot)
    })
  })
})
