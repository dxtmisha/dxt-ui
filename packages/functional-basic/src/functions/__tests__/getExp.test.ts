import { describe, it, expect } from 'vitest'
import { getExp } from '../getExp'

describe('getExp', () => {
  it('propagates invalid flags from the RegExp constructor', () => {
    expect(() => getExp('value', 'z')).toThrow(SyntaxError)
  })

  it('propagates an invalid pattern from the RegExp constructor', () => {
    expect(() => getExp('value', 'i', '[')).toThrow(SyntaxError)
  })
  describe('Standard functional requirements (Happy path)', () => {
    it('should use default flags (ig) and default pattern (:value) when not provided', () => {
      const regex = getExp('test')
      expect(regex.source).toBe('test')
      expect(regex.flags).toBe('gi')
    })

    it('should apply custom flags when provided', () => {
      const regex = getExp('test', 'm')
      expect(regex.source).toBe('test')
      expect(regex.flags).toBe('m')
    })

    it('should replace :value in custom pattern with escaped input', () => {
      const regex = getExp('query', 'i', '^:value$')
      expect(regex.source).toBe('^query$')
      expect(regex.flags).toBe('i')
      expect(regex.test('QUERY')).toBe(true)
      expect(regex.test('subquery')).toBe(false)
    })

    it('should replace multiple :value occurrences in the pattern', () => {
      const regex = getExp('word', 'i', '(^:value)|(:value$)')
      expect(regex.source).toBe('(^word)|(word$)')
      expect(regex.test('word middle')).toBe(true)
      expect(regex.test('middle word')).toBe(true)
      expect(regex.test('in word middle')).toBe(false)
    })
  })

  describe('Boundary values and empty inputs', () => {
    it('should handle empty string value', () => {
      const regex = getExp('', 'i', '^:value$')
      expect(regex.source).toBe('^$')
      expect(regex.test('')).toBe(true)
      expect(regex.test('non-empty')).toBe(false)
    })

    it('should handle undefined and null safely', () => {
      const undefinedRegex = getExp(undefined, 'i', '^:value$')
      expect(undefinedRegex.source).toBe('^$')
      expect(undefinedRegex.test('')).toBe(true)

      const nullRegex = getExp(null, 'i', '^:value$')
      expect(nullRegex.source).toBe('^$')
      expect(nullRegex.test('')).toBe(true)
    })

    it('should allow empty flags string', () => {
      const regex = getExp('CaseSensitive', '')
      expect(regex.flags).toBe('')
      expect(regex.test('CaseSensitive')).toBe(true)
      expect(regex.test('casesensitive')).toBe(false)
    })

    it('should handle pattern without :value placeholder', () => {
      const regex = getExp('ignored', 'i', '^static-pattern$')
      expect(regex.source).toBe('^static-pattern$')
      expect(regex.test('static-pattern')).toBe(true)
      expect(regex.test('ignored')).toBe(false)
    })

    it('should handle whitespace-only values', () => {
      const regex = getExp(' \t\n ', 'i', '^:value$')
      expect(regex.test(' \t\n ')).toBe(true)
      expect(regex.test(' ')).toBe(false)
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should handle numeric values including 0, negative numbers, and floats', () => {
      const zeroRegex = getExp(0, 'i', '^:value$')
      expect(zeroRegex.source).toBe('^0$')
      expect(zeroRegex.test('0')).toBe(true)

      const negativeRegex = getExp(-42, 'i', '^:value$')
      expect(negativeRegex.source).toBe('^\\x2d42$')
      expect(negativeRegex.test('-42')).toBe(true)

      const floatRegex = getExp(3.14, 'i', '^:value$')
      expect(floatRegex.source).toBe('^3\\.14$')
      expect(floatRegex.test('3.14')).toBe(true)
      expect(floatRegex.test('3X14')).toBe(false)
    })

    it('should handle boolean values (true and false)', () => {
      const trueRegex = getExp(true, 'i', '^:value$')
      expect(trueRegex.source).toBe('^true$')
      expect(trueRegex.test('true')).toBe(true)
      expect(trueRegex.test('false')).toBe(false)

      const falseRegex = getExp(false, 'i', '^:value$')
      expect(falseRegex.source).toBe('^false$')
      expect(falseRegex.test('false')).toBe(true)
      expect(falseRegex.test('true')).toBe(false)
    })

    it('should handle arrays and plain objects without throwing', () => {
      const arrayRegex = getExp(['a', 'b'], 'i', '^:value$')
      expect(arrayRegex.test('a,b')).toBe(true)

      const objectRegex = getExp({ id: 1 }, 'i', '^:value$')
      expect(objectRegex.source).toBe('^\\[object Object\\]$')
      expect(objectRegex.test('[object Object]')).toBe(true)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should escape all special regex characters including hyphen and slash', () => {
      const regex = getExp('hello-.*+?^${}()|[]\\/world')
      expect(regex.source).toBe('hello\\x2d\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\\\/world')
    })

    it('should safely escape hyphen inside character class patterns', () => {
      const regex = getExp('-', 'g', '([:value]+)')
      expect(regex.source).toBe('([\\x2d]+)')
      expect(regex.test('---')).toBe(true)
      expect(regex.test('abc')).toBe(false)
    })

    it('should match escaped metacharacters literally instead of as regex operators', () => {
      const regex = getExp('foo.bar', 'i', '^:value$')
      expect(regex.test('foo.bar')).toBe(true)
      expect(regex.test('fooXbar')).toBe(false)

      const quantifierRegex = getExp('a+b*c?', 'i', '^:value$')
      expect(quantifierRegex.test('a+b*c?')).toBe(true)
      expect(quantifierRegex.test('aaabbbc')).toBe(false)
    })

    it('should handle String.prototype.replace special replacement patterns ($&, $$, $\', $`) literally', () => {
      const regex = getExp('$& $$ $\' $` $1', 'i', '^:value$')
      expect(regex.test('$& $$ $\' $` $1')).toBe(true)
      expect(regex.test(':value')).toBe(false)
    })

    it('should handle input value containing literal :value without recursive replacement', () => {
      const regex = getExp(':value', 'i', '(:value)')
      expect(regex.source).toBe('(:value)')
      expect(regex.test(':VALUE')).toBe(true)
    })

    it('should safely escape HTML and XSS payloads', () => {
      const payload = '<script>alert(1)</script>'
      const regex = getExp(payload, 'i', '(:value)')
      expect(regex.test(payload)).toBe(true)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should match Cyrillic text with case insensitivity', () => {
      const regex = getExp('Привет', 'i', '^:value$')
      expect(regex.test('привет')).toBe(true)
      expect(regex.test('ПРИВЕТ')).toBe(true)
    })

    it('should match Vietnamese diacritics', () => {
      const regex = getExp('Tiếng Việt', 'i', '(:value)')
      expect(regex.test('Học tiếng việt')).toBe(true)
    })

    it('should match CJK and Emoji characters', () => {
      const cjkRegex = getExp('日本語', 'i', '(:value)')
      expect(cjkRegex.test('言語: 日本語')).toBe(true)

      const emojiRegex = getExp('🚀✨', 'i', '(:value)')
      expect(emojiRegex.test(' Start 🚀✨ End ')).toBe(true)
    })
  })

  describe('Statefulness and isolation', () => {
    it('should find all global matches when using default ig flags', () => {
      const regex = getExp('cat')
      const matches = Array.from('Cat, cat, and CAT'.matchAll(regex), match => match[0])
      expect(matches).toEqual(['Cat', 'cat', 'CAT'])
    })

    it('should return a new RegExp instance on every call', () => {
      const firstRegex = getExp('item')
      const secondRegex = getExp('item')
      expect(firstRegex).not.toBe(secondRegex)
    })
  })
})
