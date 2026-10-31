/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getElementOrWindow } from '../getElementOrWindow'
import * as domRuntimeModule from '../isDomRuntime'

describe('getElementOrWindow', () => {
  let containerElement: HTMLElement

  beforeEach(() => {
    vi.restoreAllMocks()
    containerElement = document.createElement('div')
    containerElement.id = 'test-container'
    containerElement.className = 'container-class'
    containerElement.setAttribute('data-role', 'wrapper')
    document.body.appendChild(containerElement)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    containerElement.remove()
    document.body.innerHTML = ''
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return the Window object directly if window is passed (without resolving to document.body)', () => {
      const result = getElementOrWindow(window)
      expect(result).toBe(window)
      expect(result).not.toBe(document.body)
    })

    it('should return the element itself if an HTMLElement instance is passed', () => {
      const spanElement = document.createElement('span')
      expect(getElementOrWindow(spanElement)).toBe(spanElement)
    })

    it('should return the matched element when a valid ID selector string is passed', () => {
      expect(getElementOrWindow('#test-container')).toBe(containerElement)
    })

    it('should return the matched element when a valid class or attribute selector string is passed', () => {
      expect(getElementOrWindow('.container-class')).toBe(containerElement)
      expect(getElementOrWindow('[data-role="wrapper"]')).toBe(containerElement)
    })
  })

  describe('Boundary values and DOM hierarchy', () => {
    it('should return the first matching element in document order when selector matches multiple nodes', () => {
      const firstItem = document.createElement('div')
      firstItem.className = 'repeated-item'
      const secondItem = document.createElement('div')
      secondItem.className = 'repeated-item'

      containerElement.append(firstItem, secondItem)

      expect(getElementOrWindow('.repeated-item')).toBe(firstItem)
    })

    it('should resolve deeply nested elements via complex CSS combinators', () => {
      const sectionElement = document.createElement('section')
      const articleElement = document.createElement('article')
      const paragraphElement = document.createElement('p')
      paragraphElement.className = 'deep-target'

      articleElement.appendChild(paragraphElement)
      sectionElement.appendChild(articleElement)
      containerElement.appendChild(sectionElement)

      expect(getElementOrWindow('#test-container > section article p.deep-target')).toBe(paragraphElement)
    })

    it('should return a detached Element instance that is not mounted in document.body', () => {
      const detachedElement = document.createElement('div')
      expect(getElementOrWindow(detachedElement)).toBe(detachedElement)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return undefined when called with no arguments', () => {
      expect(getElementOrWindow()).toBeUndefined()
    })

    it('should return undefined when undefined is explicitly passed', () => {
      expect(getElementOrWindow(undefined)).toBeUndefined()
    })

    it('should return undefined when null is passed at runtime', () => {
      // @ts-expect-error Testing runtime handling of null input
      expect(getElementOrWindow(null)).toBeUndefined()
    })

    it('should return undefined if selector does not match any element in the DOM', () => {
      expect(getElementOrWindow('.non-existent-class-for-window-test')).toBeUndefined()
      expect(getElementOrWindow('#missing-id')).toBeUndefined()
    })

    it('should throw SyntaxError when selector is empty string or whitespace-only (native querySelector behavior)', () => {
      expect(() => getElementOrWindow('')).toThrow()
      expect(() => getElementOrWindow('   ')).toThrow()
    })
  })

  describe('DOM element types, window, and SVG', () => {
    it('should distinguish between passing window and passing document.body', () => {
      expect(getElementOrWindow(window)).toBe(window)
      expect(getElementOrWindow(document.body)).toBe(document.body)
      expect(getElementOrWindow('body')).toBe(document.body)
    })

    it('should return SVGElement and nested SVG child elements directly or by selector', () => {
      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svgElement.id = 'vector-icon'
      const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      pathElement.setAttribute('class', 'vector-path')

      svgElement.appendChild(pathElement)
      containerElement.appendChild(svgElement)

      expect(getElementOrWindow(svgElement)).toBe(svgElement)
      expect(getElementOrWindow(pathElement)).toBe(pathElement)
      expect(getElementOrWindow('#vector-icon')).toBe(svgElement)
      expect(getElementOrWindow('#vector-icon .vector-path')).toBe(pathElement)
    })

    it('should support various interactive HTML elements (input, button, form, select)', () => {
      const inputElement = document.createElement('input')
      const buttonElement = document.createElement('button')
      const formElement = document.createElement('form')

      expect(getElementOrWindow(inputElement)).toBe(inputElement)
      expect(getElementOrWindow(buttonElement)).toBe(buttonElement)
      expect(getElementOrWindow(formElement)).toBe(formElement)
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should return a custom Window-like object whose window circular reference points to itself', () => {
      const mockWindow: Record<string, unknown> = {}
      mockWindow.window = mockWindow

      expect(getElementOrWindow(mockWindow as unknown as Window)).toBe(mockWindow)
    })

    it('should pass through non-string falsy primitives (0, false) at runtime without throwing', () => {
      // @ts-expect-error Testing runtime safety with numeric 0
      expect(getElementOrWindow(0)).toBe(0)
      // @ts-expect-error Testing runtime safety with boolean false
      expect(getElementOrWindow(false)).toBe(false)
    })

    it('should pass through custom objects with querySelector support as elements', () => {
      const customElementLike = {
        querySelector: () => null
      } as unknown as HTMLElement

      expect(getElementOrWindow(customElementLike)).toBe(customElementLike)
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should resolve elements using attribute selectors with special characters', () => {
      containerElement.setAttribute('data-complex', 'value:with-special_chars.v1')
      expect(getElementOrWindow('[data-complex="value:with-special_chars.v1"]')).toBe(containerElement)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should resolve elements with Cyrillic, Vietnamese, CJK, and Unicode Symbol attributes or content', () => {
      const unicodeElement = document.createElement('div')
      unicodeElement.setAttribute('data-cyrillic', 'Привет')
      unicodeElement.setAttribute('data-vietnamese', 'Xin chào')
      unicodeElement.setAttribute('data-cjk', '你好')
      unicodeElement.setAttribute('data-symbol', '✨')
      unicodeElement.textContent = '🚀 🔥 ✨'
      containerElement.appendChild(unicodeElement)

      expect(getElementOrWindow('[data-cyrillic="Привет"]')).toBe(unicodeElement)
      expect(getElementOrWindow('[data-vietnamese="Xin chào"]')).toBe(unicodeElement)
      expect(getElementOrWindow('[data-cjk="你好"]')).toBe(unicodeElement)
      expect(getElementOrWindow('[data-symbol="✨"]')).toBe(unicodeElement)
      expect(getElementOrWindow(unicodeElement)?.textContent).toBe('🚀 🔥 ✨')
    })
  })

  describe('SSR safety, statefulness, and isolation', () => {
    it('should return undefined in SSR environment (isDomRuntime === false) when querying by CSS selector', () => {
      vi.spyOn(domRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      expect(getElementOrWindow('#test-container')).toBeUndefined()
      expect(getElementOrWindow('.container-class')).toBeUndefined()
    })

    it('should not mutate the passed element or Window object', () => {
      const originalId = containerElement.id
      const originalClassName = containerElement.className

      getElementOrWindow(containerElement)
      getElementOrWindow(window)

      expect(containerElement.id).toBe(originalId)
      expect(containerElement.className).toBe(originalClassName)
    })

    it('should produce deterministic results across repeated invocations', () => {
      const firstResult = getElementOrWindow('#test-container')
      const secondResult = getElementOrWindow('#test-container')
      const thirdResult = getElementOrWindow('#test-container')

      expect(firstResult).toBe(containerElement)
      expect(secondResult).toBe(containerElement)
      expect(thirdResult).toBe(containerElement)
    })
  })
})
