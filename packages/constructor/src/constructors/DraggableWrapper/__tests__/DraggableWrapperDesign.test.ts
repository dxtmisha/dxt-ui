// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'

import { DraggableWrapperDesign } from '../DraggableWrapperDesign'
import type { DraggableWrapperControl } from '../basicTypes'
import type { DraggableWrapperPropsBasic } from '../props'
import type {
  DraggableWrapperClasses,
  DraggableWrapperComponents,
  DraggableWrapperExpose
} from '../types'

describe('DraggableWrapperDesign', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should mount and render root wrapper element with square element and slot', () => {
      const props = reactive<DraggableWrapperPropsBasic>({})
      const classes = ref<DraggableWrapperClasses>({
        main: { 'my-draggable': true },
        item: 'my-draggable__item',
        square: 'my-draggable__square'
      })

      let exposedValue: DraggableWrapperExpose | undefined
      let designRef: DraggableWrapperDesign<
        DraggableWrapperComponents,
        DraggableWrapperExpose,
        DraggableWrapperClasses,
        DraggableWrapperPropsBasic
      > | undefined

      const InnerComponent = defineComponent({
        setup(_componentProps, { expose }) {
          const design = new DraggableWrapperDesign<
            DraggableWrapperComponents,
            DraggableWrapperExpose,
            DraggableWrapperClasses,
            DraggableWrapperPropsBasic
          >(
            'my.draggableWrapper',
            props,
            { classes: classes as never }
          )

          designRef = design
          exposedValue = design.expose()
          expose(exposedValue)
          return design.render()
        }
      })

      const RootComponent = defineComponent({
        setup() {
          return () => h(
            InnerComponent,
            { 'data-testid': 'draggable-root' },
            {
              default: (control: DraggableWrapperControl) => h('div', { class: control?.className }, 'Draggable Item')
            }
          )
        }
      })

      const container = document.createElement('div')
      document.body.appendChild(container)
      const app = createApp(RootComponent)
      app.mount(container)

      const rootElement = container.querySelector('[data-testid="draggable-root"]')
      expect(rootElement).not.toBeNull()

      const itemElement = rootElement?.querySelector('.my-draggable__item')
      expect(itemElement).not.toBeNull()
      expect(itemElement?.textContent).toBe('Draggable Item')

      const squareElement = rootElement?.querySelector('.my-draggable__square')
      expect(squareElement).not.toBeNull()

      expect(exposedValue?.toNewPosition).toBeTypeOf('function')
      expect(designRef?.renderSquare).toBeTypeOf('function')

      app.unmount()
      container.remove()
    })

    it('should compose external attrs with internal binds via mergeProps', () => {
      const props = reactive<DraggableWrapperPropsBasic>({})
      const externalMouseDown = vi.fn()

      const InnerComponent = defineComponent({
        setup() {
          const design = new DraggableWrapperDesign<
            DraggableWrapperComponents,
            DraggableWrapperExpose,
            DraggableWrapperClasses,
            DraggableWrapperPropsBasic
          >('my.draggableWrapper', props)

          return design.render()
        }
      })

      const RootComponent = defineComponent({
        setup() {
          return () => h(InnerComponent, {
            'data-testid': 'merged-root',
            'class': 'custom-host-class',
            'style': { padding: '8px' },
            'onMousedown': externalMouseDown
          })
        }
      })

      const container = document.createElement('div')
      document.body.appendChild(container)
      const app = createApp(RootComponent)
      app.mount(container)

      const rootElement = container.querySelector<HTMLElement>('[data-testid="merged-root"]')!
      expect(rootElement.classList.contains('custom-host-class')).toBe(true)
      expect(rootElement.style.padding).toBe('8px')

      rootElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      expect(externalMouseDown).toHaveBeenCalledTimes(1)

      app.unmount()
      container.remove()
    })

    it('should correctly expose toNewPosition and reorder arrays', () => {
      const props = reactive<DraggableWrapperPropsBasic>({})

      let exposedValue: DraggableWrapperExpose | undefined

      const InnerComponent = defineComponent({
        setup(_componentProps, { expose }) {
          const design = new DraggableWrapperDesign<
            DraggableWrapperComponents,
            DraggableWrapperExpose,
            DraggableWrapperClasses,
            DraggableWrapperPropsBasic
          >(
            'my.draggableWrapper',
            props
          )

          exposedValue = design.expose()
          expose(exposedValue)
          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(InnerComponent)
      app.mount(container)

      const values = [{ value: '1' }, { value: '2' }, { value: '3' }] as const
      const reordered = exposedValue!.toNewPosition(values, {
        active: document.createElement('div'),
        value: ['1', '3'],
        valueTo: '3',
        valueSelection: ['1'],
        before: false
      })

      expect(reordered.map(item => item.value)).toEqual(['2', '3', '1'])

      app.unmount()
      container.remove()
    })
  })

  describe('Boundary values and custom attributes', () => {
    it('should render custom HTML tag specified in props', () => {
      const props = reactive<DraggableWrapperPropsBasic>({ tag: 'section' })

      const InnerComponent = defineComponent({
        setup() {
          const design = new DraggableWrapperDesign<
            DraggableWrapperComponents,
            DraggableWrapperExpose,
            DraggableWrapperClasses,
            DraggableWrapperPropsBasic
          >(
            'my.draggableWrapper',
            props
          )

          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(InnerComponent)
      app.mount(container)

      expect(container.querySelector('section')).not.toBeNull()

      app.unmount()
      container.remove()
    })
  })
})
