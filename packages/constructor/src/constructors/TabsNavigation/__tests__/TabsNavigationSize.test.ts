// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'

import type { HorizontalScrollInclude } from '../../HorizontalScroll'
import { TabsNavigationSize } from '../TabsNavigationSize'

describe('TabsNavigationSize', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('should evaluate static is predicate based on divider prop', () => {
    expect(TabsNavigationSize.is()).toBe(false)
    expect(TabsNavigationSize.is({})).toBe(false)
    expect(TabsNavigationSize.is({ divider: false })).toBe(false)
    expect(TabsNavigationSize.is({ divider: true })).toBe(true)
  })

  it('should initialize EventItem onMounted, update --sys-scroll-width with 64ms debounce, and clean up onUnmounted', async () => {
    const disconnect = vi.fn()
    const observe = vi.fn()
    let observerCallback: ResizeObserverCallback | undefined

    class MockResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        observerCallback = callback
      }

      observe = observe
      disconnect = disconnect
      unobserve = vi.fn()
    }

    vi.stubGlobal('ResizeObserver', MockResizeObserver)

    const element = document.createElement('div')
    document.body.appendChild(element)
    Object.defineProperty(element, 'scrollWidth', { value: 300, writable: true, configurable: true })

    const getScroll = vi.fn(() => ({ elementHtml: element }) as unknown as HorizontalScrollInclude)
    const size = new TabsNavigationSize(getScroll)

    // Side-effect-free constructor
    expect(getScroll).not.toHaveBeenCalled()

    await size.onMounted()

    expect(observe).toHaveBeenCalledWith(element)
    expect(element.style.getPropertyValue('--sys-scroll-width')).toBe('')

    vi.advanceTimersByTime(64)
    expect(element.style.getPropertyValue('--sys-scroll-width')).toBe('300px')

    // Simulate resize via ResizeObserver callback
    Object.defineProperty(element, 'scrollWidth', { value: 450, writable: true, configurable: true })
    observerCallback?.([] as ResizeObserverEntry[], {} as ResizeObserver)

    expect(element.style.getPropertyValue('--sys-scroll-width')).toBe('')
    vi.advanceTimersByTime(64)
    expect(element.style.getPropertyValue('--sys-scroll-width')).toBe('450px')

    // Unmount during pending debounce timer must cancel timer and disconnect observer
    Object.defineProperty(element, 'scrollWidth', { value: 600, writable: true, configurable: true })
    observerCallback?.([] as ResizeObserverEntry[], {} as ResizeObserver)

    size.onUnmounted()
    expect(disconnect).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)
    expect(element.style.getPropertyValue('--sys-scroll-width')).toBe('')

    element.remove()
  })

  it('should abort setup without attaching ResizeObserver if unmounted before nextTick completes', async () => {
    const observe = vi.fn()
    class MockResizeObserver {
      observe = observe
      disconnect = vi.fn()
      unobserve = vi.fn()
    }
    vi.stubGlobal('ResizeObserver', MockResizeObserver)

    const element = document.createElement('div')
    const size = new TabsNavigationSize(() => ({ elementHtml: element }) as unknown as HorizontalScrollInclude)

    const mountPromise = size.onMounted()
    size.onUnmounted()
    await mountPromise
    await nextTick()

    expect(observe).not.toHaveBeenCalled()
  })

  it('should handle missing container element without throwing', async () => {
    const size = new TabsNavigationSize(() => ({ elementHtml: undefined }) as unknown as HorizontalScrollInclude)

    await expect(size.onMounted()).resolves.toBeUndefined()
    vi.advanceTimersByTime(100)
    expect(() => size.onUnmounted()).not.toThrow()
  })
})
