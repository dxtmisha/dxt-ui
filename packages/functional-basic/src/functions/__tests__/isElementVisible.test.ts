// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { isElementVisible } from '../isElementVisible'

describe('isElementVisible', () => {
  let container: HTMLDivElement
  let originalWindow: typeof window

  beforeEach(() => {
    originalWindow = globalThis.window
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    globalThis.window = originalWindow
    container.remove()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true if an element is in DOM, has dimensions, and has visible styles', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 50, configurable: true })
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(true)
    })

    it('should return true if the selector finds a visible element', () => {
      const div = document.createElement('div')
      div.id = 'test-visible-box'
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      container.appendChild(div)

      expect(isElementVisible('#test-visible-box')).toBe(true)
    })

    it('should return true if an element is off-screen (remains visible in layout)', () => {
      const div = document.createElement('div')
      div.style.position = 'absolute'
      div.style.left = '-1000px'
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(true)
    })

    it('should return true when passing window (resolves to document.body)', () => {
      Object.defineProperty(document.body, 'offsetWidth', { value: 1024, configurable: true })
      Object.defineProperty(document.body, 'offsetHeight', { value: 768, configurable: true })

      expect(isElementVisible(window)).toBe(true)
    })

    it('should return true for different visible display values such as flex and grid', () => {
      const flexDiv = document.createElement('div')
      flexDiv.style.display = 'flex'
      Object.defineProperty(flexDiv, 'offsetWidth', { value: 50, configurable: true })
      Object.defineProperty(flexDiv, 'offsetHeight', { value: 50, configurable: true })
      container.appendChild(flexDiv)

      expect(isElementVisible(flexDiv)).toBe(true)

      const gridDiv = document.createElement('div')
      gridDiv.style.display = 'grid'
      Object.defineProperty(gridDiv, 'offsetWidth', { value: 50, configurable: true })
      Object.defineProperty(gridDiv, 'offsetHeight', { value: 50, configurable: true })
      container.appendChild(gridDiv)

      expect(isElementVisible(gridDiv)).toBe(true)
    })
  })

  describe('CSS hidden properties and zero dimensions (display, visibility, opacity, offsetWidth/offsetHeight)', () => {
    it('should return false if an element has display: none', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      div.style.display = 'none'
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(false)
    })

    it('should return false if an element has visibility: hidden', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      div.style.visibility = 'hidden'
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(false)
    })

    it('should return false if an element has visibility: collapse', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      div.style.visibility = 'collapse'
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(false)
    })

    it('should return false if an element has opacity: 0', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'checkVisibility', { value: undefined, configurable: true })
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      div.style.opacity = '0'
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(false)
    })

    it('should reject a child with opacity 1 when its ordinary parent has opacity 0', () => {
      container.style.opacity = '0'
      const element = document.createElement('button')
      element.style.opacity = '1'
      Object.defineProperties(element, {
        checkVisibility: { value: undefined, configurable: true },
        offsetWidth: { value: 100, configurable: true },
        offsetHeight: { value: 30, configurable: true }
      })
      container.appendChild(element)

      expect(isElementVisible(element)).toBe(false)
    })

    it('should inspect opacity through more than one ordinary ancestor', () => {
      container.style.opacity = '0'
      const parentElement = document.createElement('div')
      parentElement.style.opacity = '1'
      const element = document.createElement('button')
      element.style.opacity = '1'
      Object.defineProperties(element, {
        checkVisibility: { value: undefined, configurable: true },
        offsetWidth: { value: 100, configurable: true },
        offsetHeight: { value: 30, configurable: true }
      })
      parentElement.appendChild(element)
      container.appendChild(parentElement)

      expect(isElementVisible(element)).toBe(false)
    })

    it('should preserve visibility under a partially transparent ordinary ancestor', () => {
      container.style.opacity = '0.5'
      const element = document.createElement('button')
      element.style.opacity = '1'
      Object.defineProperties(element, {
        checkVisibility: { value: undefined, configurable: true },
        offsetWidth: { value: 100, configurable: true },
        offsetHeight: { value: 30, configurable: true }
      })
      container.appendChild(element)

      expect(isElementVisible(element)).toBe(true)
    })

    it('should allow a child to override an ordinary ancestor visibility with visible', () => {
      container.style.visibility = 'hidden'
      const element = document.createElement('button')
      element.style.visibility = 'visible'
      Object.defineProperties(element, {
        checkVisibility: { value: undefined, configurable: true },
        offsetWidth: { value: 100, configurable: true },
        offsetHeight: { value: 30, configurable: true }
      })
      container.appendChild(element)

      expect(isElementVisible(element)).toBe(true)
    })

    it('should return true if an element has partial opacity (e.g. 0.5)', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      div.style.opacity = '0.5'
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(true)
    })

    it('should return false if both offsetWidth and offsetHeight are 0', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 0, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 0, configurable: true })
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(false)
    })

    it('should return true if offsetWidth is 0 while offsetHeight is positive (e.g. vertical divider)', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 0, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(true)
    })

    it('should return true if offsetHeight is 0 while offsetWidth is positive (e.g. horizontal divider)', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 0, configurable: true })
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(true)
    })

    it('should return true for an SVGElement or generic Element without offsetWidth/offsetHeight in fallback mode', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      container.appendChild(svg)

      expect(isElementVisible(svg)).toBe(true)
    })
  })

  describe('DOM connectivity and nullish inputs', () => {
    it('should return false if an element is NOT connected to the DOM', () => {
      const div = document.createElement('div')
      expect(isElementVisible(div)).toBe(false)
    })

    it('should return false when input is omitted, undefined, or null', () => {
      expect(isElementVisible()).toBe(false)
      expect(isElementVisible(undefined)).toBe(false)
      expect(isElementVisible(null)).toBe(false)
    })

    it('should return false if the selector does not match any element', () => {
      expect(isElementVisible('#non-existent-element-id')).toBe(false)
    })
  })

  describe('Native W3C checkVisibility integration', () => {
    it('should use checkVisibility when available and return true if visible', () => {
      const div = document.createElement('div')
      const checkVisibilitySpy = vi.fn().mockReturnValue(true)
      div.checkVisibility = checkVisibilitySpy
      container.appendChild(div)

      const result = isElementVisible(div)

      expect(checkVisibilitySpy).toHaveBeenCalledWith({
        checkOpacity: true,
        checkVisibilityCSS: true
      })
      expect(result).toBe(true)
    })

    it('should return false when native checkVisibility returns false (e.g. hidden ancestor)', () => {
      const div = document.createElement('div')
      div.checkVisibility = vi.fn().mockReturnValue(false)
      container.appendChild(div)

      expect(isElementVisible(div)).toBe(false)
    })
  })

  describe('Fallback safety and SSR environment', () => {
    it('should return false gracefully if getComputedStyle returns null', () => {
      const div = document.createElement('div')
      Object.defineProperty(div, 'offsetWidth', { value: 100, configurable: true })
      Object.defineProperty(div, 'offsetHeight', { value: 100, configurable: true })
      container.appendChild(div)

      vi.spyOn(window, 'getComputedStyle').mockReturnValue(null as unknown as CSSStyleDeclaration)

      expect(isElementVisible(div)).toBe(false)
    })

    it('should return false when executed in a non-DOM / SSR environment', () => {
      const div = document.createElement('div')
      container.appendChild(div)
      Reflect.deleteProperty(globalThis, 'window')

      expect(isElementVisible(div)).toBe(false)
    })
  })
})
