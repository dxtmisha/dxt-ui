/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getHydrationData } from '../getHydrationData'
import { getElementSafeScript } from '../getElementSafeScript'
import { ErrorCenter } from '../../classes/ErrorCenter'
import * as isDomRuntimeModule from '../isDomRuntime'

describe('getHydrationData', () => {
  const testId = 'test-hydration-id'

  function createScript(id: string, content: string): HTMLScriptElement {
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/json'
    script.textContent = content
    document.body.appendChild(script)
    return script
  }

  beforeEach(() => {
    document.body.innerHTML = ''
    ErrorCenter.setIsConsole(false)
  })

  afterEach(() => {
    document.body.innerHTML = ''
    ErrorCenter.setIsConsole(true)
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should parse and return valid JSON data from script tag', () => {
      const testData = { name: 'test', value: 123, nested: { key: 'value' } }
      createScript(testId, JSON.stringify(testData))

      const result = getHydrationData(testId, null)

      expect(result).toEqual(testData)
    })

    it('should handle primitives (numbers, booleans, strings)', () => {
      createScript('num-script', '42')
      expect(getHydrationData('num-script', 0)).toBe(42)

      createScript('bool-script', 'true')
      expect(getHydrationData('bool-script', false)).toBe(true)

      createScript('str-script', '"hello world"')
      expect(getHydrationData('str-script', '')).toBe('hello world')
    })

    it('should handle arrays and nested objects', () => {
      const data = { arr: [1, 2, 3], nested: { valid: true } }
      createScript(testId, JSON.stringify(data))

      const result = getHydrationData(testId, {})
      expect(result).toEqual(data)
    })

    it('should handle empty objects and arrays', () => {
      createScript('obj-empty', '{}')
      expect(getHydrationData('obj-empty', null)).toEqual({})

      createScript('arr-empty', '[]')
      expect(getHydrationData('arr-empty', null)).toEqual([])
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should parse numeric zero correctly', () => {
      createScript(testId, '0')

      expect(getHydrationData(testId, 999)).toBe(0)
    })

    it('should parse negative numbers and floats', () => {
      createScript('neg', '-42')
      expect(getHydrationData('neg', 0)).toBe(-42)

      createScript('float', '3.14159')
      expect(getHydrationData('float', 0)).toBe(3.14159)
    })

    it('should parse boolean false correctly', () => {
      createScript(testId, 'false')

      expect(getHydrationData(testId, true)).toBe(false)
    })

    it('should parse empty string correctly', () => {
      createScript(testId, '""')

      expect(getHydrationData(testId, 'fallback')).toBe('')
    })

    it('should parse null value correctly', () => {
      createScript(testId, 'null')

      expect(getHydrationData(testId, { fallback: true })).toBeNull()
    })

    it('should return default value when script tag is not found in DOM', () => {
      const defaultValue = { default: 'value' }
      const result = getHydrationData('non-existent-id', defaultValue)

      expect(result).toEqual(defaultValue)
    })

    it('should return default value when id is empty string', () => {
      const defaultValue = 'empty-id-fallback'
      expect(getHydrationData('', defaultValue)).toBe(defaultValue)
    })
  })

  describe('DOM element validation and tag filtering', () => {
    it('should ignore non-script element with matching ID and return default value', () => {
      const div = document.createElement('div')
      div.id = testId
      div.textContent = JSON.stringify({ injected: true })
      document.body.appendChild(div)

      const defaultValue = { default: true }
      const result = getHydrationData(testId, defaultValue)

      expect(result).toEqual(defaultValue)
    })

    it('should not remove non-script element even when remove is true', () => {
      const div = document.createElement('div')
      div.id = testId
      div.textContent = '{"not": "script"}'
      document.body.appendChild(div)

      getHydrationData(testId, null, true)

      expect(document.getElementById(testId)).toBe(div)
    })

    it('should ignore input and textarea elements with matching ID', () => {
      const input = document.createElement('input')
      input.id = 'input-id'
      input.value = '{"test":1}'
      document.body.appendChild(input)

      expect(getHydrationData('input-id', 'fallback')).toBe('fallback')
      expect(document.getElementById('input-id')).toBe(input)
    })

    it('should work with script tags regardless of custom attributes', () => {
      const script = createScript(testId, JSON.stringify({ ok: true }))
      script.setAttribute('data-test', 'custom')

      expect(getHydrationData(testId, null)).toEqual({ ok: true })
    })
  })

  describe('DOM removal and lifecycle cleanup (finally block)', () => {
    it('should remove script tag after reading when remove is true (default)', () => {
      const testData = { removed: true }
      createScript(testId, JSON.stringify(testData))

      expect(document.getElementById(testId)).toBeTruthy()

      const result = getHydrationData(testId, null)

      expect(result).toEqual(testData)
      expect(document.getElementById(testId)).toBeNull()
    })

    it('should keep script tag after reading when remove is false', () => {
      const testData = { kept: true }
      const script = createScript(testId, JSON.stringify(testData))

      expect(document.getElementById(testId)).toBeTruthy()

      const result = getHydrationData(testId, null, false)

      expect(result).toEqual(testData)
      expect(document.getElementById(testId)).toBe(script)
    })

    it('should remove script tag even when JSON parsing fails if remove is true', () => {
      createScript(testId, 'invalid json {{')

      expect(document.getElementById(testId)).toBeTruthy()

      const defaultValue = { fallback: true }
      const result = getHydrationData(testId, defaultValue, true)

      expect(result).toEqual(defaultValue)
      expect(document.getElementById(testId)).toBeNull()
    })

    it('should keep script tag when JSON parsing fails if remove is false', () => {
      const script = createScript(testId, 'invalid json {{')

      expect(document.getElementById(testId)).toBeTruthy()

      const defaultValue = { fallback: true }
      const result = getHydrationData(testId, defaultValue, false)

      expect(result).toEqual(defaultValue)
      expect(document.getElementById(testId)).toBe(script)
    })
  })

  describe('Error handling and ErrorCenter reporting', () => {
    it('should dispatch error to ErrorCenter.on when JSON is malformed', () => {
      const spy = vi.spyOn(ErrorCenter, 'on')
      createScript(testId, '{ bad json }')

      const defaultValue = { default: 1 }
      const result = getHydrationData(testId, defaultValue)

      expect(result).toEqual(defaultValue)
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          group: 'hydration',
          code: 'error',
          details: expect.objectContaining({
            id: testId,
            error: expect.any(SyntaxError)
          })
        })
      )
    })

    it('should dispatch error to ErrorCenter.on when script has empty content', () => {
      const spy = vi.spyOn(ErrorCenter, 'on')
      createScript(testId, '')

      const defaultValue = { empty: true }
      const result = getHydrationData(testId, defaultValue)

      expect(result).toEqual(defaultValue)
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          group: 'hydration',
          code: 'error',
          details: expect.objectContaining({ id: testId })
        })
      )
    })
  })

  describe('Multilingual, Unicode, and complex structures', () => {
    it('should parse Cyrillic text correctly', () => {
      const data = { greeting: 'Привет мир', description: 'Гидратация данных' }
      createScript(testId, JSON.stringify(data))

      expect(getHydrationData(testId, null)).toEqual(data)
    })

    it('should parse Vietnamese diacritics correctly', () => {
      const data = { greeting: 'Xin chào thế giới', title: 'Dữ liệu an toàn' }
      createScript(testId, JSON.stringify(data))

      expect(getHydrationData(testId, null)).toEqual(data)
    })

    it('should parse CJK characters correctly', () => {
      const data = { ja: 'こんにちは', zh: '你好世界', ko: '안녕하세요' }
      createScript(testId, JSON.stringify(data))

      expect(getHydrationData(testId, null)).toEqual(data)
    })

    it('should parse multibyte Emojis correctly', () => {
      const data = { emojis: '🚀 🔥 ✨ 🎉 🇻🇳' }
      createScript(testId, JSON.stringify(data))

      expect(getHydrationData(testId, null)).toEqual(data)
    })
  })

  describe('DOM integration and Hydration round-trip with getElementSafeScript', () => {
    it('should round-trip arbitrary state created by getElementSafeScript', () => {
      const originalState = {
        user: { id: 101, name: 'Alice', active: true },
        permissions: ['read', 'write', 'execute'],
        config: { theme: 'dark', nested: { deep: [10, 20] } }
      }

      document.body.innerHTML = getElementSafeScript('sync-state', originalState)

      const restoredState = getHydrationData('sync-state', null)
      expect(restoredState).toEqual(originalState)
    })

    it('should round-trip state containing escaped </script> tags created by getElementSafeScript', () => {
      const originalState = {
        payload: '</script><script>alert("xss")</script>',
        whitespaceVariant: '</script >',
        attrVariant: '</script attr="val">'
      }

      document.body.innerHTML = getElementSafeScript('xss-sync', originalState)

      const restoredState = getHydrationData('xss-sync', null)
      expect(restoredState).toEqual(originalState)
    })

    it('should round-trip undefined serialized to null by getElementSafeScript', () => {
      document.body.innerHTML = getElementSafeScript('undef-sync', undefined)

      const restoredState = getHydrationData('undef-sync', 'fallback')
      expect(restoredState).toBeNull()
    })
  })

  describe('SSR and non-DOM runtime safety (isDomRuntime)', () => {
    it('should safely return default value when isDomRuntime returns false', () => {
      const spy = vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      const script = createScript(testId, JSON.stringify({ inDom: true }))

      const defaultValue = { ssr: true }
      const result = getHydrationData(testId, defaultValue)

      expect(result).toEqual(defaultValue)
      expect(spy).toHaveBeenCalled()
      expect(document.getElementById(testId)).toBe(script)
    })

    it('should not throw errors when document is undefined', () => {
      vi.stubGlobal('document', undefined)

      try {
        const defaultValue = { ssr: 'value' }
        const result = getHydrationData(testId, defaultValue)
        expect(result).toEqual(defaultValue)
      } finally {
        vi.unstubAllGlobals()
      }
    })
  })
})
