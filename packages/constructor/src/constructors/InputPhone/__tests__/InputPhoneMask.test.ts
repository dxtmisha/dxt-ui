// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import type { GeoPhoneMap } from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../../classes/Field/FieldValueInclude'
import type { InputPhoneData } from '../InputPhoneData'
import { InputPhoneMask } from '../InputPhoneMask'

describe('InputPhoneMask', () => {
  it('should return fallback mask and maskVisible=false when country item is undefined', () => {
    const mockData = {
      item: ref<GeoPhoneMap | undefined>(undefined),
      valueDefault: ref('1')
    } as unknown as InputPhoneData
    const mockValue = {
      item: ref<string | undefined>('123')
    } as unknown as FieldValueInclude<string>

    const mask = new InputPhoneMask({ countryBlock: true }, () => mockData, () => mockValue)

    expect(mask.mask.value).toBe('+************')
    expect(mask.maskProps.value.modelValue).toBeUndefined()
    expect(mask.maskProps.value.value).toBe('123')
    expect(mask.maskProps.value.maskVisible).toBe(false)
    expect(mask.maskProps.value.mask).toMatchObject({
      mask: '+************',
      visiblePartly: true,
      groupSave: false,
      check: '.{7,}'
    })
  })

  it('should select mask vs maskFull depending on countryBlock and compute maskVisible from pattern count', () => {
    const item = ref<GeoPhoneMap | undefined>({
      items: [],
      info: undefined,
      value: 'US',
      mask: ['(***) ***-****'],
      maskFull: ['+1 (***) ***-****', '+1 *** *** ****'],
      next: {}
    })
    const mockData = {
      item,
      valueDefault: ref('1')
    } as unknown as InputPhoneData
    const mockValue = {
      item: ref<string | undefined>(undefined)
    } as unknown as FieldValueInclude<string>

    const unlockedMask = new InputPhoneMask(
      { countryBlock: false, modelValue: '15550001122', maskAttrs: { clearable: true } as Record<string, unknown> },
      () => mockData,
      () => mockValue
    )

    expect(unlockedMask.mask.value).toEqual(['+1 (***) ***-****', '+1 *** *** ****'])
    expect(unlockedMask.maskProps.value.maskVisible).toBe(false)
    expect(unlockedMask.maskProps.value.modelValue).toBe('15550001122')
    expect(unlockedMask.maskProps.value.value).toBe('1')
    expect(unlockedMask.maskProps.value.maskAttrs).toEqual({ clearable: true })

    const lockedMask = new InputPhoneMask(
      { countryBlock: true },
      () => mockData,
      () => mockValue
    )

    expect(lockedMask.mask.value).toEqual(['(***) ***-****'])
    expect(lockedMask.maskProps.value.maskVisible).toBe(true)
  })

  it('should fall back to "+************" when country mask array is empty', () => {
    const item = ref<GeoPhoneMap | undefined>({
      items: [],
      info: undefined,
      value: 'XX',
      mask: [],
      maskFull: [],
      next: {}
    })
    const mockData = {
      item,
      valueDefault: ref('1')
    } as unknown as InputPhoneData
    const mockValue = {
      item: ref<string | undefined>('')
    } as unknown as FieldValueInclude<string>

    const mask = new InputPhoneMask({}, () => mockData, () => mockValue)
    expect(mask.mask.value).toBe('+************')
    expect(mask.maskProps.value.value).toBe('')
  })
})
