// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, toRef } from 'vue'
import { GeoFlagRef } from '@dxtmisha/functional'

import { MenuLanguageList } from '../MenuLanguage'
import type { MenuLanguageProps } from '../props'

describe('MenuLanguageList', () => {
  it('should generate localized language items via getNationalLanguage with search metadata', () => {
    const scope = effectScope()
    const props = reactive<MenuLanguageProps>({
      language: 'en',
      list: ['en', 'vi', 'ru']
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const languageList = new MenuLanguageList(props, () => flag)

      expect(languageList.flagList.value.length).toBeGreaterThanOrEqual(3)

      const items = languageList.items.value
      expect(items.every(item => !('caption' in item))).toBe(true)

      const viItem = items.find(item => item.value === 'vi')
      expect(viItem).toBeDefined()
      expect(viItem?.search).toContain('vi')
      expect(viItem?.search).toContain('Tiếng Việt')

      const enItem = items.find(item => item.value === 'en')
      expect(enItem).toBeDefined()
      expect(enItem?.search).toContain('en')
      expect(enItem?.search).toContain('English')
    })

    scope.stop()
  })

  it('should filter language list reactively when props.list updates', () => {
    const scope = effectScope()
    const props = reactive<MenuLanguageProps>({
      language: 'en',
      list: ['en', 'vi', 'ru']
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const languageList = new MenuLanguageList(props, () => flag)

      expect(languageList.items.value.map(item => item.value)).toEqual(
        expect.arrayContaining(['en', 'vi', 'ru'])
      )

      props.list = ['vi']
      expect(languageList.items.value.map(item => item.value)).toEqual(['vi'])
    })

    scope.stop()
  })

  it('should defer flag getter resolution until flagList or items are accessed and cache ComputedRef', () => {
    const scope = effectScope()
    const props = reactive<MenuLanguageProps>({
      language: 'en',
      list: ['vi']
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const getNationalLanguageSpy = vi.spyOn(flag, 'getNationalLanguage')
      const flagGetter = vi.fn(() => flag)
      const languageList = new MenuLanguageList(props, flagGetter)

      expect(flagGetter).not.toHaveBeenCalled()
      expect(getNationalLanguageSpy).not.toHaveBeenCalled()

      expect(languageList.items.value).toHaveLength(1)
      expect(flagGetter).toHaveBeenCalledTimes(1)
      expect(getNationalLanguageSpy).toHaveBeenCalledTimes(1)

      // Subsequent reactive reads reuse cached ComputedRef without re-invoking flagGetter
      props.list = ['en', 'vi']
      expect(languageList.items.value).toHaveLength(2)
      expect(flagGetter).toHaveBeenCalledTimes(1)
    })

    scope.stop()
  })

  it('should update localized labels reactively when props.language changes', () => {
    const scope = effectScope()
    const props = reactive<MenuLanguageProps>({
      language: 'en',
      list: ['ru']
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const languageList = new MenuLanguageList(props, () => flag)

      const enRepresentation = languageList.items.value[0]
      expect(enRepresentation?.search).toContain('Russian')

      props.language = 'vi'
      const viRepresentation = languageList.items.value[0]
      expect(viRepresentation?.search).toContain('Tiếng Nga')
      expect(viRepresentation?.search).not.toContain('  ')
    })

    scope.stop()
  })

  it('should fall back to default language when props.list contains only unknown codes and return full list when undefined', () => {
    const scope = effectScope()
    const props = reactive<MenuLanguageProps>({
      language: 'en',
      list: ['xx-nonexistent']
    })

    scope.run(() => {
      const flag = new GeoFlagRef(toRef(props, 'language'))
      const languageList = new MenuLanguageList(props, () => flag)

      expect(languageList.items.value).toHaveLength(1)
      expect(languageList.items.value[0]?.value).toBe('en')

      props.list = undefined
      expect(languageList.items.value.length).toBeGreaterThan(3)
    })

    scope.stop()
  })
})
