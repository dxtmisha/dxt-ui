// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { Geo } from '../Geo'

describe('Geo', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    Geo.setTimezone(0)
  })

  it('should retrieve location default based on runtime environment (en-GB)', () => {
    // defaults to en-GB if nothing else matches
    const location = Geo.getLocation()
    expect(location).toBeTruthy()
    expect(typeof location).toBe('string')
  })

  it('should retrieve country data', () => {
    const item = Geo.get()
    expect(item).toBeTruthy()
    expect(item.country).toBeTruthy()
  })

  it('should get standard form', () => {
    const standard = Geo.getStandard()
    expect(standard).toContain('-') // e.g. en-GB
  })

  it('should set timezone and format correctly', () => {
    Geo.setTimezone(-120) // +02:00
    expect(Geo.getTimezoneFormat()).toBe('+02:00')

    Geo.setTimezone(330) // -05:30
    expect(Geo.getTimezoneFormat()).toBe('-05:30')
  })

  it('should change location via a set', () => {
    Geo.set('ru-RU')
    expect(Geo.getLocation()).toBe('ru-RU')
    expect(Geo.getLanguage()).toBe('ru')
    expect(Geo.getCountry()).toBe('RU')
  })

  it('should find full data by country code', () => {
    const res = Geo.getByCode('US')
    expect(res.country).toBe('US')
    expect(res.language).toBe('en') // typically US defaults to English in list
  })

  it('should find full data by language code', () => {
    const res = Geo.getByCode('fr')
    expect(res.language).toBe('fr')
  })

  it('should return the default item when code is not found', () => {
    const res = Geo.getByCode('zz-ZZ')
    expect(res).toBeTruthy() // Returns fallback from a list
  })
})
