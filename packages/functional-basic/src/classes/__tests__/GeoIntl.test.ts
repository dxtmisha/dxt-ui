// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { GeoIntl } from '../GeoIntl'
import { Geo } from '../Geo'

describe('GeoIntl', () => {
  let intl: GeoIntl

  beforeEach(() => {
    Geo.set('en-US')
    intl = new GeoIntl('en-US')
  })

  // --- General ---
  describe('getLocation / getFirstDay', () => {
    it('should return the correct location string', () => {
      expect(intl.getLocation()).toBe('en-US')
    })

    it('should return the first day of the week', () => {
      const firstDay = intl.getFirstDay()
      expect(['Mo', 'Su', 'Sa']).toContain(firstDay)
    })
  })

  // --- Numbers ---
  describe('number / decimal / percent', () => {
    it('should format a number', () => {
      const result = intl.number(1234.5)
      expect(result).toBe('1,234.5')
    })

    it('should return the decimal separator', () => {
      const dec = intl.decimal()
      expect(['.', ',']).toContain(dec)
    })

    it('should format percent from a fraction', () => {
      const result = intl.percent(0.5)
      expect(result).toBe('50%')
    })

    it('should format percentBy100', () => {
      const result = intl.percentBy100(75)
      expect(result).toBe('75%')
    })
  })

  // --- Currency ---
  describe('currency / currencySymbol', () => {
    it('should format currency', () => {
      const result = intl.currency(1000, 'USD')
      expect(result).toContain('1,000')
      expect(result).toContain('$')
    })

    it('should return numberOnly without a symbol', () => {
      const result = intl.currency(1500, 'USD', true)
      expect(result).not.toContain('$')
      expect(result).toContain('1,500')
    })

    it('should return currency symbol', () => {
      expect(intl.currencySymbol('USD')).toBe('$')
      expect(intl.currencySymbol('EUR')).toBe('€')
    })
  })

  // --- File Size ---
  describe('sizeFile', () => {
    it('should format bytes', () => {
      const result = intl.sizeFile(500)
      expect(result).toContain('500')
    })

    it('should auto-upgrade to kilobytes', () => {
      const result = intl.sizeFile(2048)
      expect(result).toContain('2') // 2 KB
    })

    it('should auto-upgrade to megabytes', () => {
      const result = intl.sizeFile(1024 * 1024 * 3)
      expect(result).toContain('3') // 3 MB
    })
  })

  // --- Plural ---
  describe('plural', () => {
    it('should handle simple plural form', () => {
      const result = intl.plural(1, 'apple|apples')
      expect(result).toBe('1 apple')
    })

    it('should use plural form for multiple', () => {
      const result = intl.plural(5, 'apple|apples')
      expect(result).toBe('5 apples')
    })
  })

  // --- Names ---
  describe('languageName / countryName / fullName', () => {
    it('should return a language name', () => {
      const result = intl.languageName('en')
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('should return a country name', () => {
      const result = intl.countryName('US')
      expect(result).toBeTruthy()
    })

    it('should format full name in Western order (first last)', () => {
      const result = intl.fullName('Smith', 'John')
      expect(result).toBe('John Smith')
    })

    it('should abbreviate the full name when short=true', () => {
      const result = intl.fullName('Smith', 'John', undefined, true)
      // The regex replaces 2nd+ word tokens: 'John Smith' → 'John S.'
      expect(result).toContain('S.')
      expect(result).toContain('John')
    })
  })

  // --- Dates ---
  describe('date / time / month / weekday', () => {
    const testDate = new Date('2025-03-07T10:00:00')

    it('should format a date result', () => {
      const result = intl.date(testDate, 'date')
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('should format time', () => {
      const result = intl.time(testDate)
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('should return month name', () => {
      const result = intl.month(testDate, 'long')
      expect(result.toLowerCase()).toContain('march')
    })

    it('should return a months array with 13 items (empty + 12)', () => {
      const result = intl.months()
      expect(result).toHaveLength(13)
      expect(result[0]?.value).toBeUndefined()
      expect(result[1]?.value).toBe(1)
    })

    it('should return weekday name', () => {
      const result = intl.weekday(testDate, 'long')
      expect(result.toLowerCase()).toContain('friday')
    })

    it('should return a weekdays array with 8 items (empty + 7)', () => {
      const result = intl.weekdays()
      expect(result).toHaveLength(8)
      expect(result[0]?.value).toBeUndefined()
    })
  })

  // --- Relative Time ---
  describe('relative / relativeByValue', () => {
    it('should return a relative time string', () => {
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000)
      const result = intl.relative(fiveMinutesAgo)
      expect(result).toBeTruthy()
      expect(typeof result).toBe('string')
    })

    it('should return relative by value with unit', () => {
      const result = intl.relativeByValue(-3, 'day')
      expect(result).toBeTruthy()
    })

    it('relativeLimit: within limit should return relative', () => {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
      const result = intl.relativeLimit(yesterday, 7)
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('relativeLimit: beyond limit should return the absolute date', () => {
      const twoMonthsAgo = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
      const result = intl.relativeLimit(twoMonthsAgo, 7)
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })
  })

  // --- Static factory ---
  describe('getInstance', () => {
    it('should return a GeoIntl instance', () => {
      const instance = GeoIntl.getInstance('en-US')
      expect(instance).toBeInstanceOf(GeoIntl)
      expect(instance.getLocation()).toBe('en-US')
    })
  })

  // --- Sort ---
  describe('sort', () => {
    it('should sort strings in locale order', () => {
      const data = ['banana', 'apple', 'cherry']
      const sorted = intl.sort([...data])
      expect(sorted[0]).toBe('apple')
      expect(sorted[1]).toBe('banana')
      expect(sorted[2]).toBe('cherry')
    })
  })
})
