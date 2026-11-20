// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed, ref } from 'vue'
import { GeoPhone, type GeoPhoneMap } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { InputPhoneCountry } from '../InputPhoneCountry'
import type { InputPhoneData } from '../InputPhoneData'
import { InputPhoneFormat } from '../InputPhoneFormat'
import type { InputPhonePropsBasic } from '../props'

/**
 * Helper to create InputPhoneFormat with reactive mock dependencies.
 *
 * Вспомогательная функция для создания InputPhoneFormat с реактивными моками зависимостей.
 */
function createFormat(
  props: InputPhonePropsBasic = {},
  initialValue: string | undefined = ''
) {
  const valueRef = ref<string | undefined>(initialValue)
  const country = props.countryDefault ?? 'RU'
  const item = computed<GeoPhoneMap | undefined>(() => {
    if (!props.countryBlock && valueRef.value) {
      return GeoPhone.getByPhone(valueRef.value)?.item ?? GeoPhone.getByCode(country)
    }

    return GeoPhone.getByCode(country)
  })
  const valueDefault = computed<string>(() => (GeoPhone.get(country)?.phone ?? 1).toString())

  const mockCountry = {
    item: ref(country)
  } as unknown as InputPhoneCountry
  const mockData = {
    item,
    valueDefault
  } as unknown as InputPhoneData
  const mockValue = {
    item: valueRef
  } as unknown as FieldValueInclude<string>

  const format = new InputPhoneFormat(
    props,
    () => mockCountry,
    () => mockData,
    () => mockValue
  )

  return {
    format,
    valueRef
  }
}

describe('InputPhoneFormat', () => {
  it('should format complete, partial, locked, empty, and overflow phone values', () => {
    const { format: fullFormat, valueRef } = createFormat({ countryDefault: 'US' }, '79001234567')
    expect(fullFormat.item.value).toBe('+7-900-123-45-67')

    valueRef.value = '15551234567'
    expect(fullFormat.item.value).toBe('+1-555-123-4567')

    const { format: partialFormat } = createFormat({ countryDefault: 'RU' }, '7900123')
    expect(partialFormat.item.value).toBe('+7-900-123')

    const { format: lockedFormat } = createFormat({ countryDefault: 'RU', countryBlock: true }, '9001234567')
    expect(lockedFormat.item.value).toBe('+7-900-123-45-67')

    const { format: lockedWithPrefixFormat } = createFormat({ countryDefault: 'RU', countryBlock: true }, '79001234567')
    expect(lockedWithPrefixFormat.item.value).toBe('+7-900-123-45-67')

    const { format: emptyFormat } = createFormat({ countryDefault: 'RU' }, '')
    expect(emptyFormat.item.value).toBe('')

    const { format: overflowFormat } = createFormat({ countryDefault: 'RU' }, '79001234567890')
    expect(overflowFormat.item.value).toBe('79001234567890')
  })
})
