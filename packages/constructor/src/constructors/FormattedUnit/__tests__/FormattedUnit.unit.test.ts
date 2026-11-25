// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import {
  DesignLogicAbstract,
  DesignName,
  GeoRef,
  GeoUnit,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedUnit } from '../FormattedUnit'
import type { FormattedUnitProps } from '../props'

const cleanups: Array<() => void> = []

const ALL_GEO_UNITS = [
  'millimeter',
  'centimeter',
  'meter',
  'kilometer',
  'square-meter',
  'hectare',
  'gram',
  'kilogram',
  'tonne',
  'milliliter',
  'liter',
  'celsius',
  'kilometer-per-hour'
] as const

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

const createInstance = (initialProps: FormattedUnitProps): {
  props: FormattedUnitProps
  instance: FormattedUnit
} => {
  const props = reactive<FormattedUnitProps>(initialProps)
  const element = ref<HTMLSpanElement | undefined>(undefined)
  const naming = new DesignName('d1.formattedUnit')
  const instance = new FormattedUnit(props, element, naming)

  return { props, instance }
}

describe('FormattedUnit (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend DesignLogicAbstract and format units according to locale', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const scope = effectScope()
      let instance: FormattedUnit | undefined

      scope.run(() => {
        const result = createInstance({
          value: 100,
          unit: 'kilogram',
          language: 'ru-RU'
        })
        instance = result.instance
      })
      cleanups.push(() => scope.stop())

      expect(instance).toBeInstanceOf(DesignLogicAbstract)
      expect(instance?.isMounted.value).toBe(false)
      expect(instance?.item).toBe(GeoUnit.getInstance('ru-RU').format(100, 'kilogram'))
      expectTypeOf(instance!.item).toEqualTypeOf<string>()
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it.each(ALL_GEO_UNITS)('should format unit "%s" in both en-US (imperial) and ru-RU (metric)', (unit) => {
      const usCase = createInstance({ value: 25, unit, language: 'en-US' })
      const ruCase = createInstance({ value: 25, unit, language: 'ru-RU' })

      expect(usCase.instance.item).toBe(GeoUnit.getInstance('en-US').format(25, unit))
      expect(ruCase.instance.item).toBe(GeoUnit.getInstance('ru-RU').format(25, unit))
      expect(usCase.instance.item).not.toBe(ruCase.instance.item)
    })

    it('should convert metric values to imperial for en-US and preserve metric for ru-RU', () => {
      const tempUs = createInstance({ value: 100, unit: 'celsius', language: 'en-US' })
      const tempRu = createInstance({ value: 100, unit: 'celsius', language: 'ru-RU' })

      expect(tempUs.instance.item).toContain('212')
      expect(tempRu.instance.item).toContain('100')

      const distanceUs = createInstance({ value: 10, unit: 'kilometer', language: 'en-US' })
      const distanceRu = createInstance({ value: 10, unit: 'kilometer', language: 'ru-RU' })

      expect(distanceUs.instance.item).toBe(GeoUnit.getInstance('en-US').kilometer(10))
      expect(distanceRu.instance.item).toBe(GeoUnit.getInstance('ru-RU').kilometer(10))
    })

    it('should default formatting to true when omitted and return raw string when formatting is false', () => {
      const omitted = createInstance({ value: 42, unit: 'meter', language: 'ru-RU' })
      expect(omitted.instance.item).toBe(GeoUnit.getInstance('ru-RU').format(42, 'meter'))

      const disabled = createInstance({ value: 42, unit: 'meter', formatting: false, language: 'ru-RU' })
      expect(disabled.instance.item).toBe('42')
    })

    it('should isolate state across multiple instances and react to global GeoRef updates when language is unset', () => {
      const first = createInstance({ value: 10, unit: 'kilogram' })
      const second = createInstance({ value: 10, unit: 'kilogram', language: 'en-US' })

      expect(first.instance.item).toBe(GeoUnit.getInstance('en-US').format(10, 'kilogram'))
      expect(second.instance.item).toBe(GeoUnit.getInstance('en-US').format(10, 'kilogram'))

      GeoRef.set('ru-RU')
      expect(first.instance.item).toBe(GeoUnit.getInstance('ru-RU').format(10, 'kilogram'))
      expect(second.instance.item).toBe(GeoUnit.getInstance('en-US').format(10, 'kilogram'))
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
    ])('should treat $label as a valid formattable value', ({ value }) => {
      const usResult = createInstance({ value, unit: 'celsius', language: 'en-US' })
      expect(usResult.instance.item).toBe(GeoUnit.getInstance('en-US').format(value, 'celsius'))

      const ruResult = createInstance({ value, unit: 'kilogram', language: 'ru-RU' })
      expect(ruResult.instance.item).toBe(GeoUnit.getInstance('ru-RU').format(value, 'kilogram'))
    })

    it('should return "0" rather than empty string when value is 0 and formatting is false or unit is omitted', () => {
      expect(createInstance({ value: 0, unit: 'kilogram', formatting: false }).instance.item).toBe('0')
      expect(createInstance({ value: -0, unit: 'kilogram', formatting: false }).instance.item).toBe('0')
      expect(createInstance({ value: '0', formatting: false }).instance.item).toBe('0')
      expect(createInstance({ value: 0 }).instance.item).toBe('0')
    })

    it('should handle negative values, non-finite numbers, empty strings, whitespace, and nullish values safely', () => {
      expect(createInstance({ value: -15, unit: 'celsius', language: 'en-US' }).instance.item)
        .toBe(GeoUnit.getInstance('en-US').format(-15, 'celsius'))
      expect(createInstance({ value: -250.5, unit: 'meter', language: 'ru-RU' }).instance.item)
        .toBe(GeoUnit.getInstance('ru-RU').format(-250.5, 'meter'))
      expect(createInstance({ value: Number.NaN, unit: 'kilogram', language: 'en-US' }).instance.item)
        .toBe('NaN')
      expect(createInstance({ value: Number.POSITIVE_INFINITY, unit: 'kilogram', language: 'en-US' }).instance.item)
        .toBe('Infinity')
      expect(createInstance({ value: Number.NEGATIVE_INFINITY, unit: 'kilogram', language: 'en-US' }).instance.item)
        .toBe('-Infinity')
      expect(createInstance({ unit: 'kilogram' }).instance.item).toBe('')
      expect(createInstance({ value: '', unit: 'kilogram' }).instance.item).toBe('')
      expect(createInstance({ value: '   ', unit: 'kilogram' }).instance.item).toBe('   ')
      expect(createInstance({ value: 'undefined', unit: 'kilogram', language: 'en-US' }).instance.item)
        .toBe('undefined')
      expect(createInstance({ value: 'null', unit: 'kilogram', language: 'en-US' }).instance.item)
        .toBe('null')

      const runtimeNullProps = reactive({ value: null as unknown as undefined, unit: 'kilogram' })
      const nullInstance = new FormattedUnit(
        runtimeNullProps,
        ref<HTMLSpanElement | undefined>(undefined),
        new DesignName('d1.formattedUnit')
      )
      expect(nullInstance.item).toBe('')
    })

    it('should handle whitespace-only unit/language props and unknown units gracefully', () => {
      const whitespaceOptions = createInstance({
        value: 50,
        unit: '   ',
        language: '   '
      })
      expect(whitespaceOptions.instance.item).toBe('50')

      const whitespaceLanguage = createInstance({
        value: 50,
        unit: 'kilogram',
        language: '   '
      })
      expect(whitespaceLanguage.instance.item).toBe(GeoUnit.getInstance('en-US').format(50, 'kilogram'))

      const unknownUnit = createInstance({
        value: 100,
        unit: 'unknown-unit',
        language: 'en-US'
      })
      expect(unknownUnit.instance.item).toBe('100')
    })
  })

  describe('Lifecycle orchestration', () => {
    it('should transition isMounted to true when instantiated inside a mounted Vue component', () => {
      let instance: FormattedUnit | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<FormattedUnitProps>({
            value: 42,
            unit: 'meter',
            language: 'ru-RU'
          })
          const element = ref<HTMLSpanElement | undefined>(undefined)
          const naming = new DesignName('d1.formattedUnit')
          instance = new FormattedUnit(props, element, naming)

          return () => h('span', { ref: element }, instance?.item)
        }
      })

      const host = document.createElement('div')
      const app = createApp(Component)
      app.mount(host)
      cleanups.push(() => app.unmount())

      expect(instance?.isMounted.value).toBe(true)
      expect(host.firstElementChild?.textContent).toBe(GeoUnit.getInstance('ru-RU').format(42, 'meter'))
    })

    it('should respect hasLifecycle=false when lifecycle registration is disabled', () => {
      let instance: FormattedUnit | undefined

      const Component = defineComponent({
        setup() {
          const props = reactive<FormattedUnitProps>({
            value: 42,
            unit: 'meter',
            language: 'ru-RU'
          })
          const element = ref<HTMLSpanElement | undefined>(undefined)
          const naming = new DesignName('d1.formattedUnit')
          instance = new FormattedUnit(
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
