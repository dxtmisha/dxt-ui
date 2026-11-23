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
import { MenuCountryEvent } from '../MenuCountryEvent'
import { MenuCountryList } from '../MenuCountryList'
import type { MenuCountryProps } from '../props'

class InspectableMenuCountry extends MenuCountry {
  get instantiatedItems(): Partial<Record<keyof MenuCountryConstructors, unknown>> {
    return this.instances
  }
}

describe('MenuCountry (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.menuCountry')

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should keep dependencies lazy until accessed or triggered', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        list: ['US', 'VN']
      })

      scope.run(() => {
        const menuCountry = new InspectableMenuCountry(props, element, naming)

        expect(menuCountry.hasInstance('flag')).toBe(false)
        expect(menuCountry.hasInstance('list')).toBe(false)
        expect(menuCountry.hasInstance('events')).toBe(false)
        expect(menuCountry.hasInstance('event')).toBe(false)
        expect(menuCountry.hasInstance('menu')).toBe(false)
        expect(menuCountry.hasInstance('model')).toBe(false)
        expect(menuCountry.instantiatedItems.list).toBeUndefined()
        expect(menuCountry.instantiatedItems.events).toBeUndefined()

        // Instantiating list helper alone does not eagerly instantiate flag until flagList/items are read
        expect(menuCountry.i('list')).toBeInstanceOf(MenuCountryList)
        expect(menuCountry.hasInstance('list')).toBe(true)
        expect(menuCountry.hasInstance('flag')).toBe(false)

        const binds = menuCountry.binds
        expect(Array.isArray(binds.list)).toBe(true)
        expect(menuCountry.hasInstance('flag')).toBe(true)
        expect(menuCountry.hasInstance('events')).toBe(true)
        expect(menuCountry.hasInstance('event')).toBe(false)
        expect(menuCountry.hasInstance('model')).toBe(false)

        expect(menuCountry.i('menu')).toBeInstanceOf(MenuInclude)
        expect(menuCountry.hasInstance('menu')).toBe(true)

        menuCountry.i('events').onClick(new MouseEvent('click'), { type: 'item', value: 'US', detail: undefined })
        expect(menuCountry.hasInstance('event')).toBe(true)
        expect(menuCountry.hasInstance('model')).toBe(false)

        menuCountry.i('events').onUpdateSelected('US')
        expect(menuCountry.hasInstance('model')).toBe(true)
      })

      scope.stop()
    })

    it('should support overriding constructors via DI', () => {
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

      class CustomMenuCountryEvent extends MenuCountryEvent {}

      class CustomGeoFlagRef extends GeoFlagRef {}

      class CustomMenuCountryList extends MenuCountryList {
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

      class CustomMenuInclude<
        Props extends MenuPropsInclude = MenuPropsInclude,
        PropsExtra extends MenuProps = MenuProps
      > extends MenuInclude<Props, PropsExtra> {}

      class CustomModelInclude extends ModelInclude<ListSelectedList | undefined> {}

      scope.run(() => {
        const menuCountry = new MenuCountry(
          props,
          element,
          naming,
          undefined,
          undefined,
          emits,
          {
            event: CustomEventInclude,
            events: CustomMenuCountryEvent,
            flag: CustomGeoFlagRef,
            list: CustomMenuCountryList,
            menu: CustomMenuInclude,
            model: CustomModelInclude
          }
        )

        expect(menuCountry.i('menu')).toBeInstanceOf(CustomMenuInclude)
        expect(menuCountry.i('list')).toBeInstanceOf(CustomMenuCountryList)
        expect(menuCountry.i('events')).toBeInstanceOf(CustomMenuCountryEvent)
        expect(menuCountry.i('list').flagList.value).toHaveLength(1)
        expect(menuCountry.i('list').flagList.value[0]?.value).toBe('US')
        expect(menuCountry.i('flag')).toBeInstanceOf(CustomGeoFlagRef)

        menuCountry.i('events').onClick(new MouseEvent('click'))
        expect(menuCountry.i('event')).toBeInstanceOf(CustomEventInclude)
        expect((menuCountry.i('event') as CustomEventInclude).onClick).toHaveBeenCalledTimes(1)

        menuCountry.i('events').onUpdateSelected('US')
        expect(menuCountry.i('model')).toBeInstanceOf(CustomModelInclude)
        expect(emits).toHaveBeenCalledWith('update:selected', 'US')
        expect(emits).toHaveBeenCalledWith('update:modelSelected', 'US')
        expect(toRef(props, 'language').value).toBe('en')
      })

      scope.stop()
    })
  })

  describe('Binds delegation and event orchestration', () => {
    it('should combine list binds, selection props, and events binds', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        language: 'en',
        list: ['US', 'VN'],
        selected: 'VN',
        isSelectedByValue: true,
        showPhoneCode: false,
        highlightLengthStart: 1,
        showSearch: true,
        filterMode: false
      })
      const emits = vi.fn()

      scope.run(() => {
        const menuCountry = new MenuCountry(props, element, naming, undefined, undefined, emits)
        const binds = menuCountry.binds

        expect((binds.list as GeoFlagNational[]).length).toBeGreaterThanOrEqual(2)
        expect(binds.selected).toBe('VN')
        expect(binds.isSelectedByValue).toBe(true)
        expect(binds.highlightLengthStart).toBe(1)
        expect(binds.showSearch).toBe(true)
        expect(binds.filterMode).toBe(false)

        const windowOptions: WindowEmitOptions = {
          id: 'menu-country-win',
          element: document.createElement('div'),
          control: document.createElement('button'),
          open: true
        }
        menuCountry.i('events').onWindow(windowOptions)
        expect(emits).toHaveBeenCalledWith('window', windowOptions)
      })

      scope.stop()
    })

    it('should fall back to modelSelected, omit undefined optional keys, and preserve falsy values in binds', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuCountryProps>({
        list: ['VN'],
        modelSelected: 'VN',
        isSelectedByValue: false,
        highlightLengthStart: 0,
        showSearch: false,
        filterMode: false
      })

      scope.run(() => {
        const menuCountry = new MenuCountry(props, element, naming)
        const binds = menuCountry.binds

        expect(binds.selected).toBe('VN')
        expect(binds.isSelectedByValue).toBe(false)
        expect(binds.highlightLengthStart).toBe(0)
        expect(binds.showSearch).toBe(false)
        expect(binds.filterMode).toBe(false)

        // Vue casts omitted Boolean-union props (selected) to false; modelSelected must still take precedence
        props.selected = false
        expect(menuCountry.binds.selected).toBe('VN')

        props.modelSelected = undefined
        expect('selected' in menuCountry.binds).toBe(false)

        props.selected = 'US'
        expect(menuCountry.binds.selected).toBe('US')

        props.selected = undefined
        props.isSelectedByValue = undefined
        props.highlightLengthStart = undefined
        props.showSearch = undefined
        props.filterMode = undefined

        const minimalBinds = menuCountry.binds
        expect('selected' in minimalBinds).toBe(false)
        expect('isSelectedByValue' in minimalBinds).toBe(false)
        expect('highlightLengthStart' in minimalBinds).toBe(false)
        expect('showSearch' in minimalBinds).toBe(false)
        expect('filterMode' in minimalBinds).toBe(false)
      })

      scope.stop()
    })
  })
})
