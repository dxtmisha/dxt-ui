/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, shallowRef } from 'vue'

// Mock functional-basic
vi.mock('@dxtmisha/functional-basic', () => ({
  getElementId: vi.fn((el: any) => el.id || el.getAttribute?.('data-id') || 'fake-id'),
  isDomRuntime: vi.fn(() => true)
}))

// Mock dependencies
const mockLazyItem = {
  status: shallowRef(false),
  ratio: shallowRef(0),
  entry: shallowRef(undefined),
  stopWatch: vi.fn()
}

const mockLazyRef = {
  addLazyItem: vi.fn(() => mockLazyItem.status),
  getItem: vi.fn(() => mockLazyItem),
  removeLazyItem: vi.fn(),
  disconnectLazy: vi.fn()
}

vi.mock('../useLazyRef', () => ({
  useLazyRef: vi.fn(() => mockLazyRef)
}))

import { useLazyItemByMarginRef } from '../useLazyItemByMarginRef'
import { useLazyRef } from '../useLazyRef'

describe('useLazyItemByMarginRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLazyItem.status.value = false
  })

  it('should initialize and add item to observer', () => {
    const element = ref<HTMLElement>(document.createElement('div'))
    const rootMargin = '10px'

    const { lazyItemStatus } = useLazyItemByMarginRef(element, rootMargin)

    expect(lazyItemStatus.value).toBe(false)
    expect(useLazyRef).toHaveBeenCalledWith({ rootMargin })
    expect(mockLazyRef.addLazyItem).toHaveBeenCalledWith(element)
  })

  it('should return lazyItem via getter', () => {
    const element = ref<HTMLElement>(document.createElement('div'))
    const rootMargin = '30px'

    const { lazyItem } = useLazyItemByMarginRef(element, rootMargin)

    expect(lazyItem).toBe(mockLazyItem)
    expect(mockLazyRef.getItem).toHaveBeenCalledWith(element.value)
  })

  it('should react to status changes', () => {
    const element = ref<HTMLElement>(document.createElement('div'))
    const { lazyItemStatus } = useLazyItemByMarginRef(element, '40px')

    expect(lazyItemStatus.value).toBe(false)

    // Simulate intersection change from the mock
    mockLazyItem.status.value = true
    expect(lazyItemStatus.value).toBe(true)
  })
})
