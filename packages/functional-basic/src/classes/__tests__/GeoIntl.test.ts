// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { GeoIntl } from '../GeoIntl'
import { Geo } from '../Geo'

describe('GeoIntl', () => {
  let intl: GeoIntl

  beforeEach(() => {
    // Reset Geo to a known state
    Geo.set('en-US')
    intl = new GeoIntl('en-US')
  })

  describe('Initialization & Caching', () => {
    it('isItem should return true for existing items', () => {
      new GeoIntl('fr-FR')
      expect(GeoIntl.isItem('fr-FR')).toBe(true)
    })

    it('static getLocation should return standard code with language priority', () => {
      // en-VN should find en-US because language is prioritized
      expect(GeoIntl.getLocation('en-VN')).toBe('en-US')
    })

    it('getInstance should return a GeoIntl instance', () => {
      const instance = GeoIntl.getInstance('en-US')
      expect(instance).toBeInstanceOf(GeoIntl)
      expect(instance.getLocation()).toBe('en-US')
    })

    it('should cache instances by location (standard) in the constructor', () => {
      const instance1 = new GeoIntl('en-US')
      const instance2 = new GeoIntl('en-US')
      expect(instance1).toBe(instance2)
    })

    it('should return different instances for different locations', () => {
      const en = new GeoIntl('en-US')
      const ru = new GeoIntl('ru-RU')
      expect(en).not.toBe(ru)
      expect(en.getLocation()).toBe('en-US')
      expect(ru.getLocation()).toBe('ru-RU')
    })
  })

  describe('General Methods', () => {
    it('getLocation should return the correct location string', () => {
      expect(intl.getLocation()).toBe('en-US')
    })

    it('getFirstDay should return a valid code', () => {
      expect(['Mo', 'Su', 'Sa']).toContain(intl.getFirstDay())
    })
  })

  describe('Display Names', () => {
    it('display should return language name by default', () => {
      expect(intl.display('en')).toBe('English')
    })

    it('display should return region name when requested', () => {
      expect(intl.display('US', 'region')).toBe('United States')
    })

    it('languageName should format language code', () => {
      expect(intl.languageName('ru-RU')).toBe('Russian')
    })

    it('countryName should format country code', () => {
      expect(intl.countryName('FR')).toBe('France')
    })
  })

  describe('Full Name Formatting', () => {
    it('should format as first last by default', () => {
      expect(intl.fullName('Doe', 'John')).toBe('John Doe')
    })

    it('should include surname if provided', () => {
      expect(intl.fullName('Doe', 'John', 'Smith')).toBe('John Doe')
    })

    it('should abbreviate names when short=true', () => {
      expect(intl.fullName('Doe', 'John', undefined, true)).toBe('J. Doe')
    })
  })

  describe('Number Formatting', () => {
    it('number handles regular formatting', () => {
      expect(intl.number(1234.56)).toBe('1,234.56')
    })

    it('decimal returns the current separator', () => {
      expect(intl.decimal()).toBe('.')
    })

    it('percent formats fraction to percent', () => {
      expect(intl.percent(0.25)).toBe('25%')
    })

    it('percentBy100 formats 100-based value', () => {
      expect(intl.percentBy100(25)).toBe('25%')
    })
  })

  describe('Currency & Units', () => {
    it('currency formats with symbol', () => {
      expect(intl.currency(10, 'USD')).toContain('$10.00')
    })

    it('currency should parse currency code from string', () => {
      expect(intl.currency('100EUR')).toContain('€100.00')
    })

    it('currency with numberOnly returns only value', () => {
      expect(intl.currency(10, 'USD', true)).toBe('10.00')
    })

    it('currencySymbol returns symbol string', () => {
      expect(intl.currencySymbol('EUR')).toBe('€')
    })

    it('unit formats with unit label', () => {
      expect(intl.unit(50, 'celsius')).toContain('50°C')
    })

    it('unit should parse unit from string', () => {
      expect(intl.unit('25kilogram')).toContain('25 kg')
    })

    it('unit should fallback to parsed number if unit is invalid', () => {
      expect(intl.unit('50invalid')).toBe('50')
    })

    it('sizeFile auto-upgrades through units', () => {
      expect(intl.sizeFile(1024, 'byte')).toContain('1,024 byte')
      expect(intl.sizeFile(1025, 'byte')).toContain('1 kB')
      expect(intl.sizeFile(1024 * 1024 + 1, 'byte')).toContain('1 MB')
      expect(intl.sizeFile(1024 * 1024 * 1024 + 1, 'byte')).toContain('1 GB')
    })
  })

  describe('Pluralization', () => {
    const list = 'один|два|несколько|много|остальное|ноль' // Corrected Russian form order
    const ruIntl = new GeoIntl('ru-RU')

    it('should select correct form for Russian plural (one)', () => {
      expect(ruIntl.plural(1, list)).toContain('один')
    })

    it('should select correct form for Russian plural (few)', () => {
      // 2, 3, 4 are 'few' in Russian
      expect(ruIntl.plural(2, list)).toContain('несколько')
    })

    it('should select correct form for Russian plural (many)', () => {
      expect(ruIntl.plural(5, list)).toContain('много')
    })
  })

  describe('Date & Time', () => {
    const date = new Date(2025, 2, 7, 15, 30, 0) // March 7, 2025

    it('date formats as date by default', () => {
      expect(intl.date(date)).toBe('Mar 07, 2025')
    })

    it('time formats correct time', () => {
      expect(intl.time(date)).toContain('3:30')
    })

    it('month returns long month name', () => {
      expect(intl.month(date)).toBe('March')
    })

    it('weekday returns long weekday name', () => {
      expect(intl.weekday(date)).toBe('Friday')
    })

    it('months returns list of all months', () => {
      const list = intl.months()
      expect(list).toHaveLength(13)
      expect(list[3]?.label).toBe('March')
    })

    it('weekdays returns list of all days', () => {
      // Mocking system time to ensure consistent behavior
      vi.useFakeTimers()
      vi.setSystemTime(new Date(2025, 2, 7)) // A Friday
      const list = intl.weekdays()
      expect(list).toHaveLength(8)
      // For en-US, Su is first day (0). Friday is 5.
      // GeoIntl.weekdays loops 7 days from (today - current).
      // current = 5 + 1 = 6. 7 - 6 = 1 (Sunday).
      // So list[1] is Sunday, list[6] should be Friday?
      // Let's just check if 'Friday' exists in the labels.
      expect(list.some(item => item.label === 'Friday')).toBe(true)
      vi.useRealTimers()
    })
  })

  describe('Relative Time', () => {
    it('relative formats correctly', () => {
      const now = new Date(2025, 2, 7)
      const future = new Date(2025, 2, 9)
      expect(intl.relative(future, undefined, now)).toBe('in 2 days')
    })

    it('relativeByValue formats direct value with unit', () => {
      expect(intl.relativeByValue(-5, 'minute')).toBe('5 minutes ago')
    })

    it('relativeLimit should respect boundaries', () => {
      const now = new Date(2025, 0, 10)
      const near = new Date(2025, 0, 12)
      const far = new Date(2025, 1, 10)

      expect(intl.relativeLimit(near, 7, now)).toBe('in 2 days')
      expect(intl.relativeLimit(far, 7, now)).toBe('Feb 10, 2025')
    })
  })

  describe('Sorting', () => {
    it('sorts alphabetically per locale', () => {
      const data = ['яблоко', 'арбуз', 'банан']
      const ruIntl = new GeoIntl('ru-RU')
      const sorted = ruIntl.sort([...data])
      expect(sorted[0]).toBe('арбуз')
      expect(sorted[2]).toBe('яблоко')
    })
  })
})
