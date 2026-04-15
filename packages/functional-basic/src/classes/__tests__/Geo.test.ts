/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { Geo } from '../Geo'
import { ServerStorage } from '../ServerStorage'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('Geo', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    localStorage.clear()

    // Reset ServerStorage to ensure fresh DataStorage Registry for each test
    // This is crucial because Geo holds state via ServerStorage
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

  describe('SSR and Browser Isolation', () => {
    it('should default to "en-GB" in SSR environment', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      expect(Geo.getLocation()).toBe('en-GB')
    })

    it('should detect locale from localStorage in browser context', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      localStorage.setItem('ui-storage__geo-code', JSON.stringify({
        value: 'ru-RU',
        age: Date.now()
      }))
      expect(Geo.getLocation()).toBe('ru-RU')
    })
  })

  describe('Data Retrieval', () => {
    it('should find item by full code (language-country)', () => {
      const res = Geo.getByCode('ru-RU')
      expect(res.language).toBe('ru')
      expect(res.country).toBe('RU')
      expect(res.standard).toBe('ru-RU')
    })

    it('should handle non-standard codes in getByCode (returning static base info)', () => {
      // en-VN should find Vietnam record (vi-VN)
      const res = Geo.getByCode('en-VN')
      expect(res.country).toBe('US')
      expect(res.language).toBe('en')
      expect(res.standard).toBe('en-US')
    })

    it('should return default item for invalid code', () => {
      const res = Geo.getByCode('invalid-code')
      expect(res).toBeDefined()
      // Fallback is typically the first item (en-US)
      expect(res.standard).toBe('en-US')
    })
  })

  describe('State Management (Setters & Getters)', () => {
    it('should update state and reflect custom language in getStandard()', () => {
      Geo.set('en-VN')
      expect(Geo.getLocation()).toBe('en-VN')
      expect(Geo.getLanguage()).toBe('en')
      expect(Geo.getCountry()).toBe('US')
      // Dynamic standard reflects the override
      expect(Geo.getStandard()).toBe('en-US')
    })

    it('should persist changes to localStorage when requested', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      Geo.set('de-DE', true)

      const stored = localStorage.getItem('ui-storage__geo-code')
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

    it('should handle complex offsets (UTC+5:30)', () => {
      Geo.setTimezone(-330)
      expect(Geo.getTimezoneFormat()).toBe('+05:30')
    })
  })

  describe('Instance Isolation', () => {
    it('should provide a unique instance for each request context via getItem()', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false) // Simulate SSR for clean default
      const instance1 = Geo.getItem()
      instance1.set('fr-FR')

      // Mock a new context in ServerStorage
      const storageClass = ServerStorage as any
      storageClass.storage = undefined
      ServerStorage.init(() => ({}))

      const instance2 = Geo.getItem()
      expect(instance2.getLocation()).not.toBe('fr-FR')
      expect(instance2.getLocation()).toBe('en-GB') // Default for SSR
    })
  })
})
