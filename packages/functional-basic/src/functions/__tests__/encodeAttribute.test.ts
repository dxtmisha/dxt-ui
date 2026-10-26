import { describe, it, expect } from 'vitest'
import { encodeAttribute } from '../encodeAttribute'

describe('encodeAttribute', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should encode ampersand (&) to &amp;', () => {
      expect(encodeAttribute('foo & bar')).toBe('foo &amp; bar')
      expect(encodeAttribute('Tom & Jerry & Spike')).toBe('Tom &amp; Jerry &amp; Spike')
      expect(encodeAttribute('R&D')).toBe('R&amp;D')
    })

    it('should encode less-than (<) to &lt;', () => {
      expect(encodeAttribute('5 < 10')).toBe('5 &lt; 10')
      expect(encodeAttribute('<div>')).toBe('&lt;div&gt;')
      expect(encodeAttribute('a < b < c')).toBe('a &lt; b &lt; c')
    })

    it('should encode greater-than (>) to &gt;', () => {
      expect(encodeAttribute('10 > 5')).toBe('10 &gt; 5')
      expect(encodeAttribute('</div>')).toBe('&lt;/div&gt;')
      expect(encodeAttribute('z > y > x')).toBe('z &gt; y &gt; x')
    })

    it('should encode double quote (") to &quot;', () => {
      expect(encodeAttribute('He said "hello"')).toBe('He said &quot;hello&quot;')
      expect(encodeAttribute('"quoted"')).toBe('&quot;quoted&quot;')
      expect(encodeAttribute('width="100%" height="50px"'))
        .toBe('width=&quot;100%&quot; height=&quot;50px&quot;')
    })

    it('should encode single quote (\') to &#39;', () => {
      expect(encodeAttribute('It\'s a wonderful day')).toBe('It&#39;s a wonderful day')
      expect(encodeAttribute('\'single\'')).toBe('&#39;single&#39;')
      expect(encodeAttribute('John\'s book, Mary\'s pen'))
        .toBe('John&#39;s book, Mary&#39;s pen')
    })

    it('should encode all 5 target characters together in a single string', () => {
      expect(encodeAttribute('<div class="box" id=\'item\'>A & B > 0</div>'))
        .toBe('&lt;div class=&quot;box&quot; id=&#39;item&#39;&gt;A &amp; B &gt; 0&lt;/div&gt;')
    })

    it('should return original string unchanged when no special characters exist', () => {
      expect(encodeAttribute('hello world')).toBe('hello world')
      expect(encodeAttribute('simple-attribute-value-123')).toBe('simple-attribute-value-123')
      expect(encodeAttribute('my_component_class_name')).toBe('my_component_class_name')
      expect(encodeAttribute('alphaNumeric1234567890')).toBe('alphaNumeric1234567890')
    })

    it('should preserve standard attribute separators and punctuation when not matching special characters', () => {
      expect(encodeAttribute('key:value;other=123')).toBe('key:value;other=123')
      expect(encodeAttribute('/path/to/resource.html')).toBe('/path/to/resource.html')
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

    it('should handle multiple consecutive special characters of the same kind', () => {
      expect(encodeAttribute('&&&')).toBe('&amp;&amp;&amp;')
      expect(encodeAttribute('<<<')).toBe('&lt;&lt;&lt;')
      expect(encodeAttribute('>>>')).toBe('&gt;&gt;&gt;')
      expect(encodeAttribute('"""')).toBe('&quot;&quot;&quot;')
      expect(encodeAttribute('\'\'\'')).toBe('&#39;&#39;&#39;')
    })

    it('should handle mixed clusters of consecutive special characters', () => {
      expect(encodeAttribute('&<>"\'&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#39;&amp;&lt;&gt;&quot;&#39;')
      expect(encodeAttribute('""\'\'<<>>&&')).toBe('&quot;&quot;&#39;&#39;&lt;&lt;&gt;&gt;&amp;&amp;')
    })

    it('should handle special characters located strictly at the start or end of strings', () => {
      expect(encodeAttribute('&start')).toBe('&amp;start')
      expect(encodeAttribute('<start')).toBe('&lt;start')
      expect(encodeAttribute('>start')).toBe('&gt;start')
      expect(encodeAttribute('"start')).toBe('&quot;start')
      expect(encodeAttribute('\'start')).toBe('&#39;start')

      expect(encodeAttribute('end&')).toBe('end&amp;')
      expect(encodeAttribute('end<')).toBe('end&lt;')
      expect(encodeAttribute('end>')).toBe('end&gt;')
      expect(encodeAttribute('end"')).toBe('end&quot;')
      expect(encodeAttribute('end\'')).toBe('end&#39;')

      expect(encodeAttribute('"wrapped"')).toBe('&quot;wrapped&quot;')
      expect(encodeAttribute('\'wrapped\'')).toBe('&#39;wrapped&#39;')
      expect(encodeAttribute('<wrapped>')).toBe('&lt;wrapped&gt;')
      expect(encodeAttribute('&wrapped&')).toBe('&amp;wrapped&amp;')
    })

    it('should handle alternating special and regular characters', () => {
      expect(encodeAttribute('a&b<c>d"e\'f')).toBe('a&amp;b&lt;c&gt;d&quot;e&#39;f')
      expect(encodeAttribute('1"2"3"4"5')).toBe('1&quot;2&quot;3&quot;4&quot;5')
    })

    it('should handle very long strings efficiently without truncation or data loss', () => {
      const longSafeText = 'abcdefghijklmnopqrstuvwxyz0123456789-_'.repeat(300)
      expect(encodeAttribute(longSafeText)).toBe(longSafeText)

      const entityPattern = '&<>"\''
      const repeatCount = 2000
      const longUnsafeText = entityPattern.repeat(repeatCount)
      const expectedEncoded = '&amp;&lt;&gt;&quot;&#39;'.repeat(repeatCount)

      expect(encodeAttribute(longUnsafeText)).toBe(expectedEncoded)
      expect(encodeAttribute(longUnsafeText).length).toBe(expectedEncoded.length)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return an empty string when input is empty string', () => {
      expect(encodeAttribute('')).toBe('')
    })

    it('should preserve spaces without trimming', () => {
      expect(encodeAttribute(' ')).toBe(' ')
      expect(encodeAttribute('     ')).toBe('     ')
      expect(encodeAttribute('  hello world  ')).toBe('  hello world  ')
    })

    it('should preserve tabs, newlines, and mixed whitespace formatting', () => {
      expect(encodeAttribute('\t')).toBe('\t')
      expect(encodeAttribute('\t\t\t')).toBe('\t\t\t')
      expect(encodeAttribute('\n')).toBe('\n')
      expect(encodeAttribute('\r\n')).toBe('\r\n')
      expect(encodeAttribute(' \t\n\r ')).toBe(' \t\n\r ')
      expect(encodeAttribute(' \t<tag id="1">\n ')).toBe(' \t&lt;tag id=&quot;1&quot;&gt;\n ')
    })

    it('should safely handle null by returning an empty string', () => {
      expect(encodeAttribute(null)).toBe('')
    })

    it('should safely handle undefined by returning an empty string', () => {
      expect(encodeAttribute(undefined)).toBe('')
    })

    it('should safely handle invocation with no arguments by returning an empty string', () => {
      expect(encodeAttribute()).toBe('')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should safely coerce numeric zero (0 and -0) to string without treating as empty', () => {
      expect(encodeAttribute(0)).toBe('0')
      expect(encodeAttribute(-0)).toBe('0')
    })

    it('should safely coerce positive and negative integers', () => {
      expect(encodeAttribute(1)).toBe('1')
      expect(encodeAttribute(123)).toBe('123')
      expect(encodeAttribute(-1)).toBe('-1')
      expect(encodeAttribute(-42)).toBe('-42')
    })

    it('should safely coerce floating point and scientific notation numbers', () => {
      expect(encodeAttribute(3.14159)).toBe('3.14159')
      expect(encodeAttribute(-0.005)).toBe('-0.005')
      expect(encodeAttribute(1e5)).toBe('100000')
    })

    it('should safely coerce special numeric values (NaN, Infinity, -Infinity)', () => {
      expect(encodeAttribute(NaN)).toBe('NaN')
      expect(encodeAttribute(Infinity)).toBe('Infinity')
      expect(encodeAttribute(-Infinity)).toBe('-Infinity')
    })

    it('should safely coerce boolean values passed via type assertions', () => {
      expect(encodeAttribute(false as unknown as string)).toBe('false')
      expect(encodeAttribute(true as unknown as string)).toBe('true')
    })

    it('should safely handle objects with custom toString methods', () => {
      const objectWithSpecialChars = {
        toString() {
          return '<custom & "value">'
        }
      }
      expect(encodeAttribute(objectWithSpecialChars as unknown as string))
        .toBe('&lt;custom &amp; &quot;value&quot;&gt;')

      const objectWithCleanString = {
        toString() {
          return 'clean-identifier'
        }
      }
      expect(encodeAttribute(objectWithCleanString as unknown as string))
        .toBe('clean-identifier')
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should neutralize classic script tag injection payloads', () => {
      expect(encodeAttribute('<script>alert("XSS")</script>'))
        .toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;')
      expect(encodeAttribute('<script src="http://evil.com/xss.js"></script>'))
        .toBe('&lt;script src=&quot;http://evil.com/xss.js&quot;&gt;&lt;/script&gt;')
    })

    it('should neutralize double-quote attribute breakout attacks', () => {
      expect(encodeAttribute('"><img src=x onerror=alert(1)>'))
        .toBe('&quot;&gt;&lt;img src=x onerror=alert(1)&gt;')
      expect(encodeAttribute('" autofocus onfocus="alert(document.cookie)'))
        .toBe('&quot; autofocus onfocus=&quot;alert(document.cookie)')
    })

    it('should neutralize single-quote attribute breakout attacks', () => {
      expect(encodeAttribute('\'><svg/onload=alert(1)>'))
        .toBe('&#39;&gt;&lt;svg/onload=alert(1)&gt;')
      expect(encodeAttribute('\' onmouseover=\'alert(1)'))
        .toBe('&#39; onmouseover=&#39;alert(1)')
    })

    it('should neutralize self-closing element breakout vectors', () => {
      expect(encodeAttribute('"/> <script>alert(1)</script>'))
        .toBe('&quot;/&gt; &lt;script&gt;alert(1)&lt;/script&gt;')
    })

    it('should preserve URL query components while safely encoding ampersands', () => {
      const url = 'https://example.com/search?category=books&author=John+Doe&lang=en#results'
      expect(encodeAttribute(url))
        .toBe('https://example.com/search?category=books&amp;author=John+Doe&amp;lang=en#results')
    })

    it('should double-encode existing HTML entities per HTML attribute specifications', () => {
      expect(encodeAttribute('&amp;')).toBe('&amp;amp;')
      expect(encodeAttribute('&lt;')).toBe('&amp;lt;')
      expect(encodeAttribute('&gt;')).toBe('&amp;gt;')
      expect(encodeAttribute('&quot;')).toBe('&amp;quot;')
      expect(encodeAttribute('&#39;')).toBe('&amp;#39;')
      expect(encodeAttribute('&lt;&gt;&amp;&quot;&#39;'))
        .toBe('&amp;lt;&amp;gt;&amp;amp;&amp;quot;&amp;#39;')
    })

    it('should NOT alter characters that are safe inside quoted HTML attributes', () => {
      const safeCharacters = '/\\`=;:?$#@!%^*()_+-[]{}|~'
      expect(encodeAttribute(safeCharacters)).toBe(safeCharacters)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic text while encoding special characters', () => {
      expect(encodeAttribute('Привет & "Мир"'))
        .toBe('Привет &amp; &quot;Мир&quot;')
      expect(encodeAttribute('<Категория> & "Тест"'))
        .toBe('&lt;Категория&gt; &amp; &quot;Тест&quot;')
      expect(encodeAttribute('Пользователь: Иван, Статус: "Активен"'))
        .toBe('Пользователь: Иван, Статус: &quot;Активен&quot;')
    })

    it('should preserve Vietnamese diacritics and complex tone marks', () => {
      expect(encodeAttribute('Tiếng Việt <đẹp & chuẩn>'))
        .toBe('Tiếng Việt &lt;đẹp &amp; chuẩn&gt;')
      expect(encodeAttribute('"Học tiếng Việt" & phát triển'))
        .toBe('&quot;Học tiếng Việt&quot; &amp; phát triển')
      expect(encodeAttribute('Việt Nam: Hà Nội, Đà Nẵng, TP. Hồ Chí Minh <3'))
        .toBe('Việt Nam: Hà Nội, Đà Nẵng, TP. Hồ Chí Minh &lt;3')
    })

    it('should preserve CJK (Chinese, Japanese, Korean) characters with special characters', () => {
      expect(encodeAttribute('你好 & "世界"'))
        .toBe('你好 &amp; &quot;世界&quot;')
      expect(encodeAttribute('こんにちは <世界> & \'日本\''))
        .toBe('こんにちは &lt;世界&gt; &amp; &#39;日本&#39;')
      expect(encodeAttribute('한국어 "테스트" & <데이터>'))
        .toBe('한국어 &quot;테스트&quot; &amp; &lt;데이터&gt;')
    })

    it('should preserve European accents and umlauts (German, French, Spanish)', () => {
      expect(encodeAttribute('Über <Größe> & "Farbe"'))
        .toBe('Über &lt;Größe&gt; &amp; &quot;Farbe&quot;')
      expect(encodeAttribute('Café <crème> & \'croissant\''))
        .toBe('Café &lt;crème&gt; &amp; &#39;croissant&#39;')
      expect(encodeAttribute('Año <nuevo> & "fiesta"'))
        .toBe('Año &lt;nuevo&gt; &amp; &quot;fiesta&quot;')
    })

    it('should preserve emojis and surrogate pairs without byte corruption', () => {
      expect(encodeAttribute('🚀 <🔥> "✨" & \'🎉\''))
        .toBe('🚀 &lt;🔥&gt; &quot;✨&quot; &amp; &#39;🎉&#39;')
      expect(encodeAttribute('👨‍👩‍👧‍👦 & 👩‍💻 <hello>'))
        .toBe('👨‍👩‍👧‍👦 &amp; 👩‍💻 &lt;hello&gt;')
      expect(encodeAttribute('Badge: ⭐️ (rating > 4.5 & score = "A+")'))
        .toBe('Badge: ⭐️ (rating &gt; 4.5 &amp; score = &quot;A+&quot;)')
    })
  })

  describe('Statefulness, isolation, and pure execution', () => {
    it('should remain purely deterministic across sequential invocations', () => {
      const input = 'test <>&"\' value'
      const expected = 'test &lt;&gt;&amp;&quot;&#39; value'

      for (let iteration = 0; iteration < 50; iteration++) {
        expect(encodeAttribute(input)).toBe(expected)
      }
    })

    it('should not leak state between alternating calls with diverse inputs', () => {
      expect(encodeAttribute('&')).toBe('&amp;')
      expect(encodeAttribute('plain text')).toBe('plain text')
      expect(encodeAttribute('<tag>')).toBe('&lt;tag&gt;')
      expect(encodeAttribute('')).toBe('')
      expect(encodeAttribute('"quoted"')).toBe('&quot;quoted&quot;')
      expect(encodeAttribute(null)).toBe('')
      expect(encodeAttribute('\'single\'')).toBe('&#39;single&#39;')
      expect(encodeAttribute(12345)).toBe('12345')
      expect(encodeAttribute('&')).toBe('&amp;')
      expect(encodeAttribute()).toBe('')
    })

    it('should produce identical results in asynchronous or concurrent promises', async () => {
      const inputs = [
        '<alpha>',
        'beta & gamma',
        '"delta"',
        '\'epsilon\'',
        'safe-omega'
      ]

      const results = await Promise.all(inputs.map(item => Promise.resolve(encodeAttribute(item))))

      expect(results).toEqual([
        '&lt;alpha&gt;',
        'beta &amp; gamma',
        '&quot;delta&quot;',
        '&#39;epsilon&#39;',
        'safe-omega'
      ])
    })
  })
})
