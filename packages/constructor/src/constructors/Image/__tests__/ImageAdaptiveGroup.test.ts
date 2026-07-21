// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ImageAdaptiveGroup } from '../ImageAdaptiveGroup'

describe('ImageAdaptiveGroup', () => {
  it('should hold a static collection of adaptive items', () => {
    const mockItem = {
      id: 'item-id',
      is: () => true,
      make: vi.fn(),
      isBeyond: () => false
    } as any

    expect(ImageAdaptiveGroup.is(mockItem)).toBe(false)

    ImageAdaptiveGroup.add(mockItem)
    expect(ImageAdaptiveGroup.is(mockItem)).toBe(true)

    ImageAdaptiveGroup.remove(mockItem)
    expect(ImageAdaptiveGroup.is(mockItem)).toBe(false)
  })
})
