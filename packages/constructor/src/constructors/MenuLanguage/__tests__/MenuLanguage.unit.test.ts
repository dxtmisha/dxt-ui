// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { computed, effectScope, reactive, ref, toRef } from 'vue'
import { DesignName, type GeoFlagNational, GeoFlagRef, type ListSelectedList } from '@dxtmisha/functional'

import { EventClickInclude } from '../../../classes/EventClickInclude'
import { ModelInclude } from '../../../classes/ModelInclude'
import { MenuInclude, type MenuProps, type MenuPropsInclude } from '../../Menu'
import { type MenuCountryConstructors } from '../../MenuCountry'
import { MenuCountryEvent } from '../../MenuCountry/MenuCountryEvent'
import type { WindowEmitOptions } from '../../Window'
import { MenuLanguage, MenuLanguageList } from '../MenuLanguage'
import type { MenuLanguageProps } from '../props'

class InspectableMenuLanguage extends MenuLanguage {
  get instantiatedItems(): Partial<Record<keyof MenuCountryConstructors, unknown>> {
    return this.instances
  }
}

describe('MenuLanguage (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.menuLanguage')

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should keep dependencies lazy until accessed or triggered', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuLanguageProps>({
        list: ['en', 'vi']
      })

      scope.run(() => {
        const menuLanguage = new InspectableMenuLanguage(props, element, naming)

        expect(menuLanguage.hasInstance('flag')).toBe(false)
        expect(menuLanguage.hasInstance('list')).toBe(false)
        expect(menuLanguage.hasInstance('events')).toBe(false)
        expect(menuLanguage.hasInstance('event')).toBe(false)
        expect(menuLanguage.hasInstance('menu')).toBe(false)
        expect(menuLanguage.hasInstance('model')).toBe(false)
        expect(menuLanguage.instantiatedItems.list).toBeUndefined()
        expect(menuLanguage.instantiatedItems.events).toBeUndefined()

        // Instantiating list helper alone resolves MenuLanguageList and does not eagerly instantiate flag
        expect(menuLanguage.i('list')).toBeInstanceOf(MenuLanguageList)
        expect(menuLanguage.hasInstance('list')).toBe(true)
        expect(menuLanguage.hasInstance('flag')).toBe(false)

        const binds = menuLanguage.binds
        expect(Array.isArray(binds.list)).toBe(true)
        expect(menuLanguage.hasInstance('flag')).toBe(true)
        expect(menuLanguage.hasInstance('events')).toBe(true)
        expect(menuLanguage.hasInstance('event')).toBe(false)
        expect(menuLanguage.hasInstance('model')).toBe(false)

        expect(menuLanguage.i('menu')).toBeInstanceOf(MenuInclude)
        expect(menuLanguage.hasInstance('menu')).toBe(true)

        menuLanguage.i('events').onClick(new MouseEvent('click'), { type: 'item', value: 'en', detail: undefined })
        expect(menuLanguage.hasInstance('event')).toBe(true)
        expect(menuLanguage.hasInstance('model')).toBe(false)

        menuLanguage.i('events').onUpdateSelected('en')
        expect(menuLanguage.hasInstance('model')).toBe(true)
      })

      scope.stop()
    })

    it('should support overriding constructors via DI including list override', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuLanguageProps>({
        language: 'en',
        list: ['en', 'vi']
      })
      const emits = vi.fn()

      class CustomEventInclude extends EventClickInclude {
        override readonly onClick = vi.fn()
      }

      class CustomMenuCountryEvent extends MenuCountryEvent {}

      class CustomGeoFlagRef extends GeoFlagRef {}

      class CustomMenuLanguageList extends MenuLanguageList {
        protected override initFlagList() {
          return computed<GeoFlagNational[]>(() => [
            {
              language: 'English',
              languageCode: 'en',
              country: 'United States',
              countryCode: 'US',
              standard: 'en-US',
              icon: 'f-us',
              label: 'English',
              value: 'en',
              phoneCode: '1',
              description: 'English',
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
        const menuLanguage = new MenuLanguage(
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
            list: CustomMenuLanguageList,
            menu: CustomMenuInclude,
            model: CustomModelInclude
          }
        )

        expect(menuLanguage.i('menu')).toBeInstanceOf(CustomMenuInclude)
        expect(menuLanguage.i('list')).toBeInstanceOf(CustomMenuLanguageList)
        expect(menuLanguage.i('events')).toBeInstanceOf(CustomMenuCountryEvent)
        expect(menuLanguage.i('list').flagList.value).toHaveLength(1)
        expect(menuLanguage.i('list').flagList.value[0]?.value).toBe('en')
        expect(menuLanguage.i('flag')).toBeInstanceOf(CustomGeoFlagRef)

        menuLanguage.i('events').onClick(new MouseEvent('click'))
        expect(menuLanguage.i('event')).toBeInstanceOf(CustomEventInclude)
        expect((menuLanguage.i('event') as CustomEventInclude).onClick).toHaveBeenCalledTimes(1)

        menuLanguage.i('events').onUpdateSelected('en')
        expect(menuLanguage.i('model')).toBeInstanceOf(CustomModelInclude)
        expect(emits).toHaveBeenCalledWith('update:selected', 'en')
        expect(emits).toHaveBeenCalledWith('update:modelSelected', 'en')
        expect(toRef(props, 'language').value).toBe('en')
      })

      scope.stop()
    })
  })

  describe('Binds delegation and event orchestration', () => {
    it('should combine language list binds, selection props, and events binds', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuLanguageProps>({
        language: 'en',
        list: ['en', 'vi'],
        selected: 'vi',
        isSelectedByValue: true,
        highlightLengthStart: 1,
        showSearch: true,
        filterMode: false
      })
      const emits = vi.fn()

      scope.run(() => {
        const menuLanguage = new MenuLanguage(props, element, naming, undefined, undefined, emits)
        const binds = menuLanguage.binds

        expect((binds.list as GeoFlagNational[]).length).toBeGreaterThanOrEqual(2)
        expect(binds.selected).toBe('vi')
        expect(binds.isSelectedByValue).toBe(true)
        expect(binds.highlightLengthStart).toBe(1)
        expect(binds.showSearch).toBe(true)
        expect(binds.filterMode).toBe(false)

        const windowOptions: WindowEmitOptions = {
          id: 'menu-language-win',
          element: document.createElement('div'),
          control: document.createElement('button'),
          open: true
        }
        menuLanguage.i('events').onWindow(windowOptions)
        expect(emits).toHaveBeenCalledWith('window', windowOptions)
      })

      scope.stop()
    })

    it('should fall back to modelSelected, omit undefined optional keys, and preserve falsy values in binds', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<MenuLanguageProps>({
        list: ['vi'],
        modelSelected: 'vi',
        isSelectedByValue: false,
        highlightLengthStart: 0,
        showSearch: false,
        filterMode: false
      })

      scope.run(() => {
        const menuLanguage = new MenuLanguage(props, element, naming)
        const binds = menuLanguage.binds

        expect(binds.selected).toBe('vi')
        expect(binds.isSelectedByValue).toBe(false)
        expect(binds.highlightLengthStart).toBe(0)
        expect(binds.showSearch).toBe(false)
        expect(binds.filterMode).toBe(false)

        props.selected = false
        expect(menuLanguage.binds.selected).toBe('vi')

        props.modelSelected = undefined
        expect('selected' in menuLanguage.binds).toBe(false)

        props.selected = 'en'
        expect(menuLanguage.binds.selected).toBe('en')

        props.selected = undefined
        props.isSelectedByValue = undefined
        props.highlightLengthStart = undefined
        props.showSearch = undefined
        props.filterMode = undefined

        const minimalBinds = menuLanguage.binds
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
