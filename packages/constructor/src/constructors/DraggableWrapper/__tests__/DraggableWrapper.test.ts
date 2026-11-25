// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import * as functionalBasic from '@dxtmisha/functional-basic'

import { DraggableWrapper } from '../DraggableWrapper'
import { DraggableWrapperDesign } from '../DraggableWrapperDesign'
import type { DraggableWrapperControl, DraggableWrapperEventParameters } from '../basicTypes'
import type { DraggableWrapperPropsBasic } from '../props'
import type {
  DraggableWrapperClasses,
  DraggableWrapperComponents,
  DraggableWrapperExpose
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
class InspectableDraggableWrapperDesign extends DraggableWrapperDesign<
  DraggableWrapperComponents,
  DraggableWrapperExpose,
  DraggableWrapperClasses,
  DraggableWrapperPropsBasic
> {
  /**
   * Returns the internal orchestrator instance.
   *
   * Возвращает внутренний экземпляр оркестратора.
   * @returns orchestrator instance / экземпляр оркестратора
   */
  getOrchestrator(): DraggableWrapper {
    return this.item
  }
}

describe('DraggableWrapper (integration)', () => {
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

  const mountDraggable = (options: {
    props?: DraggableWrapperPropsBasic
    attrs?: Record<string, unknown>
    useChildHandle?: boolean
    includeDropZone?: boolean
    selectedIndices?: number[]
  } = {}) => {
    const props = reactive<DraggableWrapperPropsBasic>({
      ...options.props
    })
    const classes = ref<DraggableWrapperClasses>({
      main: { 'd1-draggableWrapper': true },
      item: 'd1-draggableWrapper__item',
      square: 'd1-draggableWrapper__square'
    })
    const emits = vi.fn()
    let designInstance: InspectableDraggableWrapperDesign | undefined
    let exposed: DraggableWrapperExpose | undefined

    const InnerComponent = defineComponent({
      setup(_componentProps, { expose }) {
        const design = new InspectableDraggableWrapperDesign(
          'd1.draggableWrapper',
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
            'data-testid': 'draggable-root',
            ...options.attrs
          },
          {
            default: (control: DraggableWrapperControl) => {
              const items = ['item-1', 'item-2', 'item-3'].map((value, index) => {
                const isSelected = options.selectedIndices?.includes(index)
                const itemClasses = [
                  control.className,
                  control.classPosition,
                  options.useChildHandle ? undefined : control.classClick,
                  isSelected ? 'd1-draggableWrapper__item--selected' : undefined
                ].filter(Boolean)

                return h(
                  'div',
                  {
                    'class': itemClasses,
                    'data-value': value,
                    'data-testid': value
                  },
                  options.useChildHandle
                    ? [
                        h('span', { 'class': control.classClick, 'data-testid': `handle-${value}` }, '☰'),
                        h('span', { 'data-testid': `text-${value}` }, value)
                      ]
                    : value
                )
              })

              if (options.includeDropZone) {
                items.push(
                  h('div', {
                    'class': [control.className, control.classDrop],
                    'data-value': 'zone-trash',
                    'data-testid': 'zone-trash'
                  }, 'Drop Zone')
                )
              }

              return items
            }
          }
        )
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(RootComponent)
    app.mount(container)
    mountedApps.push({ unmount: () => app.unmount(), container })

    const rootElement = container.querySelector<HTMLElement>('[data-testid="draggable-root"]')!
    rootElement.getBoundingClientRect = () => createRect(0, 0, 300, 300)

    const itemElements = ['item-1', 'item-2', 'item-3'].map((id, index) => {
      const element = rootElement.querySelector<HTMLElement>(`[data-testid="${id}"]`)!
      element.getBoundingClientRect = () => createRect(0, index * 50, 200, 40)
      return element
    })

    const squareElement = rootElement.querySelector<HTMLElement>('.d1-draggableWrapper__square')!
    squareElement.getBoundingClientRect = () => createRect(0, 100, 200, 40)

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

  describe('DOM rendering, mergeProps, and lazy instantiation', () => {
    it('should render root element, slot items, square placeholder, and keep non-render helpers lazy', () => {
      const { orchestrator, rootElement, itemElements, squareElement } = mountDraggable()

      expect(rootElement.tagName).toBe('DIV')
      expect(rootElement.classList.contains('d1-draggableWrapper')).toBe(true)
      expect(itemElements).toHaveLength(3)
      expect(squareElement).not.toBeNull()

      // Rendered dependencies are created, drag-only dependencies stay lazy
      expect(orchestrator.hasInstance('classesData')).toBe(true)
      expect(orchestrator.hasInstance('events')).toBe(true)
      expect(orchestrator.hasInstance('square')).toBe(true)

      expect(orchestrator.hasInstance('delay')).toBe(false)
      expect(orchestrator.hasInstance('client')).toBe(false)
      expect(orchestrator.hasInstance('item')).toBe(false)
      expect(orchestrator.hasInstance('itemActive')).toBe(false)
      expect(orchestrator.hasInstance('itemFocus')).toBe(false)
      expect(orchestrator.hasInstance('itemGo')).toBe(false)
      expect(orchestrator.hasInstance('itemSelection')).toBe(false)
      expect(orchestrator.hasInstance('position')).toBe(false)
      expect(orchestrator.hasInstance('selection')).toBe(false)
      expect(orchestrator.hasInstance('emit')).toBe(false)
    })

    it('should merge external attrs (class, style, onMousedown) via mergeProps without overwriting', () => {
      const externalMouseDown = vi.fn()
      const { rootElement, itemElements } = mountDraggable({
        props: { delay: 0 },
        attrs: {
          class: 'external-wrapper-class',
          style: { zIndex: '5' },
          onMousedown: externalMouseDown
        }
      })

      expect(rootElement.classList.contains('d1-draggableWrapper')).toBe(true)
      expect(rootElement.classList.contains('external-wrapper-class')).toBe(true)
      expect(rootElement.style.zIndex).toBe('5')

      itemElements[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }))
      expect(externalMouseDown).toHaveBeenCalledTimes(1)
    })

    it('should reactively toggle disabled class and custom HTML tag', async () => {
      const { props, rootElement } = mountDraggable({ props: { tag: 'ul', disabled: false } })

      expect(rootElement.tagName).toBe('UL')
      expect(rootElement.classList.contains('d1-draggableWrapper--disabled')).toBe(false)

      props.disabled = true
      await nextTick()
      expect(rootElement.classList.contains('d1-draggableWrapper--disabled')).toBe(true)
    })
  })

  describe('Full drag-and-drop sorting and drop-zone flows', () => {
    it('should complete a full sorting cycle with delay=0, reorder DOM, emit position, and clean up', () => {
      vi.useFakeTimers()
      const { rootElement, itemElements, squareElement, emits, exposed } = mountDraggable({
        props: { delay: 0 }
      })

      vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([itemElements[2], rootElement])

      // 1. Start drag on item-1
      itemElements[0].dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        button: 0,
        clientX: 20,
        clientY: 15
      }))

      // delay: 0 starts immediately on 0ms timer
      vi.advanceTimersByTime(0)

      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(true)
      expect(squareElement.classList.contains('d1-draggableWrapper__square--show')).toBe(true)
      expect(document.body.classList.contains('d1-draggableWrapper__blockSelection')).toBe(true)

      // 2. Move pointer over item-3
      window.dispatchEvent(new MouseEvent('mousemove', {
        buttons: 1,
        clientX: 25,
        clientY: 120
      }))
      vi.advanceTimersByTime(16)

      // 3. Release mouse -> enters return transition
      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0 }))
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--return')).toBe(true)

      // 4. Finish transition -> reorders DOM & schedules emit
      itemElements[0].dispatchEvent(new TransitionEvent('transitionend', {
        bubbles: true,
        propertyName: 'transform'
      }))

      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(false)
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--return')).toBe(false)
      expect(squareElement.classList.contains('d1-draggableWrapper__square--show')).toBe(false)
      expect(document.body.classList.contains('d1-draggableWrapper__blockSelection')).toBe(false)

      // 5. Emit fires after 240ms
      vi.advanceTimersByTime(240)
      expect(emits).toHaveBeenCalledTimes(1)
      const [eventName, parameters] = emits.mock.calls[0] as [string, DraggableWrapperEventParameters]
      expect(eventName).toBe('position')
      expect(parameters.valueActive).toBe('item-1')
      expect(parameters.valueTo).toBe('item-3')
      expect(parameters.valueSelection).toEqual(['item-1'])

      const reordered = exposed.toNewPosition(
        [{ value: 'item-1' }, { value: 'item-2' }, { value: 'item-3' }],
        parameters
      )
      expect(reordered.map(item => item.value)).toEqual(['item-2', 'item-3', 'item-1'])
    })

    it('should drag the owning item element (not the handle span) when classClick is on a child drag handle', () => {
      vi.useFakeTimers()
      const { rootElement, itemElements, emits } = mountDraggable({
        props: { delay: 0 },
        useChildHandle: true
      })

      const handle = rootElement.querySelector<HTMLElement>('[data-testid="handle-item-1"]')!
      const nonHandleText = rootElement.querySelector<HTMLElement>('[data-testid="text-item-1"]')!

      // Clicking outside handle does NOT initiate drag
      nonHandleText.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }))
      vi.advanceTimersByTime(0)
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(false)

      // Clicking on child handle initiates drag on the parent item element
      vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([itemElements[2], rootElement])

      handle.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        button: 0,
        clientX: 10,
        clientY: 10
      }))
      vi.advanceTimersByTime(0)

      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(true)
      expect(handle.classList.contains('d1-draggableWrapper__item--active')).toBe(false)

      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 20, clientY: 120 }))
      vi.advanceTimersByTime(16)
      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0 }))

      itemElements[0].dispatchEvent(new TransitionEvent('transitionend', {
        bubbles: true,
        propertyName: 'transform'
      }))

      // Handle remains intact inside its owning item element
      expect(itemElements[0].contains(handle)).toBe(true)

      vi.advanceTimersByTime(240)
      expect(emits).toHaveBeenCalledWith('position', expect.objectContaining({
        active: itemElements[0],
        valueActive: 'item-1',
        valueTo: 'item-3',
        valueSelection: ['item-1']
      }))
    })

    it('should complete multiselection drag without stripping --active from activeElement before transitionend', () => {
      vi.useFakeTimers()
      const { rootElement, itemElements, squareElement, emits } = mountDraggable({
        props: { delay: 0 },
        selectedIndices: [0, 1]
      })

      vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([itemElements[2], rootElement])

      itemElements[0].dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        button: 0,
        clientX: 20,
        clientY: 15
      }))
      vi.advanceTimersByTime(0)

      // Both item-1 (active) and item-2 (secondary selection) are active during drag
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(true)
      expect(itemElements[1].classList.contains('d1-draggableWrapper__item--active')).toBe(true)
      expect(itemElements[1].classList.contains('d1-draggableWrapper__item--selection')).toBe(true)

      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 25, clientY: 120 }))
      vi.advanceTimersByTime(16)
      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0 }))

      // Critical P1-2 check: activeElement MUST keep --active and --return while secondary selection cleans up
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(true)
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--return')).toBe(true)
      expect(itemElements[1].classList.contains('d1-draggableWrapper__item--selection')).toBe(false)

      itemElements[0].dispatchEvent(new TransitionEvent('transitionend', {
        bubbles: true,
        propertyName: 'transform'
      }))

      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(false)
      expect(squareElement.classList.contains('d1-draggableWrapper__square--show')).toBe(false)
      expect(document.body.classList.contains('d1-draggableWrapper__blockSelection')).toBe(false)

      vi.advanceTimersByTime(240)
      expect(emits).toHaveBeenCalledWith('position', expect.objectContaining({
        valueActive: 'item-1',
        valueTo: 'item-3',
        valueSelection: ['item-1', 'item-2']
      }))
    })

    it('should emit drop event when released over a drop zone', () => {
      vi.useFakeTimers()
      const { rootElement, itemElements, emits } = mountDraggable({
        props: { delay: 0 },
        includeDropZone: true
      })

      const dropZone = rootElement.querySelector<HTMLElement>('[data-testid="zone-trash"]')!
      vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([dropZone, rootElement])

      itemElements[0].dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        button: 0,
        clientX: 15,
        clientY: 15
      }))
      vi.advanceTimersByTime(0)

      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 50, clientY: 200 }))
      vi.advanceTimersByTime(16)
      expect(dropZone.classList.contains('d1-draggableWrapper__drop--active')).toBe(true)

      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0 }))
      expect(dropZone.classList.contains('d1-draggableWrapper__drop--active')).toBe(false)
      expect(document.body.classList.contains('d1-draggableWrapper__blockSelection')).toBe(false)

      vi.advanceTimersByTime(240)
      expect(emits).toHaveBeenCalledWith('drop', expect.objectContaining({
        valueActive: 'item-1',
        valueTo: 'zone-trash'
      }))
    })
  })

  describe('Lifecycle teardown, cancellation, and edge cases', () => {
    it('should abort cleanly on unmount mid-drag without leaking blockSelection or emitting phantom drop', () => {
      vi.useFakeTimers()
      const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
      const { app, container, rootElement, itemElements, emits } = mountDraggable({
        props: { delay: 0 },
        includeDropZone: true
      })

      const dropZone = rootElement.querySelector<HTMLElement>('[data-testid="zone-trash"]')!
      vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([dropZone, rootElement])

      itemElements[0].dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        button: 0,
        clientX: 15,
        clientY: 15
      }))
      vi.advanceTimersByTime(0)

      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 50, clientY: 200 }))
      vi.advanceTimersByTime(16)
      expect(document.body.classList.contains('d1-draggableWrapper__blockSelection')).toBe(true)

      // Unmount while actively hovering over drop zone
      app.unmount()
      container.remove()
      mountedApps.pop()

      expect(document.body.classList.contains('d1-draggableWrapper__blockSelection')).toBe(false)
      expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
      expect(removeListenerSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function))

      vi.advanceTimersByTime(500)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should cancel pending 240ms emit timer when unmounted right after drop', () => {
      vi.useFakeTimers()
      const { app, container, rootElement, itemElements, emits } = mountDraggable({
        props: { delay: 0 },
        includeDropZone: true
      })

      const dropZone = rootElement.querySelector<HTMLElement>('[data-testid="zone-trash"]')!
      vi.spyOn(functionalBasic, 'domElementsFromPoint').mockReturnValue([dropZone, rootElement])

      itemElements[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, button: 0 }))
      vi.advanceTimersByTime(0)
      window.dispatchEvent(new MouseEvent('mousemove', { buttons: 1, clientX: 50, clientY: 200 }))
      vi.advanceTimersByTime(16)
      window.dispatchEvent(new MouseEvent('mouseup', { buttons: 0 }))

      // Unmount after 50ms (before 240ms emit fires)
      vi.advanceTimersByTime(50)
      app.unmount()
      container.remove()
      mountedApps.pop()

      vi.advanceTimersByTime(500)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should ignore right-click (button !== 0) and stop drag on window blur', () => {
      vi.useFakeTimers()
      const { itemElements } = mountDraggable({ props: { delay: 0 } })

      // Right-click ignored
      itemElements[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 2 }))
      vi.advanceTimersByTime(0)
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(false)

      // Primary click starts drag, window blur cancels it
      itemElements[0].dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, button: 0 }))
      vi.advanceTimersByTime(0)
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--active')).toBe(true)

      window.dispatchEvent(new Event('blur'))
      expect(itemElements[0].classList.contains('d1-draggableWrapper__item--return')).toBe(true)
    })
  })
})
