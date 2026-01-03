// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { goScrollSmooth } from '../goScrollSmooth'

describe('goScrollSmooth', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)

    // Mock scrollIntoView
    element.scrollIntoView = vi.fn()

    // Mock window.scrollTo
    window.scrollTo = vi.fn()

    // Mock getBoundingClientRect
    element.getBoundingClientRect = vi.fn(() => ({
      top: 100,
      bottom: 200,
      left: 0,
      right: 100,
      width: 100,
      height: 100,
      x: 0,
      y: 100,
      toJSON: () => {
      }
    }))
  })

  afterEach(() => {
    document.body.removeChild(element)
    vi.restoreAllMocks()
  })

  it('should call scrollIntoView when shift is 0', () => {
    goScrollSmooth(element)
    expect(element.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    })
  })

  it('should call scrollIntoView with custom options', () => {
    goScrollSmooth(element, { behavior: 'auto', block: 'center' })
    expect(element.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'auto',
      block: 'center',
      inline: 'start'
    })
  })

  it('should call window.scrollTo when shift is provided', () => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true, configurable: true })

    goScrollSmooth(element, undefined, 20)

    // Expected top: window.scrollY (50) + element.top (100) - shift (20) = 130
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 130,
      behavior: 'smooth'
    })
  })

  it('should use window.pageYOffset if scrollY is not available', () => {
    Object.defineProperty(window, 'scrollY', { value: undefined, writable: true, configurable: true })
    Object.defineProperty(window, 'pageYOffset', { value: 60, writable: true, configurable: true })

    goScrollSmooth(element, undefined, 10)

    // Expected top: window.pageYOffset (60) + element.top (100) - shift (10) = 150
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 150,
      behavior: 'smooth'
    })
  })
})
