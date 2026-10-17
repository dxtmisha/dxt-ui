import { describe, it, expect } from 'vitest'
import { applyTemplate } from '../applyTemplate'

describe('applyTemplate', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should replace positional markers (%d, %e, %f) with array elements', () => {
      expect(applyTemplate('Hello %d and %e!', ['world', 'user'])).toBe('Hello world and user!')
    })

    it('should handle multiple occurrences of the same positional marker', () => {
      expect(applyTemplate('%d %d %e %e', ['A', 'B'])).toBe('A A B B')
    })

    it('should replace object placeholders in square brackets [key]', () => {
      expect(applyTemplate('Hello [name], role is [role]', { name: 'Alice', role: 'admin' }))
        .toBe('Hello Alice, role is admin')
    })

    it('should replace object placeholders in curly brackets {key}', () => {
      expect(applyTemplate('Hello {name}, role is {role}', { name: 'Bob', role: 'editor' }))
        .toBe('Hello Bob, role is editor')
    })

    it('should support mixed bracket styles [key] and {key} in the same template', () => {
      expect(applyTemplate('User: [name] <{email}>', { name: 'Charlie', email: 'charlie@example.com' }))
        .toBe('User: Charlie <charlie@example.com>')
    })

    it('should handle block tags [tag]content[/tag] replacing [content] macro', () => {
      const replacement = { link: '<a href="https://example.com">[content]</a>' }
      expect(applyTemplate('Go [link]here[/link].', replacement))
        .toBe('Go <a href="https://example.com">here</a>.')
    })

    it('should handle block tags with curly brackets {tag}content{/tag} replacing {content} macro', () => {
      const replacement = { highlight: '<b>{content}</b>' }
      expect(applyTemplate('Please {highlight}note this{/highlight}.', replacement))
        .toBe('Please <b>note this</b>.')
    })

    it('should replace multiple distinct block tags in the same string', () => {
      const replacement = {
        bold: '<b>[content]</b>',
        italic: '<i>[content]</i>'
      }
      expect(applyTemplate('Text with [bold]bold[/bold] and [italic]italic[/italic].', replacement))
        .toBe('Text with <b>bold</b> and <i>italic</i>.')
    })

    it('should replace block tags entirely if replacement does not contain [content] macro', () => {
      const replacement = { badge: '<span class="badge" />' }
      expect(applyTemplate('Item [badge]new[/badge]', replacement))
        .toBe('Item <span class="badge" />')
    })

    it('should handle mixed bracket types for block tags as long as tag name matches', () => {
      expect(applyTemplate('[tag]text{/tag}', { tag: 'val' })).toBe('val')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle the first positional marker %d (index 0)', () => {
      expect(applyTemplate('%d', ['first'])).toBe('first')
    })

    it('should handle the last positional marker %v (index 18)', () => {
      const items = Array.from({ length: 19 }, (_, i) => `item_${i}`)
      expect(applyTemplate('%v', items)).toBe('item_18')
    })

    it('should support all 19 positional markers (%d to %v) in a single string', () => {
      const letters = 'defghijklmnopqrstuv'.split('')
      const template = letters.map(char => `%${char}`).join(' ')
      const values = letters.map((_, index) => `v${index}`)

      expect(applyTemplate(template, values)).toBe(values.join(' '))
    })

    it('should replace out-of-bounds positional markers with empty string', () => {
      expect(applyTemplate('Values: %d, %e, %f, %g', ['one', 'two'])).toBe('Values: one, two, , ')
    })

    it('should ignore letters outside %d..%v range (a-c, w-z)', () => {
      expect(applyTemplate('%a %b %c %w %x %y %z', ['val'])).toBe('%a %b %c %w %x %y %z')
    })

    it('should handle positional markers with no separating whitespace (%d%e%f)', () => {
      expect(applyTemplate('%d%e%f', ['A', 'B', 'C'])).toBe('ABC')
    })

    it('should handle positional markers attached to words (prefix_%d_suffix)', () => {
      expect(applyTemplate('id_%d_count', [42])).toBe('id_42_count')
    })

    it('should ignore excess elements in the replacement array', () => {
      expect(applyTemplate('Only %d', ['one', 'two', 'three'])).toBe('Only one')
    })

    it('should leave empty bracket pairs [] and {} untouched', () => {
      expect(applyTemplate('Array [] and Object {}', { '': 'empty' })).toBe('Array [] and Object {}')
    })

    it('should leave unmatched brackets intact', () => {
      expect(applyTemplate('Math: [x + {y = 10', { x: 5, y: 2 })).toBe('Math: [x + {y = 10')
      expect(applyTemplate('Tags: [open and close]', {})).toBe('Tags: [open and close]')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return empty string when text is empty', () => {
      expect(applyTemplate('', { name: 'test' })).toBe('')
      expect(applyTemplate('', ['first'])).toBe('')
    })

    it('should preserve whitespace-only strings', () => {
      expect(applyTemplate('   \t\n   ', { key: 'val' })).toBe('   \t\n   ')
    })

    it('should return original text when replacement argument is omitted (default parameter)', () => {
      expect(applyTemplate('Hello [name] and %d')).toBe('Hello [name] and %d')
    })

    it('should return original placeholders when replacement object is empty', () => {
      expect(applyTemplate('Hello [name] and {role}', {})).toBe('Hello [name] and {role}')
    })

    it('should replace positional markers with empty string when replacement array is empty', () => {
      expect(applyTemplate('Hello %d and %e', [])).toBe('Hello  and ')
    })

    it('should replace placeholder with empty string when object value is null or undefined', () => {
      expect(applyTemplate('[v1] [v2]', { v1: null, v2: undefined })).toBe(' ')
      expect(applyTemplate('{v1} {v2}', { v1: null, v2: undefined })).toBe(' ')
    })

    it('should replace marker with empty string when array item is null or undefined', () => {
      expect(applyTemplate('%d %e', [null, undefined])).toBe(' ')
    })

    it('should safely convert non-string text inputs to string', () => {
      expect(applyTemplate(12345 as any, {})).toBe('12345')
      expect(applyTemplate(null as any, {})).toBe('null')
      expect(applyTemplate(undefined as any, {})).toBe('undefined')
      expect(applyTemplate(true as any, {})).toBe('true')
    })

    it('should safely handle non-string text input with array replacement without throwing', () => {
      expect(applyTemplate(100 as any, ['val'])).toBe('100')
      expect(applyTemplate(null as any, ['val'])).toBe('null')
      expect(applyTemplate(undefined as any, ['val'])).toBe('undefined')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should preserve numeric 0 as valid data in object and array replacements', () => {
      expect(applyTemplate('Count: [count]', { count: 0 })).toBe('Count: 0')
      expect(applyTemplate('Index: %d', [0])).toBe('Index: 0')
      expect(applyTemplate('[box]text[/box]', { box: 0 })).toBe('0')
    })

    it('should handle negative and floating-point numbers', () => {
      expect(applyTemplate('Balance: [val] (delta: %d)', [-100.5])).toBe('Balance: [val] (delta: -100.5)')
      expect(applyTemplate('Coordinates: [x], [y]', { x: -42, y: 3.14159 })).toBe('Coordinates: -42, 3.14159')
    })

    it('should preserve boolean false as valid data in object and array replacements', () => {
      expect(applyTemplate('Active: [active]', { active: false })).toBe('Active: false')
      expect(applyTemplate('Enabled: %d', [false])).toBe('Enabled: false')
      expect(applyTemplate('[box]text[/box]', { box: false })).toBe('false')
    })

    it('should preserve boolean true in object and array replacements', () => {
      expect(applyTemplate('Active: [active]', { active: true })).toBe('Active: true')
      expect(applyTemplate('Enabled: %d', [true])).toBe('Enabled: true')
    })

    it('should handle empty string as valid replacement value', () => {
      expect(applyTemplate('Prefix[val]Suffix', { val: '' })).toBe('PrefixSuffix')
      expect(applyTemplate('[box]text[/box]', { box: '' })).toBe('')
      expect(applyTemplate('A%dB', [''])).toBe('AB')
    })

    it('should handle numeric keys in replacement objects', () => {
      expect(applyTemplate('[0] [1]', { 0: 'zero', 1: 'one' })).toBe('zero one')
      expect(applyTemplate('{0} {1}', { 0: 'zero', 1: 'one' })).toBe('zero one')
    })

    it('should support keys with hyphens, underscores, dots, and colons', () => {
      expect(applyTemplate('[user_name]-[user-id]-{user.role}-[app:status]', {
        user_name: 'Alex',
        'user-id': '99',
        'user.role': 'lead',
        'app:status': 'active'
      })).toBe('Alex-99-lead-active')
    })

    it('should correctly coerce objects with custom toString() methods', () => {
      const customItem = {
        toString() {
          return 'custom_string'
        }
      }
      expect(applyTemplate('Value: [item]', { item: customItem })).toBe('Value: custom_string')
      expect(applyTemplate('Item: %d', [customItem])).toBe('Item: custom_string')
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should NOT replace inherited Object.prototype properties (prototype pollution guard)', () => {
      expect(applyTemplate('[toString] {valueOf} [constructor] {__proto__} [hasOwnProperty]', {}))
        .toBe('[toString] {valueOf} [constructor] {__proto__} [hasOwnProperty]')
    })

    it('should replace prototype property names if explicitly defined as own properties', () => {
      expect(applyTemplate('[toString] {valueOf}', {
        toString: 'custom_to_string',
        valueOf: 'custom_value_of'
      })).toBe('custom_to_string custom_value_of')
    })

    it('should work correctly with Object.create(null) dictionary objects', () => {
      const dict = Object.create(null)
      dict.title = 'Hello Null Proto'
      expect(applyTemplate('Title: [title] (missing: [missing])', dict))
        .toBe('Title: Hello Null Proto (missing: [missing])')
    })

    it('should preserve dollar signs in tag content without regex token replacement bugs', () => {
      const replacement = { highlight: '<span class="price">[content]</span>' }
      expect(applyTemplate('Cost: [highlight]$500 USD[/highlight]', replacement))
        .toBe('Cost: <span class="price">$500 USD</span>')
      expect(applyTemplate('Tokens: [highlight]$1 $2 $$[/highlight]', replacement))
        .toBe('Tokens: <span class="price">$1 $2 $$</span>')
    })

    it('should preserve regex metacharacters in replacement values without escaping errors', () => {
      const specialValues = {
        regex: '.*+?^${}()|[]\\',
        formula: 'a * (b + c) / [d]'
      }
      expect(applyTemplate('Code: [regex] and [formula]', specialValues))
        .toBe('Code: .*+?^${}()|[]\\ and a * (b + c) / [d]')
    })

    it('should correctly support multiline content within block tags', () => {
      const template = '[card]\n# Header\nDescription paragraph\n- Item 1\n[/card]'
      const replacement = { card: '<section>[content]</section>' }

      expect(applyTemplate(template, replacement))
        .toBe('<section>\n# Header\nDescription paragraph\n- Item 1\n</section>')
    })

    it('should fallback to single placeholder replacement if closing tag is absent', () => {
      expect(applyTemplate('[link]unclosed content', { link: '<a href="#">' }))
        .toBe('<a href="#">unclosed content')
      expect(applyTemplate('[missing]unclosed content', {}))
        .toBe('[missing]unclosed content')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic templates and placeholders', () => {
      expect(applyTemplate('Привет [имя], ваш заказ №{номер}!', {
        имя: 'Алексей',
        номер: '4567'
      })).toBe('Привет Алексей, ваш заказ №4567!')
    })

    it('should support Vietnamese text with diacritics', () => {
      expect(applyTemplate('Xin chào %d, bạn có %e thông báo mới.', ['Nguyễn', 3]))
        .toBe('Xin chào Nguyễn, bạn có 3 thông báo mới.')

      expect(applyTemplate('Học [khoa_hoc]tiếng Việt cơ bản[/khoa_hoc]', {
        khoa_hoc: '<span class="course">[content]</span>'
      })).toBe('Học <span class="course">tiếng Việt cơ bản</span>')
    })

    it('should support European accented and umlaut characters', () => {
      expect(applyTemplate('Über [stadt], Café {preis} €', { stadt: 'München', preis: '4,50' }))
        .toBe('Über München, Café 4,50 €')
    })

    it('should support CJK (Chinese, Japanese, Korean) characters', () => {
      expect(applyTemplate('你好 [用户]，欢迎来到 {城市}', { 用户: '李华', 城市: '上海' }))
        .toBe('你好 李华，欢迎来到 上海')
    })

    it('should support Emojis and multibyte characters', () => {
      expect(applyTemplate('Status: [status] 🚀 (Score: %d ⭐)', [100]))
        .toBe('Status: [status] 🚀 (Score: 100 ⭐)')
      expect(applyTemplate('Fire: [fire] ✨', { fire: '🔥🔥🔥' }))
        .toBe('Fire: 🔥🔥🔥 ✨')
    })
  })

  describe('Statefulness, isolation, and immutability', () => {
    it('should not mutate the input replacement object', () => {
      const replacement = { name: 'Alice', age: 30 }
      const frozenReplacement = Object.freeze({ ...replacement })

      expect(() => applyTemplate('User: [name]', frozenReplacement)).not.toThrow()
      expect(frozenReplacement).toEqual({ name: 'Alice', age: 30 })
    })

    it('should not mutate the input replacement array', () => {
      const replacement = ['first', 'second']
      const frozenReplacement = Object.freeze([...replacement])

      expect(() => applyTemplate('Item: %d, %e', frozenReplacement)).not.toThrow()
      expect(frozenReplacement).toEqual(['first', 'second'])
    })

    it('should be strictly deterministic across repeated invocations', () => {
      const template = 'Item: [id] - %d'
      const obj = { id: 'item_1' }
      const arr = ['first']

      const result1 = applyTemplate(template, obj)
      const result2 = applyTemplate(template, obj)
      expect(result1).toBe(result2)

      const result3 = applyTemplate(template, arr)
      const result4 = applyTemplate(template, arr)
      expect(result3).toBe(result4)
    })

    it('should not suffer from global regex state leaks across consecutive calls', () => {
      // Re-running template with macros repeatedly should never toggle due to regex lastIndex
      for (let i = 0; i < 5; i++) {
        expect(applyTemplate('%d %e %f', ['A', 'B', 'C'])).toBe('A B C')
        expect(applyTemplate('[tag]content[/tag]', { tag: '<b>[content]</b>' })).toBe('<b>content</b>')
        expect(applyTemplate('[val]', { val: 'test' })).toBe('test')
      }
    })
  })
})
