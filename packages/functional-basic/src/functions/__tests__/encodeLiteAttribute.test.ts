import { describe, it, expect } from 'vitest'
import { encodeLiteAttribute } from '../encodeLiteAttribute'

describe('encodeLiteAttribute', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should encode ampersand (&) to &amp;', () => {
      expect(encodeLiteAttribute('foo & bar')).toBe('foo &amp; bar')
      expect(encodeLiteAttribute('Tom & Jerry')).toBe('Tom &amp; Jerry')
    })

    it('should encode less-than (<) to &lt;', () => {
      expect(encodeLiteAttribute('5 < 10')).toBe('5 &lt; 10')
      expect(encodeLiteAttribute('<div>')).toBe('&lt;div&gt;')
    })

    it('should encode greater-than (>) to &gt;', () => {
      expect(encodeLiteAttribute('10 > 5')).toBe('10 &gt; 5')
      expect(encodeLiteAttribute('</div>')).toBe('&lt;/div&gt;')
    })

    it('should encode all 3 target special characters in a single string', () => {
      expect(encodeLiteAttribute('<a> & <b>')).toBe('&lt;a&gt; &amp; &lt;b&gt;')
      expect(encodeLiteAttribute('1 < 2 & 3 > 4')).toBe('1 &lt; 2 &amp; 3 &gt; 4')
      expect(encodeLiteAttribute('<tag>&data</tag>')).toBe('&lt;tag&gt;&amp;data&lt;/tag&gt;')
    })

    it('should return original string unchanged when no special characters exist', () => {
      expect(encodeLiteAttribute('hello world')).toBe('hello world')
      expect(encodeLiteAttribute('simple-title-value-123')).toBe('simple-title-value-123')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle single special character strings', () => {
      expect(encodeLiteAttribute('&')).toBe('&amp;')
      expect(encodeLiteAttribute('<')).toBe('&lt;')
      expect(encodeLiteAttribute('>')).toBe('&gt;')
    })

    it('should handle multiple consecutive special characters', () => {
      expect(encodeLiteAttribute('&&&')).toBe('&amp;&amp;&amp;')
      expect(encodeLiteAttribute('<<<')).toBe('&lt;&lt;&lt;')
      expect(encodeLiteAttribute('>>>')).toBe('&gt;&gt;&gt;')
      expect(encodeLiteAttribute('<>&<>&')).toBe('&lt;&gt;&amp;&lt;&gt;&amp;')
    })

    it('should handle special characters at the very start and end of strings', () => {
      expect(encodeLiteAttribute('&start')).toBe('&amp;start')
      expect(encodeLiteAttribute('end&')).toBe('end&amp;')
      expect(encodeLiteAttribute('<wrapped>')).toBe('&lt;wrapped&gt;')
    })

    it('should handle very long strings efficiently without truncation', () => {
      const repeatedSafe = 'a'.repeat(10000)
      expect(encodeLiteAttribute(repeatedSafe)).toBe(repeatedSafe)

      const repeatedEntities = '<>&'.repeat(2000)
      const expectedEntities = '&lt;&gt;&amp;'.repeat(2000)
      expect(encodeLiteAttribute(repeatedEntities)).toBe(expectedEntities)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return empty string when input is empty string', () => {
      expect(encodeLiteAttribute('')).toBe('')
    })

    it('should preserve spaces, tabs, and newlines without trimming', () => {
      expect(encodeLiteAttribute('   ')).toBe('   ')
      expect(encodeLiteAttribute('\t\t')).toBe('\t\t')
      expect(encodeLiteAttribute('\n\r\n')).toBe('\n\r\n')
      expect(encodeLiteAttribute('  hello world  ')).toBe('  hello world  ')
      expect(encodeLiteAttribute(' \t<tag>\n ')).toBe(' \t&lt;tag&gt;\n ')
    })

    it('should safely handle null by returning an empty string', () => {
      expect(encodeLiteAttribute(null as unknown as string)).toBe('')
    })

    it('should safely handle undefined by returning an empty string', () => {
      expect(encodeLiteAttribute(undefined as unknown as string)).toBe('')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should safely coerce numeric zero (0 and -0) to string', () => {
      expect(encodeLiteAttribute(0 as unknown as string)).toBe('0')
      expect(encodeLiteAttribute(-0 as unknown as string)).toBe('0')
    })

    it('should safely coerce positive and negative numbers', () => {
      expect(encodeLiteAttribute(123 as unknown as string)).toBe('123')
      expect(encodeLiteAttribute(-42 as unknown as string)).toBe('-42')
      expect(encodeLiteAttribute(3.14159 as unknown as string)).toBe('3.14159')
    })

    it('should safely coerce boolean values', () => {
      expect(encodeLiteAttribute(false as unknown as string)).toBe('false')
      expect(encodeLiteAttribute(true as unknown as string)).toBe('true')
    })

    it('should safely convert objects with custom toString method', () => {
      const customObject = {
        toString() {
          return '<custom & "value">'
        }
      }
      expect(encodeLiteAttribute(customObject as unknown as string))
        .toBe('&lt;custom &amp; "value"&gt;')
    })
  })

  describe('Contract preservation (Preserving quotes and standard punctuation)', () => {
    it('should explicitly NOT encode single, double quotes, and backticks', () => {
      expect(encodeLiteAttribute('He said "it\'s fine"')).toBe('He said "it\'s fine"')
      expect(encodeLiteAttribute('"quoted"')).toBe('"quoted"')
      expect(encodeLiteAttribute('\'single\'')).toBe('\'single\'')
      expect(encodeLiteAttribute('`template`')).toBe('`template`')
      expect(encodeLiteAttribute('<title>"Quotes & Title"</title>'))
        .toBe('&lt;title&gt;"Quotes &amp; Title"&lt;/title&gt;')
    })

    it('should NOT alter punctuation, math symbols, and regex metacharacters', () => {
      const safeCharacters = '/\\`=;:?$#@!%^*()_+-[]{}|~'
      expect(encodeLiteAttribute(safeCharacters)).toBe(safeCharacters)
      expect(encodeLiteAttribute('Price: $10.99')).toBe('Price: $10.99')
      expect(encodeLiteAttribute('Email: test@example.com')).toBe('Email: test@example.com')
      expect(encodeLiteAttribute('Path: /usr/local/bin')).toBe('Path: /usr/local/bin')
    })

    it('should preserve URL slashes, equals, and question marks while encoding ampersands', () => {
      const url = 'https://example.com/search?q=vue&category=ui#section'
      expect(encodeLiteAttribute(url))
        .toBe('https://example.com/search?q=vue&amp;category=ui#section')
    })

    it('should double-encode existing HTML entities according to entity specification', () => {
      expect(encodeLiteAttribute('&amp;')).toBe('&amp;amp;')
      expect(encodeLiteAttribute('&lt;&gt;')).toBe('&amp;lt;&amp;gt;')
      expect(encodeLiteAttribute('&quot;&#39;')).toBe('&amp;quot;&amp;#39;')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic text while encoding special characters', () => {
      expect(encodeLiteAttribute('Война & "Мир" <Том 1>'))
        .toBe('Война &amp; "Мир" &lt;Том 1&gt;')
      expect(encodeLiteAttribute('<Категория> & "Тест"'))
        .toBe('&lt;Категория&gt; &amp; "Тест"')
    })

    it('should preserve Vietnamese diacritics while encoding special characters', () => {
      expect(encodeLiteAttribute('Tiếng Việt <đẹp & chuẩn>'))
        .toBe('Tiếng Việt &lt;đẹp &amp; chuẩn&gt;')
      expect(encodeLiteAttribute('"Học tiếng Việt" & phát triển'))
        .toBe('"Học tiếng Việt" &amp; phát triển')
    })

    it('should preserve CJK characters while encoding special characters', () => {
      expect(encodeLiteAttribute('你好 & "世界" <测试>'))
        .toBe('你好 &amp; "世界" &lt;测试&gt;')
      expect(encodeLiteAttribute('こんにちは <世界> & \'日本\''))
        .toBe('こんにちは &lt;世界&gt; &amp; \'日本\'')
      expect(encodeLiteAttribute('한국어 "테스트" & <데이터>'))
        .toBe('한국어 "테스트" &amp; &lt;데이터&gt;')
    })

    it('should preserve emojis and surrogate pairs without corruption', () => {
      expect(encodeLiteAttribute('🚀 <🔥> "✨" & \'🎉\''))
        .toBe('🚀 &lt;🔥&gt; "✨" &amp; \'🎉\'')
      expect(encodeLiteAttribute('👨‍👩‍👧‍👦 & 👩‍💻 <hello>'))
        .toBe('👨‍👩‍👧‍👦 &amp; 👩‍💻 &lt;hello&gt;')
    })
  })

  describe('Statefulness, isolation, and pure execution', () => {
    it('should remain purely deterministic across sequential invocations', () => {
      const input = 'test <>&"\' value'
      const expected = 'test &lt;&gt;&amp;"\' value'

      for (let index = 0; index < 20; index++) {
        expect(encodeLiteAttribute(input)).toBe(expected)
      }
    })

    it('should not leak state between alternating calls with diverse inputs', () => {
      expect(encodeLiteAttribute('&')).toBe('&amp;')
      expect(encodeLiteAttribute('plain text')).toBe('plain text')
      expect(encodeLiteAttribute('<tag>')).toBe('&lt;tag&gt;')
      expect(encodeLiteAttribute('')).toBe('')
      expect(encodeLiteAttribute('"quoted"')).toBe('"quoted"')
      expect(encodeLiteAttribute(null as unknown as string)).toBe('')
      expect(encodeLiteAttribute('\'single\'')).toBe('\'single\'')
      expect(encodeLiteAttribute('>')).toBe('&gt;')
    })
  })
})
