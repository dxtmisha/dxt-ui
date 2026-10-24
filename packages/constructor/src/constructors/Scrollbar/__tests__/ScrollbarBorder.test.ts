// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'

import { ScrollbarBorder } from '../ScrollbarBorder'
import type { ScrollbarProps } from '../props'

/**
 * Configures scroll metrics on a DOM element for deterministic boundary testing.
 *
 * Настраивает метрики скролла на DOM-элементе для детерминированного тестирования границ.
 * @param element target HTML element / целевой HTML-элемент
 * @param metrics scroll metric values / значения метрик скролла
 * @param metrics.scrollTop current vertical scroll offset / текущее вертикальное смещение скролла
 * @param metrics.scrollHeight total scrollable content height / полная высота прокручиваемого контента
 * @param metrics.clientHeight visible container height / видимая высота контейнера
 */
function setScrollMetrics(
  element: HTMLElement,
  metrics: {
    scrollTop: number
    scrollHeight: number
    clientHeight: number
  }
): void {
  Object.defineProperty(element, 'scrollTop', {
    value: metrics.scrollTop,
    writable: true,
    configurable: true
  })
  Object.defineProperty(element, 'scrollHeight', {
    value: metrics.scrollHeight,
    writable: true,
    configurable: true
  })
  Object.defineProperty(element, 'clientHeight', {
    value: metrics.clientHeight,
    writable: true,
    configurable: true
  })
}

describe('ScrollbarBorder', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should evaluate static ScrollbarBorder.is() accurately across all prop combinations', () => {
      expect(ScrollbarBorder.is()).toBe(false)
      expect(ScrollbarBorder.is({})).toBe(false)
      expect(ScrollbarBorder.is({
        divider: false,
        dividerTop: false,
        dividerBottom: false
      })).toBe(false)

      expect(ScrollbarBorder.is({ divider: true })).toBe(true)
      expect(ScrollbarBorder.is({ dividerTop: true })).toBe(true)
      expect(ScrollbarBorder.is({ dividerBottom: true })).toBe(true)
    })

    it('should emit accurate initial edge state without stale undefined bottom flag on mount', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({ divider: true })
      const element = document.createElement('div')
      const child = document.createElement('div')
      element.appendChild(child)
      setScrollMetrics(element, { scrollTop: 0, scrollHeight: 200, clientHeight: 50 })

      const elementRef = ref<HTMLElement | undefined>(element)
      const emits = vi.fn()

      const border = scope.run(() => new ScrollbarBorder(props, elementRef, emits))!
      border.onMounted()

      expect(element.dataset.top).toBe('none')
      expect(element.dataset.bottom).toBe('bottom')
      expect(element.dataset.scrollbarDivider).toBe('divider')

      expect(emits).toHaveBeenCalledWith('top', true)
      expect(emits).toHaveBeenCalledWith('edge', true, false, 'top')
      expect(emits).toHaveBeenCalledWith('reachTop')
      expect(emits).toHaveBeenCalledWith('bottom', false)
      expect(emits).toHaveBeenCalledWith('edge', true, false, 'bottom')
      expect(emits).not.toHaveBeenCalledWith('leaveTop')
      expect(emits).not.toHaveBeenCalledWith('leaveBottom')

      scope.stop()
    })

    it('should update data attributes and emit events across middle, top, and bottom scroll positions', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({ divider: true })
      const element = document.createElement('div')
      const child = document.createElement('div')
      element.appendChild(child)
      setScrollMetrics(element, { scrollTop: 0, scrollHeight: 100, clientHeight: 50 })

      const elementRef = ref<HTMLElement | undefined>(element)
      const emits = vi.fn()

      const border = scope.run(() => new ScrollbarBorder(props, elementRef, emits))!
      border.onMounted()
      emits.mockClear()

      // Scroll to middle (scrollTop = 10 > 8, and 10 < 100 - 50 - 8 = 42)
      element.scrollTop = 10
      // @ts-expect-error invoking protected scroll handler
      border.on()

      expect(element.dataset.top).toBe('top')
      expect(element.dataset.bottom).toBe('bottom')
      expect(element.dataset.scrollbarDivider).toBe('divider')
      expect(emits).toHaveBeenCalledWith('top', false)
      expect(emits).toHaveBeenCalledWith('edge', false, false, 'top')
      expect(emits).toHaveBeenCalledWith('leaveTop')

      // Scroll back to top (scrollTop = 0)
      element.scrollTop = 0
      emits.mockClear()
      // @ts-expect-error invoking protected scroll handler
      border.on()

      expect(element.dataset.top).toBe('none')
      expect(element.dataset.bottom).toBe('bottom')
      expect(emits).toHaveBeenCalledWith('top', true)
      expect(emits).toHaveBeenCalledWith('edge', true, false, 'top')
      expect(emits).toHaveBeenCalledWith('reachTop')

      // Scroll to bottom (scrollTop = 50)
      element.scrollTop = 50
      emits.mockClear()
      // @ts-expect-error invoking protected scroll handler
      border.on()

      expect(element.dataset.top).toBe('top')
      expect(element.dataset.bottom).toBe('none')
      expect(emits).toHaveBeenCalledWith('bottom', true)
      expect(emits).toHaveBeenCalledWith('edge', false, true, 'bottom')
      expect(emits).toHaveBeenCalledWith('reachBottom')

      // Leave bottom back to middle (scrollTop = 10)
      element.scrollTop = 10
      emits.mockClear()
      // @ts-expect-error invoking protected scroll handler
      border.on()

      expect(element.dataset.top).toBe('top')
      expect(element.dataset.bottom).toBe('bottom')
      expect(emits).toHaveBeenCalledWith('bottom', false)
      expect(emits).toHaveBeenCalledWith('edge', false, false, 'bottom')
      expect(emits).toHaveBeenCalledWith('leaveBottom')

      scope.stop()
    })
  })

  describe('Boundary values and limit thresholds (SCROLLBAR_SHIFT = 8)', () => {
    it('should respect exact SCROLLBAR_SHIFT = 8 threshold at top and bottom boundaries', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({ divider: true })
      const element = document.createElement('div')
      // Max scroll = 100 - 50 = 50; bottom threshold = 50 - 8 = 42
      setScrollMetrics(element, { scrollTop: 8, scrollHeight: 100, clientHeight: 50 })

      const elementRef = ref<HTMLElement | undefined>(element)
      const emits = vi.fn()

      const border = scope.run(() => new ScrollbarBorder(props, elementRef, emits))!
      border.onMounted()

      // Exactly at threshold (scrollTop = 8, not > 8): still at top edge
      expect(element.dataset.top).toBe('none')
      expect(element.dataset.bottom).toBe('bottom')

      // Exceeding top threshold by 1 (scrollTop = 9 > 8): leaves top edge
      element.scrollTop = 9
      emits.mockClear()
      // @ts-expect-error invoking protected scroll handler
      border.on()

      expect(element.dataset.top).toBe('top')
      expect(element.dataset.bottom).toBe('bottom')
      expect(emits).toHaveBeenCalledWith('top', false)
      expect(emits).toHaveBeenCalledWith('edge', false, false, 'top')
      expect(emits).toHaveBeenCalledWith('leaveTop')

      // 1px before bottom threshold (scrollTop = 41 < 42): still not at bottom edge
      element.scrollTop = 41
      emits.mockClear()
      // @ts-expect-error invoking protected scroll handler
      border.on()

      expect(element.dataset.bottom).toBe('bottom')
      expect(emits).not.toHaveBeenCalled()

      // Exactly at bottom threshold (scrollTop = 42, not < 42): reaches bottom edge
      element.scrollTop = 42
      emits.mockClear()
      // @ts-expect-error invoking protected scroll handler
      border.on()

      expect(element.dataset.top).toBe('top')
      expect(element.dataset.bottom).toBe('none')
      expect(emits).toHaveBeenCalledWith('bottom', true)
      expect(emits).toHaveBeenCalledWith('edge', false, true, 'bottom')
      expect(emits).toHaveBeenCalledWith('reachBottom')

      scope.stop()
    })

    it('should mark both edges reached and hide divider when content fits inside container without scrolling', () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({ divider: true })
      const element = document.createElement('div')
      setScrollMetrics(element, { scrollTop: 0, scrollHeight: 50, clientHeight: 50 })

      const elementRef = ref<HTMLElement | undefined>(element)
      const emits = vi.fn()

      const border = scope.run(() => new ScrollbarBorder(props, elementRef, emits))!
      border.onMounted()

      expect(element.dataset.top).toBe('none')
      expect(element.dataset.bottom).toBe('none')
      expect(element.dataset.scrollbarDivider).toBe('none')
      expect(emits).toHaveBeenCalledWith('edge', true, true, 'top')
      expect(emits).toHaveBeenCalledWith('edge', true, true, 'bottom')

      scope.stop()
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('should toggle start and stop monitoring depending on divider props and reset dataset on stop', async () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({
        divider: true,
        dividerTop: false,
        dividerBottom: false
      })
      const element = document.createElement('div')
      const child = document.createElement('div')
      element.appendChild(child)
      setScrollMetrics(element, { scrollTop: 20, scrollHeight: 200, clientHeight: 50 })

      const elementRef = ref<HTMLElement | undefined>(element)
      const border = scope.run(() => new ScrollbarBorder(props, elementRef))!
      border.onMounted()

      expect(element.dataset.top).toBe('top')
      expect(element.dataset.bottom).toBe('bottom')
      expect(element.dataset.scrollbarDivider).toBe('divider')

      const stopSpy = vi.spyOn(border, 'stop')
      const startSpy = vi.spyOn(border, 'start')

      props.divider = false
      await nextTick()

      expect(stopSpy).toHaveBeenCalledTimes(1)
      expect(element.dataset.top).toBe('none')
      expect(element.dataset.bottom).toBe('none')
      expect(element.dataset.scrollbarDivider).toBe('none')

      props.dividerTop = true
      await nextTick()

      expect(startSpy).toHaveBeenCalledTimes(1)
      expect(element.dataset.top).toBe('top')
      expect(element.dataset.bottom).toBe('bottom')
      expect(element.dataset.scrollbarDivider).toBe('divider')

      scope.stop()
    })

    it('should update existing EventItem instances on repeated start() calls and stop eventResize when firstChild is absent', async () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({ divider: true })
      const elementWithChild = document.createElement('div')
      elementWithChild.appendChild(document.createElement('div'))

      const elementWithSecondChild = document.createElement('div')
      elementWithSecondChild.appendChild(document.createElement('div'))

      const elementWithoutChild = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(elementWithChild)

      const border = scope.run(() => new ScrollbarBorder(props, elementRef))!
      border.onMounted()

      // @ts-expect-error checking protected property
      expect(border.event).toBeDefined()
      // @ts-expect-error checking protected property
      expect(border.eventResize).toBeDefined()

      // Switch to another element that also has an HTMLElement firstChild (reuses event & eventResize)
      elementRef.value = elementWithSecondChild
      await nextTick()

      // @ts-expect-error checking protected property
      expect(border.event).toBeDefined()
      // @ts-expect-error checking protected property
      expect(border.eventResize).toBeDefined()

      // Switch to an element without a child (stops and clears eventResize)
      elementRef.value = elementWithoutChild
      await nextTick()

      // @ts-expect-error checking protected property
      expect(border.eventResize).toBeUndefined()

      scope.stop()
    })

    it('should safely handle undefined element ref and clean up on onUnmounted', async () => {
      const scope = effectScope()
      const props = reactive<ScrollbarProps>({ divider: true })
      const element = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(undefined)

      const border = scope.run(() => new ScrollbarBorder(props, elementRef))!

      // Calling start() when element.value is undefined should safely no-op
      expect(() => border.start()).not.toThrow()

      elementRef.value = element
      await nextTick()

      const stopSpy = vi.spyOn(border, 'stop')
      elementRef.value = undefined
      await nextTick()
      expect(stopSpy).toHaveBeenCalledTimes(1)

      border.onUnmounted()
      expect(stopSpy).toHaveBeenCalledTimes(2)

      scope.stop()
    })
  })
})
