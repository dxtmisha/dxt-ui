import { describe, it, expect } from 'vitest'
import { getLast } from '../getLast'

describe('getLast', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the last element of an array', () => {
      expect(getLast([1, 2, 3])).toBe(3)
      expect(getLast(['a', 'b', 'c'])).toBe('c')
    })

    it('should return the only element of a single-item array', () => {
      expect(getLast([42])).toBe(42)
      expect(getLast(['alone'])).toBe('alone')
    })

    it('should return the last element of an object', () => {
      expect(getLast({ a: 1, b: 2 })).toBe(2)
      expect(getLast({ first: 'value', second: 'other' })).toBe('other')
    })

    it('should return the only element of a single-property object', () => {
      expect(getLast({ single: 'item' })).toBe('item')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return undefined for an empty array', () => {
      expect(getLast([])).toBeUndefined()
    })

    it('should return undefined for an empty object', () => {
      expect(getLast({})).toBeUndefined()
    })

    it('should return null for null input', () => {
      expect(getLast(null)).toBeNull()
    })

    it('should return undefined for undefined input', () => {
      expect(getLast()).toBeUndefined()
      expect(getLast(undefined)).toBeUndefined()
    })

    it('should return primitive values as-is without modification', () => {
      expect(getLast('string')).toBe('string')
      expect(getLast(123)).toBe(123)
      expect(getLast(true)).toBe(true)
      expect(getLast(false)).toBe(false)
      expect(getLast(0)).toBe(0)

      const symbolValue = Symbol('test')
      expect(getLast(symbolValue)).toBe(symbolValue)

      const callback = () => 'result'
      expect(getLast(callback)).toBe(callback)
    })
  })

  describe('Falsy values and sparse arrays', () => {
    it('should return numeric 0 when it is the last element', () => {
      expect(getLast([10, 20, 0])).toBe(0)
      expect(getLast({ a: 10, b: 0 })).toBe(0)
    })

    it('should return boolean false when it is the last element', () => {
      expect(getLast([true, false])).toBe(false)
      expect(getLast({ a: true, b: false })).toBe(false)
    })

    it('should return empty string when it is the last element', () => {
      expect(getLast(['hello', ''])).toBe('')
      expect(getLast({ a: 'text', b: '' })).toBe('')
    })

    it('should return null when it is the last element', () => {
      expect(getLast([1, 2, null])).toBeNull()
      expect(getLast({ a: 1, b: null })).toBeNull()
    })

    it('should return undefined when it is the last element', () => {
      expect(getLast([1, 2, undefined])).toBeUndefined()
      expect(getLast({ a: 1, b: undefined })).toBeUndefined()
    })

    it('should handle sparse arrays with holes correctly', () => {
      // eslint-disable-next-line no-sparse-arrays
      const sparse = [1, , 3]
      expect(getLast(sparse)).toBe(3)

      // eslint-disable-next-line no-sparse-arrays
      const sparseTrailingHole = [1, 2, ,]
      expect(getLast(sparseTrailingHole)).toBeUndefined()
    })
  })

  describe('Readonly and immutable data (as const)', () => {
    it('should work with readonly arrays declared with as const', () => {
      const readonlyList = [10, 20, 30] as const
      const result = getLast(readonlyList)
      expect(result).toBe(30)
    })

    it('should work with readonly string tuples', () => {
      const tuple: readonly [string, string] = ['first', 'last']
      expect(getLast(tuple)).toBe('last')
    })
  })

  describe('Object key ordering and indexing', () => {
    it('should respect integer key ordering according to ES specification', () => {
      const objectWithIntegerKeys = {
        10: 'ten',
        2: 'two',
        1: 'one'
      }
      // Integer keys are iterated in ascending order: 1, 2, 10
      expect(getLast(objectWithIntegerKeys)).toBe('ten')
    })

    it('should respect string key insertion order', () => {
      const targetObject = {
        z: 'lastInserted',
        a: 'firstInserted',
        m: 'middleInserted'
      }
      expect(getLast(targetObject)).toBe('middleInserted')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should return Cyrillic elements correctly', () => {
      expect(getLast(['первый', 'второй', 'последний'])).toBe('последний')
      expect(getLast({ старт: 'начало', финал: 'конец' })).toBe('конец')
    })

    it('should return Vietnamese elements correctly', () => {
      expect(getLast(['đầu tiên', 'thứ hai', 'cuối cùng'])).toBe('cuối cùng')
      expect(getLast({ batDau: 'Bắt đầu', ketThuc: 'Kết thúc' })).toBe('Kết thúc')
    })

    it('should return CJK elements correctly', () => {
      expect(getLast(['最初', '中間', '最後'])).toBe('最後')
      expect(getLast({ start: '最初', end: '完了' })).toBe('完了')
    })

    it('should return multibyte Emojis correctly', () => {
      expect(getLast(['🚀', '🔥', '✨', '🎉'])).toBe('🎉')
      expect(getLast({ first: '🚀', last: '🇻🇳' })).toBe('🇻🇳')
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input array', () => {
      const original = [1, 2, 3]
      const copy = [...original]
      getLast(original)
      expect(original).toEqual(copy)
    })

    it('should not mutate the input object', () => {
      const original = { a: 1, b: 2 }
      const copy = { ...original }
      getLast(original)
      expect(original).toEqual(copy)
    })

    it('should produce deterministic output across repeated calls', () => {
      const items = ['a', 'b', 'c']
      expect(getLast(items)).toBe('c')
      expect(getLast(items)).toBe('c')
      expect(getLast(items)).toBe('c')
    })
  })
})
