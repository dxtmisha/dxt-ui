import { describe, it, expect } from 'vitest'
import { escapeExp } from '../escapeExp'

describe('escapeExp', () => {
  describe('Individual metacharacters escaping', () => {
    it('should escape dot (.)', () => {
      expect(escapeExp('.')).toBe('\\.')
    })

    it('should escape asterisk (*)', () => {
      expect(escapeExp('*')).toBe('\\*')
    })

    it('should escape plus (+)', () => {
      expect(escapeExp('+')).toBe('\\+')
    })

    it('should escape question mark (?)', () => {
      expect(escapeExp('?')).toBe('\\?')
    })

    it('should escape caret (^)', () => {
      expect(escapeExp('^')).toBe('\\^')
    })

    it('should escape dollar sign ($)', () => {
      expect(escapeExp('$')).toBe('\\$')
    })

    it('should escape curly braces ({ and })', () => {
      expect(escapeExp('{')).toBe('\\{')
      expect(escapeExp('}')).toBe('\\}')
      expect(escapeExp('{1,3}')).toBe('\\{1,3\\}')
    })

    it('should escape parentheses (( and ))', () => {
      expect(escapeExp('(')).toBe('\\(')
      expect(escapeExp(')')).toBe('\\)')
      expect(escapeExp('(test)')).toBe('\\(test\\)')
    })

    it('should escape vertical bar / pipe (|)', () => {
      expect(escapeExp('|')).toBe('\\|')
      expect(escapeExp('a|b')).toBe('a\\|b')
    })

    it('should escape square brackets ([ and ])', () => {
      expect(escapeExp('[')).toBe('\\[')
      expect(escapeExp(']')).toBe('\\]')
      expect(escapeExp('[a-z]')).toBe('\\[a\\-z\\]')
    })

    it('should escape backslash (\\)', () => {
      expect(escapeExp('\\')).toBe('\\\\')
      expect(escapeExp('a\\b')).toBe('a\\\\b')
    })

    it('should escape forward slash (/)', () => {
      expect(escapeExp('/')).toBe('\\/')
      expect(escapeExp('a/b/c')).toBe('a\\/b\\/c')
    })

    it('should escape hyphen-minus (-)', () => {
      expect(escapeExp('-')).toBe('\\-')
      expect(escapeExp('a-z')).toBe('a\\-z')
      expect(escapeExp('foo-bar')).toBe('foo\\-bar')
    })
  })

  describe('Compound and repetitive metacharacters', () => {
    it('should escape all 16 metacharacters simultaneously in a single string', () => {
      const allMetacharacters = '.*+?^${}()|[]\\/-'
      expect(escapeExp(allMetacharacters)).toBe(
        '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\\\/\\-'
      )
    })

    it('should escape repeated identical metacharacters', () => {
      expect(escapeExp('***')).toBe('\\*\\*\\*')
      expect(escapeExp('+++')).toBe('\\+\\+\\+')
      expect(escapeExp('???')).toBe('\\?\\?\\?')
      expect(escapeExp('...')).toBe('\\.\\.\\.')
      expect(escapeExp('///')).toBe('\\/\\/\\/')
      expect(escapeExp('---')).toBe('\\-\\-\\-')
      expect(escapeExp('\\\\\\')).toBe('\\\\\\\\\\\\')
    })

    it('should escape alternating metacharacters', () => {
      expect(escapeExp('.*.*.*')).toBe('\\.\\*\\.\\*\\.\\*')
      expect(escapeExp('+-+-+-')).toBe('\\+\\-\\+\\-\\+\\-')
      expect(escapeExp('()[]{}')).toBe('\\(\\)\\[\\]\\{\\}')
    })

    it('should escape complex mathematical and programmatic expressions', () => {
      const expression = '(a + b) * [c / d] - e^2 > 0 && f || g ? {h: 1} : $0'
      const escaped = escapeExp(expression)

      expect(escaped).toBe(
        '\\(a \\+ b\\) \\* \\[c \\/ d\\] \\- e\\^2 > 0 && f \\|\\| g \\? \\{h: 1\\} : \\$0'
      )
      // Unescaped chars like > & : remain untouched
      expect(escaped).toContain('>')
      expect(escaped).toContain('&&')
      expect(escaped).toContain(':')
    })

    it('should escape file paths and glob-like expressions', () => {
      expect(escapeExp('C:\\Users\\Name\\file.name[1].min.js')).toBe(
        'C:\\\\Users\\\\Name\\\\file\\.name\\[1\\]\\.min\\.js'
      )
      expect(escapeExp('/var/log/*.log')).toBe('\\/var\\/log\\/\\*\\.log')
      expect(escapeExp('../../path/to/resource')).toBe('\\.\\.\\/\\.\\.\\/path\\/to\\/resource')
    })

    it('should escape complex URL strings with query params and anchors', () => {
      const url = 'https://example.com/api/v1?search=foo+bar&filter[status]=active#item-1'
      expect(escapeExp(url)).toBe(
        'https:\\/\\/example\\.com\\/api\\/v1\\?search=foo\\+bar&filter\\[status\\]=active#item\\-1'
      )
    })
  })

  describe('Character class safety ([...] context)', () => {
    it('should prevent Range out of order syntax errors when interpolated into character classes', () => {
      const reversedRange = 'z-a'
      const escaped = escapeExp(reversedRange)
      expect(escaped).toBe('z\\-a')

      // Without escaping, new RegExp('[z-a]') throws SyntaxError: Range out of order
      expect(() => new RegExp(`[${escaped}]`)).not.toThrow()
    })

    it('should match only literal hyphen and literal bounds instead of expanding ranges', () => {
      const rangeText = '0-9'
      const escaped = escapeExp(rangeText)
      const regex = new RegExp(`^[${escaped}]+$`)

      expect(regex.test('0-9')).toBe(true)
      expect(regex.test('0')).toBe(true)
      expect(regex.test('-')).toBe(true)
      expect(regex.test('9')).toBe(true)
      // Number 5 is NOT matched because it is a literal set of '0', '-', '9', not range 0 through 9
      expect(regex.test('5')).toBe(false)
    })

    it('should escape brackets when placed inside custom bracket templates', () => {
      const input = '[test]'
      const escaped = escapeExp(input)
      const regex = new RegExp(`^${escaped}$`)

      expect(regex.test('[test]')).toBe(true)
      expect(regex.test('t')).toBe(false)
      expect(regex.test('test')).toBe(false)
    })
  })

  describe('Plain text and non-metacharacter punctuation', () => {
    it('should leave standard alphanumeric strings unchanged', () => {
      expect(escapeExp('hello')).toBe('hello')
      expect(escapeExp('HelloWorld123')).toBe('HelloWorld123')
      expect(escapeExp('1234567890')).toBe('1234567890')
    })

    it('should preserve punctuation marks that are not regex metacharacters', () => {
      const safePunctuation = '!@#%&=:;"\',<>~`'
      expect(escapeExp(safePunctuation)).toBe(safePunctuation)
    })
  })

  describe('Multilingual and Unicode characters', () => {
    it('should preserve Cyrillic text and punctuation', () => {
      expect(escapeExp('Привет, мир! Как дела?')).toBe('Привет, мир! Как дела\\?')
      expect(escapeExp('Запрос (поиск) по цене: 100$ / шт.')).toBe(
        'Запрос \\(поиск\\) по цене: 100\\$ \\/ шт\\.'
      )
    })

    it('should preserve Vietnamese characters with complex diacritics', () => {
      expect(escapeExp('Học tiếng Việt rất thú vị!')).toBe('Học tiếng Việt rất thú vị!')
      expect(escapeExp('Đường số 1 + 2 (quận 3)')).toBe('Đường số 1 \\+ 2 \\(quận 3\\)')
    })

    it('should preserve German, French, and Spanish special letters', () => {
      expect(escapeExp('über café mañada')).toBe('über café mañada')
      expect(escapeExp('größer als 10.00€?')).toBe('größer als 10\\.00€\\?')
    })

    it('should preserve CJK characters', () => {
      expect(escapeExp('你好，世界！')).toBe('你好，世界！')
      expect(escapeExp('【重要】検索キーワード.*')).toBe('【重要】検索キーワード\\.\\*')
    })

    it('should preserve single and multi-code-point emojis', () => {
      expect(escapeExp('🚀 🔥 ✨')).toBe('🚀 🔥 ✨')
      expect(escapeExp('Status: 👨‍👩‍👧‍👦 (family)')).toBe('Status: 👨‍👩‍👧‍👦 \\(family\\)')
    })
  })

  describe('Whitespace and control characters', () => {
    it('should preserve single and multiple spaces', () => {
      expect(escapeExp('   ')).toBe('   ')
      expect(escapeExp('hello   world')).toBe('hello   world')
    })

    it('should preserve tabs, newlines, and carriage returns', () => {
      expect(escapeExp('first\tsecond')).toBe('first\tsecond')
      expect(escapeExp('line1\nline2\r\nline3')).toBe('line1\nline2\r\nline3')
    })

    it('should properly escape metacharacters surrounded by whitespace', () => {
      expect(escapeExp(' . * + - / ')).toBe(' \\. \\* \\+ \\- \\/ ')
    })
  })

  describe('Empty, nullish, and non-string inputs', () => {
    it('should return empty string for empty string input', () => {
      expect(escapeExp('')).toBe('')
    })

    it('should safely return empty string for null and undefined', () => {
      expect(escapeExp(null as any)).toBe('')
      expect(escapeExp(undefined as any)).toBe('')
    })

    it('should safely handle number 0 without returning empty string', () => {
      expect(escapeExp(0 as any)).toBe('0')
    })

    it('should safely handle positive and negative integers', () => {
      expect(escapeExp(12345 as any)).toBe('12345')
      expect(escapeExp(-42 as any)).toBe('\\-42')
    })

    it('should safely handle floating point numbers', () => {
      expect(escapeExp(3.14159 as any)).toBe('3\\.14159')
    })

    it('should safely handle boolean values', () => {
      expect(escapeExp(false as any)).toBe('false')
      expect(escapeExp(true as any)).toBe('true')
    })

    it('should safely handle objects with custom toString implementation', () => {
      const customObject = {
        toString: () => 'price: $100.00 (discount -20%)'
      }
      expect(escapeExp(customObject as any)).toBe(
        'price: \\$100\\.00 \\(discount \\-20%\\)'
      )
    })
  })

  describe('Large strings stress tests', () => {
    it('should handle large strings with thousands of metacharacters without performance degradation', () => {
      const repeatedMetas = '.*+?-/'.repeat(2000) // 12,000 chars
      const escaped = escapeExp(repeatedMetas)

      expect(escaped.length).toBe(repeatedMetas.length * 2)
      expect(escaped.startsWith('\\.\\*\\+\\?\\-\\/')).toBe(true)
    })

    it('should handle large plain strings efficiently', () => {
      const plainLongString = 'abcdefghij'.repeat(5000) // 50,000 chars
      const escaped = escapeExp(plainLongString)

      expect(escaped).toBe(plainLongString)
    })
  })

  describe('End-to-end RegExp constructor integration', () => {
    it('should ensure any escaped string can be safely compiled into a RegExp', () => {
      const inputs = [
        '.*+?^${}()|[]\\/-',
        'c++',
        '$10.00',
        'user.name[0]',
        '(a|b)',
        'foo\\bar',
        'http://test.com/?q=a&b=c#id',
        '-10--20',
        'price: $5 - $10'
      ]

      for (const input of inputs) {
        const escaped = escapeExp(input)
        expect(() => new RegExp(escaped)).not.toThrow()

        const regex = new RegExp(`^${escaped}$`)
        expect(regex.test(input)).toBe(true)
      }
    })

    it('should guarantee that metacharacters do not execute their special regex behavior', () => {
      // 1. Dot should match only dot, not any char
      const dotRegex = new RegExp(`^${escapeExp('a.b')}$`)
      expect(dotRegex.test('a.b')).toBe(true)
      expect(dotRegex.test('axb')).toBe(false)

      // 2. Star should match only star, not zero or more repetitions
      const starRegex = new RegExp(`^${escapeExp('a*b')}$`)
      expect(starRegex.test('a*b')).toBe(true)
      expect(starRegex.test('b')).toBe(false)
      expect(starRegex.test('aaaaab')).toBe(false)

      // 3. Plus should match only plus, not one or more repetitions
      const plusRegex = new RegExp(`^${escapeExp('c++')}$`)
      expect(plusRegex.test('c++')).toBe(true)
      expect(plusRegex.test('c')).toBe(false)
      expect(plusRegex.test('c++++')).toBe(false)

      // 4. Question mark should match only question mark, not optional
      const questionRegex = new RegExp(`^${escapeExp('colou?r')}$`)
      expect(questionRegex.test('colou?r')).toBe(true)
      expect(questionRegex.test('colour')).toBe(false)
      expect(questionRegex.test('color')).toBe(false)

      // 5. Pipe should match only pipe, not alternation
      const pipeRegex = new RegExp(`^${escapeExp('apple|banana')}$`)
      expect(pipeRegex.test('apple|banana')).toBe(true)
      expect(pipeRegex.test('apple')).toBe(false)
      expect(pipeRegex.test('banana')).toBe(false)

      // 6. Caret and Dollar should match literal characters, not anchors
      const anchorsRegex = new RegExp(`^${escapeExp('^start and end$')}$`)
      expect(anchorsRegex.test('^start and end$')).toBe(true)
      expect(anchorsRegex.test('start and end')).toBe(false)

      // 7. Brackets should match literal brackets, not character classes
      const bracketRegex = new RegExp(`^${escapeExp('[abc]')}$`)
      expect(bracketRegex.test('[abc]')).toBe(true)
      expect(bracketRegex.test('a')).toBe(false)

      // 8. Curly braces should match literal braces, not quantifiers
      const curlyRegex = new RegExp(`^${escapeExp('a{2}')}$`)
      expect(curlyRegex.test('a{2}')).toBe(true)
      expect(curlyRegex.test('aa')).toBe(false)

      // 9. Backslash followed by d should match literal '\d', not digits
      const digitRegex = new RegExp(`^${escapeExp('\\d+')}$`)
      expect(digitRegex.test('\\d+')).toBe(true)
      expect(digitRegex.test('123')).toBe(false)
    })
  })
})
