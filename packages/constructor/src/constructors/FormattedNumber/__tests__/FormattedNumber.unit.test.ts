// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import {
  DesignLogicAbstract,
  DesignName,
  GeoIntl,
  GeoRef,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedNumber } from '../FormattedNumber'
import type { FormattedNumberProps } from '../props'

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

const createInstance = (initialProps: FormattedNumberProps): {
  props: FormattedNumberProps
  instance: FormattedNumber
} => {
  const props = reactive<FormattedNumberProps>(initialProps)
  const element = ref<HTMLSpanElement | undefined>(undefined)
  const naming = new DesignName('d1.formattedNumber')
  const instance = new FormattedNumber(props, element, naming)

  return { props, instance }
}

describe('FormattedNumber (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract and format numbers, currencies, and units by locale', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const scope = effectScope()
      let instance: FormattedNumber | undefined

      scope.run(() => {
        const result = createInstance({
          value: 123456.789,
          language: 'en-US'
        })
        instance = result.instance
      })
      cleanups.push(() => scope.stop())

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance?.isMounted.value).toBe(false)
      expect(instance?.item).toBe(new GeoIntl('en-US').number(123456.789))
      expectTypeOf(instance!.item).toEqualTypeOf<string>()
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should format currency, unit, currency priority over unit, and embedded string suffixes', () => {
      const currencyCase = createInstance({ value: 1000, currency: 'EUR', language: 'de-DE' })
      expect(currencyCase.instance.item).toBe(new GeoIntl('de-DE').currency(1000, 'EUR'))

      const unitCase = createInstance({ value: 50, unit: 'celsius', language: 'en-US' })
      expect(unitCase.instance.item).toBe(new GeoIntl('en-US').unit(50, 'celsius'))

      const priorityCase = createInstance({ value: 42, currency: 'USD', unit: 'kilogram', language: 'en-US' })
      expect(priorityCase.instance.item).toBe(new GeoIntl('en-US').currency(42, 'USD'))

      const embeddedCurrency = createInstance({ value: '250 USD', currency: 'EUR', language: 'en-US' })
      expect(embeddedCurrency.instance.item).toBe(new GeoIntl('en-US').currency('250 USD', 'EUR'))

      const localizedString = createInstance({ value: '1 234,56', language: 'en-US' })
      expect(localizedString.instance.item).toBe(new GeoIntl('en-US').number('1 234,56'))
    })

    it('should default formatting to true when omitted and return raw string when formatting is false', () => {
      const omitted = createInstance({ value: 10000, language: 'en-US' })
      expect(omitted.instance.item).toBe(new GeoIntl('en-US').number(10000))

      const disabled = createInstance({ value: 10000, formatting: false, currency: 'USD', language: 'en-US' })
      expect(disabled.instance.item).toBe('10000')
    })

    it('should isolate state across multiple instances and react to global GeoRef updates when language is unset', () => {
      const first = createInstance({ value: 1234.5 })
      const second = createInstance({ value: 1234.5, language: 'de-DE' })

      expect(first.instance.item).toBe(new GeoIntl('en-US').number(1234.5))
      expect(second.instance.item).toBe(new GeoIntl('de-DE').number(1234.5))

      GeoRef.set('vi-VN')
      expect(first.instance.item).toBe(new GeoIntl('vi-VN').number(1234.5))
      expect(second.instance.item).toBe(new GeoIntl('de-DE').number(1234.5))
      expect(first.instance.isMounted).not.toBe(second.instance.isMounted)
    })
  })

  describe('Boundary values, zero/falsy traps, and empty or invalid inputs', () => {
    it.each([
      { label: 'numeric 0', value: 0 },
      { label: 'negative -0', value: -0 },
      { label: 'string "0"', value: '0' },
      { label: 'padded string " 0 "', value: ' 0 ' },
      { label: 'decimal string "0.00"', value: '0.00' }
    ])('should treat $label as a valid formattable value for currency and unit', ({ value }) => {
      const currencyResult = createInstance({ value, currency: 'USD', language: 'en-US' })
      expect(currencyResult.instance.item).toBe(new GeoIntl('en-US').currency(value, 'USD'))

      const unitResult = createInstance({ value, unit: 'kilogram', language: 'en-US' })
      expect(unitResult.instance.item).toBe(new GeoIntl('en-US').unit(value, 'kilogram'))

      const numberResult = createInstance({ value, language: 'en-US' })
      expect(numberResult.instance.item).toBe(new GeoIntl('en-US').number(value))
    })

    it('should return "0" rather than empty string when value is 0 and formatting is false', () => {
      const numericZero = createInstance({ value: 0, formatting: false })
      const stringZero = createInstance({ value: '0', formatting: false })

      expect(numericZero.instance.item).toBe('0')
      expect(stringZero.instance.item).toBe('0')
    })

    it('should handle negative values, non-finite numbers, empty strings, and nullish values safely', () => {
      expect(createInstance({ value: -1234.56, language: 'en-US' }).instance.item)
        .toBe(new GeoIntl('en-US').number(-1234.56))
      expect(createInstance({ value: Number.NaN, currency: 'USD', language: 'en-US' }).instance.item)
        .toBe('NaN')
      expect(createInstance({ value: Number.POSITIVE_INFINITY, currency: 'USD', language: 'en-US' }).instance.item)
        .toBe('Infinity')
      expect(createInstance({ value: Number.NEGATIVE_INFINITY, currency: 'USD', language: 'en-US' }).instance.item)
        .toBe('-Infinity')
      expect(createInstance({}).instance.item).toBe('')
      expect(createInstance({ value: '' }).instance.item).toBe('')
      expect(createInstance({ value: '   ' }).instance.item).toBe('   ')
      expect(createInstance({ value: 'undefined', currency: 'USD', language: 'en-US' }).instance.item).toBe('undefined')
      expect(createInstance({ value: 'null', currency: 'USD', language: 'en-US' }).instance.item).toBe('null')

      const runtimeNullProps = reactive({ value: null as unknown as undefined })
      const nullInstance = new FormattedNumber(
        runtimeNullProps,
        ref<HTMLSpanElement | undefined>(undefined),
        new DesignName('d1.formattedNumber')
      )
      expect(nullInstance.item).toBe('')
    })

    it('should ignore whitespace-only currency, unit, and language props and gracefully handle invalid codes', () => {
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      const whitespaceOptions = createInstance({
        value: 1500,
        currency: '   ',
        unit: '   ',
        language: '   '
      })
      expect(whitespaceOptions.instance.item).toBe(new GeoIntl('en-US').number(1500))

      const invalidCurrency = createInstance({
        value: 100,
        currency: 'INVALID_CODE',
        language: 'en-US'
      })
      expect(invalidCurrency.instance.item).toBe('100')

      const invalidUnit = createInstance({
        value: 100,
        unit: 'not-a-valid-unit',
        language: 'en-US'
      })
      expect(invalidUnit.instance.item).toBe('100')
      expect(errorSpy).toHaveBeenCalled()
    })
  })

  describe('Lifecycle orchestration', () => {
    it('should transition isMounted to true when instantiated inside a mounted Vue component', () => {
      let instance: FormattedNumber | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<FormattedNumberProps>({ value: 42, language: 'en-US' })
          const element = ref<HTMLSpanElement | undefined>(undefined)
          const naming = new DesignName('d1.formattedNumber')
          instance = new FormattedNumber(props, element, naming)

          return () => h('span', { ref: element }, instance?.item)
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(instance?.isMounted.value).toBe(true)
      expect(host.firstElementChild?.textContent).toBe('42')
    })

    it('should respect hasLifecycle=false when lifecycle registration is disabled', () => {
      let instance: FormattedNumber | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<FormattedNumberProps>({ value: 42, language: 'en-US' })
          const element = ref<HTMLSpanElement | undefined>(undefined)
          const naming = new DesignName('d1.formattedNumber')
          instance = new FormattedNumber(
            props,
            element,
            naming,
            undefined,
            undefined,
            undefined,
            undefined,
            false
          )

          return () => h('span', { ref: element }, instance?.item)
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(instance?.isMounted.value).toBe(false)
    })
  })
})
