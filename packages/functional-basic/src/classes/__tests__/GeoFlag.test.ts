// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { GeoFlag } from '../GeoFlag'
import { Geo } from '../Geo'

describe('GeoFlag', () => {
  beforeEach(() => {
    Geo.set('en-US')
  })

  it('should return the flag item to the default locale', () => {
    const flag = new GeoFlag('en-US')
    const item = flag.get()

    expect(item).toBeDefined()
    expect(item?.value).toBe('US')
    expect(item?.countryCode).toBe('US')
    expect(item?.languageCode).toBe('en')
    expect(item?.icon).toBe('f-us')
    expect(item?.standard).toContain('US')
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

    // Geo.find() returns the first country in the list as fallback
    expect(item).toBeDefined()
    expect(item?.icon).toBeTruthy()
  })

  it('should return the flag icon for a code', () => {
    const flag = new GeoFlag()
    const icon = flag.getFlag('FR')

    expect(icon).toBe('f-fr')
  })

  it('should return the fallback flag icon for unknown code', () => {
    const flag = new GeoFlag()
    const icon = flag.getFlag('ZZ')

    // Geo.find() returns the first country in the list as fallback
    expect(icon).toBeTruthy()
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

    expect(list.length).toBeGreaterThan(100)
    expect(list[0]).toHaveProperty('icon')
    expect(list[0]).toHaveProperty('country')
    expect(list[0]).toHaveProperty('value')
  })

  it('should return a filtered list by codes', () => {
    const flag = new GeoFlag('en-US')
    const list = flag.getList(['US', 'FR', 'DE'])

    expect(list).toHaveLength(3)
    const codes = list.map(item => item.value)
    expect(codes).toContain('US')
    expect(codes).toContain('FR')
    expect(codes).toContain('DE')
  })

  it('should return a filtered list of languages by codes', () => {
    const flag = new GeoFlag('en-US')
    const list = flag.getListLanguage(['US', 'FR', 'DE'])

    expect(list).toHaveLength(3)
    const codes = list.map(item => item.value)
    expect(codes).toContain('en')
    expect(codes).toContain('fr')
    expect(codes).toContain('de')
  })

  it('should return national names for countries', () => {
    const flag = new GeoFlag('en-US')
    const national = flag.getNational(['RU', 'VN'])

    expect(national).toHaveLength(2)

    // RU check
    expect(national[0]?.value).toBe('RU')
    expect(national[0]?.country).toBe('Russia') // in en-US
    expect(national[0]?.nationalCountry).toBe('Россия') // in ru-RU (standard for RU)
    expect(national[0]?.nationalLanguage).toBe('русский')

    // VN check
    expect(national[1]?.value).toBe('VN')
    expect(national[1]?.nationalCountry).toBe('Việt Nam')
    expect(national[1]?.nationalLanguage).toBe('Tiếng Việt')
  })

  it('should return national names for languages', () => {
    const flag = new GeoFlag('en-US')
    const national = flag.getNationalLanguage(['RU', 'VN'])

    expect(national).toHaveLength(2)

    // RU check
    expect(national[0]?.value).toBe('ru')
    expect(national[0]?.label).toBe('Russian') // in en-US
    expect(national[0]?.description).toBe('русский') // in ru-RU
    expect(national[0]?.nationalLanguage).toBe('русский')
    expect(national[0]?.nationalCountry).toBe('Россия')

    // VN check
    expect(national[1]?.value).toBe('vi')
    expect(national[1]?.label).toBe('Vietnamese') // in en-US
    expect(national[1]?.description).toBe('Tiếng Việt') // in vi-VN
    expect(national[1]?.nationalLanguage).toBe('Tiếng Việt')
    expect(national[1]?.nationalCountry).toBe('Việt Nam')
  })

  it('should update code via setCode', () => {
    const flag = new GeoFlag('en-US')
    flag.setCode('ru-RU')

    const item = flag.get()
    expect(item?.value).toBe('RU')
  })

  it('should return the flag item with language as label and value', () => {
    const flag = new GeoFlag('en-US')
    const item = flag.getLanguage('ru-RU')

    expect(item).toBeDefined()
    expect(item?.value).toBe('ru')
    expect(item?.languageCode).toBe('ru')
    expect(item?.countryCode).toBe('RU')
    expect(item?.label).toBe('Russian')
    expect(item?.country).toBe('Russia')
    expect(item?.icon).toBe('f-ru')
  })

  it('flags dictionary should have standard entries', () => {
    expect(GeoFlag.flags['US']).toBe('f-us')
    expect(GeoFlag.flags['FR']).toBe('f-fr')
    expect(GeoFlag.flags['JP']).toBe('f-jp')
    expect(GeoFlag.flags['VN']).toBe('f-vn')
  })
})
