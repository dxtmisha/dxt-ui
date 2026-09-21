// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { CollageElement } from '../CollageElement'
import { CollageWoven } from '../CollageWoven'

describe('CollageWoven', () => {
  it('should initialize classCompact with class name', () => {
    const collageWoven = new CollageWoven('d-collage')

    expect(collageWoven.classCompact).toBe('d-collageItem--compact')
  })

  it('should toggle compact class on item element', () => {
    class TestCollageWoven extends CollageWoven {
      override setCompact(itemElement: HTMLElement, compactState: boolean): void {
        super.setCompact(itemElement, compactState)
      }
    }

    const item = document.createElement('div')
    const collageWoven = new TestCollageWoven('d-collage')

    collageWoven.setCompact(item, true)
    expect(item.classList.contains(collageWoven.classCompact)).toBe(true)

    collageWoven.setCompact(item, false)
    expect(item.classList.contains(collageWoven.classCompact)).toBe(false)
  })

  it('should reset compact class on single item with resetItem()', () => {
    class TestCollageWoven extends CollageWoven {
      override resetItem(itemElement: HTMLElement): void {
        super.resetItem(itemElement)
      }
    }

    const item = document.createElement('div')
    const collageWoven = new TestCollageWoven('d-collage')
    item.classList.add(collageWoven.classCompact)

    collageWoven.resetItem(item)
    expect(item.classList.contains(collageWoven.classCompact)).toBe(false)
  })

  it('should reset compact classes on all items with reset()', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    item1.setAttribute('data-collage-item', 'true')
    item2.setAttribute('data-collage-item', 'true')

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const collageWoven = new CollageWoven('d-collage', collageElement)

    item1.classList.add(collageWoven.classCompact)
    item2.classList.add(collageWoven.classCompact)
    container.appendChild(item1)
    container.appendChild(item2)

    collageWoven.reset()
    expect(item1.classList.contains(collageWoven.classCompact)).toBe(false)
    expect(item2.classList.contains(collageWoven.classCompact)).toBe(false)
  })

  it('should set alternating compact classes using chessboard math on resize()', () => {
    const container = document.createElement('div')
    const item0 = document.createElement('div')
    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')

    item0.setAttribute('data-collage-item', 'true')
    item0.setAttribute('data-value', 'val-0')
    item1.setAttribute('data-collage-item', 'true')
    item1.setAttribute('data-value', 'val-1')
    item2.setAttribute('data-collage-item', 'true')
    item2.setAttribute('data-value', 'val-2')
    item3.setAttribute('data-collage-item', 'true')
    item3.setAttribute('data-value', 'val-3')

    // 2 columns:
    Object.defineProperty(item0, 'offsetLeft', { value: 0, configurable: true })
    Object.defineProperty(item1, 'offsetLeft', { value: 120, configurable: true })
    Object.defineProperty(item2, 'offsetLeft', { value: 0, configurable: true })
    Object.defineProperty(item3, 'offsetLeft', { value: 120, configurable: true })

    container.appendChild(item0)
    container.appendChild(item1)
    container.appendChild(item2)
    container.appendChild(item3)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const collageWoven = new CollageWoven('d-collage', collageElement)

    const spyRaf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 1
    })

    collageWoven.resize()

    // Row 0: item0 (col 0) -> normal, item1 (col 1) -> compact
    // Row 1: item2 (col 0) -> compact, item3 (col 1) -> normal
    expect(item0.classList.contains(collageWoven.classCompact)).toBe(false)
    expect(item1.classList.contains(collageWoven.classCompact)).toBe(true)
    expect(item2.classList.contains(collageWoven.classCompact)).toBe(true)
    expect(item3.classList.contains(collageWoven.classCompact)).toBe(false)

    spyRaf.mockRestore()
  })

  it('should recalculate woven layout via resize()', () => {
    const container = document.createElement('div')
    const item1 = document.createElement('div')
    item1.setAttribute('data-collage-item', 'true')
    item1.setAttribute('data-value', 'val-1')
    item1.getBoundingClientRect = () => ({ top: 0, height: 50, bottom: 50, left: 0, right: 50, width: 50, x: 0, y: 0, toJSON: () => ({}) })
    container.appendChild(item1)

    const element = ref<HTMLElement | undefined>(container)
    const collageElement = new CollageElement(element)
    const collageWoven = new CollageWoven('d-collage', collageElement)

    const spyRaf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 1
    })

    collageWoven.resize()

    expect(spyRaf).toHaveBeenCalled()

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

    Object.defineProperty(item0, 'offsetLeft', { value: 0, configurable: true })
    Object.defineProperty(item1, 'offsetLeft', { value: 120, configurable: true })
    Object.defineProperty(item2, 'offsetLeft', { value: 0, configurable: true })
    Object.defineProperty(item3, 'offsetLeft', { value: 120, configurable: true })

    const testWoven = new TestCollageWoven('d-collage')

    expect(testWoven.getColumns([item0, item1, item2, item3])).toBe(2)
  })
})
