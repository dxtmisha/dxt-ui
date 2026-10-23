/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as domRuntime from '../isDomRuntime'
import { createElement } from '../createElement'

describe('createElement', () => {
  let parentElement: HTMLElement

  beforeEach(() => {
    parentElement = document.createElement('div')
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    if (parentElement.parentNode) {
      parentElement.parentNode.removeChild(parentElement)
    }
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should create a div element by default when tagName is omitted', () => {
      const element = createElement(parentElement)

      expect(element).toBeInstanceOf(HTMLDivElement)
      expect(element?.tagName.toLowerCase()).toBe('div')
      expect(parentElement.lastElementChild).toBe(element)
    })

    it('should create an element with the specified HTML tag name', () => {
      const spanElement = createElement<HTMLSpanElement>(parentElement, 'span')
      const buttonElement = createElement<HTMLButtonElement>(parentElement, 'button')
      const sectionElement = createElement<HTMLElement>(parentElement, 'section')

      expect(spanElement).toBeInstanceOf(HTMLSpanElement)
      expect(spanElement?.tagName.toLowerCase()).toBe('span')

      expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
      expect(buttonElement?.tagName.toLowerCase()).toBe('button')

      expect(sectionElement).toBeInstanceOf(HTMLElement)
      expect(sectionElement?.tagName.toLowerCase()).toBe('section')
    })

    it('should create an element without appending when parentElement is undefined', () => {
      const element = createElement<HTMLSpanElement>(undefined, 'span')

      expect(element).toBeInstanceOf(HTMLSpanElement)
      expect(element?.tagName.toLowerCase()).toBe('span')
      expect(element?.parentElement).toBeNull()
      expect(parentElement.children).toHaveLength(0)
    })

    it('should create a default div element when called with no arguments', () => {
      const element = createElement()

      expect(element).toBeInstanceOf(HTMLDivElement)
      expect(element?.tagName.toLowerCase()).toBe('div')
      expect(element?.parentElement).toBeNull()
    })

    it('should support appending to a DocumentFragment container', () => {
      const fragment = document.createDocumentFragment()
      const element = createElement(fragment, 'div', { id: 'fragment-child' })

      expect(element).toBeInstanceOf(HTMLDivElement)
      expect(fragment.contains(element!)).toBe(true)

      parentElement.appendChild(fragment)
      expect(parentElement.querySelector('#fragment-child')).toBe(element)
    })
  })

  describe('Options configuration (Object & Function)', () => {
    it('should apply standard DOM properties from the options object', () => {
      const element = createElement(parentElement, 'div', {
        id: 'test-id',
        className: 'test-class',
        title: 'test title',
        textContent: 'Hello Content'
      })

      expect(element?.id).toBe('test-id')
      expect(element?.className).toBe('test-class')
      expect(element?.title).toBe('test title')
      expect(element?.textContent).toBe('Hello Content')
    })

    it('should handle boolean aria-* and numeric data-* attributes including falsy 0 and false', () => {
      const element = createElement(parentElement, 'div', {
        'aria-hidden': true,
        'aria-expanded': false,
        'data-count': 0,
        'data-label': ''
      })

      expect(element?.getAttribute('aria-hidden')).toBe('true')
      expect(element?.getAttribute('aria-expanded')).toBe('false')
      expect(element?.getAttribute('data-count')).toBe('0')
      expect(element?.getAttribute('data-label')).toBe('')
    })

    it('should invoke the options callback function for custom element initialization', () => {
      const optionsCallback = vi.fn((element: HTMLDivElement) => {
        element.id = 'processed-id'
        element.setAttribute('data-custom', 'configured')
      })

      const element = createElement<HTMLDivElement>(parentElement, 'div', optionsCallback)

      expect(optionsCallback).toHaveBeenCalledTimes(1)
      expect(optionsCallback).toHaveBeenCalledWith(element)
      expect(element?.id).toBe('processed-id')
      expect(element?.getAttribute('data-custom')).toBe('configured')
    })

    it('should invoke the options callback function when parentElement is undefined', () => {
      const optionsCallback = vi.fn((element: HTMLDivElement) => {
        element.id = 'no-parent-id'
      })

      const element = createElement<HTMLDivElement>(undefined, 'div', optionsCallback)

      expect(optionsCallback).toHaveBeenCalledTimes(1)
      expect(optionsCallback).toHaveBeenCalledWith(element)
      expect(element?.id).toBe('no-parent-id')
    })

    it('should safely ignore undefined, null, or array passed as options', () => {
      const elementUndefined = createElement(parentElement, 'div', undefined)
      expect(elementUndefined?.id).toBe('')
      expect(elementUndefined?.className).toBe('')
      expect(elementUndefined?.innerHTML).toBe('')

      const elementNull = createElement(parentElement, 'div', null as unknown as Record<string, unknown>)
      expect(elementNull).toBeInstanceOf(HTMLDivElement)
      expect(elementNull?.attributes).toHaveLength(0)

      const elementArray = createElement(parentElement, 'div', ['invalid'] as unknown as Record<string, unknown>)
      expect(elementArray).toBeInstanceOf(HTMLDivElement)
      expect(elementArray?.attributes).toHaveLength(0)
    })
  })

  describe('Reference node insertion (referenceElement)', () => {
    it('should append the element at the end of parentElement when referenceElement is omitted or null', () => {
      const firstChild = createElement(parentElement, 'span', { id: 'first' })
      const secondChild = createElement(parentElement, 'p', { id: 'second' }, undefined)
      const thirdChild = createElement(parentElement, 'a', { id: 'third' }, null)

      expect(parentElement.children[0]).toBe(firstChild)
      expect(parentElement.children[1]).toBe(secondChild)
      expect(parentElement.children[2]).toBe(thirdChild)
    })

    it('should insert the new element directly before the specified referenceElement', () => {
      const referenceNode = document.createElement('div')
      referenceNode.id = 'reference-node'
      parentElement.appendChild(referenceNode)

      const insertedElement = createElement(parentElement, 'span', { id: 'inserted-before' }, referenceNode)

      expect(parentElement.firstElementChild).toBe(insertedElement)
      expect(parentElement.lastElementChild).toBe(referenceNode)
      expect(insertedElement?.nextElementSibling).toBe(referenceNode)
    })

    it('should insert before a comment anchor node', () => {
      const commentAnchor = document.createComment('template-anchor')
      parentElement.appendChild(commentAnchor)

      const element = createElement(parentElement, 'span', undefined, commentAnchor)

      expect(parentElement.firstChild).toBe(element)
      expect(element?.nextSibling).toBe(commentAnchor)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should accurately apply Cyrillic, Vietnamese, CJK, and Emoji content and attributes', () => {
      const element = createElement(parentElement, 'div', {
        'title': 'Привет Мир & Học tiếng Việt',
        'textContent': '你好世界 🚀 🔥 ✨',
        'data-locale': 'Tiếng Việt / Русский'
      })

      expect(element?.title).toBe('Привет Мир & Học tiếng Việt')
      expect(element?.textContent).toBe('你好世界 🚀 🔥 ✨')
      expect(element?.getAttribute('data-locale')).toBe('Tiếng Việt / Русский')
    })
  })

  describe('SSR and non-DOM environment safety', () => {
    it('should return undefined and not call document.createElement when isDomRuntime() is false', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
      const createElementSpy = vi.spyOn(document, 'createElement')
      const optionsCallback = vi.fn()

      const result = createElement(parentElement, 'div', optionsCallback)

      expect(result).toBeUndefined()
      expect(createElementSpy).not.toHaveBeenCalled()
      expect(optionsCallback).not.toHaveBeenCalled()
      expect(parentElement.children).toHaveLength(0)
    })
  })

  describe('Statefulness, isolation, and DOM integrity', () => {
    it('should create independent DOM nodes across sequential calls', () => {
      const firstElement = createElement(parentElement, 'div', { id: 'item-1' })
      const secondElement = createElement(parentElement, 'div', { id: 'item-2' })

      expect(firstElement).not.toBe(secondElement)
      expect(firstElement?.id).toBe('item-1')
      expect(secondElement?.id).toBe('item-2')
      expect(parentElement.children).toHaveLength(2)
    })
  })
})
