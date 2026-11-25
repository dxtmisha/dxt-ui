// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles,
  GeoIntl,
  GeoRef,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedNumber } from '../FormattedNumber'
import { FormattedNumberDesign } from '../FormattedNumberDesign'
import type { FormattedNumberPropsBasic } from '../props'
import type { FormattedNumberClasses, FormattedNumberComponents, FormattedNumberExpose } from '../types'

const cleanups: Array<() => void> = []

beforeEach(() => {
  const context: Record<string, unknown> = {}
  ServerStorage.reset()
  ServerStorage.init(() => context)
  GeoRef.set('en-US')
})

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  ServerStorage.reset()
})

describe('FormattedNumberDesign (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render root span with formatted text, merge attrs/classes/styles, and expose elementHtml', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<FormattedNumberPropsBasic>({
        value: 1234.56,
        currency: 'USD',
        language: 'en-US'
      })
      const onClick = vi.fn()
      let exposed: FormattedNumberExpose & { elementHtml?: { value?: HTMLSpanElement } } = {}

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: { 'd1-formattedNumber': true }
          }))
          const styles = computed<ConstrStyles>(() => ({
            '--d1-formattedNumber-color': 'red'
          }))
          const design = new FormattedNumberDesign<
            FormattedNumberComponents,
            FormattedNumberExpose,
            FormattedNumberClasses,
            FormattedNumberPropsBasic
          >(
            'd1.formattedNumber',
            props,
            { classes, styles }
          )

          exposed = design.expose() as FormattedNumberExpose & { elementHtml?: { value?: HTMLSpanElement } }
          return design.render()
        }
      })

      const Wrapper = defineComponent({
        setup() {
          return () => h(Inner, {
            'class': 'extra-number',
            'style': { letterSpacing: '0.5px' },
            'data-testid': 'formatted-root',
            'aria-label': 'Formatted amount',
            onClick
          })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Wrapper)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.querySelector('[data-testid="formatted-root"]') as HTMLSpanElement
      expect(root).toBeInstanceOf(HTMLSpanElement)
      expect(root.tagName).toBe('SPAN')
      expect(root.textContent).toBe(new GeoIntl('en-US').currency(1234.56, 'USD'))
      expect(root.classList.contains('d1-formattedNumber')).toBe(true)
      expect(root.classList.contains('extra-number')).toBe(true)
      expect(root.style.getPropertyValue('--d1-formattedNumber-color')).toBe('red')
      expect(root.style.letterSpacing).toBe('0.5px')
      expect(root.getAttribute('aria-label')).toBe('Formatted amount')
      expect(exposed.elementHtml?.value).toBe(root)

      root.click()
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively update rendered text, classes, and styles', async () => {
      const props = reactive<FormattedNumberPropsBasic>({
        value: 0,
        currency: 'USD',
        language: 'en-US'
      })
      const isHighlight = ref(false)
      const fontSize = ref('14px')

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: {
              'd1-formattedNumber': true,
              'd1-formattedNumber--highlight': isHighlight.value
            }
          }))
          const styles = computed<ConstrStyles>(() => ({
            fontSize: fontSize.value
          }))
          const design = new FormattedNumberDesign<
            FormattedNumberComponents,
            FormattedNumberExpose,
            FormattedNumberClasses,
            FormattedNumberPropsBasic
          >(
            'd1.formattedNumber',
            props,
            { classes, styles }
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLSpanElement
      expect(root.textContent).toBe(new GeoIntl('en-US').currency(0, 'USD'))
      expect(root.classList.contains('d1-formattedNumber--highlight')).toBe(false)
      expect(root.style.fontSize).toBe('14px')

      props.value = 9876.5
      props.currency = undefined
      props.unit = 'kilometer'
      isHighlight.value = true
      fontSize.value = '18px'
      await nextTick()

      expect(root.textContent).toBe(new GeoIntl('en-US').unit(9876.5, 'kilometer'))
      expect(root.classList.contains('d1-formattedNumber--highlight')).toBe(true)
      expect(root.style.fontSize).toBe('18px')
    })

    it('should render cleanly when options are omitted', () => {
      const Inner = defineComponent({
        setup() {
          const design = new FormattedNumberDesign<
            FormattedNumberComponents,
            FormattedNumberExpose,
            FormattedNumberClasses,
            FormattedNumberPropsBasic
          >(
            'd1.formattedNumber',
            reactive<FormattedNumberPropsBasic>({ value: 500, language: 'en-US' })
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLSpanElement
      expect(root.tagName).toBe('SPAN')
      expect(root.textContent).toBe('500')
    })
  })

  describe('Dependency Injection', () => {
    it('should support custom ItemConstructor dependency injection', () => {
      class CustomFormattedNumber extends FormattedNumber {
        override get item(): string {
          return `CUSTOM:${this.props.value}`
        }
      }

      const Inner = defineComponent({
        setup() {
          const design = new FormattedNumberDesign<
            FormattedNumberComponents,
            FormattedNumberExpose,
            FormattedNumberClasses,
            FormattedNumberPropsBasic
          >(
            'd1.formattedNumber',
            reactive<FormattedNumberPropsBasic>({ value: 777 }),
            {},
            CustomFormattedNumber
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLSpanElement
      expect(root.tagName).toBe('SPAN')
      expect(root.textContent).toBe('CUSTOM:777')
    })
  })
})
