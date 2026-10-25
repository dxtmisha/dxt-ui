/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { effectScope, ref, nextTick } from 'vue'

// Mock functional-basic
vi.mock('@dxtmisha/functional-basic', () => ({
  getElementId: vi.fn((el: any) => el.id || el.getAttribute?.('data-id') || 'fake-id'),
  isDomRuntime: vi.fn(() => true)
}))

// Mock IntersectionObserver
const observe = vi.fn()
const unobserve = vi.fn()
const disconnect = vi.fn()

class IntersectionObserverMock {
  constructor(public callback: IntersectionObserverCallback, public options?: IntersectionObserverInit) { }
  observe = observe
  unobserve = unobserve
  disconnect = disconnect
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

import { useLazyRef } from '../useLazyRef'

describe('useLazyRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize IntersectionObserver with options', () => {
    const options = { rootMargin: '10px' }
    const { intersectionObserver } = useLazyRef(options)

    expect(intersectionObserver).toBeDefined()
    // In our mock, we don't store options, but we could if needed.
    // The main thing is that it's instantiated.
  })

  it('should add item for tracking', async () => {
    const { addLazyItem } = useLazyRef()
    const element = ref<HTMLElement>(document.createElement('div'))
    element.value.id = 'test-el'

    const status = addLazyItem(element)

    await nextTick()

    expect(status.value).toBe(false)
    expect(observe).toHaveBeenCalledWith(element.value)
  })

  it('should return item via getItem', async () => {
    const { addLazyItem, getItem } = useLazyRef()
    const element = document.createElement('div')
    element.id = 'test-item'
    const elementRef = ref<HTMLElement>(element)

    addLazyItem(elementRef)
    await nextTick()

    const item = getItem(element)
    expect(item).toBeDefined()
    expect(item?.status.value).toBe(false)
  })

  it('should remove item from tracking', async () => {
    const { addLazyItem, removeLazyItem, getItem } = useLazyRef()
    const element = document.createElement('div')
    element.id = 'remove-item'
    const elementRef = ref<HTMLElement>(element)

    addLazyItem(elementRef)
    await nextTick()

    removeLazyItem(element)
    expect(unobserve).toHaveBeenCalledWith(element)
    expect(getItem(element)).toBeUndefined()
  })

  it('should disconnect observer', () => {
    const { disconnectLazy } = useLazyRef()
    disconnectLazy()
    expect(disconnect).toHaveBeenCalled()
  })

  it('should keep watching across three consecutive elements and clean up each previous node', async () => {
    const lazy = useLazyRef()
    const first = document.createElement('div')
    first.id = 'replacement-first'
    const second = document.createElement('div')
    second.id = 'replacement-second'
    const third = document.createElement('div')
    third.id = 'replacement-third'
    const element = ref<HTMLElement | undefined>(first)
    const scope = effectScope()

    try {
      const status = scope.run(() => lazy.addLazyItem(element))!
      element.value = second
      await nextTick()

      expect(lazy.getItem(first)).toBeUndefined()
      expect(lazy.getItem(second)?.status).toBe(status)
      expect(unobserve).toHaveBeenCalledExactlyOnceWith(first)

      element.value = third
      await nextTick()

      expect(observe.mock.calls).toEqual([[first], [second], [third]])
      expect(unobserve.mock.calls).toEqual([[first], [second]])
      expect(lazy.getItem(second)).toBeUndefined()
      expect(lazy.getItem(third)?.status).toBe(status)

      const bounds = third.getBoundingClientRect()
      const entry: IntersectionObserverEntry = {
        target: third,
        isIntersecting: true,
        intersectionRatio: 0.75,
        boundingClientRect: bounds,
        intersectionRect: bounds,
        rootBounds: null,
        time: 0
      }
      const observer = lazy.intersectionObserver as unknown as IntersectionObserverMock
      observer.callback([entry], lazy.intersectionObserver!)

      expect(status.value).toBe(true)
      expect(lazy.getItem(third)?.ratio.value).toBe(0.75)
      expect(lazy.getItem(third)?.entry.value).toBe(entry)

      scope.stop()
      expect(unobserve.mock.calls).toEqual([[first], [second], [third]])
      expect(lazy.getItem(third)).toBeUndefined()
    } finally {
      scope.stop()
    }
  })

  it('should unobserve the element and remove its entry when its scope stops', async () => {
    const lazy = useLazyRef()
    const target = document.createElement('div')
    target.id = 'scope-disposal'
    const element = ref<HTMLElement | undefined>(target)
    const scope = effectScope()

    try {
      scope.run(() => lazy.addLazyItem(element))
      expect(lazy.getItem(target)).toBeDefined()

      scope.stop()

      expect(unobserve).toHaveBeenCalledExactlyOnceWith(target)
      expect(lazy.getItem(target)).toBeUndefined()

      element.value = document.createElement('div')
      await nextTick()
      expect(observe).toHaveBeenCalledTimes(1)
    } finally {
      scope.stop()
    }
  })

  it('should stop watching after repeated manual removal', async () => {
    const lazy = useLazyRef()
    const target = document.createElement('div')
    target.id = 'manual-removal'
    const element = ref<HTMLElement | undefined>(target)
    const scope = effectScope()

    try {
      scope.run(() => lazy.addLazyItem(element))

      lazy.removeLazyItem(target)
      lazy.removeLazyItem(target)
      element.value = document.createElement('div')
      await nextTick()

      expect(unobserve).toHaveBeenCalledExactlyOnceWith(target)
      expect(observe).toHaveBeenCalledTimes(1)
      expect(lazy.getItem(target)).toBeUndefined()
    } finally {
      scope.stop()
    }
  })

  it('should stop all registrations of an explicitly removed element', async () => {
    const lazy = useLazyRef()
    const target = document.createElement('div')
    target.id = 'shared-manual-removal'
    const firstElement = ref<HTMLElement | undefined>(target)
    const secondElement = ref<HTMLElement | undefined>(target)
    const scope = effectScope()

    try {
      scope.run(() => {
        lazy.addLazyItem(firstElement)
        lazy.addLazyItem(secondElement)
      })
      lazy.removeLazyItem(target)
      lazy.removeLazyItem(target)

      firstElement.value = document.createElement('div')
      secondElement.value = document.createElement('div')
      await nextTick()

      expect(lazy.getItem(target)).toBeUndefined()
      expect(unobserve).toHaveBeenCalledExactlyOnceWith(target)
      expect(observe).toHaveBeenCalledExactlyOnceWith(target)
    } finally {
      scope.stop()
    }
  })
})
