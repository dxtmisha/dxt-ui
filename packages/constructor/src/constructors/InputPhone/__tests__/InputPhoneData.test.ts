// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref } from 'vue'
import { Geo, GeoPhone } from '@dxtmisha/functional'

import type { FieldElementInclude } from '../../../classes/Field/FieldElementInclude'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { ModelInclude } from '../../../classes/ModelInclude'
import { InputPhoneCountry } from '../InputPhoneCountry'
import { InputPhoneCountryList } from '../InputPhoneCountryList'
import { InputPhoneData } from '../InputPhoneData'
import type { InputPhonePropsBasic } from '../props'

/**
 * Helper to create InputPhoneData and InputPhoneCountry with typed mock dependencies.
 *
 * Вспомогательная функция для создания InputPhoneData и InputPhoneCountry с типизированными моками зависимостей.
 */
function createData(
  props: InputPhonePropsBasic = {},
  initialValue: string | undefined = '',
  inputElement?: HTMLInputElement
) {
  const valueRef = ref<string | undefined>(initialValue)
  const isFullRef = ref<boolean>(true)
  const setSpy = vi.fn((next: unknown) => {
    valueRef.value = next === undefined ? undefined : String(next)
  })
  const setFullSpy = vi.fn((next: boolean) => {
    isFullRef.value = next
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
    isFull: isFullRef,
    get boolean() {
      return Boolean(valueRef.value && valueRef.value.length > 0)
    },
    set: setSpy,
    setFull: setFullSpy
  } as unknown as FieldValueInclude<string>

  const emitCountrySpy = vi.fn()
  const mockModelCountry = {
    emit: emitCountrySpy
  } as unknown as ModelInclude<string>

  const reactiveProps = reactive<InputPhonePropsBasic>({ ...props })
  const countryList = new InputPhoneCountryList(reactiveProps)
  const country: InputPhoneCountry = new InputPhoneCountry(
    reactiveProps,
    () => countryList,
    () => data,
    () => mockEvent,
    () => mockValue,
    () => mockModelCountry
  )
  const data: InputPhoneData = new InputPhoneData(
    reactiveProps,
    () => country,
    () => countryList,
    () => mockElement,
    () => mockValue
  )

  return {
    country,
    data,
    props: reactiveProps,
    valueRef,
    isFullRef,
    setSpy,
    setFullSpy,
    onValueSpy,
    emitCountrySpy
  }
}

describe('InputPhoneData', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  describe('Initialization and computed phone metadata', () => {
    it('should resolve valueDefault from InputPhoneCountry', () => {
      const { country, data: customData } = createData({ countryDefault: 'US' })
      expect(country.item.value).toBe('US')
      expect(customData.valueDefault.value).toBe('1')

      const { country: defaultCountry } = createData()
      expect(defaultCountry.item.value).toBe(Geo.getCountry())
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
      const { country, data, valueRef, setSpy } = createData({ countryDefault: 'DE' }, '')

      country.onMounted()
      data.onMounted()
      expect(setSpy).toHaveBeenCalledWith('49')
      expect(valueRef.value).toBe('49')
      expect(country.item.value).toBe('DE')

      valueRef.value = '79001234567'
      await nextTick()
      expect(country.item.value).toBe('RU')

      data.onUnmounted()
      country.onUnmounted()
      valueRef.value = '4930123456'
      await nextTick()
      expect(country.item.value).toBe('RU')
    })

    it('should not overwrite pre-existing value on mount and update country from it', () => {
      const { country, data, setSpy } = createData({ countryDefault: 'US' }, '79001234567')

      country.onMounted()
      data.onMounted()
      expect(setSpy).not.toHaveBeenCalled()
      expect(country.item.value).toBe('RU')

      data.onUnmounted()
      country.onUnmounted()
    })
  })

  describe('Window focus restoration and completeness sync', () => {
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

    it('should mark bare dial prefix as incomplete on mount and restore fullness when a complete number is set', async () => {
      const { country, data, valueRef, isFullRef, setFullSpy } = createData({ countryDefault: 'RU' }, '')

      country.onMounted()
      data.onMounted()
      expect(valueRef.value).toBe('7')
      expect(setFullSpy).toHaveBeenCalledWith(false)
      expect(isFullRef.value).toBe(false)

      valueRef.value = '79001234567'
      await nextTick()
      expect(isFullRef.value).toBe(true)

      valueRef.value = '7'
      await nextTick()
      expect(isFullRef.value).toBe(false)

      data.onUnmounted()
      country.onUnmounted()
    })

    it('should compute phone metadata detail using GeoPhoneMapInfoFull structure with isFull across modes', () => {
      const { data, valueRef, isFullRef } = createData({ countryDefault: 'RU' }, '7')
      isFullRef.value = false
      const bareDetail = data.getDetail()
      expect(bareDetail.item?.value).toBe('RU')
      expect(bareDetail.item?.info?.phone).toBe(7)
      expect(bareDetail.phone).toBe('')
      expect(bareDetail.full).toBe('7')
      expect(bareDetail.format).toBe('+7')
      expect(bareDetail.mask).toBe('+7')
      expect(bareDetail.e164).toBe('+7')
      expect(bareDetail.digits).toBe('7')
      expect(bareDetail.isFull).toBe(false)
      expect(data.e164.value).toBeUndefined()
      expect(data.digits.value).toBeUndefined()

      valueRef.value = '+7-900-123-45-67'
      isFullRef.value = true
      const fullRuDetail = data.getDetail()
      expect(fullRuDetail.item?.value).toBe('RU')
      expect(fullRuDetail.phone).toBe('9001234567')
      expect(fullRuDetail.full).toBe('79001234567')
      expect(fullRuDetail.format).toBe('+7-900-123-45-67')
      expect(fullRuDetail.mask).toBe('+7-900-123-45-67')
      expect(fullRuDetail.e164).toBe('+79001234567')
      expect(fullRuDetail.digits).toBe('79001234567')
      expect(fullRuDetail.isFull).toBe(true)
      expect(data.e164.value).toBe('+79001234567')
      expect(data.digits.value).toBe('79001234567')

      // Alternative subcode for Puerto Rico (1-939)
      const { data: prData, isFullRef: prFull } = createData({ countryDefault: 'PR' }, '+1-939-555-1234')
      prFull.value = true
      const prDetail = prData.getDetail()
      expect(prDetail.item?.value).toBe('PR')
      expect(prDetail.phone).toBe('5551234')
      expect(prDetail.full).toBe('19395551234')
      expect(prDetail.format).toBe('+1-939-555-1234')
      expect(prDetail.isFull).toBe(true)

      // countryBlock with national-only digits (including KZ starting with 7) and prefixed paste
      const { data: blockedDe, isFullRef: blockedDeFull } = createData(
        { countryDefault: 'DE', countryBlock: true },
        '30123456'
      )
      blockedDeFull.value = true
      const blockedDeDetail = blockedDe.getDetail()
      expect(blockedDeDetail.item?.value).toBe('DE')
      expect(blockedDeDetail.item?.info?.phone).toBe(49)
      expect(blockedDeDetail.phone).toBe('30123456')
      expect(blockedDeDetail.full).toBe('4930123456')
      expect(blockedDeDetail.format).toBe('+49-30-123-456')
      expect(blockedDeDetail.isFull).toBe(true)

      const { data: blockedKz, valueRef: blockedKzVal, isFullRef: blockedKzFull } = createData(
        { countryDefault: 'KZ', countryBlock: true },
        '7011234567'
      )
      blockedKzFull.value = true
      const blockedKzNationalDetail = blockedKz.getDetail()
      expect(blockedKzNationalDetail.item?.value).toBe('KZ')
      expect(blockedKzNationalDetail.phone).toBe('011234567')
      expect(blockedKzNationalDetail.full).toBe('77011234567')
      expect(blockedKzNationalDetail.isFull).toBe(true)

      blockedKzVal.value = '+7-7-01-123-45-67'
      const blockedKzPrefixedDetail = blockedKz.getDetail()
      expect(blockedKzPrefixedDetail.item?.value).toBe('KZ')
      expect(blockedKzPrefixedDetail.phone).toBe('011234567')
      expect(blockedKzPrefixedDetail.full).toBe('77011234567')
      expect(blockedKzPrefixedDetail.format).toBe('+7-7-01-123-45-67')
      expect(blockedKzPrefixedDetail.isFull).toBe(true)
    })
  })
})
