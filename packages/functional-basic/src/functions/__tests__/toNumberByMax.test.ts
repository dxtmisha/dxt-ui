/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { toNumberByMax } from '../toNumberByMax'
import { Geo } from '../../classes/Geo'

describe('toNumberByMax', () => {
  beforeEach(() => {
    Geo.set('en-US')
  })

  describe('Standard maximum bounds (Happy path)', () => {
    it('should return the number as-is when it is less than or equal to max', () => {
      expect(toNumberByMax(50, 100)).toBe(50)
      expect(toNumberByMax(100, 100)).toBe(100)
      expect(toNumberByMax(99.9, 100)).toBe(99.9)
    })

    it('should return max with a trailing plus sign when value exceeds max', () => {
      expect(toNumberByMax(101, 100)).toBe('100+')
      expect(toNumberByMax(150, 100)).toBe('100+')
      expect(toNumberByMax(999, 99)).toBe('99+')
      expect(toNumberByMax(10.5, 10.2)).toBe('10.2+')
    })

    it('should return the parsed number without capping when max is omitted or empty string', () => {
      expect(toNumberByMax(150)).toBe(150)
      expect(toNumberByMax(150, undefined)).toBe(150)
      expect(toNumberByMax(150, '')).toBe(150)
    })
  })

  describe('Boundary values with zero and negative numbers', () => {
    it('should properly enforce numeric max = 0 without treating 0 as falsy', () => {
      expect(toNumberByMax(10, 0)).toBe('0+')
      expect(toNumberByMax(0.1, 0)).toBe('0+')
      expect(toNumberByMax(0, 0)).toBe(0)
      expect(toNumberByMax(-5, 0)).toBe(-5)
    })

    it('should properly enforce string max = "0"', () => {
      expect(toNumberByMax(10, '0')).toBe('0+')
      expect(toNumberByMax(0, '0')).toBe(0)
      expect(toNumberByMax(-1, '0')).toBe(-1)
    })

    it('should handle negative values and negative maximums', () => {
      expect(toNumberByMax(-5, -10)).toBe('-10+')
      expect(toNumberByMax(-10, -10)).toBe(-10)
      expect(toNumberByMax(-15, -10)).toBe(-15)
    })
  })

  describe('String, empty, and nullish inputs', () => {
    it('should parse numeric string values and string maximums', () => {
      expect(toNumberByMax('50', '100')).toBe(50)
      expect(toNumberByMax('150', '100')).toBe('100+')
      expect(toNumberByMax('1500.50', '1000')).toBe('1000+')
    })

    it('should return 0 when called with no arguments, undefined, or non-numeric strings', () => {
      expect(toNumberByMax()).toBe(0)
      expect(toNumberByMax(undefined, 100)).toBe(0)
      expect(toNumberByMax('', 100)).toBe(0)
      expect(toNumberByMax('abc', 100)).toBe(0)
    })
  })

  describe('Localization and GeoIntl formatting', () => {
    it('should format numbers with locale separators when formatting is true and value <= max', () => {
      expect(toNumberByMax(1000, 5000, true)).toBe('1,000')
      expect(toNumberByMax(1234.56, undefined, true)).toBe('1,234.56')
    })

    it('should format the capped maximum with a trailing plus sign when formatting is true and value > max', () => {
      expect(toNumberByMax(1500, 1000, true)).toBe('1,000+')
      expect(toNumberByMax(1000000, 99999, true)).toBe('99,999+')
    })

    it('should return unformatted numbers when formatting is explicitly false', () => {
      expect(toNumberByMax(1000, 5000, false)).toBe(1000)
      expect(toNumberByMax(6000, 5000, false)).toBe('5000+')
    })

    it('should respect the explicit language parameter for both uncapped and capped values', () => {
      expect(toNumberByMax(2500, 2000, true, 'en-US')).toBe('2,000+')
      expect(toNumberByMax(1500, 2000, true, 'en-US')).toBe('1,500')
      expect(toNumberByMax(2500, 2000, true, 'de-DE')).toBe('2.000+')
      expect(toNumberByMax(1500, 2000, true, 'de-DE')).toBe('1.500')
    })
  })
})
