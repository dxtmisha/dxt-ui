import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { watch } from 'vue'
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
        [GeoRef.getCountry(), 'country'],
        [GeoRef.getFirstDay(), 'firstDay'],
        [GeoRef.getLanguage(), 'language'],
        [GeoRef.getLocation(), 'location'],
        [GeoRef.getLocationCountry(), 'locationCountry'],
        [GeoRef.getLocationLanguage(), 'locationLanguage'],
        [GeoRef.getStandard(), 'standard']
      ] as const
      for (const [projection, key] of projections) {
        expect(projection.value).toBe(GeoRef.get().value[key])
      }
      expect(GeoRef.getCountry()).toBe(GeoRef.getCountry())
      expect(GeoRef.getFirstDay()).toBe(GeoRef.getFirstDay())
      expect(GeoRef.getLanguage()).toBe(GeoRef.getLanguage())
      expect(GeoRef.getLocation()).toBe(GeoRef.getLocation())
      expect(GeoRef.getLocationCountry()).toBe(GeoRef.getLocationCountry())
      expect(GeoRef.getLocationLanguage()).toBe(GeoRef.getLocationLanguage())
      expect(GeoRef.getStandard()).toBe(GeoRef.getStandard())
    })

    it.each([
      ['en-US', 'US', 'Su', 'en', 'en-US', 'US', 'en'],
      ['en-VN', 'VN', 'Mo', 'vi', 'en-VN', 'VN', 'en'],
      ['ru-RU', 'RU', 'Mo', 'ru', 'ru-RU', 'RU', 'ru']
    ])('updates all saved projections for %s', (code, country, firstDay, language, location, locationCountry, locationLanguage) => {
      const countryRef = GeoRef.getCountry()
      const firstDayRef = GeoRef.getFirstDay()
      const languageRef = GeoRef.getLanguage()
      const locationRef = GeoRef.getLocation()
      const locationCountryRef = GeoRef.getLocationCountry()
      const locationLanguageRef = GeoRef.getLocationLanguage()
      const standardRef = GeoRef.getStandard()

      GeoRef.set(code)

      expect(countryRef.value).toBe(country)
      expect(firstDayRef.value).toBe(firstDay)
      expect(languageRef.value).toBe(language)
      expect(locationRef.value).toBe(location)
      expect(locationCountryRef.value).toBe(locationCountry)
      expect(locationLanguageRef.value).toBe(locationLanguage)
      expect(standardRef.value).toBe(code)
    })

    it('triggers reactivity watchers on location update', () => {
      const standardRef = GeoRef.getStandard()
      const countryRef = GeoRef.getCountry()
      const spyStandard = vi.fn()
      const spyCountry = vi.fn()

      const stopStandard = watch(standardRef, spyStandard, { flush: 'sync' })
      const stopCountry = watch(countryRef, spyCountry, { flush: 'sync' })

      GeoRef.set('vi-VN')

      expect(spyStandard).toHaveBeenCalledWith('vi-VN', 'en-US', expect.anything())
      expect(spyCountry).toHaveBeenCalledWith('VN', 'US', expect.anything())

      stopStandard()
      stopCountry()
    })
  })

  describe('Defaults and server isolation', () => {
    it.each([
      'de-DE',
      () => 'vi-VN',
      undefined
    ])('accepts a default locale, factory or undefined', (code) => {
      Cookie.getInstance('ui-geo-code').remove()
      ServerStorage.remove('__ui:geo-instance__')

      GeoRef.setValueDefault(code)

      const expected = typeof code === 'function' ? code() : code
      if (expected) {
        expect(GeoRef.getStandard().value).toBe(expected)
      } else {
        expect(GeoRef.getStandard().value).toBeDefined()
      }
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
