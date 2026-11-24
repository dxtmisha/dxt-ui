// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createApp,
  defineComponent,
  h,
  inject,
  nextTick,
  reactive,
  type PropType,
  type VNode
} from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { COLLAGE_NAME_UPDATE, type CollageUpdate } from '../basicTypes'
import { Collage } from '../Collage'
import { CollageDesign } from '../CollageDesign'
import type { CollageProps } from '../props'
import type {
  CollageClasses,
  CollageComponents,
  CollageEmits,
  CollageExpose,
  CollageSlots
} from '../types'

/** Cleanup handlers for mounted test Vue apps / Обработчики очистки смонтированных тестовых приложений Vue */
const mountedCleanups: Array<() => void> = []

/** Last injected update callback captured from a child CollageItem / Последний внедрённый коллбэк обновления, полученный дочерним CollageItem */
let capturedChildUpdate: CollageUpdate | undefined

/** Stub CollageItem component mirroring D1CollageItem / Заглушка компонента CollageItem, имитирующая D1CollageItem */
const stubCollageItem = defineComponent({
  name: 'StubCollageItem',
  props: {
    value: { type: [String, Number], default: undefined },
    label: { type: String, default: undefined },
    selected: { type: Boolean, default: false },
    tabindex: { type: Number, default: undefined },
    width: { type: [String, Number], default: undefined },
    height: { type: [String, Number], default: undefined },
    onClick: {
      type: [Function, Array] as PropType<
        ((event: MouseEvent, options?: Record<string, unknown>) => void)
        | Array<(event: MouseEvent, options?: Record<string, unknown>) => void>
      >,
      default: undefined
    }
  },
  setup(props, { attrs }) {
    const parentUpdate = inject<CollageUpdate | undefined>(COLLAGE_NAME_UPDATE, undefined)
    capturedChildUpdate = parentUpdate

    const handleClick = (event: MouseEvent) => {
      const payload = {
        type: 'click',
        value: props.value,
        detail: undefined
      }

      if (Array.isArray(props.onClick)) {
        props.onClick.forEach(handler => handler(event, payload))
      } else {
        props.onClick?.(event, payload)
      }
    }

    return () => h(
      'figure',
      {
        ...attrs,
        'id': props.value !== undefined ? `collage-item-${props.value}` : undefined,
        'class': [
          attrs.class,
          'd1-collageItem',
          props.selected ? 'd1-collageItem--selected' : undefined
        ],
        'data-collage-item': 'true',
        'data-value': props.value !== undefined ? String(props.value) : undefined,
        'data-selected': String(props.selected),
        'data-width': props.width !== undefined ? String(props.width) : undefined,
        'data-height': props.height !== undefined ? String(props.height) : undefined,
        'tabindex': props.tabindex,
        'onClick': handleClick
      },
      props.label ?? String(props.value ?? '')
    )
  }
})

/**
 * Mounts CollageDesign into a real DOM container attached to document.body.
 *
 * Монтирует CollageDesign в реальный DOM-контейнер, прикреплённый к document.body.
 */
function mountCollage(
  initialProps: CollageProps = {},
  options: {
    attrs?: Record<string, unknown>
    slots?: CollageSlots
    emits?: ConstrEmit<CollageEmits>
  } = {}
) {
  const props = reactive<CollageProps>({ ...initialProps })
  const emits = options.emits ?? (vi.fn() as unknown as ConstrEmit<CollageEmits>)
  let capturedLogic!: Collage
  let exposed!: CollageExpose

  class TestCollageDesign extends CollageDesign<
    CollageComponents,
    CollageExpose,
    CollageClasses,
    CollageProps
  > {
    getLogic(): Collage {
      return this.item
    }
  }

  const Host = defineComponent({
    name: 'TestCollageHost',
    setup() {
      const design = new TestCollageDesign(
        'd1.collage',
        props,
        {
          emits,
          components: {
            collageItem: stubCollageItem
          }
        }
      )

      capturedLogic = design.getLogic()
      exposed = design.expose()
      const render = design.render()

      return () => render() as VNode
    }
  })

  const Wrapper = defineComponent({
    name: 'TestCollageWrapper',
    setup() {
      return () => h(Host, options.attrs ?? {}, options.slots ? { ...options.slots } as Record<string, unknown> : undefined)
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)

  const app = createApp(Wrapper)
  app.mount(container)

  const unmount = () => {
    app.unmount()
    container.remove()
  }

  mountedCleanups.push(unmount)

  return {
    container,
    props,
    emits,
    logic: capturedLogic,
    exposed,
    unmount
  }
}

describe('Collage (component integration)', () => {
  afterEach(() => {
    while (mountedCleanups.length > 0) {
      mountedCleanups.pop()?.()
    }
    capturedChildUpdate = undefined
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('DOM hierarchy, classes, styles, and slot projection', () => {
    it('should render root and body BEM structure, merge external attrs, and project default slot', () => {
      const { container, logic } = mountCollage(
        {
          variant: 'standard',
          cellSize: 220
        },
        {
          attrs: {
            'class': 'external-gallery',
            'data-testid': 'collage-root'
          },
          slots: {
            default: () => [h('div', { class: 'custom-slot-item' }, 'Slot Content')]
          }
        }
      )

      const root = container.firstElementChild as HTMLElement
      const body = root.querySelector('.d1-collage__body') as HTMLElement
      const slotElement = body.querySelector('.custom-slot-item') as HTMLElement

      expect(root.tagName).toBe('DIV')
      expect(root.classList.contains('external-gallery')).toBe(true)
      expect(root.getAttribute('data-testid')).toBe('collage-root')
      expect(root.style.getPropertyValue('--d1-collage-cell-size')).toBe('220px')
      expect(body).not.toBeNull()
      expect(slotElement.textContent).toBe('Slot Content')

      // Confirm lazy dependencies remain unallocated for standard slot-only mode
      expect(logic.hasInstance('data')).toBe(false)
      expect(logic.hasInstance('variant')).toBe(false)
      expect(logic.hasInstance('focusDirection')).toBe(false)
      expect(logic.hasInstance('woven')).toBe(false)
      expect(logic.hasInstance('grow')).toBe(false)
    })

    it('should reactively update --d1-collage-cell-size when cellSize changes', async () => {
      const { container, props } = mountCollage({ cellSize: 160 })
      const root = container.firstElementChild as HTMLElement

      expect(root.style.getPropertyValue('--d1-collage-cell-size')).toBe('160px')

      props.cellSize = '15rem'
      await nextTick()
      expect(root.style.getPropertyValue('--d1-collage-cell-size')).toBe('15rem')

      props.cellSize = undefined
      await nextTick()
      expect(root.style.getPropertyValue('--d1-collage-cell-size')).toBe('')
    })
  })

  describe('Images rendering, selection model, and click interactions', () => {
    it('should render CollageItem children, toggle multi-selection in control mode, and emit events', async () => {
      const emits = vi.fn() as unknown as ConstrEmit<CollageEmits>
      const { container, props } = mountCollage(
        {
          control: true,
          selected: ['photo-1'],
          images: [
            { value: 'photo-1', label: 'Photo 1' },
            { value: 'photo-2', label: 'Photo 2' }
          ]
        },
        { emits }
      )

      const items = Array.from(container.querySelectorAll<HTMLElement>('[data-collage-item]'))
      expect(items).toHaveLength(2)
      expect(items[0].getAttribute('data-selected')).toBe('true')
      expect(items[1].getAttribute('data-selected')).toBe('false')
      expect(items[0].getAttribute('tabindex')).toBe('-1')

      // Click second item -> adds to selection
      items[1].click()
      await nextTick()

      expect(emits).toHaveBeenCalledWith('update:selected', ['photo-1', 'photo-2'])
      expect(emits).toHaveBeenCalledWith('update:modelSelected', ['photo-1', 'photo-2'])
      expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), {
        type: 'click',
        value: 'photo-2',
        detail: undefined
      })
      expect(items[1].getAttribute('data-selected')).toBe('true')

      // External reactive modelSelected update
      props.modelSelected = ['photo-2']
      await nextTick()
      expect(items[0].getAttribute('data-selected')).toBe('false')
      expect(items[1].getAttribute('data-selected')).toBe('true')
    })

    it('should provide COLLAGE_NAME_UPDATE synchronously to descendant CollageItem components', () => {
      const { logic } = mountCollage({
        variant: 'standard',
        images: [{ value: 'photo-1', label: 'Photo 1' }]
      })

      expect(typeof capturedChildUpdate).toBe('function')
      expect(capturedChildUpdate).toBe(logic.update)
    })
  })

  describe('Keyboard directional focus navigation (control mode)', () => {
    it('should activate focus navigation on root focus and move focus across items with ArrowRight and Enter', async () => {
      const emits = vi.fn() as unknown as ConstrEmit<CollageEmits>
      const { container } = mountCollage(
        {
          control: true,
          selected: ['item-1'],
          images: [
            { value: 'item-1', label: 'Item 1' },
            { value: 'item-2', label: 'Item 2' }
          ]
        },
        { emits }
      )

      const root = container.firstElementChild as HTMLElement
      const items = Array.from(container.querySelectorAll<HTMLElement>('[data-collage-item]'))

      items[0].getBoundingClientRect = () => ({
        left: 0,
        top: 0,
        width: 100,
        height: 100,
        right: 100,
        bottom: 100,
        x: 0,
        y: 0,
        toJSON: () => ({})
      })
      items[1].getBoundingClientRect = () => ({
        left: 120,
        top: 0,
        width: 100,
        height: 100,
        right: 220,
        bottom: 100,
        x: 120,
        y: 0,
        toJSON: () => ({})
      })
      items[1].scrollIntoView = vi.fn()

      expect(root.getAttribute('tabindex')).toBe('0')

      root.dispatchEvent(new FocusEvent('focus'))
      await nextTick()
      expect(items[0].classList.contains('d1-collageItem--focus')).toBe(true)
      expect(root.getAttribute('aria-activedescendant')).toBe('collage-item-item-1')

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      await nextTick()
      expect(items[0].classList.contains('d1-collageItem--focus')).toBe(false)
      expect(items[1].classList.contains('d1-collageItem--focus')).toBe(true)
      expect(root.getAttribute('aria-activedescendant')).toBe('collage-item-item-2')

      // IME composing must be ignored
      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true }))
      await nextTick()
      expect(emits).not.toHaveBeenCalled()

      // Real Enter activates click on focused item
      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
      await nextTick()
      expect(emits).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: 'item-2',
        detail: undefined
      })

      root.dispatchEvent(new FocusEvent('blur'))
      await nextTick()
      expect(items[1].classList.contains('d1-collageItem--focus')).toBe(false)
    })
  })

  describe('Dynamic layout variants and reactive transitions', () => {
    it('should activate woven layout on reactive switch from standard and clean up when returning to standard', async () => {
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        callback(0)
        return 1
      })

      const { container, props, logic } = mountCollage({
        variant: 'standard',
        images: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' }
        ]
      })

      const items = Array.from(container.querySelectorAll<HTMLElement>('[data-collage-item]'))
      items.forEach((item, index) => {
        Object.defineProperty(item, 'offsetLeft', {
          value: (index % 2) * 120,
          configurable: true
        })
      })

      expect(logic.hasInstance('variant')).toBe(false)
      expect(logic.hasInstance('woven')).toBe(false)

      // Switch to woven -> activates CollageVariant via conditions and computes compact chessboard
      props.variant = 'woven'
      await nextTick()

      expect(logic.hasInstance('variant')).toBe(true)
      expect(logic.hasInstance('woven')).toBe(true)
      expect(logic.hasInstance('grow')).toBe(false)
      expect(items.map(item => item.classList.contains('d1-collageItem--compact'))).toEqual([
        false,
        true,
        true,
        false
      ])

      // Switch back to standard -> clears compact classes
      props.variant = 'standard'
      await nextTick()

      expect(items.every(item => !item.classList.contains('d1-collageItem--compact'))).toBe(true)
    })

    it('should compute horizontal masonry grow factors and clean up on unmount without stale frame writes', async () => {
      let pendingFrame: FrameRequestCallback | undefined
      const cancelSpy = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {
        pendingFrame = undefined
      })
      vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
        pendingFrame = callback
        return 42
      })

      const { container, logic, exposed, unmount } = mountCollage({
        variant: 'masonryHorizontal',
        images: [
          { value: '1', label: '1', width: 2 } as Record<string, unknown>,
          { value: '2', label: '2', width: 2 } as Record<string, unknown>,
          { value: '3', label: '3', width: 6 } as Record<string, unknown>
        ]
      })

      const items = Array.from(container.querySelectorAll<HTMLElement>('[data-collage-item]'))
      Object.defineProperty(items[0], 'offsetTop', { value: 0, configurable: true })
      Object.defineProperty(items[0], 'offsetHeight', { value: 50, configurable: true })
      Object.defineProperty(items[1], 'offsetTop', { value: 0, configurable: true })
      Object.defineProperty(items[1], 'offsetHeight', { value: 50, configurable: true })
      Object.defineProperty(items[2], 'offsetTop', { value: 100, configurable: true })
      Object.defineProperty(items[2], 'offsetHeight', { value: 50, configurable: true })

      expect(logic.hasInstance('masonryHorizontal')).toBe(true)
      expect(pendingFrame).toBeDefined()

      // Execute frame -> row 0 (sum 4 vs max 6) distributes grow +1 to each item
      pendingFrame?.(0)
      expect(items[0].style.getPropertyValue('--d1-collage-sys-item-grow')).toBe('1')
      expect(items[1].style.getPropertyValue('--d1-collage-sys-item-grow')).toBe('1')
      expect(items[2].style.getPropertyValue('--d1-collage-sys-item-grow')).toBe('')

      // Schedule a new update then immediately unmount -> pending rAF must be cancelled
      exposed.update()
      unmount()
      expect(cancelSpy).toHaveBeenCalledWith(42)
      expect(items[0].style.getPropertyValue('--d1-collage-sys-item-grow')).toBe('')
    })
  })
})
