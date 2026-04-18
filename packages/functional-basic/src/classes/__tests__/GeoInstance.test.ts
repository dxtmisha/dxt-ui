/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { GeoInstance } from '../GeoInstance'
import { ServerStorage } from '../ServerStorage'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('GeoInstance', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    localStorage.clear()

    // Reset ServerStorage to ensure fresh DataStorage Registry for each test
    const storageClass = ServerStorage as any
    storageClass.storage = undefined
    storageClass.listener = undefined
    ServerStorage.init(() => ({})) // Initialize context to suppress warnings

    // Clear any previous HTML lang setting
    document.documentElement.setAttribute('lang', '')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Location Detection (findLocation)', () => {
    it('should return "en-GB" on server (SSR)', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('en-GB')
    })

    it('should return value from localStorage if available in browser', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      localStorage.setItem('ui-storage__geo-code', JSON.stringify({
        value: 'ru-RU',
        age: Date.now()
      }))

      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('ru-RU')
    })

    it('should fallback to document.documentElement.lang in browser', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      document.documentElement.setAttribute('lang', 'fr-FR')

      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('fr-FR')
    })

    it('should fallback to navigator.language in browser', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('it-IT')

      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('it-IT')
    })
  })

  describe('Data Retrieval (getByCode)', () => {
    const geo = new GeoInstance()

    it('should find item by full code (language-country)', () => {
      const res = geo.getByCode('ru-RU')
      expect(res.language).toBe('ru')
      expect(res.country).toBe('RU')
      expect(res.standard).toBe('ru-RU')
    })

    it('should find item by country code', () => {
      const res = geo.getByCode('US')
      expect(res.country).toBe('US')
    })

    it('should find item by language code', () => {
      const res = geo.getByCode('fr')
      expect(res.language).toBe('fr')
    })

    it('should handle non-standard codes by returning the database record (us-US -> US, en-VN -> VN with "vi")', () => {
      // us-US: finds record for US (standard language for US is "en")
      const res1 = geo.getByCode('us-US')
      expect(res1.country).toBe('US')
      expect(res1.language).toBe('en')
      expect(res1.standard).toBe('en-US')

      // en-VN: finds record for Vietnam (standard language for VN is "vi")
      // getByCode returns the base info, not the requested language
      const res2 = geo.getByCode('en-VN')
      expect(res2.country).toBe('US')
      expect(res2.language).toBe('en')
      expect(res2.standard).toBe('en-US')
    })

    it('should return default item for invalid code', () => {
      const res = geo.getByCode('invalid')
      expect(res).toBeDefined()
      // Fallback is the first item in the list, which is en-US
      expect(res.standard).toBe('en-US')
    })
  })

  describe('Timezone', () => {
    it('should return formatted timezone string (Positive Offset)', () => {
      const geo = new GeoInstance()
      geo.setTimezone(-180) // UTC+3
      expect(geo.getTimezoneFormat()).toBe('+03:00')
    })

    it('should return formatted timezone string (Negative Offset)', () => {
      const geo = new GeoInstance()
      geo.setTimezone(300) // UTC-5
      expect(geo.getTimezoneFormat()).toBe('-05:00')
    })

    it('should return formatted timezone string (Complex Offset)', () => {
      const geo = new GeoInstance()
      geo.setTimezone(-330) // UTC+5:30
      expect(geo.getTimezoneFormat()).toBe('+05:30')
    })
  })

  describe('Setters', () => {
    it('should update location and language via set()', () => {
      const geo = new GeoInstance()
      geo.set('de-DE')
      expect(geo.getLocation()).toBe('de-DE')
      expect(geo.getLanguage()).toBe('de')
    })

    it('should save to storage via set(code, true)', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      const geo = new GeoInstance()
      geo.set('it-IT', true)

      const raw = localStorage.getItem('ui-storage__geo-code')
      expect(raw).toContain('it-IT')
    })

    it('should update timezone via setTimezone()', () => {
      const geo = new GeoInstance()
      geo.setTimezone(0)
      expect(geo.getTimezone()).toBe(0)
    })
  })

  describe('Data Accessors', () => {
    it('should return GeoItemFull via getItem() and respect custom languages from set()', () => {
      const geo = new GeoInstance()
      geo.set('en-VN') // Vietnam with English language
      const item = geo.getItem()

      expect(item).toHaveProperty('country', 'US')
      expect(item).toHaveProperty('language', 'en') // Dynamic language from set()
      expect(item).toHaveProperty('standard', 'en-US')
      expect(item).toHaveProperty('firstDay')
    })

    it('should return current values via specific getters and respect non-standard codes', () => {
      const geo = new GeoInstance()
      geo.set('en-VN')

      expect(geo.getCountry()).toBe('US')
      expect(geo.getLanguage()).toBe('en')
      expect(geo.getLocation()).toBe('en-VN')
      // Testing the updated getStandard() which now uses getItem().standard
      expect(geo.getStandard()).toBe('en-US')
    })
  })
})
