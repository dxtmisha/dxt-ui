import { describe, it, expect } from 'vitest'
import { addTagHighlightMatch } from '../addTagHighlightMatch'
import { removeTag } from '../removeTag'

describe('removeTag', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should remove simple HTML tags and preserve text content', () => {
      const result = removeTag('<p>Hello <b>world</b>!</p>')
      expect(result).toBe('Hello world!')
    })

    it('should remove deeply nested HTML tags', () => {
      const result = removeTag('<div><section><p><span><a>Deep text</a></span></p></section></div>')
      expect(result).toBe('Deep text')
    })

    it('should remove self-closing and void tags', () => {
      const result = removeTag('Line 1<br/>Line 2<br>Line 3<hr><img src="pic.jpg" alt="pic" />')
      expect(result).toBe('Line 1Line 2Line 3')
    })

    it('should remove multiline HTML tags', () => {
      const result = removeTag('<div\n  class="card"\n  id="main"\n>\n  Content\n</div>')
      expect(result).toBe('\n  Content\n')
    })
  })

  describe('Removing specific tags', () => {
    it('should remove only the specified tag and leave other tags intact', () => {
      const result = removeTag('<b>Bold</b> and <i>Italic</i> and <p>Paragraph</p>', { tag: 'b' })
      expect(result).toBe('Bold and <i>Italic</i> and <p>Paragraph</p>')
    })

    it('should remove specific tag when passed with angle brackets', () => {
      const result = removeTag('<b>Bold</b> and <i>Italic</i>', { tag: '<b>' })
      expect(result).toBe('Bold and <i>Italic</i>')
    })

    it('should remove multiple specified tags passed as an array', () => {
      const result = removeTag('<b>Bold</b>, <i>Italic</i>, <u>Underline</u>', { tag: ['b', 'i'] })
      expect(result).toBe('Bold, Italic, <u>Underline</u>')
    })

    it('should treat string as a single tag name and not split by comma or spaces', () => {
      const result = removeTag('<b>Bold</b>, <i>Italic</i>, <u>Underline</u>', { tag: 'b, i' })
      expect(result).toBe('<b>Bold</b>, <i>Italic</i>, <u>Underline</u>')
    })

    it('should be case-insensitive when matching tag names', () => {
      expect(removeTag('<B>Bold</B> and <i>Italic</i>', { tag: 'b' })).toBe('Bold and <i>Italic</i>')
      expect(removeTag('<b>Bold</b> and <i>Italic</i>', { tag: 'B' })).toBe('Bold and <i>Italic</i>')
    })

    it('should leave string unchanged if specified tag is not present in the string', () => {
      const result = removeTag('<b>Hello</b>', { tag: 'span' })
      expect(result).toBe('<b>Hello</b>')
    })

    it('should leave string unchanged if tag filter is an empty string, whitespace, or empty array', () => {
      const content = '<b>Bold</b> and <i>Italic</i>'
      expect(removeTag(content, { tag: '' })).toBe(content)
      expect(removeTag(content, { tag: '   ' })).toBe(content)
      expect(removeTag(content, { tag: [] })).toBe(content)
    })

    it('should leave string unchanged if tag filter contains only angle brackets or empty tokens', () => {
      const content = '<b>Bold</b> and <i>Italic</i>'
      expect(removeTag(content, { tag: ['<', '>'] })).toBe(content)
      expect(removeTag(content, { tag: '<>' })).toBe(content)
    })

    it('should correctly deduplicate tags with regex special characters without duplicating escaped expressions', () => {
      const result = removeTag('<custom.tag>Hello</custom.tag>', { tag: ['custom.tag', 'custom.tag'] })
      expect(result).toBe('Hello')
    })

    it('should remove valid XML tags whose names match reserved keywords like null or false', () => {
      expect(removeTag('<null>value</null><b>keep</b>', { tag: 'null' })).toBe('value<b>keep</b>')
      expect(removeTag('<false>flag</false><b>keep</b>', { tag: 'false' })).toBe('flag<b>keep</b>')
    })
  })

  describe('Special HTML/XML structures', () => {
    it('should remove HTML comments', () => {
      const result = removeTag('Hello <!-- inline comment -->world')
      expect(result).toBe('Hello world')
    })

    it('should remove HTML5 comments closed with bang syntax --!>', () => {
      const result = removeTag('Hello <!-- bang comment --!>world')
      expect(result).toBe('Hello world')
    })

    it('should not erase content between bang-closed comment and subsequent comments', () => {
      const html = 'Start <!-- first --!> <p>Important Content</p> <!-- second --> End'
      expect(removeTag(html)).toBe('Start  Important Content  End')
    })

    it('should remove multiline HTML comments', () => {
      const result = removeTag('Hello <!--\n  multiline\n  comment\n-->world')
      expect(result).toBe('Hello world')
    })

    it('should remove DOCTYPE declarations including those with > inside quoted identifiers', () => {
      expect(removeTag('<!DOCTYPE html><html><body>content</body></html>')).toBe('content')
      expect(removeTag('<!DOCTYPE html SYSTEM "a > b"><p>content</p>')).toBe('content')
      expect(removeTag('<!DOCTYPE html PUBLIC \'-//W3C//DTD > HTML\'><p>content</p>')).toBe('content')
    })

    it('should remove CDATA sections', () => {
      const result = removeTag('<![CDATA[some <raw> data]]>Hello')
      expect(result).toBe('Hello')
    })

    it('should remove XML declarations', () => {
      const result = removeTag('<?xml version="1.0" encoding="UTF-8"?><root>data</root>')
      expect(result).toBe('data')
    })

    it('should remove custom web component tags and hyphenated elements', () => {
      const result = removeTag('<my-custom-element id="1">custom content</my-custom-element>')
      expect(result).toBe('custom content')
    })

    it('should remove namespaced XML/SVG tags', () => {
      const result = removeTag('<svg:path d="M0 0" />Icon')
      expect(result).toBe('Icon')
    })
  })

  describe('Attributes and edge cases', () => {
    it('should handle tags with attributes containing > inside double quotes', () => {
      const result = removeTag('<span data-calc="5 > 2">Text</span>')
      expect(result).toBe('Text')
    })

    it('should handle tags with attributes containing > inside single quotes', () => {
      const result = removeTag('<span data-calc=\'5 > 2\'>Text</span>')
      expect(result).toBe('Text')
    })

    it('should handle tags with boolean and unquoted attributes', () => {
      const result = removeTag('<input disabled required value=sample />')
      expect(result).toBe('')
    })

    it('should handle tags with adjacent quoted attributes without whitespace (minified HTML and XSS payloads)', () => {
      expect(removeTag('<img src="x"onerror="alert(1)">Hello')).toBe('Hello')
      expect(removeTag('<div class="card"id="main"data-role=\'box\'>Content</div>')).toBe('Content')
      expect(removeTag('<div class="card"id="main">Content</div>', { tag: 'div' })).toBe('Content')
      expect(removeTag('<input type="text"disabled value="ok">')).toBe('')
    })

    it('should handle tags with attributes separated by solidus slash without spaces', () => {
      expect(removeTag('<img/src="pic.jpg">')).toBe('')
      expect(removeTag('<a/href="#">Link</a>')).toBe('Link')
      expect(removeTag('<input/disabled/>')).toBe('')
      expect(removeTag('<div/class="card"/id="main">Text</div>')).toBe('Text')
      expect(removeTag('<img/src="pic.jpg">', { tag: 'img' })).toBe('')
    })

    it('should handle self-closing tags with whitespace between slash and bracket', () => {
      expect(removeTag('Line 1<br / >Line 2')).toBe('Line 1Line 2')
      expect(removeTag('Line 1<br /  >Line 2')).toBe('Line 1Line 2')
      expect(removeTag('<img src="avatar.jpg" / >Content')).toBe('Content')
      expect(removeTag('<input disabled / >Text')).toBe('Text')
      expect(removeTag('Line 1<br / >Line 2', { tag: 'br' })).toBe('Line 1Line 2')
    })

    it('should not treat mathematical comparisons as tags', () => {
      const comparison = '5 < 10 and 20 > 15'
      expect(removeTag(comparison)).toBe(comparison)
    })

    it('should not treat heart symbol or emoticons as tags', () => {
      const heart = 'I <3 coding and cats > dogs'
      expect(removeTag(heart)).toBe(heart)
    })

    it('should not treat comparison operators in code snippets as tags', () => {
      const code = 'if (a < b && c > d)'
      expect(removeTag(code)).toBe(code)
    })
  })

  describe('Custom replacement', () => {
    it('should replace tags with custom replacement string', () => {
      const result = removeTag('<p>Hello</p><p>world</p>', { replacement: ' ' })
      expect(result).toBe(' Hello  world ')
    })

    it('should replace specific tags with custom replacement string', () => {
      const result = removeTag('<b>Hello</b> <b>world</b>', { tag: 'b', replacement: '-' })
      expect(result).toBe('-Hello- -world-')
    })

    it('should treat $& and special replacement characters literally without re-inserting tags', () => {
      const result = removeTag('<p>Hello</p>', { replacement: '[$&]' })
      expect(result).toBe('[$&]Hello[$&]')
    })

    it('should treat $1 and dollar signs literally without regex group substitution', () => {
      const result = removeTag('<p>Price</p>', { replacement: '$100' })
      expect(result).toBe('$100Price$100')
    })
  })

  describe('Type coercion and empty/nullish inputs', () => {
    it('should return empty string for null, undefined, or empty string', () => {
      expect(removeTag('')).toBe('')
      expect(removeTag(null)).toBe('')
      expect(removeTag(undefined)).toBe('')
    })

    it('should return string unchanged if it does not contain <', () => {
      expect(removeTag('plain text without tags')).toBe('plain text without tags')
    })

    it('should convert numeric values to string', () => {
      expect(removeTag(12345)).toBe('12345')
      expect(removeTag(0)).toBe('0')
      expect(removeTag(-42)).toBe('-42')
    })
  })

  describe('Integration with addTagHighlightMatch', () => {
    it('should strip tags added by addTagHighlightMatch', () => {
      const highlighted = addTagHighlightMatch('Apple and Banana', 'apple banana')
      expect(highlighted).toBe(
        '<span class="sys-highlight-match">Apple</span> and <span class="sys-highlight-match">Banana</span>'
      )

      expect(removeTag(highlighted)).toBe('Apple and Banana')
      expect(removeTag(highlighted, { tag: 'span' })).toBe('Apple and Banana')
    })

    it('should strip custom tags added by addTagHighlightMatch', () => {
      const highlighted = addTagHighlightMatch('Search query', 'query', 'custom-highlight-class')
      expect(highlighted).toBe('Search <span class="custom-highlight-class">query</span>')

      expect(removeTag(highlighted)).toBe('Search query')
    })
  })

  describe('ReDoS resilience', () => {
    it('should process long unclosed tags with repeated attributes in linear time without catastrophic backtracking', () => {
      const input = '<p ' + ' a'.repeat(100)
      const start = performance.now()
      const result = removeTag(input)
      const duration = performance.now() - start

      expect(result).toBe(input)
      expect(duration).toBeLessThan(50)
    })

    it('should process specific tag filter with repeated attributes in linear time', () => {
      const input = '<b ' + ' a'.repeat(100)
      const start = performance.now()
      const result = removeTag(input, { tag: 'b' })
      const duration = performance.now() - start

      expect(result).toBe(input)
      expect(duration).toBeLessThan(50)
    })

    it('should process long unclosed tags with repeated adjacent quoted attributes in linear time', () => {
      const input = '<div ' + 'data-x="1"'.repeat(100)
      const start = performance.now()
      const result = removeTag(input)
      const duration = performance.now() - start

      expect(result).toBe(input)
      expect(duration).toBeLessThan(50)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic text content when stripping tags', () => {
      const result = removeTag('<h1>Заголовок</h1><p>Привет, <b>Мир</b>!</p>')
      expect(result).toBe('ЗаголовокПривет, Мир!')
    })

    it('should remove Cyrillic and multilingual Unicode XML tags', () => {
      expect(removeTag('<тег>текст</тег>')).toBe('текст')
      expect(removeTag('<статья id="1"><заголовок>Новость</заголовок></статья>')).toBe('Новость')
      expect(removeTag('<résumé format="pdf">Curriculum</résumé>')).toBe('Curriculum')
      expect(removeTag('<你好>Мир</你好>')).toBe('Мир')
    })

    it('should preserve Vietnamese text with complex diacritics', () => {
      const result = removeTag('<span class="accent">Học tiếng Việt rất thú vị</span>')
      expect(result).toBe('Học tiếng Việt rất thú vị')
    })

    it('should preserve CJK characters', () => {
      const result = removeTag('<div>你好，<b>世界</b>！<span>こんにちは</span></div>')
      expect(result).toBe('你好，世界！こんにちは')
    })

    it('should preserve emojis and multibyte characters', () => {
      const result = removeTag('<p>🚀 Rocket <b>🔥 Fire</b> ✨ Star</p>')
      expect(result).toBe('🚀 Rocket 🔥 Fire ✨ Star')
    })
  })

  describe('Tag expression memoization and state isolation', () => {
    it('should reuse cached expression without state leakage across repeated calls', () => {
      const first = removeTag('<b>First</b> and <i>one</i>', { tag: 'b' })
      const second = removeTag('<b>Second</b> and <i>two</i>', { tag: 'b' })
      const third = removeTag('<i>None</i>', { tag: 'b' })

      expect(first).toBe('First and <i>one</i>')
      expect(second).toBe('Second and <i>two</i>')
      expect(third).toBe('<i>None</i>')
    })

    it('should produce identical results regardless of tag order in array due to canonical cache key', () => {
      const first = removeTag('<b>Bold</b> and <i>Italic</i> and <p>Para</p>', { tag: ['b', 'i'] })
      const second = removeTag('<b>Bold</b> and <i>Italic</i> and <p>Para</p>', { tag: ['i', 'b'] })

      expect(first).toBe('Bold and Italic and <p>Para</p>')
      expect(second).toBe('Bold and Italic and <p>Para</p>')
    })

    it('should create strictly canonical cache keys for identical tags with same length regardless of input permutation', () => {
      const text = '<div>nav content</div><nav>navigation</nav>'

      // Both arrays have tags of length 3 ('div' and 'nav')
      const resultForward = removeTag(text, { tag: ['div', 'nav'] })
      const resultReverse = removeTag(text, { tag: ['nav', 'div'] })

      expect(resultForward).toBe('nav contentnavigation')
      expect(resultReverse).toBe('nav contentnavigation')
    })

    it('should not mutate caller-provided tag or removeContent arrays when sorting cache keys', () => {
      const tagList = ['span', 'div', 'a']
      const contentTagList = ['code', 'pre']

      removeTag('<div><span><a>Text</a></span><pre>1</pre><code>2</code></div>', {
        tag: tagList,
        removeContent: contentTagList
      })

      expect(tagList).toEqual(['span', 'div', 'a'])
      expect(contentTagList).toEqual(['code', 'pre'])
    })

    it('should gracefully handle cache overflow beyond CACHE_MAX_SIZE (128) without error and continue functioning', () => {
      // Generate more than CACHE_MAX_SIZE (128) unique tag patterns to trigger cache eviction
      for (let index = 0; index < 135; index += 1) {
        const tagName = `tag-${index}`
        const result = removeTag(`<${tagName}>text</${tagName}>`, { tag: tagName })
        expect(result).toBe('text')
      }

      // Verify normal operation continues cleanly after cache eviction
      expect(removeTag('<b>Bold</b> and <i>Italic</i>', { tag: 'b' })).toBe('Bold and <i>Italic</i>')
      expect(removeTag('<div>Content</div>', { tag: ['div', 'span'] })).toBe('Content')
    })

    it('should gracefully handle contentTagExpressionCache overflow beyond CACHE_MAX_SIZE (128)', () => {
      for (let index = 0; index < 135; index += 1) {
        const tagName = `content-tag-${index}`
        const result = removeTag(`<${tagName}>secret</${tagName}>visible`, { removeContent: tagName })
        expect(result).toBe('visible')
      }

      expect(removeTag('<pre>secret</pre><p>visible</p>', { removeContent: 'pre' })).toBe('visible')
      expect(removeTag('<pre>1</pre><code>2</code><p>ok</p>', { removeContent: ['code', 'pre'] })).toBe('ok')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle strings with large number of tags efficiently', () => {
      const repeatedTags = '<p><span><b>Item</b></span></p>'.repeat(500)
      const result = removeTag(repeatedTags)
      expect(result).toBe('Item'.repeat(500))
    })

    it('should handle deeply nested tags at boundary depth', () => {
      const open = '<div><p><span><b><strong><em>'.repeat(10)
      const close = '</em></strong></b></span></p></div>'.repeat(10)
      expect(removeTag(`${open}Deep${close}`)).toBe('Deep')
    })

    it('should handle tags with maximum number of attributes', () => {
      const attributes = Array.from({ length: 50 }, (_, index) => `attribute${index}="value${index}"`).join(' ')
      expect(removeTag(`<div ${attributes}>Text</div>`)).toBe('Text')
    })

    it('should handle numbered HTML heading tags and tags with trailing numbers', () => {
      expect(removeTag('<h1>Title</h1><h2>Subtitle</h2><h3>Section</h3>')).toBe('TitleSubtitleSection')
      expect(removeTag('<h1 level="1">H1</h1><h2 level="2">H2</h2>', { tag: 'h1' })).toBe('H1<h2 level="2">H2</h2>')
      expect(removeTag('<custom-h1-1>Content</custom-h1-1>', { tag: 'custom-h1-1' })).toBe('Content')
    })

    it('should handle floating point, negative zero, and special number values', () => {
      expect(removeTag(0)).toBe('0')
      expect(removeTag(-0)).toBe('0')
      expect(removeTag(3.14159)).toBe('3.14159')
      expect(removeTag(-100.5)).toBe('-100.5')
      expect(removeTag(NaN)).toBe('NaN')
      expect(removeTag(Infinity)).toBe('Infinity')
      expect(removeTag(-Infinity)).toBe('-Infinity')
    })
  })

  describe('removeContent behavior', () => {
    it('should remove script, style, and noscript tags with their content by default (removeContent = true)', () => {
      const html = '<p>Hello</p><script>alert("XSS")</script><style>body { color: red; }</style><noscript>Enable JS</noscript><b>World</b>'
      expect(removeTag(html)).toBe('HelloWorld')
    })

    it('should preserve script, style, and noscript inner content when removeContent is explicitly false', () => {
      const html = '<p>Hello</p><script>alert("XSS")</script><style>body { color: red; }</style><b>World</b>'
      expect(removeTag(html, { removeContent: false })).toBe('Helloalert("XSS")body { color: red; }World')
    })

    it('should strip only tag syntax when specific tag is targeted and removeContent is false', () => {
      const html = '<div>Text</div><script>console.log(1)</script>'
      expect(removeTag(html, { tag: 'script', removeContent: false })).toBe('<div>Text</div>console.log(1)')
    })

    it('should remove script content by default even when targeting specific tags', () => {
      const html = '<div>Text</div><script>console.log(1)</script>'
      expect(removeTag(html, { tag: 'script' })).toBe('<div>Text</div>')
      expect(removeTag(html, { tag: 'div' })).toBe('Text')
    })

    it('should preserve content of standard tags like "b" or "div" even when removeContent is true', () => {
      expect(removeTag('<b>Bold</b> and <i>Italic</i>', { tag: 'b' })).toBe('Bold and <i>Italic</i>')
      expect(removeTag('<div>Content</div>', { tag: 'div' })).toBe('Content')
    })

    it('should remove content of custom tags when removeContent specifies custom tag names', () => {
      const html = '<p>Article</p><pre>const x = 10;</pre><code>var y = 20;</code>'
      expect(removeTag(html, { removeContent: 'pre' })).toBe('Articlevar y = 20;')
      expect(removeTag(html, { removeContent: ['pre', 'code'] })).toBe('Article')
    })

    it('should silently remove content tags without applying replacement string', () => {
      const html = '<p>Hello</p><script>alert(1)</script><p>World</p>'
      expect(removeTag(html, { replacement: ' ' })).toBe(' Hello  World ')
    })

    it('should handle multiline script and style blocks with attributes and complex code', () => {
      const complexScript = '<script type="text/javascript" id="app">\n  const x = 5 > 2;\n  console.log("<div>test</div>");\n</script>'
      const complexStyle = '<style media="screen">\n  .card > span { display: block; }\n</style>'
      const html = `<div>${complexScript}<span>Main</span>${complexStyle}</div>`

      expect(removeTag(html)).toBe('Main')
      expect(removeTag(html, { removeContent: false })).toBe(
        '\n  const x = 5 > 2;\n  console.log("test");\nMain\n  .card > span { display: block; }\n'
      )
    })

    it('should not erase content between a self-closing script tag and subsequent script tags', () => {
      const html = '<script src="tracker.js" /> <p>Important Article Content</p> <script>var x = 1;</script>'
      const result = removeTag(html)
      expect(result).toBe(' Important Article Content ')
    })

    it('should correctly remove self-closing script, style, and noscript tags without erasing following content', () => {
      const html = '<div>Header</div><script src="app.js"/><style src="theme.css" /><span>Body</span><noscript href="/nojs" />'
      expect(removeTag(html)).toBe('HeaderBody')
    })

    it('should correctly handle custom self-closing content tags when specified in removeContent', () => {
      const html = '<p>First</p><custom-embed src="data" /><p>Middle</p><custom-embed>inner</custom-embed><p>Last</p>'
      expect(removeTag(html, { removeContent: 'custom-embed' })).toBe('FirstMiddleLast')
    })

    it('should handle content tags containing > or /> inside quoted attributes on opening or closing tags', () => {
      expect(removeTag('<script data-tpl="<br/>">alert(1)</script>Hello')).toBe('Hello')
      expect(removeTag('<script data-tpl="<br/>">alert(1)</script><p>Hello</p>', { tag: 'p' })).toBe('Hello')
      expect(removeTag('<script data-expr="a > b" /> <p>Important</p> <script>var x = 1;</script>')).toBe(' Important ')
      expect(removeTag('<pre data-expr="a > b" /> <p>Important</p> <pre>secret</pre>', { removeContent: 'pre' })).toBe(' Important ')
      expect(removeTag('<script>alert(1)</script data-end="a > b">Hello')).toBe('Hello')
    })

    it('should handle self-closing content tags with whitespace between slash and closing bracket', () => {
      const html = '<script src="app.js" / > <p>Important</p> <script>var x = 1;</script>'
      expect(removeTag(html)).toBe(' Important ')
    })

    it('should not remove content tags when removeContent is an empty string, whitespace, or empty array', () => {
      const html = '<p>Hello</p><script>alert(1)</script>'
      expect(removeTag(html, { removeContent: '' })).toBe('Helloalert(1)')
      expect(removeTag(html, { removeContent: '   ' })).toBe('Helloalert(1)')
      expect(removeTag(html, { removeContent: [] })).toBe('Helloalert(1)')
      expect(removeTag(html, { removeContent: '<>' })).toBe('Helloalert(1)')
    })

    it('should remove Unicode content tags when specified in removeContent', () => {
      const html = '<статья>Секретный текст статьи</статья><p>Видимый текст</p>'
      expect(removeTag(html)).toBe('Секретный текст статьиВидимый текст')
      expect(removeTag(html, { removeContent: 'статья' })).toBe('Видимый текст')
      expect(removeTag(html, { tag: 'b', removeContent: 'статья' })).toBe('<p>Видимый текст</p>')
      expect(removeTag(html, { tag: 'b', removeContent: ['статья'] })).toBe('<p>Видимый текст</p>')
    })

    it('should remove script/style content even when closing tags have trailing whitespace or attributes', () => {
      expect(removeTag('<script>alert("test")</script >Text')).toBe('Text')
      expect(removeTag('<script>alert("test")</script\n>Text')).toBe('Text')
      expect(removeTag('<script>alert("test")</script id="end">Text')).toBe('Text')
      expect(removeTag('<script>alert("test")</script/>Text')).toBe('Text')
      expect(removeTag('<style>body { color: red; }</style  >Text')).toBe('Text')
      expect(removeTag('<noscript>Enable JS</noscript\t>Text')).toBe('Text')
    })

    it('should not confuse custom hyphenated elements with content tags when using lookahead boundaries', () => {
      const html = '<custom-widget src="data" /><span>Content</span>'
      expect(removeTag(html, { tag: 'b', removeContent: 'custom' })).toBe(html)
    })
  })

  describe('RemoveTagOptions object API', () => {
    it('should support configuring tag via options object', () => {
      const html = '<b>Bold</b> and <i>Italic</i>'
      expect(removeTag(html, { tag: 'b' })).toBe('Bold and <i>Italic</i>')
      expect(removeTag(html, { tag: ['b', 'i'] })).toBe('Bold and Italic')
    })

    it('should support configuring replacement via options object', () => {
      const html = '<p>Hello</p><p>World</p>'
      expect(removeTag(html, { replacement: ' ' })).toBe(' Hello  World ')
      expect(removeTag(html, { tag: 'p', replacement: '-' })).toBe('-Hello--World-')
    })

    it('should support disabling removeContent via options object', () => {
      const html = '<div>Text</div><script>alert(1)</script>'
      expect(removeTag(html, { removeContent: false })).toBe('Textalert(1)')
      expect(removeTag(html, { tag: 'script', removeContent: false })).toBe('<div>Text</div>alert(1)')
    })

    it('should support custom content tags via options object', () => {
      const html = '<article><pre>code</pre><code>test</code><span>Content</span></article>'
      expect(removeTag(html, { removeContent: ['pre', 'code'] })).toBe('Content')
    })
  })
})
