// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import { MaskScroll } from '../MaskScroll'
import type { MaskElementInput } from '../basicTypes'

describe('MaskScroll', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should synchronize elementView scrollLeft immediately on onScroll and sync()', () => {
    const element = ref<MaskElementInput>(undefined)
    const scroll = new MaskScroll(element)

    const input = document.createElement('input')
    const view = document.createElement('span')

    Object.defineProperty(input, 'scrollLeft', {
      value: 28,
      writable: true,
      configurable: true
    })

    element.value = input
    scroll.elementView.value = view

    scroll.onScroll()
    expect(view.scrollLeft).toBe(28)

    input.scrollLeft = 52
    scroll.sync()
    expect(view.scrollLeft).toBe(52)
  })

  it('should schedule deferred frame sync on onMounted and sync(true) and cancel on onUnmounted', () => {
    let queuedCallback: FrameRequestCallback | undefined
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      queuedCallback = callback
      return 321
    })
    const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)

    const element = ref<MaskElementInput>(undefined)
    const scroll = new MaskScroll(element)
    const input = document.createElement('input')
    const view = document.createElement('span')

    Object.defineProperty(input, 'scrollLeft', {
      value: 10,
      writable: true,
      configurable: true
    })

    element.value = input
    scroll.elementView.value = view

    scroll.onMounted()
    expect(rafSpy).toHaveBeenCalledTimes(1)
    expect(view.scrollLeft).toBe(10)

    input.scrollLeft = 75
    queuedCallback?.(16)
    expect(view.scrollLeft).toBe(75)

    scroll.sync(true)
    scroll.sync(true)
    expect(cancelSpy).toHaveBeenCalledWith(321)

    scroll.onUnmounted()
    expect(cancelSpy).toHaveBeenCalledWith(321)
  })

  it('should safely ignore missing input or elementView references', () => {
    const element = ref<MaskElementInput>(undefined)
    const scroll = new MaskScroll(element)

    expect(() => scroll.onScroll()).not.toThrow()
    expect(() => scroll.sync(true)).not.toThrow()
    expect(() => scroll.onUnmounted()).not.toThrow()
  })

  it('should skip animation frame scheduling when requestAnimationFrame is unavailable (SSR)', () => {
    vi.stubGlobal('requestAnimationFrame', undefined)
    try {
      const element = ref<MaskElementInput>(undefined)
      const scroll = new MaskScroll(element)
      const input = document.createElement('input')
      const view = document.createElement('span')

      Object.defineProperty(input, 'scrollLeft', {
        value: 18,
        writable: true,
        configurable: true
      })

      element.value = input
      scroll.elementView.value = view

      expect(() => scroll.sync(true)).not.toThrow()
      expect(view.scrollLeft).toBe(18)
      expect(() => scroll.onUnmounted()).not.toThrow()
    } finally {
      vi.unstubAllGlobals()
    }
  })
})
