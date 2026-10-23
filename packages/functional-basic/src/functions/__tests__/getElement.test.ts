/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getElement } from '../getElement'
import * as domRuntime from '../isDomRuntime'

describe('getElement', () => {
  let container: HTMLElement
  let firstChild: HTMLElement
  let secondChild: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    container.setAttribute('id', 'test-get-element')
    container.setAttribute('class', 'test-container')
    container.setAttribute('data-role', 'wrapper')

    firstChild = document.createElement('span')
    firstChild.setAttribute('class', 'child-item')
    firstChild.setAttribute('data-index', '0')

    secondChild = document.createElement('span')
    secondChild.setAttribute('class', 'child-item')
    secondChild.setAttribute('data-index', '1')

    container.appendChild(firstChild)
    container.appendChild(secondChild)
    document.body.appendChild(container)
  })

  afterEach(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container)
    }
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (DOM element & selector resolution)', () => {
    it('should find and return an element by ID selector', () => {
      expect(getElement('#test-get-element')).toBe(container)
    })

    it('should find and return an element by class, attribute, or complex combinator selector', () => {
      expect(getElement('.test-container')).toBe(container)
      expect(getElement('[data-role="wrapper"]')).toBe(container)
      expect(getElement('#test-get-element > span[data-index="1"]')).toBe(secondChild)
    })

    it('should return the first matching element in document order when multiple elements match', () => {
      expect(getElement('.child-item')).toBe(firstChild)
    })

    it('should return the element itself when an attached HTMLElement reference is passed', () => {
      expect(getElement(container)).toBe(container)
      expect(getElement(secondChild)).toBe(secondChild)
    })

    it('should return the element itself when a detached Element or SVGElement is passed', () => {
      const detachedParagraph = document.createElement('p')
      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

      expect(getElement(detachedParagraph)).toBe(detachedParagraph)
      expect(getElement(svgElement)).toBe(svgElement)
    })

    it('should return document.body when the global window object is passed', () => {
      expect(getElement(window)).toBe(document.body)
    })
  })

  describe('Empty, unmatched, and nullish inputs', () => {
    it('should return undefined when a CSS selector matches no elements in the document', () => {
      expect(getElement('.non-existent-selector')).toBeUndefined()
      expect(getElement('#missing-id')).toBeUndefined()
    })

    it('should return undefined when called with no arguments or undefined', () => {
      expect(getElement()).toBeUndefined()
      expect(getElement(undefined)).toBeUndefined()
    })

    it('should return null when null is explicitly cast and passed as non-string', () => {
      expect(getElement(null as unknown as undefined)).toBeNull()
    })
  })

  describe('SSR and non-DOM environment safety (isDomRuntime() === false)', () => {
    beforeEach(() => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
    })

    it('should return undefined when a string selector is passed in a non-DOM environment', () => {
      const querySelectorSpy = vi.spyOn(document, 'querySelector')

      expect(getElement('#test-get-element')).toBeUndefined()
      expect(getElement('body')).toBeUndefined()
      expect(querySelectorSpy).not.toHaveBeenCalled()
    })

    it('should return the element reference itself when an Element object is passed in a non-DOM environment', () => {
      expect(getElement(container)).toBe(container)
    })

    it('should return undefined when no argument or undefined is passed in a non-DOM environment', () => {
      expect(getElement()).toBeUndefined()
      expect(getElement(undefined)).toBeUndefined()
    })
  })
})
