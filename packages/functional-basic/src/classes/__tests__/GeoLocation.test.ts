/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { GeoLocation, UI_GEO_COOKIE_KEY } from '../GeoLocation'
import { ServerStorage } from '../ServerStorage'
import { CookieStorage } from '../CookieStorage'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))
vi.mock('../../functions/isDomData', () => ({
  isDomData: vi.fn()
}))

function resetSingletons(): void {
  vi.mocked(isDomRuntime).mockReturnValue(false)

  ServerStorage.reset()
  ServerStorage.init(() => ({}))
  CookieStorage.reset()

  try {
    window.localStorage?.clear()
    window.sessionStorage?.clear()
  } catch {
    // ignore
  }

  document.documentElement.setAttribute('lang', '')
  document.cookie = ''
}

describe('GeoLocation', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    resetSingletons()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Initialization and Fallbacks', () => {
    it('defaults to "en-GB" when not in DOM runtime and no cookie/default is set', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const location = new GeoLocation()
      expect(location.get()).toBe('en-GB')
    })

    it('reads from Cookie when available in SSR mode', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      CookieStorage.init((key: string) => key === UI_GEO_COOKIE_KEY ? 'ja-JP' : undefined)

      const location = new GeoLocation()
      expect(location.get()).toBe('ja-JP')
    })

    it('falls back to valueDefault string when no cookie or DOM location is set', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const location = new GeoLocation('de-DE')
      expect(location.get()).toBe('de-DE')
    })

    it('falls back to valueDefault callback when provided', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const location = new GeoLocation(() => 'es-ES')
      expect(location.get()).toBe('es-ES')
    })
  })

  describe('DOM resolution order', () => {
    describe('DOM fallbacks (no stored value)', () => {
      beforeEach(() => {
        resetSingletons()
      })

      it('falls back to document.documentElement.lang when storage is empty', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        document.documentElement.setAttribute('lang', 'fr-FR')
        const location = new GeoLocation()
        expect(location.get()).toBe('fr-FR')
      })

      it('falls back to navigator.language when html lang attribute is empty', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('it-IT')
        const location = new GeoLocation()
        expect(location.get()).toBe('it-IT')
      })

      it('falls back to navigator.languages[0] when navigator.language is empty', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('')
        vi.spyOn(window.navigator, 'languages', 'get').mockReturnValue(['pt-BR', 'en'])

        const location = new GeoLocation()
        expect(location.get()).toBe('pt-BR')
      })
    })

    describe('DataStorage persistence', () => {
      it('prefers stored value in DataStorage over DOM attributes', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        const seed = new GeoLocation()
        seed.set('ru-RU', true)

        document.documentElement.setAttribute('lang', 'fr-FR')
        const location = new GeoLocation()
        expect(location.get()).toBe('ru-RU')
      })
    })
  })

  describe('set', () => {
    it('updates location value without saving when save is omitted', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      const location = new GeoLocation()
      location.set('de-DE')
      expect(location.get()).toBe('de-DE')

      resetSingletons()
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const freshLocation = new GeoLocation()
      expect(freshLocation.get()).toBe('en-GB')
    })

    it('persists to storage when save=true', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      const location = new GeoLocation()
      location.set('ko-KR', true)

      const secondLocation = new GeoLocation()
      expect(secondLocation.get()).toBe('ko-KR')
    })

    it('sanitizes and trims location codes while preserving original casing and underscores', () => {
      const location = new GeoLocation()
      location.set('en_us')
      expect(location.get()).toBe('en_us')

      location.set('  ru-ru  ')
      expect(location.get()).toBe('ru-ru')

      location.set('ru-BY_BY')
      expect(location.get()).toBe('ru-BY_BY')

      location.set('VN')
      expect(location.get()).toBe('VN')
    })

    it('falls back to "en-GB" when setting invalid or dangerous code', () => {
      const location = new GeoLocation()
      location.set('<script>alert(1)</script>')
      expect(location.get()).toBe('en-GB')

      location.set('invalid--tag')
      expect(location.get()).toBe('en-GB')
    })
  })

  describe('getCountry and getLanguage', () => {
    it('extracts raw country and language codes from various location strings', () => {
      const location = new GeoLocation()

      location.set('us-US')
      expect(location.getLanguage()).toBe('us')
      expect(location.getCountry()).toBe('US')

      location.set('QQ-qq')
      expect(location.getLanguage()).toBe('qq')
      expect(location.getCountry()).toBe('QQ')

      location.set('vi')
      expect(location.getLanguage()).toBe('vi')
      expect(location.getCountry()).toBe('')

      location.set('VN')
      expect(location.getLanguage()).toBe('')
      expect(location.getCountry()).toBe('VN')

      location.set('vi-VN')
      expect(location.getLanguage()).toBe('vi')
      expect(location.getCountry()).toBe('VN')

      location.set('us')
      expect(location.getLanguage()).toBe('us')
      expect(location.getCountry()).toBe('')

      location.set('Us')
      expect(location.getLanguage()).toBe('')
      expect(location.getCountry()).toBe('')

      location.set('ru-BY_BY')
      expect(location.getLanguage()).toBe('ru')
      expect(location.getCountry()).toBe('BY_BY')

      location.set('BY_BY')
      expect(location.getLanguage()).toBe('')
      expect(location.getCountry()).toBe('BY_BY')
    })
  })

  describe('setValueDefault', () => {
    it('dynamically updates default value and re-evaluates location', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const location = new GeoLocation()
      expect(location.get()).toBe('en-GB')

      location.setValueDefault('fr-FR')
      expect(location.get()).toBe('fr-FR')

      location.setValueDefault(() => 'vi-VN')
      expect(location.get()).toBe('vi-VN')
    })
  })

  describe('Protected resolution methods', () => {
    class TestGeoLocation extends GeoLocation {
      public testFindLocationDocument(): string | undefined {
        return this.findLocationDocument()
      }

      public testFindLocationDom(): string | undefined {
        return this.findLocationDom()
      }

      public testFindLocationNavigator(): string | undefined {
        return this.findLocationNavigator()
      }
    }

    it('findLocationDocument returns sanitized html lang or undefined', () => {
      document.documentElement.setAttribute('lang', 'de-AT')
      const location = new TestGeoLocation()
      expect(location.testFindLocationDocument()).toBe('de-AT')
    })

    it('findLocationNavigator returns sanitized navigator language or undefined', () => {
      vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('pt-PT')
      const location = new TestGeoLocation()
      expect(location.testFindLocationNavigator()).toBe('pt-PT')
    })
  })
})
