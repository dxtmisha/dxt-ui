// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import type { AriaList } from '../../../types/ariaTypes'
import { Divider } from '../Divider'
import { DividerDesign } from '../DividerDesign'
import type { DividerPropsBasic } from '../props'
import type { DividerClasses, DividerComponents, DividerExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('DividerDesign (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render root div with role="separator", merge attrs/classes/styles, and expose elementHtml', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<DividerPropsBasic>({})
      const onClick = vi.fn()
      let exposed: DividerExpose & { elementHtml?: { value?: HTMLDivElement } } = {}

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: { 'd1-divider': true }
          }))
          const styles = computed<ConstrStyles>(() => ({
            '--d1-divider-borderWidth': '2px'
          }))
          const design = new DividerDesign<DividerComponents, DividerExpose, DividerClasses, DividerPropsBasic>(
            'd1.divider',
            props,
            { classes, styles }
          )

          exposed = design.expose() as DividerExpose & { elementHtml?: { value?: HTMLDivElement } }
          return design.render()
        }
      })

      const Wrapper = defineComponent({
        setup() {
          return () => h(Inner, {
            'class': 'extra-divider',
            'style': { marginBlock: '8px' },
            'data-testid': 'divider-root',
            onClick
          })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Wrapper)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.querySelector('[data-testid="divider-root"]') as HTMLDivElement
      expect(root).toBeInstanceOf(HTMLDivElement)
      expect(root.tagName).toBe('DIV')
      expect(root.getAttribute('role')).toBe('separator')
      expect(root.classList.contains('d1-divider')).toBe(true)
      expect(root.classList.contains('extra-divider')).toBe(true)
      expect(root.style.getPropertyValue('--d1-divider-borderWidth')).toBe('2px')
      expect(root.style.marginBlock).toBe('8px')
      expect(exposed.elementHtml?.value).toBe(root)

      root.click()
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively update computed classes and styles while preserving ARIA attributes', async () => {
      const isLarge = ref(false)
      const borderWidth = ref('1px')

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: {
              'd1-divider': true,
              'd1-divider--size--lg': isLarge.value
            }
          }))
          const styles = computed<ConstrStyles>(() => ({
            '--d1-divider-borderWidth': borderWidth.value
          }))
          const design = new DividerDesign<DividerComponents, DividerExpose, DividerClasses, DividerPropsBasic>(
            'd1.divider',
            reactive<DividerPropsBasic>({}),
            { classes, styles }
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLDivElement
      expect(root.getAttribute('role')).toBe('separator')
      expect(root.classList.contains('d1-divider--size--lg')).toBe(false)
      expect(root.style.getPropertyValue('--d1-divider-borderWidth')).toBe('1px')

      isLarge.value = true
      borderWidth.value = '4px'
      await nextTick()

      expect(root.getAttribute('role')).toBe('separator')
      expect(root.classList.contains('d1-divider--size--lg')).toBe(true)
      expect(root.style.getPropertyValue('--d1-divider-borderWidth')).toBe('4px')
    })
  })

  describe('Dependency Injection & Attribute Overrides', () => {
    it('should allow overriding default ARIA role via external attrs', () => {
      const Inner = defineComponent({
        setup() {
          const design = new DividerDesign<DividerComponents, DividerExpose, DividerClasses, DividerPropsBasic>(
            'd1.divider',
            reactive<DividerPropsBasic>({})
          )

          return design.render()
        }
      })

      const Wrapper = defineComponent({
        setup() {
          return () => h(Inner, {
            'role': 'none',
            'aria-hidden': 'true'
          })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Wrapper)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLDivElement
      expect(root.getAttribute('role')).toBe('none')
      expect(root.getAttribute('aria-hidden')).toBe('true')
    })

    it('should support custom ItemConstructor dependency injection', () => {
      class CustomDivider extends Divider {
        override get aria(): AriaList {
          return {
            'role': 'separator',
            'aria-orientation': 'vertical'
          }
        }
      }

      const Inner = defineComponent({
        setup() {
          const design = new DividerDesign<DividerComponents, DividerExpose, DividerClasses, DividerPropsBasic>(
            'd1.divider',
            reactive<DividerPropsBasic>({}),
            {},
            CustomDivider
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLDivElement
      expect(root.tagName).toBe('DIV')
      expect(root.getAttribute('role')).toBe('separator')
      expect(root.getAttribute('aria-orientation')).toBe('vertical')
    })
  })
})
