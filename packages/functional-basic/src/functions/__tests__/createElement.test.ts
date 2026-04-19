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
    const mockOptionsFn = vi.fn((el: HTMLElement) => {
      el.id = 'no-parent-id'
    })

    const el = createElement<HTMLDivElement>(undefined, 'div', mockOptionsFn)

    expect(mockOptionsFn).toHaveBeenCalledWith(el)
    expect(el?.id).toBe('no-parent-id')
  })
})
