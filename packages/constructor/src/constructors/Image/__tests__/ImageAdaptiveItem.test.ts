// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { ImageAdaptiveItem } from '../ImageAdaptiveItem'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn(),
    onUnmounted: vi.fn(),
    watchEffect: (fn: () => void) => fn()
  }
})

describe('ImageAdaptiveItem', () => {
  it('should initialize and hold scaling states', () => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: false })
    const mockData = {
      isImage: () => true
    } as any
    const mockEl = document.createElement('div')

    const item = new ImageAdaptiveItem(
      { adaptive: true, objectWidth: 100 },
      clientOnly,
      mockData,
      ref(mockEl)
    )

    expect(item.group).toBe('main')
    expect(item.width).toBe(100)
    expect(item.height).toBe(0)
    expect(item.is()).toBe(false)
  })
})
