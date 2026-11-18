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
})
