import { describe, expect, it } from 'vitest'
import { getSearchExp } from '../getSearchExp'

describe('getSearchExp', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should match a string containing the single search word', () => {
      const regex = getSearchExp('hello')
      expect(regex.test('hello world')).toBe(true)
      expect(regex.test('world')).toBe(false)
    })

    it('should match regardless of word order when multiple words are given', () => {
      const regex = getSearchExp('foo bar')
      expect(regex.test('foo bar baz')).toBe(true)
      expect(regex.test('bar foo')).toBe(true)
      expect(regex.test('foo only')).toBe(false)
      expect(regex.test('bar only')).toBe(false)
    })

    it('should match words as substrings anywhere inside larger tokens', () => {
      const regex = getSearchExp('cat dog')
      expect(regex.test('caterpillar hotdog')).toBe(true)
      expect(regex.test('caterpillar only')).toBe(false)
    })

    it('should use case-insensitive matching across uppercase, lowercase, and mixed cases', () => {
      const regex = getSearchExp('Hello')
      expect(regex.test('HELLO world')).toBe(true)
      expect(regex.test('hello world')).toBe(true)
      expect(regex.test('hElLo world')).toBe(true)
    })
  })

  describe('Multiline text handling (dotAll / s flag)', () => {
    it('should match words separated by newlines in the target string', () => {
      const regex = getSearchExp('world')
      expect(regex.test('hello\nworld')).toBe(true)
      expect(regex.test('line 1\r\nline 2 world')).toBe(true)
    })

    it('should match multiple words across different lines in target string', () => {
      const regex = getSearchExp('title description')
      const target = 'Title: Product\nDescription: Great item'
      expect(regex.test(target)).toBe(true)
    })

    it('should match words across multiple consecutive paragraphs', () => {
      const regex = getSearchExp('first third')
      const multiline = 'First line\n\nSecond line\n\nThird line'
      expect(regex.test(multiline)).toBe(true)
    })
  })

  describe('Whitespace splitting and word deduplication', () => {
    it('should split query by any whitespace character (tabs, newlines, multiple spaces)', () => {
      const regex = getSearchExp('foo\tbar\nbaz')
      expect(regex.test('foo and bar and baz')).toBe(true)
      expect(regex.test('baz bar foo')).toBe(true)
      expect(regex.test('foo and baz')).toBe(false)
    })

    it('should ignore multiple consecutive spaces in search query', () => {
      const regex = getSearchExp('foo   bar')
      expect(regex.test('foo bar')).toBe(true)
      expect(regex.test('bar foo')).toBe(true)
    })

    it('should deduplicate repeated words in query to avoid redundant lookaheads', () => {
      const regex = getSearchExp('apple apple apple')
      expect(regex.source).toBe('^(?=.*?apple)')
      expect(regex.flags).toBe('is')
    })
  })

  describe('Regex metacharacters escaping and security', () => {
    it('should escape special regex characters in the search string', () => {
      const regex = getSearchExp('price $10.00')
      expect(regex.test('price $10.00')).toBe(true)
      expect(regex.test('price X10Y00')).toBe(false)
    })

    it('should safely handle brackets, parentheses, and asterisks', () => {
      const regex = getSearchExp('[VIP] (Special) *promo*')
      expect(regex.test('User [VIP] (Special) member with *promo* code')).toBe(true)
      expect(regex.test('User VIP Special member with promo code')).toBe(false)
    })

    it('should safely escape dots, pluses, pipes, carets, and question marks', () => {
      const regex = getSearchExp('C++ a.b c|d e? f^g')
      expect(regex.test('Learning C++ with a.b and c|d plus e? or f^g')).toBe(true)
      expect(regex.test('Learning C with axb and c plus e or fg')).toBe(false)
    })

    it('should escape backslashes and slashes properly', () => {
      const regex = getSearchExp('path/to\\file')
      expect(regex.test('Directory: path/to\\file.txt')).toBe(true)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should search Cyrillic words case-insensitively', () => {
      const regex = getSearchExp('красная машина')
      expect(regex.test('В гараже стоит Красная Машина 2026 года')).toBe(true)
      expect(regex.test('Синяя машина')).toBe(false)
    })

    it('should search Vietnamese phrases with complex diacritics', () => {
      const regex = getSearchExp('tiếng việt giá')
      expect(regex.test('Sách tiếng Việt có giá tốt')).toBe(true)
      expect(regex.test('Sách tiếng Anh có giá tốt')).toBe(false)
    })

    it('should search European accented words (French, German, Spanish)', () => {
      const regex = getSearchExp('café über año')
      expect(regex.test('El año pasado, un café über schön')).toBe(true)
    })

    it('should search Asian scripts (Japanese, Chinese, Korean)', () => {
      const regex = getSearchExp('こんにちは 世界')
      expect(regex.test('皆さん、こんにちは！素晴らしい世界へようこそ')).toBe(true)

      const chineseRegex = getSearchExp('中文 搜索')
      expect(chineseRegex.test('这是一个中文文本搜索测试')).toBe(true)
    })

    it('should support emojis in search terms', () => {
      const regex = getSearchExp('🔥 rocket')
      expect(regex.test('Hot 🔥 space rocket launch')).toBe(true)
    })
  })

  describe('Edge cases, boundaries, and limits', () => {
    it('should return /^/ matching everything for an empty search string', () => {
      const regex = getSearchExp('')
      expect(regex.test('anything')).toBe(true)
      expect(regex.test('')).toBe(true)
    })

    it('should return /^/ for whitespace-only search string', () => {
      expect(getSearchExp('   ').test('anything')).toBe(true)
      expect(getSearchExp('\t\n\r').test('anything')).toBe(true)
    })

    it('should allow a search string exactly at the default limit (128)', () => {
      const exactQuery = 'a'.repeat(128)
      const regex = getSearchExp(exactQuery)
      expect(regex.source).toBe(`^(?=.*?${exactQuery})`)
      expect(regex.test(exactQuery)).toBe(true)
    })

    it('should return /^/ when search string exceeds the limit', () => {
      const longQuery = 'a'.repeat(129)
      const regex = getSearchExp(longQuery)
      expect(regex.source).toBe('^')
      expect(regex.test('anything')).toBe(true)
    })

    it('should respect custom limit parameter including zero and negative limits', () => {
      const query = 'abcdef'
      expect(getSearchExp(query, 5).source).toBe('^')
      expect(getSearchExp(query, 6).source).toBe('^(?=.*?abcdef)')
      expect(getSearchExp(query, 0).source).toBe('^')
      expect(getSearchExp(query, -1).source).toBe('^')
    })

    it('should safely return /^/ for non-string inputs', () => {
      expect(getSearchExp(null as unknown as string).test('anything')).toBe(true)
      expect(getSearchExp(undefined as unknown as string).test('anything')).toBe(true)
      expect(getSearchExp(0 as unknown as string).test('anything')).toBe(true)
      expect(getSearchExp(false as unknown as string).test('anything')).toBe(true)
      expect(getSearchExp(123 as unknown as string).test('anything')).toBe(true)
      expect(getSearchExp({} as unknown as string).test('anything')).toBe(true)
    })
  })

  describe('Determinism, state isolation, and consecutive execution', () => {
    it('should maintain consistent matching over consecutive calls without lastIndex state leaks', () => {
      const regex = getSearchExp('test word')
      const target = 'This is a test word string'

      for (let index = 0; index < 10; index++) {
        expect(regex.test(target)).toBe(true)
      }
    })

    it('should produce identical regex instances for identical search inputs', () => {
      const regex1 = getSearchExp('query terms')
      const regex2 = getSearchExp('query terms')

      expect(regex1.source).toBe(regex2.source)
      expect(regex1.flags).toBe(regex2.flags)
    })
  })
})
