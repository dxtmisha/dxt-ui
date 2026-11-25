// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type PropType } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles,
  GeoIntl,
  GeoRef,
  type NumberOrString,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedNumberDesign } from '../FormattedNumberDesign'
import { defaultsFormattedNumber, type FormattedNumberPropsBasic } from '../props'
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

const TestFormattedNumber = defineComponent({
  name: 'TestFormattedNumber',
  props: {
    value: {
      type: [Number, String] as PropType<NumberOrString | undefined>,
      default: undefined
    },
    currency: {
      type: String,
      default: undefined
    },
    unit: {
      type: String,
      default: undefined
    },
    formatting: {
      type: Boolean,
      default: defaultsFormattedNumber.formatting
    },
    language: {
      type: String,
      default: undefined
    }
  },
  setup(props, { expose }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-formattedNumber': true
      }
    }))
    const styles = computed<ConstrStyles>(() => ({}))
    const design = new FormattedNumberDesign<
      FormattedNumberComponents,
      FormattedNumberExpose,
      FormattedNumberClasses,
      FormattedNumberPropsBasic
    >(
      'd1.formattedNumber',
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

describe('FormattedNumber (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render formatted number, currency, unit, and raw values inside a span element and react to prop changes', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const value = ref<NumberOrString | undefined>(1234567.89)
      const currency = ref<string | undefined>(undefined)
      const unit = ref<string | undefined>(undefined)
      const formatting = ref<boolean>(true)
      const language = ref<string | undefined>('en-US')
      const componentRef = ref<{ elementHtml?: HTMLSpanElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(TestFormattedNumber, {
            ref: componentRef,
            value: value.value,
            currency: currency.value,
            unit: unit.value,
            formatting: formatting.value,
            language: language.value,
            class: 'custom-number'
          })
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const element = container.firstElementChild as HTMLSpanElement
      expect(element).toBeInstanceOf(HTMLSpanElement)
      expect(element.tagName).toBe('SPAN')
      expect(element.classList.contains('d1-formattedNumber')).toBe(true)
      expect(element.classList.contains('custom-number')).toBe(true)
      expect(componentRef.value?.elementHtml).toBe(element)
      expect(element.textContent).toBe(new GeoIntl('en-US').number(1234567.89))

      currency.value = 'USD'
      await nextTick()
      expect(element.textContent).toBe(new GeoIntl('en-US').currency(1234567.89, 'USD'))

      unit.value = 'kilogram'
      await nextTick()
      // Currency takes precedence over unit when both are set
      expect(element.textContent).toBe(new GeoIntl('en-US').currency(1234567.89, 'USD'))

      currency.value = undefined
      await nextTick()
      expect(element.textContent).toBe(new GeoIntl('en-US').unit(1234567.89, 'kilogram'))

      language.value = 'de-DE'
      await nextTick()
      expect(element.textContent).toBe(new GeoIntl('de-DE').unit(1234567.89, 'kilogram'))

      formatting.value = false
      await nextTick()
      expect(element.textContent).toBe('1234567.89')

      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively update when global GeoRef locale changes and keep explicit language isolated', async () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestFormattedNumber, {
              'data-testid': 'global-locale',
              'value': 1234.56
            }),
            h(TestFormattedNumber, {
              'data-testid': 'explicit-locale',
              'value': 1234.56,
              'language': 'en-US'
            })
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const globalElement = container.querySelector('[data-testid="global-locale"]') as HTMLSpanElement
      const explicitElement = container.querySelector('[data-testid="explicit-locale"]') as HTMLSpanElement

      expect(globalElement.textContent).toBe(new GeoIntl('en-US').number(1234.56))
      expect(explicitElement.textContent).toBe(new GeoIntl('en-US').number(1234.56))

      GeoRef.set('ru-RU')
      await nextTick()

      expect(globalElement.textContent).toBe(new GeoIntl('ru-RU').number(1234.56))
      expect(explicitElement.textContent).toBe(new GeoIntl('en-US').number(1234.56))
    })
  })

  describe('Boundary values, zero/falsy traps, and empty inputs', () => {
    it('should format numeric zero, negative zero, string zero, negative values, and handle empty or non-finite inputs safely', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestFormattedNumber, { 'data-testid': 'zero-currency', 'value': 0, 'currency': 'USD', 'language': 'en-US' }),
            h(TestFormattedNumber, { 'data-testid': 'zero-unit', 'value': 0, 'unit': 'kilogram', 'language': 'en-US' }),
            h(TestFormattedNumber, { 'data-testid': 'zero-raw', 'value': 0, 'formatting': false }),
            h(TestFormattedNumber, { 'data-testid': 'string-zero', 'value': '0', 'currency': 'USD', 'language': 'en-US' }),
            h(TestFormattedNumber, { 'data-testid': 'padded-zero', 'value': ' 0 ', 'currency': 'USD', 'language': 'en-US' }),
            h(TestFormattedNumber, { 'data-testid': 'negative', 'value': -99.9, 'currency': 'USD', 'language': 'en-US' }),
            h(TestFormattedNumber, { 'data-testid': 'empty-undefined' }),
            h(TestFormattedNumber, { 'data-testid': 'empty-string', 'value': '' }),
            h(TestFormattedNumber, { 'data-testid': 'nan-value', 'value': Number.NaN, 'currency': 'USD', 'language': 'en-US' }),
            h(TestFormattedNumber, { 'data-testid': 'infinity-value', 'value': Number.POSITIVE_INFINITY, 'currency': 'USD', 'language': 'en-US' })
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const getText = (testId: string): string | null => {
        return container.querySelector(`[data-testid="${testId}"]`)?.textContent ?? null
      }

      expect(getText('zero-currency')).toBe(new GeoIntl('en-US').currency(0, 'USD'))
      expect(getText('zero-unit')).toBe(new GeoIntl('en-US').unit(0, 'kilogram'))
      expect(getText('zero-raw')).toBe('0')
      expect(getText('string-zero')).toBe(new GeoIntl('en-US').currency('0', 'USD'))
      expect(getText('padded-zero')).toBe(new GeoIntl('en-US').currency(' 0 ', 'USD'))
      expect(getText('negative')).toBe(new GeoIntl('en-US').currency(-99.9, 'USD'))
      expect(getText('empty-undefined')).toBe('')
      expect(getText('empty-string')).toBe('')
      expect(getText('nan-value')).toBe('NaN')
      expect(getText('infinity-value')).toBe('Infinity')
    })
  })

  describe('Security, Accessibility (WAI-ARIA), and external attribute merging', () => {
    it('should safely escape raw text payloads and merge ARIA, style, and event listener attributes', () => {
      const onClick = vi.fn()
      const xssPayload = '<script>alert(1)</script><img src=x onerror=alert(1)>'

      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestFormattedNumber, {
              'data-testid': 'xss-check',
              'value': xssPayload,
              'formatting': false
            }),
            h(TestFormattedNumber, {
              'data-testid': 'aria-check',
              'value': 5000,
              'currency': 'JPY',
              'language': 'ja-JP',
              'aria-label': 'Total price',
              'style': { fontWeight: '700' },
              onClick
            })
          ])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      const xssElement = container.querySelector('[data-testid="xss-check"]') as HTMLSpanElement
      expect(xssElement.textContent).toBe(xssPayload)
      expect(xssElement.querySelector('script')).toBeNull()
      expect(xssElement.querySelector('img')).toBeNull()

      const ariaElement = container.querySelector('[data-testid="aria-check"]') as HTMLSpanElement
      expect(ariaElement.textContent).toBe(new GeoIntl('ja-JP').currency(5000, 'JPY'))
      expect(ariaElement.getAttribute('aria-label')).toBe('Total price')
      expect(ariaElement.style.fontWeight).toBe('700')

      ariaElement.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
