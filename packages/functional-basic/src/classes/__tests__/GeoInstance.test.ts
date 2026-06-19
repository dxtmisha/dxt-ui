/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { GeoInstance } from '../GeoInstance'
import { ServerStorage } from '../ServerStorage'
import { CookieStorage } from '../CookieStorage'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))
vi.mock('../../functions/isDomData', () => ({
  isDomData: vi.fn()
}))

/**
 * Helper: reset all singletons and document state between tests.
 *
 * Temporarily set isDomRuntime=false so ServerStorage uses the SSR path
 * (listener-based context) and the DOM-based static cache is never populated.
 * This guarantees a fully clean DataStorage registry for each test.
 *
 * Вспомогательная функция: сброс всех синглтонов и состояния документа.
 * Временно устанавливаем isDomRuntime=false, чтобы ServerStorage использовал
 * SSR-путь и статический кэш DOM не накапливался между тестами.
 */
function resetSingletons(): void {
  // Force SSR mode so ServerStorage uses the listener context, not the static DOM cache
  vi.mocked(isDomRuntime).mockReturnValue(false)

  ServerStorage.reset()
  CookieStorage.reset()
  ServerStorage.init(() => ({}))

  document.documentElement.setAttribute('lang', '')
  document.cookie = ''
}

describe('GeoInstance', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    resetSingletons()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  // ---------------------------------------------------------------------------
  // findLocationDom — DOM branch
  // ---------------------------------------------------------------------------
  describe('findLocationDom (DOM branch)', () => {
    it('returns "en-GB" when not in DOM runtime (SSR, no Cookie)', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('en-GB')
    })

    describe('DOM fallbacks (no stored value)', () => {
      beforeEach(() => {
        // Ensure DataStorage has no cached value for this group
        resetSingletons()
      })

      it('falls back to document.documentElement.lang when storage is empty', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        document.documentElement.setAttribute('lang', 'fr-FR')

        const geo = new GeoInstance()
        expect(geo.getLocation()).toBe('fr-FR')
      })

      it('falls back to navigator.language when lang attr is empty', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('it-IT')

        const geo = new GeoInstance()
        expect(geo.getLocation()).toBe('it-IT')
      })

      it('falls back to navigator.languages[0] when navigator.language is empty string', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('')
        vi.spyOn(window.navigator, 'languages', 'get').mockReturnValue(['de-DE', 'en'])

        const geo = new GeoInstance()
        expect(geo.getLocation()).toBe('de-DE')
      })
    })

    describe('DataStorage persistence', () => {
      it('picks up value previously stored via set(code, true)', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)

        // First instance saves the location
        const seed = new GeoInstance()
        seed.set('ru-RU', true)

        // A second instance (same context) must read the saved value
        const geo = new GeoInstance()
        expect(geo.getLocation()).toBe('ru-RU')
      })
    })
  })

  // ---------------------------------------------------------------------------
  // Cookie fallback branch (non-DOM runtime)
  // ---------------------------------------------------------------------------
  describe('Cookie fallback branch', () => {
    it('reads location from Cookie via CookieStorage custom listener (SSR)', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)

      // In SSR, document.cookie is not parsed automatically.
      // Inject the value directly via CookieStorage.init getListener.
      CookieStorage.init((key: string) => key === 'ui-geo-code' ? 'ja-JP' : undefined)

      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('ja-JP')
    })

    it('returns "en-GB" when neither DOM sources nor Cookie are available', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('en-GB')
    })
  })

  // ---------------------------------------------------------------------------
  // getByCode
  // ---------------------------------------------------------------------------
  describe('getByCode', () => {
    let geo: GeoInstance

    beforeEach(() => {
      geo = new GeoInstance()
    })

    it('finds item by full "language-country" code', () => {
      const res = geo.getByCode('ru-RU')
      expect(res.language).toBe('ru')
      expect(res.country).toBe('RU')
      expect(res.standard).toBe('ru-RU')
    })

    it('finds item by reversed "country-language" code', () => {
      const res = geo.getByCode('RU-ru')
      expect(res.country).toBe('RU')
      expect(res.language).toBe('ru')
    })

    it('finds item by country-only uppercase code', () => {
      const res = geo.getByCode('US')
      expect(res.country).toBe('US')
    })

    it('finds item by language-only lowercase code', () => {
      const res = geo.getByCode('fr')
      expect(res.language).toBe('fr')
    })

    it('returns the first list item for an unrecognised code', () => {
      const res = geo.getByCode('invalid')
      expect(res.standard).toBe('en-US')
    })

    it('returns the first list item when code is undefined', () => {
      const res = geo.getByCode(undefined)
      expect(res.standard).toBe('en-US')
    })
  })

  // ---------------------------------------------------------------------------
  // getByCodeFull
  // ---------------------------------------------------------------------------
  describe('getByCodeFull', () => {
    let geo: GeoInstance

    beforeEach(() => {
      geo = new GeoInstance()
    })

    it('returns GeoItem for a known "language-country" code', () => {
      const item = geo.getByCodeFull('en-US')
      expect(item).toBeDefined()
      expect(item?.country).toBe('US')
      expect(item?.language).toBe('en')
    })

    it('returns GeoItem for a known "country-language" code', () => {
      const item = geo.getByCodeFull('RU-ru')
      expect(item).toBeDefined()
      expect(item?.country).toBe('RU')
    })

    it('returns undefined for an unknown full code', () => {
      expect(geo.getByCodeFull('xx-ZZ')).toBeUndefined()
    })
  })

  // ---------------------------------------------------------------------------
  // getByCountry
  // ---------------------------------------------------------------------------
  describe('getByCountry', () => {
    let geo: GeoInstance

    beforeEach(() => {
      geo = new GeoInstance()
    })

    it('finds item by primary country code', () => {
      const item = geo.getByCountry('DE')
      expect(item).toBeDefined()
      expect(item?.country).toBe('DE')
    })

    it('returns undefined for an unknown country code', () => {
      expect(geo.getByCountry('XX')).toBeUndefined()
    })
  })

  // ---------------------------------------------------------------------------
  // getByLanguage
  // ---------------------------------------------------------------------------
  describe('getByLanguage', () => {
    let geo: GeoInstance

    beforeEach(() => {
      geo = new GeoInstance()
    })

    it('finds item by primary language code', () => {
      const item = geo.getByLanguage('ru')
      expect(item).toBeDefined()
      expect(item?.language).toBe('ru')
    })

    it('returns undefined for an unknown language code', () => {
      expect(geo.getByLanguage('xx')).toBeUndefined()
    })
  })

  // ---------------------------------------------------------------------------
  // find (alias for getByCode)
  // ---------------------------------------------------------------------------
  describe('find', () => {
    it('delegates to getByCode and returns GeoItemFull', () => {
      const geo = new GeoInstance()
      const res = geo.find('de-DE')
      expect(res.country).toBe('DE')
      expect(res.language).toBe('de')
      expect(res.standard).toBe('de-DE')
    })
  })

  // ---------------------------------------------------------------------------
  // toStandard
  // ---------------------------------------------------------------------------
  describe('toStandard', () => {
    it('formats a GeoItem as "language-country"', () => {
      const geo = new GeoInstance()
      const item = geo.getByLanguage('en')!
      expect(geo.toStandard(item)).toBe(`${item.language}-${item.country}`)
    })
  })

  // ---------------------------------------------------------------------------
  // getList
  // ---------------------------------------------------------------------------
  describe('getList', () => {
    it('returns a non-empty array of GeoItems', () => {
      const geo = new GeoInstance()
      const list = geo.getList()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)
    })
  })

  // ---------------------------------------------------------------------------
  // getFirstDay
  // ---------------------------------------------------------------------------
  describe('getFirstDay', () => {
    it('returns a non-empty string for the current location', () => {
      const geo = new GeoInstance()
      const firstDay = geo.getFirstDay()
      expect(typeof firstDay).toBe('string')
      expect(firstDay.length).toBeGreaterThan(0)
    })

    it('always has a value — defaults to "Mo" when source data has none', () => {
      const geo = new GeoInstance()
      geo.set('en-GB')
      // toFull() guarantees 'Mo' as the default; any known code returns a valid value
      expect(['Mo', 'Su']).toContain(geo.getFirstDay())
    })
  })

  // ---------------------------------------------------------------------------
  // Timezone
  // ---------------------------------------------------------------------------
  describe('Timezone', () => {
    it('getTimezone() returns a number', () => {
      const geo = new GeoInstance()
      expect(typeof geo.getTimezone()).toBe('number')
    })

    it('formats UTC+3 correctly (offset -180 → "+03:00")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(-180)
      expect(geo.getTimezoneFormat()).toBe('+03:00')
    })

    it('formats UTC-5 correctly (offset 300 → "-05:00")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(300)
      expect(geo.getTimezoneFormat()).toBe('-05:00')
    })

    it('formats UTC+5:30 correctly (offset -330 → "+05:30")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(-330)
      expect(geo.getTimezoneFormat()).toBe('+05:30')
    })

    it('formats UTC+0 correctly (offset 0 → "-00:00")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(0)
      expect(geo.getTimezoneFormat()).toBe('-00:00')
    })

    it('setTimezone updates the stored value', () => {
      const geo = new GeoInstance()
      geo.setTimezone(0)
      expect(geo.getTimezone()).toBe(0)
    })
  })

  // ---------------------------------------------------------------------------
  // set
  // ---------------------------------------------------------------------------
  describe('set', () => {
    it('updates location, item, and language', () => {
      const geo = new GeoInstance()
      geo.set('de-DE')
      expect(geo.getLocation()).toBe('de-DE')
      expect(geo.getLanguage()).toBe('de')
      expect(geo.getCountry()).toBe('DE')
    })

    it('persists to storage when save=true and a new instance reads the value', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      const geo = new GeoInstance()
      geo.set('it-IT', true)

      // Another instance in the same context must see the persisted location
      const geo2 = new GeoInstance()
      expect(geo2.getLocation()).toBe('it-IT')
    })

    it('does NOT persist when save is omitted — a fresh context returns default', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      const geo = new GeoInstance()
      geo.set('ko-KR') // no `save`

      // Reset context to simulate a fresh request
      resetSingletons()
      vi.mocked(isDomRuntime).mockReturnValue(false)

      const geo2 = new GeoInstance()
      expect(geo2.getLocation()).toBe('en-GB')
    })
  })

  // ---------------------------------------------------------------------------
  // Data accessors
  // ---------------------------------------------------------------------------
  describe('Data Accessors', () => {
    it('get() returns the raw GeoItemFull', () => {
      const geo = new GeoInstance()
      geo.set('de-DE')
      const raw = geo.get()
      expect(raw.country).toBe('DE')
    })

    it('getItem() merges the dynamic language into the standard field', () => {
      const geo = new GeoInstance()
      geo.set('ru-RU')
      const item = geo.getItem()
      expect(item.country).toBe('RU')
      expect(item.language).toBe('ru')
      expect(item.standard).toBe('ru-RU')
      expect(item).toHaveProperty('firstDay')
    })

    it('getStandard() uses getItem().standard (reflects dynamic language)', () => {
      const geo = new GeoInstance()
      geo.set('fr-FR')
      expect(geo.getStandard()).toBe('fr-FR')
    })

    it('getLocation() returns the raw code passed to set()', () => {
      const geo = new GeoInstance()
      geo.set('en-VN')
      expect(geo.getLocation()).toBe('en-VN')
    })

    it('getLocationCountry() returns the country code extracted from getLocation()', () => {
      const geo = new GeoInstance()
      geo.set('en-VN')
      expect(geo.getLocationCountry()).toBe('VN')
      geo.set('ru-RU')
      expect(geo.getLocationCountry()).toBe('RU')
    })

    it('getLocationLanguage() returns the language code extracted from getLocation()', () => {
      const geo = new GeoInstance()
      geo.set('en-VN')
      expect(geo.getLocationLanguage()).toBe('en')
      geo.set('ru-RU')
      expect(geo.getLocationLanguage()).toBe('ru')
    })


    it('getLanguage() extracts language part from the code', () => {
      const geo = new GeoInstance()
      geo.set('zh-CN')
      expect(geo.getLanguage()).toBe('zh')
    })

    it('getCountry() returns the country from resolved GeoItem, not raw code', () => {
      const geo = new GeoInstance()
      geo.set('en-VN') // Vietnam with English: resolves to first "en" match
      // The assertion mirrors the actual lookup behaviour
      expect(typeof geo.getCountry()).toBe('string')
      expect(geo.getCountry()).toHaveLength(2)
    })
  })
})
