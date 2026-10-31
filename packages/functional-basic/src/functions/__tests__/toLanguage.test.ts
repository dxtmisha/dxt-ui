import { describe, it, expect, beforeEach } from 'vitest'
import { GeoList } from '../../classes/GeoList'
import { toLanguage } from '../toLanguage'

describe('toLanguage', () => {
  beforeEach(() => {
    GeoList.reset()
  })

  describe('Direct language codes via GeoList', () => {
    it('returns 2- and 3-letter language codes registered in GeoList', () => {
      expect(toLanguage('en')).toBe('en')
      expect(toLanguage('ru')).toBe('ru')
      expect(toLanguage('vi')).toBe('vi')
      expect(toLanguage('de')).toBe('de')
      expect(toLanguage('fr')).toBe('fr')
      expect(toLanguage('cmn')).toBe('cmn')
      expect(toLanguage('fil')).toBe('fil')
    })

    it('returns empty string for uppercase country-only codes, non-registered codes, or unknown tokens', () => {
      expect(toLanguage('US')).toBe('')
      expect(toLanguage('RU')).toBe('')
      expect(toLanguage('VN')).toBe('')
      expect(toLanguage('UK')).toBe('')
      expect(toLanguage('EN')).toBe('')
      expect(toLanguage('e')).toBe('')
      expect(toLanguage('zz')).toBe('')
      expect(toLanguage('xyz')).toBe('')
    })
  })

  describe('Locale and BCP-47 strings with separators', () => {
    it('extracts language code from standard language-country format', () => {
      expect(toLanguage('en-US')).toBe('en')
      expect(toLanguage('ru-RU')).toBe('ru')
      expect(toLanguage('vi-VN')).toBe('vi')
      expect(toLanguage('de-DE')).toBe('de')
      expect(toLanguage('cmn-SG')).toBe('cmn')
    })

    it('extracts language code from reversed country-language format', () => {
      expect(toLanguage('RU-ru')).toBe('ru')
      expect(toLanguage('US-en')).toBe('en')
      expect(toLanguage('CA-fr')).toBe('fr')
      expect(toLanguage('VN_vi')).toBe('vi')
    })

    it('handles lowercase and all-uppercase subtag pairs', () => {
      expect(toLanguage('ru-ru')).toBe('ru')
      expect(toLanguage('en-gb')).toBe('en')
      expect(toLanguage('EN-GB')).toBe('en')
      expect(toLanguage('RU_RU')).toBe('ru')
    })

    it('extracts language code with underscore separator and rejects country-only BY_BY', () => {
      expect(toLanguage('en_US')).toBe('en')
      expect(toLanguage('ru_RU')).toBe('ru')
      expect(toLanguage('BY_BY')).toBe('')
    })

    it('extracts language code from complex BCP-47 subtags', () => {
      expect(toLanguage('zh-Hans-CN')).toBe('zh')
      expect(toLanguage('ZH_HANS_CN')).toBe('zh')
      expect(toLanguage('sr-Cyrl-RS')).toBe('sr')
      expect(toLanguage('es-419')).toBe('es')
      expect(toLanguage('en-US-u-ca-gregory')).toBe('en')
    })
  })

  describe('Alternative language codes via GeoList', () => {
    it('resolves built-in languageAlternative codes both standalone and in locale tags', () => {
      expect(toLanguage('us')).toBe('en')
      expect(toLanguage('ua')).toBe('uk')
      expect(toLanguage('cz')).toBe('cs')
      expect(toLanguage('il')).toBe('he')
      expect(toLanguage('ua-UA')).toBe('uk')
      expect(toLanguage('UA-ua')).toBe('uk')
      expect(toLanguage('cz-CZ')).toBe('cs')
    })

    it('resolves custom languageAlternative entries added via GeoList.add', () => {
      GeoList.add('RU', { languageAlternative: ['rus', 'russian_alt'] })

      expect(toLanguage('rus')).toBe('ru')
      expect(toLanguage('rus-RU')).toBe('ru')
      expect(toLanguage('RU-rus')).toBe('ru')
      expect(toLanguage('russian_alt')).toBe('ru')
    })

    it('returns empty string for malformed or unregistered language tags', () => {
      expect(toLanguage('en-')).toBe('')
      expect(toLanguage('en-<script>')).toBe('')
      expect(toLanguage('RU-zz')).toBe('')
      expect(toLanguage('zz-US')).toBe('')
      expect(toLanguage('UNKNOWN')).toBe('')
    })
  })

  describe('Whitespace and invalid inputs', () => {
    it('trims whitespace around codes', () => {
      expect(toLanguage('  en-US  ')).toBe('en')
      expect(toLanguage('\tvi\n')).toBe('vi')
    })

    it('returns empty string for empty or whitespace-only strings', () => {
      expect(toLanguage('')).toBe('')
      expect(toLanguage('   ')).toBe('')
      expect(toLanguage('\t\n')).toBe('')
    })

    it('returns empty string for nullish or non-string inputs', () => {
      expect(toLanguage(undefined)).toBe('')
      expect(toLanguage(null)).toBe('')
      expect(toLanguage()).toBe('')
      expect(toLanguage(123)).toBe('')
      expect(toLanguage(true)).toBe('')
      expect(toLanguage({})).toBe('')
      expect(toLanguage([])).toBe('')
      expect(toLanguage(['ru'])).toBe('')
      expect(toLanguage(Symbol('ru'))).toBe('')
      expect(toLanguage(Object.create(null))).toBe('')
    })
  })
})
