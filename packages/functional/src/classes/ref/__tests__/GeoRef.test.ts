import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { Cookie, Geo, ServerStorage } from '@dxtmisha/functional-basic'
import { GeoRef } from '../GeoRef'

describe('GeoRef', () => {
  beforeEach(() => {
    const context: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => context)
    GeoRef.set('en-US')
  })

  afterEach(() => {
    ServerStorage.reset()
  })

  describe('Cached reactive projections', () => {
    it('reuses the main ref and each computed within a request', () => {
      expect(GeoRef.get()).toBe(GeoRef.get())
      expect(GeoRef.get().value).toEqual(Geo.getItem())
      const projections = [
        [GeoRef.getCountry(), 'country'], [GeoRef.getLanguage(), 'language'],
        [GeoRef.getStandard(), 'standard'], [GeoRef.getFirstDay(), 'firstDay'],
        [GeoRef.getLocation(), 'location'], [GeoRef.getLocationCountry(), 'locationCountry'],
        [GeoRef.getLocationLanguage(), 'locationLanguage']
      ] as const
      for (const [projection, key] of projections) {
        expect(projection.value).toBe(GeoRef.get().value[key])
      }
      expect(GeoRef.getCountry()).toBe(GeoRef.getCountry())
      expect(GeoRef.getLanguage()).toBe(GeoRef.getLanguage())
      expect(GeoRef.getStandard()).toBe(GeoRef.getStandard())
      expect(GeoRef.getFirstDay()).toBe(GeoRef.getFirstDay())
      expect(GeoRef.getLocation()).toBe(GeoRef.getLocation())
      expect(GeoRef.getLocationCountry()).toBe(GeoRef.getLocationCountry())
      expect(GeoRef.getLocationLanguage()).toBe(GeoRef.getLocationLanguage())
    })

    it.each([
      ['en-US', 'US', 'en', 'en', 'Su'],
      ['en-VN', 'VN', 'vi', 'en', 'Mo'],
      ['ru-RU', 'RU', 'ru', 'ru', 'Mo']
    ])('updates all saved projections for %s', (code, country, language, locationLanguage, firstDay) => {
      const countryRef = GeoRef.getCountry()
      const languageRef = GeoRef.getLanguage()
      const standardRef = GeoRef.getStandard()
      const firstDayRef = GeoRef.getFirstDay()
      const locationRef = GeoRef.getLocation()
      const locationCountryRef = GeoRef.getLocationCountry()
      const locationLanguageRef = GeoRef.getLocationLanguage()
      GeoRef.set(code)
      expect([
        countryRef.value, languageRef.value, standardRef.value, firstDayRef.value,
        locationRef.value, locationCountryRef.value, locationLanguageRef.value
      ]).toEqual([country, language, code, firstDay, code, country, locationLanguage])
    })
  })

  describe('Defaults and server isolation', () => {
    it.each(['de-DE', () => 'vi-VN'])('accepts a default locale or its factory', (code) => {
      Cookie.getInstance('ui-geo-code').remove()
      ServerStorage.remove('__ui:geo-instance__')
      GeoRef.setValueDefault(code)
      expect(GeoRef.getStandard().value).toBe(typeof code === 'string' ? code : code())
    })

    it('isolates cached refs and locale state between server contexts', () => {
      let context: Record<string, unknown> = {}
      ServerStorage.reset()
      ServerStorage.init(() => context)
      GeoRef.set('ru-RU')
      const first = GeoRef.get()
      const firstCountry = GeoRef.getCountry()
      expect(firstCountry.value).toBe('RU')
      context = {}
      GeoRef.set('vi-VN')
      expect(GeoRef.get()).not.toBe(first)
      expect(GeoRef.getCountry()).not.toBe(firstCountry)
      expect(GeoRef.getCountry().value).toBe('VN')
      expect(firstCountry.value).toBe('RU')
      expect(first.value.country).toBe('RU')
    })
  })
})
