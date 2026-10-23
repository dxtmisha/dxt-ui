import { describe, it, expect } from 'vitest'
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
      const result = addTagHighlightMatch('hello', 'hello', 'my-custom-class')
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
      expect(addTagHighlightMatch(null as unknown as string, 'test')).toBe('')
      expect(addTagHighlightMatch(undefined as unknown as string, 'test')).toBe('')
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
      const result = addTagHighlightMatch(12345 as unknown as string, '23')
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
      const result = addTagHighlightMatch('<b>bold</b>', 'bold', 'sys-highlight-match', true)
      expect(result).toBe('&lt;b&gt;<span class="sys-highlight-match">bold</span>&lt;/b&gt;')
    })

    it('should escape whole string when shouldEscape is true and no search match', () => {
      const result = addTagHighlightMatch('<b>bold</b>', 'none', 'sys-highlight-match', true)
      expect(result).toBe('&lt;b&gt;bold&lt;/b&gt;')
    })

    it('should escape whole string when shouldEscape is true and search is empty or undefined', () => {
      expect(addTagHighlightMatch('<b>bold & "quoted"</b>', '', 'sys-highlight-match', true))
        .toBe('&lt;b&gt;bold &amp; &quot;quoted&quot;&lt;/b&gt;')
      expect(addTagHighlightMatch('<b>bold</b>', undefined, 'sys-highlight-match', true))
        .toBe('&lt;b&gt;bold&lt;/b&gt;')
      expect(addTagHighlightMatch('<b>bold</b>', '   ', 'sys-highlight-match', true))
        .toBe('&lt;b&gt;bold&lt;/b&gt;')
    })

    it('should handle special characters in search and escape them correctly when shouldEscape is true', () => {
      const result = addTagHighlightMatch('price > 10', '>', 'sys-highlight-match', true)
      expect(result).toBe('price <span class="sys-highlight-match">&gt;</span> 10')
    })

    it('should sanitize className to prevent attribute breakout and XSS', () => {
      const maliciousClass = 'test" onmouseover="alert(1)'
      const result = addTagHighlightMatch('hello', 'hello', maliciousClass)
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
})
