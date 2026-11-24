// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { DividerDesign } from '../DividerDesign'
import type { DividerPropsBasic } from '../props'
import type { DividerClasses, DividerComponents, DividerExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const TestDivider = defineComponent({
  name: 'TestDivider',
  props: {
    size: {
      type: String,
      default: 'sm'
    },
    margin: {
      type: String,
      default: 'none'
    },
    borderWidth: {
      type: String,
      default: undefined
    }
  },
  setup(props, { expose }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-divider': true,
        [`d1-divider--size--${props.size}`]: Boolean(props.size),
        [`d1-divider--margin--${props.margin}`]: Boolean(props.margin)
      }
    }))
    const styles = computed<ConstrStyles>(() => (
      props.borderWidth
        ? { '--d1-divider-borderWidth': props.borderWidth }
        : {}
    ))
    const design = new DividerDesign<DividerComponents, DividerExpose, DividerClasses, DividerPropsBasic>(
      'd1.divider',
      props,
      {
        classes,
        styles
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Divider (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render a semantic separator element and reactively update token classes and styles', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const size = ref<string>('sm')
      const margin = ref<string>('none')
      const borderWidth = ref<string | undefined>(undefined)
      const dividerRef = ref<{ elementHtml?: HTMLDivElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(TestDivider, {
            ref: dividerRef,
            size: size.value,
            margin: margin.value,
            borderWidth: borderWidth.value,
            class: 'custom-divider'
          })
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.firstElementChild as HTMLDivElement
      expect(element).toBeInstanceOf(HTMLDivElement)
      expect(element.tagName).toBe('DIV')
      expect(element.getAttribute('role')).toBe('separator')
      expect(element.classList.contains('d1-divider')).toBe(true)
      expect(element.classList.contains('d1-divider--size--sm')).toBe(true)
      expect(element.classList.contains('d1-divider--margin--none')).toBe(true)
      expect(element.classList.contains('custom-divider')).toBe(true)
      expect(element.childNodes.length).toBe(0)
      expect(dividerRef.value?.elementHtml).toBe(element)

      size.value = 'lg'
      margin.value = 'md'
      borderWidth.value = '4px'
      await nextTick()

      expect(element.classList.contains('d1-divider--size--lg')).toBe(true)
      expect(element.classList.contains('d1-divider--size--sm')).toBe(false)
      expect(element.classList.contains('d1-divider--margin--md')).toBe(true)
      expect(element.classList.contains('custom-divider')).toBe(true)
      expect(element.style.getPropertyValue('--d1-divider-borderWidth')).toBe('4px')
      expect(warnSpy).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility (WAI-ARIA) and external attribute merging', () => {
    it('should allow overriding default role and forwarding ARIA and DOM attributes', () => {
      const onClick = vi.fn()

      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestDivider, {
              'data-testid': 'decorative',
              'role': 'presentation',
              'aria-hidden': 'true'
            }),
            h(TestDivider, {
              'data-testid': 'vertical',
              'aria-orientation': 'vertical',
              'aria-label': 'Section divider',
              'style': { opacity: '0.5' },
              onClick
            })
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const decorative = container.querySelector('[data-testid="decorative"]') as HTMLDivElement
      expect(decorative.getAttribute('role')).toBe('presentation')
      expect(decorative.getAttribute('aria-hidden')).toBe('true')

      const vertical = container.querySelector('[data-testid="vertical"]') as HTMLDivElement
      expect(vertical.getAttribute('role')).toBe('separator')
      expect(vertical.getAttribute('aria-orientation')).toBe('vertical')
      expect(vertical.getAttribute('aria-label')).toBe('Section divider')
      expect(vertical.style.opacity).toBe('0.5')

      vertical.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
