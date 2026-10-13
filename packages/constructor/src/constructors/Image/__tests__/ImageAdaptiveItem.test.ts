// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref } from 'vue'
import { ImageAdaptiveItem } from '../ImageAdaptiveItem'
import { ImageAdaptiveGroup } from '../ImageAdaptiveGroup'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'

let unmountedCallbacks: Array<() => void> = []

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: vi.fn((fn: () => void) => fn()),
    onUnmounted: vi.fn((fn: () => void) => {
      unmountedCallbacks.push(fn)
    })
  }
})

describe('ImageAdaptiveItem', () => {
  let mockEl: HTMLDivElement

  beforeEach(() => {
    unmountedCallbacks = []
    mockEl = document.createElement('div')
    document.body.appendChild(mockEl)
  })

  afterEach(() => {
    if (mockEl.parentNode) {
      mockEl.parentNode.removeChild(mockEl)
    }
    vi.restoreAllMocks()
  })

  it('should keep lazy undefined by default when adaptive is disabled', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockData = {
      isImage: () => true
    } as any

    const item = new ImageAdaptiveItem(
      { adaptive: false, objectWidth: 100 },
      clientOnly,
      mockData,
      ref(mockEl)
    )

    expect(item.lazy).toBeUndefined()
    expect(item.active).toBe(false)
    expect(item.is()).toBe(false)
  })

  it('should initialize lazy only when needed via initLazy and reset it via resetLazy', () => {
    const unattachedEl = document.createElement('div')
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockData = {
      isImage: () => true
    } as any

    const item = new ImageAdaptiveItem(
      { adaptive: true, objectWidth: 100 },
      clientOnly,
      mockData,
      ref(unattachedEl)
    )

    // Not yet in DOM -> is() is false -> lazy is undefined
    expect(item.is()).toBe(false)
    expect(item.lazy).toBeUndefined()

    // Explicitly initialize lazy
    item.initLazy()
    expect(item.lazy).toBeDefined()
    expect(item.lazy?.lazyItemStatus).toBeDefined()

    // Calling initLazy again should be idempotent
    const currentLazy = item.lazy
    item.initLazy()
    expect(item.lazy).toBe(currentLazy)

    // Reset lazy
    item.resetLazy()
    expect(item.lazy).toBeUndefined()
  })

  it('should set beyond to true when adaptiveAlways is true', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockData = {
      isImage: () => true
    } as any

    const item = new ImageAdaptiveItem(
      { adaptive: true, adaptiveAlways: true, objectWidth: 100 },
      clientOnly,
      mockData,
      ref(mockEl)
    )

    item.make()
    expect(item.isBeyond()).toBe(true)
  })

  it('should manage beyond state via make() based on lazyItemStatus', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockData = {
      isImage: () => true
    } as any

    const item = new ImageAdaptiveItem(
      { adaptive: true, objectWidth: 100 },
      clientOnly,
      mockData,
      ref(mockEl)
    )

    expect(item.is()).toBe(true)
    item.make()
    expect(item.lazy).toBeDefined()

    // Default lazy status is initially false
    if (item.lazy) {
      item.lazy.lazyItemStatus.value = false
    }
    item.make()
    expect(item.isBeyond()).toBe(false)

    // When element enters viewport margin
    if (item.lazy) {
      item.lazy.lazyItemStatus.value = true
    }
    item.make()
    expect(item.isBeyond()).toBe(true)
  })

  it('should clean up lazy on remove() and onUnmounted', () => {
    const removeSpy = vi.spyOn(ImageAdaptiveGroup, 'remove')
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockData = {
      isImage: () => true
    } as any

    const item = new ImageAdaptiveItem(
      { adaptive: true, objectWidth: 100 },
      clientOnly,
      mockData,
      ref(mockEl)
    )

    item.initLazy()
    expect(item.lazy).toBeDefined()

    // Test onUnmounted trigger
    unmountedCallbacks.forEach(cb => cb())
    expect(removeSpy).toHaveBeenCalledWith(item)
    expect(item.lazy).toBeUndefined()
  })

  it('should handle group, dimensions and axis type', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockData = {
      isImage: () => true,
      image: ref({ width: 200, height: 100 })
    } as any

    const item = new ImageAdaptiveItem(
      { adaptive: true, adaptiveGroup: 'gallery', objectWidth: 150, objectHeight: 75 },
      clientOnly,
      mockData,
      ref(mockEl)
    )

    expect(item.group).toBe('gallery')
    expect(item.isGroup('gallery')).toBe(true)
    expect(item.isGroup('main')).toBe(false)
    expect(item.width).toBe(150)
    expect(item.height).toBe(75)

    // Type before percent is set
    expect(item.type).toBeUndefined()

    // Setting percent for width (X axis)
    item.setPercent(0.8, 0)
    expect(item.percent.value.width).toBe(0.8)
    expect(item.type).toBe('x')
    expect(item.backgroundSize).toContain('% auto')

    // Setting percent for height (Y axis)
    item.setPercent(0, 0.6)
    expect(item.type).toBe('y')
    expect(item.backgroundSize).toContain('auto ')
  })
})
