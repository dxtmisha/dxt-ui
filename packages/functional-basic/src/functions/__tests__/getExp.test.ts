import { describe, it, expect } from 'vitest'
import { getExp } from '../getExp'

describe('getExp', () => {
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

  describe('Metacharacters, escaping, and security', () => {
    it('should escape all special regex characters in the input value', () => {
      const regex = getExp('hello.*+?^${}()|[]\\world')
      expect(regex.source).toBe('hello\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\world')
    })

    it('should match escaped metacharacters literally instead of as regex operators', () => {
      const regex = getExp('foo.bar', 'i', '^:value$')
      expect(regex.test('foo.bar')).toBe(true)
      expect(regex.test('fooXbar')).toBe(false)

      const quantifierRegex = getExp('a+b*c?', 'i', '^:value$')
      expect(quantifierRegex.test('a+b*c?')).toBe(true)
      expect(quantifierRegex.test('aaabbbc')).toBe(false)
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
