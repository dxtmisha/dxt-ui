// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import { Geo, GeoPhone } from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import { InputPhoneData } from '../InputPhoneData'
import type { InputPhonePropsBasic } from '../props'

/**
 * Helper to create InputPhoneData with typed mock dependencies.
 *
 * Вспомогательная функция для создания InputPhoneData с типизированными моками зависимостей.
 */
function createData(
  props: InputPhonePropsBasic = {},
  initialValue: string | undefined = '',
  inputElement?: HTMLInputElement
) {
  const valueRef = ref<string | undefined>(initialValue)
  const setSpy = vi.fn((next: unknown) => {
    valueRef.value = next === undefined ? undefined : String(next)
  })
  const onValueSpy = vi.fn((next?: unknown) => {
    if (next !== undefined) {
      valueRef.value = String(next)
    }
  })

  const mockElement = {
    get: () => inputElement
  } as unknown as FieldElementInclude
  const mockEvent = {
    onValue: onValueSpy
  } as unknown as FieldEventInclude
  const mockValue = {
    item: valueRef,
    get boolean() {
      return Boolean(valueRef.value && valueRef.value.length > 0)
    },
    set: setSpy
  } as unknown as FieldValueInclude<string>

  const reactiveProps = reactive<InputPhonePropsBasic>({ ...props })
  const data = new InputPhoneData(
    reactiveProps,
    () => mockElement,
    () => mockEvent,
    () => mockValue
  )

  return {
    data,
    props: reactiveProps,
    valueRef,
    setSpy,
    onValueSpy
  }
}

describe('InputPhoneData', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  describe('Initialization and computed phone metadata', () => {
    it('should initialize country from countryDefault or Geo.getCountry()', () => {
      const { data: customData } = createData({ countryDefault: 'US' })
      expect(customData.country.value).toBe('US')
      expect(customData.valueDefault.value).toBe('1')

      const { data: defaultData } = createData()
      expect(defaultData.country.value).toBe(Geo.getCountry())
    })

    it('should resolve valueItem and item dynamically when countryBlock is false', () => {
      const { data, valueRef } = createData({ countryDefault: 'US' }, '79001234567')

      expect(data.valueItem.value?.value).toBe('RU')
      expect(data.item.value?.value).toBe('RU')

      valueRef.value = '4930123456'
      expect(data.valueItem.value?.value).toBe('DE')
      expect(data.item.value?.value).toBe('DE')
    })

    it('should disable dynamic phone country lookup when countryBlock is true', () => {
      const { data } = createData({ countryDefault: 'DE', countryBlock: true }, '79001234567')

      expect(data.valueItem.value).toBeUndefined()
      expect(data.item.value).toEqual(GeoPhone.getByCode('DE'))
    })
  })

  describe('Lifecycle (onMounted and onUnmounted)', () => {
    it('should set default country phone prefix on mount when value is empty and sync country watcher', async () => {
      const { data, valueRef, setSpy } = createData({ countryDefault: 'DE' }, '')

      data.onMounted()
      expect(setSpy).toHaveBeenCalledWith('49')
      expect(valueRef.value).toBe('49')
      expect(data.country.value).toBe('DE')

      valueRef.value = '79001234567'
      await nextTick()
      expect(data.country.value).toBe('RU')

      data.onUnmounted()
      valueRef.value = '4930123456'
      await nextTick()
      expect(data.country.value).toBe('RU')
    })

    it('should not overwrite pre-existing value on mount and update country from it', () => {
      const { data, setSpy } = createData({ countryDefault: 'US' }, '79001234567')

      data.onMounted()
      expect(setSpy).not.toHaveBeenCalled()
      expect(data.country.value).toBe('RU')

      data.onUnmounted()
    })
  })

  describe('User interactions (onCountry, onWindow, focus)', () => {
    it('should update country and trigger event.onValue on valid country click without changing focus', () => {
      const button = document.createElement('button')
      const input = document.createElement('input')
      document.body.append(button, input)
      button.focus()

      const { data, onValueSpy } = createData({ countryDefault: 'RU' }, '7', input)

      data.onCountry(new MouseEvent('click'), { type: 'click', value: 'DE', detail: undefined })

      expect(data.country.value).toBe('DE')
      expect(onValueSpy).toHaveBeenCalledWith('49')
      expect(document.activeElement).toBe(button)
    })

    it('should ignore empty or undefined country selection payloads in onCountry', () => {
      const { data, onValueSpy } = createData({ countryDefault: 'RU' }, '7')

      data.onCountry(new MouseEvent('click'), { type: 'click', value: undefined, detail: undefined })
      data.onCountry(new MouseEvent('click'), { type: 'click', value: '', detail: undefined })

      expect(data.country.value).toBe('RU')
      expect(onValueSpy).not.toHaveBeenCalled()
    })

    it('should focus input element after nextTick when window closes via onWindow', async () => {
      const button = document.createElement('button')
      const input = document.createElement('input')
      document.body.append(button, input)
      button.focus()

      const { data } = createData({ countryDefault: 'US' }, '', input)

      data.onWindow({
        id: 'window-1',
        element: document.createElement('div'),
        control: button,
        open: false
      })

      expect(document.activeElement).toBe(button)
      await nextTick()
      expect(document.activeElement).toBe(input)
    })

    it('should not steal focus when window opens via onWindow', async () => {
      const button = document.createElement('button')
      const input = document.createElement('input')
      document.body.append(button, input)
      button.focus()

      const { data } = createData({ countryDefault: 'US' }, '', input)

      data.onWindow({
        id: 'window-1',
        element: document.createElement('div'),
        control: button,
        open: true
      })

      await nextTick()
      expect(document.activeElement).toBe(button)
    })

    it('should safely ignore focus when input element is missing', () => {
      const { data } = createData({ countryDefault: 'US' }, '')
      expect(() => data.focus()).not.toThrow()
    })
  })

  describe('Shared country code preservation', () => {
    it('should keep selected CA or KZ when value only contains shared prefix and switch only on full mismatching number', async () => {
      const { data, valueRef, onValueSpy } = createData({ countryDefault: 'US' }, '79001234567')

      data.onMounted()
      expect(data.country.value).toBe('RU')

      data.onCountry(new MouseEvent('click'), { type: 'click', value: 'CA', detail: undefined })
      valueRef.value = String(onValueSpy.mock.calls.at(-1)?.[0] ?? '1')
      await nextTick()

      expect(valueRef.value).toBe('1')
      expect(data.country.value).toBe('CA')
      expect(data.activeCountry.value).toBe('CA')

      // Entering a US number switches CA -> US
      valueRef.value = '12025550147'
      await nextTick()
      expect(data.country.value).toBe('US')
      expect(data.activeCountry.value).toBe('US')

      // Re-selecting KZ stays KZ on prefix '7' and stays KZ on 7701...
      data.onCountry(new MouseEvent('click'), { type: 'click', value: 'KZ', detail: undefined })
      valueRef.value = '7'
      await nextTick()
      expect(data.country.value).toBe('KZ')
      expect(data.activeCountry.value).toBe('KZ')

      valueRef.value = '77011234567'
      await nextTick()
      expect(data.country.value).toBe('KZ')

      data.onUnmounted()
    })

    it('should preserve shared root country BV even after full shared-format digits are entered', async () => {
      const { data, valueRef } = createData({ countryDefault: 'US' }, '1')

      data.onMounted()
      data.onCountry(new MouseEvent('click'), { type: 'click', value: 'BV', detail: undefined })
      valueRef.value = '47'
      await nextTick()
      expect(data.country.value).toBe('BV')
      expect(data.activeCountry.value).toBe('BV')

      valueRef.value = '4740123456'
      await nextTick()
      expect(data.country.value).toBe('BV')
      expect(data.activeCountry.value).toBe('BV')

      data.onUnmounted()
    })

    it('should resolve activeCountry during SSR when explicit initial value differs from default country', () => {
      const { data } = createData({ countryDefault: 'CA' }, '79001234567')

      expect(data.activeCountry.value).toBe('RU')
    })
  })

  describe('Reactive countryDefault watcher', () => {
    it('should update country and default phone prefix when countryDefault changes while country equals Geo.getCountry()', async () => {
      const defaultCountry = Geo.getCountry()
      const targetCountry = defaultCountry === 'DE' ? 'FR' : 'DE'
      const targetPrefix = String(GeoPhone.get(targetCountry)?.phone ?? '')
      const { data, props, valueRef, setSpy } = createData({}, '')

      expect(data.country.value).toBe(defaultCountry)

      data.onMounted()
      expect(valueRef.value).toBe(String(GeoPhone.get(defaultCountry)?.phone ?? '1'))

      props.countryDefault = targetCountry
      await nextTick()

      expect(data.country.value).toBe(targetCountry)
      expect(valueRef.value).toBe(targetPrefix)
      expect(setSpy).toHaveBeenLastCalledWith(targetPrefix)

      const secondTargetCountry = targetCountry === 'DE' ? 'VN' : 'DE'
      props.countryDefault = secondTargetCountry
      await nextTick()

      expect(data.country.value).toBe(targetCountry)
      expect(valueRef.value).toBe(targetPrefix)

      data.onUnmounted()
    })

    it('should not update country when countryDefault changes after manual country selection or value change', async () => {
      const defaultCountry = Geo.getCountry()
      const manualCountry = defaultCountry === 'RU' ? 'VN' : 'RU'
      const nextDefaultCountry = defaultCountry === 'DE' ? 'FR' : 'DE'
      const { data, props } = createData({}, '')

      data.onMounted()
      data.onCountry(new MouseEvent('click'), { type: 'click', value: manualCountry, detail: undefined })
      expect(data.country.value).toBe(manualCountry)

      props.countryDefault = nextDefaultCountry
      await nextTick()

      expect(data.country.value).toBe(manualCountry)

      data.onUnmounted()
    })

    it('should stop watching countryDefault on unmount', async () => {
      const defaultCountry = Geo.getCountry()
      const targetCountry = defaultCountry === 'DE' ? 'FR' : 'DE'
      const { data: unmountedData, props: unmountedProps } = createData({}, '')
      unmountedData.onMounted()
      unmountedData.onUnmounted()

      unmountedProps.countryDefault = targetCountry
      await nextTick()

      expect(unmountedData.country.value).toBe(defaultCountry)
    })

    it('should handle selecting an alternative phone code from a country group and ignore group header clicks', () => {
      const { data, onValueSpy, valueRef } = createData({}, '')

      data.onMounted()

      data.onCountry(new MouseEvent('click'), {
        type: 'item',
        value: 'DO-1-829',
        detail: { country: 'DO', phone: '1829' }
      })

      expect(data.country.value).toBe('DO')
      expect(onValueSpy).toHaveBeenCalledWith('1829')

      valueRef.value = '18295550123'
      expect(data.activeCountry.value).toBe('DO')
      expect(data.activeDialCode.value).toBe('DO-1-829')

      data.onCountry(new MouseEvent('click'), {
        type: 'group',
        value: [{ value: 'DO' }],
        detail: undefined
      })

      expect(data.country.value).toBe('DO')
      data.onUnmounted()
    })
  })
})
