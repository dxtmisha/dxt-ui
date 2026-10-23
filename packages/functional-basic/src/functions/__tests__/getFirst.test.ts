import { describe, it, expect } from 'vitest'
import { getFirst } from '../getFirst'

describe('getFirst', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return the first element of an array', () => {
      expect(getFirst([1, 2, 3])).toBe(1)
      expect(getFirst(['a', 'b', 'c'])).toBe('a')
    })

    it('should return the only element of a single-item array', () => {
      expect(getFirst([42])).toBe(42)
      expect(getFirst(['alone'])).toBe('alone')
    })

    it('should return the first element of an object', () => {
      expect(getFirst({ a: 1, b: 2 })).toBe(1)
      expect(getFirst({ first: 'value', second: 'other' })).toBe('value')
    })

    it('should return the only element of a single-property object', () => {
      expect(getFirst({ single: 'item' })).toBe('item')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return undefined for an empty array', () => {
      expect(getFirst([])).toBeUndefined()
    })

    it('should return undefined for an empty object', () => {
      expect(getFirst({})).toBeUndefined()
    })

    it('should return null for null input', () => {
      expect(getFirst(null)).toBeNull()
    })

    it('should return undefined for undefined input', () => {
      expect(getFirst(undefined)).toBeUndefined()
    })

    it('should return primitive values as-is without modification', () => {
      expect(getFirst('string')).toBe('string')
      expect(getFirst(123)).toBe(123)
      expect(getFirst(true)).toBe(true)
      expect(getFirst(false)).toBe(false)
      expect(getFirst(0)).toBe(0)

      const symbolValue = Symbol('test')
      expect(getFirst(symbolValue)).toBe(symbolValue)

      const callback = () => 'result'
      expect(getFirst(callback)).toBe(callback)
    })
  })

  describe('Falsy values and sparse arrays', () => {
    it('should return numeric 0 when it is the first element', () => {
      expect(getFirst([0, 10, 20])).toBe(0)
      expect(getFirst({ a: 0, b: 10 })).toBe(0)
    })

    it('should return boolean false when it is the first element', () => {
      expect(getFirst([false, true])).toBe(false)
      expect(getFirst({ a: false, b: true })).toBe(false)
    })

    it('should return empty string when it is the first element', () => {
      expect(getFirst(['', 'hello'])).toBe('')
      expect(getFirst({ a: '', b: 'text' })).toBe('')
    })

    it('should return null when it is the first element', () => {
      expect(getFirst([null, 1, 2])).toBeNull()
      expect(getFirst({ a: null, b: 1 })).toBeNull()
    })

    it('should return undefined when it is the first element', () => {
      expect(getFirst([undefined, 1, 2])).toBeUndefined()
      expect(getFirst({ a: undefined, b: 1 })).toBeUndefined()
    })

    it('should handle sparse arrays with holes correctly', () => {
      // eslint-disable-next-line no-sparse-arrays
      const sparseWithLeadingHole = [, 2, 3]
      expect(getFirst(sparseWithLeadingHole)).toBeUndefined()

      // eslint-disable-next-line no-sparse-arrays
      const sparseWithMiddleHole = [1, , 3]
      expect(getFirst(sparseWithMiddleHole)).toBe(1)
    })
  })

  describe('Object key ordering and indexing', () => {
    it('should respect integer key ordering according to ES specification', () => {
      const objectWithIntegerKeys = {
        10: 'ten',
        2: 'two',
        1: 'one'
      }
      expect(getFirst(objectWithIntegerKeys)).toBe('one')
    })

    it('should respect string key insertion order', () => {
      const targetObject = {
        z: 'firstInserted',
        a: 'secondInserted',
        m: 'thirdInserted'
      }
      expect(getFirst(targetObject)).toBe('firstInserted')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should return Cyrillic elements correctly', () => {
      expect(getFirst(['первый', 'второй', 'последний'])).toBe('первый')
      expect(getFirst({ старт: 'начало', финал: 'конец' })).toBe('начало')
    })

    it('should return Vietnamese elements correctly', () => {
      expect(getFirst(['đầu tiên', 'thứ hai', 'cuối cùng'])).toBe('đầu tiên')
      expect(getFirst({ batDau: 'Bắt đầu', ketThuc: 'Kết thúc' })).toBe('Bắt đầu')
    })

    it('should return CJK elements correctly', () => {
      expect(getFirst(['最初', '中間', '最後'])).toBe('最初')
      expect(getFirst({ start: '最初', end: '完了' })).toBe('最初')
    })

    it('should return multibyte Emojis correctly', () => {
      expect(getFirst(['🚀', '🔥', '✨'])).toBe('🚀')
      expect(getFirst({ first: '🇻🇳', last: '🎉' })).toBe('🇻🇳')
    })
  })

  describe('Statefulness and immutability', () => {
    it('should not mutate the input array', () => {
      const original = [1, 2, 3]
      const copy = [...original]
      getFirst(original)
      expect(original).toEqual(copy)
    })

    it('should not mutate the input object', () => {
      const original = { a: 1, b: 2 }
      const copy = { ...original }
      getFirst(original)
      expect(original).toEqual(copy)
    })

    it('should produce deterministic output across repeated calls', () => {
      const items = ['a', 'b', 'c']
      expect(getFirst(items)).toBe('a')
      expect(getFirst(items)).toBe('a')
      expect(getFirst(items)).toBe('a')
    })
  })
})
