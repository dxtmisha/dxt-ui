import { describe, it, expect } from 'vitest'
import { getSeparatingSearchExp } from '../getSeparatingSearchExp'

describe('getSeparatingSearchExp', () => {
  describe('Standard search and multi-word matching (OR logic)', () => {
    it('should match a single word', () => {
      const regex = getSeparatingSearchExp('apple')
      expect(regex.source).toBe('(apple)')
      expect(regex.test('an apple a day')).toBe(true)
    })

    it('should match any of the individual words separated by space (OR logic)', () => {
      const regex = getSeparatingSearchExp('hello world')
      expect(regex.source).toBe('(hello|world)')

      expect(regex.test('hello')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('world')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('hello world')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('foo')).toBe(false)
    })

    it('should match multiple occurrences across a string', () => {
      const regex = getSeparatingSearchExp('apple banana')
      const text = 'an apple, another apple, and a banana'
      const matches = text.match(regex)
      expect(matches).toEqual(['apple', 'apple', 'banana'])
    })
  })

  describe('Case insensitivity and flags', () => {
    it('should have case-insensitive (i) and global (g) flags by default', () => {
      const regex = getSeparatingSearchExp('test')
      expect(regex.flags).toContain('i')
      expect(regex.flags).toContain('g')
    })

    it('should match variations in letter casing', () => {
      const regex = getSeparatingSearchExp('HeLLo')
      expect(regex.test('hello')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('HELLO')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('HeLLo')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('hElLo')).toBe(true)
    })
  })

  describe('Regex special characters escaping', () => {
    it('should escape all regex metacharacters: . * + ? ^ $ { } ( ) | [ ] \\ /', () => {
      const specialCharacters = '.*+?^${}()|[]\\/'
      const regex = getSeparatingSearchExp(specialCharacters)

      expect(regex.test(specialCharacters)).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('arbitrary normal string')).toBe(false)
    })

    it('should match literal dot instead of any character', () => {
      const regex = getSeparatingSearchExp('a.b')
      expect(regex.test('a.b')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('axb')).toBe(false)
    })

    it('should match literal plus symbols in C++', () => {
      const regex = getSeparatingSearchExp('C++')
      expect(regex.test('Programming in C++')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('Programming in C')).toBe(false)
    })

    it('should match currency with dollar sign ($10 .)', () => {
      const regex = getSeparatingSearchExp('$10 .')
      expect(regex.test('$10')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('.')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('10')).toBe(false)
    })

    it('should escape vertical bar (|) so it does not act as raw regex alternation', () => {
      const regex = getSeparatingSearchExp('foo|bar')
      expect(regex.source).toBe('(foo\\|bar)')
      expect(regex.test('foo|bar')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('foo')).toBe(false)
      regex.lastIndex = 0
      expect(regex.test('bar')).toBe(false)
    })

    it('should escape brackets and parentheses', () => {
      const regex = getSeparatingSearchExp('item[0] (test)')
      expect(regex.test('item[0]')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('(test)')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('item0')).toBe(false)
    })

    it('should escape forward and backslashes', () => {
      const regex = getSeparatingSearchExp('path/to\\file')
      expect(regex.test('path/to\\file')).toBe(true)
    })
  })

  describe('Whitespace handling and token separation', () => {
    it('should collapse multiple spaces into a single separator', () => {
      const regex = getSeparatingSearchExp('foo     bar       baz')
      expect(regex.source).toBe('(foo|bar|baz)')
    })

    it('should handle tabs, newlines, and carriage returns as whitespace separators', () => {
      const regex = getSeparatingSearchExp('first\tsecond\nthird\r\nfourth')
      expect(regex.source).toBe('(second|fourth|first|third)')

      expect(regex.test('second')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('fourth')).toBe(true)
    })

    it('should trim leading and trailing spaces without producing empty tokens', () => {
      const regex = getSeparatingSearchExp('   hello   world   ')
      expect(regex.source).toBe('(hello|world)')
    })
  })

  describe('Prefix shadowing and word ordering', () => {
    it('should sort words by length descending so longer words take precedence over prefixes', () => {
      const regex = getSeparatingSearchExp('cat caterpillar')
      expect(regex.source).toBe('(caterpillar|cat)')

      const match = 'caterpillar'.match(regex)
      expect(match?.[0]).toBe('caterpillar')
    })

    it('should prioritize longer words when prefixes are typed first, middle, or last', () => {
      const regex = getSeparatingSearchExp('a aaa aa aaaa')
      expect(regex.source).toBe('(aaaa|aaa|aa|a)')

      const match = 'aaaa'.match(regex)
      expect(match?.[0]).toBe('aaaa')
    })

    it('should handle overlapping compound words', () => {
      const regex = getSeparatingSearchExp('super superman man')
      expect(regex.source).toBe('(superman|super|man)')

      const match = 'superman'.match(regex)
      expect(match?.[0]).toBe('superman')
    })
  })

  describe('Deduplication', () => {
    it('should eliminate duplicate words in search query', () => {
      const regex = getSeparatingSearchExp('test test test')
      expect(regex.source).toBe('(test)')
    })

    it('should eliminate duplicates while preserving unique words in correct order', () => {
      const regex = getSeparatingSearchExp('apple banana apple orange banana')
      expect(regex.source).toBe('(banana|orange|apple)')
    })
  })

  describe('Empty, whitespace-only, and invalid input (/(?!)/ verification)', () => {
    it('should return /(?!)/ for an empty string', () => {
      const regex = getSeparatingSearchExp('')
      expect(regex.toString()).toBe('/(?!)/')
      expect(regex.test('any string')).toBe(false)
      expect(regex.test('')).toBe(false)
      expect('hello'.replace(regex, 'X')).toBe('hello')
      expect('hello'.match(regex)).toBeNull()
    })

    it('should return /(?!)/ for whitespace-only strings (spaces, tabs, newlines)', () => {
      const regex1 = getSeparatingSearchExp('   ')
      const regex2 = getSeparatingSearchExp('\t\n\r  ')

      expect(regex1.toString()).toBe('/(?!)/')
      expect(regex2.toString()).toBe('/(?!)/')
      expect(regex1.test('test')).toBe(false)
      expect(regex2.test('test')).toBe(false)
    })

    it('should return /(?!)/ for null and undefined', () => {
      const regexNull = getSeparatingSearchExp(null as any)
      const regexUndefined = getSeparatingSearchExp(undefined as any)

      expect(regexNull.toString()).toBe('/(?!)/')
      expect(regexUndefined.toString()).toBe('/(?!)/')
      expect(regexNull.test('test')).toBe(false)
      expect(regexUndefined.test('test')).toBe(false)
    })
  })

  describe('Limit handling (boundary values and trimming)', () => {
    it('should allow search query whose length is exactly equal to the default limit (128)', () => {
      const query128 = 'a'.repeat(128)
      const regex = getSeparatingSearchExp(query128)
      expect(regex.toString()).not.toBe('/(?!)/')
      expect(regex.test(query128)).toBe(true)
    })

    it('should reject search query exceeding the default limit by 1 character (129)', () => {
      const query129 = 'a'.repeat(129)
      const regex = getSeparatingSearchExp(query129)
      expect(regex.toString()).toBe('/(?!)/')
      expect(regex.test(query129)).toBe(false)
    })

    it('should respect custom limit', () => {
      const query = 'hello world'
      const regexValid = getSeparatingSearchExp(query, 11)
      const regexExceeded = getSeparatingSearchExp(query, 10)

      expect(regexValid.toString()).not.toBe('/(?!)/')
      expect(regexValid.test('hello')).toBe(true)

      expect(regexExceeded.toString()).toBe('/(?!)/')
      expect(regexExceeded.test('hello')).toBe(false)
    })

    it('should check limit after trimming so leading/trailing spaces do not trigger false limit rejection', () => {
      const query10 = 'a'.repeat(10)
      const paddedQuery = `   ${query10}   ` // total length 16

      const regex = getSeparatingSearchExp(paddedQuery, 10)
      expect(regex.toString()).not.toBe('/(?!)/')
      expect(regex.test(query10)).toBe(true)
    })

    it('should handle zero or negative limit by returning /(?!)/', () => {
      const regexZero = getSeparatingSearchExp('test', 0)
      const regexNegative = getSeparatingSearchExp('test', -5)

      expect(regexZero.toString()).toBe('/(?!)/')
      expect(regexNegative.toString()).toBe('/(?!)/')
    })
  })

  describe('Non-string inputs (numbers, booleans, objects)', () => {
    it('should safely handle number 0 as search query', () => {
      const regex = getSeparatingSearchExp(0 as any)
      expect(regex.source).toBe('(0)')
      expect(regex.test('Room 0')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('Room 1')).toBe(false)
    })

    it('should safely handle positive and negative integers', () => {
      const regexPositive = getSeparatingSearchExp(12345 as any)
      const regexNegative = getSeparatingSearchExp(-42 as any)

      expect(regexPositive.test('ID: 12345')).toBe(true)
      expect(regexNegative.test('Temp: -42')).toBe(true)
    })

    it('should safely handle boolean values', () => {
      const regexFalse = getSeparatingSearchExp(false as any)
      const regexTrue = getSeparatingSearchExp(true as any)

      expect(regexFalse.source).toBe('(false)')
      expect(regexTrue.source).toBe('(true)')
      expect(regexFalse.test('is_active = false')).toBe(true)
      expect(regexTrue.test('is_active = true')).toBe(true)
    })

    it('should safely handle objects with custom toString method', () => {
      const customObject = {
        toString: () => 'custom search query'
      }

      const regex = getSeparatingSearchExp(customObject as any)
      expect(regex.test('custom')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('search')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('query')).toBe(true)
    })
  })

  describe('RegExp input handling and instance cloning', () => {
    it('should clone RegExp instance and preserve its source and flags', () => {
      const originalRegExp = /custom-pattern/i
      const clonedRegExp = getSeparatingSearchExp(originalRegExp)

      expect(clonedRegExp).not.toBe(originalRegExp)
      expect(clonedRegExp.source).toBe('custom-pattern')
      expect(clonedRegExp.flags).toBe('i')
      expect(clonedRegExp.test('custom-pattern')).toBe(true)
    })

    it('should preserve empty flags if original RegExp has no flags', () => {
      const originalRegExp = /exact-case/
      const clonedRegExp = getSeparatingSearchExp(originalRegExp)

      expect(clonedRegExp.flags).toBe('')
      expect(clonedRegExp.test('exact-case')).toBe(true)
      clonedRegExp.lastIndex = 0
      expect(clonedRegExp.test('EXACT-CASE')).toBe(false)
    })

    it('should preserve multiple flags (g, i, m, u, s)', () => {
      const originalRegExp = /multiline/gim
      const clonedRegExp = getSeparatingSearchExp(originalRegExp)

      expect(clonedRegExp.flags).toContain('g')
      expect(clonedRegExp.flags).toContain('i')
      expect(clonedRegExp.flags).toContain('m')
    })

    it('should isolate lastIndex between original and cloned RegExp instances', () => {
      const originalRegExp = /test/g
      originalRegExp.lastIndex = 2

      const clonedRegExp = getSeparatingSearchExp(originalRegExp)
      expect(clonedRegExp.lastIndex).toBe(0)

      clonedRegExp.test('test string')
      expect(originalRegExp.lastIndex).toBe(2)
    })

    it('should support complex RegExp with capturing groups and assertions', () => {
      const complexRegExp = /(?<year>\d{4})-(?<month>\d{2})/
      const clonedRegExp = getSeparatingSearchExp(complexRegExp)

      const match = 'Date: 2026-10'.match(clonedRegExp)
      expect(match?.groups?.year).toBe('2026')
      expect(match?.groups?.month).toBe('10')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic characters with case-insensitivity', () => {
      const regex = getSeparatingSearchExp('Привет Мир')
      expect(regex.test('привет')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('МИР')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('ПрИвЕт')).toBe(true)
    })

    it('should support Vietnamese with diacritics', () => {
      const regex = getSeparatingSearchExp('tiếng việt')
      expect(regex.test('Học tiếng Việt')).toBe(true)
    })

    it('should support German umlauts', () => {
      const regex = getSeparatingSearchExp('über schön')
      expect(regex.test('Über')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('SCHÖN')).toBe(true)
    })

    it('should support CJK characters', () => {
      const regex = getSeparatingSearchExp('你好 世界')
      expect(regex.test('你好')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('世界')).toBe(true)
    })

    it('should support emojis in search terms', () => {
      const regex = getSeparatingSearchExp('🚀 🔥')
      expect(regex.test('Launch 🚀 now')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('Fire 🔥 danger')).toBe(true)
    })
  })

  describe('Real-world integration search scenarios', () => {
    it('should match parts of URLs and routes', () => {
      const regex = getSeparatingSearchExp('/api/v1/users')
      expect(regex.test('Endpoint: /api/v1/users')).toBe(true)
    })

    it('should match phone number parts with parentheses and dashes', () => {
      const regex = getSeparatingSearchExp('+84 (123) 456-789')
      expect(regex.test('Call +84 (123) 456-789')).toBe(true)
    })

    it('should match typical email search query', () => {
      const regex = getSeparatingSearchExp('user@example.com')
      expect(regex.test('Send to user@example.com')).toBe(true)
    })
  })

  describe('Advanced edge cases & refinements for getSeparatingSearchExp', () => {
    it('should deduplicate words case-insensitively to prevent redundant regex branches', () => {
      const regex = getSeparatingSearchExp('apple Apple APPLE')
      expect(regex.source).toBe('(apple)')
      expect(regex.test('apple')).toBe(true)
      regex.lastIndex = 0
      expect(regex.test('APPLE')).toBe(true)
    })

    it('should return /(?!)/ for empty RegExp input new RegExp("")', () => {
      const emptyRegExp = new RegExp('')
      const regex = getSeparatingSearchExp(emptyRegExp)
      expect(regex.toString()).toBe('/(?!)/')
      expect(regex.test('any text')).toBe(false)
    })
  })
})
