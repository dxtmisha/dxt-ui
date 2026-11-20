// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { GeoPhone } from '@dxtmisha/functional'

import { InputPhoneCountryList } from '../InputPhoneCountryList'
import type { InputPhonePropsBasic } from '../props'

describe('InputPhoneCountryList', () => {
  it('should normalize allowed country list from props or dialCode attrs and resolve countries', () => {
    const props = reactive<InputPhonePropsBasic>({})
    const countryList = new InputPhoneCountryList(props)

    expect(countryList.item.value).toBeUndefined()
    expect(countryList.getFirst()).toBeUndefined()
    expect(countryList.isAllowed('US')).toBe(true)
    expect(countryList.isAllowed(undefined)).toBe(true)

    props.countryList = ['RU', 'BY']
    expect(countryList.item.value).toEqual(['RU', 'BY'])
    expect(countryList.getFirst()).toBe('RU')
    expect(countryList.isAllowed('RU')).toBe(true)
    expect(countryList.isAllowed('DE')).toBe(false)
    expect(countryList.isAllowed(undefined)).toBe(false)

    const sjMap = GeoPhone.getByPhone('4740123456')?.item
    expect(countryList.resolveAllowed(sjMap)).toBeUndefined()

    props.countryList = ['NO', 'SJ']
    expect(countryList.resolveAllowed(sjMap)).toBe('NO')

    props.countryList = ['BV', 'SJ']
    expect(countryList.resolveAllowed(sjMap)).toBe('BV')

    props.countryList = ['SJ']
    expect(countryList.resolveAllowed(sjMap)).toBe('SJ')
    expect(countryList.resolveAllowed(undefined)).toBeUndefined()

    props.countryList = undefined
    props.inputPhoneDialCodeAttrs = {
      menuCountryAttrs: {
        list: ['VN']
      }
    }
    expect(countryList.item.value).toEqual(['VN'])
    expect(countryList.isAllowed('VN')).toBe(true)
    expect(countryList.isAllowed('RU')).toBe(false)
  })
})
