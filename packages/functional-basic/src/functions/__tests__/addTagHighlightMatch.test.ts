import { afterEach, describe, it, expect, vi } from 'vitest'
import { addTagHighlightMatch } from '../addTagHighlightMatch'

describe('addTagHighlightMatch', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should wrap a single match with span tags and default class', () => {
      const result = addTagHighlightMatch('hello world', 'hello')
      expect(result).toBe('<span class="sys-highlight-match">hello</span> world')
    })

    it('should wrap multiple word matches with space separation (OR logic)', () => {
      const result = addTagHighlightMatch('apple and banana', 'apple banana')
      expect(result).toBe('<span class="sys-highlight-match">apple</span> and <span class="sys-highlight-match">banana</span>')
    })

    it('should use custom className when provided', () => {
      const result = addTagHighlightMatch('hello', 'hello', { className: 'my-custom-class' })
      expect(result).toBe('<span class="my-custom-class">hello</span>')
    })

    it('should be case-insensitive', () => {
      const result = addTagHighlightMatch('Hello World', 'hello')
      expect(result).toBe('<span class="sys-highlight-match">Hello</span> World')
    })

    it('should highlight all occurrences of the word across the string', () => {
      const result = addTagHighlightMatch('banana split with banana cream', 'banana')
      expect(result).toBe('<span class="sys-highlight-match">banana</span> split with <span class="sys-highlight-match">banana</span> cream')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should highlight match at the very beginning of the string', () => {
      const result = addTagHighlightMatch('start of string', 'start')
      expect(result).toBe('<span class="sys-highlight-match">start</span> of string')
    })

    it('should highlight match at the very end of the string', () => {
      const result = addTagHighlightMatch('at the end', 'end')
      expect(result).toBe('at the <span class="sys-highlight-match">end</span>')
    })

    it('should highlight entire string when whole string matches', () => {
      const result = addTagHighlightMatch('exact', 'exact')
      expect(result).toBe('<span class="sys-highlight-match">exact</span>')
    })

    it('should give precedence to longer words to prevent prefix shadowing', () => {
      const result = addTagHighlightMatch('caterpillar and cat', 'cat caterpillar')
      expect(result).toBe('<span class="sys-highlight-match">caterpillar</span> and <span class="sys-highlight-match">cat</span>')
    })

    it('should return original string when search query exceeds max limit (128 chars)', () => {
      const longQuery = 'a'.repeat(129)
      const result = addTagHighlightMatch('hello world', longQuery)
      expect(result).toBe('hello world')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return empty string if input value is empty', () => {
      expect(addTagHighlightMatch('', 'test')).toBe('')
    })

    it('should return original value if search is empty string', () => {
      expect(addTagHighlightMatch('hello', '')).toBe('hello')
    })

    it('should return original value if search is undefined', () => {
      expect(addTagHighlightMatch('hello', undefined)).toBe('hello')
    })

    it('should return original value if search is whitespace-only (spaces, tabs, newlines)', () => {
      expect(addTagHighlightMatch('hello', '   ')).toBe('hello')
      expect(addTagHighlightMatch('hello', '\t')).toBe('hello')
      expect(addTagHighlightMatch('hello', '\n')).toBe('hello')
      expect(addTagHighlightMatch('hello', ' \t\n ')).toBe('hello')
    })

    it('should safely handle null and undefined input values', () => {
      expect(addTagHighlightMatch(null, 'test')).toBe('')
      expect(addTagHighlightMatch(undefined, 'test')).toBe('')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should correctly search and highlight "0"', () => {
      const result = addTagHighlightMatch('Count: 0 items', '0')
      expect(result).toBe('Count: <span class="sys-highlight-match">0</span> items')
    })

    it('should correctly highlight when input value itself is "0"', () => {
      const result = addTagHighlightMatch('0', '0')
      expect(result).toBe('<span class="sys-highlight-match">0</span>')
    })

    it('should handle numeric values by converting to string', () => {
      const result = addTagHighlightMatch(12345, '23')
      expect(result).toBe('1<span class="sys-highlight-match">23</span>45')
    })

    it('should correctly search and highlight string "false" and "null"', () => {
      expect(addTagHighlightMatch('result is false', 'false'))
        .toBe('result is <span class="sys-highlight-match">false</span>')
      expect(addTagHighlightMatch('value is null', 'null'))
        .toBe('value is <span class="sys-highlight-match">null</span>')
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should handle special regex characters in search string', () => {
      const result = addTagHighlightMatch('price is $10', '$10')
      expect(result).toBe('price is <span class="sys-highlight-match">$10</span>')
    })

    it('should escape all common regex metacharacters in search', () => {
      expect(addTagHighlightMatch('check (group)', '(group)'))
        .toBe('check <span class="sys-highlight-match">(group)</span>')
      expect(addTagHighlightMatch('array [item]', '[item]'))
        .toBe('array <span class="sys-highlight-match">[item]</span>')
      expect(addTagHighlightMatch('C++ language', 'C++'))
        .toBe('<span class="sys-highlight-match">C++</span> language')
      expect(addTagHighlightMatch('domain a.b test', 'a.b'))
        .toBe('domain <span class="sys-highlight-match">a.b</span> test')
      expect(addTagHighlightMatch('domain axb test', 'a.b'))
        .toBe('domain axb test')
    })

    it('should escape HTML characters when shouldEscape is true', () => {
      const result = addTagHighlightMatch('<b>bold</b>', 'bold', { shouldEscape: true })
      expect(result).toBe('&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;')
    })

    it('should escape whole string when shouldEscape is true and no search match', () => {
      const result = addTagHighlightMatch('<b>bold</b>', 'none', { shouldEscape: true })
      expect(result).toBe('&lt;b&gt;bold&lt;/b&gt;')
    })

    it('should escape whole string when shouldEscape is true and search is empty or undefined', () => {
      expect(addTagHighlightMatch('<b>bold & "quoted"</b>', '', { shouldEscape: true }))
        .toBe('&lt;b&gt;bold &amp; &quot;quoted&quot;&lt;/b&gt;')
      expect(addTagHighlightMatch('<b>bold</b>', undefined, { shouldEscape: true }))
        .toBe('&lt;b&gt;bold&lt;/b&gt;')
      expect(addTagHighlightMatch('<b>bold</b>', '   ', { shouldEscape: true }))
        .toBe('&lt;b&gt;bold&lt;/b&gt;')
    })

    it('should handle special characters in search and escape them correctly when shouldEscape is true', () => {
      const result = addTagHighlightMatch('price > 10', '>', { shouldEscape: true })
      expect(result).toBe('price <span class="sys-highlight-match">&gt;</span> 10')
    })

    it('should sanitize className to prevent attribute breakout and XSS', () => {
      const maliciousClass = 'test" onmouseover="alert(1)'
      const result = addTagHighlightMatch('hello', 'hello', { className: maliciousClass })
      expect(result).toBe('<span class="test&quot; onmouseover=&quot;alert(1)">hello</span>')
    })

    it('should handle dollar signs in search and value safely without corrupting replacement', () => {
      const result = addTagHighlightMatch('$100 and $200', '$100')
      expect(result).toBe('<span class="sys-highlight-match">$100</span> and $200')
    })

    it('should handle values that look like tags', () => {
      const result = addTagHighlightMatch('TAG_START and TAG_END', 'TAG')
      expect(result).toBe('<span class="sys-highlight-match">TAG</span>_START and <span class="sys-highlight-match">TAG</span>_END')
    })
  })

  describe('Highlight marker isolation and collisions', () => {
    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('should preserve literal legacy markers when escaping text without matches', () => {
      const value = '___HIGHLIGHT_START___hello___HIGHLIGHT_END___'

      expect(addTagHighlightMatch(value, 'missing', { className: 'highlight', shouldEscape: true })).toBe(value)
    })

    it('should highlight literal legacy markers without interpreting them', () => {
      const value = '___HIGHLIGHT_START___'

      expect(addTagHighlightMatch(value, value, { className: 'highlight', shouldEscape: true }))
        .toBe('<span class="highlight">___HIGHLIGHT_START___</span>')
    })

    it.each(['[HIGHLIGHT_START_0]', '[HIGHLIGHT_END_0]'])(
      'should preserve an existing %s marker while highlighting text',
      (marker) => {
        vi.spyOn(Math, 'random').mockReturnValue(0)

        expect(addTagHighlightMatch(`${marker} hello`, 'hello', { className: 'highlight', shouldEscape: true }))
          .toBe(`${marker} <span class="highlight">hello</span>`)
      }
    )

    it('should resolve repeated collisions even when random values repeat', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0)
      const value = '[HIGHLIGHT_START_0] [HIGHLIGHT_END_00] hello'

      expect(addTagHighlightMatch(value, 'hello', { className: 'highlight', shouldEscape: true }))
        .toBe('[HIGHLIGHT_START_0] [HIGHLIGHT_END_00] <span class="highlight">hello</span>')
    })

    it('should preserve a colliding marker when the search has no matches', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0)
      const value = '[HIGHLIGHT_START_0] & [HIGHLIGHT_END_0]'

      expect(addTagHighlightMatch(value, 'missing', { className: 'highlight', shouldEscape: true }))
        .toBe('[HIGHLIGHT_START_0] &amp; [HIGHLIGHT_END_0]')
    })

    it('should highlight an entire colliding marker as ordinary text', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0)
      const value = '[HIGHLIGHT_START_0]'

      expect(addTagHighlightMatch(value, value, { className: 'highlight', shouldEscape: true }))
        .toBe('<span class="highlight">[HIGHLIGHT_START_0]</span>')
    })

    it('should preserve partial marker text next to a match', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0)

      expect(addTagHighlightMatch('[HIGHLIGHT_START_0hello', 'hello', { className: 'highlight', shouldEscape: true }))
        .toBe('[HIGHLIGHT_START_0<span class="highlight">hello</span>')
    })

    it('should highlight escaped text in a single pass without using random markers', () => {
      const randomValue = vi.spyOn(Math, 'random')
      const expected = '&lt;<span class="highlight">hello</span>&gt;'

      expect(addTagHighlightMatch('<hello>', 'hello', { className: 'highlight', shouldEscape: true })).toBe(expected)
      expect(addTagHighlightMatch('<hello>', 'hello', { className: 'highlight', shouldEscape: true })).toBe(expected)
      expect(randomValue).not.toHaveBeenCalled()
    })
  })

  describe('Regular expression (RegExp) support', () => {
    it('should support RegExp as search parameter with capture group', () => {
      const result = addTagHighlightMatch('hello world', /(hello)/i)
      expect(result).toBe('<span class="sys-highlight-match">hello</span> world')
    })

    it('should support RegExp without capture groups without erasing match text', () => {
      const result = addTagHighlightMatch('hello world', /hello/i)
      expect(result).toBe('<span class="sys-highlight-match">hello</span> world')
    })

    it('should support RegExp with multiple capture groups without losing content', () => {
      const result = addTagHighlightMatch('foo bar baz', /(foo) (bar)/i)
      expect(result).toBe('<span class="sys-highlight-match">foo bar</span> baz')
    })

    it('should maintain isolation and reset state even if passed a stateful global RegExp with lastIndex > 0', () => {
      const globalRegex = /item/gi
      globalRegex.lastIndex = 10
      const result = addTagHighlightMatch('item one and item two', globalRegex)
      expect(result).toBe('<span class="sys-highlight-match">item</span> one and <span class="sys-highlight-match">item</span> two')
    })

    it('should highlight all matches even when passed a non-global RegExp (consistent with getArrayHighlightMatch)', () => {
      const withoutEscape = addTagHighlightMatch('item one and item two', /item/i, { shouldEscape: false })
      const withEscape = addTagHighlightMatch('<b>item</b> one and <b>item</b> two', /item/i, { shouldEscape: true })

      expect(withoutEscape).toBe('<span class="sys-highlight-match">item</span> one and <span class="sys-highlight-match">item</span> two')
      expect(withEscape).toBe('&lt;b&gt;<span class="sys-highlight-match">item</span>&lt;/b&gt; one and &lt;b&gt;<span class="sys-highlight-match">item</span>&lt;/b&gt; two')
    })

    it('should handle sticky RegExp (/y) consistently between shouldEscape = false and shouldEscape = true', () => {
      const withoutEscape = addTagHighlightMatch('aba', /a/y, { shouldEscape: false })
      const withEscape = addTagHighlightMatch('aba', /a/y, { shouldEscape: true })

      expect(withoutEscape).toBe('<span class="sys-highlight-match">a</span>ba')
      expect(withEscape).toBe('<span class="sys-highlight-match">a</span>ba')
    })

    it('should safely advance by full Unicode code point on zero-length RegExp matches with surrogate pairs', () => {
      const withoutEscape = addTagHighlightMatch('🚀a', /a*/gu, { shouldEscape: false })
      const withEscape = addTagHighlightMatch('🚀a', /a*/gu, { shouldEscape: true })

      expect(withoutEscape).toBe('🚀<span class="sys-highlight-match">a</span>')
      expect(withEscape).toBe('🚀<span class="sys-highlight-match">a</span>')
    })

    it('should return prepared string without highlighting when search is an empty RegExp /(?:)/ or /(?!)/', () => {
      expect(addTagHighlightMatch('hello <b>world</b>', new RegExp(''))).toBe('hello world')
      expect(addTagHighlightMatch('hello <b>world</b>', /(?:)/)).toBe('hello world')
      expect(addTagHighlightMatch('hello <b>world</b>', /(?!)/)).toBe('hello world')
      expect(addTagHighlightMatch('hello <b>world</b>', /(?:)/, { shouldEscape: true }))
        .toBe('hello &lt;b&gt;world&lt;/b&gt;')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic characters with case-insensitivity', () => {
      const result = addTagHighlightMatch('Привет Мир', 'привет')
      expect(result).toBe('<span class="sys-highlight-match">Привет</span> Мир')
    })

    it('should handle Vietnamese diacritics', () => {
      const result = addTagHighlightMatch('Học tiếng Việt mỗi ngày', 'tiếng')
      expect(result).toBe('Học <span class="sys-highlight-match">tiếng</span> Việt mỗi ngày')
    })

    it('should handle European accented characters', () => {
      expect(addTagHighlightMatch('Café au lait', 'café'))
        .toBe('<span class="sys-highlight-match">Café</span> au lait')
      expect(addTagHighlightMatch('Über den Wolken', 'über'))
        .toBe('<span class="sys-highlight-match">Über</span> den Wolken')
    })

    it('should handle CJK characters', () => {
      const result = addTagHighlightMatch('你好 世界', '你好')
      expect(result).toBe('<span class="sys-highlight-match">你好</span> 世界')
    })

    it('should handle Emojis and multibyte characters', () => {
      const result = addTagHighlightMatch('🚀 Rocket and 🔥 Fire', '🚀')
      expect(result).toBe('<span class="sys-highlight-match">🚀</span> Rocket and 🔥 Fire')
    })
  })

  describe('shouldRemoveTag behavior', () => {
    it('should remove existing HTML tags by default when shouldEscape is false', () => {
      const result = addTagHighlightMatch('<p>Hello <b>world</b>!</p>', 'world')
      expect(result).toBe('Hello <span class="sys-highlight-match">world</span>!')
    })

    it('should preserve existing HTML tags when shouldEscape is false and shouldRemoveTag is explicitly false', () => {
      const result = addTagHighlightMatch(
        '<p>Hello <b>world</b>!</p>',
        'world',
        { shouldRemoveTag: false }
      )
      expect(result).toBe('<p>Hello <b><span class="sys-highlight-match">world</span></b>!</p>')
    })

    it('should not corrupt HTML tag names, attributes, or comments when search matches inside tags and shouldRemoveTag is false', () => {
      expect(
        addTagHighlightMatch(
          '<span class="span-box" data-title="a > span">span text</span>',
          'span',
          { shouldRemoveTag: false }
        )
      ).toBe('<span class="span-box" data-title="a > span"><span class="sys-highlight-match">span</span> text</span>')

      expect(
        addTagHighlightMatch(
          '<!-- world comment --><p class="world">world</p>',
          'world',
          { shouldRemoveTag: false }
        )
      ).toBe('<!-- world comment --><p class="world"><span class="sys-highlight-match">world</span></p>')
    })

    it('should still highlight plain text containing "<" that is not an HTML tag when shouldRemoveTag is false', () => {
      expect(
        addTagHighlightMatch(
          '2 < 5 and 5 > 2',
          '5',
          { shouldRemoveTag: false }
        )
      ).toBe('2 < <span class="sys-highlight-match">5</span> and <span class="sys-highlight-match">5</span> > 2')
    })

    it('should highlight all text node matches for non-global RegExp while preserving HTML attributes when shouldRemoveTag is false', () => {
      expect(
        addTagHighlightMatch(
          '<b class="item">item</b> and <i>item</i>',
          /item/i,
          { shouldRemoveTag: false }
        )
      ).toBe('<b class="item"><span class="sys-highlight-match">item</span></b> and <i><span class="sys-highlight-match">item</span></i>')
    })

    it('should remove existing HTML tags even when there is no search match (when shouldEscape is false and shouldRemoveTag is true)', () => {
      const result = addTagHighlightMatch('<p>Hello <b>world</b>!</p>', 'none')
      expect(result).toBe('Hello world!')
    })

    it('should remove existing HTML tags when search query is undefined or empty string', () => {
      expect(addTagHighlightMatch('<div>Title</div>', undefined)).toBe('Title')
      expect(addTagHighlightMatch('<div>Title</div>', '')).toBe('Title')
    })

    it('should not remove tags when shouldEscape is true, regardless of shouldRemoveTag', () => {
      const withTrue = addTagHighlightMatch('<b>bold</b>', 'bold', { shouldEscape: true, shouldRemoveTag: true })
      const withFalse = addTagHighlightMatch('<b>bold</b>', 'bold', { shouldEscape: true, shouldRemoveTag: false })

      expect(withTrue).toBe('&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;')
      expect(withFalse).toBe('&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;')
    })

    it('should strip unclosed HTML tags when shouldRemoveTag is true to prevent tag-completion XSS', () => {
      expect(addTagHighlightMatch('<img src=x onerror=alert(1)// hello', 'hello')).toBe('')
      expect(addTagHighlightMatch('<img src=x onerror=alert(1) <p>hello</p>', 'hello'))
        .toBe('<span class="sys-highlight-match">hello</span>')
    })

    it('should not inject highlight tags inside unclosed HTML tags or comments when shouldRemoveTag is false', () => {
      expect(
        addTagHighlightMatch(
          '<img src=x onerror=alert(1)// hello',
          'hello',
          { shouldRemoveTag: false }
        )
      ).toBe('<img src=x onerror=alert(1)// hello')

      expect(
        addTagHighlightMatch(
          '<!-- hello comment --!><p>hello</p><!-- unclosed hello',
          'hello',
          { shouldRemoveTag: false }
        )
      ).toBe('<!-- hello comment --!><p><span class="sys-highlight-match">hello</span></p><!-- unclosed hello')
    })
    it('should respect positional regex anchors (^, $) across the full string when shouldRemoveTag is false', () => {
      // ^ anchor should only match at the very beginning of the full string, not at slice boundaries
      expect(
        addTagHighlightMatch(
          '<b>Hello </b>world',
          /^world/i,
          { shouldRemoveTag: false }
        )
      ).toBe('<b>Hello </b>world')

      expect(
        addTagHighlightMatch(
          'hello<b> world</b>',
          /^hello/i,
          { shouldRemoveTag: false }
        )
      ).toBe('<span class="sys-highlight-match">hello</span><b> world</b>')

      // $ anchor should only match at the very end of the full string, not at slice boundaries
      expect(
        addTagHighlightMatch(
          'hello<b> world</b>',
          /hello$/i,
          { shouldRemoveTag: false }
        )
      ).toBe('hello<b> world</b>')

      expect(
        addTagHighlightMatch(
          '<b>hello </b>world',
          /world$/i,
          { shouldRemoveTag: false }
        )
      ).toBe('<b>hello </b><span class="sys-highlight-match">world</span>')
    })
  })
})
