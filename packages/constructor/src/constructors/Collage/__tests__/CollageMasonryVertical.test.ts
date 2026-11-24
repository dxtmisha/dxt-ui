// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'
import {
  COLLAGE_MASONRY_SCROLL_TOLERANCE,
  CollageMasonryVertical
} from '../CollageMasonryVertical'

describe('CollageMasonryVertical', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Constants and static predicate', () => {
    it('should export COLLAGE_MASONRY_SCROLL_TOLERANCE as 4', () => {
      expect(COLLAGE_MASONRY_SCROLL_TOLERANCE).toBe(4)
    })

    it.each([
      ['masonryVertical', true],
      ['masonryHorizontal', false],
      ['woven', false],
      ['standard', false],
      ['quilted', false],
      [undefined, false]
    ] as const)('should return %s for variant=%s', (variant, expected) => {
      expect(CollageMasonryVertical.is({ variant })).toBe(expected)
    })
  })

  describe('Grow factor computation on resize()', () => {
    it('should compute grow factors in batched read/write passes when scrollHeight exceeds minHeight + tolerance', () => {
      const container = document.createElement('div')
      const itemWithHeight = document.createElement('div')
      itemWithHeight.setAttribute('data-collage-item', 'true')
      itemWithHeight.setAttribute('data-height', '2')

      const itemDefaultHeight = document.createElement('div')
      itemDefaultHeight.setAttribute('data-collage-item', 'true')

      const itemAtThreshold = document.createElement('div')
      itemAtThreshold.setAttribute('data-collage-item', 'true')
      itemAtThreshold.setAttribute('data-value', 'at-threshold')

      const itemInvalidHeight = document.createElement('div')
      itemInvalidHeight.setAttribute('data-collage-item', 'true')
      itemInvalidHeight.setAttribute('data-height', '-3')

      container.appendChild(itemWithHeight)
      container.appendChild(itemDefaultHeight)
      container.appendChild(itemAtThreshold)
      container.appendChild(itemInvalidHeight)

      Object.defineProperty(itemWithHeight, 'scrollHeight', { value: 150, configurable: true })
      Object.defineProperty(itemDefaultHeight, 'scrollHeight', { value: 200, configurable: true })
      Object.defineProperty(itemAtThreshold, 'scrollHeight', {
        value: 100 + COLLAGE_MASONRY_SCROLL_TOLERANCE,
        configurable: true
      })
      Object.defineProperty(itemInvalidHeight, 'scrollHeight', { value: 250, configurable: true })

      const operations: string[] = []
      vi.spyOn(window, 'getComputedStyle').mockImplementation(() => {
        operations.push('read')
        return { minHeight: '100px' } as CSSStyleDeclaration
      })

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const setGrowSpy = vi.spyOn(grow, 'setGrow').mockImplementation(() => {
        operations.push('write')
      })

      const masonryVertical = new CollageMasonryVertical(() => elementItem, () => grow)
      masonryVertical.resize()

      expect(setGrowSpy).toHaveBeenCalledTimes(3)
      expect(setGrowSpy).toHaveBeenCalledWith(itemWithHeight, 3)
      expect(setGrowSpy).toHaveBeenCalledWith(itemDefaultHeight, 2)
      expect(setGrowSpy).toHaveBeenCalledWith(itemInvalidHeight, 3)
      expect(setGrowSpy).not.toHaveBeenCalledWith(itemAtThreshold, expect.anything())

      // Verify all DOM reads completed before DOM writes (no layout thrashing)
      expect(operations).toEqual(['read', 'read', 'read', 'read', 'write', 'write', 'write'])
    })

    it('should safely ignore elements with auto, empty, zero, or missing minHeight', () => {
      const container = document.createElement('div')
      const itemAuto = document.createElement('div')
      itemAuto.setAttribute('data-collage-item', 'true')
      const itemZero = document.createElement('div')
      itemZero.setAttribute('data-collage-item', 'true')
      const itemMissing = document.createElement('div')
      itemMissing.setAttribute('data-collage-item', 'true')

      container.appendChild(itemAuto)
      container.appendChild(itemZero)
      container.appendChild(itemMissing)

      Object.defineProperty(itemAuto, 'scrollHeight', { value: 300, configurable: true })
      Object.defineProperty(itemZero, 'scrollHeight', { value: 300, configurable: true })
      Object.defineProperty(itemMissing, 'scrollHeight', { value: 300, configurable: true })

      vi.spyOn(window, 'getComputedStyle').mockImplementation((targetElement: Element) => {
        if (targetElement === itemAuto) {
          return { minHeight: 'auto' } as CSSStyleDeclaration
        }
        if (targetElement === itemZero) {
          return { minHeight: '0px' } as CSSStyleDeclaration
        }
        return {} as CSSStyleDeclaration
      })

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const growGetter = vi.fn(() => grow)
      const masonryVertical = new CollageMasonryVertical(() => elementItem, growGetter)

      expect(() => masonryVertical.resize()).not.toThrow()
      expect(growGetter).not.toHaveBeenCalled()
    })

    it('should safely exit when container element is undefined', () => {
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const growGetter = vi.fn(() => grow)
      const masonryVertical = new CollageMasonryVertical(() => elementItem, growGetter)

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      expect(() => masonryVertical.resize()).not.toThrow()
      expect(growGetter).not.toHaveBeenCalled()
    })
  })

  describe('Animation frame cancellation and unmount lifecycle', () => {
    it('should cancel pending animation frame on re-entry, cancel(), and onUnmounted()', () => {
      const container = document.createElement('div')
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const masonryVertical = new CollageMasonryVertical(() => elementItem, () => grow)

      let frameCounter = 0
      const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => {
        frameCounter += 1
        return frameCounter
      })

      masonryVertical.resize()
      masonryVertical.resize()
      expect(cancelSpy).toHaveBeenCalledWith(1)

      masonryVertical.cancel()
      expect(cancelSpy).toHaveBeenCalledWith(2)

      masonryVertical.resize()
      masonryVertical.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledWith(3)

      masonryVertical.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledTimes(3)
    })
  })
})
