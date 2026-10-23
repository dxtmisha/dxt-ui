// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { isInDom } from '../isInDom'

describe('isInDom', () => {
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
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return true if an HTMLElement is connected to the DOM', () => {
      const element = document.createElement('div')
      container.appendChild(element)

      expect(isInDom(element)).toBe(true)
    })

    it('should return true for deeply nested child elements connected to the DOM', () => {
      const parentElement = document.createElement('section')
      const childElement = document.createElement('span')
      parentElement.appendChild(childElement)
      container.appendChild(parentElement)

      expect(isInDom(childElement)).toBe(true)
    })

    it('should return true for document.body and document.documentElement', () => {
      expect(isInDom(document.body)).toBe(true)
      expect(isInDom(document.documentElement)).toBe(true)
    })

    it('should return true when a CSS selector matches an element in the DOM', () => {
      const element = document.createElement('div')
      element.id = 'test-in-dom-element'
      element.className = 'test-in-dom-class'
      container.appendChild(element)

      expect(isInDom('#test-in-dom-element')).toBe(true)
      expect(isInDom('.test-in-dom-class')).toBe(true)
    })

    it('should return true when window is passed (resolves to document.body inside html)', () => {
      expect(isInDom(window)).toBe(true)
    })
  })

  describe('Disconnected elements and non-matching selectors', () => {
    it('should return false for a newly created element not yet appended to the DOM', () => {
      const detachedElement = document.createElement('div')
      expect(isInDom(detachedElement)).toBe(false)
    })

    it('should return false after an element is removed from the DOM', () => {
      const element = document.createElement('div')
      container.appendChild(element)
      expect(isInDom(element)).toBe(true)

      element.remove()
      expect(isInDom(element)).toBe(false)
    })

    it('should return false for a child inside a detached parent tree or DocumentFragment', () => {
      const detachedParent = document.createElement('div')
      const detachedChild = document.createElement('p')
      detachedParent.appendChild(detachedChild)

      expect(isInDom(detachedChild)).toBe(false)

      const fragment = document.createDocumentFragment()
      const fragmentChild = document.createElement('span')
      fragment.appendChild(fragmentChild)

      expect(isInDom(fragmentChild)).toBe(false)
    })

    it('should return false if the CSS selector does not match any element in the DOM', () => {
      expect(isInDom('#non-existent-element')).toBe(false)
      expect(isInDom('.missing-class-selector')).toBe(false)
    })
  })

  describe('Fallback closest("html") resolution when isConnected is unavailable', () => {
    it('should fall back to getElement(element)?.closest("html") when isConnected is false or undefined', () => {
      const element = document.createElement('div')
      container.appendChild(element)
      Object.defineProperty(element, 'isConnected', { value: false, configurable: true })

      expect(isInDom(element)).toBe(true)
    })
  })

  describe('Empty, nullish, and SSR environment handling', () => {
    it('should return false when called with no arguments, undefined, or null', () => {
      expect(isInDom()).toBe(false)
      expect(isInDom(undefined)).toBe(false)
      expect(isInDom(null as unknown as HTMLElement)).toBe(false)
    })

    it('should return false when querying by selector in a non-DOM / SSR environment', () => {
      const element = document.createElement('div')
      element.id = 'ssr-test-element'
      container.appendChild(element)

      Reflect.deleteProperty(globalThis, 'window')

      expect(isInDom('#ssr-test-element')).toBe(false)
    })
  })
})
