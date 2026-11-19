// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { computed, effectScope, reactive, ref, toRef } from 'vue'
import { DesignName, type GeoFlagNational, GeoFlagRef, type ListSelectedList } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { MenuInclude, type MenuProps, type MenuPropsInclude } from '../../Menu'
import type { WindowEmitOptions } from '../../Window'
import { MenuCountry, type MenuCountryConstructors } from '../MenuCountry'
import type { MenuCountryProps } from '../props'

class InspectableMenuCountry extends MenuCountry {
  get instantiatedItems(): Partial<Record<keyof MenuCountryConstructors, unknown>> {
    return this.instances
  }
}

describe('MenuCountry (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.menuCountry')

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should keep event, menu, and model lazy until accessed or triggered', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        list: ['US', 'VN']
      })

      scope.run(() => {
        const menuCountry = new InspectableMenuCountry(props, element, naming)

        expect(menuCountry.hasInstance('flag')).toBe(true)
        expect(menuCountry.hasInstance('event')).toBe(false)
        expect(menuCountry.hasInstance('menu')).toBe(false)
        expect(menuCountry.hasInstance('model')).toBe(false)
        expect(menuCountry.instantiatedItems.event).toBeUndefined()
        expect(menuCountry.instantiatedItems.menu).toBeUndefined()
        expect(menuCountry.instantiatedItems.model).toBeUndefined()

        const binds = menuCountry.binds
        expect(Array.isArray(binds.list)).toBe(true)
        expect(menuCountry.hasInstance('event')).toBe(false)
        expect(menuCountry.hasInstance('model')).toBe(false)

        expect(menuCountry.i('menu')).toBeInstanceOf(MenuInclude)
        expect(menuCountry.hasInstance('menu')).toBe(true)

        menuCountry.onClick(new MouseEvent('click'), { type: 'item', value: 'US', detail: undefined })
        expect(menuCountry.hasInstance('event')).toBe(true)
        expect(menuCountry.hasInstance('model')).toBe(false)

        menuCountry.onUpdateSelected('US')
        expect(menuCountry.hasInstance('model')).toBe(true)
      })

      scope.stop()
    })

    it('should support overriding constructors via DI and initFlagList subclassing', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        language: 'en',
        list: ['US', 'GB']
      })
      const emits = vi.fn()

      class CustomEventInclude extends EventClickInclude {
        override readonly onClick = vi.fn()
      }

      class CustomGeoFlagRef extends GeoFlagRef {}

      class CustomMenuInclude<
        Props extends MenuPropsInclude = MenuPropsInclude,
        PropsExtra extends MenuProps = MenuProps
      > extends MenuInclude<Props, PropsExtra> {}

      class CustomModelInclude extends ModelInclude<ListSelectedList | undefined> {}

      class SubclassMenuCountry extends MenuCountry {
        protected override initFlagList() {
          return computed<GeoFlagNational[]>(() => [
            {
              language: 'English',
              languageCode: 'en',
              country: 'United States',
              countryCode: 'US',
              standard: 'en-US',
              icon: 'f-us',
              label: 'United States',
              value: 'US',
              phoneCode: '1',
              description: 'United States',
              nationalLanguage: 'English',
              nationalCountry: 'United States'
            }
          ])
        }
      }

      scope.run(() => {
        const menuCountry = new SubclassMenuCountry(
          props,
          element,
          naming,
          undefined,
          undefined,
          emits,
          {
            event: CustomEventInclude,
            flag: CustomGeoFlagRef,
            menu: CustomMenuInclude,
            model: CustomModelInclude
          }
        )

        expect(menuCountry.i('menu')).toBeInstanceOf(CustomMenuInclude)
        expect(menuCountry.flagList.value).toHaveLength(1)
        expect(menuCountry.flagList.value[0]?.value).toBe('US')

        menuCountry.onClick(new MouseEvent('click'))
        expect(menuCountry.i('event')).toBeInstanceOf(CustomEventInclude)
        expect((menuCountry.i('event') as CustomEventInclude).onClick).toHaveBeenCalledTimes(1)

        menuCountry.onUpdateSelected('US')
        expect(menuCountry.i('model')).toBeInstanceOf(CustomModelInclude)
        expect(emits).toHaveBeenCalledWith('update:selected', 'US')
        expect(emits).toHaveBeenCalledWith('update:modelSelected', 'US')

        const flagDi = new MenuCountry(
          props,
          element,
          naming,
          undefined,
          undefined,
          emits,
          {
            flag: CustomGeoFlagRef
          }
        )
        expect(flagDi.i('flag')).toBeInstanceOf(CustomGeoFlagRef)
        expect(toRef(props, 'language').value).toBe('en')
      })

      scope.stop()
    })
  })

  describe('Country list, showPhoneCode, binds, and event handlers', () => {
    it('should filter flagList reactively and format captions when showPhoneCode is enabled', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        language: 'en',
        list: ['US', 'VN'],
        selected: 'VN',
        isSelectedByValue: true,
        showPhoneCode: false
      })

      scope.run(() => {
        const menuCountry = new MenuCountry(props, element, naming)
        const baseList = menuCountry.binds.list as GeoFlagNational[]

        expect(baseList.length).toBeGreaterThanOrEqual(2)
        expect(baseList.every(item => !('caption' in item))).toBe(true)
        expect(menuCountry.binds.selected).toBe('VN')
        expect(menuCountry.binds.isSelectedByValue).toBe(true)

        props.showPhoneCode = true
        const phoneList = menuCountry.binds.list as Array<GeoFlagNational & { caption?: string }>
        const usItem = phoneList.find(item => item.value === 'US')
        const vnItem = phoneList.find(item => item.value === 'VN')

        expect(usItem?.caption).toBe('+1')
        expect(vnItem?.caption).toBe('+84')

        props.list = ['VN']
        const filteredList = menuCountry.binds.list as Array<GeoFlagNational & { caption?: string }>
        expect(filteredList.map(item => item.value)).toEqual(['VN'])
      })

      scope.stop()
    })

    it('should filter out flags without phoneCode when showPhoneCode is true', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        showPhoneCode: true
      })

      class PartialPhoneMenuCountry extends MenuCountry {
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
        const menuCountry = new PartialPhoneMenuCountry(props, element, naming)
        const items = menuCountry.binds.list as Array<GeoFlagNational & { caption?: string }>

        expect(items).toHaveLength(1)
        expect(items[0]?.value).toBe('US')
        expect(items[0]?.caption).toBe('+1')
      })

      scope.stop()
    })

    it('should group countries with alternative dial codes when showPhoneCode is enabled', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        showPhoneCode: true,
        list: ['US', 'DO', 'VA']
      })

      scope.run(() => {
        const menuCountry = new MenuCountry(props, element, naming)
        const items = menuCountry.binds.list as Array<Record<string, any>>

        const usItem = items.find(item => item.value === 'US')
        expect(usItem?.type).toBeUndefined()
        expect(usItem?.caption).toBe('+1')

        const doGroup = items.find(item => item.index === 'DO')
        expect(doGroup?.type).toBe('group')
        expect(doGroup?.caption).toBeUndefined()
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

    it('should emit window, updateValue, update:selected, and click events properly', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        list: ['US']
      })
      const emits = vi.fn()

      scope.run(() => {
        const menuCountry = new MenuCountry(props, element, naming, undefined, undefined, emits)
        const windowOptions: WindowEmitOptions = {
          id: 'menu-country-win',
          element: document.createElement('div'),
          control: document.createElement('button'),
          open: true
        }

        menuCountry.onWindow(windowOptions)
        expect(emits).toHaveBeenCalledWith('window', windowOptions)

        menuCountry.onUpdateValue('US')
        expect(emits).toHaveBeenCalledWith('updateValue', 'US')

        menuCountry.onUpdateValue(undefined)
        expect(emits).toHaveBeenCalledWith('updateValue', undefined)

        menuCountry.onUpdateSelected(['US'])
        expect(emits).toHaveBeenCalledWith('update:selected', ['US'])
        expect(emits).toHaveBeenCalledWith('update:modelSelected', ['US'])

        menuCountry.onClick(new MouseEvent('click'), { type: 'item', value: 'US', detail: undefined })
        expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), { type: 'item', value: 'US' })
      })

      scope.stop()
    })
  })
})
