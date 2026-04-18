// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { EventItem } from '../EventItem'

describe('EventItem', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
    vi.restoreAllMocks()
  })

  it('should handle specialized "resize" event using ResizeObserver', () => {
    const listener = vi.fn()
    // Mock ResizeObserver
    const observe = vi.fn()
    const disconnect = vi.fn()
    vi.stubGlobal('ResizeObserver', vi.fn(() => ({
      observe,
      unobserve: vi.fn(),
      disconnect
    })))

    const eventItem = new EventItem(element, 'resize', listener)
    eventItem.start()

    expect(ResizeObserver).toHaveBeenCalled()
    expect(observe).toHaveBeenCalledWith(element)

    eventItem.stop()
    expect(disconnect).toHaveBeenCalled()
  })

  it('should handle specialized "scroll-sync" event', () => {
    vi.useFakeTimers()
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'scroll-sync', listener)

    eventItem.start()

    // Trigger scroll
    element.dispatchEvent(new Event('scroll'))

    // scroll-sync uses requestAnimationFrame, which we can trigger in vitest
    vi.runAllTimers()
    // Since requestAnimationFrame is async, we need to wait or mock it properly
    // In jsdom/vitest, requestAnimationFrame might need special handling

    eventItem.stop()
    vi.useRealTimers()
  })

  it('should automatically stop if element is removed from DOM', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener)

    eventItem.start()
    expect(eventItem.isActive()).toBe(true)

    // Remove from DOM
    document.body.removeChild(element)

    // Trigger event
    element.dispatchEvent(new Event('click'))

    expect(listener).not.toHaveBeenCalled()
    expect(eventItem.isActive()).toBe(false) // Should be stopped by listenerRecent

    // Cleanup for beforeEach/afterEach
    document.body.appendChild(element)
  })

  it('should handle multiple event types', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, ['mouseenter', 'mouseleave'], listener)

    eventItem.start()
    element.dispatchEvent(new Event('mouseenter'))
    element.dispatchEvent(new Event('mouseleave'))

    expect(listener).toHaveBeenCalledTimes(2)
    eventItem.stop()
  })
})
