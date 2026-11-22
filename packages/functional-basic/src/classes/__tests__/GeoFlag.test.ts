// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { GeoFlag, GEO_FLAG_ICON_NAME } from '../GeoFlag'
import { Geo } from '../Geo'
import { GeoIntl } from '../GeoIntl'
import { ServerStorage } from '../ServerStorage'

describe('GeoFlag', () => {
  beforeEach(() => {
    ServerStorage.reset()
    Geo.set('en-US')
  })

  afterEach(() => {
    ServerStorage.reset()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should return the flag item for the default locale and expose getCode()', () => {
      const flag = new GeoFlag('en-US')
      expect(flag.getCode()).toBe('en-US')

      const item = flag.get()

      expect(item).toBeDefined()
      expect(item?.value).toBe('US')
      expect(item?.countryCode).toBe('US')
      expect(item?.languageCode).toBe('en')
      expect(item?.icon).toBe(`${GEO_FLAG_ICON_NAME}-us`)
      expect(item?.standard).toContain('US')
    })

    it('should return the flag item for a specific country code including XK (Kosovo)', () => {
      const flag = new GeoFlag('en-US')
      const russiaItem = flag.get('RU')

      expect(russiaItem).toBeDefined()
      expect(russiaItem?.value).toBe('RU')
      expect(russiaItem?.countryCode).toBe('RU')
      expect(russiaItem?.languageCode).toBe('ru')
      expect(russiaItem?.icon).toBe('f-ru')

      const kosovoItem = flag.get('XK')
      expect(kosovoItem).toBeDefined()
      expect(kosovoItem?.value).toBe('XK')
      expect(kosovoItem?.countryCode).toBe('XK')
      expect(kosovoItem?.icon).toBe('f-xk')
      expect(kosovoItem?.phoneCode).toBe('383')
    })

    it('should return the flag icon for a code or default code via getFlag()', () => {
      const flag = new GeoFlag('fr-FR')
      expect(flag.getFlag()).toBe('f-fr')
      expect(flag.getFlag('DE')).toBe('f-de')
      expect(flag.getFlag('XK')).toBe('f-xk')
      expect(flag.getFlag('ZZ')).toBeTruthy()
    })

    it('should return the flag item with language as label and value via getLanguage()', () => {
      const flag = new GeoFlag('en-US')
      const defaultLanguageItem = flag.getLanguage()
      expect(defaultLanguageItem?.value).toBe('en')

      const russianItem = flag.getLanguage('ru-RU')
      expect(russianItem).toBeDefined()
      expect(russianItem?.value).toBe('ru')
      expect(russianItem?.languageCode).toBe('ru')
      expect(russianItem?.countryCode).toBe('RU')
      expect(russianItem?.label).toBe('Russian')
      expect(russianItem?.country).toBe('Russia')
      expect(russianItem?.icon).toBe('f-ru')
    })

    it('should return lists of all countries and deduplicated languages when no codes provided', () => {
      const flag = new GeoFlag('en-US')
      const countryList = flag.getList()
      const languageList = flag.getListLanguage()

      expect(countryList.length).toBeGreaterThan(200)
      expect(countryList[0]).toHaveProperty('icon')
      expect(countryList[0]).toHaveProperty('country')
      expect(countryList[0]).toHaveProperty('value')

      expect(languageList.length).toBeGreaterThan(50)
      expect(languageList[0]).toHaveProperty('icon')
      expect(languageList[0]).toHaveProperty('country')
      expect(languageList[0]).toHaveProperty('value')

      const dedupedLanguages = flag.getListLanguage(['US', 'GB'])
      expect(dedupedLanguages).toHaveLength(1)
      expect(dedupedLanguages[0]?.value).toBe('en')
    })

    it('should include India, the Dominican Republic, and Kosovo in the default national list', () => {
      const list = new GeoFlag('en-US').getNational()

      expect(list.find(item => item.value === 'IN')?.icon).toBe('f-in')
      expect(list.find(item => item.value === 'DO')?.icon).toBe('f-do')
      expect(list.find(item => item.value === 'XK')?.icon).toBe('f-xk')
    })

    it('should return filtered lists with or without locale-aware sorting', () => {
      const englishFlag = new GeoFlag('en-US')
      const sortedCountries = englishFlag.getList(['US', 'FR', 'DE'], true)
      expect(sortedCountries.map(item => item.value)).toEqual(['FR', 'DE', 'US'])

      const unsortedCountries = englishFlag.getList(['US', 'FR', 'DE'], false)
      expect(unsortedCountries.map(item => item.value)).toEqual(['US', 'FR', 'DE'])

      const sortedLanguages = englishFlag.getListLanguage(['RU', 'DE', 'FR'], true)
      expect(sortedLanguages.map(item => item.value)).toEqual(['fr', 'de', 'ru'])

      const unsortedLanguages = englishFlag.getListLanguage(['RU', 'DE', 'FR'], false)
      expect(unsortedLanguages.map(item => item.value)).toEqual(['ru', 'de', 'fr'])

      const russianFlag = new GeoFlag('ru-RU')
      // In ru-RU: DE = Германия, FR = Франция, US = Соединенные Штаты -> Г, С, Ф -> DE, US, FR
      expect(russianFlag.getList(['US', 'FR', 'DE']).map(item => item.value)).toEqual(['DE', 'US', 'FR'])
    })

    it('should update code via setCode and return this for chaining', () => {
      const flag = new GeoFlag('en-US')
      expect(flag.setCode('ru-RU')).toBe(flag)

      const item = flag.get()
      expect(item?.value).toBe('RU')
    })

    it('should expose standard entries in static flags dictionary', () => {
      expect(GeoFlag.flags['US']).toBe('f-us')
      expect(GeoFlag.flags['FR']).toBe('f-fr')
      expect(GeoFlag.flags['JP']).toBe('f-jp')
      expect(GeoFlag.flags['VN']).toBe('f-vn')
      expect(GeoFlag.flags['XK']).toBe('f-xk')
    })
  })

  describe('Boundary values, empty inputs, and fallback behavior', () => {
    it('should return undefined from get() and getLanguage() when Geo.find() returns undefined', () => {
      vi.spyOn(Geo, 'find')
        .mockReturnValueOnce(undefined)
        .mockReturnValueOnce(undefined)
      const flag = new GeoFlag('en-US')

      expect(flag.get('UNKNOWN')).toBeUndefined()
      expect(flag.getLanguage('UNKNOWN')).toBeUndefined()
    })

    it('should fall back to Geo.getLocation() in getCode() when code is empty string', () => {
      Geo.set('fr-FR')
      const flag = new GeoFlag('')
      expect(flag.getCode()).toBe('fr-FR')
    })

    it('should return empty arrays when an empty codes list is passed', () => {
      const flag = new GeoFlag('en-US')

      expect(flag.getList([])).toEqual([])
      expect(flag.getListLanguage([])).toEqual([])
      expect(flag.getNational([])).toEqual([])
      expect(flag.getNationalLanguage([])).toEqual([])
    })

    it('should use fallback country for unknown codes, avoid secondary Geo.find lookups, and fall back when Intl returns empty names', () => {
      const flag = new GeoFlag('en-US')
      const fallbackItem = flag.get('ZZ')
      expect(fallbackItem).toBeDefined()
      expect(fallbackItem?.icon).toBeTruthy()

      const filteredList = flag.getNational(['FR', 'ZZ'])
      expect(filteredList.map(item => item.value)).toEqual(['FR', 'US'])

      // With GeoIntl cache warmed, getNational should only call Geo.find once per requested code
      const findSpy = vi.spyOn(Geo, 'find')
      expect(flag.getNational(['FR', 'ZZ']).map(item => item.value)).toEqual(['FR', 'US'])
      expect(findSpy).toHaveBeenCalledTimes(2)

      const originalGetInstance = GeoIntl.getInstance.bind(GeoIntl)
      vi.spyOn(GeoIntl, 'getInstance').mockImplementation((code?: string) => {
        const instance = originalGetInstance(code)
        if (code === 'fr-FR') {
          return {
            countryName: () => '',
            languageName: () => ''
          } as unknown as GeoIntl
        }
        return instance
      })

      const nationalCountryFallback = flag.getNational(['FR'])
      expect(nationalCountryFallback[0]?.description).toBe('France')
      expect(nationalCountryFallback[0]?.nationalCountry).toBe('France')
      expect(nationalCountryFallback[0]?.nationalLanguage).toBe('French')

      const nationalLanguageFallback = flag.getNationalLanguage(['FR'])
      expect(nationalLanguageFallback[0]?.description).toBe('French')
      expect(nationalLanguageFallback[0]?.nationalLanguage).toBe('French')
      expect(nationalLanguageFallback[0]?.nationalCountry).toBe('France')
    })
  })

  describe('Immutability and readonly array compatibility', () => {
    it('should accept readonly as const tuples and never mutate caller arrays', () => {
      const flag = new GeoFlag('en-US')
      const readonlyCodes = ['US', 'FR', 'DE'] as const
      const mutableCodes = ['US', 'FR', 'DE']
      const snapshot = [...mutableCodes]

      expect(flag.getList(readonlyCodes).map(item => item.value)).toEqual(['FR', 'DE', 'US'])
      expect(flag.getListLanguage(readonlyCodes).map(item => item.value)).toEqual(['en', 'fr', 'de'])
      expect(flag.getNational(readonlyCodes).map(item => item.value)).toEqual(['FR', 'DE', 'US'])
      expect(flag.getNationalLanguage(readonlyCodes).map(item => item.value)).toEqual(['en', 'fr', 'de'])

      flag.getList(mutableCodes)
      expect(mutableCodes).toEqual(snapshot)
    })
  })

  describe('Multilingual, Unicode, and SSR isolation', () => {
    it('should return national names for countries and languages in Cyrillic, Vietnamese, and CJK scripts', () => {
      const flag = new GeoFlag('en-US')
      const nationalSorted = flag.getNational(['VN', 'RU', 'JP'], true)

      expect(nationalSorted).toHaveLength(3)
      expect(nationalSorted[0]?.value).toBe('JP')
      expect(nationalSorted[0]?.nationalCountry).toBe('日本')

      expect(nationalSorted[1]?.value).toBe('RU')
      expect(nationalSorted[1]?.country).toBe('Russia')
      expect(nationalSorted[1]?.nationalCountry).toBe('Россия')
      expect(nationalSorted[1]?.nationalLanguage).toBe('русский')

      expect(nationalSorted[2]?.value).toBe('VN')
      expect(nationalSorted[2]?.nationalCountry).toBe('Việt Nam')
      expect(nationalSorted[2]?.nationalLanguage).toBe('Tiếng Việt')

      const nationalUnsorted = flag.getNational(['VN', 'RU'], false)
      expect(nationalUnsorted.map(item => item.value)).toEqual(['VN', 'RU'])

      const languageSorted = flag.getNationalLanguage(['VN', 'RU'], true)
      expect(languageSorted[0]?.value).toBe('ru')
      expect(languageSorted[0]?.label).toBe('Russian')
      expect(languageSorted[0]?.description).toBe('русский')
      expect(languageSorted[0]?.nationalLanguage).toBe('русский')
      expect(languageSorted[0]?.nationalCountry).toBe('Россия')

      expect(languageSorted[1]?.value).toBe('vi')
      expect(languageSorted[1]?.label).toBe('Vietnamese')
      expect(languageSorted[1]?.description).toBe('Tiếng Việt')
      expect(languageSorted[1]?.nationalLanguage).toBe('Tiếng Việt')
      expect(languageSorted[1]?.nationalCountry).toBe('Việt Nam')

      const languageUnsorted = flag.getNationalLanguage(['VN', 'RU'], false)
      expect(languageUnsorted.map(item => item.value)).toEqual(['vi', 'ru'])
    })

    it('should isolate default Geo locale across SSR requests when window is undefined', () => {
      vi.stubGlobal('window', undefined)
      let context: Record<string, unknown> = {}
      ServerStorage.init(() => context)

      Geo.set('vi-VN')
      const firstRequestFlag = new GeoFlag()
      expect(firstRequestFlag.getCode()).toBe('vi-VN')
      expect(firstRequestFlag.getFlag()).toBe('f-vn')

      context = {}
      Geo.set('ru-RU')
      const secondRequestFlag = new GeoFlag()
      expect(secondRequestFlag.getCode()).toBe('ru-RU')
      expect(secondRequestFlag.getFlag()).toBe('f-ru')
    })
  })
})
