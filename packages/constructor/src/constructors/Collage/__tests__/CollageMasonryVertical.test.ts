// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'
import {
  COLLAGE_MASONRY_SCROLL_TOLERANCE,
  CollageMasonryVertical
} from '../CollageMasonryVertical'

describe('CollageMasonryVertical', () => {
  it('should export COLLAGE_MASONRY_SCROLL_TOLERANCE as 4', () => {
    expect(COLLAGE_MASONRY_SCROLL_TOLERANCE).toBe(4)
  })

  it('should not throw on resize without elements', () => {
    const element = ref<HTMLElement | undefined>(undefined)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)
    const masonryVertical = new CollageMasonryVertical(grow, collageElement)

    expect(() => masonryVertical.resize()).not.toThrow()
  })

  it('should compute grow factor and call setGrow when scrollHeight exceeds minHeight + 4', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-collage-item', 'true')
    item1.setAttribute('data-value', 'val-1')
    item1.setAttribute('data-height', '2')

    const item2 = document.createElement('div')
    item2.setAttribute('data-collage-item', 'true')
    item2.setAttribute('data-value', 'val-2')

    const itemNoExceed = document.createElement('div')
    itemNoExceed.setAttribute('data-collage-item', 'true')
    itemNoExceed.setAttribute('data-value', 'val-3')

    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(itemNoExceed)

    Object.defineProperty(item1, 'scrollHeight', { value: 150, configurable: true })
    Object.defineProperty(item2, 'scrollHeight', { value: 200, configurable: true })
    Object.defineProperty(itemNoExceed, 'scrollHeight', {
      value: 100 + COLLAGE_MASONRY_SCROLL_TOLERANCE,
      configurable: true
    })

    vi.spyOn(window, 'getComputedStyle').mockImplementation((targetElement: Element) => {
      if (targetElement === item1 || targetElement === item2 || targetElement === itemNoExceed) {
        return {
          minHeight: '100px'
        } as CSSStyleDeclaration
      }
      return {} as CSSStyleDeclaration
    })

    const spyRaf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)
    const masonryVertical = new CollageMasonryVertical(grow, collageElement)

    const setGrowSpy = vi.spyOn(grow, 'setGrow')

    masonryVertical.resize()

    // item1: minHeight = 100, itemHeight = 2 => heightRatio = 50, computedGrow = Math.round(150 / 50) = 3
    expect(setGrowSpy).toHaveBeenCalledWith(item1, 3)

    // item2: minHeight = 100, itemHeight = 1 => heightRatio = 100, computedGrow = Math.round(200 / 100) = 2
    expect(setGrowSpy).toHaveBeenCalledWith(item2, 2)

    // itemNoExceed: scrollHeight (102) is NOT > minHeight (100) + COLLAGE_MASONRY_SCROLL_TOLERANCE => not called
    expect(setGrowSpy).not.toHaveBeenCalledWith(itemNoExceed, expect.anything())

    spyRaf.mockRestore()
    vi.restoreAllMocks()
  })
})
