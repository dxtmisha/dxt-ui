// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { EventItem } from '../EventItem'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('EventItem', () => {
  let element: HTMLDivElement

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
    }
    vi.restoreAllMocks()
  })

  it('should attach and trigger basic click listener, and support getElement()', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener)

    expect(eventItem.getElement()).toBe(element)
    expect(eventItem.isActive()).toBe(false)

    eventItem.start()
    expect(eventItem.isActive()).toBe(true)

    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1)

    eventItem.stop()
    expect(eventItem.isActive()).toBe(false)

    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1)
  })

  it('should handle specialized "resize" event using ResizeObserver', () => {
    const listener = vi.fn()
    const observe = vi.fn()
    const disconnect = vi.fn()
    let registeredCallback: ResizeObserverCallback | undefined

    class MockResizeObserver {
      observe = observe
      unobserve = vi.fn()
      disconnect = disconnect
      constructor(callback: ResizeObserverCallback) {
        registeredCallback = callback
      }
    }

    vi.stubGlobal('ResizeObserver', MockResizeObserver)

    const eventItem = new EventItem(element, 'resize', listener)
    eventItem.start()

    expect(observe).toHaveBeenCalledWith(element)

    const fakeEntry = { contentRect: { width: 100, height: 50 } } as ResizeObserverEntry
    registeredCallback?.([fakeEntry], new MockResizeObserver(() => {}) as unknown as ResizeObserver)
    expect(listener).toHaveBeenCalledWith(fakeEntry, undefined)

    eventItem.stop()
    expect(disconnect).toHaveBeenCalled()
  })

  it('should use ResizeObserver for document.body when event type is "resize"', () => {
    const listener = vi.fn()
    const observe = vi.fn()
    const disconnect = vi.fn()

    class MockResizeObserver {
      observe = observe
      unobserve = vi.fn()
      disconnect = disconnect
      constructor(_callback: ResizeObserverCallback) {}
    }

    vi.stubGlobal('ResizeObserver', MockResizeObserver)

    const eventItem = new EventItem(document.body, 'resize', listener)
    eventItem.start()

    expect(observe).toHaveBeenCalledWith(document.body)

    eventItem.stop()
    expect(disconnect).toHaveBeenCalled()
  })

  it('should fall back to standard resize event on window when target is window', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(window, 'resize', listener)

    eventItem.start()
    window.dispatchEvent(new Event('resize'))
    expect(listener).toHaveBeenCalledTimes(1)

    eventItem.stop()
  })

  it('should handle specialized "scroll-sync" event and throttle via requestAnimationFrame', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'scroll-sync', listener)

    let pendingCallback: FrameRequestCallback | undefined
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback) => {
      pendingCallback = callback
      return 1
    })

    eventItem.start()

    element.dispatchEvent(new Event('scroll'))
    element.dispatchEvent(new Event('scroll'))
    expect(rafSpy).toHaveBeenCalledTimes(1)
    expect(listener).not.toHaveBeenCalled()

    pendingCallback?.(0)
    expect(listener).toHaveBeenCalledTimes(1)

    eventItem.stop()
    rafSpy.mockRestore()
  })

  it('should not invoke listener in requestAnimationFrame if stop() was called during "scroll-sync"', () => {
    const listener = vi.fn()
    let pendingCallback: FrameRequestCallback | undefined

    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback) => {
      pendingCallback = callback
      return 42
    })

    const eventItem = new EventItem(element, 'scroll-sync', listener)
    eventItem.start()

    element.dispatchEvent(new Event('scroll'))
    expect(pendingCallback).toBeDefined()

    eventItem.stop()

    pendingCallback!(0)
    expect(listener).not.toHaveBeenCalled()

    rafSpy.mockRestore()
  })

  it('should automatically stop if element is removed from DOM', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener)

    eventItem.start()
    expect(eventItem.isActive()).toBe(true)

    document.body.removeChild(element)

    element.dispatchEvent(new Event('click'))

    expect(listener).not.toHaveBeenCalled()
    expect(eventItem.isActive()).toBe(false)

    document.body.appendChild(element)
  })

  it('should stop automatically after first trigger when options.once is true', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener, { once: true })

    eventItem.start()
    element.dispatchEvent(new Event('click'))

    expect(listener).toHaveBeenCalledTimes(1)
    expect(eventItem.isActive()).toBe(false)
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

  it('should properly remove listeners registered with capture: true on stop() and setOptions()', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener, { capture: true })

    eventItem.start()
    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1)

    eventItem.stop()
    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1)

    eventItem.start()
    eventItem.setOptions({ capture: false })
    expect(eventItem.isActive()).toBe(true)
    eventItem.stop()

    element.dispatchEvent(new Event('click'))
    expect(listener).toHaveBeenCalledTimes(1)
  })

  it('should update options without starting when inactive', () => {
    const listener = vi.fn()
    const eventItem = new EventItem(element, 'click', listener)

    eventItem.setOptions({ passive: true })
    expect(eventItem.isActive()).toBe(false)
  })

  it('should support setElement, setElementControl, setType, setListener, setDetail, toggle, reset, and dispatch', () => {
    const secondElement = document.createElement('div')
    const controlElement = document.createElement('div')
    document.body.appendChild(secondElement)
    document.body.appendChild(controlElement)

    const initialListener = vi.fn()
    const updatedListener = vi.fn()

    const eventItem = new EventItem<HTMLDivElement, CustomEvent, { userId: number }>(
      element,
      'custom-event',
      initialListener,
      undefined,
      { userId: 10 }
    )

    eventItem.toggle(true)
    expect(eventItem.isActive()).toBe(true)

    eventItem.setElement(secondElement)
    expect(eventItem.getElement()).toBe(secondElement)

    eventItem.setElementControl(controlElement)
    eventItem.setType('updated-event')
    eventItem.setListener(updatedListener)
    eventItem.setDetail({ userId: 99 })

    eventItem.dispatch()
    expect(updatedListener).toHaveBeenCalledTimes(1)
    expect(updatedListener.mock.calls[0]?.[1]).toEqual({ userId: 99 })

    // Reset elementControl when passed undefined
    eventItem.setElementControl(undefined)

    // Remove secondElement from DOM and verify control stops listener
    document.body.removeChild(secondElement)
    eventItem.dispatch({ userId: 100 })
    expect(eventItem.isActive()).toBe(false)

    eventItem.toggle(false)
    expect(eventItem.isActive()).toBe(false)

    document.body.removeChild(controlElement)
  })

  it('should not start listener when isDomRuntime() is false', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    const eventItem = new EventItem(element, 'click', vi.fn())

    eventItem.start()
    expect(eventItem.isActive()).toBe(false)
  })
})
