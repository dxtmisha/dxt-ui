import { describe, it, expect } from 'vitest'
import { toString } from '../toString'

describe('toString', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return identical string for plain string inputs', () => {
      expect(toString('hello world')).toBe('hello world')
      expect(toString('dxt-ui')).toBe('dxt-ui')
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

    it('should handle String object wrapper instances', () => {
      expect(toString(new String('wrapped text'))).toBe('wrapped text')
    })

    it('should preserve template literal interpolations', () => {
      const name = 'Antigravity'
      const version = 2
      expect(toString(`${name} v${version}`)).toBe('Antigravity v2')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle single character string', () => {
      expect(toString('a')).toBe('a')
    })

    it('should handle extremely long strings without truncation', () => {
      const longString = 'x'.repeat(50000)
      const result = toString(longString)
      expect(result).toBe(longString)
      expect(result.length).toBe(50000)
    })

    it('should convert safe integer boundaries (MAX_SAFE_INTEGER, MIN_SAFE_INTEGER)', () => {
      expect(toString(Number.MAX_SAFE_INTEGER)).toBe('9007199254740991')
      expect(toString(Number.MIN_SAFE_INTEGER)).toBe('-9007199254740991')
    })

    it('should convert extreme floating point boundaries (MAX_VALUE, MIN_VALUE, EPSILON)', () => {
      expect(toString(Number.MAX_VALUE)).toBe(String(Number.MAX_VALUE))
      expect(toString(Number.MIN_VALUE)).toBe(String(Number.MIN_VALUE))
      expect(toString(Number.EPSILON)).toBe(String(Number.EPSILON))
    })

    it('should convert extremely large BigInt numbers', () => {
      const bigNumber = 10n ** 60n
      expect(toString(bigNumber)).toBe(bigNumber.toString())
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return empty string for empty string input', () => {
      expect(toString('')).toBe('')
    })

    it('should return empty string for null', () => {
      expect(toString(null)).toBe('')
    })

    it('should return empty string for undefined', () => {
      expect(toString(undefined)).toBe('')
      expect(toString(void 0)).toBe('')
    })

    it('should return empty string for empty array', () => {
      expect(toString([])).toBe('')
    })

    it('should preserve whitespace-only strings without converting to empty string', () => {
      expect(toString(' ')).toBe(' ')
      expect(toString('   ')).toBe('   ')
      expect(toString('\t')).toBe('\t')
      expect(toString('\n')).toBe('\n')
      expect(toString('\r\n')).toBe('\r\n')
      expect(toString(' \t\n\r ')).toBe(' \t\n\r ')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    describe('Numbers and BigInt', () => {
      it('should safely convert number 0 and -0 without returning empty string', () => {
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

      it('should convert BigInt values (0n, positive, negative)', () => {
        expect(toString(0n)).toBe('0')
        expect(toString(100n)).toBe('100')
        expect(toString(-42n)).toBe('-42')
      })
    })

    describe('Booleans', () => {
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

      it('should convert well-known Symbols', () => {
        expect(toString(Symbol.iterator)).toBe('Symbol(Symbol.iterator)')
        expect(toString(Symbol.toStringTag)).toBe('Symbol(Symbol.toStringTag)')
      })
    })

    describe('Objects and custom serialization', () => {
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

      it('should respect Symbol.toPrimitive implementation on objects', () => {
        const primitiveObj = {
          [Symbol.toPrimitive](hint: string) {
            return `hint:${hint}`
          }
        }
        expect(toString(primitiveObj)).toBe('hint:string')
      })
    })

    describe('Arrays and collections', () => {
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

    describe('Built-in objects (RegExp, Date, Error, Map, Set)', () => {
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

      it('should convert Map and Set collections to their default string tag', () => {
        expect(toString(new Map())).toBe('[object Map]')
        expect(toString(new Set())).toBe('[object Set]')
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

      it('should convert async function to string', () => {
        async function asyncFunction() {
          return 'done'
        }
        expect(toString(asyncFunction)).toContain('async function asyncFunction')
      })
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should preserve HTML and script tags verbatim without modification or sanitization', () => {
      const payload = '<script>alert("xss")</script>'
      expect(toString(payload)).toBe(payload)
      const html = '<span class="sys-highlight">text</span>'
      expect(toString(html)).toBe(html)
    })

    it('should preserve regex metacharacters verbatim', () => {
      const metacharacters = '.*+?^${}()|[]\\/'
      expect(toString(metacharacters)).toBe(metacharacters)
    })

    it('should preserve SQL-like injection strings verbatim', () => {
      const sql = 'SELECT * FROM users WHERE id = \'1\' OR \'1\'=\'1\';'
      expect(toString(sql)).toBe(sql)
    })

    it('should preserve quotes, dollar signs, and special punctuation', () => {
      const specialText = '`$100` "${test}" \'quoted\' @#%&*~'
      expect(toString(specialText)).toBe(specialText)
    })

    it('should preserve raw JSON strings verbatim', () => {
      const json = JSON.stringify({ key: 'value', count: 10, nested: { active: true } })
      expect(toString(json)).toBe(json)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic text', () => {
      expect(toString('Привет, мир!')).toBe('Привет, мир!')
      expect(toString('Строка с символами ё, ъ, ы')).toBe('Строка с символами ё, ъ, ы')
    })

    it('should preserve Vietnamese text with tone marks and diacritics', () => {
      expect(toString('Học tiếng Việt mỗi ngày')).toBe('Học tiếng Việt mỗi ngày')
      expect(toString('Đà Nẵng, Việt Nam')).toBe('Đà Nẵng, Việt Nam')
    })

    it('should preserve European accented characters', () => {
      expect(toString('Café au lait')).toBe('Café au lait')
      expect(toString('Über den Wolken')).toBe('Über den Wolken')
      expect(toString('Año nuevo')).toBe('Año nuevo')
    })

    it('should preserve CJK characters', () => {
      expect(toString('你好 世界')).toBe('你好 世界')
      expect(toString('こんにちは')).toBe('こんにちは')
      expect(toString('안녕하세요')).toBe('안녕하세요')
    })

    it('should preserve emojis, surrogate pairs, and composite sequences', () => {
      expect(toString('🚀 🔥 ✨')).toBe('🚀 🔥 ✨')
      expect(toString('👩‍💻 developer')).toBe('👩‍💻 developer')
      expect(toString('👨‍👩‍👧‍👦 family')).toBe('👨‍👩‍👧‍👦 family')
    })

    it('should preserve Right-to-Left (RTL) Arabic and Hebrew text', () => {
      expect(toString('مرحبا بالعالم')).toBe('مرحبا بالعالم')
      expect(toString('שלום עולם')).toBe('שלום עולם')
    })

    it('should preserve mathematical and special Unicode symbols', () => {
      expect(toString('∑ ∞ ≈ ≠ √ π ‰ ™ © ®')).toBe('∑ ∞ ≈ ≠ √ π ‰ ™ © ®')
    })
  })

  describe('Purity, determinism, and immutability', () => {
    it('should return identical results across repeated calls (deterministic)', () => {
      const input = { a: 1, toString: () => 'static' }
      expect(toString(input)).toBe(toString(input))
      expect(toString(42)).toBe(toString(42))
    })

    it('should not mutate object or array inputs', () => {
      const array = [1, 2, 3]
      const arrayCopy = [...array]
      toString(array)
      expect(array).toEqual(arrayCopy)

      const object = { prop: 'value' }
      const objectCopy = { ...object }
      toString(object)
      expect(object).toEqual(objectCopy)
    })

    it('should not affect RegExp lastIndex state', () => {
      const regex = /pattern/g
      regex.lastIndex = 3
      expect(toString(regex)).toBe('/pattern/g')
      expect(regex.lastIndex).toBe(3)
    })
  })
})
