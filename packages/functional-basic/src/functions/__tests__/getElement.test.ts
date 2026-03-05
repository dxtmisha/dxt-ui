/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getElement } from '../getElement'
import * as domRuntime from '../isDomRuntime'

describe('getElement', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.setAttribute('id', 'test-get-element')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
    vi.restoreAllMocks()
  })

  it('should return undefined if not in a DOM environment', () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
    expect(getElement('#test-get-element')).toBeUndefined()
  })

  it('should return document.body if window is passed', () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
    expect(getElement(window)).toBe(document.body)
  })

  it('should find and return the element by string selector', () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
    expect(getElement('#test-get-element')).toBe(element)
  })

  it('should return the element itself if an Element is passed', () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
    expect(getElement(element)).toBe(element)
  })

  it('should return undefined if a string selector matches nothing', () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
    expect(getElement('.non-existent')).toBeUndefined()
  })

  it('should return undefined if nothing is passed', () => {
    vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(true)
    expect(getElement()).toBeUndefined()
  })
})
