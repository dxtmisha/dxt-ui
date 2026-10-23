import { describe, it, expect } from 'vitest'
import { getExactSearchExp } from '../getExactSearchExp'

describe('getExactSearchExp', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should match the exact string', () => {
      const regex = getExactSearchExp('hello')
      expect(regex.test('hello')).toBe(true)
    })

    it('should match the exact string regardless of case', () => {
      const regex = getExactSearchExp('Hello')
      expect(regex.test('hello')).toBe(true)
      expect(regex.test('HELLO')).toBe(true)
      expect(regex.test('hElLo')).toBe(true)
    })

    it('should match partial strings without anchors', () => {
      const regex = getExactSearchExp('hello')
      expect(regex.test('hello world')).toBe(true)
      expect(regex.test('say hello')).toBe(true)
      expect(regex.test('say hello world')).toBe(true)
    })

    it('should match multi-word phrases preserving exact spacing', () => {
      const regex = getExactSearchExp('hello world')
      expect(regex.test('Say Hello World today')).toBe(true)
      expect(regex.test('hello   world')).toBe(false)
      expect(regex.test('world hello')).toBe(false)
    })

    it('should wrap the pattern in a capturing group with case-insensitive flag only', () => {
      const regex = getExactSearchExp('test')
      expect(regex.flags).toBe('i')
      expect(regex.source).toBe('(test)')

      const match = regex.exec('This is a TEST string')
      expect(match).not.toBeNull()
      expect(match?.[0]).toBe('TEST')
      expect(match?.[1]).toBe('TEST')
    })
  })

  describe('Boundary values and empty inputs', () => {
    it('should handle a single character search string', () => {
      const regex = getExactSearchExp('a')
      expect(regex.test('Apple')).toBe(true)
      expect(regex.test('banana')).toBe(true)
      expect(regex.test('xyz')).toBe(false)
    })

    it('should handle an empty search string without throwing', () => {
      const regex = getExactSearchExp('')
      expect(regex.source).toBe('()')
      expect(regex.flags).toBe('i')
      expect(regex.test('')).toBe(true)
      expect(regex.test('any text')).toBe(true)
    })

    it('should handle whitespace-only search strings (spaces, tabs, newlines)', () => {
      const spaceRegex = getExactSearchExp('   ')
      expect(spaceRegex.test('a   b')).toBe(true)
      expect(spaceRegex.test('a b')).toBe(false)

      const whitespaceRegex = getExactSearchExp('\t\n')
      expect(whitespaceRegex.test('line1\t\nline2')).toBe(true)
      expect(whitespaceRegex.test('line1 line2')).toBe(false)
    })

    it('should handle numeric strings including zero', () => {
      const zeroRegex = getExactSearchExp('0')
      expect(zeroRegex.test('Room 0')).toBe(true)
      expect(zeroRegex.test('Room 1')).toBe(false)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should escape all regular expression special characters', () => {
      const specialText = 'price $10.00 (discount +50%) [limited] ^start|end? *\\/'
      const regex = getExactSearchExp(specialText)

      expect(regex.test(specialText)).toBe(true)
      expect(regex.test(`Order: ${specialText.toUpperCase()}!`)).toBe(true)
      expect(regex.test('price X10Y00')).toBe(false)
    })

    it('should treat dots, pluses, and pipes as literal characters', () => {
      expect(getExactSearchExp('a.b').test('axb')).toBe(false)
      expect(getExactSearchExp('a.b').test('a.b')).toBe(true)

      expect(getExactSearchExp('C++').test('C++ developer')).toBe(true)
      expect(getExactSearchExp('C++').test('CCC')).toBe(false)

      expect(getExactSearchExp('a|b').test('a')).toBe(false)
      expect(getExactSearchExp('a|b').test('a|b')).toBe(true)
    })

    it('should safely handle input containing literal :value placeholder', () => {
      const regex = getExactSearchExp('key:value')
      expect(regex.source).toBe('(key:value)')
      expect(regex.test('config key:VALUE here')).toBe(true)
    })

    it('should safely match HTML and XSS payload strings literally', () => {
      const payload = '<script>alert("xss")</script>'
      const regex = getExactSearchExp(payload)
      expect(regex.test(`Found ${payload} in input`)).toBe(true)
      expect(regex.test('alert("xss")')).toBe(false)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should match Cyrillic strings case-insensitively', () => {
      const regex = getExactSearchExp('Привет Мир')
      expect(regex.test('привет мир')).toBe(true)
      expect(regex.test('ПРИВЕТ МИР!')).toBe(true)
      expect(regex.test('Привет')).toBe(false)
    })

    it('should match Vietnamese strings with diacritics case-insensitively', () => {
      const regex = getExactSearchExp('Xin chào Việt Nam')
      expect(regex.test('xin chào việt nam')).toBe(true)
      expect(regex.test('XIN CHÀO VIỆT NAM')).toBe(true)
      expect(regex.test('Xin chao Viet Nam')).toBe(false)
    })

    it('should match CJK characters accurately', () => {
      const regex = getExactSearchExp('こんにちは世界')
      expect(regex.test('挨拶: こんにちは世界!')).toBe(true)
      expect(regex.test('こんにちは')).toBe(false)
    })

    it('should match multibyte Emoji sequences', () => {
      const regex = getExactSearchExp('🚀 🔥 ✨')
      expect(regex.test('Launch 🚀 🔥 ✨ now')).toBe(true)
      expect(regex.test('🚀 ✨')).toBe(false)
    })
  })

  describe('Statefulness and determinism', () => {
    it('should not retain stateful lastIndex across multiple .test() calls', () => {
      const regex = getExactSearchExp('repeat')
      expect(regex.test('repeat')).toBe(true)
      expect(regex.test('repeat')).toBe(true)
      expect(regex.test('repeat')).toBe(true)
      expect(regex.lastIndex).toBe(0)
    })

    it('should return a distinct RegExp instance on each invocation', () => {
      const firstRegex = getExactSearchExp('same')
      const secondRegex = getExactSearchExp('same')
      expect(firstRegex).not.toBe(secondRegex)
      expect(firstRegex.source).toBe(secondRegex.source)
    })
  })
})
