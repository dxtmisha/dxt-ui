/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { Geo } from '../Geo'
import { GeoList } from '../GeoList'
import { CookieStorage } from '../CookieStorage'
import { ServerStorage } from '../ServerStorage'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

function resetGeoContext(): void {
  vi.mocked(isDomRuntime).mockReturnValue(false)
  ServerStorage.reset()
  const context: Record<string, unknown> = {}
  ServerStorage.init(() => context)
  CookieStorage.reset()
  GeoList.reset()
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

    it('should provide independent state instances for isolated SSR requests', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const firstInstance = Geo.getObject()
      firstInstance.set('fr-FR')
      expect(Geo.getLocation()).toBe('fr-FR')

      ServerStorage.reset()
      ServerStorage.init(() => ({}))

      const secondInstance = Geo.getObject()
      expect(secondInstance).not.toBe(firstInstance)
      expect(Geo.getLocation()).toBe('en-GB')
    })
  })

  describe('Data Retrieval & Queries', () => {
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
      expect(list[0]).toHaveProperty('country')
    })

    it('should find item by full code via getByCode and find', () => {
      const result = Geo.getByCode('ru-RU')
      expect(result.language).toBe('ru')
      expect(result.country).toBe('RU')
      expect(result.standard).toBe('ru-RU')

      const found = Geo.find('de-DE')
      expect(found.country).toBe('DE')
      expect(found.language).toBe('de')
      expect(found.standard).toBe('de-DE')
    })

    it('should query exact match via getByCodeFull, country via getByCountry, and language via getByLanguage', () => {
      expect(Geo.getByCodeFull('en-US')?.country).toBe('US')
      expect(Geo.getByCodeFull('xx-ZZ')).toBeUndefined()
      expect(Geo.getByCodeFull(undefined)).toBeUndefined()

      expect(Geo.getByCountry('VN')?.country).toBe('VN')
      expect(Geo.getByCountry('ZZ')).toBeUndefined()
      expect(Geo.getByCountry(undefined)).toBeUndefined()

      expect(Geo.getByLanguage('vi')?.language).toBe('vi')
      expect(Geo.getByLanguage('zz')).toBeUndefined()
      expect(Geo.getByLanguage(undefined)).toBeUndefined()
    })

    it('should handle non-standard combinations in getByCode', () => {
      const result = Geo.getByCode('en-VN')
      expect(result.country).toBe('VN')
      expect(result.language).toBe('vi')
      expect(result.standard).toBe('en-VN')
    })

    it('should fallback to default item for invalid or undefined code in getByCode', () => {
      const invalidResult = Geo.getByCode('invalid-code')
      expect(invalidResult).toBeDefined()
      expect(invalidResult.standard).toBe('en-US')

      const undefinedResult = Geo.getByCode(undefined)
      expect(undefinedResult).toBeDefined()
    })

    it('should convert a GeoItem to standard locale format via toStandard()', () => {
      const vietnamItem = Geo.getByCountry('VN')!
      expect(Geo.toStandard(vietnamItem)).toBe('vi-VN')
      expect(Geo.toStandard(vietnamItem, 'en')).toBe('en-VN')
      expect(Geo.toStandard(undefined)).toBe('')
    })
  })

  describe('State Management (Setters & Getters)', () => {
    it('should update location state and reflect custom language in getStandard()', () => {
      Geo.set('en-VN')
      expect(Geo.getLocation()).toBe('en-VN')
      expect(Geo.getLanguage()).toBe('vi')
      expect(Geo.getLocationLanguage()).toBe('en')
      expect(Geo.getCountry()).toBe('VN')
      expect(Geo.getStandard()).toBe('en-VN')
    })

    it('should extract country and language parts from current location', () => {
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

    it('should persist changes to localStorage when save flag is true', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      Geo.set('de-DE', true)

      const stored = localStorage.getItem('ui-storage____ui:geo-code__')
      expect(stored).not.toBeNull()
      expect(stored).toContain('de-DE')
    })
  })

  describe('Timezone Management', () => {
    it('should format positive offsets correctly (e.g. UTC+3)', () => {
      Geo.setTimezone(-180)
      expect(Geo.getTimezone()).toBe(-180)
      expect(Geo.getTimezoneFormat()).toBe('+03:00')
    })

    it('should format negative offsets correctly (e.g. UTC-5)', () => {
      Geo.setTimezone(300)
      expect(Geo.getTimezoneFormat()).toBe('-05:00')
    })

    it('should handle fractional offsets (e.g. UTC+5:30)', () => {
      Geo.setTimezone(-330)
      expect(Geo.getTimezoneFormat()).toBe('+05:30')
    })

    it('should return "+00:00" when timezone offset is 0', () => {
      Geo.setTimezone(0)
      expect(Geo.getTimezone()).toBe(0)
      expect(Geo.getTimezoneFormat()).toBe('+00:00')
    })
  })

  describe('Dynamic Country Management (add & addList)', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
    })

    it('should add a new country or merge with existing through static facade', () => {
      const instance = Geo.add('VN', {
        firstDay: 'Mo',
        phoneWithin: '0'
      })

      expect(instance).toBeDefined()
      const item = Geo.getByCountry('VN')
      expect(item?.firstDay).toBe('Mo')
      expect(item?.phoneWithin).toBe('0')
    })

    it('should deep-merge nested unit overrides without wiping existing units', () => {
      const usBefore = Geo.getByCountry('US')
      const existingKilometer = usBefore?.unit?.kilometer

      Geo.add('US', {
        unit: {
          meter: 'custom-meter'
        }
      })

      const usAfter = Geo.getByCountry('US')
      expect(usAfter?.unit?.meter).toBe('custom-meter')
      expect(usAfter?.unit?.kilometer).toBe(existingKilometer)
    })

    it('should add multiple countries using Geo.addList', () => {
      Geo.addList({
        QQ: { language: 'qq', phoneCode: '777' },
        ZZ: { language: 'zz', phoneCode: '888' }
      })

      expect(Geo.getByCountry('QQ')?.phoneCode).toBe('777')
      expect(Geo.getByCountry('ZZ')?.phoneCode).toBe('888')
    })

    it('should safely handle undefined in addList', () => {
      expect(() => Geo.addList(undefined)).not.toThrow()
    })
  })
})
