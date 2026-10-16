import { describe, it, expect } from 'vitest'
import { encodeAttribute } from '../encodeAttribute'

describe('encodeAttribute', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should encode ampersand (&) to &amp;', () => {
      expect(encodeAttribute('foo & bar')).toBe('foo &amp; bar')
      expect(encodeAttribute('Tom & Jerry')).toBe('Tom &amp; Jerry')
    })

    it('should encode less-than (<) to &lt;', () => {
      expect(encodeAttribute('5 < 10')).toBe('5 &lt; 10')
      expect(encodeAttribute('<div>')).toBe('&lt;div&gt;')
    })

    it('should encode greater-than (>) to &gt;', () => {
      expect(encodeAttribute('10 > 5')).toBe('10 &gt; 5')
      expect(encodeAttribute('</div>')).toBe('&lt;/div&gt;')
    })

    it('should encode double quote (") to &quot;', () => {
      expect(encodeAttribute('He said "hello"')).toBe('He said &quot;hello&quot;')
      expect(encodeAttribute('"quoted"')).toBe('&quot;quoted&quot;')
    })

    it('should encode single quote (\') to &#39;', () => {
      expect(encodeAttribute('It\'s a wonderful day')).toBe('It&#39;s a wonderful day')
      expect(encodeAttribute('\'single\'')).toBe('&#39;single&#39;')
    })

    it('should encode all 5 target characters together in a single string', () => {
      expect(encodeAttribute('<div class="box" id=\'item\'>A & B</div>'))
        .toBe('&lt;div class=&quot;box&quot; id=&#39;item&#39;&gt;A &amp; B&lt;/div&gt;')
    })

    it('should return original string unchanged when no special characters exist', () => {
      expect(encodeAttribute('hello world')).toBe('hello world')
      expect(encodeAttribute('simple-attribute-value-123')).toBe('simple-attribute-value-123')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle single special character strings', () => {
      expect(encodeAttribute('&')).toBe('&amp;')
      expect(encodeAttribute('<')).toBe('&lt;')
      expect(encodeAttribute('>')).toBe('&gt;')
      expect(encodeAttribute('"')).toBe('&quot;')
      expect(encodeAttribute('\'')).toBe('&#39;')
    })

    it('should handle multiple consecutive special characters', () => {
      expect(encodeAttribute('&&&')).toBe('&amp;&amp;&amp;')
      expect(encodeAttribute('<<<')).toBe('&lt;&lt;&lt;')
      expect(encodeAttribute('>>>')).toBe('&gt;&gt;&gt;')
      expect(encodeAttribute('"""')).toBe('&quot;&quot;&quot;')
      expect(encodeAttribute('\'\'\'')).toBe('&#39;&#39;&#39;')
      expect(encodeAttribute('&<>"\'&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#39;&amp;&lt;&gt;&quot;&#39;')
    })

    it('should handle special characters at the very start and end of strings', () => {
      expect(encodeAttribute('&start')).toBe('&amp;start')
      expect(encodeAttribute('end&')).toBe('end&amp;')
      expect(encodeAttribute('"wrapped"')).toBe('&quot;wrapped&quot;')
      expect(encodeAttribute('\'wrapped\'')).toBe('&#39;wrapped&#39;')
    })

    it('should handle very long strings efficiently without truncation', () => {
      const repeatedSafe = 'a'.repeat(10000)
      expect(encodeAttribute(repeatedSafe)).toBe(repeatedSafe)

      const repeatedEntities = '&<>"\''.repeat(2000)
      const expectedEntities = '&amp;&lt;&gt;&quot;&#39;'.repeat(2000)
      expect(encodeAttribute(repeatedEntities)).toBe(expectedEntities)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return empty string when input is empty string', () => {
      expect(encodeAttribute('')).toBe('')
    })

    it('should preserve spaces, tabs, and newlines without trimming', () => {
      expect(encodeAttribute('   ')).toBe('   ')
      expect(encodeAttribute('\t\t')).toBe('\t\t')
      expect(encodeAttribute('\n\r\n')).toBe('\n\r\n')
      expect(encodeAttribute('  hello world  ')).toBe('  hello world  ')
      expect(encodeAttribute(' \t<tag>\n ')).toBe(' \t&lt;tag&gt;\n ')
    })

    it('should safely handle null by returning an empty string', () => {
      expect(encodeAttribute(null as unknown as string)).toBe('')
    })

    it('should safely handle undefined by returning an empty string', () => {
      expect(encodeAttribute(undefined as unknown as string)).toBe('')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should safely coerce numeric zero (0 and -0) to string', () => {
      expect(encodeAttribute(0 as unknown as string)).toBe('0')
      expect(encodeAttribute(-0 as unknown as string)).toBe('0')
    })

    it('should safely coerce positive and negative numbers', () => {
      expect(encodeAttribute(123 as unknown as string)).toBe('123')
      expect(encodeAttribute(-42 as unknown as string)).toBe('-42')
      expect(encodeAttribute(3.14159 as unknown as string)).toBe('3.14159')
    })

    it('should safely coerce boolean values', () => {
      expect(encodeAttribute(false as unknown as string)).toBe('false')
      expect(encodeAttribute(true as unknown as string)).toBe('true')
    })

    it('should safely convert objects with custom toString method', () => {
      const customObject = {
        toString() {
          return '<custom & "value">'
        }
      }
      expect(encodeAttribute(customObject as unknown as string))
        .toBe('&lt;custom &amp; &quot;value&quot;&gt;')
    })
  })

  describe('Metacharacters, escaping, and security (XSS prevention)', () => {
    it('should neutralize classic script tag injection', () => {
      expect(encodeAttribute('<script>alert("XSS")</script>'))
        .toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;')
    })

    it('should neutralize attribute breakout payloads with quotes and tags', () => {
      expect(encodeAttribute('"><img src=x onerror=alert(1)>'))
        .toBe('&quot;&gt;&lt;img src=x onerror=alert(1)&gt;')
      expect(encodeAttribute('\'> <svg/onload=alert(1)>'))
        .toBe('&#39;&gt; &lt;svg/onload=alert(1)&gt;')
    })

    it('should neutralize event handler injections inside attribute quotes', () => {
      expect(encodeAttribute('" onmouseover="alert(document.cookie)'))
        .toBe('&quot; onmouseover=&quot;alert(document.cookie)')
      expect(encodeAttribute('\' onclick=\'evil()'))
        .toBe('&#39; onclick=&#39;evil()')
    })

    it('should NOT alter characters that are safe inside quoted HTML attributes', () => {
      const safeCharacters = '/\\`=;:?$#@!%^*()_+-[]{}|~'
      expect(encodeAttribute(safeCharacters)).toBe(safeCharacters)
    })

    it('should preserve URL slashes, equals, and question marks while encoding ampersands', () => {
      const url = 'https://example.com/search?q=vue&category=ui#section'
      expect(encodeAttribute(url))
        .toBe('https://example.com/search?q=vue&amp;category=ui#section')
    })

    it('should double-encode existing HTML entities according to HTML attribute specification', () => {
      expect(encodeAttribute('&amp;')).toBe('&amp;amp;')
      expect(encodeAttribute('&lt;&gt;')).toBe('&amp;lt;&amp;gt;')
      expect(encodeAttribute('&quot;&#39;')).toBe('&amp;quot;&amp;#39;')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic text while encoding special characters', () => {
      expect(encodeAttribute('Привет & "Мир"'))
        .toBe('Привет &amp; &quot;Мир&quot;')
      expect(encodeAttribute('<Категория> & "Тест"'))
        .toBe('&lt;Категория&gt; &amp; &quot;Тест&quot;')
    })

    it('should preserve Vietnamese diacritics while encoding special characters', () => {
      expect(encodeAttribute('Tiếng Việt <đẹp & chuẩn>'))
        .toBe('Tiếng Việt &lt;đẹp &amp; chuẩn&gt;')
      expect(encodeAttribute('"Học tiếng Việt" & phát triển'))
        .toBe('&quot;Học tiếng Việt&quot; &amp; phát triển')
    })

    it('should preserve CJK characters while encoding special characters', () => {
      expect(encodeAttribute('你好 & "世界"'))
        .toBe('你好 &amp; &quot;世界&quot;')
      expect(encodeAttribute('こんにちは <世界> & \'日本\''))
        .toBe('こんにちは &lt;世界&gt; &amp; &#39;日本&#39;')
      expect(encodeAttribute('한국어 "테스트" & <데이터>'))
        .toBe('한국어 &quot;테스트&quot; &amp; &lt;데이터&gt;')
    })

    it('should preserve emojis and surrogate pairs without corruption', () => {
      expect(encodeAttribute('🚀 <🔥> "✨" & \'🎉\''))
        .toBe('🚀 &lt;🔥&gt; &quot;✨&quot; &amp; &#39;🎉&#39;')
      expect(encodeAttribute('👨‍👩‍👧‍👦 & 👩‍💻 <hello>'))
        .toBe('👨‍👩‍👧‍👦 &amp; 👩‍💻 &lt;hello&gt;')
    })
  })

  describe('Statefulness, isolation, and pure execution', () => {
    it('should remain purely deterministic across sequential invocations', () => {
      const input = 'test <>&"\' value'
      const expected = 'test &lt;&gt;&amp;&quot;&#39; value'

      for (let index = 0; index < 20; index++) {
        expect(encodeAttribute(input)).toBe(expected)
      }
    })

    it('should not leak state between alternating calls with diverse inputs', () => {
      expect(encodeAttribute('&')).toBe('&amp;')
      expect(encodeAttribute('plain text')).toBe('plain text')
      expect(encodeAttribute('<tag>')).toBe('&lt;tag&gt;')
      expect(encodeAttribute('')).toBe('')
      expect(encodeAttribute('"quoted"')).toBe('&quot;quoted&quot;')
      expect(encodeAttribute(null as unknown as string)).toBe('')
      expect(encodeAttribute('\'single\'')).toBe('&#39;single&#39;')
    })
  })
})
