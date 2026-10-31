import { describe, it, expect, beforeEach } from 'vitest'
import { GeoList } from '../../classes/GeoList'
import { toCountry } from '../toCountry'

describe('toCountry', () => {
  beforeEach(() => {
    GeoList.reset()
  })

  describe('Direct country codes via GeoList', () => {
    it('returns country codes registered in GeoList', () => {
      expect(toCountry('US')).toBe('US')
      expect(toCountry('RU')).toBe('RU')
      expect(toCountry('VN')).toBe('VN')
      expect(toCountry('DE')).toBe('DE')
      expect(toCountry('FR')).toBe('FR')
    })

    it('returns empty string for language-only lowercase codes, non-registered 2-letter codes, or unknown tokens', () => {
      expect(toCountry('en')).toBe('')
      expect(toCountry('ru')).toBe('')
      expect(toCountry('uk')).toBe('')
      expect(toCountry('U')).toBe('')
      expect(toCountry('ZZ')).toBe('')
      expect(toCountry('XYZ')).toBe('')
    })
  })

  describe('Locale and BCP-47 strings with separators', () => {
    it('extracts country code from standard language-country format', () => {
      expect(toCountry('en-US')).toBe('US')
      expect(toCountry('ru-RU')).toBe('RU')
      expect(toCountry('vi-VN')).toBe('VN')
      expect(toCountry('de-DE')).toBe('DE')
    })

    it('extracts country code from reversed country-language format', () => {
      expect(toCountry('RU-ru')).toBe('RU')
      expect(toCountry('US-en')).toBe('US')
    })

    it('handles lowercase or case-insensitive subtag pairs', () => {
      expect(toCountry('en-gb')).toBe('GB')
      expect(toCountry('EN-GB')).toBe('GB')
      expect(toCountry('fr-ca')).toBe('CA')
    })

    it('extracts country code with underscore separator', () => {
      expect(toCountry('en_US')).toBe('US')
      expect(toCountry('BY_BY')).toBe('BY')
      expect(toCountry('ru_RU')).toBe('RU')
    })

    it('extracts country code from complex BCP-47 subtags', () => {
      expect(toCountry('zh-Hans-CN')).toBe('CN')
      expect(toCountry('zh-cmn-Hans-CN')).toBe('CN')
      expect(toCountry('zh-Hant-TW')).toBe('TW')
      expect(toCountry('sr-Cyrl-RS')).toBe('RS')
      expect(toCountry('en-US-u-ca-gregory')).toBe('US')
    })

    it('ignores extension subtags after 1-char singletons and numeric regions', () => {
      expect(toCountry('en-u-ca-islamic')).toBe('')
      expect(toCountry('en-x-US')).toBe('')
      expect(toCountry('es-419')).toBe('')
    })
  })

  describe('Alternative country codes via GeoList', () => {
    it('resolves built-in countryAlternative codes both standalone and in locale tags', () => {
      expect(toCountry('UK')).toBe('GB')
      expect(toCountry('EN')).toBe('US')
      expect(toCountry('BY_BY')).toBe('BY')
      expect(toCountry('en-UK')).toBe('GB')
      expect(toCountry('en-uk')).toBe('GB')
      expect(toCountry('UK-en')).toBe('GB')
    })

    it('resolves custom countryAlternative entries added via GeoList.add', () => {
      GeoList.add('DE', { countryAlternative: ['DD', 'DE_ALT'] })

      expect(toCountry('DD')).toBe('DE')
      expect(toCountry('de-dd')).toBe('DE')
      expect(toCountry('DD-de')).toBe('DE')
      expect(toCountry('DE_ALT')).toBe('DE')
    })

    it('returns empty string when neither subtag nor full string exists in GeoList', () => {
      expect(toCountry('UNKNOWN')).toBe('')
      expect(toCountry('xx-yy-zz-ww')).toBe('')
      expect(toCountry('ZZ-en')).toBe('')
      expect(toCountry('en-ZZ')).toBe('')
      expect(toCountry('invalid-toolongregion-extra')).toBe('')
    })
  })

  describe('Whitespace and invalid inputs', () => {
    it('trims whitespace around codes', () => {
      expect(toCountry('  en-US  ')).toBe('US')
      expect(toCountry('\tVN\n')).toBe('VN')
    })

    it('returns empty string for empty or whitespace-only strings', () => {
      expect(toCountry('')).toBe('')
      expect(toCountry('   ')).toBe('')
      expect(toCountry('\t\n')).toBe('')
    })

    it('returns empty string for nullish or non-string inputs', () => {
      expect(toCountry(undefined)).toBe('')
      expect(toCountry(null)).toBe('')
      expect(toCountry()).toBe('')
      expect(toCountry(123)).toBe('')
      expect(toCountry(true)).toBe('')
      expect(toCountry({})).toBe('')
      expect(toCountry([])).toBe('')
    })
  })
})
