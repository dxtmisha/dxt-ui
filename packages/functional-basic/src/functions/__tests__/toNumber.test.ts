import { describe, it, expect } from 'vitest'
import { toNumber } from '../toNumber'

describe('toNumber', () => {
  describe('Primitives', () => {
    it('should return the same number if input is a finite number', () => {
      expect(toNumber(123)).toBe(123)
      expect(toNumber(123.45)).toBe(123.45)
      expect(toNumber(0)).toBe(0)
      expect(toNumber(-0)).toBe(0)
      expect(toNumber(-123.45)).toBe(-123.45)
    })

    it('should return 0 for non-finite numbers', () => {
      expect(toNumber(Infinity)).toBe(0)
      expect(toNumber(-Infinity)).toBe(0)
      expect(toNumber(NaN)).toBe(0)
    })
  })

  describe('Empty and Nullish inputs', () => {
    it('should return 0 for nullish or empty values', () => {
      expect(toNumber(undefined)).toBe(0)
      expect(toNumber('')).toBe(0)
      expect(toNumber('   ')).toBe(0)
    })
  })

  describe('Simple Strings', () => {
    it('should parse simple integers and floats', () => {
      expect(toNumber('123')).toBe(123)
      expect(toNumber('-123')).toBe(-123)
      expect(toNumber('123.45')).toBe(123.45)
      expect(toNumber('-123.45')).toBe(-123.45)
      expect(toNumber('.45')).toBe(0.45)
    })
  })

  describe('Thousands Separators', () => {
    it('should handle space as thousands separator', () => {
      expect(toNumber('1 234,56')).toBe(1234.56)
      expect(toNumber('1 234.56')).toBe(1234.56)
      expect(toNumber('1 234 567.89')).toBe(1234567.89)
    })

    it('should handle comma as thousands separator (when dot is present)', () => {
      expect(toNumber('1,234.56')).toBe(1234.56)
      expect(toNumber('1,234,567.89')).toBe(1234567.89)
    })

    it('should handle dot as thousands separator (when comma is present)', () => {
      expect(toNumber('1.234,56')).toBe(1234.56)
      expect(toNumber('1.234.567,89')).toBe(1234567.89)
    })

    it('should treat single comma as decimal separator (European style)', () => {
      expect(toNumber('1,234')).toBe(1.234)
      expect(toNumber('123,45')).toBe(123.45)
    })
  })

  describe('Edge Cases', () => {
    it('should return 0 for purely non-numeric strings', () => {
      expect(toNumber('abc')).toBe(0)
      expect(toNumber('---')).toBe(0)
      expect(toNumber('  ,  ')).toBe(0)
    })

    it('should strip non-numeric characters before parsing', () => {
      expect(toNumber('12abc34')).toBe(1234)
      expect(toNumber('$1,234.56')).toBe(1234.56)
      expect(toNumber('Price: 100.50$')).toBe(100.5)
    })

    it('should handle scientific notation by current limitation (stripping "e")', () => {
      // Current implementation strips 'e', so '1e3' becomes '13'
      expect(toNumber('1e3')).toBe(13)
      expect(toNumber('1.5e-2')).toBe(1.5) // e is stripped, - remains, so "1.5-2" becomes 1.5
    })

    it('should handle multiple signs correctly (using parseFloat)', () => {
      expect(toNumber('+-123')).toBe(0) // parseFloat('+-123') is NaN
      expect(toNumber('--123')).toBe(0) // parseFloat('--123') is NaN
    })
  })
})
