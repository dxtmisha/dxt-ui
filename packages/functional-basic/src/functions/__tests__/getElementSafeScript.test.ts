/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getElementSafeScript } from '../getElementSafeScript'
import { getHydrationData } from '../getHydrationData'

describe('getElementSafeScript', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should generate a valid script tag with application/json type', () => {
      const result = getElementSafeScript('app-data', { test: 123 })
      expect(result).toBe('<script id="app-data" type="application/json">{"test":123}</script>')
    })

    it('should handle primitives (numbers, booleans, strings)', () => {
      expect(getElementSafeScript('num', 42)).toBe(
        '<script id="num" type="application/json">42</script>'
      )
      expect(getElementSafeScript('bool', true)).toBe(
        '<script id="bool" type="application/json">true</script>'
      )
      expect(getElementSafeScript('str', 'hello')).toBe(
        '<script id="str" type="application/json">"hello"</script>'
      )
    })

    it('should handle arrays and nested objects', () => {
      const data = { items: [1, 2, 3], nested: { valid: true } }
      const result = getElementSafeScript('nested-data', data)
      expect(result).toBe(
        '<script id="nested-data" type="application/json">{"items":[1,2,3],"nested":{"valid":true}}</script>'
      )
    })

    it('should handle empty objects and arrays', () => {
      expect(getElementSafeScript('empty-obj', {})).toBe(
        '<script id="empty-obj" type="application/json">{}</script>'
      )
      expect(getElementSafeScript('empty-arr', [])).toBe(
        '<script id="empty-arr" type="application/json">[]</script>'
      )
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should serialize numeric zero correctly', () => {
      expect(getElementSafeScript('zero', 0)).toBe(
        '<script id="zero" type="application/json">0</script>'
      )
      expect(getElementSafeScript('zero-obj', { count: 0 })).toBe(
        '<script id="zero-obj" type="application/json">{"count":0}</script>'
      )
    })

    it('should serialize negative numbers and floats', () => {
      expect(getElementSafeScript('neg', -42)).toBe(
        '<script id="neg" type="application/json">-42</script>'
      )
      expect(getElementSafeScript('float', 3.14159)).toBe(
        '<script id="float" type="application/json">3.14159</script>'
      )
    })

    it('should serialize boolean false correctly', () => {
      expect(getElementSafeScript('false-val', false)).toBe(
        '<script id="false-val" type="application/json">false</script>'
      )
      expect(getElementSafeScript('false-obj', { active: false })).toBe(
        '<script id="false-obj" type="application/json">{"active":false}</script>'
      )
    })

    it('should serialize empty string correctly', () => {
      expect(getElementSafeScript('empty-str', '')).toBe(
        '<script id="empty-str" type="application/json">""</script>'
      )
    })

    it('should serialize null correctly', () => {
      expect(getElementSafeScript('null-val', null)).toBe(
        '<script id="null-val" type="application/json">null</script>'
      )
      expect(getElementSafeScript('null-obj', { item: null })).toBe(
        '<script id="null-obj" type="application/json">{"item":null}</script>'
      )
    })

    it('should serialize undefined safely to null without throwing TypeError', () => {
      expect(getElementSafeScript('undef', undefined)).toBe(
        '<script id="undef" type="application/json">null</script>'
      )
      expect(getElementSafeScript('omitted-data')).toBe(
        '<script id="omitted-data" type="application/json">null</script>'
      )
    })

    it('should serialize functions and symbols safely to null', () => {
      expect(getElementSafeScript('fn', () => {})).toBe(
        '<script id="fn" type="application/json">null</script>'
      )
      expect(getElementSafeScript('sym', Symbol('test'))).toBe(
        '<script id="sym" type="application/json">null</script>'
      )
    })

    it('should serialize special numeric values (NaN, Infinity, -Infinity) to null per JSON specification', () => {
      expect(getElementSafeScript('nan-id', NaN)).toBe(
        '<script id="nan-id" type="application/json">null</script>'
      )
      expect(getElementSafeScript('inf-id', Infinity)).toBe(
        '<script id="inf-id" type="application/json">null</script>'
      )
      expect(getElementSafeScript('neg-inf-id', -Infinity)).toBe(
        '<script id="neg-inf-id" type="application/json">null</script>'
      )
    })

    it('should handle empty string ID', () => {
      const result = getElementSafeScript('', { value: 1 })
      expect(result).toBe('<script id="" type="application/json">{"value":1}</script>')
    })

    it('should respect custom toJSON method on serialized objects', () => {
      const customSerializable = {
        secret: 'hidden',
        toJSON() {
          return { exposed: 'safe-value' }
        }
      }
      expect(getElementSafeScript('custom-json', customSerializable)).toBe(
        '<script id="custom-json" type="application/json">{"exposed":"safe-value"}</script>'
      )
    })
  })

  describe('ID attribute escaping and sanitization', () => {
    it('should escape double quotes in script ID to prevent attribute breakout', () => {
      const maliciousId = 'payload" onfocus="alert(1)'
      const result = getElementSafeScript(maliciousId, { ok: true })
      expect(result).toContain('id="payload&quot; onfocus=&quot;alert(1)"')
      expect(result.startsWith('<script id="payload&quot; onfocus=&quot;alert(1)"')).toBe(true)
    })

    it('should escape angle brackets in script ID to prevent tag injection', () => {
      const tagBreakoutId = 'bad<script>tag>'
      const result = getElementSafeScript(tagBreakoutId, { ok: true })
      expect(result).toContain('id="bad&lt;script&gt;tag&gt;"')
    })

    it('should safely support numeric script IDs', () => {
      const result = getElementSafeScript(12345, { count: 1 })
      expect(result).toBe('<script id="12345" type="application/json">{"count":1}</script>')
    })

    it('should escape multiple consecutive double quotes in ID', () => {
      const result = getElementSafeScript('"""id"""', {})
      expect(result).toBe('<script id="&quot;&quot;&quot;id&quot;&quot;&quot;" type="application/json">{}</script>')
    })
  })

  describe('Metacharacters, XSS prevention, and security', () => {
    it('should escape closing script tag </script> in JSON data', () => {
      const data = { xss: '</script><script>alert(1)</script>' }
      const result = getElementSafeScript('test-xss', data)

      expect(result).toContain('<\\/script>')
      expect(result.lastIndexOf('</script>')).toBe(result.length - 9)
    })

    it('should escape closing script tag regardless of case (case-insensitive)', () => {
      const data = {
        upper: '</SCRIPT>',
        mixed: '</Script>',
        random: '</sCrIpT>'
      }
      const result = getElementSafeScript('case-test', data)

      expect(result.includes('</SCRIPT>')).toBe(false)
      expect(result.includes('</Script>')).toBe(false)
      expect(result.includes('</sCrIpT>')).toBe(false)
      expect(result).toContain('<\\/SCRIPT>')
      expect(result).toContain('<\\/Script>')
      expect(result).toContain('<\\/sCrIpT>')
    })

    it('should escape multiple occurrences of closing script tags', () => {
      const data = { a: '</script>', b: '</script>', c: '</script>' }
      const result = getElementSafeScript('multi-xss', data)
      const count = (result.match(/<\\\/script>/g) || []).length
      expect(count).toBe(3)
    })

    it('should escape closing script tags with trailing whitespace like </script >', () => {
      const data = { xss: '</script ><img src=x onerror=alert(1)>' }
      const result = getElementSafeScript('space-xss', data)
      expect(result).toContain('<\\/script >')
      expect(result.includes('</script >')).toBe(false)
    })

    it('should escape closing script tags with attributes like </script attr="x">', () => {
      const data = { xss: '</script attr="x"><img src=x onerror=alert(1)>' }
      const result = getElementSafeScript('attr-xss', data)
      expect(result).toContain('<\\/script attr=\\"x\\">')
      expect(result.includes('</script attr=')).toBe(false)
    })

    it('should escape closing script tags with slash like </script/>', () => {
      const data = { xss: '</script/>' }
      const result = getElementSafeScript('slash-xss', data)
      expect(result).toContain('<\\/script/>')
      expect(result.includes('</script/>')).toBe(false)
    })

    it('should escape opening script tags or HTML tags in string content safely', () => {
      const data = { tag: '<script src="evil.js">' }
      const result = getElementSafeScript('open-script', data)
      expect(result).toBe('<script id="open-script" type="application/json">{"tag":"<script src=\\"evil.js\\">"}</script>')
    })

    it('should handle HTML comment sequences', () => {
      const data = { comment: '<!-- <script>alert(1)</script> -->' }
      const result = getElementSafeScript('html-comment', data)
      expect(result).toContain('<!-- <script>alert(1)<\\/script> -->')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic text in serialized data', () => {
      const data = { greeting: 'Привет мир', details: 'Тестирование гидратации' }
      const result = getElementSafeScript('cyrillic-test', data)
      expect(result).toContain('Привет мир')
      expect(result).toContain('Тестирование гидратации')
    })

    it('should preserve Vietnamese diacritics in serialized data', () => {
      const data = { message: 'Xin chào thế giới', title: 'Dữ liệu an toàn' }
      const result = getElementSafeScript('vietnamese-test', data)
      expect(result).toContain('Xin chào thế giới')
      expect(result).toContain('Dữ liệu an toàn')
    })

    it('should preserve CJK characters in serialized data', () => {
      const data = { ja: 'こんにちは', zh: '你好世界', ko: '안녕하세요' }
      const result = getElementSafeScript('cjk-test', data)
      expect(result).toContain('こんにちは')
      expect(result).toContain('你好世界')
      expect(result).toContain('안녕하세요')
    })

    it('should preserve multibyte Emojis in serialized data and ID', () => {
      const data = { emoji: '🚀 🔥 ✨ 🎉' }
      const result = getElementSafeScript('emoji-id-🚀', data)
      expect(result).toContain('id="emoji-id-🚀"')
      expect(result).toContain('🚀 🔥 ✨ 🎉')
    })
  })

  describe('DOM integration and Hydration round-trip', () => {
    it('should round-trip seamlessly with getHydrationData', () => {
      const originalData = {
        name: 'DXT UI',
        version: 1,
        active: true,
        items: ['a', 'b', 'c'],
        nested: { count: 42, zero: 0 }
      }

      const scriptHtml = getElementSafeScript('hydration-sync', originalData)
      document.body.innerHTML = scriptHtml

      const restoredData = getHydrationData('hydration-sync', null)
      expect(restoredData).toEqual(originalData)
    })

    it('should round-trip data containing escaped </script> tags correctly via JSON.parse', () => {
      const originalData = {
        content: '</script><script>alert("payload")</script>'
      }

      const scriptHtml = getElementSafeScript('xss-sync', originalData)
      document.body.innerHTML = scriptHtml

      const restoredData = getHydrationData<{ content: string } | null>('xss-sync', null)
      expect(restoredData).toEqual(originalData)
      expect(restoredData?.content).toBe('</script><script>alert("payload")</script>')
    })
  })

  describe('Statefulness, isolation, and determinism', () => {
    it('should produce identical deterministic output on repeated invocations', () => {
      const data = { id: 10, label: 'fixed' }
      const firstResult = getElementSafeScript('deterministic', data)
      const secondResult = getElementSafeScript('deterministic', data)
      const thirdResult = getElementSafeScript('deterministic', data)

      expect(firstResult).toBe(secondResult)
      expect(secondResult).toBe(thirdResult)
    })

    it('should not mutate the input data object', () => {
      const original = { firstKey: 1, secondKey: '</script>' }
      const copy = { ...original }

      getElementSafeScript('no-mutation', original)
      expect(original).toEqual(copy)
    })
  })
})
