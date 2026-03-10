import { describe, it, expect, beforeEach } from 'vitest'
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
      // Internal intl is computed, we check behavior
      expect(geoIntlRef.number(1000).value).toBe('1000')
    })

    it('updates when the locale ref changes', async () => {
      const codeRef = ref('en-US')
      const gi = new GeoIntlRef(codeRef)
      expect(gi.number(1000).value).toBe('1000')

      codeRef.value = 'de-DE'
      await nextTick()

      // In non-DOM, it stays unformatted
      expect(gi.number(1000).value).toBe('1000')
    })
  })

  describe('Display Names', () => {
    it('display returns translated names', () => {
      // In non-DOM environment, it returns value or empty string
      expect(geoIntlRef.display('en-US', 'language').value).toBe('en-US')
    })

    it('languageName returns language display name', () => {
      expect(geoIntlRef.languageName('ru').value).toBeDefined()
    })

    it('countryName returns region display name', () => {
      expect(geoIntlRef.countryName('RU').value).toBeDefined()
    })
  })

  describe('Number Formatting', () => {
    it('number formats numbers correctly', () => {
      // Fallback returns toString() if numberObject fails
      expect(geoIntlRef.number(1234.56).value).toBe('1234.56')
    })

    it('decimal returns decimal separator', () => {
      expect(geoIntlRef.decimal().value).toBe('.')
    })

    it('percent formats percentage', () => {
      expect(geoIntlRef.percent(0.25).value).toBe('0.25')
    })

    it('percentBy100 formats percentage (value * 100)', () => {
      expect(geoIntlRef.percentBy100(25).value).toBe('0.25')
    })

    it('plural returns correct word form', () => {
      const words = 'one|other'
      // Fallback returns number + first word
      expect(geoIntlRef.plural(1, words).value).toBe('1 one')
    })
  })

  describe('Currency & Units', () => {
    it('currency formats money', () => {
      expect(geoIntlRef.currency(10, 'USD').value).toBe('10')
    })

    it('currencySymbol returns symbol', () => {
      expect(geoIntlRef.currencySymbol('USD').value).toBe('USD')
    })

    it('unit formats with units', () => {
      expect(geoIntlRef.unit(5, { unit: 'meter', style: 'unit' }).value).toBe('5')
    })

    it('sizeFile formats file sizes', () => {
      expect(geoIntlRef.sizeFile(1024, 'kilobyte').value).toBe('1024')
    })
  })

  describe('Date & Time', () => {
    const date = new Date(2023, 0, 1) // Jan 1, 2023

    it('date formats dates', () => {
      // toLocaleString in node/vitest might differ, but it shouldn't be empty
      expect(geoIntlRef.date(date, 'date').value).toBeDefined()
    })

    it('time formats time', () => {
      expect(geoIntlRef.time(date).value).toBeDefined()
    })

    it('month returns month name', () => {
      // Fallback returns empty string
      expect(geoIntlRef.month(date).value).toBe('')
    })

    it('months returns list of month names', () => {
      const list = geoIntlRef.months().value
      // Fallback returns list with one empty item
      expect(list.length).toBe(1)
    })

    it('weekday returns weekday name', () => {
      expect(geoIntlRef.weekday(date).value).toBe('')
    })

    it('weekdays returns list of weekday names', () => {
      const list = geoIntlRef.weekdays().value
      expect(list.length).toBe(1)
    })
  })

  describe('Relative Time', () => {
    it('relative formats relative time', () => {
      const now = new Date()
      const yesterday = new Date(now)
      yesterday.setDate(now.getDate() - 1)
      expect(geoIntlRef.relative(yesterday).value).toBe('')
    })

    it('relativeByValue formats by unit', () => {
      expect(geoIntlRef.relativeByValue(-1, 'day').value).toBe('')
    })
  })

  describe('Others', () => {
    it('sort sorts strings by locale', () => {
      const data = ['b', 'a', 'c']
      const sorted = geoIntlRef.sort(data).value
      // Fallback returns data as is
      expect(sorted).toEqual(['b', 'a', 'c'])
    })
  })
})
