import { describe, it, expect } from 'vitest'
import { toString } from '../toString'

describe('toString', () => {
  describe('Standard string inputs', () => {
    it('should return identical string for plain string inputs', () => {
      expect(toString('hello world')).toBe('hello world')
      expect(toString('dxt-ui')).toBe('dxt-ui')
    })

    it('should return empty string for empty string input', () => {
      expect(toString('')).toBe('')
    })

    it('should preserve whitespace characters without trimming', () => {
      expect(toString('   ')).toBe('   ')
      expect(toString('\t\n\r')).toBe('\t\n\r')
      expect(toString('  spaced text  ')).toBe('  spaced text  ')
    })

    it('should preserve multiline strings', () => {
      const multiline = 'line 1\nline 2\r\nline 3'
      expect(toString(multiline)).toBe(multiline)
    })
  })

  describe('Nullish handling (null, undefined, void 0)', () => {
    it('should return empty string for null', () => {
      expect(toString(null)).toBe('')
    })

    it('should return empty string for undefined', () => {
      expect(toString(undefined)).toBe('')
      expect(toString(void 0)).toBe('')
    })
  })

  describe('Numeric types (0, negative numbers, floats, NaN, Infinity, BigInt)', () => {
    it('should safely convert number 0 without returning empty string', () => {
      expect(toString(0)).toBe('0')
      expect(toString(-0)).toBe('0')
    })

    it('should convert positive integers', () => {
      expect(toString(1)).toBe('1')
      expect(toString(42)).toBe('42')
      expect(toString(1000000)).toBe('1000000')
    })

    it('should convert negative integers', () => {
      expect(toString(-1)).toBe('-1')
      expect(toString(-42)).toBe('-42')
      expect(toString(-99999)).toBe('-99999')
    })

    it('should convert floating point and decimal numbers', () => {
      expect(toString(3.14159)).toBe('3.14159')
      expect(toString(0.5)).toBe('0.5')
      expect(toString(-0.001)).toBe('-0.001')
    })

    it('should convert special numbers (NaN, Infinity, -Infinity)', () => {
      expect(toString(NaN)).toBe('NaN')
      expect(toString(Infinity)).toBe('Infinity')
      expect(toString(-Infinity)).toBe('-Infinity')
    })

    it('should convert BigInt values', () => {
      expect(toString(0n)).toBe('0')
      expect(toString(100n)).toBe('100')
      expect(toString(-42n)).toBe('-42')
    })
  })

  describe('Boolean values (false, true)', () => {
    it('should convert false to "false" without converting to empty string', () => {
      expect(toString(false)).toBe('false')
    })

    it('should convert true to "true"', () => {
      expect(toString(true)).toBe('true')
    })
  })

  describe('Symbols', () => {
    it('should convert Symbol to its string representation', () => {
      expect(toString(Symbol('test'))).toBe('Symbol(test)')
      expect(toString(Symbol())).toBe('Symbol()')
    })
  })

  describe('Objects and custom serialization (toString)', () => {
    it('should convert plain objects to "[object Object]"', () => {
      expect(toString({})).toBe('[object Object]')
      expect(toString({ a: 1 })).toBe('[object Object]')
    })

    it('should call custom toString method on objects if implemented', () => {
      const customObject = {
        toString: () => 'custom string representation'
      }
      expect(toString(customObject)).toBe('custom string representation')
    })

    it('should handle custom objects returning dynamic values', () => {
      const counter = {
        count: 5,
        toString() {
          return `Count: ${this.count}`
        }
      }
      expect(toString(counter)).toBe('Count: 5')
    })
  })

  describe('Arrays and collections', () => {
    it('should convert empty array to empty string', () => {
      expect(toString([])).toBe('')
    })

    it('should convert single-element array to element string', () => {
      expect(toString([42])).toBe('42')
      expect(toString(['hello'])).toBe('hello')
    })

    it('should convert multi-element array to comma-separated string', () => {
      expect(toString([1, 2, 3])).toBe('1,2,3')
      expect(toString(['apple', 'banana', 'orange'])).toBe('apple,banana,orange')
    })

    it('should convert nested arrays correctly', () => {
      expect(toString([[1, 2], [3, 4]])).toBe('1,2,3,4')
    })

    it('should handle arrays with nullish elements', () => {
      expect(toString([null, undefined, 'item'])).toBe(',,item')
    })
  })

  describe('Built-in objects (RegExp, Date, Error)', () => {
    it('should convert RegExp to its string literal representation', () => {
      expect(toString(/test/i)).toBe('/test/i')
      expect(toString(new RegExp('^abc$', 'g'))).toBe('/^abc$/g')
    })

    it('should convert Date object to date string', () => {
      const date = new Date('2026-01-01T00:00:00.000Z')
      const result = toString(date)
      expect(result).toBe(date.toString())
      expect(typeof result).toBe('string')
    })

    it('should convert Error object to error string', () => {
      const error = new Error('Operation failed')
      expect(toString(error)).toBe('Error: Operation failed')
    })
  })

  describe('Functions', () => {
    it('should convert named function to string containing function definition', () => {
      function sampleFunction() {
        return 42
      }
      expect(toString(sampleFunction)).toContain('function sampleFunction')
    })

    it('should convert arrow function to string', () => {
      const arrowFunction = () => 'test'
      expect(toString(arrowFunction)).toContain('() =>')
    })
  })

  describe('Multilingual and Unicode strings', () => {
    it('should preserve Cyrillic text', () => {
      expect(toString('Привет, мир!')).toBe('Привет, мир!')
    })

    it('should preserve Vietnamese text with diacritics', () => {
      expect(toString('Học tiếng Việt')).toBe('Học tiếng Việt')
    })

    it('should preserve CJK characters', () => {
      expect(toString('你好 世界')).toBe('你好 世界')
      expect(toString('こんにちは')).toBe('こんにちは')
    })

    it('should preserve emojis', () => {
      expect(toString('🚀 🔥 ✨')).toBe('🚀 🔥 ✨')
      expect(toString('👩‍💻 developer')).toBe('👩‍💻 developer')
    })
  })
})
