// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { CollageElement } from '../CollageElement'
import { CollageWoven } from '../CollageWoven'

describe('CollageWoven', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Static activation predicate (static is)', () => {
    it.each([
      ['woven', true],
      ['standard', false],
      ['quilted', false],
      ['masonryHorizontal', false],
      ['masonryVertical', false],
      [undefined, false]
    ] as const)('should return %s for variant=%s', (variant, expected) => {
      expect(CollageWoven.is({ variant })).toBe(expected)
    })

    it('should return false when props is undefined', () => {
      expect(CollageWoven.is(undefined)).toBe(false)
    })
  })

  describe('Compact class management and chessboard layout', () => {
    it('should initialize classCompact from DesignName without eagerly invoking element getter', () => {
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const elementGetter = vi.fn(() => elementItem)
      const collageWoven = new CollageWoven(new DesignName('d.collage'), elementGetter)

      expect(collageWoven.classCompact).toBe('d-collageItem--compact')
      expect(elementGetter).not.toHaveBeenCalled()
    })

    it('should toggle and reset compact class on individual items', () => {
      class TestCollageWoven extends CollageWoven {
        override setCompact(itemElement: HTMLElement, compactState: boolean): void {
          super.setCompact(itemElement, compactState)
        }

        override resetItem(itemElement: HTMLElement): void {
          super.resetItem(itemElement)
        }
      }

      const item = document.createElement('div')
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const collageWoven = new TestCollageWoven(new DesignName('d.collage'), () => elementItem)

      collageWoven.setCompact(item, true)
      expect(item.classList.contains(collageWoven.classCompact)).toBe(true)

      collageWoven.setCompact(item, false)
      expect(item.classList.contains(collageWoven.classCompact)).toBe(false)

      item.classList.add(collageWoven.classCompact)
      collageWoven.resetItem(item)
      expect(item.classList.contains(collageWoven.classCompact)).toBe(false)
    })

    it('should apply alternating chessboard compact classes across multiple rows and columns', () => {
      const container = document.createElement('div')
      const items = [0, 1, 2, 3, 4, 5].map((index) => {
        const item = document.createElement('div')
        item.setAttribute('data-collage-item', 'true')
        item.setAttribute('data-value', `value-${index}`)
        Object.defineProperty(item, 'offsetLeft', {
          value: (index % 3) * 120,
          configurable: true
        })
        container.appendChild(item)
        return item
      })

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const collageWoven = new CollageWoven(new DesignName('d.collage'), () => elementItem)

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      collageWoven.resize()

      // Row 0: col 0 (false), col 1 (true), col 2 (false)
      // Row 1: col 0 (true), col 1 (false), col 2 (true)
      expect(items.map(item => item.classList.contains(collageWoven.classCompact))).toEqual([
        false,
        true,
        false,
        true,
        false,
        true
      ])

      collageWoven.reset()
      expect(items.every(item => !item.classList.contains(collageWoven.classCompact))).toBe(true)
    })

    it('should calculate columns correctly for empty, single-row, and multi-row layouts', () => {
      class TestCollageWoven extends CollageWoven {
        override getColumns(items: HTMLElement[]): number {
          return super.getColumns(items)
        }
      }

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(undefined))
      const testWoven = new TestCollageWoven(new DesignName('d.collage'), () => elementItem)

      expect(testWoven.getColumns([])).toBe(0)

      const singleRow = [0, 100, 200].map((left) => {
        const item = document.createElement('div')
        Object.defineProperty(item, 'offsetLeft', { value: left, configurable: true })
        return item
      })
      expect(testWoven.getColumns(singleRow)).toBe(3)

      const twoColumns = [0, 120, 0, 120].map((left) => {
        const item = document.createElement('div')
        Object.defineProperty(item, 'offsetLeft', { value: left, configurable: true })
        return item
      })
      expect(testWoven.getColumns(twoColumns)).toBe(2)

      const singleColumn = [0, 0, 0].map((left) => {
        const item = document.createElement('div')
        Object.defineProperty(item, 'offsetLeft', { value: left, configurable: true })
        return item
      })
      expect(testWoven.getColumns(singleColumn)).toBe(1)
    })

    it('should calculate columns and chessboard compact classes correctly in RTL layout', () => {
      const container = document.createElement('div')
      container.setAttribute('dir', 'rtl')

      // 3 columns in RTL: row 0 has offsetLeft [240, 120, 0], row 1 has [240, 120, 0]
      const rtlOffsets = [240, 120, 0, 240, 120, 0]
      const items = rtlOffsets.map((left, index) => {
        const item = document.createElement('div')
        item.setAttribute('data-collage-item', 'true')
        item.setAttribute('data-value', `rtl-${index}`)
        Object.defineProperty(item, 'offsetLeft', {
          value: left,
          configurable: true
        })
        container.appendChild(item)
        return item
      })

      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const collageWoven = new CollageWoven(new DesignName('d.collage'), () => elementItem)

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      collageWoven.resize()

      expect(items.map(item => item.classList.contains(collageWoven.classCompact))).toEqual([
        false,
        true,
        false,
        true,
        false,
        true
      ])
    })

    it('should handle single-row and single-column layouts in RTL via CSS direction', () => {
      class TestCollageWoven extends CollageWoven {
        override getColumns(items: HTMLElement[]): number {
          return super.getColumns(items)
        }
      }

      const container = document.createElement('div')
      container.style.direction = 'rtl'
      document.body.appendChild(container)

      try {
        const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
        const testWoven = new TestCollageWoven(new DesignName('d.collage'), () => elementItem)

        const singleRowRtl = [240, 120, 0].map((left) => {
          const item = document.createElement('div')
          Object.defineProperty(item, 'offsetLeft', { value: left, configurable: true })
          return item
        })
        expect(testWoven.getColumns(singleRowRtl)).toBe(3)

        const singleColumnRtl = [0, 0, 0].map((left) => {
          const item = document.createElement('div')
          Object.defineProperty(item, 'offsetLeft', { value: left, configurable: true })
          return item
        })
        expect(testWoven.getColumns(singleColumnRtl)).toBe(1)
      } finally {
        container.remove()
      }
    })
  })

  describe('Animation frame cancellation, boundaries, and lifecycle cleanup', () => {
    it('should cancel previous pending animation frame on repeated resize, reset, and unmount', () => {
      const container = document.createElement('div')
      const elementItem = new CollageElement(ref<HTMLElement | undefined>(container))
      const collageWoven = new CollageWoven(new DesignName('d.collage'), () => elementItem)

      let frameCounter = 0
      const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined)
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => {
        frameCounter += 1
        return frameCounter
      })

      collageWoven.resize()
      collageWoven.resize()
      expect(cancelSpy).toHaveBeenCalledWith(1)

      collageWoven.reset()
      expect(cancelSpy).toHaveBeenCalledWith(2)

      collageWoven.resize()
      collageWoven.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledWith(3)

      // Repeated cancel/unmount should be a no-op
      collageWoven.onUnmounted()
      expect(cancelSpy).toHaveBeenCalledTimes(3)
    })

    it('should safely exit when container is missing or has zero items inside animation frame', () => {
      const element = ref<HTMLElement | undefined>(undefined)
      const elementItem = new CollageElement(element)
      const collageWoven = new CollageWoven(new DesignName('d.collage'), () => elementItem)

      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      expect(() => collageWoven.resize()).not.toThrow()

      element.value = document.createElement('div')
      expect(() => collageWoven.resize()).not.toThrow()
    })
  })
})
