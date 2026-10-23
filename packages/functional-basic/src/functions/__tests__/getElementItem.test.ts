/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getElementItem } from '../getElementItem'
import * as domRuntimeModule from '../isDomRuntime'

describe('getElementItem', () => {
  let element: HTMLElement
  let inputElement: HTMLInputElement

  beforeEach(() => {
    vi.restoreAllMocks()
    element = document.createElement('div')
    element.id = 'test-id'
    element.className = 'test-class'
    element.setAttribute('data-custom', '123')
    document.body.appendChild(element)

    inputElement = document.createElement('input')
    inputElement.id = 'input-id'
    inputElement.type = 'checkbox'
    inputElement.value = 'initial-value'
    document.body.appendChild(inputElement)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    element.remove()
    inputElement.remove()
    document.body.removeAttribute('id')
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return the value of a property from a DOM element', () => {
      expect(getElementItem(element, 'id')).toBe('test-id')
      expect(getElementItem(element, 'className')).toBe('test-class')
      expect(getElementItem(element, 'tagName')).toBe('DIV')
    })

    it('should return property values from specialized input elements', () => {
      expect(getElementItem(inputElement, 'type')).toBe('checkbox')
      expect(getElementItem(inputElement, 'value')).toBe('initial-value')
      expect(getElementItem(inputElement, 'checked')).toBe(false)
    })

    it('should return the value when passing a valid CSS selector string', () => {
      expect(getElementItem('#test-id', 'className')).toBe('test-class')
      expect(getElementItem('#input-id', 'type')).toBe('checkbox')
    })

    it('should return the fallback default value if the element is not found by selector', () => {
      expect(getElementItem('.non-existent', 'id', 'fallback-id')).toBe('fallback-id')
      expect(getElementItem('#missing-btn', 'className', 'default-class')).toBe('default-class')
    })

    it('should return undefined if property does not exist on element and no default provided', () => {
      expect(getElementItem(element, 'nonExistentProperty' as keyof HTMLElement)).toBeUndefined()
    })

    it('should return default value if property is undefined on element', () => {
      expect(getElementItem(element, 'nonExistentProperty' as keyof HTMLElement, 'default-val')).toBe(
        'default-val'
      )
    })

    it('should return complex object properties like dataset and style', () => {
      const dataset = getElementItem(element, 'dataset')
      expect(dataset?.custom).toBe('123')

      element.style.color = 'red'
      const style = getElementItem(element, 'style')
      expect(style?.color).toBe('red')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should preserve numeric 0 and not overwrite it with default value', () => {
      element.tabIndex = 0
      expect(getElementItem(element, 'tabIndex', 999)).toBe(0)
    })

    it('should preserve negative numbers (e.g. tabIndex = -1)', () => {
      element.tabIndex = -1
      expect(getElementItem(element, 'tabIndex', 0)).toBe(-1)
    })

    it('should preserve boolean false and not overwrite it with default value', () => {
      inputElement.checked = false
      expect(getElementItem(inputElement, 'checked', true)).toBe(false)

      inputElement.disabled = false
      expect(getElementItem(inputElement, 'disabled', true)).toBe(false)
    })

    it('should preserve boolean true and not overwrite it with default value', () => {
      inputElement.checked = true
      expect(getElementItem(inputElement, 'checked', false)).toBe(true)
    })

    it('should preserve empty string "" and not overwrite it with default value', () => {
      element.className = ''
      expect(getElementItem(element, 'className', 'fallback')).toBe('')

      inputElement.value = ''
      expect(getElementItem(inputElement, 'value', 'default-text')).toBe('')
    })

    it('should preserve NaN without replacing it with defaultValue', () => {
      const custom = { value: NaN } as unknown as HTMLElement
      expect(Number.isNaN(getElementItem(custom, 'value' as keyof HTMLElement, 42))).toBe(true)
    })

    it('should trigger defaultValue when property value is null', () => {
      // Standalone input has null form property
      expect(getElementItem(inputElement, 'form', 'no-form')).toBe('no-form')
    })

    it('should trigger defaultValue when property value is explicitly undefined', () => {
      const custom = { customField: undefined } as unknown as HTMLElement
      expect(getElementItem(custom, 'customField' as keyof HTMLElement, 'fallback')).toBe('fallback')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return default value when selector does not match any element', () => {
      expect(getElementItem('.missing-selector', 'id', 'default')).toBe('default')
    })

    it('should return undefined when selector does not match and no default is provided', () => {
      expect(getElementItem('.missing-selector', 'id')).toBeUndefined()
    })

    it('should return default value when element is undefined', () => {
      expect(getElementItem(undefined as unknown as string, 'id', 'default-id')).toBe('default-id')
    })

    it('should return undefined when element is undefined and no default is provided', () => {
      expect(getElementItem(undefined as unknown as string, 'id')).toBeUndefined()
    })

    it('should return default value when element is null', () => {
      expect(getElementItem(null as unknown as string, 'id', 'default-id')).toBe('default-id')
    })

    it('should throw SyntaxError when selector is empty string (standard DOM querySelector behavior)', () => {
      expect(() => getElementItem('', 'id', 'default')).toThrow()
    })

    it('should throw SyntaxError when selector is whitespace-only (standard DOM querySelector behavior)', () => {
      expect(() => getElementItem('   ', 'id', 'default')).toThrow()
    })

    it('should accept nullish default values (null, 0, false, "") correctly', () => {
      expect(getElementItem('.missing', 'id', null)).toBeNull()
      expect(getElementItem('.missing', 'id', 0)).toBe(0)
      expect(getElementItem('.missing', 'id', false)).toBe(false)
      expect(getElementItem('.missing', 'id', '')).toBe('')
    })

    it('should return default value when property key is not found on element', () => {
      expect(getElementItem(element, 'nonExistentProp', 'fallback')).toBe('fallback')
    })
  })

  describe('DOM element types, window, and SVG', () => {
    it('should retrieve properties from SVGElement', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.id = 'svg-root'
      document.body.appendChild(svg)

      expect(getElementItem(svg, 'id')).toBe('svg-root')
      expect(getElementItem(svg, 'namespaceURI')).toBe('http://www.w3.org/2000/svg')

      svg.remove()
    })

    it('should retrieve properties from nested SVG elements (path)', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      svg.appendChild(path)
      document.body.appendChild(svg)

      expect(getElementItem(path, 'namespaceURI')).toBe('http://www.w3.org/2000/svg')
      expect(getElementItem(path, 'ownerSVGElement')).toBe(svg)

      svg.remove()
    })

    it('should resolve window target to document.body and retrieve body properties', () => {
      document.body.id = 'body-elem'
      expect(getElementItem(window, 'id')).toBe('body-elem')
      expect(getElementItem(window, 'tagName')).toBe('BODY')
    })

    it('should return fallback for window-specific properties because window resolves to document.body', () => {
      // document.body does not have innerWidth, so fallback is returned
      expect(getElementItem(window, 'innerWidth' as keyof Window, 1024)).toBe(1024)
    })

    it('should retrieve properties from anchor and button elements', () => {
      const anchor = document.createElement('a')
      anchor.href = 'https://example.com/test'
      anchor.target = '_blank'
      document.body.appendChild(anchor)

      expect(getElementItem(anchor, 'target')).toBe('_blank')
      expect(getElementItem(anchor, 'href')).toContain('example.com/test')

      anchor.remove()
    })

    it('should retrieve function references from elements', () => {
      const clickMethod = getElementItem(element, 'click')
      expect(typeof clickMethod).toBe('function')
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should handle arbitrary string keys on elements with fallback', () => {
      expect(getElementItem(element, 'custom_attr_key', 'fallback-attr')).toBe('fallback-attr')
    })

    it('should work with custom objects that satisfy Element interface contract', () => {
      const customElement = { id: 'mock-id', title: 'Mock Title' } as unknown as HTMLElement
      expect(getElementItem(customElement, 'id')).toBe('mock-id')
      expect(getElementItem(customElement, 'title')).toBe('Mock Title')
    })

    it('should return text content correctly from elements', () => {
      element.textContent = 'Hello World'
      expect(getElementItem(element, 'textContent')).toBe('Hello World')
    })

    it('should return numeric properties from custom objects', () => {
      const customObject = { count: 42, zero: 0 } as unknown as HTMLElement
      expect(getElementItem(customObject, 'count' as keyof HTMLElement)).toBe(42)
      expect(getElementItem(customObject, 'zero' as keyof HTMLElement, 100)).toBe(0)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should retrieve properties when selector contains attribute queries', () => {
      expect(getElementItem('[data-custom="123"]', 'id')).toBe('test-id')
    })

    it('should safely handle invalid selector strings by catching or returning fallback', () => {
      let result: string | undefined
      try {
        result = getElementItem(':::invalid-selector:::', 'id', 'safe-fallback')
      } catch {
        result = 'caught'
      }
      expect(['safe-fallback', 'caught']).toContain(result)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should resolve properties on elements with Cyrillic textContent and attributes', () => {
      element.textContent = 'Привет мир'
      element.setAttribute('title', 'Заголовок')
      expect(getElementItem(element, 'textContent')).toBe('Привет мир')
      expect(getElementItem(element, 'title')).toBe('Заголовок')
    })

    it('should resolve properties on elements with Vietnamese textContent', () => {
      element.textContent = 'Xin chào thế giới'
      expect(getElementItem(element, 'textContent')).toBe('Xin chào thế giới')
    })

    it('should resolve properties on elements with CJK and Emoji textContent', () => {
      element.textContent = '你好 世界 🚀 ✨'
      expect(getElementItem(element, 'textContent')).toBe('你好 世界 🚀 ✨')
    })

    it('should query elements with Cyrillic IDs', () => {
      element.id = 'тестовый-блок'
      expect(getElementItem('#тестовый-блок', 'tagName')).toBe('DIV')
    })
  })

  describe('Statefulness, SSR safety, isolation, and immutability', () => {
    it('should return defaultValue or undefined in SSR environment (isDomRuntime === false) when querying by selector or window', () => {
      vi.spyOn(domRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      expect(getElementItem('#test-id', 'className', 'ssr-fallback')).toBe('ssr-fallback')
      expect(getElementItem('#test-id', 'className')).toBeUndefined()
      expect(getElementItem(window, 'tagName', 'SSR_BODY')).toBe('SSR_BODY')
    })

    it('should not mutate element when retrieving properties', () => {
      const originalId = element.id
      const originalClass = element.className

      getElementItem(element, 'id')
      getElementItem(element, 'className', 'different')

      expect(element.id).toBe(originalId)
      expect(element.className).toBe(originalClass)
    })

    it('should produce deterministic and identical outputs across repeated invocations', () => {
      expect(getElementItem(element, 'id')).toBe('test-id')
      expect(getElementItem(element, 'id')).toBe('test-id')
      expect(getElementItem(element, 'id')).toBe('test-id')
    })
  })
})
