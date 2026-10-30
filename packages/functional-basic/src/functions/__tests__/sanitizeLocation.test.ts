import { describe, it, expect } from 'vitest'
import { sanitizeLocation } from '../sanitizeLocation'

describe('sanitizeLocation', () => {
  describe('Standard functional requirements (Valid locales)', () => {
    it('accepts valid 2-letter language codes', () => {
      expect(sanitizeLocation('en')).toBe('en')
      expect(sanitizeLocation('ru')).toBe('ru')
      expect(sanitizeLocation('fr')).toBe('fr')
    })

    it('accepts valid language-region codes', () => {
      expect(sanitizeLocation('en-US')).toBe('en-US')
      expect(sanitizeLocation('en-GB')).toBe('en-GB')
      expect(sanitizeLocation('ru-RU')).toBe('ru-RU')
    })

    it('accepts complex BCP-47 subtags', () => {
      expect(sanitizeLocation('zh-Hans-CN')).toBe('zh-Hans-CN')
      expect(sanitizeLocation('es-419')).toBe('es-419')
    })
  })

  describe('Normalization and Trimming', () => {
    it('normalizes underscores to hyphens', () => {
      expect(sanitizeLocation('en_US')).toBe('en-US')
      expect(sanitizeLocation('ru_RU')).toBe('ru-RU')
      expect(sanitizeLocation('zh_Hans_CN')).toBe('zh-Hans-CN')
    })

    it('canonicalizes tag casing (language lowercase, region uppercase, script titlecase)', () => {
      expect(sanitizeLocation('en-us')).toBe('en-US')
      expect(sanitizeLocation('EN-US')).toBe('en-US')
      expect(sanitizeLocation('ru-ru')).toBe('ru-RU')
      expect(sanitizeLocation('zh-hans-cn')).toBe('zh-Hans-CN')
      expect(sanitizeLocation('ZH_HANS_CN')).toBe('zh-Hans-CN')
    })

    it('trims leading and trailing whitespace', () => {
      expect(sanitizeLocation('  en-US  ')).toBe('en-US')
      expect(sanitizeLocation('\ten-GB\n')).toBe('en-GB')
    })
  })

  describe('Boundary values and length limits', () => {
    it('rejects strings exceeding MAX_LOCATION_LENGTH (64 chars)', () => {
      const longValidPattern = 'en-' + 'a'.repeat(62)
      expect(longValidPattern.length).toBeGreaterThan(64)
      expect(sanitizeLocation(longValidPattern)).toBeUndefined()
    })

    it('accepts strings within limit', () => {
      expect(sanitizeLocation('en-US')).toBe('en-US')
    })
  })

  describe('Empty and nullish inputs', () => {
    it('returns undefined for empty string and whitespace-only', () => {
      expect(sanitizeLocation('')).toBeUndefined()
      expect(sanitizeLocation('   ')).toBeUndefined()
      expect(sanitizeLocation('\t\n')).toBeUndefined()
    })

    it('returns undefined for undefined and null', () => {
      expect(sanitizeLocation(undefined)).toBeUndefined()
      expect(sanitizeLocation(null)).toBeUndefined()
      expect(sanitizeLocation()).toBeUndefined()
    })

    it('returns undefined for non-string types', () => {
      expect(sanitizeLocation(123)).toBeUndefined()
      expect(sanitizeLocation(true)).toBeUndefined()
      expect(sanitizeLocation(false)).toBeUndefined()
      expect(sanitizeLocation({})).toBeUndefined()
      expect(sanitizeLocation([])).toBeUndefined()
    })
  })

  describe('Security and malformed strings', () => {
    it('rejects XSS and script injection payloads', () => {
      expect(sanitizeLocation('<script>alert(1)</script>')).toBeUndefined()
      expect(sanitizeLocation('"><img src=x onerror=alert(1)>')).toBeUndefined()
    })

    it('rejects paths and non-BCP-47 characters', () => {
      expect(sanitizeLocation('../en')).toBeUndefined()
      expect(sanitizeLocation('en/US')).toBeUndefined()
      expect(sanitizeLocation('en;drop table')).toBeUndefined()
      expect(sanitizeLocation('en$US')).toBeUndefined()
    })

    it('rejects structurally invalid or unsupported locale tags', () => {
      expect(sanitizeLocation('12-34')).toBeUndefined()
      expect(sanitizeLocation('a')).toBeUndefined()
      expect(sanitizeLocation('invalid_very_long_subtag_beyond_eight_chars')).toBeUndefined()
    })
  })
})
