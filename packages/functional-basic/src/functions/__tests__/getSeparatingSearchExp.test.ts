import { describe, it, expect } from 'vitest'
import { getSeparatingSearchExp } from '../getSeparatingSearchExp'

describe('getSeparatingSearchExp', () => {
  describe('Standard search and multi-word matching (OR logic)', () => {
    it('should match a single word query in target text', () => {
      const searchExpression = getSeparatingSearchExp('apple')

      expect(searchExpression.source).toBe('(apple)')
      expect(searchExpression.test('an apple a day')).toBe(true)
    })

    it('should match any of the individual words separated by whitespace (disjunction / OR logic)', () => {
      const searchExpression = getSeparatingSearchExp('hello world')

      expect(searchExpression.source).toBe('(hello|world)')
      expect(searchExpression.test('hello')).toBe(true)

      searchExpression.lastIndex = 0
      expect(searchExpression.test('world')).toBe(true)

      searchExpression.lastIndex = 0
      expect(searchExpression.test('hello world')).toBe(true)

      searchExpression.lastIndex = 0
      expect(searchExpression.test('irrelevant phrase')).toBe(false)
    })

    it('should match multiple occurrences across a sentence when global flag is active', () => {
      const searchExpression = getSeparatingSearchExp('apple banana')
      const targetText = 'an apple, another apple, and a fresh banana'
      const matches = targetText.match(searchExpression)

      expect(matches).toEqual(['apple', 'apple', 'banana'])
    })

    it('should wrap alternation in a capturing group for token extraction and split operations', () => {
      const searchExpression = getSeparatingSearchExp('alpha beta')
      const targetText = 'start alpha middle beta end'
      const tokens = targetText.split(searchExpression)

      expect(tokens).toEqual(['start ', 'alpha', ' middle ', 'beta', ' end'])
    })

    it('should support text replacement and wrapping for search highlight rendering', () => {
      const searchExpression = getSeparatingSearchExp('highlight match')
      const targetText = 'Please highlight every match in this text'
      const highlightedText = targetText.replace(
        searchExpression,
        matchedWord => `<mark>${matchedWord}</mark>`
      )

      expect(highlightedText).toBe('Please <mark>highlight</mark> every <mark>match</mark> in this text')
    })
  })

  describe('Case insensitivity and flag configuration', () => {
    it('should configure case-insensitive (i) and global (g) flags by default for string queries', () => {
      const searchExpression = getSeparatingSearchExp('search')

      expect(searchExpression.flags).toContain('i')
      expect(searchExpression.flags).toContain('g')
      expect(searchExpression.global).toBe(true)
      expect(searchExpression.ignoreCase).toBe(true)
    })

    it('should match words regardless of letter casing combinations', () => {
      const searchExpression = getSeparatingSearchExp('HeLLo')

      expect(searchExpression.test('hello')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('HELLO')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('HeLLo')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('hElLo')).toBe(true)
    })

    it('should deduplicate words case-insensitively to prevent redundant regex branches', () => {
      const searchExpression = getSeparatingSearchExp('apple Apple APPLE')

      expect(searchExpression.source).toBe('(apple)')
      expect(searchExpression.test('apple')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('APPLE')).toBe(true)
    })
  })

  describe('Regex special characters escaping and ReDoS safety', () => {
    it('should escape all standard regex metacharacters: . * + ? ^ $ { } ( ) | [ ] \\ /', () => {
      const metacharactersString = '.*+?^${}()|[]\\/'
      const searchExpression = getSeparatingSearchExp(metacharactersString)

      expect(searchExpression.test(metacharactersString)).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('arbitrary normal string')).toBe(false)
    })

    it('should match a literal dot without matching other characters', () => {
      const searchExpression = getSeparatingSearchExp('a.b')

      expect(searchExpression.test('a.b')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('axb')).toBe(false)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('a_b')).toBe(false)
    })

    it('should match literal plus symbols in programming languages such as C++', () => {
      const searchExpression = getSeparatingSearchExp('C++')

      expect(searchExpression.test('Modern C++ development')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('Modern C development')).toBe(false)
    })

    it('should match currency symbols and decimal notation ($10 .)', () => {
      const searchExpression = getSeparatingSearchExp('$10 .')

      expect(searchExpression.test('Price: $10')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('Period .')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('Number 10 without dollar')).toBe(false)
    })

    it('should escape vertical bar (|) so it behaves as literal text rather than regex alternation', () => {
      const searchExpression = getSeparatingSearchExp('foo|bar')

      expect(searchExpression.source).toBe('(foo\\|bar)')
      expect(searchExpression.test('foo|bar')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('foo')).toBe(false)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('bar')).toBe(false)
    })

    it('should escape brackets and parentheses commonly found in code and references', () => {
      const searchExpression = getSeparatingSearchExp('items[0] (optional)')

      expect(searchExpression.test('Lookup items[0]')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('Marked as (optional)')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('items0')).toBe(false)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('optional')).toBe(false)
    })

    it('should escape file path forward slashes and backslashes', () => {
      const searchExpression = getSeparatingSearchExp('src/components\\button')

      expect(searchExpression.test('Path: src/components\\button')).toBe(true)
    })

    it('should avoid catastrophic backtracking (ReDoS) when processing long repetitive text', () => {
      const repetitiveQuery = 'a a a a a'
      const searchExpression = getSeparatingSearchExp(repetitiveQuery)
      const adversarialText = 'a'.repeat(500) + '!'

      const startTime = performance.now()
      const isMatched = searchExpression.test(adversarialText)
      const duration = performance.now() - startTime

      expect(isMatched).toBe(true)
      expect(duration).toBeLessThan(50)
    })
  })

  describe('Whitespace handling and token separation', () => {
    it('should collapse multiple sequential spaces into a single token separator', () => {
      const searchExpression = getSeparatingSearchExp('first     second       third')

      expect(searchExpression.source).toBe('(second|first|third)')
    })

    it('should treat tabs, newlines, and carriage returns as whitespace separators', () => {
      const searchExpression = getSeparatingSearchExp('itemOne\titemTwo\nitemThree\r\nitemFour')

      expect(searchExpression.test('itemOne')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('itemTwo')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('itemThree')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('itemFour')).toBe(true)
    })

    it('should trim leading and trailing spaces without producing empty tokens in the alternation', () => {
      const searchExpression = getSeparatingSearchExp('   alpha   beta   ')

      expect(searchExpression.source).toBe('(alpha|beta)')
    })
  })

  describe('Prefix shadowing and word ordering', () => {
    it('should sort words by length descending so longer words take precedence over prefixes', () => {
      const searchExpression = getSeparatingSearchExp('cat caterpillar')

      expect(searchExpression.source).toBe('(caterpillar|cat)')

      const match = 'caterpillar'.match(searchExpression)
      expect(match?.[0]).toBe('caterpillar')
    })

    it('should prioritize longer words regardless of their input position', () => {
      const searchExpression = getSeparatingSearchExp('a aaa aa aaaa')

      expect(searchExpression.source).toBe('(aaaa|aaa|aa|a)')

      const match = 'aaaa'.match(searchExpression)
      expect(match?.[0]).toBe('aaaa')
    })

    it('should handle overlapping compound words properly', () => {
      const searchExpression = getSeparatingSearchExp('super superman man')

      expect(searchExpression.source).toBe('(superman|super|man)')

      const match = 'superman'.match(searchExpression)
      expect(match?.[0]).toBe('superman')
    })
  })

  describe('Deduplication of tokens', () => {
    it('should eliminate exact duplicate words in the search query', () => {
      const searchExpression = getSeparatingSearchExp('keyword keyword keyword')

      expect(searchExpression.source).toBe('(keyword)')
    })

    it('should eliminate duplicates while keeping unique words ordered by length descending', () => {
      const searchExpression = getSeparatingSearchExp('apple banana apple orange banana')

      expect(searchExpression.source).toBe('(banana|orange|apple)')
    })
  })

  describe('Empty, whitespace-only, and invalid input (/(?!)/ fallback verification)', () => {
    it('should return /(?!)/ for an empty string', () => {
      const searchExpression = getSeparatingSearchExp('')

      expect(searchExpression.toString()).toBe('/(?!)/')
      expect(searchExpression.test('any arbitrary string')).toBe(false)
      expect(searchExpression.test('')).toBe(false)
      expect('hello'.replace(searchExpression, 'X')).toBe('hello')
      expect('hello'.match(searchExpression)).toBeNull()
    })

    it('should return /(?!)/ for whitespace-only strings (spaces, tabs, newlines)', () => {
      const searchExpressionSpaces = getSeparatingSearchExp('   ')
      const searchExpressionMixed = getSeparatingSearchExp('\t\n\r  ')

      expect(searchExpressionSpaces.toString()).toBe('/(?!)/')
      expect(searchExpressionMixed.toString()).toBe('/(?!)/')
      expect(searchExpressionSpaces.test('test string')).toBe(false)
      expect(searchExpressionMixed.test('test string')).toBe(false)
    })

    it('should return /(?!)/ for null and undefined inputs safely', () => {
      const searchExpressionNull = getSeparatingSearchExp(null as unknown as string)
      const searchExpressionUndefined = getSeparatingSearchExp(undefined as unknown as string)

      expect(searchExpressionNull.toString()).toBe('/(?!)/')
      expect(searchExpressionUndefined.toString()).toBe('/(?!)/')
      expect(searchExpressionNull.test('test string')).toBe(false)
      expect(searchExpressionUndefined.test('test string')).toBe(false)
    })

    it('should never mutate lastIndex on the static REGEXP_NEVER instance', () => {
      const searchExpressionFirst = getSeparatingSearchExp('')
      const searchExpressionSecond = getSeparatingSearchExp('   ')

      expect(searchExpressionFirst).toBe(searchExpressionSecond)
      expect(searchExpressionFirst.lastIndex).toBe(0)
      searchExpressionFirst.test('test')
      expect(searchExpressionFirst.lastIndex).toBe(0)
    })
  })

  describe('Limit handling (boundary values and trimming)', () => {
    it('should allow search query whose length is exactly equal to the default limit (128)', () => {
      const query128 = 'a'.repeat(128)
      const searchExpression = getSeparatingSearchExp(query128)

      expect(searchExpression.toString()).not.toBe('/(?!)/')
      expect(searchExpression.test(query128)).toBe(true)
    })

    it('should reject search query exceeding the default limit by 1 character (129) by returning /(?!)/', () => {
      const query129 = 'a'.repeat(129)
      const searchExpression = getSeparatingSearchExp(query129)

      expect(searchExpression.toString()).toBe('/(?!)/')
      expect(searchExpression.test(query129)).toBe(false)
    })

    it('should respect custom limit threshold', () => {
      const query = 'hello world'
      const searchExpressionValid = getSeparatingSearchExp(query, 11)
      const searchExpressionExceeded = getSeparatingSearchExp(query, 10)

      expect(searchExpressionValid.toString()).not.toBe('/(?!)/')
      expect(searchExpressionValid.test('hello')).toBe(true)

      expect(searchExpressionExceeded.toString()).toBe('/(?!)/')
      expect(searchExpressionExceeded.test('hello')).toBe(false)
    })

    it('should evaluate length limit after trimming so leading and trailing whitespace does not trigger premature rejection', () => {
      const query10 = 'a'.repeat(10)
      const paddedQuery = `   ${query10}   ` // total length 16, trimmed length 10

      const searchExpression = getSeparatingSearchExp(paddedQuery, 10)

      expect(searchExpression.toString()).not.toBe('/(?!)/')
      expect(searchExpression.test(query10)).toBe(true)
    })

    it('should handle zero and negative limits by returning /(?!)/', () => {
      const searchExpressionZero = getSeparatingSearchExp('test', 0)
      const searchExpressionNegative = getSeparatingSearchExp('test', -10)

      expect(searchExpressionZero.toString()).toBe('/(?!)/')
      expect(searchExpressionNegative.toString()).toBe('/(?!)/')
    })
  })

  describe('Non-string inputs and type coercion', () => {
    it('should safely handle number 0 as a valid search query', () => {
      const searchExpression = getSeparatingSearchExp(0 as unknown as string)

      expect(searchExpression.source).toBe('(0)')
      expect(searchExpression.test('Room 0')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('Room 1')).toBe(false)
    })

    it('should safely handle positive and negative numbers', () => {
      const searchExpressionPositive = getSeparatingSearchExp(98765 as unknown as string)
      const searchExpressionNegative = getSeparatingSearchExp(-100 as unknown as string)

      expect(searchExpressionPositive.test('Code 98765')).toBe(true)
      expect(searchExpressionNegative.test('Offset -100')).toBe(true)
    })

    it('should safely handle boolean values', () => {
      const searchExpressionFalse = getSeparatingSearchExp(false as unknown as string)
      const searchExpressionTrue = getSeparatingSearchExp(true as unknown as string)

      expect(searchExpressionFalse.source).toBe('(false)')
      expect(searchExpressionTrue.source).toBe('(true)')
      expect(searchExpressionFalse.test('flag: false')).toBe(true)
      expect(searchExpressionTrue.test('flag: true')).toBe(true)
    })

    it('should safely handle objects with a custom toString method', () => {
      const customValue = {
        toString: () => 'custom query'
      }

      const searchExpression = getSeparatingSearchExp(customValue as unknown as string)

      expect(searchExpression.test('custom')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('query')).toBe(true)
    })
  })

  describe('RegExp input handling and instance cloning', () => {
    it('should clone RegExp instance and preserve its source and flags', () => {
      const originalExpression = /custom-pattern/i
      const clonedExpression = getSeparatingSearchExp(originalExpression)

      expect(clonedExpression).not.toBe(originalExpression)
      expect(clonedExpression.source).toBe('custom-pattern')
      expect(clonedExpression.flags).toBe('i')
      expect(clonedExpression.test('custom-pattern')).toBe(true)
    })

    it('should preserve empty flags when original RegExp has no flags', () => {
      const originalExpression = /exact-case/
      const clonedExpression = getSeparatingSearchExp(originalExpression)

      expect(clonedExpression.flags).toBe('')
      expect(clonedExpression.test('exact-case')).toBe(true)
      clonedExpression.lastIndex = 0
      expect(clonedExpression.test('EXACT-CASE')).toBe(false)
    })

    it('should preserve multiple combined flags (g, i, m, u, s)', () => {
      const originalExpression = /multiline/gim
      const clonedExpression = getSeparatingSearchExp(originalExpression)

      expect(clonedExpression.flags).toContain('g')
      expect(clonedExpression.flags).toContain('i')
      expect(clonedExpression.flags).toContain('m')
    })

    it('should isolate lastIndex between original and cloned RegExp instances', () => {
      const originalExpression = /token/g
      originalExpression.lastIndex = 3

      const clonedExpression = getSeparatingSearchExp(originalExpression)

      expect(clonedExpression.lastIndex).toBe(0)
      clonedExpression.test('token string')
      expect(originalExpression.lastIndex).toBe(3)
    })

    it('should support complex RegExp with capturing groups and assertions', () => {
      const complexExpression = /(?<year>\d{4})-(?<month>\d{2})/
      const clonedExpression = getSeparatingSearchExp(complexExpression)

      const match = 'Date: 2026-10'.match(clonedExpression)
      expect(match?.groups?.year).toBe('2026')
      expect(match?.groups?.month).toBe('10')
    })

    it('should return /(?!)/ for empty RegExp input new RegExp("") and /(?:)/', () => {
      const emptyExpression = new RegExp('')
      const searchExpressionFromEmpty = getSeparatingSearchExp(emptyExpression)

      expect(searchExpressionFromEmpty.toString()).toBe('/(?!)/')
      expect(searchExpressionFromEmpty.test('arbitrary text')).toBe(false)

      const emptyLiteralExpression = /(?:)/
      const searchExpressionFromLiteral = getSeparatingSearchExp(emptyLiteralExpression)

      expect(searchExpressionFromLiteral.toString()).toBe('/(?!)/')
      expect(searchExpressionFromLiteral.test('arbitrary text')).toBe(false)
    })

    it('should support cross-realm or mock RegExp objects identified via [Symbol.toStringTag]', () => {
      const foreignExpression = {
        [Symbol.toStringTag]: 'RegExp',
        source: 'cross-realm-token',
        flags: 'i'
      } as unknown as RegExp

      expect(foreignExpression instanceof RegExp).toBe(false)

      const clonedExpression = getSeparatingSearchExp(foreignExpression)

      expect(clonedExpression instanceof RegExp).toBe(true)
      expect(clonedExpression.source).toBe('cross-realm-token')
      expect(clonedExpression.flags).toBe('i')
      expect(clonedExpression.test('Matching cross-realm-token')).toBe(true)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic characters with case-insensitivity', () => {
      const searchExpression = getSeparatingSearchExp('Привет Мир')

      expect(searchExpression.test('привет')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('МИР')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('ПрИвЕт')).toBe(true)
    })

    it('should support Vietnamese with complex tone diacritics', () => {
      const searchExpression = getSeparatingSearchExp('tiếng việt')

      expect(searchExpression.test('Học tiếng Việt')).toBe(true)
    })

    it('should support German umlauts', () => {
      const searchExpression = getSeparatingSearchExp('über schön')

      expect(searchExpression.test('Über')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('SCHÖN')).toBe(true)
    })

    it('should support CJK characters', () => {
      const searchExpression = getSeparatingSearchExp('你好 世界')

      expect(searchExpression.test('你好')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('世界')).toBe(true)
    })

    it('should support multi-byte Unicode emojis in search terms', () => {
      const searchExpression = getSeparatingSearchExp('🚀 🔥')

      expect(searchExpression.test('Mission 🚀 status')).toBe(true)
      searchExpression.lastIndex = 0
      expect(searchExpression.test('Hot 🔥 update')).toBe(true)
    })
  })

  describe('Real-world integration search scenarios', () => {
    it('should match parts of URLs and REST routes', () => {
      const searchExpression = getSeparatingSearchExp('/api/v1/users')

      expect(searchExpression.test('Endpoint: /api/v1/users')).toBe(true)
    })

    it('should match formatted phone number fragments with parentheses and dashes', () => {
      const searchExpression = getSeparatingSearchExp('+84 (123) 456-789')

      expect(searchExpression.test('Customer phone: +84 (123) 456-789')).toBe(true)
    })

    it('should match typical email search query with dots and at signs', () => {
      const searchExpression = getSeparatingSearchExp('user@example.com')

      expect(searchExpression.test('Contact: user@example.com')).toBe(true)
    })
  })
})
