// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick, ref, reactive } from 'vue'
import { ImageLazy } from '../ImageLazy'

const mockLazyItemStatus = ref(false)
const mockRemoveLazyItem = vi.fn()

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual('@dxtmisha/functional') as any
  return {
    ...actual,
    useLazyItemByMarginRef: vi.fn(() => ({
      lazyItemStatus: mockLazyItemStatus,
      removeLazyItem: mockRemoveLazyItem
    }))
  }
})

let unmountedCallbacks: Array<() => void> = []

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: vi.fn((callback: () => void) => callback()),
    onUnmounted: vi.fn((callback: () => void) => {
      unmountedCallbacks.push(callback)
    })
  }
})

describe('ImageLazy', () => {
  beforeEach(() => {
    unmountedCallbacks = []
    mockLazyItemStatus.value = false
    mockRemoveLazyItem.mockClear()
    vi.clearAllMocks()
  })

  it('should return false for isLazy when props.lazy is not set', () => {
    const props = reactive({ lazy: false, preloadOffset: '0px' })
    const element = ref<HTMLElement | undefined>(undefined)
    const lazy = new ImageLazy(props, element)

    expect(lazy.isLazy()).toBe(false)
  })

  it('should return true for isLazy when props.lazy is true but not yet initialized', () => {
    const props = reactive({ lazy: true, preloadOffset: '50px' })
    const element = ref<HTMLElement | undefined>(undefined)
    const lazy = new ImageLazy(props, element)

    expect(lazy.isLazy()).toBe(true)
  })

  it('should initialize lazy loading when element is present and lazy is true', async () => {
    const props = reactive({ lazy: true, preloadOffset: '100px' })
    const mockElement = document.createElement('div')
    const element = ref<HTMLElement | undefined>(mockElement)

    const lazy = new ImageLazy(props, element)
    expect(lazy.isLazy()).toBe(true)

    mockLazyItemStatus.value = true
    await nextTick()
    expect(lazy.isLazy()).toBe(false)
    expect(mockRemoveLazyItem).toHaveBeenCalled()
  })

  it('should stop tracking and reset state on reset()', () => {
    const props = reactive({ lazy: true, preloadOffset: '0px' })
    const mockElement = document.createElement('div')
    const element = ref<HTMLElement | undefined>(mockElement)

    const lazy = new ImageLazy(props, element)
    lazy.reset()

    expect(lazy.isLazy()).toBe(true)
    expect(mockRemoveLazyItem).toHaveBeenCalled()
  })

  it('should clean up on unmounted', () => {
    const props = reactive({ lazy: true, preloadOffset: '0px' })
    const mockElement = document.createElement('div')
    const element = ref<HTMLElement | undefined>(mockElement)

    const lazy = new ImageLazy(props, element)
    unmountedCallbacks.forEach(callback => callback())

    expect(lazy.isLazy()).toBe(true)
    expect(mockRemoveLazyItem).toHaveBeenCalled()
  })
})
