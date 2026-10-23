import { describe, expect, it } from 'vitest'
import { getArrayHighlightMatch } from '../getArrayHighlightMatch'

describe('getArrayHighlightMatch', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return a single non-matching segment when search is an empty string', () => {
      const result = getArrayHighlightMatch('hello world', '')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('should return a single non-matching segment when search is undefined', () => {
      const result = getArrayHighlightMatch('hello world', undefined)
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('should return a single non-matching segment when search argument is omitted', () => {
      const result = getArrayHighlightMatch('hello world')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('should return an empty non-matching segment when the input text is empty', () => {
      const result = getArrayHighlightMatch('', 'hello')
      expect(result).toEqual([{ text: '', isMatch: false }])
    })

    it('should return the full string as non-matching when the substring is not found', () => {
      const result = getArrayHighlightMatch('hello world', 'missing')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('should return a single segment with isMatch: true when the entire string matches', () => {
      const result = getArrayHighlightMatch('hello', 'hello')
      expect(result).toEqual([{ text: 'hello', isMatch: true }])
    })

    it('should highlight a single matching word at the start of the text', () => {
      const result = getArrayHighlightMatch('hello world', 'hello')
      expect(result).toEqual([
        { text: 'hello', isMatch: true },
        { text: ' world', isMatch: false }
      ])
    })

    it('should highlight a matching word at the end of the text', () => {
      const result = getArrayHighlightMatch('hello world', 'world')
      expect(result).toEqual([
        { text: 'hello ', isMatch: false },
        { text: 'world', isMatch: true }
      ])
    })

    it('should highlight multiple occurrences of the same word', () => {
      const result = getArrayHighlightMatch('apple apple apple', 'apple')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' ', isMatch: false },
        { text: 'apple', isMatch: true },
        { text: ' ', isMatch: false },
        { text: 'apple', isMatch: true }
      ])
    })

    it('should handle consecutive adjacent matches without intervening text', () => {
      const result = getArrayHighlightMatch('appleapple', 'apple')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: 'apple', isMatch: true }
      ])
    })

    it('should support space-separated multi-token search (OR logic)', () => {
      const result = getArrayHighlightMatch('apple and banana', 'apple banana')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' and ', isMatch: false },
        { text: 'banana', isMatch: true }
      ])
    })

    it('should handle multiple consecutive spaces between search words', () => {
      const result = getArrayHighlightMatch('apple and banana', 'apple    banana')
      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' and ', isMatch: false },
        { text: 'banana', isMatch: true }
      ])
    })

    it('should perform case-insensitive matching while preserving original casing in segments', () => {
      const result = getArrayHighlightMatch('Hello World', 'hello')
      expect(result).toEqual([
        { text: 'Hello', isMatch: true },
        { text: ' World', isMatch: false }
      ])
    })

    it('should prioritize longer tokens over shorter prefixes (prefix shadowing prevention)', () => {
      const result = getArrayHighlightMatch('caterpillar and cat', 'cat caterpillar')
      expect(result).toEqual([
        { text: 'caterpillar', isMatch: true },
        { text: ' and ', isMatch: false },
        { text: 'cat', isMatch: true }
      ])
    })
  })

  describe('Regular Expression (RegExp) support, flags, and stateful safety', () => {
    it('should support global RegExp with ig flags', () => {
      const result = getArrayHighlightMatch('hello world', /hello/ig)
      expect(result).toEqual([
        { text: 'hello', isMatch: true },
        { text: ' world', isMatch: false }
      ])
    })

    it('should safely handle non-global RegExp when first match is in the middle of the string', () => {
      const result = getArrayHighlightMatch('say hello to me', /hello/i)
      expect(result).toEqual([
        { text: 'say ', isMatch: false },
        { text: 'hello', isMatch: true },
        { text: ' to me', isMatch: false }
      ])
    })

    it('should safely handle non-global RegExp when match is at index 0', () => {
      const result = getArrayHighlightMatch('hello world', /hello/i)
      expect(result).toEqual([
        { text: 'hello', isMatch: true },
        { text: ' world', isMatch: false }
      ])
    })

    it('should find all occurrences for a RegExp provided without the global flag', () => {
      const result = getArrayHighlightMatch('foo and foo', /foo/i)
      expect(result).toEqual([
        { text: 'foo', isMatch: true },
        { text: ' and ', isMatch: false },
        { text: 'foo', isMatch: true }
      ])
    })

    it('should support RegExp with capturing groups without distorting output segments', () => {
      const result = getArrayHighlightMatch('foo bar baz', /(foo) (bar)/i)
      expect(result).toEqual([
        { text: 'foo bar', isMatch: true },
        { text: ' baz', isMatch: false }
      ])
    })

    it('should return a non-matching segment when a RegExp does not match the text', () => {
      const result = getArrayHighlightMatch('hello world', /nonexistent/gi)
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })

    it('should terminate safely without infinite loops on zero-length RegExp matches', () => {
      const result = getArrayHighlightMatch('abc', /(?:)/)
      expect(result).toEqual([{ text: 'abc', isMatch: false }])
    })

    it('should not skip matches or mutate input RegExp when a stateful global RegExp with lastIndex > 0 is passed', () => {
      const statefulExpression = /apple/gi
      statefulExpression.lastIndex = 10

      const result = getArrayHighlightMatch('apple pie and apple tart', statefulExpression)

      expect(result).toEqual([
        { text: 'apple', isMatch: true },
        { text: ' pie and ', isMatch: false },
        { text: 'apple', isMatch: true },
        { text: ' tart', isMatch: false }
      ])
      expect(statefulExpression.lastIndex).toBe(10)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should escape dollar signs in search string', () => {
      const result = getArrayHighlightMatch('price is $10', '$10')
      expect(result).toEqual([
        { text: 'price is ', isMatch: false },
        { text: '$10', isMatch: true }
      ])
    })

    it('should safely escape regex metacharacters in contiguous tokens: [, ], +, *, .', () => {
      const result = getArrayHighlightMatch('item is [v1.0+beta]', '[v1.0+beta]')
      expect(result).toEqual([
        { text: 'item is ', isMatch: false },
        { text: '[v1.0+beta]', isMatch: true }
      ])
    })

    it('should split by spaces and safely escape metacharacters: +, *, (, )', () => {
      const result = getArrayHighlightMatch('1 + 2 * (3 - 1) = 5', '+ 2 * (3')
      expect(result).toEqual([
        { text: '1 ', isMatch: false },
        { text: '+', isMatch: true },
        { text: ' ', isMatch: false },
        { text: '2', isMatch: true },
        { text: ' ', isMatch: false },
        { text: '*', isMatch: true },
        { text: ' ', isMatch: false },
        { text: '(3', isMatch: true },
        { text: ' - 1) = 5', isMatch: false }
      ])
    })

    it('should safely highlight HTML/XSS-like substrings as literal text without corruption', () => {
      const payload = '<script>alert(1)</script>'
      const result = getArrayHighlightMatch(`Input: ${payload}`, '<script>')
      expect(result).toEqual([
        { text: 'Input: ', isMatch: false },
        { text: '<script>', isMatch: true },
        { text: 'alert(1)</script>', isMatch: false }
      ])
    })
  })

  describe('Numeric, boolean, and special literal searches (falsy string representations)', () => {
    it('should find and highlight digit "0" inside text', () => {
      const result = getArrayHighlightMatch('Count: 0 items', '0')
      expect(result).toEqual([
        { text: 'Count: ', isMatch: false },
        { text: '0', isMatch: true },
        { text: ' items', isMatch: false }
      ])
    })

    it('should match when the entire value is "0" and search is "0"', () => {
      const result = getArrayHighlightMatch('0', '0')
      expect(result).toEqual([{ text: '0', isMatch: true }])
    })

    it('should find "0" across multiple occurrences in numeric strings', () => {
      const result = getArrayHighlightMatch('page 10, offset 0', '0')
      expect(result).toEqual([
        { text: 'page 1', isMatch: false },
        { text: '0', isMatch: true },
        { text: ', offset ', isMatch: false },
        { text: '0', isMatch: true }
      ])
    })

    it('should find and highlight literal string "false"', () => {
      const result = getArrayHighlightMatch('flag is false here', 'false')
      expect(result).toEqual([
        { text: 'flag is ', isMatch: false },
        { text: 'false', isMatch: true },
        { text: ' here', isMatch: false }
      ])
    })

    it('should find and highlight literal strings "null", "undefined", and "[]"', () => {
      expect(getArrayHighlightMatch('value is null', 'null')).toEqual([
        { text: 'value is ', isMatch: false },
        { text: 'null', isMatch: true }
      ])

      expect(getArrayHighlightMatch('type is undefined', 'undefined')).toEqual([
        { text: 'type is ', isMatch: false },
        { text: 'undefined', isMatch: true }
      ])

      expect(getArrayHighlightMatch('array [] empty', '[]')).toEqual([
        { text: 'array ', isMatch: false },
        { text: '[]', isMatch: true },
        { text: ' empty', isMatch: false }
      ])
    })
  })

  describe('Multilingual, Unicode, and boundary conditions', () => {
    it('should highlight Cyrillic characters accurately', () => {
      const result = getArrayHighlightMatch('Привет мир, как дела?', 'мир')
      expect(result).toEqual([
        { text: 'Привет ', isMatch: false },
        { text: 'мир', isMatch: true },
        { text: ', как дела?', isMatch: false }
      ])
    })

    it('should highlight Vietnamese diacritic characters accurately', () => {
      const result = getArrayHighlightMatch('Xin chào thế giới', 'chào')
      expect(result).toEqual([
        { text: 'Xin ', isMatch: false },
        { text: 'chào', isMatch: true },
        { text: ' thế giới', isMatch: false }
      ])
    })

    it('should highlight CJK characters and Emojis accurately', () => {
      expect(getArrayHighlightMatch('你好世界', '世界')).toEqual([
        { text: '你好', isMatch: false },
        { text: '世界', isMatch: true }
      ])

      expect(getArrayHighlightMatch('Launch 🚀 now', '🚀')).toEqual([
        { text: 'Launch ', isMatch: false },
        { text: '🚀', isMatch: true },
        { text: ' now', isMatch: false }
      ])
    })

    it('should convert numeric value input via toString and highlight match', () => {
      const result = getArrayHighlightMatch(100500 as unknown as string, '500')
      expect(result).toEqual([
        { text: '100', isMatch: false },
        { text: '500', isMatch: true }
      ])
    })

    it('should return unhighlighted text when search exceeds the 128-character limit', () => {
      const longSearch = 'a'.repeat(129)
      const result = getArrayHighlightMatch('some long text', longSearch)
      expect(result).toEqual([{ text: 'some long text', isMatch: false }])
    })

    it('should ignore whitespace-only search strings', () => {
      const result = getArrayHighlightMatch('hello world', '   ')
      expect(result).toEqual([{ text: 'hello world', isMatch: false }])
    })
  })
})
