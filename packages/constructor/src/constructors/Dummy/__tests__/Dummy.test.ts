// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { DummyDesign } from '../DummyDesign'
import type { DummyPropsBasic } from '../props'
import type { DummyClasses, DummyComponents, DummyExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestDummy = defineComponent({
  name: 'TestDummy',
  props: {
    size: {
      type: String,
      default: 'md'
    },
    palette: {
      type: String,
      default: undefined
    }
  },
  setup(props, { expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-dummy': true,
        [`d1-dummy--size--${props.size}`]: Boolean(props.size),
        [`d1-palette d1-palette--${props.palette}`]: Boolean(props.palette)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-dummy-borderRadius': '12px'
    }))

    const design = new DummyDesign<
      DummyComponents,
      DummyExpose,
      DummyClasses,
      DummyPropsBasic
    >(
      'd1.dummy',
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

describe('Dummy (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render placeholder block with token classes, styles, default slot, and reactively update props', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const size = ref<string>('sm')
      const palette = ref<string | undefined>(undefined)
      const dummyRef = ref<{ elementHtml?: HTMLDivElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(
            TestDummy,
            {
              ref: dummyRef,
              size: size.value,
              palette: palette.value,
              class: 'demo-card'
            },
            {
              default: () => [
                h('h3', { class: 'title' }, 'Card Header'),
                h('p', { class: 'body' }, 'Card Body')
              ]
            }
          )
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.firstElementChild as HTMLDivElement
      expect(element).toBeInstanceOf(HTMLDivElement)
      expect(element.tagName).toBe('DIV')
      expect(element.classList.contains('d1-dummy')).toBe(true)
      expect(element.classList.contains('d1-dummy--size--sm')).toBe(true)
      expect(element.classList.contains('demo-card')).toBe(true)
      expect(element.classList.contains('d1-palette')).toBe(false)
      expect(element.style.getPropertyValue('--d1-dummy-borderRadius')).toBe('12px')
      expect(element.querySelector('.title')?.textContent).toBe('Card Header')
      expect(element.querySelector('.body')?.textContent).toBe('Card Body')
      expect(dummyRef.value?.elementHtml).toBe(element)

      size.value = 'xl'
      palette.value = 'blue'
      await nextTick()

      expect(element.classList.contains('d1-dummy--size--xl')).toBe(true)
      expect(element.classList.contains('d1-dummy--size--sm')).toBe(false)
      expect(element.classList.contains('d1-palette')).toBe(true)
      expect(element.classList.contains('d1-palette--blue')).toBe(true)
      expect(element.classList.contains('demo-card')).toBe(true)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should forward external DOM, ARIA, style, and event listener attributes cleanly', () => {
      const onClick = vi.fn()

      const Host = defineComponent({
        setup() {
          return () => h(
            TestDummy,
            {
              'id': 'hero-dummy',
              'data-testid': 'dummy-item',
              'role': 'region',
              'aria-label': 'Preview block',
              'style': { width: '240px' },
              onClick
            },
            {
              default: () => h('span', 'Content')
            }
          )
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.querySelector('#hero-dummy') as HTMLDivElement
      expect(element).not.toBeNull()
      expect(element.getAttribute('data-testid')).toBe('dummy-item')
      expect(element.getAttribute('role')).toBe('region')
      expect(element.getAttribute('aria-label')).toBe('Preview block')
      expect(element.style.width).toBe('240px')
      expect(element.style.getPropertyValue('--d1-dummy-borderRadius')).toBe('12px')

      element.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Boundaries, empty slots, and multilingual content', () => {
    it('should render empty dummy blocks cleanly when no slot content is passed', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestDummy, { 'data-testid': 'first', 'size': 'xs' }),
            h(TestDummy, { 'data-testid': 'second', 'size': 'lg', 'palette': 'emerald' })
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const first = container.querySelector('[data-testid="first"]') as HTMLDivElement
      const second = container.querySelector('[data-testid="second"]') as HTMLDivElement

      expect(first.innerHTML).toBe('')
      expect(first.classList.contains('d1-dummy--size--xs')).toBe(true)
      expect(first.classList.contains('d1-palette')).toBe(false)

      expect(second.innerHTML).toBe('')
      expect(second.classList.contains('d1-dummy--size--lg')).toBe(true)
      expect(second.classList.contains('d1-palette--emerald')).toBe(true)
    })

    it('should render Cyrillic, Vietnamese diacritics, CJK, and Emoji slot content accurately', () => {
      const Host = defineComponent({
        setup() {
          return () => h(
            TestDummy,
            { 'aria-label': 'Блок • Tiếng Việt' },
            {
              default: () => h('p', { class: 'multilingual' }, 'Привет Мир • Học tiếng Việt • 你好 🚀')
            }
          )
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const root = container.firstElementChild as HTMLDivElement
      expect(root.getAttribute('aria-label')).toBe('Блок • Tiếng Việt')
      expect(root.querySelector('.multilingual')?.textContent).toBe('Привет Мир • Học tiếng Việt • 你好 🚀')
    })
  })
})
