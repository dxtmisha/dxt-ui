// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'

import { SelectableArea } from '../SelectableArea'
import { SelectableAreaDesign } from '../SelectableAreaDesign'
import type { SelectableAreaControl, SelectableAreaEventParameters } from '../basicTypes'
import type { SelectableAreaPropsBasic } from '../props'
import type {
  SelectableAreaClasses,
  SelectableAreaComponents,
  SelectableAreaExpose
} from '../types'

/**
 * Creates a DOMRect mock for jsdom layout assertions.
 *
 * Создаёт мок DOMRect для проверок геометрии в jsdom.
 * @param left left coordinate / координата left
 * @param top top coordinate / координата top
 * @param width element width / ширина элемента
 * @param height element height / высота элемента
 * @returns DOMRect object / объект DOMRect
 */
function createRect(left: number, top: number, width = 100, height = 40): DOMRect {
  return {
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    x: left,
    y: top,
    toJSON: () => ({})
  }
}

/**
 * Inspectable design subclass exposing the orchestrator for lazy-loading checks.
 *
 * Подкласс дизайна с доступом к оркестратору для проверки ленивой инициализации.
 */
class InspectableSelectableAreaDesign extends SelectableAreaDesign<
  SelectableAreaComponents,
  SelectableAreaExpose,
  SelectableAreaClasses,
  SelectableAreaPropsBasic
> {
  /**
   * Returns the internal orchestrator instance.
   *
   * Возвращает внутренний экземпляр оркестратора.
   * @returns orchestrator instance / экземпляр оркестратора
   */
  getOrchestrator(): SelectableArea {
    return this.item
  }
}

describe('SelectableArea (integration)', () => {
  const mountedApps: Array<{ unmount: () => void, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()!
      entry.unmount()
      entry.container.remove()
    }

    document.body.className = ''
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  const mountSelectableArea = (options: {
    props?: SelectableAreaPropsBasic
    attrs?: Record<string, unknown>
    withEmits?: boolean
  } = {}) => {
    const props = reactive<SelectableAreaPropsBasic>({ ...options.props })
    const classes = ref<SelectableAreaClasses>({
      main: { 'd1-selectableArea': true },
      item: 'd1-selectableArea__item',
      square: 'd1-selectableArea__square'
    })
    const emits = options.withEmits === false ? undefined : vi.fn()
    let designInstance: InspectableSelectableAreaDesign | undefined
    let exposed: SelectableAreaExpose | undefined

    const InnerComponent = defineComponent({
      setup(_componentProps, { expose }) {
        const design = new InspectableSelectableAreaDesign(
          'd1.selectableArea',
          props,
          {
            emits,
            classes: classes as never
          }
        )

        designInstance = design
        exposed = design.expose()
        expose(exposed)
        return design.render()
      }
    })

    const RootComponent = defineComponent({
      setup() {
        return () => h(
          InnerComponent,
          {
            'data-testid': 'selectable-root',
            ...options.attrs
          },
          {
            default: (control: SelectableAreaControl) => ['item-1', 'item-2', 'item-3', 'item-4'].map(value =>
              h(
                'div',
                {
                  'class': [control.className, control.classClick],
                  'data-value': value,
                  'data-testid': value,
                  'onClick': control.onClick
                },
                value
              ))
          }
        )
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(RootComponent)
    app.mount(container)
    mountedApps.push({ unmount: () => app.unmount(), container })

    const rootElement = container.querySelector<HTMLElement>('[data-testid="selectable-root"]')!
    rootElement.getBoundingClientRect = () => createRect(0, 0, 400, 300)

    const itemElements = ['item-1', 'item-2', 'item-3', 'item-4'].map((id, index) => {
      const element = rootElement.querySelector<HTMLElement>(`[data-testid="${id}"]`)!
      element.getBoundingClientRect = () => createRect(index * 100, 50, 80, 40)
      return element
    })

    const squareElement = rootElement.querySelector<HTMLElement>('.d1-selectableArea__square')!

    return {
      app,
      container,
      props,
      emits,
      design: designInstance!,
      orchestrator: designInstance!.getOrchestrator(),
      exposed: exposed!,
      rootElement,
      itemElements,
      squareElement
    }
  }

  describe('DOM rendering, initial selection, and lazy instantiation', () => {
    it('should render root element, slot items, decorative square, and apply initial selected classes', () => {
      const { orchestrator, rootElement, itemElements, squareElement } = mountSelectableArea({
        props: { selected: ['item-2', 'item-4'] }
      })

      expect(rootElement.tagName).toBe('DIV')
      expect(rootElement.classList.contains('d1-selectableArea')).toBe(true)
      expect(itemElements).toHaveLength(4)
      expect(squareElement).not.toBeNull()
      expect(squareElement.getAttribute('aria-hidden')).toBe('true')

      expect(itemElements[0].classList.contains('d1-selectableArea__item--selected')).toBe(false)
      expect(itemElements[1].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[2].classList.contains('d1-selectableArea__item--selected')).toBe(false)
      expect(itemElements[3].classList.contains('d1-selectableArea__item--selected')).toBe(true)

      expect(orchestrator.hasInstance('emit')).toBe(true)
    })

    it('should skip SelectableAreaEmit instantiation when emits callback is not provided', () => {
      const { orchestrator } = mountSelectableArea({ withEmits: false })

      expect(orchestrator.hasInstance('emit')).toBe(false)
      expect(orchestrator.hasInstance('classesData')).toBe(true)
      expect(orchestrator.hasInstance('events')).toBe(true)
      expect(orchestrator.hasInstance('item')).toBe(true)
      expect(orchestrator.hasInstance('square')).toBe(true)
    })
  })

  describe('Click, Meta, Shift, Active, Disabled, and Expose workflows', () => {
    it('should handle click, meta-toggle, shift-range, expose setSelected/reset, and emit selected + v-model', async () => {
      vi.useFakeTimers()
      const { itemElements, emits, exposed } = mountSelectableArea()

      // 1. Single click selects item-1
      itemElements[0].dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      vi.advanceTimersByTime(16)

      expect(itemElements[0].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(emits).toHaveBeenCalledWith('update:selected', ['item-1'])
      expect(emits).toHaveBeenCalledWith('selected', expect.objectContaining<Partial<SelectableAreaEventParameters>>({
        selected: ['item-1'],
        focus: 'item-1'
      }))

      // 2. Shift-click selects range item-1..item-3
      itemElements[2].dispatchEvent(new MouseEvent('click', { bubbles: true, shiftKey: true }))
      await nextTick()
      vi.advanceTimersByTime(16)

      expect(itemElements[0].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[1].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[2].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[3].classList.contains('d1-selectableArea__item--selected')).toBe(false)

      // 3. Meta-click toggles item-2 off
      itemElements[1].dispatchEvent(new MouseEvent('click', { bubbles: true, metaKey: true }))
      await nextTick()
      vi.advanceTimersByTime(16)

      expect(itemElements[1].classList.contains('d1-selectableArea__item--selected')).toBe(false)
      expect(emits).toHaveBeenLastCalledWith('selected', expect.objectContaining({
        selected: ['item-1', 'item-3'],
        focus: 'item-3'
      }))

      // 4. Expose setSelected and reset
      exposed.setSelected(['item-4'])
      await nextTick()
      expect(itemElements[3].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[0].classList.contains('d1-selectableArea__item--selected')).toBe(false)

      exposed.reset()
      await nextTick()
      expect(itemElements.every(element => !element.classList.contains('d1-selectableArea__item--selected'))).toBe(true)
    })

    it('should toggle items continuously in active mode and ignore clicks when disabled', async () => {
      const { props, itemElements } = mountSelectableArea({ props: { active: true } })

      itemElements[0].dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      itemElements[2].dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()

      expect(itemElements[0].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[2].classList.contains('d1-selectableArea__item--selected')).toBe(true)

      props.disabled = true
      await nextTick()

      itemElements[1].dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()
      expect(itemElements[1].classList.contains('d1-selectableArea__item--selected')).toBe(false)
    })
  })

  describe('Square drag selection & unmount/blur cleanup', () => {
    it('should select intersecting items by dragging square and emit final selection', async () => {
      vi.useFakeTimers()
      const { rootElement, itemElements, squareElement, emits } = mountSelectableArea()

      // Mock square bounding rect matching dragged region covering item-1 (0..80) and item-2 (100..180)
      squareElement.getBoundingClientRect = () => createRect(10, 40, 150, 60)

      rootElement.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        button: 0,
        clientX: 10,
        clientY: 40
      }))

      expect(squareElement.classList.contains('d1-selectableArea__square--show')).toBe(true)
      expect(document.body.classList.contains('d1-selectableArea__blockSelection')).toBe(true)

      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 160, clientY: 100 }))
      vi.advanceTimersByTime(16)
      await nextTick()

      expect(itemElements[0].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[1].classList.contains('d1-selectableArea__item--selected')).toBe(true)
      expect(itemElements[2].classList.contains('d1-selectableArea__item--selected')).toBe(false)

      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0, cancelable: true }))
      await nextTick()
      vi.advanceTimersByTime(16)

      expect(squareElement.classList.contains('d1-selectableArea__square--show')).toBe(false)
      expect(document.body.classList.contains('d1-selectableArea__blockSelection')).toBe(false)
      expect(emits).toHaveBeenCalledWith('selected', expect.objectContaining({
        selected: ['item-1', 'item-2'],
        focus: 'item-2'
      }))
    })

    it('should clean up body selection lock, window listeners, and pending emits when unmounted mid-drag', () => {
      vi.useFakeTimers()
      const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
      const { app, container, orchestrator, rootElement, squareElement, emits } = mountSelectableArea()

      rootElement.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        button: 0,
        clientX: 15,
        clientY: 15
      }))

      expect(document.body.classList.contains('d1-selectableArea__blockSelection')).toBe(true)
      expect(squareElement.classList.contains('d1-selectableArea__square--show')).toBe(true)

      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 80, clientY: 80 }))

      // Unmount mid-drag before rAF fires
      app.unmount()
      container.remove()
      mountedApps.pop()

      expect(document.body.classList.contains('d1-selectableArea__blockSelection')).toBe(false)
      expect(squareElement.isConnected).toBe(false)
      expect(orchestrator.i('square').getSelectedCurrent()).toEqual([])
      expect(removeListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function))

      vi.advanceTimersByTime(100)
      expect(emits).not.toHaveBeenCalled()
    })
  })
})
