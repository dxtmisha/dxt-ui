// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import { ArrowElement } from '../ArrowElement'

describe('ArrowElement', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    vi.spyOn(window, 'getComputedStyle').mockImplementation(() => {
      return {
        getPropertyValue: (propertyName: string) => {
          if (propertyName === '--my-arrow-arrowWidth') return '12px'
          if (propertyName === '--my-arrow-arrowHeight') return '8px'
          return ''
        }
      } as unknown as CSSStyleDeclaration
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return correct width and height from styles', () => {
    const arrow = new ArrowElement(ref(element), new DesignName('my.arrow'))
    expect(arrow.is()).toBe(true)
    expect(arrow.width).toBe(12)
    expect(arrow.height).toBe(8)
  })

  it('should return 0 width and height if element is undefined or CSS variables are empty', () => {
    const arrowUndefined = new ArrowElement(ref(undefined), new DesignName('my.arrow'))
    expect(arrowUndefined.is()).toBe(false)
    expect(arrowUndefined.width).toBe(0)
    expect(arrowUndefined.height).toBe(0)
    expect(arrowUndefined.getRect()).toBeUndefined()
    expect(arrowUndefined.getRectBorder()).toBeUndefined()
    expect(arrowUndefined.getRectArrowLine()).toBeUndefined()

    vi.spyOn(window, 'getComputedStyle').mockImplementation(() => {
      return {
        getPropertyValue: () => ''
      } as unknown as CSSStyleDeclaration
    })

    const arrowEmpty = new ArrowElement(ref(element), new DesignName('my.arrow'))
    expect(arrowEmpty.width).toBe(0)
    expect(arrowEmpty.height).toBe(0)
  })

  it('should return boundary rects correctly', () => {
    const borderElement = document.createElement('div')
    borderElement.className = 'my-arrow__border'
    element.appendChild(borderElement)

    const arrowLineElement = document.createElement('div')
    arrowLineElement.className = 'my-arrow__arrowLine'
    element.appendChild(arrowLineElement)

    const arrow = new ArrowElement(ref(element), new DesignName('my.arrow'))

    const mockRect = { top: 10, bottom: 20, left: 10, right: 30 } as DOMRect
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue(mockRect)
    vi.spyOn(borderElement, 'getBoundingClientRect').mockReturnValue(mockRect)
    vi.spyOn(arrowLineElement, 'getBoundingClientRect').mockReturnValue(mockRect)

    expect(arrow.getRect()).toBe(mockRect)
    expect(arrow.getRectBorder()).toBe(mockRect)
    expect(arrow.getRectArrowLine()).toBe(mockRect)
  })
})
