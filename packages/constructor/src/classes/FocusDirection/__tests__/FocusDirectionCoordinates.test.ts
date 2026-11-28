// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, beforeEach, afterEach, vi } from 'vitest'
import { createSSRApp, h, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { FocusDirectionActive } from '../FocusDirectionActive'
import { type FocusCoordinates, FocusDirectionCoordinates } from '../FocusDirectionCoordinates'

/**
 * Helper to mock getBoundingClientRect for deterministic 2D spatial geometry tests.
 *
 * Вспомогательная функция для мокирования getBoundingClientRect в детерминированных 2D-тестах.
 */
function mockBoundingRect(
  element: HTMLElement,
  left: number,
  top: number,
  width = 100,
  height = 100
): void {
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    x: left,
    y: top,
    toJSON: () => {}
  })
}

describe('FocusDirectionCoordinates', () => {
  let parentElement: HTMLElement
  let itemTopLeft: HTMLElement
  let itemTopRight: HTMLElement
  let itemBottomLeft: HTMLElement
  let itemBottomRight: HTMLElement

  beforeEach(() => {
    parentElement = document.createElement('div')

    itemTopLeft = document.createElement('div')
    itemTopLeft.className = 'sys-focusDirection__item'
    mockBoundingRect(itemTopLeft, 0, 0)

    itemTopRight = document.createElement('div')
    itemTopRight.className = 'sys-focusDirection__item'
    mockBoundingRect(itemTopRight, 100, 0)

    itemBottomLeft = document.createElement('div')
    itemBottomLeft.className = 'sys-focusDirection__item'
    mockBoundingRect(itemBottomLeft, 0, 100)

    itemBottomRight = document.createElement('div')
    itemBottomRight.className = 'sys-focusDirection__item'
    mockBoundingRect(itemBottomRight, 100, 100)

    parentElement.append(itemTopLeft, itemTopRight, itemBottomLeft, itemBottomRight)
    document.body.appendChild(parentElement)
  })

  afterEach(() => {
    parentElement.remove()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & 2D spatial navigation)', () => {
    it('should find nearest candidate in all four arrow directions with strict return types', () => {
      const active = new FocusDirectionActive(ref(parentElement))
      const coordinates = new FocusDirectionCoordinates(active)

      active.set(itemTopLeft)
      expectTypeOf(coordinates.findNearest('ArrowRight')).toEqualTypeOf<HTMLElement | undefined>()
      expectTypeOf<FocusCoordinates>().toEqualTypeOf<{ x: number, y: number }>()

      expect(coordinates.findNearest('ArrowRight')).toBe(itemTopRight)
      expect(coordinates.findNearest('ArrowDown')).toBe(itemBottomLeft)
      expect(coordinates.findNearest('ArrowLeft')).toBeUndefined()
      expect(coordinates.findNearest('ArrowUp')).toBeUndefined()

      active.set(itemBottomRight)
      expect(coordinates.findNearest('ArrowLeft')).toBe(itemBottomLeft)
      expect(coordinates.findNearest('ArrowUp')).toBe(itemTopRight)
    })

    it('should prioritize aligned candidate over closer misaligned diagonal candidate via cross-axis weight', () => {
      const misalignedNear = document.createElement('div')
      misalignedNear.className = 'sys-focusDirection__item'
      // Center (120, 120): dx=70, dy=70 => ArrowDown weighted = 70^2 * 4 + 70^2 = 24500
      // itemBottomLeft center (50, 150): dx=0, dy=100 => ArrowDown weighted = 100^2 = 10000
      mockBoundingRect(misalignedNear, 70, 70)
      parentElement.appendChild(misalignedNear)

      const active = new FocusDirectionActive(ref(parentElement))
      const coordinates = new FocusDirectionCoordinates(active)
      active.set(itemTopLeft)

      expect(coordinates.findNearest('ArrowDown')).toBe(itemBottomLeft)
    })

    it('should handle negative and floating-point coordinates accurately', () => {
      mockBoundingRect(itemTopLeft, -120.5, -60.25, 40, 40)
      mockBoundingRect(itemTopRight, -20.5, -60.25, 40, 40)

      const active = new FocusDirectionActive(ref(parentElement))
      const coordinates = new FocusDirectionCoordinates(active)
      active.set(itemTopLeft)

      expect(coordinates.findNearest('ArrowRight')).toBe(itemTopRight)
    })
  })

  describe('Boundary thresholds and early-exit optimization', () => {
    it('should respect DIRECTION_THRESHOLD (1px) strict boundary', () => {
      const container = document.createElement('div')
      const origin = document.createElement('div')
      const withinThreshold = document.createElement('div')
      const beyondThreshold = document.createElement('div')

      origin.className = 'sys-focusDirection__item'
      withinThreshold.className = 'sys-focusDirection__item'
      beyondThreshold.className = 'sys-focusDirection__item'

      // origin center: (50, 50)
      mockBoundingRect(origin, 0, 0)
      // withinThreshold center: (51, 50) -> dx = 1 (not > 1)
      mockBoundingRect(withinThreshold, 1, 0)
      // beyondThreshold center: (52, 50) -> dx = 2 (> 1)
      mockBoundingRect(beyondThreshold, 2, 0)

      container.append(origin, withinThreshold, beyondThreshold)
      document.body.appendChild(container)

      const active = new FocusDirectionActive(ref(container))
      const coordinates = new FocusDirectionCoordinates(active)
      active.set(origin)

      expect(coordinates.findNearest('ArrowRight')).toBe(beyondThreshold)

      container.remove()
    })

    it('should exit early without querying DOM geometry for unsupported directions', () => {
      const active = new FocusDirectionActive(ref(parentElement))
      const coordinates = new FocusDirectionCoordinates(active)
      active.set(itemTopLeft)

      const rectSpy = itemTopLeft.getBoundingClientRect
      expect(coordinates.findNearest('Enter')).toBeUndefined()
      expect(coordinates.findNearest('')).toBeUndefined()
      expect(rectSpy).not.toHaveBeenCalled()
    })

    it('should skip querySelectorAll when no active element is set', () => {
      const querySpy = vi.spyOn(parentElement, 'querySelectorAll')
      const active = new FocusDirectionActive(ref(parentElement))
      const coordinates = new FocusDirectionCoordinates(active)

      expect(coordinates.findNearest('ArrowRight')).toBeUndefined()
      expect(querySpy).not.toHaveBeenCalled()
    })
  })

  describe('Empty, nullish, single-item, and undefined containers', () => {
    it('should return undefined when no active element, empty selector, undefined container, or single candidate', () => {
      const active = new FocusDirectionActive(ref(parentElement))
      const coordinates = new FocusDirectionCoordinates(active)

      expect(coordinates.findNearest('ArrowRight')).toBeUndefined()

      active.set(itemTopLeft)
      const emptySelectorCoords = new FocusDirectionCoordinates(active, '')
      expect(emptySelectorCoords.findNearest('ArrowRight')).toBeUndefined()

      const undefinedActive = new FocusDirectionActive(ref<HTMLElement | undefined>(undefined))
      const undefinedCoords = new FocusDirectionCoordinates(undefinedActive)
      expect(undefinedCoords.findNearest('ArrowRight')).toBeUndefined()

      const singleContainer = document.createElement('div')
      const singleItem = document.createElement('div')
      singleItem.className = 'sys-focusDirection__item'
      singleContainer.appendChild(singleItem)
      document.body.appendChild(singleContainer)

      const singleActive = new FocusDirectionActive(ref(singleContainer))
      singleActive.set(singleItem)
      const singleCoords = new FocusDirectionCoordinates(singleActive)
      expect(singleCoords.findNearest('ArrowRight')).toBeUndefined()

      singleContainer.remove()
    })
  })

  describe('Instance isolation and SSR safety', () => {
    it('should isolate selector scopes across independent instances', () => {
      const firstGroup = document.createElement('div')
      const secondGroup = document.createElement('div')

      itemTopLeft.dataset.group = 'a'
      itemTopRight.dataset.group = 'b'
      itemBottomLeft.dataset.group = 'a'

      firstGroup.append(itemTopLeft, itemTopRight, itemBottomLeft)
      document.body.append(firstGroup, secondGroup)

      const activeA = new FocusDirectionActive(ref(firstGroup), '[data-group="a"]')
      const coordsA = new FocusDirectionCoordinates(activeA, '[data-group="a"]')
      activeA.set(itemTopLeft)

      // ArrowRight should not pick itemTopRight because its selector is [data-group="b"]
      expect(coordsA.findNearest('ArrowRight')).toBeUndefined()
      expect(coordsA.findNearest('ArrowDown')).toBe(itemBottomLeft)

      firstGroup.remove()
      secondGroup.remove()
    })

    it('should execute safely in SSR renderToString without browser DOM globals', async () => {
      const active = new FocusDirectionActive(ref<HTMLElement | undefined>(undefined))
      const coordinates = new FocusDirectionCoordinates(active)

      const app = createSSRApp({
        render() {
          const nearest = coordinates.findNearest('ArrowRight')
          return h('div', { 'data-has-nearest': String(Boolean(nearest)) })
        }
      })

      const html = await renderToString(app)
      expect(html).toContain('data-has-nearest="false"')
    })
  })
})
