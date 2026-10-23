import { describe, it, expect } from 'vitest'
import { arrFill } from '../arrFill'

describe('arrFill', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should create an array of specified length filled with primitive string values', () => {
      const result = arrFill('item', 3)
      expect(result).toEqual(['item', 'item', 'item'])
      expect(result).toHaveLength(3)
    })

    it('should create an array filled with numbers', () => {
      const result = arrFill(42, 5)
      expect(result).toEqual([42, 42, 42, 42, 42])
      expect(result).toHaveLength(5)
    })

    it('should create an array filled with boolean values', () => {
      const resultTrue = arrFill(true, 3)
      expect(resultTrue).toEqual([true, true, true])
      expect(resultTrue).toHaveLength(3)

      const resultFalse = arrFill(false, 3)
      expect(resultFalse).toEqual([false, false, false])
      expect(resultFalse).toHaveLength(3)
    })

    it('should create an array filled with functions', () => {
      const callback = () => 'test'
      const result = arrFill(callback, 2)
      expect(result).toHaveLength(2)
      expect(result[0]).toBe(callback)
      expect(result[1]).toBe(callback)
      expect(result[0]()).toBe('test')
    })

    it('should create an array filled with symbols', () => {
      const symbolValue = Symbol('unique')
      const result = arrFill(symbolValue, 3)
      expect(result).toEqual([symbolValue, symbolValue, symbolValue])
      expect(result[0]).toBe(symbolValue)
      expect(result[1]).toBe(symbolValue)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return an empty array when count is 0', () => {
      const result = arrFill('test', 0)
      expect(result).toEqual([])
      expect(result).toHaveLength(0)
    })

    it('should return a single-element array when count is 1', () => {
      const result = arrFill('single', 1)
      expect(result).toEqual(['single'])
      expect(result).toHaveLength(1)
    })

    it('should handle large counts properly without performance degradation', () => {
      const count = 10000
      const result = arrFill(0, count)
      expect(result).toHaveLength(count)
      expect(result[0]).toBe(0)
      expect(result[count - 1]).toBe(0)
    })

    it('should throw RangeError when count is negative', () => {
      expect(() => arrFill('test', -1)).toThrow(RangeError)
      expect(() => arrFill('test', -100)).toThrow(RangeError)
    })

    it('should throw RangeError when count is a non-integer float', () => {
      expect(() => arrFill('test', 3.14)).toThrow(RangeError)
      expect(() => arrFill('test', 0.5)).toThrow(RangeError)
    })

    it('should throw RangeError when count is NaN or infinite', () => {
      expect(() => arrFill('test', NaN)).toThrow(RangeError)
      expect(() => arrFill('test', Infinity)).toThrow(RangeError)
      expect(() => arrFill('test', -Infinity)).toThrow(RangeError)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should handle empty string as fill value', () => {
      const result = arrFill('', 3)
      expect(result).toEqual(['', '', ''])
      expect(result).toHaveLength(3)
    })

    it('should handle whitespace-only strings (spaces, tabs, newlines)', () => {
      expect(arrFill('   ', 2)).toEqual(['   ', '   '])
      expect(arrFill('\t\n\r', 2)).toEqual(['\t\n\r', '\t\n\r'])
    })

    it('should handle null as fill value', () => {
      const result = arrFill(null, 3)
      expect(result).toEqual([null, null, null])
      expect(result).toHaveLength(3)
    })

    it('should handle undefined as fill value', () => {
      const result = arrFill(undefined, 3)
      expect(result).toEqual([undefined, undefined, undefined])
      expect(result).toHaveLength(3)
    })

    it('should handle empty arrays and empty objects as fill values', () => {
      const emptyArray = arrFill([], 2)
      expect(emptyArray).toEqual([[], []])

      const emptyObject = arrFill({}, 2)
      expect(emptyObject).toEqual([{}, {}])
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should preserve falsy number 0 and negative zero -0', () => {
      const resultZero = arrFill(0, 3)
      expect(resultZero).toEqual([0, 0, 0])
      expect(Object.is(resultZero[0], 0)).toBe(true)

      const resultNegativeZero = arrFill(-0, 2)
      expect(resultNegativeZero).toEqual([-0, -0])
      expect(Object.is(resultNegativeZero[0], -0)).toBe(true)
    })

    it('should handle negative numbers and float numbers as values', () => {
      expect(arrFill(-42, 2)).toEqual([-42, -42])
      expect(arrFill(3.14159, 2)).toEqual([3.14159, 3.14159])
    })

    it('should handle special numeric values (NaN, Infinity, -Infinity) as values', () => {
      const nanResult = arrFill(NaN, 2)
      expect(nanResult).toHaveLength(2)
      expect(Number.isNaN(nanResult[0])).toBe(true)
      expect(Number.isNaN(nanResult[1])).toBe(true)

      expect(arrFill(Infinity, 2)).toEqual([Infinity, Infinity])
      expect(arrFill(-Infinity, 2)).toEqual([-Infinity, -Infinity])
    })

    it('should handle BigInt values', () => {
      const bigIntValue = 9007199254740991n
      const result = arrFill(bigIntValue, 2)
      expect(result).toEqual([bigIntValue, bigIntValue])
    })
  })

  describe('Reference sharing and mutation isolation', () => {
    it('should share identical object references across all filled slots', () => {
      const user = { name: 'Alice', role: 'admin' }
      const result = arrFill(user, 3)

      expect(result[0]).toBe(user)
      expect(result[1]).toBe(user)
      expect(result[2]).toBe(user)
      expect(result[0]).toBe(result[1])

      result[0].role = 'editor'
      expect(result[1].role).toBe('editor')
      expect(result[2].role).toBe('editor')
      expect(user.role).toBe('editor')
    })

    it('should share identical nested array references across all filled slots', () => {
      const nestedList = [1, 2]
      const result = arrFill(nestedList, 2)

      expect(result[0]).toBe(nestedList)
      expect(result[1]).toBe(nestedList)

      result[0].push(3)
      expect(result[1]).toEqual([1, 2, 3])
      expect(nestedList).toEqual([1, 2, 3])
    })

    it('should not mutate original primitive values or external arguments', () => {
      const originalValue = 'immutable-test'
      const count = 4
      const result = arrFill(originalValue, count)

      expect(result).toHaveLength(count)
      expect(originalValue).toBe('immutable-test')
      expect(count).toBe(4)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic characters properly', () => {
      const result = arrFill('Привет, мир!', 2)
      expect(result).toEqual(['Привет, мир!', 'Привет, мир!'])
    })

    it('should handle Vietnamese diacritics properly', () => {
      const vietnameseText = 'Học tiếng Việt rất thú vị'
      const result = arrFill(vietnameseText, 2)
      expect(result).toEqual([vietnameseText, vietnameseText])
    })

    it('should handle CJK characters and emojis properly', () => {
      const cjkResult = arrFill('你好世界', 2)
      expect(cjkResult).toEqual(['你好世界', '你好世界'])

      const emojiResult = arrFill('🚀✨🔥', 3)
      expect(emojiResult).toEqual(['🚀✨🔥', '🚀✨🔥', '🚀✨🔥'])
    })
  })

  describe('Array characteristics, density, and standard iteration', () => {
    it('should produce a dense array where map, filter, and forEach visit every slot', () => {
      const result = arrFill('item', 3)
      let visitedCount = 0

      result.forEach(() => {
        visitedCount++
      })
      expect(visitedCount).toBe(3)

      const mapped = result.map((value, index) => `${value}-${index}`)
      expect(mapped).toEqual(['item-0', 'item-1', 'item-2'])

      const filtered = result.filter(value => value === 'item')
      expect(filtered).toHaveLength(3)
    })

    it('should support array spreading and destructuring correctly', () => {
      const result = arrFill(7, 3)
      const spreadArray = [...result]
      expect(spreadArray).toEqual([7, 7, 7])

      const [first, second, third] = result
      expect(first).toBe(7)
      expect(second).toBe(7)
      expect(third).toBe(7)
    })
  })
})
