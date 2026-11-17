import { describe, expect, it } from 'vitest'
import { CmsVerification } from '../CmsVerification'

describe('CmsVerification', () => {
  describe('escapeSearchPattern', () => {
    it('escapes backslashes, percent signs, and underscores in SQL LIKE order', () => {
      expect(CmsVerification.escapeSearchPattern('100%_test\\')).toBe('100\\%\\_test\\\\')
      expect(CmsVerification.escapeSearchPattern('plain-text')).toBe('plain-text')
      expect(CmsVerification.escapeSearchPattern('')).toBe('')
    })
  })

  describe('normalizeLimit', () => {
    it('returns default limit when omitted or non-finite', () => {
      expect(CmsVerification.normalizeLimit()).toBe(20)
      expect(CmsVerification.normalizeLimit(undefined)).toBe(20)
      expect(CmsVerification.normalizeLimit(Number.NaN)).toBe(20)
      expect(CmsVerification.normalizeLimit(Number.POSITIVE_INFINITY)).toBe(20)
    })

    it('clamps values to [1, maxLimit] and truncates floats', () => {
      expect(CmsVerification.normalizeLimit(0)).toBe(1)
      expect(CmsVerification.normalizeLimit(-10)).toBe(1)
      expect(CmsVerification.normalizeLimit(15.9)).toBe(15)
      expect(CmsVerification.normalizeLimit(500)).toBe(200)
      expect(CmsVerification.normalizeLimit(500, 10, 50)).toBe(50)
    })
  })

  describe('normalizeOffset', () => {
    it('returns 0 when omitted, non-finite, or negative', () => {
      expect(CmsVerification.normalizeOffset()).toBe(0)
      expect(CmsVerification.normalizeOffset(undefined)).toBe(0)
      expect(CmsVerification.normalizeOffset(Number.NaN)).toBe(0)
      expect(CmsVerification.normalizeOffset(Number.POSITIVE_INFINITY)).toBe(0)
      expect(CmsVerification.normalizeOffset(-10)).toBe(0)
    })

    it('truncates positive floats to non-negative integers', () => {
      expect(CmsVerification.normalizeOffset(0)).toBe(0)
      expect(CmsVerification.normalizeOffset(12.9)).toBe(12)
      expect(CmsVerification.normalizeOffset(40)).toBe(40)
    })
  })

  describe('normalizeOptionalText', () => {
    it('preserves undefined and null values', () => {
      expect(CmsVerification.normalizeOptionalText()).toBeUndefined()
      expect(CmsVerification.normalizeOptionalText(undefined)).toBeUndefined()
      expect(CmsVerification.normalizeOptionalText(null)).toBeNull()
    })

    it('trims text and converts blank strings to null', () => {
      expect(CmsVerification.normalizeOptionalText('')).toBeNull()
      expect(CmsVerification.normalizeOptionalText('   \t\n  ')).toBeNull()
      expect(CmsVerification.normalizeOptionalText('  hello world  ')).toBe('hello world')
    })
  })
})
