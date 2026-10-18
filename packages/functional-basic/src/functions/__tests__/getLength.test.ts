import { describe, it, expect } from 'vitest'
import { getLength } from '../getLength'

describe('getLength', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return length of an array', () => {
      expect(getLength([1, 2, 3])).toBe(3)
      expect(getLength(['a', 'b', 'c', 'd'])).toBe(4)
      expect(getLength([true, null, 'string', {}])).toBe(4)
    })

    it('should return length of a string', () => {
      expect(getLength('hello')).toBe(5)
      expect(getLength('hello world')).toBe(11)
    })

    it('should return size of a Map', () => {
      const map = new Map<string, number>()
      map.set('a', 1)
      map.set('b', 2)
      map.set('c', 3)
      expect(getLength(map)).toBe(3)
    })

    it('should return size of a Set', () => {
      const set = new Set([1, 2, 3, 3])
      expect(getLength(set)).toBe(3)
    })

    it('should return key count of an object', () => {
      expect(getLength({ a: 1, b: 2, c: 3 })).toBe(3)
      expect(getLength({ first: 'val', second: 42 })).toBe(2)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return 0 for null and undefined', () => {
      expect(getLength(null)).toBe(0)
      expect(getLength(undefined)).toBe(0)
    })

    it('should return 0 for empty array', () => {
      expect(getLength([])).toBe(0)
    })

    it('should return 0 for empty string', () => {
      expect(getLength('')).toBe(0)
    })

    it('should return 0 for empty Map', () => {
      expect(getLength(new Map())).toBe(0)
    })

    it('should return 0 for empty Set', () => {
      expect(getLength(new Set())).toBe(0)
    })

    it('should return 0 for empty object', () => {
      expect(getLength({})).toBe(0)
    })
  })

  describe('Unsupported primitives and special types', () => {
    it('should return 0 for numeric values (0, positive, negative, float, NaN, Infinity)', () => {
      expect(getLength(0)).toBe(0)
      expect(getLength(-0)).toBe(0)
      expect(getLength(42)).toBe(0)
      expect(getLength(-100)).toBe(0)
      expect(getLength(3.14159)).toBe(0)
      expect(getLength(NaN)).toBe(0)
      expect(getLength(Infinity)).toBe(0)
      expect(getLength(-Infinity)).toBe(0)
    })

    it('should return 0 for boolean values', () => {
      expect(getLength(true)).toBe(0)
      expect(getLength(false)).toBe(0)
    })

    it('should return 0 for BigInt values', () => {
      expect(getLength(BigInt(0))).toBe(0)
      expect(getLength(BigInt(100))).toBe(0)
    })

    it('should return 0 for Symbol values', () => {
      expect(getLength(Symbol('test'))).toBe(0)
      expect(getLength(Symbol(''))).toBe(0)
    })

    it('should return 0 for functions instead of leaking function arity', () => {
      const fn = (a: number, b: number, c: number) => a + b + c
      expect(getLength(fn)).toBe(0)

      const emptyFn = () => {}
      expect(getLength(emptyFn)).toBe(0)
    })
  })

  describe('Non-plain objects and instance types', () => {
    it('should return 0 for Date instances without own properties', () => {
      expect(getLength(new Date())).toBe(0)
    })

    it('should return 0 for RegExp instances without own properties', () => {
      expect(getLength(/test/gi)).toBe(0)
    })

    it('should return 0 for Error instances without own enumerable properties', () => {
      expect(getLength(new Error('test'))).toBe(0)
    })

    it('should ignore Symbol keys on objects according to Object.keys specification', () => {
      const symKey = Symbol('sym')
      const obj = {
        [symKey]: 'hidden',
        visible: 'yes'
      }
      expect(getLength(obj)).toBe(1)
    })
  })

  describe('Dynamic collections and mutability', () => {
    it('should accurately reflect Map modifications (add, update, delete)', () => {
      const map = new Map<string, string>()
      map.set('k1', 'v1')
      map.set('k2', 'v2')
      expect(getLength(map)).toBe(2)

      // update existing key does not increase size
      map.set('k1', 'updated')
      expect(getLength(map)).toBe(2)

      map.delete('k2')
      expect(getLength(map)).toBe(1)

      map.clear()
      expect(getLength(map)).toBe(0)
    })

    it('should accurately reflect Set modifications (add unique, add duplicates, delete)', () => {
      const set = new Set<number>()
      set.add(1)
      set.add(2)
      expect(getLength(set)).toBe(2)

      // duplicate add does not change size
      set.add(1)
      expect(getLength(set)).toBe(2)

      set.delete(2)
      expect(getLength(set)).toBe(1)

      set.clear()
      expect(getLength(set)).toBe(0)
    })

    it('should not mutate the input array or object', () => {
      const arr = [1, 2, 3]
      const arrCopy = [...arr]
      getLength(arr)
      expect(arr).toEqual(arrCopy)

      const obj = { a: 1, b: 2 }
      const objCopy = { ...obj }
      getLength(obj)
      expect(obj).toEqual(objCopy)
    })
  })

  describe('Multilingual and Unicode strings', () => {
    it('should return character length for Cyrillic strings', () => {
      expect(getLength('Привет')).toBe(6)
      expect(getLength('Длина строки')).toBe(12)
    })

    it('should return character length for Vietnamese diacritics', () => {
      expect(getLength('Xin chào')).toBe(8)
      expect(getLength('Đà Nẵng')).toBe(7)
    })

    it('should return character length for CJK strings', () => {
      expect(getLength('こんにちは')).toBe(5)
      expect(getLength('你好世界')).toBe(4)
      expect(getLength('안녕하세요')).toBe(5)
    })

    it('should return native JavaScript string length for Emojis', () => {
      // Standard UTF-16 code units length
      expect(getLength('🚀')).toBe(2)
      expect(getLength('🔥')).toBe(2)
      expect(getLength('✨')).toBe(1)
      expect(getLength('🔥✨')).toBe(3)
      expect(getLength('🚀🎉')).toBe(4)
    })
  })
})
