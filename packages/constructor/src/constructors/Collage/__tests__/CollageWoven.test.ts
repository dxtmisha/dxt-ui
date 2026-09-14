// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'
import { CollageEven } from '../CollageEven'
import { CollageWoven } from '../CollageWoven'

describe('CollageWoven', () => {
  it('should initialize classCompact with class name', () => {
    const collageWoven = new CollageWoven('d-collage')

    expect(collageWoven.classCompact).toBe('d-collage-item--compact')
  })

  it('should toggle compact class on item element', () => {
    const item = document.createElement('div')
    const collageWoven = new CollageWoven('d-collage')

    collageWoven.setCompact(item, true)
    expect(item.classList.contains('d-collage-item--compact')).toBe(true)

    collageWoven.setCompact(item, false)
    expect(item.classList.contains('d-collage-item--compact')).toBe(false)
  })

  it('should set alternating compact classes using chessboard math on resize()', () => {
    const container = document.createElement('div')
    const item0 = document.createElement('div')
    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')

    item0.setAttribute('data-value', 'val-0')
    item1.setAttribute('data-value', 'val-1')
    item2.setAttribute('data-value', 'val-2')
    item3.setAttribute('data-value', 'val-3')

    // 2 columns:
    item0.getBoundingClientRect = () => ({ left: 0, top: 0, right: 100, bottom: 50, width: 100, height: 50, x: 0, y: 0, toJSON: () => ({}) })
    item1.getBoundingClientRect = () => ({ left: 120, top: 0, right: 220, bottom: 50, width: 100, height: 50, x: 120, y: 0, toJSON: () => ({}) })
    item2.getBoundingClientRect = () => ({ left: 0, top: 60, right: 100, bottom: 110, width: 100, height: 50, x: 0, y: 60, toJSON: () => ({}) })
    item3.getBoundingClientRect = () => ({ left: 120, top: 60, right: 220, bottom: 110, width: 100, height: 50, x: 120, y: 60, toJSON: () => ({}) })

    container.appendChild(item0)
    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(item3)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const even = new CollageEven('d-collage')
    const collageWoven = new CollageWoven('d-collage', collageElement, even)

    const spyRaf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 1
    })

    collageWoven.resize()

    // Row 0: item0 (col 0) -> normal, item1 (col 1) -> compact
    // Row 1: item2 (col 0) -> compact, item3 (col 1) -> normal
    expect(item0.classList.contains('d-collage-item--compact')).toBe(false)
    expect(item1.classList.contains('d-collage-item--compact')).toBe(true)
    expect(item2.classList.contains('d-collage-item--compact')).toBe(true)
    expect(item3.classList.contains('d-collage-item--compact')).toBe(false)
    expect(even.is()).toBe(true)

    spyRaf.mockRestore()
  })

  it('should recalculate woven layout and update even state via resize()', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-value', 'val-1')
    item1.getBoundingClientRect = () => ({ top: 0, height: 50, bottom: 50, left: 0, right: 50, width: 50, x: 0, y: 0, toJSON: () => ({}) })
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const even = new CollageEven('d-collage')
    const collageWoven = new CollageWoven('d-collage', collageElement, even)

    const spyRaf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 1
    })

    collageWoven.resize()

    expect(spyRaf).toHaveBeenCalled()
    expect(even.is()).toBe(false) // 1 column is odd

    spyRaf.mockRestore()
  })

  it('should calculate columns based on left edge wrap', () => {
    class TestCollageWoven extends CollageWoven {
      override getColumns(items: HTMLElement[]): number {
        return super.getColumns(items)
      }
    }

    const item0 = document.createElement('div')
    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')

    item0.getBoundingClientRect = () => ({ left: 0, top: 0, right: 100, bottom: 50, width: 100, height: 50, x: 0, y: 0, toJSON: () => ({}) })
    item1.getBoundingClientRect = () => ({ left: 120, top: 0, right: 220, bottom: 50, width: 100, height: 50, x: 120, y: 0, toJSON: () => ({}) })
    item2.getBoundingClientRect = () => ({ left: 0, top: 60, right: 100, bottom: 110, width: 100, height: 50, x: 0, y: 60, toJSON: () => ({}) })
    item3.getBoundingClientRect = () => ({ left: 120, top: 60, right: 220, bottom: 110, width: 100, height: 50, x: 120, y: 60, toJSON: () => ({}) })

    const testWoven = new TestCollageWoven('d-collage')

    expect(testWoven.getColumns([item0, item1, item2, item3])).toBe(2)
  })
})

