/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { Geo } from '../Geo'
import { CookieStorage } from '../CookieStorage'
import { ServerStorage } from '../ServerStorage'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

function resetGeoContext(): void {
  vi.mocked(isDomRuntime).mockReturnValue(false)
  ServerStorage.reset()
  CookieStorage.reset()
  const context: Record<string, unknown> = {}
  ServerStorage.init(() => context)
  localStorage.clear()
  document.documentElement.setAttribute('lang', '')
}

describe('Geo', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    resetGeoContext()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('SSR and Browser Isolation', () => {
    it('should default to "en-GB" in SSR environment', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      expect(Geo.getLocation()).toBe('en-GB')
    })

    it('should detect locale from localStorage in browser context', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      localStorage.setItem('ui-storage____ui:geo-code__', JSON.stringify({
        value: 'ru-RU',
        age: Date.now()
      }))
      expect(Geo.getLocation()).toBe('ru-RU')
    })
  })

  describe('Data Retrieval', () => {
    it('should return current GeoItemFull via get() and getItem()', () => {
      Geo.set('ru-RU')
      expect(Geo.get().country).toBe('RU')
      expect(Geo.getItem().standard).toBe('ru-RU')
      expect(Geo.getFirstDay()).toBe('Mo')
    })

    it('should return the full list of countries via getList()', () => {
      const list = Geo.getList()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)
    })

    it('should find item by full code (language-country) via getByCode and find', () => {
      const result = Geo.getByCode('ru-RU')
      expect(result.language).toBe('ru')
      expect(result.country).toBe('RU')
      expect(result.standard).toBe('ru-RU')

      const found = Geo.find('de-DE')
      expect(found.country).toBe('DE')
      expect(found.language).toBe('de')
      expect(found.standard).toBe('de-DE')
    })

    it('should look up exact match via getByCodeFull, country via getByCountry, and language via getByLanguage', () => {
      expect(Geo.getByCodeFull('en-US')?.country).toBe('US')
      expect(Geo.getByCodeFull('xx-ZZ')).toBeUndefined()

      expect(Geo.getByCountry('VN')?.country).toBe('VN')
      expect(Geo.getByCountry('ZZ')).toBeUndefined()

      expect(Geo.getByLanguage('vi')?.language).toBe('vi')
      expect(Geo.getByLanguage('zz')).toBeUndefined()
    })

    it('should handle non-standard codes in getByCode (returning static base info with custom standard)', () => {
      const result = Geo.getByCode('en-VN')
      expect(result.country).toBe('VN')
      expect(result.language).toBe('vi')
      expect(result.standard).toBe('en-VN')
    })

    it('should return default item for invalid code', () => {
      const result = Geo.getByCode('invalid-code')
      expect(result).toBeDefined()
      expect(result.standard).toBe('en-US')
    })

    it('should convert a GeoItem to standard locale format via toStandard()', () => {
      const vietnamItem = Geo.getByCountry('VN')!
      expect(Geo.toStandard(vietnamItem)).toBe('vi-VN')
    })
  })

  describe('State Management (Setters & Getters)', () => {
    it('should update state and reflect custom language in getStandard()', () => {
      Geo.set('en-VN')
      expect(Geo.getLocation()).toBe('en-VN')
      expect(Geo.getLanguage()).toBe('en')
      expect(Geo.getCountry()).toBe('VN')
      expect(Geo.getStandard()).toBe('en-VN')
    })

    it('should return extracted country and language codes from location', () => {
      Geo.set('en-VN')
      expect(Geo.getLocationCountry()).toBe('VN')
      expect(Geo.getLocationLanguage()).toBe('en')

      Geo.set('ru-RU')
      expect(Geo.getLocationCountry()).toBe('RU')
      expect(Geo.getLocationLanguage()).toBe('ru')
    })

    it('should update default fallback via setValueDefault with string or function', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)

      Geo.setValueDefault('fr-FR')
      expect(Geo.getLocation()).toBe('fr-FR')
      expect(Geo.getCountry()).toBe('FR')

      Geo.setValueDefault(() => 'vi-VN')
      expect(Geo.getLocation()).toBe('vi-VN')
      expect(Geo.getCountry()).toBe('VN')
    })

    it('should persist changes to localStorage when requested', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      Geo.set('de-DE', true)

      const stored = localStorage.getItem('ui-storage____ui:geo-code__')
      expect(stored).not.toBeNull()
      expect(stored).toContain('de-DE')
    })
  })

  describe('Timezone Handling', () => {
    it('should format positive offsets correctly (UTC+3)', () => {
      Geo.setTimezone(-180)
      expect(Geo.getTimezone()).toBe(-180)
      expect(Geo.getTimezoneFormat()).toBe('+03:00')
    })

    it('should format negative offsets correctly (UTC-5)', () => {
      Geo.setTimezone(300)
      expect(Geo.getTimezoneFormat()).toBe('-05:00')
    })

    it('should handle fractional offsets (UTC+5:30)', () => {
      Geo.setTimezone(-330)
      expect(Geo.getTimezoneFormat()).toBe('+05:30')
    })

    it('should return "+00:00" when timezone is 0', () => {
      Geo.setTimezone(0)
      expect(Geo.getTimezone()).toBe(0)
      expect(Geo.getTimezoneFormat()).toBe('+00:00')
    })
  })

  describe('Instance Isolation', () => {
    it('should provide a unique instance for each request context via getObject()', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const firstInstance = Geo.getObject()
      firstInstance.set('fr-FR')

      ServerStorage.reset()
      ServerStorage.init(() => ({}))

      const secondInstance = Geo.getObject()
      expect(secondInstance).not.toBe(firstInstance)
      expect(secondInstance.getLocation()).toBe('en-GB')
    })
  })

  describe('add and addList', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
    })

    it('should add a new country or merge with existing through static Geo facade', () => {
      Geo.add('VN', {
        firstDay: 'Mo',
        phoneWithin: '0'
      })

      const item = Geo.getByCountry('VN')
      expect(item?.firstDay).toBe('Mo')
      expect(item?.phoneWithin).toBe('0')
    })

    it('should deep-merge nested unit overrides without wiping existing units', () => {
      const usBefore = Geo.getByCountry('US')
      const existingKilometerUnit = usBefore?.unit?.kilometer

      Geo.add('US', {
        unit: {
          meter: 'custom-foot'
        }
      })

      const usAfter = Geo.getByCountry('US')
      expect(usAfter?.unit?.meter).toBe('custom-foot')
      expect(usAfter?.unit?.kilometer).toBe(existingKilometerUnit)
    })

    it('should add multiple countries using Geo.addList', () => {
      Geo.addList({
        QQ: { language: 'qq', phoneCode: '777' }
      })

      expect(Geo.getByCountry('QQ')?.phoneCode).toBe('777')
    })
  })
})
