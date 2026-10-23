import { describe, it, expect } from 'vitest'
import { toNumber } from '../toNumber'

describe('toNumber', () => {
  describe('Numeric primitives', () => {
    it('should return the same number if input is a finite number', () => {
      expect(toNumber(123)).toBe(123)
      expect(toNumber(123.45)).toBe(123.45)
      expect(toNumber(-123.45)).toBe(-123.45)
      expect(toNumber(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER)
      expect(toNumber(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER)
      expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
    })

    it('should handle 0 and normalize -0 to +0', () => {
      expect(toNumber(0)).toBe(0)
      expect(Object.is(toNumber(-0), 0)).toBe(true)
    })

    it('should return 0 for non-finite numbers (Infinity, -Infinity, NaN)', () => {
      expect(toNumber(Infinity)).toBe(0)
      expect(toNumber(-Infinity)).toBe(0)
      expect(toNumber(NaN)).toBe(0)
    })
  })

  describe('Simple numeric strings', () => {
    it('should parse simple integers, signed numbers, and floats', () => {
      expect(toNumber('123')).toBe(123)
      expect(toNumber('+123.45')).toBe(123.45)
      expect(toNumber('-123')).toBe(-123)
      expect(toNumber('123.45')).toBe(123.45)
      expect(toNumber('-123.45')).toBe(-123.45)
      expect(toNumber('.45')).toBe(0.45)
    })

    it('should parse string zero and normalize "-0" to +0', () => {
      expect(toNumber('0')).toBe(0)
      expect(Object.is(toNumber('-0'), 0)).toBe(true)
    })
  })

  describe('Thousands and decimal separators', () => {
    it('should handle space as thousands separator with comma or dot decimals', () => {
      expect(toNumber('1 234')).toBe(1234)
      expect(toNumber('1 234,56')).toBe(1234.56)
      expect(toNumber('1 234.56')).toBe(1234.56)
      expect(toNumber('1 234 567.89')).toBe(1234567.89)
      expect(toNumber(' 123,45')).toBe(123.45)
    })

    it('should handle comma as thousands separator when followed by dot or multiple commas', () => {
      expect(toNumber('1,234.56')).toBe(1234.56)
      expect(toNumber('1,234,567.89')).toBe(1234567.89)
      expect(toNumber('1,234,567')).toBe(1234567)
    })

    it('should handle dot as thousands separator when followed by comma or multiple dots', () => {
      expect(toNumber('1.234,56')).toBe(1234.56)
      expect(toNumber('1.234.567,89')).toBe(1234567.89)
      expect(toNumber('1.234.567')).toBe(1234567)
    })

    it('should treat a single comma as a decimal separator (European format)', () => {
      expect(toNumber('1,234')).toBe(1.234)
      expect(toNumber('123,45')).toBe(123.45)
      expect(toNumber('-0,75')).toBe(-0.75)
    })
  })

  describe('Formatted strings with currency symbols, units, and text', () => {
    it('should strip non-numeric characters before parsing', () => {
      expect(toNumber('12abc34')).toBe(1234)
      expect(toNumber('$1,234.56')).toBe(1234.56)
      expect(toNumber('Price: 100.50$')).toBe(100.5)
      expect(toNumber('100px')).toBe(100)
      expect(toNumber('-25%')).toBe(-25)
    })

    it('should strip scientific notation "e" character as non-numeric', () => {
      expect(toNumber('1e3')).toBe(13)
      expect(toNumber('1.5e-2')).toBe(1.5)
    })
  })

  describe('Empty, whitespace-only, nullish, and invalid inputs', () => {
    it('should return 0 for omitted argument, undefined, null, or empty/whitespace strings', () => {
      expect(toNumber()).toBe(0)
      expect(toNumber(undefined)).toBe(0)
      // @ts-expect-error testing null runtime safety
      expect(toNumber(null)).toBe(0)
      expect(toNumber('')).toBe(0)
      expect(toNumber('   ')).toBe(0)
      expect(toNumber('\t\n\r')).toBe(0)
    })

    it('should return 0 for purely non-numeric or malformed sign strings', () => {
      expect(toNumber('abc')).toBe(0)
      expect(toNumber('---')).toBe(0)
      expect(toNumber('  ,  ')).toBe(0)
      expect(toNumber('+-123')).toBe(0)
      expect(toNumber('--123')).toBe(0)
    })

    it('should safely return 0 for non-string and non-number runtime inputs', () => {
      // @ts-expect-error testing boolean runtime safety
      expect(toNumber(false)).toBe(0)
      // @ts-expect-error testing boolean runtime safety
      expect(toNumber(true)).toBe(0)
      // @ts-expect-error testing object runtime safety
      expect(toNumber({})).toBe(0)
    })
  })
})
