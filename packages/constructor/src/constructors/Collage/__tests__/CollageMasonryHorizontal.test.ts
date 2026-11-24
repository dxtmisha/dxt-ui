// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'
import {
  COLLAGE_MASONRY_ROW_TOLERANCE,
  CollageMasonryHorizontal
} from '../CollageMasonryHorizontal'

describe('CollageMasonryHorizontal', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Constants and static predicate', () => {
    it('should export COLLAGE_MASONRY_ROW_TOLERANCE as 16', () => {
      expect(COLLAGE_MASONRY_ROW_TOLERANCE).toBe(16)
    })

    it.each([
      ['masonryHorizontal', true],
      ['masonryVertical', false],
      ['woven', false],
      ['standard', false],
      ['quilted', false],
      [undefined, false]
    ] as const)('should return %s for variant=%s', (variant, expected) => {
      expect(CollageMasonryHorizontal.is({ variant })).toBe(expected)
    })
  })

  describe('Row grouping and column calculations', () => {
    it('should calculate vertical center coordinate via getItemCenter()', () => {
      class TestCollageMasonryHorizontal extends CollageMasonryHorizontal {
        override getItemCenter(itemElement: HTMLElement): number {
          return super.getItemCenter(itemElement)
        }
      }

      const item = document.createElement('div')
      Object.defineProperty(item, 'offsetTop', { value: 20, configurable: true })
      Object.defineProperty(item, 'offsetHeight', { value: 61, configurable: true })

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const masonryHorizontal = new TestCollageMasonryHorizontal(() => elementItem, () => grow)

      expect(masonryHorizontal.getItemCenter(item)).toBe(51)
    })

    it('should group items into sorted rows within COLLAGE_MASONRY_ROW_TOLERANCE via getLines()', () => {
      class TestCollageMasonryHorizontal extends CollageMasonryHorizontal {
        override getLines(): HTMLElement[][] {
          return super.getLines()
        }
      }

      const container = document.createElement('div')
      const bottomItem = document.createElement('div')
      bottomItem.setAttribute('data-collage-item', 'true')
      Object.defineProperty(bottomItem, 'offsetTop', { value: 200, configurable: true })
      Object.defineProperty(bottomItem, 'offsetHeight', { value: 100, configurable: true })

      const topFirst = document.createElement('div')
      topFirst.setAttribute('data-collage-item', 'true')
      Object.defineProperty(topFirst, 'offsetTop', { value: 0, configurable: true })
      Object.defineProperty(topFirst, 'offsetHeight', { value: 100, configurable: true })

      const topSecond = document.createElement('div')
      topSecond.setAttribute('data-collage-item', 'true')
      Object.defineProperty(topSecond, 'offsetTop', { value: 10, configurable: true })
      Object.defineProperty(topSecond, 'offsetHeight', { value: 80, configurable: true })

      container.appendChild(bottomItem)
      container.appendChild(topFirst)
      container.appendChild(topSecond)

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const masonryHorizontal = new TestCollageMasonryHorizontal(() => elementItem, () => grow)

      const lines = masonryHorizontal.getLines()
      expect(lines).toEqual([[topFirst, topSecond], [bottomItem]])
    })

    it('should calculate column totals and fallback to 1 for missing, zero, negative, or invalid data-width', () => {
      class TestCollageMasonryHorizontal extends CollageMasonryHorizontal {
        override getColumnsTotals(lines: HTMLElement[][]) {
          return super.getColumnsTotals(lines)
        }
      }

      const validTwo = document.createElement('div')
      validTwo.setAttribute('data-width', '2')
      const validThree = document.createElement('div')
      validThree.setAttribute('data-width', '3')
      const missingWidth = document.createElement('div')
      const invalidWidth = document.createElement('div')
      invalidWidth.setAttribute('data-width', 'invalid')
      const zeroWidth = document.createElement('div')
      zeroWidth.setAttribute('data-width', '0')
      const negativeWidth = document.createElement('div')
      negativeWidth.setAttribute('data-width', '-4')

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const masonryHorizontal = new TestCollageMasonryHorizontal(() => elementItem, () => grow)

      const result = masonryHorizontal.getColumnsTotals([
        [validTwo, validThree],
        [missingWidth, invalidWidth, zeroWidth, negativeWidth]
      ])

      expect(result.columnsTotals).toEqual([5, 4])
      expect(result.maxColumns).toBe(5)
    })
  })

  describe('Grow factor distribution on resize()', () => {
    it('should distribute remaining column deficit evenly across non-last rows and skip the last row', () => {
      const container = document.createElement('div')

      // Row 0: width 1 + 1 + 1 = 3 (deficit 5 vs maxColumns 8 -> ceil(5/3) = 2 -> grow 2, 2, 1)
      const row0Item0 = document.createElement('div')
      const row0Item1 = document.createElement('div')
      const row0Item2 = document.createElement('div')

      // Row 1: width 4 + 4 = 8 (deficit 0 -> no grow)
      const row1Item0 = document.createElement('div')
      const row1Item1 = document.createElement('div')

      // Row 2 (last row): width 2 (skipped even though < maxColumns)
      const row2Item0 = document.createElement('div')

      const setupItem = (item: HTMLElement, width: string, top: number) => {
        item.setAttribute('data-collage-item', 'true')
        item.setAttribute('data-width', width)
        Object.defineProperty(item, 'offsetTop', { value: top, configurable: true })
        Object.defineProperty(item, 'offsetHeight', { value: 50, configurable: true })
        container.appendChild(item)
      }

      setupItem(row0Item0, '1', 0)
      setupItem(row0Item1, '1', 0)
      setupItem(row0Item2, '1', 0)
      setupItem(row1Item0, '4', 100)
      setupItem(row1Item1, '4', 100)
      setupItem(row2Item0, '2', 200)

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const setGrowSpy = vi.spyOn(grow, 'setGrow')
      const masonryHorizontal = new CollageMasonryHorizontal(() => elementItem, () => grow)

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      masonryHorizontal.resize()

      expect(setGrowSpy).toHaveBeenCalledTimes(3)
      expect(setGrowSpy).toHaveBeenNthCalledWith(1, row0Item0, 2)
      expect(setGrowSpy).toHaveBeenNthCalledWith(2, row0Item1, 2)
      expect(setGrowSpy).toHaveBeenNthCalledWith(3, row0Item2, 1)
      expect(setGrowSpy).not.toHaveBeenCalledWith(row1Item0, expect.anything())
      expect(setGrowSpy).not.toHaveBeenCalledWith(row2Item0, expect.anything())
    })

    it('should skip distribution for single-row or empty containers without invoking grow getter', () => {
      const container = document.createElement('div')
      const item = document.createElement('div')
      item.setAttribute('data-collage-item', 'true')
      Object.defineProperty(item, 'offsetTop', { value: 0, configurable: true })
      Object.defineProperty(item, 'offsetHeight', { value: 50, configurable: true })
      container.appendChild(item)

      const element = ref<HTMLElement | undefined>(undefined)
      const elementItem = new CollageElement(element)
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const growGetter = vi.fn(() => grow)
      const masonryHorizontal = new CollageMasonryHorizontal(() => elementItem, growGetter)

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      masonryHorizontal.resize()
      expect(growGetter).not.toHaveBeenCalled()

      element.value = container
      masonryHorizontal.resize()
      expect(growGetter).not.toHaveBeenCalled()
    })
  })

  describe('Animation frame cancellation and unmount lifecycle', () => {
    it('should cancel pending animation frame on re-entry, cancel(), and onUnmounted()', () => {
      const container = document.createElement('div')
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const grow = new CollageGrow(new DesignName('d.collage'), () => elementItem)
      const masonryHorizontal = new CollageMasonryHorizontal(() => elementItem, () => grow)

      let frameCounter = 0
      const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => {
        frameCounter += 1
        return frameCounter
      })

      masonryHorizontal.resize()
      masonryHorizontal.resize()
      expect(cancelSpy).toHaveBeenCalledWith(1)

      masonryHorizontal.cancel()
      expect(cancelSpy).toHaveBeenCalledWith(2)

      masonryHorizontal.resize()
      masonryHorizontal.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledWith(3)

      masonryHorizontal.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledTimes(3)
    })
  })
})
