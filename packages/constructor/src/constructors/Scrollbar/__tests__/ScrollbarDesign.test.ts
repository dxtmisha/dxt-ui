// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'

import { Scrollbar } from '../Scrollbar'
import { ScrollbarDesign } from '../ScrollbarDesign'
import type { ScrollbarProps } from '../props'
import type { ScrollbarClasses, ScrollbarComponents, ScrollbarExpose } from '../types'

describe('ScrollbarDesign', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render root element with default div tag, classes, styles, attrs, and default slot', () => {
      const props = reactive<ScrollbarProps>({})
      const styles = ref({ '--d1-scrollbar-size': '6px' })
      const classes = ref<ScrollbarClasses>({
        main: { 'd1-scrollbar': true }
      })

      let exposedValue: ReturnType<ScrollbarDesign<
        ScrollbarComponents,
        ScrollbarExpose,
        ScrollbarClasses,
        ScrollbarProps
      >['expose']> | undefined

      const InnerComponent = defineComponent({
        setup(_componentProps, { expose }) {
          const design = new ScrollbarDesign(
            'd1.scrollbar',
            props,
            {
              classes: classes as any,
              styles
            }
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
            { 'data-testid': 'scrollbar-root' },
            {
              default: () => h('p', { class: 'inner-paragraph' }, 'Scrollable text')
            }
          )
        }
      })

      const container = document.createElement('div')
      const app = createApp(RootComponent)
      app.mount(container)

      const rootElement = container.firstElementChild as HTMLElement
      expect(rootElement).not.toBeNull()
      expect(rootElement.tagName.toLowerCase()).toBe('div')
      expect(rootElement.getAttribute('data-testid')).toBe('scrollbar-root')
      expect(rootElement.classList.contains('d1-scrollbar')).toBe(true)
      expect(rootElement.style.getPropertyValue('--d1-scrollbar-size')).toBe('6px')
      expect(rootElement.querySelector('.inner-paragraph')?.textContent).toBe('Scrollable text')
      expect(exposedValue?.elementHtml?.value).toBe(rootElement)

      app.unmount()
    })

    it('should render custom HTML tag and support custom ItemConstructor override', () => {
      const props = reactive<ScrollbarProps>({ tag: 'article' })

      /**
       * Custom Scrollbar logic class for testing ItemConstructor injection.
       *
       * Пользовательский класс логики Scrollbar для тестирования внедрения ItemConstructor.
       */
      class CustomScrollbar extends Scrollbar {
        override get tag(): string {
          return 'section'
        }
      }

      const HostComponent = defineComponent({
        setup() {
          const design = new ScrollbarDesign<
            ScrollbarComponents,
            ScrollbarExpose,
            ScrollbarClasses,
            ScrollbarProps
          >(
            'd1.scrollbar',
            props,
            undefined,
            CustomScrollbar
          )

          return design.render()
        }
      })

      const container = document.createElement('div')
      const app = createApp(HostComponent)
      app.mount(container)

      const rootElement = container.firstElementChild as HTMLElement
      expect(rootElement.tagName.toLowerCase()).toBe('section')

      app.unmount()
    })
  })
})
