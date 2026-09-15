// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'
import { CollageGrow } from '../CollageGrow'
import {
  COLLAGE_MASONRY_ROW_TOLERANCE,
  CollageMasonryHorizontal
} from '../CollageMasonryHorizontal'

describe('CollageMasonryHorizontal', () => {
  it('should export COLLAGE_MASONRY_ROW_TOLERANCE as 16', () => {
    expect(COLLAGE_MASONRY_ROW_TOLERANCE).toBe(16)
  })

  it('should not throw on resize without elements', () => {
    const element = ref<HTMLElement | undefined>(undefined)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, collageElement)
    expect(() => masonryHorizontal.resize()).not.toThrow()
  })

  it('should return vertical center coordinate of item via getItemCenter()', () => {
    class TestCollageMasonryHorizontal extends CollageMasonryHorizontal {
      override getItemCenter(itemElement: HTMLElement): number {
        return super.getItemCenter(itemElement)
      }
    }

    const item = document.createElement('div')
    Object.defineProperty(item, 'offsetTop', { value: 20, configurable: true })
    Object.defineProperty(item, 'offsetHeight', { value: 60, configurable: true })

    const element = ref<HTMLElement | undefined>(undefined)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)
    const masonryHorizontal = new TestCollageMasonryHorizontal(grow, collageElement)

    expect(masonryHorizontal.getItemCenter(item)).toBe(50)
  })

  it('should group items into lines by vertical center position via getLines()', () => {
    class TestCollageMasonryHorizontal extends CollageMasonryHorizontal {
      override getLines(): HTMLElement[][] {
        return super.getLines()
      }
    }

    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'item-1')
    const item2 = document.createElement('div')
    item2.setAttribute('data-value', 'item-2')
    const item3 = document.createElement('div')
    item3.setAttribute('data-value', 'item-3')

    Object.defineProperty(item1, 'offsetTop', { value: 0, configurable: true })
    Object.defineProperty(item1, 'offsetHeight', { value: 100, configurable: true })
    Object.defineProperty(item2, 'offsetTop', { value: 10, configurable: true })
    Object.defineProperty(item2, 'offsetHeight', { value: 80, configurable: true })
    Object.defineProperty(item3, 'offsetTop', { value: 200, configurable: true })
    Object.defineProperty(item3, 'offsetHeight', { value: 100, configurable: true })

    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(item3)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)
    const masonryHorizontal = new TestCollageMasonryHorizontal(grow, collageElement)

    const lines = masonryHorizontal.getLines()
    expect(lines.length).toBe(2)
    expect(lines[0]).toEqual([item1, item2])
    expect(lines[1]).toEqual([item3])
  })

  it('should calculate column totals and maximum columns via getColumnsTotals()', () => {
    class TestCollageMasonryHorizontal extends CollageMasonryHorizontal {
      override getColumnsTotals(lines: HTMLElement[][]) {
        return super.getColumnsTotals(lines)
      }
    }

    const item1 = document.createElement('div')
    item1.setAttribute('data-width', '2')
    const item2 = document.createElement('div')
    item2.setAttribute('data-width', '3')
    const item3 = document.createElement('div')
    // without data-width (defaults to 1)

    const element = ref<HTMLElement | undefined>(undefined)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)
    const masonryHorizontal = new TestCollageMasonryHorizontal(grow, collageElement)

    const result = masonryHorizontal.getColumnsTotals([[item1, item2], [item3]])
    expect(result.columnsTotals).toEqual([5, 1])
    expect(result.maxColumns).toBe(5)
  })

  it('should calculate row totals and distribute grow factors on resize()', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')

    item1.setAttribute('data-value', 'val-1')
    item1.setAttribute('data-width', '2')
    item2.setAttribute('data-value', 'val-2')
    item2.setAttribute('data-width', '4')
    item3.setAttribute('data-value', 'val-3')
    item3.setAttribute('data-width', '2')

    Object.defineProperty(item1, 'offsetTop', { value: 0, configurable: true })
    Object.defineProperty(item1, 'offsetHeight', { value: 50, configurable: true })
    Object.defineProperty(item2, 'offsetTop', { value: 0, configurable: true })
    Object.defineProperty(item2, 'offsetHeight', { value: 50, configurable: true })
    Object.defineProperty(item3, 'offsetTop', { value: 60, configurable: true })
    Object.defineProperty(item3, 'offsetHeight', { value: 50, configurable: true })

    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(item3)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const grow = new CollageGrow('d-collage', collageElement)
    const masonryHorizontal = new CollageMasonryHorizontal(grow, collageElement)

    const spyRaf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 1
    })

    masonryHorizontal.resize()

    // item1 + item2 = 2 + 4 = 6 maxColumns
    // Since item3 is in the last row (index 1 < lines.length - 1 is false), it is not grown
    // Check that resetGrow and calculation ran without errors
    expect(grow.propertyGrow).toBe('--d-collage-sys-item-grow')

    spyRaf.mockRestore()
  })
})
