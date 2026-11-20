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
 * Helper to create InputPhoneCountry + InputPhoneData with typed mock dependencies.
 *
 * Вспомогательная функция для создания InputPhoneCountry и InputPhoneData с типизированными моками зависимостей.
 */
function createCountry(
  props: InputPhonePropsBasic = {},
  initialValue: string | undefined = ''
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
    get: () => undefined
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
    () => mockEvent,
    () => mockValue
  )

  return {
    country,
    countryList,
    data,
    props: reactiveProps,
    valueRef,
    setSpy,
    onValueSpy,
    emitCountrySpy
  }
}

describe('InputPhoneCountry', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize country from props, countryDefault, or Geo.getCountry()', () => {
    const { country: byDefault } = createCountry({ countryDefault: 'US' })
    expect(byDefault.item.value).toBe('US')
    expect(byDefault.toPhone()).toBe('1')

    const { country: byCountry } = createCountry({ country: 'DE', countryDefault: 'US' })
    expect(byCountry.item.value).toBe('DE')

    const { country: byModelCountry } = createCountry({ modelCountry: 'VN', countryDefault: 'US' })
    expect(byModelCountry.item.value).toBe('VN')

    const { country: fallbackCountry } = createCountry()
    expect(fallbackCountry.item.value).toBe(Geo.getCountry())
  })

  it('should update country and trigger event.onValue on valid onCountry and ignore empty or group payloads', () => {
    const { country, onValueSpy } = createCountry({ countryDefault: 'RU' }, '7')

    country.onCountry(new MouseEvent('click'), { type: 'click', value: 'DE', detail: undefined })
    expect(country.item.value).toBe('DE')
    expect(onValueSpy).toHaveBeenCalledWith('49')

    onValueSpy.mockClear()
    country.onCountry(new MouseEvent('click'), { type: 'click', value: undefined, detail: undefined })
    country.onCountry(new MouseEvent('click'), { type: 'click', value: '', detail: undefined })
    country.onCountry(new MouseEvent('click'), { type: 'group', value: [{ value: 'DO' }], detail: undefined })
    expect(country.item.value).toBe('DE')
    expect(onValueSpy).not.toHaveBeenCalled()
  })

  it('should handle selecting an alternative phone code from a country group', () => {
    const { country, data, onValueSpy, valueRef } = createCountry({}, '')

    country.onMounted()
    data.onMounted()

    country.onCountry(new MouseEvent('click'), {
      type: 'item',
      value: 'DO-1-829',
      detail: { country: 'DO', phone: '1829' }
    })

    expect(country.item.value).toBe('DO')
    expect(onValueSpy).toHaveBeenCalledWith('1829')

    valueRef.value = '18295550123'
    expect(country.active.value).toBe('DO')
    expect(country.activeDialCode.value).toBe('DO-1-829')

    country.onUnmounted()
    data.onUnmounted()
  })

  it('should preserve shared country selection (CA, KZ, BV) on bare prefix and switch on mismatching full number', async () => {
    const { country, data, valueRef, onValueSpy } = createCountry({ countryDefault: 'US' }, '79001234567')

    country.onMounted()
    data.onMounted()
    expect(country.item.value).toBe('RU')

    country.onCountry(new MouseEvent('click'), { type: 'click', value: 'CA', detail: undefined })
    valueRef.value = String(onValueSpy.mock.calls.at(-1)?.[0] ?? '1')
    await nextTick()
    expect(country.item.value).toBe('CA')
    expect(country.active.value).toBe('CA')

    valueRef.value = '12025550147'
    await nextTick()
    expect(country.item.value).toBe('US')
    expect(country.active.value).toBe('US')

    country.onCountry(new MouseEvent('click'), { type: 'click', value: 'KZ', detail: undefined })
    valueRef.value = '7'
    await nextTick()
    expect(country.item.value).toBe('KZ')
    expect(country.active.value).toBe('KZ')

    valueRef.value = '77011234567'
    await nextTick()
    expect(country.item.value).toBe('KZ')

    country.onCountry(new MouseEvent('click'), { type: 'click', value: 'BV', detail: undefined })
    valueRef.value = '4740123456'
    await nextTick()
    expect(country.item.value).toBe('BV')
    expect(country.active.value).toBe('BV')

    country.onUnmounted()
    data.onUnmounted()
  })

  it('should sync countryDefault and country props reactively and clean up on unmount', async () => {
    const defaultCountry = Geo.getCountry()
    const targetCountry = defaultCountry === 'DE' ? 'FR' : 'DE'
    const targetPrefix = String(GeoPhone.get(targetCountry)?.phone ?? '')
    const { country, data, props, valueRef, setSpy } = createCountry({}, '')

    country.onMounted()
    data.onMounted()

    props.countryDefault = targetCountry
    await nextTick()
    expect(country.item.value).toBe(targetCountry)
    expect(valueRef.value).toBe(targetPrefix)
    expect(setSpy).toHaveBeenLastCalledWith(targetPrefix)

    country.onUnmounted()
    data.onUnmounted()

    const { country: propCountry, data: propData, props: propState, valueRef: propValue, onValueSpy, emitCountrySpy } = createCountry(
      { country: 'US' },
      '79001234567'
    )
    propCountry.onMounted()
    propData.onMounted()
    expect(propCountry.item.value).toBe('RU')
    expect(emitCountrySpy).toHaveBeenCalledWith('RU')

    propState.country = 'VN'
    await nextTick()
    expect(propCountry.item.value).toBe('VN')
    expect(onValueSpy).toHaveBeenCalledWith('84')

    propValue.value = '4930123456'
    propState.country = 'DE'
    await nextTick()
    expect(propCountry.item.value).toBe('DE')
    expect(onValueSpy).toHaveBeenCalledTimes(1)

    propCountry.onUnmounted()
    propData.onUnmounted()
  })

  it('should enforce countryList restrictions across initialization, selection, prop updates, and shared prefixes', async () => {
    const { country, data, props, valueRef, onValueSpy } = createCountry(
      { countryList: ['RU', 'BY'], countryDefault: 'US' },
      ''
    )

    expect(country.item.value).toBe('RU')
    country.onMounted()
    data.onMounted()
    expect(valueRef.value).toBe('7')

    valueRef.value = '4930123456'
    await nextTick()
    expect(data.valueItem.value).toBeUndefined()
    expect(country.active.value).toBe('RU')

    valueRef.value = '375291234567'
    await nextTick()
    expect(country.active.value).toBe('BY')

    country.onCountry(new MouseEvent('click'), { type: 'click', value: 'DE', detail: undefined })
    expect(country.item.value).toBe('BY')

    props.country = 'DE'
    await nextTick()
    expect(country.item.value).toBe('BY')

    props.countryList = ['KZ']
    await nextTick()
    expect(country.item.value).toBe('KZ')
    expect(onValueSpy).toHaveBeenLastCalledWith('7')

    country.onUnmounted()
    data.onUnmounted()

    const { country: sjCountry, countryList: sjCountryList, data: sjData } = createCountry({ countryList: ['SJ'] }, '4740123456')
    expect(sjCountry.item.value).toBe('SJ')
    expect(sjCountry.active.value).toBe('SJ')
    expect(sjCountryList.resolveAllowed(sjData.valueItem.value)).toBe('SJ')
  })
})
