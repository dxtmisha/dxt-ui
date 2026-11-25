// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { GridDesign } from '../GridDesign'
import type { GridProps } from '../props'
import type { GridClasses, GridComponents, GridExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestGrid = defineComponent({
  name: 'TestGrid',
  props: {
    align: {
      type: String as () => GridProps['align'],
      default: undefined
    },
    columns: {
      type: String,
      default: '12'
    }
  },
  setup(props, { expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-grid': true,
        [`d1-grid--align--${props.align}`]: Boolean(props.align)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-grid-columns': props.columns
    }))

    const design = new GridDesign<
      GridComponents,
      GridExpose,
      GridClasses,
      GridProps
    >(
      'd1.grid',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    expose(design.expose())

    return design.render()
  }
})

describe('Grid (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render root div with token classes, styles, default slot, and expose elementHtml', () => {
      const exposedInstance = ref<{ elementHtml?: HTMLDivElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(
            TestGrid,
            {
              align: 'center',
              columns: '12',
              ref: (instance) => {
                exposedInstance.value = instance as { elementHtml?: HTMLDivElement } | null
              }
            },
            {
              default: () => [
                h('div', { class: 'item-1' }, 'Column 1'),
                h('div', { class: 'item-2' }, 'Column 2')
              ]
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridElement = root.querySelector('.d1-grid') as HTMLDivElement | null

      expect(gridElement).not.toBeNull()
      expect(gridElement?.tagName).toBe('DIV')
      expect(gridElement?.classList.contains('d1-grid--align--center')).toBe(true)
      expect(gridElement?.style.getPropertyValue('--d1-grid-columns')).toBe('12')
      expect(root.querySelector('.item-1')?.textContent).toBe('Column 1')
      expect(root.querySelector('.item-2')?.textContent).toBe('Column 2')
      expect(exposedInstance.value?.elementHtml).toBe(gridElement)
    })

    it.each<NonNullable<GridProps['align']>>([
      'center',
      'top',
      'bottom',
      'stretch',
      'baseline',
      'start',
      'end'
    ])('should apply BEM align modifier class for align="%s"', (align) => {
      const Host = defineComponent({
        setup() {
          return () => h(TestGrid, { align }, {
            default: () => h('div', 'Item')
          })
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridElement = root.querySelector('.d1-grid') as HTMLDivElement
      expect(gridElement.classList.contains(`d1-grid--align--${align}`)).toBe(true)
    })

    it('should reactively update align and columns props', async () => {
      const alignProp = ref<GridProps['align']>('top')
      const columnsProp = ref('12')

      const Host = defineComponent({
        setup() {
          return () => h(
            TestGrid,
            {
              align: alignProp.value,
              columns: columnsProp.value
            },
            {
              default: () => h('div', 'Dynamic Grid')
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridElement = root.querySelector('.d1-grid') as HTMLDivElement

      expect(gridElement.classList.contains('d1-grid--align--top')).toBe(true)
      expect(gridElement.style.getPropertyValue('--d1-grid-columns')).toBe('12')

      alignProp.value = 'end'
      columnsProp.value = '4'
      await nextTick()

      expect(gridElement.classList.contains('d1-grid--align--top')).toBe(false)
      expect(gridElement.classList.contains('d1-grid--align--end')).toBe(true)
      expect(gridElement.style.getPropertyValue('--d1-grid-columns')).toBe('4')

      alignProp.value = undefined
      await nextTick()

      expect(gridElement.classList.contains('d1-grid--align--end')).toBe(false)
    })

    it('should merge external attrs, classes, styles, ARIA attributes, and event listeners on the root element', () => {
      const onClick = vi.fn()

      const Host = defineComponent({
        setup() {
          return () => h(
            TestGrid,
            {
              'id': 'main-grid',
              'data-testid': 'layout-grid',
              'role': 'region',
              'aria-label': 'Dashboard Grid',
              'class': 'custom-grid',
              'style': { gap: '20px' },
              onClick
            },
            {
              default: () => h('span', 'Grid Body')
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridElement = root.querySelector('#main-grid') as HTMLDivElement

      expect(gridElement).not.toBeNull()
      expect(gridElement.getAttribute('data-testid')).toBe('layout-grid')
      expect(gridElement.getAttribute('role')).toBe('region')
      expect(gridElement.getAttribute('aria-label')).toBe('Dashboard Grid')
      expect(gridElement.classList.contains('d1-grid')).toBe(true)
      expect(gridElement.classList.contains('custom-grid')).toBe(true)
      expect(gridElement.style.gap).toBe('20px')
      expect(gridElement.style.getPropertyValue('--d1-grid-columns')).toBe('12')

      gridElement.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Nesting, boundaries, and multilingual content', () => {
    it('should support nested Grid components independently', () => {
      const Host = defineComponent({
        setup() {
          return () => h(
            TestGrid,
            { id: 'outer-grid', align: 'stretch', columns: '12' },
            {
              default: () => [
                h('div', { class: 'outer-item' }, 'Outer'),
                h(
                  TestGrid,
                  { id: 'inner-grid', align: 'center', columns: '6' },
                  {
                    default: () => h('div', { class: 'inner-item' }, 'Inner')
                  }
                )
              ]
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const outer = root.querySelector('#outer-grid') as HTMLDivElement
      const inner = root.querySelector('#inner-grid') as HTMLDivElement

      expect(outer.classList.contains('d1-grid--align--stretch')).toBe(true)
      expect(outer.style.getPropertyValue('--d1-grid-columns')).toBe('12')
      expect(inner.classList.contains('d1-grid--align--center')).toBe(true)
      expect(inner.style.getPropertyValue('--d1-grid-columns')).toBe('6')
      expect(root.querySelector('.outer-item')?.textContent).toBe('Outer')
      expect(root.querySelector('.inner-item')?.textContent).toBe('Inner')
    })

    it('should render empty grid safely when no default slot is provided', () => {
      const Host = defineComponent({
        setup() {
          return () => h(TestGrid)
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridElement = root.querySelector('.d1-grid')
      expect(gridElement).not.toBeNull()
      expect(gridElement?.innerHTML).toBe('')
    })

    it('should support Unicode, Cyrillic, Vietnamese, CJK, and Emoji content', () => {
      const Host = defineComponent({
        setup() {
          return () => h(
            TestGrid,
            { align: 'baseline' },
            {
              default: () => [
                h('div', { class: 'unicode-cell' }, 'Привет Мир • Tiếng Việt • 你好 🚀')
              ]
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      expect(root.querySelector('.unicode-cell')?.textContent).toBe('Привет Мир • Tiếng Việt • 你好 🚀')
    })
  })
})
