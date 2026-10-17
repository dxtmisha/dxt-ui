/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createElement } from '../createElement'

describe('createElement', () => {
  let parentElement: HTMLElement

  beforeEach(() => {
    // Basic DOM setup for testing
    parentElement = document.createElement('div')
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    document.body.removeChild(parentElement)
  })

  it('should create an element with the correct tag name', () => {
    const el = createElement(parentElement, 'span')

    expect(el).toBeInstanceOf(HTMLSpanElement)
    expect(el?.tagName.toLowerCase()).toBe('span')
  })

  it('should create a div element by default', () => {
    const el = createElement(parentElement)

    expect(el).toBeInstanceOf(HTMLDivElement)
    expect(el?.tagName.toLowerCase()).toBe('div')
  })

  it('should apply properties from the options object', () => {
    const el = createElement(parentElement, 'div', {
      id: 'test-id',
      className: 'test-class',
      title: 'test title'
    })

    expect(el?.id).toBe('test-id')
    expect(el?.className).toBe('test-class')
    expect(el?.title).toBe('test title')
  })

  it('should handle boolean aria-* and numeric attributes via options object', () => {
    const element = createElement(parentElement, 'div', {
      'aria-hidden': true,
      'aria-expanded': false,
      'data-count': 0
    })

    expect(element?.getAttribute('aria-hidden')).toBe('true')
    expect(element?.getAttribute('aria-expanded')).toBe('false')
    expect(element?.getAttribute('data-count')).toBe('0')
  })

  it('should invoke the options function for custom processing', () => {
    const mockOptionsFn = vi.fn((el: HTMLElement) => {
      el.id = 'processed-id'
    })

    const el = createElement<HTMLDivElement>(parentElement, 'div', mockOptionsFn)

    expect(mockOptionsFn).toHaveBeenCalledWith(el)
    expect(el?.id).toBe('processed-id')
  })

  it('should append the element directly to the parent by default', () => {
    const el = createElement(parentElement, 'p')

    expect(parentElement.lastElementChild).toBe(el)
  })

  it('should insert the element before the reference element', () => {
    const refElement = document.createElement('div')
    parentElement.appendChild(refElement)

    const el = createElement(parentElement, 'span', undefined, refElement)

    expect(parentElement.firstElementChild).toBe(el)
    expect(parentElement.lastElementChild).toBe(refElement)
    expect(el?.nextElementSibling).toBe(refElement)
  })

  it('should work correctly with no parentElement', () => {
    const el = createElement(undefined, 'span')

    expect(el).toBeInstanceOf(HTMLSpanElement)
    expect(el?.tagName.toLowerCase()).toBe('span')
  })

  it('should work correctly with no options', () => {
    const el = createElement(parentElement, 'div')

    expect(el).toBeInstanceOf(HTMLDivElement)
    expect(el?.id).toBe('')
    expect(el?.className).toBe('')
    expect(el?.innerHTML).toBe('')
  })

  it('should handle function options with no parentElement', () => {
    const mockOptionsFn = vi.fn((element: HTMLElement) => {
      element.id = 'no-parent-id'
    })

    const element = createElement<HTMLDivElement>(undefined, 'div', mockOptionsFn)

    expect(mockOptionsFn).toHaveBeenCalledWith(element)
    expect(element?.id).toBe('no-parent-id')
  })

  it('should support appending to a DocumentFragment container', () => {
    const fragment = document.createDocumentFragment()
    const element = createElement(fragment, 'div', { id: 'fragment-child' })

    expect(element).toBeInstanceOf(HTMLDivElement)
    expect(fragment.contains(element!)).toBe(true)

    parentElement.appendChild(fragment)
    expect(parentElement.querySelector('#fragment-child')).toBe(element)
  })

  it('should insert before a comment anchor node', () => {
    const commentAnchor = document.createComment('template-anchor')
    parentElement.appendChild(commentAnchor)

    const element = createElement(parentElement, 'span', undefined, commentAnchor)

    expect(parentElement.firstChild).toBe(element)
    expect(element?.nextSibling).toBe(commentAnchor)
  })
})
