// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type PropType } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles,
  GeoRef,
  GeoUnit,
  type NumberOrString,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedUnitDesign } from '../FormattedUnitDesign'
import { defaultsFormattedUnit, type FormattedUnitPropsBasic } from '../props'
import type { FormattedUnitClasses, FormattedUnitComponents, FormattedUnitExpose } from '../types'

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

const TestFormattedUnit = defineComponent({
  name: 'TestFormattedUnit',
  props: {
    value: {
      type: [Number, String] as PropType<NumberOrString | undefined>,
      default: undefined
    },
    unit: {
      type: String,
      default: undefined
    },
    formatting: {
      type: Boolean,
      default: defaultsFormattedUnit.formatting
    },
    language: {
      type: String,
      default: undefined
    }
  },
  setup(props, { expose }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-formattedUnit': true
      }
    }))
    const styles = computed<ConstrStyles>(() => ({}))
    const design = new FormattedUnitDesign<
      FormattedUnitComponents,
      FormattedUnitExpose,
      FormattedUnitClasses,
      FormattedUnitPropsBasic
    >(
      'd1.formattedUnit',
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

describe('FormattedUnit (integration)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render formatted unit and raw values inside a span element and react to prop changes', async () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const value = ref<NumberOrString | undefined>(100)
      const unit = ref<string | undefined>('celsius')
      const formatting = ref<boolean>(true)
      const language = ref<string | undefined>('en-US')
      const componentRef = ref<{ elementHtml?: HTMLSpanElement } | null>(null)

      const Host = defineComponent({
        setup() {
          return () => h(TestFormattedUnit, {
            ref: componentRef,
            value: value.value,
            unit: unit.value,
            formatting: formatting.value,
            language: language.value,
            class: 'custom-unit'
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
      expect(element.classList.contains('d1-formattedUnit')).toBe(true)
      expect(element.classList.contains('custom-unit')).toBe(true)
      expect(componentRef.value?.elementHtml).toBe(element)
      expect(element.textContent).toBe(GeoUnit.getInstance('en-US').format(100, 'celsius'))

      language.value = 'ru-RU'
      await nextTick()
      expect(element.textContent).toBe(GeoUnit.getInstance('ru-RU').format(100, 'celsius'))

      unit.value = 'kilometer-per-hour'
      await nextTick()
      expect(element.textContent).toBe(GeoUnit.getInstance('ru-RU').format(100, 'kilometer-per-hour'))

      language.value = 'en-US'
      await nextTick()
      expect(element.textContent).toBe(GeoUnit.getInstance('en-US').format(100, 'kilometer-per-hour'))

      formatting.value = false
      await nextTick()
      expect(element.textContent).toBe('100')

      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively update when global GeoRef locale changes and keep explicit language isolated', async () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestFormattedUnit, {
              'data-testid': 'global-locale',
              'value': 10,
              'unit': 'kilogram'
            }),
            h(TestFormattedUnit, {
              'data-testid': 'explicit-locale',
              'value': 10,
              'unit': 'kilogram',
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

      expect(globalElement.textContent).toBe(GeoUnit.getInstance('en-US').format(10, 'kilogram'))
      expect(explicitElement.textContent).toBe(GeoUnit.getInstance('en-US').format(10, 'kilogram'))

      GeoRef.set('ru-RU')
      await nextTick()

      expect(globalElement.textContent).toBe(GeoUnit.getInstance('ru-RU').format(10, 'kilogram'))
      expect(explicitElement.textContent).toBe(GeoUnit.getInstance('en-US').format(10, 'kilogram'))
    })
  })

  describe('Boundary values, zero/falsy traps, and empty inputs', () => {
    it('should format numeric zero, negative zero, string zero, negative values, and handle empty, unknown, or non-finite inputs safely', () => {
      const Host = defineComponent({
        setup() {
          return () => h('div', [
            h(TestFormattedUnit, { 'data-testid': 'zero-unit', 'value': 0, 'unit': 'celsius', 'language': 'en-US' }),
            h(TestFormattedUnit, { 'data-testid': 'neg-zero-unit', 'value': -0, 'unit': 'kilogram', 'language': 'ru-RU' }),
            h(TestFormattedUnit, { 'data-testid': 'zero-raw', 'value': 0, 'unit': 'kilogram', 'formatting': false }),
            h(TestFormattedUnit, { 'data-testid': 'string-zero', 'value': '0', 'unit': 'meter', 'language': 'en-US' }),
            h(TestFormattedUnit, { 'data-testid': 'padded-zero', 'value': ' 0 ', 'unit': 'meter', 'language': 'en-US' }),
            h(TestFormattedUnit, { 'data-testid': 'negative', 'value': -20, 'unit': 'celsius', 'language': 'en-US' }),
            h(TestFormattedUnit, { 'data-testid': 'empty-undefined' }),
            h(TestFormattedUnit, { 'data-testid': 'empty-string', 'value': '', 'unit': 'meter' }),
            h(TestFormattedUnit, { 'data-testid': 'whitespace-value', 'value': '   ', 'unit': 'meter' }),
            h(TestFormattedUnit, { 'data-testid': 'whitespace-unit', 'value': 42, 'unit': '   ' }),
            h(TestFormattedUnit, { 'data-testid': 'unknown-unit', 'value': 42, 'unit': 'parsecs', 'language': 'en-US' }),
            h(TestFormattedUnit, { 'data-testid': 'nan-value', 'value': Number.NaN, 'unit': 'meter', 'language': 'en-US' }),
            h(TestFormattedUnit, { 'data-testid': 'infinity-value', 'value': Number.POSITIVE_INFINITY, 'unit': 'meter', 'language': 'en-US' })
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

      expect(getText('zero-unit')).toBe(GeoUnit.getInstance('en-US').format(0, 'celsius'))
      expect(getText('neg-zero-unit')).toBe(GeoUnit.getInstance('ru-RU').format(-0, 'kilogram'))
      expect(getText('zero-raw')).toBe('0')
      expect(getText('string-zero')).toBe(GeoUnit.getInstance('en-US').format('0', 'meter'))
      expect(getText('padded-zero')).toBe(GeoUnit.getInstance('en-US').format(' 0 ', 'meter'))
      expect(getText('negative')).toBe(GeoUnit.getInstance('en-US').format(-20, 'celsius'))
      expect(getText('empty-undefined')).toBe('')
      expect(getText('empty-string')).toBe('')
      expect(getText('whitespace-value')).toBe('   ')
      expect(getText('whitespace-unit')).toBe('42')
      expect(getText('unknown-unit')).toBe('42')
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
            h(TestFormattedUnit, {
              'data-testid': 'xss-check',
              'value': xssPayload,
              'unit': 'kilogram',
              'formatting': false
            }),
            h(TestFormattedUnit, {
              'data-testid': 'aria-check',
              'value': 5,
              'unit': 'liter',
              'language': 'ru-RU',
              'aria-label': 'Total volume',
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
      expect(ariaElement.textContent).toBe(GeoUnit.getInstance('ru-RU').format(5, 'liter'))
      expect(ariaElement.getAttribute('aria-label')).toBe('Total volume')
      expect(ariaElement.style.fontWeight).toBe('700')

      ariaElement.click()
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
