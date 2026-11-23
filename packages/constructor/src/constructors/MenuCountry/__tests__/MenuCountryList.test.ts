// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { computed, effectScope, reactive, toRef } from 'vue'
import { type GeoFlagNational, GeoFlagRef, GeoPhone } from '@dxtmisha/functional'

import type { MenuCountryListItem } from '../basicTypes'
import { MenuCountryList } from '../MenuCountryList'
import type { MenuCountryProps } from '../props'

describe('MenuCountryList', () => {
  it('should generate localized country items with search metadata', () => {
    const scope = effectScope()
    const props = reactive<MenuCountryProps>({
      language: 'en',
      list: ['US', 'VN'],
      showPhoneCode: false
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const countryList = new MenuCountryList(props, () => flag)

      expect(countryList.flagList.value.length).toBeGreaterThanOrEqual(2)

      const baseItems = countryList.items.value
      expect(baseItems.every(item => !('caption' in item))).toBe(true)

      const usItem = baseItems.find(item => item.value === 'US')
      expect(usItem?.search).toContain('US')
      expect(usItem?.search).toContain('United States')
    })

    scope.stop()
  })

  it('should filter flagList reactively and format captions and search when showPhoneCode is enabled', () => {
    const scope = effectScope()
    const props = reactive<MenuCountryProps>({
      language: 'en',
      list: ['US', 'VN'],
      showPhoneCode: true
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const countryList = new MenuCountryList(props, () => flag)

      const phoneList = countryList.items.value
      const usItem = phoneList.find(item => item.value === 'US')
      const vnItem = phoneList.find(item => item.value === 'VN')

      expect(usItem?.caption).toBe('+1')
      expect(usItem?.search).toContain('+1')
      expect(vnItem?.caption).toBe('+84')
      expect(vnItem?.search).toContain('+84')

      props.list = ['VN']
      expect(countryList.items.value.map(item => item.value)).toEqual(['VN'])
    })

    scope.stop()
  })

  it('should filter out flags without phoneCode when showPhoneCode is true', () => {
    const scope = effectScope()
    const props = reactive<MenuCountryProps>({
      showPhoneCode: true
    })

    class PartialPhoneMenuCountryList extends MenuCountryList {
      protected override initFlagList() {
        return computed<GeoFlagNational[]>(() => [
          {
            language: 'English',
            languageCode: 'en',
            country: 'United States',
            countryCode: 'US',
            standard: 'en-US',
            label: 'United States',
            value: 'US',
            phoneCode: '1',
            description: 'US',
            nationalLanguage: 'English',
            nationalCountry: 'United States'
          },
          {
            language: 'Unknown',
            languageCode: 'xx',
            country: 'NoPhone',
            countryCode: 'XX',
            standard: 'xx-XX',
            label: 'NoPhone',
            value: 'XX',
            description: 'XX',
            nationalLanguage: 'Unknown',
            nationalCountry: 'NoPhone'
          }
        ])
      }
    }

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const countryList = new PartialPhoneMenuCountryList(props, () => flag)

      expect(countryList.items.value).toHaveLength(1)
      expect(countryList.items.value[0]?.value).toBe('US')
      expect(countryList.items.value[0]?.caption).toBe('+1')
    })

    scope.stop()
  })

  it('should group countries with alternative dial codes when showPhoneCode is enabled', () => {
    const scope = effectScope()
    const props = reactive<MenuCountryProps>({
      showPhoneCode: true,
      list: ['US', 'DO', 'VA']
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const countryList = new MenuCountryList(props, () => flag)
      const items: MenuCountryListItem[] = countryList.items.value

      const usItem = items.find(item => item.value === 'US')
      expect(usItem?.type).toBeUndefined()
      expect(usItem?.caption).toBe('+1')

      const doGroup = items.find(item => item.index === 'DO')
      expect(doGroup?.type).toBe('group')
      expect(doGroup?.caption).toBeUndefined()
      expect(doGroup?.search).not.toContain('+1-809')
      expect(doGroup?.search).not.toContain('+1-829')
      const doChildren = Array.isArray(doGroup?.value) ? doGroup.value : []
      expect(doChildren).toHaveLength(3)
      expect(doChildren[0]).toMatchObject({
        index: 'DO',
        value: 'DO',
        label: '+1-809',
        detail: { country: 'DO', icon: 'f-do', phone: '1809' }
      })
      expect(doChildren[1]).toMatchObject({
        index: 'DO-1-829',
        value: 'DO-1-829',
        label: '+1-829',
        detail: { country: 'DO', icon: 'f-do', phone: '1829' }
      })
      expect(doChildren[1]?.search).toContain('+1-829')
      expect(doChildren[1]?.search).toContain('+1829')

      const vaGroup = items.find(item => item.index === 'VA')
      expect(vaGroup?.type).toBe('group')
      expect(vaGroup?.caption).toBeUndefined()
      const vaChildren = Array.isArray(vaGroup?.value) ? vaGroup.value : []
      expect(vaChildren).toHaveLength(2)
      expect(vaChildren[1]).toMatchObject({
        index: 'VA-39-06-698',
        value: 'VA-39-06-698',
        label: '+39-06-698',
        detail: { country: 'VA', icon: 'f-va', phone: '3906698' }
      })
    })

    scope.stop()
  })

  it('should defer flag getter resolution until flagList or items are accessed', () => {
    const scope = effectScope()
    const props = reactive<MenuCountryProps>({
      language: 'en',
      list: ['VN']
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const flagGetter = vi.fn(() => flag)
      const countryList = new MenuCountryList(props, flagGetter)

      expect(flagGetter).not.toHaveBeenCalled()
      expect(countryList.items.value).toHaveLength(1)
      expect(flagGetter).toHaveBeenCalledTimes(1)

      // Subsequent reactive reads reuse cached ComputedRef without re-invoking flagGetter
      props.list = ['US', 'VN']
      expect(countryList.items.value).toHaveLength(2)
      expect(flagGetter).toHaveBeenCalledTimes(1)
    })

    scope.stop()
  })

  it('should update localized labels reactively when language changes and fall back to phoneCode when GeoPhone.getCodes is empty', () => {
    const scope = effectScope()
    const props = reactive<MenuCountryProps>({
      language: 'en',
      list: ['VN'],
      showPhoneCode: true
    })

    const codesSpy = vi.spyOn(GeoPhone, 'getCodes').mockReturnValue([])

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const countryList = new MenuCountryList(props, () => flag)

      const enItem = countryList.items.value[0]
      expect(enItem?.caption).toBe('+84')
      expect(enItem?.search).toContain('+84')
      expect(enItem?.search).toContain('Vietnam')

      props.language = 'vi'
      const viItem = countryList.items.value[0]
      expect(viItem?.search).toContain('Việt Nam')
      expect(viItem?.search).not.toContain('  ')
    })

    codesSpy.mockRestore()
    scope.stop()
  })
})
