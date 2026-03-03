// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { goScroll } from '../goScroll'

describe('goScroll', () => {
  it('should scroll to the element if it is above the visible area', () => {
    const container = document.createElement('div')
    container.classList.add('scroll-container')
    Object.defineProperty(container, 'scrollHeight', { value: 1000 })
    Object.defineProperty(container, 'offsetHeight', { value: 200 })
    container.scrollTop = 100

    const elementTo = document.createElement('div')
    Object.defineProperty(elementTo, 'offsetTop', { value: 50 })
    Object.defineProperty(elementTo, 'offsetHeight', { value: 20 })

    // Mock getBoundingClientRect
    vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      height: 200,
      bottom: 200,
      left: 0,
      right: 100,
      width: 100,
      x: 0,
      y: 0,
      toJSON: () => {}
    })

    vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
      top: 50,
      height: 20,
      bottom: 70,
      left: 0,
      right: 100,
      width: 100,
      x: 0,
      y: 50,
      toJSON: () => {}
    })

    // Mock closest to return the container
    vi.spyOn(elementTo, 'closest').mockReturnValue(container)

    goScroll('.scroll-container', elementTo)

    // Since scrollTop > offsetTop (100 > 50), it should scroll up
    // element.scrollTop = (to.top - rect.top) - INDENT = (50 - 0) - 0 = 50
    expect(container.scrollTop).toBe(50)
  })

  it('should scroll to the element if it is below the visible area', () => {
    const container = document.createElement('div')
    container.classList.add('scroll-container')
    Object.defineProperty(container, 'scrollHeight', { value: 1000 })
    Object.defineProperty(container, 'offsetHeight', { value: 200 })
    container.scrollTop = 0

    const elementTo = document.createElement('div')
    Object.defineProperty(elementTo, 'offsetTop', { value: 300 })
    Object.defineProperty(elementTo, 'offsetHeight', { value: 20 })

    vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      height: 200,
      bottom: 200,
      left: 0,
      right: 100,
      width: 100,
      x: 0,
      y: 0,
      toJSON: () => {}
    })

    vi.spyOn(elementTo, 'getBoundingClientRect').mockReturnValue({
      top: 300,
      height: 20,
      bottom: 320,
      left: 0,
      right: 100,
      width: 100,
      x: 0,
      y: 300,
      toJSON: () => {}
    })

    vi.spyOn(elementTo, 'closest').mockReturnValue(container)

    goScroll('.scroll-container', elementTo)

    // element.scrollTop + element.offsetHeight < elementTo.offsetTop + elementTo.offsetHeight
    // 0 + 200 < 300 + 20 => 200 < 320 (True)
    // element.scrollTop = (to.top - rect.top) + to.height - rect.height + INDENT
    // element.scrollTop = (300 - 0) + 20 - 200 + 0 = 120
    expect(container.scrollTop).toBe(120)
  })

  it('should not scroll if elementTo is undefined', () => {
    goScroll('.scroll-container', undefined)
    // No error should be thrown
  })
})
