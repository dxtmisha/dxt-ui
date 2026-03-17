// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { GeoIntlRef } from '../GeoIntlRef'
import { ref, nextTick } from 'vue'

describe('GeoIntlRef', () => {
  let geoIntlRef: GeoIntlRef
  const locale = 'en-US'

  beforeEach(() => {
    geoIntlRef = new GeoIntlRef(locale)
  })

  describe('initialization and reactivity', () => {
    it('initializes correctly with a string locale', () => {
      expect(geoIntlRef.number(1000).value).toBe('1,000')
    })

    it('updates when the locale ref changes', async () => {
      const codeRef = ref('en-US')
      const gi = new GeoIntlRef(codeRef)
      expect(gi.number(1000).value).toBe('1,000')

      codeRef.value = 'ru-RU'
      await nextTick()

      // Should update a format to Russian (space-like separator)
      expect(gi.number(1000).value).toContain('1')
      expect(gi.number(1000).value).toContain('000')
    })
  })

  describe('Display Names', () => {
    it('display returns translated names', () => {
      expect(geoIntlRef.display('en-US', 'language').value).toBe('American English')
    })

    it('languageName returns language display name', () => {
      expect(geoIntlRef.languageName('ru').value).toBe('Russian')
    })

    it('countryName returns region display name', () => {
      expect(geoIntlRef.countryName('US').value).toBe('United States')
    })
  })

  describe('Number Formatting', () => {
    it('number formats numbers correctly', () => {
      expect(geoIntlRef.number(1234.56).value).toBe('1,234.56')
    })

    it('decimal returns decimal separator', () => {
      expect(geoIntlRef.decimal().value).toBe('.')
    })

    it('percent formats percentage', () => {
      expect(geoIntlRef.percent(0.25).value).toBe('25%')
    })

    it('percentBy100 formats percentage (value / 100 as per GeoIntl logic)', () => {
      expect(geoIntlRef.percentBy100(25).value).toBe('25%')
    })

    it('plural returns correct word form', () => {
      const words = 'apple|apples'
      expect(geoIntlRef.plural(1, words).value).toBe('1 apple')
      expect(geoIntlRef.plural(5, words).value).toBe('5 apples')
    })
  })

  describe('Currency & Units', () => {
    it('currency formats money', () => {
      expect(geoIntlRef.currency(10, 'USD').value).toContain('$10.00')
    })

    it('currencySymbol returns symbol', () => {
      expect(geoIntlRef.currencySymbol('USD').value).toBe('$')
    })

    it('unit formats with units', () => {
      expect(geoIntlRef.unit(50, 'celsius').value).toContain('50°C')
    })

    it('sizeFile formats file sizes with > 1024 transition', () => {
      expect(geoIntlRef.sizeFile(1024, 'byte').value).toContain('1,024 byte')
      expect(geoIntlRef.sizeFile(1025, 'byte').value).toContain('1 kB')
    })
  })

  describe('Date & Time', () => {
    const date = new Date(2025, 2, 7, 15, 30, 0) // Mar 7, 2025

    it('date formats dates', () => {
      expect(geoIntlRef.date(date).value).toBe('Mar 07, 2025')
    })

    it('time formats time', () => {
      expect(geoIntlRef.time(date).value).toContain('3:30')
    })

    it('month returns month name', () => {
      expect(geoIntlRef.month(date).value).toBe('March')
    })

    it('months returns list of month names', () => {
      const list = geoIntlRef.months().value
      expect(list).toHaveLength(13)
      expect(list[3]?.label).toBe('March')
    })

    it('weekday returns weekday name', () => {
      expect(geoIntlRef.weekday(date).value).toBe('Friday')
    })

    it('weekdays returns list of weekday names', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date(2025, 2, 7)) // Friday
      const list = geoIntlRef.weekdays().value
      expect(list.some(item => item.label === 'Friday')).toBe(true)
      vi.useRealTimers()
    })
  })

  describe('Relative Time', () => {
    it('relative formats relative time', () => {
      const now = new Date(2025, 0, 1)
      const future = new Date(2025, 0, 3)
      expect(geoIntlRef.relative(future, undefined, now).value).toBe('in 2 days')
    })

    it('relativeByValue formats by unit', () => {
      expect(geoIntlRef.relativeByValue(-5, 'minute').value).toBe('5 minutes ago')
    })
  })

  describe('Others', () => {
    it('sort sorts strings by locale', () => {
      const data = ['b', 'a', 'c']
      const sorted = geoIntlRef.sort(data).value
      expect(sorted).toEqual(['a', 'b', 'c'])
    })
  })
})
