// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { GridItemDesign } from '../GridItemDesign'
import { defaultsGridItem, type GridItemProps } from '../props'
import type { GridItemClasses, GridItemComponents, GridItemExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestGridItem = defineComponent({
  name: 'TestGridItem',
  props: {
    base: {
      type: String as () => GridItemProps['base'],
      default: defaultsGridItem.base
    },
    align: {
      type: String as () => GridItemProps['align'],
      default: undefined
    }
  },
  setup(props, { expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-gridItem': true,
        [`d1-gridItem--base--${props.base}`]: Boolean(props.base),
        [`d1-gridItem--align--${props.align}`]: Boolean(props.align)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-gridItem-order': '1'
    }))

    const design = new GridItemDesign<
      GridItemComponents,
      GridItemExpose,
      GridItemClasses,
      GridItemProps
    >(
      'd1.gridItem',
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

const BASE_VARIANTS: NonNullable<GridItemProps['base']>[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12'
]

const ALIGN_VARIANTS: NonNullable<GridItemProps['align']>[] = [
  'center',
  'top',
  'bottom',
  'stretch',
  'baseline',
  'start',
  'end'
]

describe('GridItem (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render root div with default base="1", styles, default slot, and expose elementHtml', () => {
      const exposedInstance = ref<{ elementHtml?: HTMLDivElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(
            TestGridItem,
            {
              ref: (instance) => {
                exposedInstance.value = instance as { elementHtml?: HTMLDivElement } | null
              }
            },
            {
              default: () => h('p', { class: 'content' }, 'Hello GridItem')
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridItemElement = root.querySelector('.d1-gridItem') as HTMLDivElement | null

      expect(gridItemElement).not.toBeNull()
      expect(gridItemElement?.tagName).toBe('DIV')
      expect(gridItemElement?.classList.contains('d1-gridItem--base--1')).toBe(true)
      expect(gridItemElement?.style.getPropertyValue('--d1-gridItem-order')).toBe('1')
      expect(root.querySelector('.content')?.textContent).toBe('Hello GridItem')
      expect(exposedInstance.value?.elementHtml).toBe(gridItemElement)
    })

    it.each(BASE_VARIANTS)('should apply token class for base="%s"', (base) => {
      const Host = defineComponent({
        setup() {
          return () => h(TestGridItem, { base }, {
            default: () => h('span', `Col ${base}`)
          })
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridItemElement = root.querySelector('.d1-gridItem') as HTMLDivElement
      expect(gridItemElement.classList.contains(`d1-gridItem--base--${base}`)).toBe(true)
      expect(gridItemElement.textContent).toBe(`Col ${base}`)
    })

    it.each(ALIGN_VARIANTS)('should apply token class for align="%s"', (align) => {
      const Host = defineComponent({
        setup() {
          return () => h(TestGridItem, { align }, {
            default: () => h('span', `Align ${align}`)
          })
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridItemElement = root.querySelector('.d1-gridItem') as HTMLDivElement
      expect(gridItemElement.classList.contains(`d1-gridItem--align--${align}`)).toBe(true)
    })

    it('should reactively update base and align classes and clear align when unset', async () => {
      const baseProp = ref<GridItemProps['base']>('4')
      const alignProp = ref<GridItemProps['align']>('top')

      const Host = defineComponent({
        setup() {
          return () => h(
            TestGridItem,
            {
              base: baseProp.value,
              align: alignProp.value
            },
            {
              default: () => h('span', 'Dynamic Item')
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridItemElement = root.querySelector('.d1-gridItem') as HTMLDivElement

      expect(gridItemElement.classList.contains('d1-gridItem--base--4')).toBe(true)
      expect(gridItemElement.classList.contains('d1-gridItem--align--top')).toBe(true)

      baseProp.value = '8'
      alignProp.value = 'bottom'
      await nextTick()

      expect(gridItemElement.classList.contains('d1-gridItem--base--8')).toBe(true)
      expect(gridItemElement.classList.contains('d1-gridItem--base--4')).toBe(false)
      expect(gridItemElement.classList.contains('d1-gridItem--align--bottom')).toBe(true)
      expect(gridItemElement.classList.contains('d1-gridItem--align--top')).toBe(false)

      alignProp.value = undefined
      await nextTick()

      expect(gridItemElement.classList.contains('d1-gridItem--align--bottom')).toBe(false)
    })

    it('should merge external attrs, classes, styles, and event listeners on the root element', () => {
      const onClick = vi.fn()

      const Host = defineComponent({
        setup() {
          return () => h(
            TestGridItem,
            {
              'id': 'main-grid-item',
              'data-testid': 'grid-cell',
              'role': 'gridcell',
              'aria-label': 'Summary column',
              'class': 'custom-grid-item',
              'style': { backgroundColor: 'rgb(255, 255, 255)' },
              onClick
            },
            {
              default: () => h('span', 'Cell Body')
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridItemElement = root.querySelector('#main-grid-item') as HTMLDivElement

      expect(gridItemElement).not.toBeNull()
      expect(gridItemElement.getAttribute('data-testid')).toBe('grid-cell')
      expect(gridItemElement.getAttribute('role')).toBe('gridcell')
      expect(gridItemElement.getAttribute('aria-label')).toBe('Summary column')
      expect(gridItemElement.classList.contains('d1-gridItem')).toBe(true)
      expect(gridItemElement.classList.contains('custom-grid-item')).toBe(true)
      expect(gridItemElement.style.backgroundColor).toBe('rgb(255, 255, 255)')
      expect(gridItemElement.style.getPropertyValue('--d1-gridItem-order')).toBe('1')

      gridItemElement.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Nesting, boundaries, and multilingual content', () => {
    it('should render multiple sibling and nested GridItem elements independently', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', { class: 'd1-grid' }, [
            h(TestGridItem, { base: '6', align: 'start' }, {
              default: () => h(TestGridItem, { base: '12', align: 'center' }, {
                default: () => h('span', { class: 'nested-text' }, 'Nested')
              })
            }),
            h(TestGridItem, { base: '6', align: 'end' }, {
              default: () => h('span', { class: 'sibling-text' }, 'Sibling')
            })
          ])
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const items = root.querySelectorAll('.d1-gridItem')
      expect(items.length).toBe(3)
      expect(items[0].classList.contains('d1-gridItem--base--6')).toBe(true)
      expect(items[0].classList.contains('d1-gridItem--align--start')).toBe(true)
      expect(items[1].classList.contains('d1-gridItem--base--12')).toBe(true)
      expect(items[1].classList.contains('d1-gridItem--align--center')).toBe(true)
      expect(items[2].classList.contains('d1-gridItem--base--6')).toBe(true)
      expect(items[2].classList.contains('d1-gridItem--align--end')).toBe(true)
      expect(root.querySelector('.nested-text')?.textContent).toBe('Nested')
      expect(root.querySelector('.sibling-text')?.textContent).toBe('Sibling')
    })

    it('should render empty grid item safely when no default slot is provided', () => {
      const Host = defineComponent({
        setup() {
          return () => h(TestGridItem)
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const gridItemElement = root.querySelector('.d1-gridItem')
      expect(gridItemElement).not.toBeNull()
      expect(gridItemElement?.innerHTML).toBe('')
    })

    it('should support Unicode, Cyrillic, Vietnamese, CJK, and Emoji content', () => {
      const Host = defineComponent({
        setup() {
          return () => h(
            TestGridItem,
            { base: '12', align: 'center' },
            {
              default: () => h('p', { class: 'unicode-text' }, 'Привет Мир • Tiếng Việt • 你好 🚀')
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      expect(root.querySelector('.unicode-text')?.textContent).toBe('Привет Мир • Tiếng Việt • 你好 🚀')
    })
  })
})
