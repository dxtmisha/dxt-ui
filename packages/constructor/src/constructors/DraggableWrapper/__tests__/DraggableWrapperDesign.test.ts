// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'

import { DraggableWrapperDesign } from '../DraggableWrapperDesign'
import type { DraggableWrapperPropsBasic } from '../props'
import type {
  DraggableWrapperClasses,
  DraggableWrapperComponents,
  DraggableWrapperExpose
} from '../types'

describe('DraggableWrapperDesign', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should mount and render root wrapper element with square element and slot', () => {
      const props = reactive<DraggableWrapperPropsBasic>({})
      const classes = ref<DraggableWrapperClasses>({
        main: { 'my-draggable': true },
        item: 'my-draggable__item',
        square: 'my-draggable__square'
      })

      let exposedValue: DraggableWrapperExpose | undefined

      const InnerComponent = defineComponent({
        setup(_componentProps, { expose }) {
          const design = new DraggableWrapperDesign(
            'my.draggableWrapper',
            props,
            { classes: classes as any }
          )

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
              default: (control: any) => h('div', { class: control?.className }, 'Draggable Item')
            }
          )
        }
      })

      const container = document.createElement('div')
      document.body.appendChild(container)
      const app = createApp(RootComponent)
      app.mount(container)

      const rootEl = container.querySelector('[data-testid="draggable-root"]')
      expect(rootEl).not.toBeNull()

      const itemEl = rootEl?.querySelector('.my-draggable__item')
      expect(itemEl).not.toBeNull()
      expect(itemEl?.textContent).toBe('Draggable Item')

      const squareEl = rootEl?.querySelector('.my-draggable__square')
      expect(squareEl).not.toBeNull()

      expect(exposedValue?.toNewPosition).toBeTypeOf('function')

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

      const values = [{ value: '1' }, { value: '2' }, { value: '3' }]
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
