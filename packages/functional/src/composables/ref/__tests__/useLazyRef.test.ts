/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, nextTick } from 'vue'

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
})
