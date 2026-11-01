import { describe, it, expect, beforeEach } from 'vitest'
import { GeoList } from '../../classes/GeoList'
import { toLocale } from '../toLocale'

describe('toLocale', () => {
  beforeEach(() => {
    GeoList.reset()
  })

  describe('Full locale strings', () => {
    it('converts standard language-country codes to aa-AA format', () => {
      expect(toLocale('en-US')).toBe('en-US')
      expect(toLocale('ru-RU')).toBe('ru-RU')
      expect(toLocale('vi-VN')).toBe('vi-VN')
      expect(toLocale('de-DE')).toBe('de-DE')
      expect(toLocale('fr-FR')).toBe('fr-FR')
    })

    it('converts reversed country-language codes to aa-AA format', () => {
      expect(toLocale('RU-ru')).toBe('ru-RU')
      expect(toLocale('US-en')).toBe('en-US')
      expect(toLocale('VN-vi')).toBe('vi-VN')
    })

    it('converts underscore-separated locales to aa-AA format', () => {
      expect(toLocale('en_US')).toBe('en-US')
      expect(toLocale('ru_RU')).toBe('ru-RU')
      expect(toLocale('vi_VN')).toBe('vi-VN')
    })

    it('handles case-insensitive locale tags and whitespace trimming', () => {
      expect(toLocale('en-gb')).toBe('en-GB')
      expect(toLocale('EN-GB')).toBe('en-GB')
      expect(toLocale('fr-ca')).toBe('fr-CA')
      expect(toLocale('  en-us  ')).toBe('en-US')
      expect(toLocale('  RU_ru  ')).toBe('ru-RU')
    })

    it('extracts standard aa-AA from complex BCP-47 tags', () => {
      expect(toLocale('zh-Hans-CN')).toBe('zh-CN')
      expect(toLocale('en-US-u-ca-gregory')).toBe('en-US')
      expect(toLocale('de-DE-1996')).toBe('de-DE')
    })
  })

  describe('Incomplete formats (country-only or language-only return empty string)', () => {
    it('returns empty string for country-only codes', () => {
      expect(toLocale('US')).toBe('')
      expect(toLocale('RU')).toBe('')
      expect(toLocale('VN')).toBe('')
      expect(toLocale('DE')).toBe('')
      expect(toLocale('UK')).toBe('')
      expect(toLocale('BY')).toBe('')
    })

    it('returns empty string for language-only codes', () => {
      expect(toLocale('ru')).toBe('')
      expect(toLocale('vi')).toBe('')
      expect(toLocale('en')).toBe('')
      expect(toLocale('de')).toBe('')
      expect(toLocale('ua')).toBe('')
      expect(toLocale('cz')).toBe('')
    })
  })

  describe('Nullish, empty, and non-string inputs', () => {
    it('returns empty string for empty strings and whitespace-only strings', () => {
      expect(toLocale('')).toBe('')
      expect(toLocale('   ')).toBe('')
      expect(toLocale('\t\n')).toBe('')
    })

    it('returns empty string for nullish values', () => {
      expect(toLocale(undefined)).toBe('')
      expect(toLocale(null)).toBe('')
    })

    it('returns empty string for non-string primitives and objects', () => {
      expect(toLocale(123)).toBe('')
      expect(toLocale(0)).toBe('')
      expect(toLocale(NaN)).toBe('')
      expect(toLocale(true)).toBe('')
      expect(toLocale(false)).toBe('')
      expect(toLocale(Symbol('locale'))).toBe('')
      expect(toLocale(BigInt(100))).toBe('')
      expect(toLocale({})).toBe('')
      expect(toLocale([])).toBe('')
      expect(toLocale({ toString: () => 'en-US' })).toBe('')
    })

    it('returns empty string for unknown or invalid country/language codes', () => {
      expect(toLocale('unknown')).toBe('')
      expect(toLocale('zz-ZZ')).toBe('')
      expect(toLocale('en-ZZ')).toBe('')
      expect(toLocale('zz-US')).toBe('')
      expect(toLocale('12-34')).toBe('')
      expect(toLocale('invalid_code_format')).toBe('')
    })
  })
})
