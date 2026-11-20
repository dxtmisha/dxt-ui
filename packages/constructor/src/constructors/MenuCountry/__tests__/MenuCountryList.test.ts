// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed, effectScope, reactive, toRef } from 'vue'
import { type GeoFlagNational, GeoFlagRef } from '@dxtmisha/functional'

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
      const items = countryList.items.value as Array<Record<string, any>>

      const usItem = items.find(item => item.value === 'US')
      expect(usItem?.type).toBeUndefined()
      expect(usItem?.caption).toBe('+1')

      const doGroup = items.find(item => item.index === 'DO')
      expect(doGroup?.type).toBe('group')
      expect(doGroup?.caption).toBeUndefined()
      expect(doGroup?.search).not.toContain('+1-809')
      expect(doGroup?.search).not.toContain('+1-829')
      expect(doGroup?.value).toHaveLength(3)
      expect(doGroup?.value[0]).toMatchObject({
        index: 'DO',
        value: 'DO',
        label: '+1-809',
        detail: { country: 'DO', icon: 'f-do', phone: '1809' }
      })
      expect(doGroup?.value[1]).toMatchObject({
        index: 'DO-1-829',
        value: 'DO-1-829',
        label: '+1-829',
        detail: { country: 'DO', icon: 'f-do', phone: '1829' }
      })
      expect(doGroup?.value[1]?.search).toContain('+1-829')
      expect(doGroup?.value[1]?.search).toContain('+1829')

      const vaGroup = items.find(item => item.index === 'VA')
      expect(vaGroup?.type).toBe('group')
      expect(vaGroup?.caption).toBeUndefined()
      expect(vaGroup?.value).toHaveLength(2)
      expect(vaGroup?.value[1]).toMatchObject({
        index: 'VA-39-06-698',
        value: 'VA-39-06-698',
        label: '+39-06-698',
        detail: { country: 'VA', icon: 'f-va', phone: '3906698' }
      })
    })

    scope.stop()
  })
})
