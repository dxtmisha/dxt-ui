// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { GeoFlag, GEO_FLAG_ICON_NAME } from '../GeoFlag'
import { Geo } from '../Geo'

describe('GeoFlag', () => {
  beforeEach(() => {
    Geo.set('en-US')
  })

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

  it('should fall back to Geo.getLocation() in getCode() when code is empty string', () => {
    Geo.set('fr-FR')
    const flag = new GeoFlag('')
    expect(flag.getCode()).toBe('fr-FR')
  })

  it('should return the flag item for a specific country code', () => {
    const flag = new GeoFlag()
    const item = flag.get('RU')

    expect(item).toBeDefined()
    expect(item?.value).toBe('RU')
    expect(item?.countryCode).toBe('RU')
    expect(item?.languageCode).toBe('ru')
    expect(item?.icon).toBe('f-ru')
  })

  it('should return a fallback item for an unknown country code', () => {
    const flag = new GeoFlag()
    const item = flag.get('ZZ')

    expect(item).toBeDefined()
    expect(item?.icon).toBeTruthy()
  })

  it('should return the flag icon for a code or default code via getFlag()', () => {
    const flag = new GeoFlag('fr-FR')
    expect(flag.getFlag()).toBe('f-fr')
    expect(flag.getFlag('DE')).toBe('f-de')
    expect(flag.getFlag('ZZ')).toBeTruthy()
  })

  it('should return a list of all countries when no codes provided', () => {
    const flag = new GeoFlag('en-US')
    const list = flag.getList()

    expect(list.length).toBeGreaterThan(100)
    expect(list[0]).toHaveProperty('icon')
    expect(list[0]).toHaveProperty('country')
    expect(list[0]).toHaveProperty('value')
  })

  it('should return a list of all languages when no codes provided', () => {
    const flag = new GeoFlag('en-US')
    const list = flag.getListLanguage()

    expect(list.length).toBeGreaterThan(50)
    expect(list[0]).toHaveProperty('icon')
    expect(list[0]).toHaveProperty('country')
    expect(list[0]).toHaveProperty('value')
  })

  it('should remove duplicate languages in getListLanguage()', () => {
    const flag = new GeoFlag('en-US')
    const list = flag.getListLanguage(['US', 'GB'])

    expect(list).toHaveLength(1)
    expect(list[0]?.value).toBe('en')
  })

  it('should return a filtered list by codes with or without sorting', () => {
    const flag = new GeoFlag('en-US')
    const sortedList = flag.getList(['US', 'FR', 'DE'], true)
    expect(sortedList.map(item => item.value)).toEqual(['FR', 'DE', 'US'])

    const unsortedList = flag.getList(['US', 'FR', 'DE'], false)
    expect(unsortedList.map(item => item.value)).toEqual(['US', 'FR', 'DE'])
  })

  it('should return a filtered list of languages by codes with or without sorting', () => {
    const flag = new GeoFlag('en-US')
    const sortedLanguages = flag.getListLanguage(['RU', 'DE', 'FR'], true)
    // English names: German (de), French (fr), Russian (ru) -> French, German, Russian
    expect(sortedLanguages.map(item => item.value)).toEqual(['fr', 'de', 'ru'])

    const unsortedLanguages = flag.getListLanguage(['RU', 'DE', 'FR'], false)
    expect(unsortedLanguages.map(item => item.value)).toEqual(['ru', 'de', 'fr'])
  })

  it('should return national names for countries with or without sorting', () => {
    const flag = new GeoFlag('en-US')
    const nationalSorted = flag.getNational(['VN', 'RU'], true)

    expect(nationalSorted).toHaveLength(2)
    expect(nationalSorted[0]?.value).toBe('RU')
    expect(nationalSorted[0]?.country).toBe('Russia')
    expect(nationalSorted[0]?.nationalCountry).toBe('Россия')
    expect(nationalSorted[0]?.nationalLanguage).toBe('русский')

    expect(nationalSorted[1]?.value).toBe('VN')
    expect(nationalSorted[1]?.nationalCountry).toBe('Việt Nam')
    expect(nationalSorted[1]?.nationalLanguage).toBe('Tiếng Việt')

    const nationalUnsorted = flag.getNational(['VN', 'RU'], false)
    expect(nationalUnsorted.map(item => item.value)).toEqual(['VN', 'RU'])
  })

  it('should return national names for languages with or without sorting', () => {
    const flag = new GeoFlag('en-US')
    const nationalSorted = flag.getNationalLanguage(['VN', 'RU'], true)

    expect(nationalSorted).toHaveLength(2)
    expect(nationalSorted[0]?.value).toBe('ru')
    expect(nationalSorted[0]?.label).toBe('Russian')
    expect(nationalSorted[0]?.description).toBe('русский')
    expect(nationalSorted[0]?.nationalLanguage).toBe('русский')
    expect(nationalSorted[0]?.nationalCountry).toBe('Россия')

    expect(nationalSorted[1]?.value).toBe('vi')
    expect(nationalSorted[1]?.label).toBe('Vietnamese')
    expect(nationalSorted[1]?.description).toBe('Tiếng Việt')
    expect(nationalSorted[1]?.nationalLanguage).toBe('Tiếng Việt')
    expect(nationalSorted[1]?.nationalCountry).toBe('Việt Nam')

    const nationalUnsorted = flag.getNationalLanguage(['VN', 'RU'], false)
    expect(nationalUnsorted.map(item => item.value)).toEqual(['vi', 'ru'])
  })

  it('should update code via setCode and return this for chaining', () => {
    const flag = new GeoFlag('en-US')
    expect(flag.setCode('ru-RU')).toBe(flag)

    const item = flag.get()
    expect(item?.value).toBe('RU')
  })

  it('should sort lists using instance locale via getLocation().sort(...)', () => {
    const flag = new GeoFlag('ru-RU')
    // In ru-RU: DE = Германия, FR = Франция, US = Соединенные Штаты -> Г, С, Ф -> DE, US, FR
    const list = flag.getList(['US', 'FR', 'DE'])
    expect(list.map(item => item.value)).toEqual(['DE', 'US', 'FR'])
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

  it('flags dictionary should have standard entries', () => {
    expect(GeoFlag.flags['US']).toBe('f-us')
    expect(GeoFlag.flags['FR']).toBe('f-fr')
    expect(GeoFlag.flags['JP']).toBe('f-jp')
    expect(GeoFlag.flags['VN']).toBe('f-vn')
  })
})
