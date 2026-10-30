import { describe, it, expect } from 'vitest'
import { anyToString } from '../anyToString'

describe('anyToString', () => {
  describe('Strings and trimming behavior', () => {
    it('should return a trimmed string if the input is a string and trim is true (default)', () => {
      expect(anyToString(' test ')).toBe('test')
      expect(anyToString('test')).toBe('test')
      expect(anyToString('  multi  word  string  ')).toBe('multi  word  string')
      expect(anyToString(' test ', { trim: true })).toBe('test')
    })

    it('should NOT trim the string if trim option is false', () => {
      expect(anyToString(' test ', { trim: false })).toBe(' test ')
      expect(anyToString('   ', { trim: false })).toBe('   ')
      expect(anyToString('\t\nhello\r\n', { trim: false })).toBe('\t\nhello\r\n')
    })

    it('should handle empty strings and whitespace-only strings', () => {
      expect(anyToString('')).toBe('')
      expect(anyToString('   ')).toBe('')
      expect(anyToString('\t\n\r')).toBe('')
    })

    it('should support multilingual characters, diacritics, and emojis', () => {
      expect(anyToString('  Привет мир  ')).toBe('Привет мир')
      expect(anyToString('  Học tiếng Việt  ')).toBe('Học tiếng Việt')
      expect(anyToString('  🚀 Antigravity ✨  ')).toBe('🚀 Antigravity ✨')
      expect(anyToString('  你好，世界  ')).toBe('你好，世界')
    })
  })

  describe('Nullish and falsy values', () => {
    it('should return an empty string for null', () => {
      expect(anyToString(null)).toBe('')
    })

    it('should return an empty string for undefined', () => {
      expect(anyToString(undefined)).toBe('')
    })

    it('should return an empty string when called without arguments', () => {
      expect(anyToString()).toBe('')
    })
  })

  describe('Booleans and isBooleanString option', () => {
    it('should return "1" for true and "0" for false by default (isBooleanString: false)', () => {
      expect(anyToString(true)).toBe('1')
      expect(anyToString(false)).toBe('0')
      expect(anyToString(true, { isBooleanString: false })).toBe('1')
      expect(anyToString(false, { isBooleanString: false })).toBe('0')
    })

    it('should return "true" for true and "false" for false when isBooleanString is true', () => {
      expect(anyToString(true, { isBooleanString: true })).toBe('true')
      expect(anyToString(false, { isBooleanString: true })).toBe('false')
    })
  })

  describe('Numbers and numeric boundaries', () => {
    it('should convert standard positive integers and zero to string', () => {
      expect(anyToString(123)).toBe('123')
      expect(anyToString(0)).toBe('0')
    })

    it('should convert negative numbers and negative zero to string', () => {
      expect(anyToString(-42)).toBe('-42')
      expect(anyToString(-0)).toBe('0')
    })

    it('should convert floating point decimals correctly', () => {
      expect(anyToString(3.14159)).toBe('3.14159')
      expect(anyToString(0.0001)).toBe('0.0001')
    })

    it('should handle special numeric values (NaN, Infinity, -Infinity)', () => {
      expect(anyToString(NaN)).toBe('NaN')
      expect(anyToString(Infinity)).toBe('Infinity')
      expect(anyToString(-Infinity)).toBe('-Infinity')
    })
  })

  describe('Arrays and isArrayString option features', () => {
    it('should join primitive arrays with commas when isArrayString is true (default)', () => {
      expect(anyToString([1, 2, 3])).toBe('1,2,3')
      expect(anyToString(['a', 'b', 'c'])).toBe('a,b,c')
      expect(anyToString(['single'])).toBe('single')
    })

    it('should return an empty string for an empty array when isArrayString is true', () => {
      expect(anyToString([])).toBe('')
      expect(anyToString([], { isArrayString: true })).toBe('')
    })

    it('should return stringified JSON for an array if isArrayString is false', () => {
      expect(anyToString([1, 2, 3], { isArrayString: false })).toBe('[1,2,3]')
      expect(anyToString(['a', 'b'], { isArrayString: false })).toBe('["a","b"]')
      expect(anyToString([], { isArrayString: false })).toBe('[]')
    })

    it('should return stringified JSON for arrays containing objects, regardless of isArrayString', () => {
      expect(anyToString([{ a: 1 }, 2])).toBe('[{"a":1},2]')
      expect(anyToString([{ a: 1 }, 2], { isArrayString: true })).toBe('[{"a":1},2]')
      expect(anyToString([{ a: 1 }, 2], { isArrayString: false })).toBe('[{"a":1},2]')
    })

    it('should return stringified JSON for nested arrays', () => {
      expect(anyToString([[1], [2]])).toBe('[[1],[2]]')
      expect(anyToString([[1, 2], [3, 4]], { isArrayString: true })).toBe('[[1,2],[3,4]]')
    })

    it('should join arrays with boolean values using native join without converting them to 1/0', () => {
      expect(anyToString([true, false])).toBe('true,false')
      expect(anyToString([true, false], { isArrayString: false })).toBe('[true,false]')
    })

    it('should join arrays containing null and undefined with empty slots', () => {
      expect(anyToString([1, null, undefined, 2])).toBe('1,,,2')
      expect(anyToString([1, null, undefined, 2], { isArrayString: false })).toBe('[1,null,null,2]')
    })
  })

  describe('Objects and JSON serialization', () => {
    it('should return stringified JSON for standard plain objects', () => {
      expect(anyToString({ a: 1 })).toBe('{"a":1}')
      expect(anyToString({ key: 'value', count: 42, active: true })).toBe('{"key":"value","count":42,"active":true}')
      expect(anyToString({})).toBe('{}')
    })

    it('should handle prototype-less objects created via Object.create(null)', () => {
      const nullPrototypeObject = Object.create(null) as Record<string, unknown>
      nullPrototypeObject.key = 'value'
      expect(anyToString(nullPrototypeObject)).toBe('{"key":"value"}')
    })

    it('should handle circular references in standard objects by falling back to String()', () => {
      const circularObject: Record<string, unknown> = { a: 1 }
      circularObject.self = circularObject
      expect(anyToString(circularObject)).toBe('[object Object]')
    })

    it('should safely handle circular references in prototype-less objects (Object.create(null)) without throwing', () => {
      const circularNullObject = Object.create(null) as Record<string, unknown>
      circularNullObject.self = circularNullObject
      expect(anyToString(circularNullObject)).toBe('[object Object]')
    })

    it('should respect custom toJSON methods on objects', () => {
      const customJson = {
        id: 10,
        toJSON: () => ({ serializedId: 10 })
      }
      expect(anyToString(customJson)).toBe('{"serializedId":10}')
    })

    it('should safely fall back to Object.prototype.toString when JSON.stringify and String() both throw', () => {
      const throwingCircular: Record<string, unknown> = {}
      throwingCircular.self = throwingCircular
      throwingCircular.toString = () => {
        throw new Error('toString failure')
      }
      expect(anyToString(throwingCircular)).toBe('[object Object]')
    })
  })

  describe('Special JavaScript types', () => {
    it('should handle BigInt values', () => {
      expect(anyToString(BigInt(123))).toBe('123')
      expect(anyToString(0n)).toBe('0')
      expect(anyToString(-999n)).toBe('-999')
    })

    it('should handle Symbol values', () => {
      const symbolValue = Symbol('test')
      expect(anyToString(symbolValue)).toBe('Symbol(test)')
      expect(anyToString(Symbol())).toBe('Symbol()')
    })

    it('should handle function expressions and arrow functions', () => {
      const callback = () => 'test'
      expect(anyToString(callback)).toContain('() =>')

      function namedFunction() {
        return 42
      }
      expect(anyToString(namedFunction)).toContain('function namedFunction()')
    })

    it('should serialize Date objects via JSON.stringify with quotes', () => {
      const date = new Date('2026-01-01T00:00:00.000Z')
      expect(anyToString(date)).toBe('"2026-01-01T00:00:00.000Z"')
    })

    it('should serialize RegExp as empty JSON object because it has no enumerable properties', () => {
      expect(anyToString(/abc/g)).toBe('{}')
    })
  })
})
