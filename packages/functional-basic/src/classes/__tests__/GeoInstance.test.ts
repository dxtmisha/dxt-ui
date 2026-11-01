/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { GeoInstance } from '../GeoInstance'
import { UI_GEO_COOKIE_KEY } from '../GeoLocation'
import { GeoList } from '../GeoList'
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
 */
function resetSingletons(): void {
  vi.mocked(isDomRuntime).mockReturnValue(false)

  ServerStorage.reset()
  ServerStorage.init(() => ({}))
  CookieStorage.reset()
  GeoList.reset()

  localStorage.clear()
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

  describe('findLocationDom (DOM branch)', () => {
    it('returns "en-GB" when not in DOM runtime (SSR, no Cookie)', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('en-GB')
    })

    describe('DOM fallbacks (no stored value)', () => {
      beforeEach(() => {
        resetSingletons()
      })

      it('falls back to document.documentElement.lang when storage is empty', () => {
        vi.mocked(isDomRuntime).mockReturnValue(true)
        document.documentElement.setAttribute('lang', 'fr-FR')

        const geo = new GeoInstance()
        expect(geo.getLocation()).toBe('fr-FR')
      })

      it('falls back to navigator.language when lang attribute is empty', () => {
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

        const seed = new GeoInstance()
        seed.set('ru-RU', true)

        const geo = new GeoInstance()
        expect(geo.getLocation()).toBe('ru-RU')
      })
    })
  })

  describe('Cookie fallback branch', () => {
    it('reads location from Cookie via CookieStorage custom listener (SSR)', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)

      CookieStorage.init((key: string) => key === UI_GEO_COOKIE_KEY ? 'ja-JP' : undefined)

      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('ja-JP')
      expect(geo.getCountry()).toBe('JP')
      expect(geo.getLanguage()).toBe('ja')
    })

    it('returns "en-GB" when neither DOM sources nor Cookie are available', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const geo = new GeoInstance()
      expect(geo.getLocation()).toBe('en-GB')
    })
  })

  describe('setValueDefault', () => {
    it('uses string or callback default value when no cookie or DOM location is set and returns this', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
      const geo = new GeoInstance()

      expect(geo.setValueDefault('es-ES')).toBe(geo)
      expect(geo.getLocation()).toBe('es-ES')
      expect(geo.getCountry()).toBe('ES')
      expect(geo.getLanguage()).toBe('es')

      expect(geo.setValueDefault(() => 'vi-VN')).toBe(geo)
      expect(geo.getLocation()).toBe('vi-VN')
      expect(geo.getCountry()).toBe('VN')
      expect(geo.getLanguage()).toBe('vi')

      expect(geo.setValueDefault(() => undefined)).toBe(geo)
      expect(geo.getLocation()).toBe('en-GB')
    })
  })

  describe('getByCode', () => {
    let geo: GeoInstance

    beforeEach(() => {
      geo = new GeoInstance()
    })

    it('finds item by full "language-country" code', () => {
      const result = geo.getByCode('ru-RU')
      expect(result.language).toBe('ru')
      expect(result.country).toBe('RU')
      expect(result.standard).toBe('ru-RU')
    })

    it('finds item by reversed "country-language" code', () => {
      const result = geo.getByCode('RU-ru')
      expect(result.country).toBe('RU')
      expect(result.language).toBe('ru')
    })

    it('finds item by country-only uppercase code', () => {
      const result = geo.getByCode('US')
      expect(result.country).toBe('US')
    })

    it('finds item by language-only lowercase code', () => {
      const result = geo.getByCode('fr')
      expect(result.language).toBe('fr')
    })

    it('returns the first list item for an unrecognised code', () => {
      const result = geo.getByCode('invalid')
      expect(result.standard).toBe('en-US')
    })

    it('returns the first list item when code is undefined', () => {
      const result = geo.getByCode(undefined)
      expect(result.standard).toBe('en-US')
    })
  })

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

    it('returns undefined for an unknown full code or omitted argument', () => {
      expect(geo.getByCodeFull('xx-ZZ')).toBeUndefined()
      expect(geo.getByCodeFull()).toBeUndefined()
    })
  })

  describe('getByCountry', () => {
    let geo: GeoInstance

    beforeEach(() => {
      geo = new GeoInstance()
    })

    it('finds item by primary country code or countryAlternative', () => {
      const item = geo.getByCountry('DE')
      expect(item).toBeDefined()
      expect(item?.country).toBe('DE')

      geo.add('DE', { countryAlternative: ['DD'] })
      expect(geo.getByCountry('DD')?.country).toBe('DE')
    })

    it('returns undefined for an unknown country code or omitted argument', () => {
      expect(geo.getByCountry('XX')).toBeUndefined()
      expect(geo.getByCountry()).toBeUndefined()
    })
  })

  describe('getByLanguage', () => {
    let geo: GeoInstance

    beforeEach(() => {
      geo = new GeoInstance()
    })

    it('finds item by primary language code or languageAlternative', () => {
      const item = geo.getByLanguage('ru')
      expect(item).toBeDefined()
      expect(item?.language).toBe('ru')

      geo.add('RU', { languageAlternative: ['rus'] })
      expect(geo.getByLanguage('rus')?.country).toBe('RU')
    })

    it('returns undefined for an unknown language code or omitted argument', () => {
      expect(geo.getByLanguage('xx')).toBeUndefined()
      expect(geo.getByLanguage()).toBeUndefined()
    })
  })

  describe('find (alias for getByCode)', () => {
    it('delegates to getByCode and returns GeoItemFull', () => {
      const geo = new GeoInstance()
      const result = geo.find('de-DE')
      expect(result.country).toBe('DE')
      expect(result.language).toBe('de')
      expect(result.standard).toBe('de-DE')
    })
  })

  describe('toStandard', () => {
    it('formats a GeoItem as "language-country" and supports optional language override and raw flag', () => {
      const geo = new GeoInstance()
      const item = geo.getByCountry('VN')!
      expect(geo.toStandard(item)).toBe('vi-VN')
      expect(geo.toStandard(item, 'en')).toBe('en-VN')
      // Unknown language override falls back to item.language when raw is false/omitted
      expect(geo.toStandard(item, 'zz')).toBe('vi-VN')
      // Raw flag skips language lookup validation
      expect(geo.toStandard(item, 'zz', true)).toBe('zz-VN')
      expect(geo.toStandard(undefined)).toBe('')
    })
  })

  describe('getList', () => {
    it('returns a non-empty array of GeoItems', () => {
      const geo = new GeoInstance()
      const list = geo.getList()
      expect(Array.isArray(list)).toBe(true)
      expect(list.length).toBeGreaterThan(0)
    })
  })

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
      expect(['Mo', 'Su']).toContain(geo.getFirstDay())
    })
  })

  describe('Timezone', () => {
    it('initializes GeoTimezone lazily on first access', () => {
      const geo = new GeoInstance()
      // @ts-expect-error accessing protected property for testing lazy initialization
      expect(geo.timezone).toBeUndefined()

      expect(typeof geo.getTimezone()).toBe('number')

      // @ts-expect-error accessing protected property for testing lazy initialization
      expect(geo.timezone).toBeDefined()
    })

    it('getTimezone() returns a number', () => {
      const geo = new GeoInstance()
      expect(typeof geo.getTimezone()).toBe('number')
    })

    it('formats UTC+3 correctly (offset -180 -> "+03:00")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(-180)
      expect(geo.getTimezoneFormat()).toBe('+03:00')
    })

    it('formats UTC-5 correctly (offset 300 -> "-05:00")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(300)
      expect(geo.getTimezoneFormat()).toBe('-05:00')
    })

    it('formats UTC+5:30 correctly (offset -330 -> "+05:30")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(-330)
      expect(geo.getTimezoneFormat()).toBe('+05:30')
    })

    it('formats UTC+0 correctly (offset 0 -> "+00:00")', () => {
      const geo = new GeoInstance()
      geo.setTimezone(0)
      expect(geo.getTimezoneFormat()).toBe('+00:00')
    })

    it('setTimezone updates the stored value and returns this', () => {
      const geo = new GeoInstance()
      expect(geo.setTimezone(0)).toBe(geo)
      expect(geo.getTimezone()).toBe(0)
    })
  })

  describe('set', () => {
    it('updates location, item, and language and returns this', () => {
      const geo = new GeoInstance()
      expect(geo.set('de-DE')).toBe(geo)
      expect(geo.getLocation()).toBe('de-DE')
      expect(geo.getLanguage()).toBe('de')
      expect(geo.getCountry()).toBe('DE')
    })

    it('resets to default "en-GB" when set() is called without arguments', () => {
      const geo = new GeoInstance()
      geo.set('de-DE')
      geo.set()
      expect(geo.getLocation()).toBe('en-GB')
      expect(geo.getCountry()).toBe('GB')
    })

    it('persists to storage when save=true and a new instance reads the value', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      const geo = new GeoInstance()
      geo.set('it-IT', true)

      const secondGeo = new GeoInstance()
      expect(secondGeo.getLocation()).toBe('it-IT')
    })

    it('does NOT persist when save is omitted — a fresh context returns default', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      const geo = new GeoInstance()
      geo.set('ko-KR')

      resetSingletons()
      vi.mocked(isDomRuntime).mockReturnValue(false)

      const secondGeo = new GeoInstance()
      expect(secondGeo.getLocation()).toBe('en-GB')
    })
  })

  describe('Data Accessors', () => {
    it('get() returns the current GeoItemFull', () => {
      const geo = new GeoInstance()
      geo.set('de-DE')
      const raw = geo.get()
      expect(raw.country).toBe('DE')
    })

    it('getItem() returns the same GeoItemFull as get()', () => {
      const geo = new GeoInstance()
      geo.set('ru-RU')
      const item = geo.getItem()
      expect(item).toBe(geo.get())
      expect(item.country).toBe('RU')
      expect(item.language).toBe('ru')
      expect(item.standard).toBe('ru-RU')
      expect(item).toHaveProperty('firstDay')
    })

    it('getStandard() reflects dynamic language', () => {
      const geo = new GeoInstance()
      geo.set('fr-FR')
      expect(geo.getStandard()).toBe('fr-FR')
    })

    it('getLocation() returns the sanitized code passed to set()', () => {
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

    it('getCountry() returns the country from resolved GeoItem', () => {
      const geo = new GeoInstance()
      geo.set('en-VN')
      expect(geo.getCountry()).toBe('VN')
    })

    it('distinguishes raw getLocation* methods from normalized get* methods across edge cases', () => {
      const geo = new GeoInstance()
      const cases = [
        {
          input: 'us-US',
          location: 'us-US',
          locationLanguage: 'us',
          locationCountry: 'US',
          language: 'en',
          country: 'US',
          standard: 'en-US'
        },
        {
          input: 'QQ-qq',
          location: 'QQ-qq',
          locationLanguage: 'qq',
          locationCountry: 'QQ',
          language: 'en',
          country: 'US',
          standard: 'en-US'
        },
        {
          input: 'vi',
          location: 'vi',
          locationLanguage: 'vi',
          locationCountry: '',
          language: 'vi',
          country: 'VN',
          standard: 'vi-VN'
        },
        {
          input: 'VN',
          location: 'VN',
          locationLanguage: '',
          locationCountry: 'VN',
          language: 'vi',
          country: 'VN',
          standard: 'vi-VN'
        },
        {
          input: 'vi-VN',
          location: 'vi-VN',
          locationLanguage: 'vi',
          locationCountry: 'VN',
          language: 'vi',
          country: 'VN',
          standard: 'vi-VN'
        },
        {
          input: 'us',
          location: 'us',
          locationLanguage: 'us',
          locationCountry: '',
          language: 'en',
          country: 'US',
          standard: 'en-US'
        },
        {
          input: 'Us',
          location: 'Us',
          locationLanguage: '',
          locationCountry: '',
          language: 'en',
          country: 'US',
          standard: 'en-US'
        },
        {
          input: 'ru-BY_BY',
          location: 'ru-BY_BY',
          locationLanguage: 'ru',
          locationCountry: 'BY_BY',
          language: 'ru',
          country: 'BY',
          standard: 'ru-BY'
        },
        {
          input: 'BY_BY',
          location: 'BY_BY',
          locationLanguage: '',
          locationCountry: 'BY_BY',
          language: 'be',
          country: 'BY',
          standard: 'be-BY'
        }
      ]

      for (const expected of cases) {
        geo.set(expected.input)
        expect(geo.getLocation()).toBe(expected.location)
        expect(geo.getLocationLanguage()).toBe(expected.locationLanguage)
        expect(geo.getLocationCountry()).toBe(expected.locationCountry)
        expect(geo.getLanguage()).toBe(expected.language)
        expect(geo.getCountry()).toBe(expected.country)
        expect(geo.getStandard()).toBe(expected.standard)
      }
    })
  })

  describe('add and addList', () => {
    it('creates a new country entry when country does not exist in the list', () => {
      const geo = new GeoInstance()
      geo.add('ZZ', {
        language: 'zz',
        firstDay: 'Su',
        phoneCode: '999'
      })

      const item = geo.getByCountry('ZZ')
      expect(item).toBeDefined()
      expect(item?.country).toBe('ZZ')
      expect(item?.language).toBe('zz')
      expect(item?.firstDay).toBe('Su')
      expect(item?.phoneCode).toBe('999')
    })

    it('merges data into an existing country entry', () => {
      const geo = new GeoInstance()
      const original = geo.getByCountry('US')
      expect(original).toBeDefined()

      geo.add('US', {
        firstDay: 'Mo',
        phoneWithin: '9'
      })

      const updated = geo.getByCountry('US')
      expect(updated?.firstDay).toBe('Mo')
      expect(updated?.phoneWithin).toBe('9')
      expect(updated?.language).toBe('en')
      expect(updated?.country).toBe('US')
    })

    it('deep-merges nested unit configurations for existing countries without wiping existing units', () => {
      const geo = new GeoInstance()
      const originalKilometer = geo.getByCountry('US')?.unit?.kilometer
      expect(originalKilometer).toBe('mile')

      geo.add('US', {
        unit: {
          meter: 'm_custom'
        }
      })

      const item = geo.getByCountry('US')
      expect(item?.unit?.meter).toBe('m_custom')
      expect(item?.unit?.kilometer).toBe(originalKilometer)
    })

    it('updates current item when the modified country is the active country', () => {
      const geo = new GeoInstance()
      geo.set('ru-RU')
      expect(geo.getItem().firstDay).toBe('Mo')

      geo.add('RU', {
        firstDay: 'Su'
      })

      expect(geo.getItem().firstDay).toBe('Su')
    })

    it('updates current item when location was set to a language code before add()', () => {
      const geo = new GeoInstance()
      geo.set('zz')
      expect(geo.getCountry()).toBe('US')

      geo.add('ZZ', {
        language: 'zz',
        firstDay: 'Su'
      })

      expect(geo.getCountry()).toBe('ZZ')
      expect(geo.getLanguage()).toBe('zz')
      expect(geo.getStandard()).toBe('zz-ZZ')
      expect(geo.getFirstDay()).toBe('Su')
    })

    it('addList with object map adds and merges multiple countries', () => {
      const geo = new GeoInstance()
      geo.addList({
        XX: { language: 'xx', phoneCode: '111' },
        YY: { language: 'yy', phoneCode: '222' }
      })

      expect(geo.getByCountry('XX')?.phoneCode).toBe('111')
      expect(geo.getByCountry('YY')?.phoneCode).toBe('222')
    })

    it('safely handles add without item and addList without list', () => {
      const geo = new GeoInstance()
      expect(geo.add('ZZ').getByCountry('ZZ')?.language).toBe('en')
      expect(geo.addList()).toBe(geo)
    })
  })
})
