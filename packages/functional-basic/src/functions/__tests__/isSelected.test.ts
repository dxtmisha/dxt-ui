import { describe, expect, it } from 'vitest'
import { isSelected } from '../isSelected'

describe('isSelected', () => {
  describe('Null and undefined checks (null-safety)', () => {
    it('should return false if value is null', () => {
      expect(isSelected(null, 1)).toBe(false)
      expect(isSelected(null, null)).toBe(false)
      expect(isSelected(null, [null])).toBe(false)
    })

    it('should return false if value is undefined', () => {
      expect(isSelected(undefined, 1)).toBe(false)
      expect(isSelected(undefined, undefined)).toBe(false)
      expect(isSelected(undefined, [undefined])).toBe(false)
    })

    it('should return false when selected is undefined or omitted', () => {
      expect(isSelected('apple')).toBe(false)
      expect(isSelected('apple', undefined)).toBe(false)
      expect(isSelected(0, undefined)).toBe(false)
    })

    it('should return false when selected is null and value is not null', () => {
      expect(isSelected('apple', null)).toBe(false)
      expect(isSelected(123, null)).toBe(false)
    })
  })

  describe('Strict equality comparison (primitives and objects)', () => {
    it('should return true when string matches exactly', () => {
      expect(isSelected('apple', 'apple')).toBe(true)
      expect(isSelected('apple', 'banana')).toBe(false)
      expect(isSelected('', '')).toBe(true)
      expect(isSelected('', ' ')).toBe(false)
    })

    it('should return true when boolean matches exactly', () => {
      expect(isSelected(true, true)).toBe(true)
      expect(isSelected(false, false)).toBe(true)
      expect(isSelected(true, false)).toBe(false)
      expect(isSelected(false, true)).toBe(false)
    })

    it('should compare objects and symbols by reference', () => {
      const firstObject = { id: 1 }
      const secondObject = { id: 1 }
      const testSymbol = Symbol('test')

      expect(isSelected(firstObject, firstObject)).toBe(true)
      expect(isSelected(firstObject, secondObject)).toBe(false)
      expect(isSelected(testSymbol, testSymbol)).toBe(true)
      expect(isSelected(testSymbol, Symbol('test'))).toBe(false)
    })
  })

  describe('Numeric comparison (numbers and numeric strings)', () => {
    it('should match identical numbers', () => {
      expect(isSelected(5, 5)).toBe(true)
      expect(isSelected(0, 0)).toBe(true)
      expect(isSelected(-10, -10)).toBe(true)
      expect(isSelected(3.14, 3.14)).toBe(true)
    })

    it('should match number with equivalent numeric string', () => {
      expect(isSelected('5', 5)).toBe(true)
      expect(isSelected(5, '5')).toBe(true)
      expect(isSelected('0', 0)).toBe(true)
      expect(isSelected(0, '0')).toBe(true)
      expect(isSelected('-42', -42)).toBe(true)
      expect(isSelected(-42, '-42')).toBe(true)
      expect(isSelected('3.14', 3.14)).toBe(true)
    })

    it('should return false for different numbers or numeric strings', () => {
      expect(isSelected(5, 6)).toBe(false)
      expect(isSelected('5', '6')).toBe(false)
      expect(isSelected('5', 6)).toBe(false)
      expect(isSelected(0, 1)).toBe(false)
    })

    it('should return false when comparing a number against a non-numeric string or vice versa', () => {
      expect(isSelected(5, 'apple')).toBe(false)
      expect(isSelected('apple', 5)).toBe(false)
      expect(isSelected(0, '')).toBe(false)
      expect(isSelected('', 0)).toBe(false)
    })
  })

  describe('Array selection comparison', () => {
    it('should return true if value is directly in array', () => {
      expect(isSelected(2, [1, 2, 3])).toBe(true)
      expect(isSelected('apple', ['banana', 'apple', 'cherry'])).toBe(true)
      expect(isSelected(false, [true, false])).toBe(true)
    })

    it('should return false if value is not in array', () => {
      expect(isSelected(4, [1, 2, 3])).toBe(false)
      expect(isSelected('date', ['banana', 'apple', 'cherry'])).toBe(false)
      expect(isSelected('item', [])).toBe(false)
    })

    it('should match numeric strings with numbers in array (consistent behavior)', () => {
      expect(isSelected('5', [1, 2, 5])).toBe(true)
      expect(isSelected(5, ['1', '2', '5'])).toBe(true)
      expect(isSelected('0', [1, 0, 2])).toBe(true)
      expect(isSelected(0, ['1', '0', '2'])).toBe(true)
      expect(isSelected('-5', [10, -5, 20])).toBe(true)
    })

    it('should handle mixed arrays containing non-numeric items when matching numbers', () => {
      expect(isSelected(5, ['apple', null, undefined, '5'])).toBe(true)
      expect(isSelected('5', ['apple', false, 5])).toBe(true)
      expect(isSelected(5, ['apple', null, undefined, '10'])).toBe(false)
    })

    it('should return false if numeric value is not in numeric array', () => {
      expect(isSelected('99', [1, 2, 5])).toBe(false)
      expect(isSelected(99, ['1', '2', '5'])).toBe(false)
    })

    it('should match object by reference in array without mutating the array', () => {
      const targetItem = { id: 42 }
      const list = [{ id: 1 }, targetItem, { id: 2 }]
      const snapshot = [...list]

      expect(isSelected(targetItem, list)).toBe(true)
      expect(isSelected({ id: 42 }, list)).toBe(false)
      expect(list).toEqual(snapshot)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should accurately match Cyrillic, Vietnamese, CJK, and Emoji values', () => {
      expect(isSelected('Привет', ['Здравствуйте', 'Привет'])).toBe(true)
      expect(isSelected('tiếng Việt', 'tiếng Việt')).toBe(true)
      expect(isSelected('こんにちは', ['你好', 'こんにちは'])).toBe(true)
      expect(isSelected('🚀', ['🔥', '🚀'])).toBe(true)
    })
  })
})
