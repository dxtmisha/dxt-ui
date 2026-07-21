// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { ArrowElement } from '../ArrowElement'

describe('ArrowElement', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    vi.spyOn(window, 'getComputedStyle').mockImplementation(() => {
      return {
        getPropertyValue: (prop: string) => {
          if (prop === '--my-arrow-arrowWidth') return '12px'
          if (prop === '--my-arrow-arrowHeight') return '8px'
          return ''
        }
      } as any
    })
  })

  it('should return correct width and height from styles', () => {
    const arrow = new ArrowElement(ref(element), 'my-arrow')
    expect(arrow.is()).toBe(true)
    expect(arrow.width).toBe(12)
    expect(arrow.height).toBe(8)
  })

  it('should return 0 width and height if element is undefined', () => {
    const arrow = new ArrowElement(ref(undefined), 'my-arrow')
    expect(arrow.is()).toBe(false)
    expect(arrow.width).toBe(0)
    expect(arrow.height).toBe(0)
  })

  it('should return boundary rects correctly', () => {
    const borderEl = document.createElement('div')
    borderEl.className = 'my-arrow__border'
    element.appendChild(borderEl)

    const arrowLineEl = document.createElement('div')
    arrowLineEl.className = 'my-arrow__arrowLine'
    element.appendChild(arrowLineEl)

    const arrow = new ArrowElement(ref(element), 'my-arrow')

    const mockRect = { top: 10, bottom: 20, left: 10, right: 30 } as any
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(mockRect)
    vi.spyOn(borderEl, 'getBoundingClientRect').mockReturnValue(mockRect)
    vi.spyOn(arrowLineEl, 'getBoundingClientRect').mockReturnValue(mockRect)

    expect(arrow.getRect()).toBe(mockRect)
    expect(arrow.getRectBorder()).toBe(mockRect)
    expect(arrow.getRectArrowLine()).toBe(mockRect)
  })
})
