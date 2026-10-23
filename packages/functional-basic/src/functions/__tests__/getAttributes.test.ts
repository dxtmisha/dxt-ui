/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getAttributes } from '../getAttributes'
import * as domRuntime from '../isDomRuntime'

describe('getAttributes', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.setAttribute('id', 'test-id')
    element.setAttribute('data-value', 'custom-value')
    element.setAttribute('class', 'test-class')
    element.setAttribute('disabled', '')
    document.body.appendChild(element)
  })

  afterEach(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
    }
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return all attributes of a provided HTMLElement instance', () => {
      const attributes = getAttributes(element)

      expect(attributes).toEqual({
        'id': 'test-id',
        'data-value': 'custom-value',
        'class': 'test-class',
        'disabled': ''
      })
    })

    it('should extract attributes by CSS selector string', () => {
      const attributes = getAttributes('#test-id')

      expect(attributes).toEqual({
        'id': 'test-id',
        'data-value': 'custom-value',
        'class': 'test-class',
        'disabled': ''
      })
    })

    it('should extract attributes from a detached DOM element not mounted in document.body', () => {
      const detachedElement = document.createElement('article')
      detachedElement.setAttribute('role', 'article')
      detachedElement.setAttribute('aria-hidden', 'false')

      expect(getAttributes(detachedElement)).toEqual({
        'role': 'article',
        'aria-hidden': 'false'
      })
    })

    it('should extract attributes from document.body when window is passed', () => {
      document.body.setAttribute('data-theme', 'dark')

      const attributes = getAttributes(window)
      expect(attributes['data-theme']).toBe('dark')

      document.body.removeAttribute('data-theme')
    })
  })

  describe('Empty, unmatched, and nullish inputs', () => {
    it('should return an empty object when no element matches the CSS selector', () => {
      const attributes = getAttributes('.non-existent-element')
      expect(attributes).toEqual({})
    })

    it('should return an empty object when called without arguments', () => {
      expect(getAttributes()).toEqual({})
    })

    it('should return an empty object when passed undefined', () => {
      expect(getAttributes(undefined)).toEqual({})
    })

    it('should return an empty object when passed null', () => {
      expect(getAttributes(null as unknown as undefined)).toEqual({})
    })

    it('should return an empty object for an element that has no attributes', () => {
      const emptyElement = document.createElement('span')
      expect(getAttributes(emptyElement)).toEqual({})
    })
  })

  describe('Resilience to non-element nodes and custom objects', () => {
    it('should not throw and should return an empty object for document', () => {
      expect(() => getAttributes(document as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(document as unknown as HTMLElement)).toEqual({})
    })

    it('should not throw and should return an empty object for a Text node', () => {
      const textNode = document.createTextNode('sample text')
      expect(() => getAttributes(textNode as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(textNode as unknown as HTMLElement)).toEqual({})
    })

    it('should not throw and should return an empty object for a DocumentFragment', () => {
      const fragment = document.createDocumentFragment()
      expect(() => getAttributes(fragment as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(fragment as unknown as HTMLElement)).toEqual({})
    })

    it('should safely handle an object without getAttributeNames', () => {
      const plainObject = { someKey: 'someValue' }
      expect(() => getAttributes(plainObject as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(plainObject as unknown as HTMLElement)).toEqual({})
    })

    it('should convert null return value from getAttribute to undefined', () => {
      const mockElement = {
        getAttributeNames: () => ['data-present', 'data-null'],
        getAttribute: (name: string) => (name === 'data-present' ? 'present-value' : null)
      }

      const attributes = getAttributes(mockElement as unknown as HTMLElement)
      expect(attributes).toEqual({
        'data-present': 'present-value',
        'data-null': undefined
      })
    })
  })

  describe('Attribute value formats, falsy strings, and special payloads', () => {
    it('should preserve boolean and empty attributes as empty strings', () => {
      const button = document.createElement('button')
      button.setAttribute('disabled', '')
      button.setAttribute('hidden', '')
      button.setAttribute('required', '')

      expect(getAttributes(button)).toEqual({
        disabled: '',
        hidden: '',
        required: ''
      })
    })

    it('should accurately preserve numeric and falsy string values ("0", "false")', () => {
      const input = document.createElement('input')
      input.setAttribute('tabindex', '0')
      input.setAttribute('value', '0')
      input.setAttribute('aria-expanded', 'false')
      input.setAttribute('maxlength', '100')

      expect(getAttributes(input)).toEqual({
        'tabindex': '0',
        'value': '0',
        'aria-expanded': 'false',
        'maxlength': '100'
      })
    })

    it('should preserve multilingual and Unicode values (Cyrillic, Vietnamese, CJK, Emoji)', () => {
      const link = document.createElement('a')
      link.setAttribute('title', 'Главная страница')
      link.setAttribute('aria-label', 'Trang chủ Tiếng Việt')
      link.setAttribute('data-cjk', '你好 世界')
      link.setAttribute('data-emoji', '🚀 🔥 ✨')

      expect(getAttributes(link)).toEqual({
        'title': 'Главная страница',
        'aria-label': 'Trang chủ Tiếng Việt',
        'data-cjk': '你好 世界',
        'data-emoji': '🚀 🔥 ✨'
      })
    })

    it('should preserve URLs, JSON strings, and raw HTML/XSS characters without corruption', () => {
      const container = document.createElement('div')
      const url = 'https://example.com/api?user=1&name=test#hash'
      const jsonString = JSON.stringify({ items: [1, 2, 3], active: true })
      const xssPayload = '<script>alert("xss")</script>'

      container.setAttribute('data-url', url)
      container.setAttribute('data-state', jsonString)
      container.setAttribute('data-raw', xssPayload)

      expect(getAttributes(container)).toEqual({
        'data-url': url,
        'data-state': jsonString,
        'data-raw': xssPayload
      })
    })
  })

  describe('SVG, dynamic mutations, and SSR safety', () => {
    it('should extract attributes from SVGElement instances', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.setAttribute('viewBox', '0 0 24 24')
      svg.setAttribute('width', '24')
      svg.setAttribute('height', '24')
      svg.setAttribute('fill', 'currentColor')

      expect(getAttributes(svg)).toEqual({
        viewBox: '0 0 24 24',
        width: '24',
        height: '24',
        fill: 'currentColor'
      })
    })

    it('should reflect dynamic addition and removal of attributes across invocations', () => {
      const dynamicElement = document.createElement('div')
      dynamicElement.setAttribute('data-initial', 'value1')
      expect(getAttributes(dynamicElement)).toEqual({ 'data-initial': 'value1' })

      dynamicElement.removeAttribute('data-initial')
      dynamicElement.setAttribute('data-updated', 'value2')
      expect(getAttributes(dynamicElement)).toEqual({ 'data-updated': 'value2' })
    })

    it('should return a new independent object that does not mutate DOM attributes when modified', () => {
      const attributes = getAttributes(element)
      attributes.id = 'mutated-id'
      delete attributes.class

      expect(element.getAttribute('id')).toBe('test-id')
      expect(element.getAttribute('class')).toBe('test-class')
    })

    it('should return an empty object for string selectors when isDomRuntime() is false (SSR)', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)

      expect(getAttributes('#test-id')).toEqual({})
    })
  })
})
