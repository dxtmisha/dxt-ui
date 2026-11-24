// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import { AreaDesign } from '../../Area/AreaDesign'
import type { AreaPropsBasic } from '../../Area/props'
import type { AreaClasses, AreaComponents, AreaExpose } from '../../Area/types'
import { ContainerDesign } from '../ContainerDesign'
import { defaultsContainer, type ContainerProps } from '../props'
import type { ContainerClasses, ContainerComponents, ContainerExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestContainer = defineComponent({
  name: 'TestContainer',
  props: {
    area: {
      type: String,
      default: defaultsContainer.area
    },
    align: {
      type: String as () => ContainerProps['align'],
      default: defaultsContainer.align
    }
  },
  setup(props, { expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-container': true,
        [`d1-container--align--${props.align}`]: Boolean(props.align)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-container-width': '1200px'
    }))

    const design = new ContainerDesign<
      ContainerComponents,
      ContainerExpose,
      ContainerClasses,
      ContainerProps
    >(
      'd1.container',
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

const TestArea = defineComponent({
  name: 'TestArea',
  props: {
    areaDefault: String
  },
  setup(props) {
    const design = new AreaDesign<AreaComponents, AreaExpose, AreaClasses, AreaPropsBasic>(
      'd1.area',
      props
    )

    return design.render()
  }
})

describe('Container (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render root div with token classes, styles, default slot, and propagate default area context', () => {
      const exposedInstance = ref<{ elementHtml?: HTMLDivElement } | null>(null)

      const ChildConsumer = defineComponent({
        setup() {
          return () => h('span', { class: 'area-readout' }, getAreaValue() ?? 'none')
        }
      })

      const Host = defineComponent({
        setup() {
          return () => h(
            TestContainer,
            {
              ref: (instance) => {
                exposedInstance.value = instance as { elementHtml?: HTMLDivElement } | null
              }
            },
            {
              default: () => [
                h('p', { class: 'content' }, 'Hello Container'),
                h(ChildConsumer)
              ]
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const containerElement = root.querySelector('.d1-container') as HTMLDivElement | null

      expect(containerElement).not.toBeNull()
      expect(containerElement?.tagName).toBe('DIV')
      expect(containerElement?.classList.contains('d1-container--align--center')).toBe(true)
      expect(containerElement?.style.getPropertyValue('--d1-container-width')).toBe('1200px')
      expect(root.querySelector('.content')?.textContent).toBe('Hello Container')
      expect(root.querySelector('.area-readout')?.textContent).toBe('container')
      expect(exposedInstance.value?.elementHtml).toBe(containerElement)
    })

    it('should reactively update injected area value and integrate with AreaDesign slots', async () => {
      const areaProp = ref<string | undefined>('container')
      const alignProp = ref<ContainerProps['align']>('left')

      const Host = defineComponent({
        setup() {
          return () => h(
            TestContainer,
            {
              area: areaProp.value,
              align: alignProp.value
            },
            {
              default: () => h(
                TestArea,
                { areaDefault: 'fallback' },
                {
                  container: () => h('section', 'Container Layout'),
                  sidebar: () => h('aside', 'Sidebar Layout'),
                  fallback: () => h('div', 'Fallback Layout'),
                  default: () => h('p', 'Default Layout')
                }
              )
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const containerElement = root.querySelector('.d1-container') as HTMLDivElement

      expect(containerElement.classList.contains('d1-container--align--left')).toBe(true)
      expect(containerElement.innerHTML).toBe('<section>Container Layout</section>')

      areaProp.value = 'sidebar'
      alignProp.value = 'right'
      await nextTick()

      expect(containerElement.classList.contains('d1-container--align--right')).toBe(true)
      expect(containerElement.classList.contains('d1-container--align--left')).toBe(false)
      expect(containerElement.innerHTML).toBe('<aside>Sidebar Layout</aside>')

      areaProp.value = 'unknown'
      await nextTick()
      expect(containerElement.innerHTML).toBe('<p>Default Layout</p>')
    })

    it('should merge external attrs, classes, styles, and event listeners on the root element', () => {
      const onClick = vi.fn()

      const Host = defineComponent({
        setup() {
          return () => h(
            TestContainer,
            {
              'id': 'main-container',
              'data-testid': 'layout-box',
              'role': 'region',
              'aria-label': 'Main section',
              'class': 'custom-class',
              'style': { maxWidth: '960px' },
              onClick
            },
            {
              default: () => h('span', 'Body')
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const containerElement = root.querySelector('#main-container') as HTMLDivElement

      expect(containerElement).not.toBeNull()
      expect(containerElement.getAttribute('data-testid')).toBe('layout-box')
      expect(containerElement.getAttribute('role')).toBe('region')
      expect(containerElement.getAttribute('aria-label')).toBe('Main section')
      expect(containerElement.classList.contains('d1-container')).toBe(true)
      expect(containerElement.classList.contains('custom-class')).toBe(true)
      expect(containerElement.style.maxWidth).toBe('960px')
      expect(containerElement.style.getPropertyValue('--d1-container-width')).toBe('1200px')

      containerElement.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Nesting, boundaries, and multilingual content', () => {
    it('should isolate nested containers so inner area shadows outer area without leaking upward', () => {
      const AreaBadge = defineComponent({
        props: {
          marker: {
            type: String,
            required: true
          }
        },
        setup(props) {
          return () => h('span', { class: props.marker }, getAreaValue() ?? 'none')
        }
      })

      const Host = defineComponent({
        setup() {
          return () => h(
            TestContainer,
            { area: 'outer-area' },
            {
              default: () => [
                h(AreaBadge, { marker: 'outer-badge' }),
                h(
                  TestContainer,
                  { area: 'inner-area' },
                  {
                    default: () => h(AreaBadge, { marker: 'inner-badge' })
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

      expect(root.querySelector('.outer-badge')?.textContent).toBe('outer-area')
      expect(root.querySelector('.inner-badge')?.textContent).toBe('inner-area')
    })

    it('should render empty container safely when no default slot is provided', () => {
      const Host = defineComponent({
        setup() {
          return () => h(TestContainer)
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      const containerElement = root.querySelector('.d1-container')
      expect(containerElement).not.toBeNull()
      expect(containerElement?.innerHTML).toBe('')
    })

    it('should support Unicode, Cyrillic, Vietnamese, and Emoji area values and content', () => {
      const AreaReader = defineComponent({
        setup() {
          return () => h('span', { class: 'unicode-area' }, getAreaValue() ?? '')
        }
      })

      const Host = defineComponent({
        setup() {
          return () => h(
            TestContainer,
            { area: 'khu_vực_🔥' },
            {
              default: () => [
                h('p', { class: 'unicode-text' }, 'Привет Мир • Tiếng Việt • 你好 🚀'),
                h(AreaReader)
              ]
            }
          )
        }
      })

      const root = document.createElement('div')
      const app = createApp(Host)
      app.mount(root)
      cleanups.push(() => app.unmount())

      expect(root.querySelector('.unicode-area')?.textContent).toBe('khu_vực_🔥')
      expect(root.querySelector('.unicode-text')?.textContent).toBe('Привет Мир • Tiếng Việt • 你好 🚀')
    })
  })
})
