// @vitest-environment jsdom
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { GeoIntl } from '../GeoIntl'
import { Geo } from '../Geo'

describe('GeoIntl', () => {
  let intl: GeoIntl

  beforeEach(() => {
    Geo.set('en-US')
    intl = new GeoIntl('en-US')
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Initialization & Caching', () => {
    it('isItem should return true for existing items and false for uncreated locales', () => {
      new GeoIntl('fr-FR')
      expect(GeoIntl.isItem('fr-FR')).toBe(true)
      expect(GeoIntl.isItem('pt-BR')).toBe(false)
    })

    it('static getLocation should return standard code with country priority', () => {
      expect(GeoIntl.getLocation('en-VN')).toBe('en-VN')
    })

    it('getInstance should return a cached or new GeoIntl instance', () => {
      const instance = GeoIntl.getInstance('en-US')
      expect(instance).toBeInstanceOf(GeoIntl)
      expect(instance.getLocation()).toBe('en-US')

      const newInstance = GeoIntl.getInstance('it-IT')
      expect(newInstance.getLocation()).toBe('it-IT')
    })

    it('should cache instances by location (standard) in the constructor', () => {
      const firstInstance = new GeoIntl('en-US')
      const secondInstance = new GeoIntl('en-US')
      expect(firstInstance).toBe(secondInstance)
    })

    it('should return different instances for different locations', () => {
      const englishIntl = new GeoIntl('en-US')
      const russianIntl = new GeoIntl('ru-RU')
      expect(englishIntl).not.toBe(russianIntl)
      expect(englishIntl.getLocation()).toBe('en-US')
      expect(russianIntl.getLocation()).toBe('ru-RU')
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
    it('display should return language name by default or for current locale when value is omitted', () => {
      expect(intl.display('en')).toBe('English')
      expect(intl.display()).toBe('English')
    })

    it('display should return region name when requested with string or object options', () => {
      expect(intl.display('US', 'region')).toBe('United States')
      expect(intl.display(undefined, { type: 'region' })).toBe('United States')
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

    it('should include surname when locale format uses surname', () => {
      expect(intl.fullName('Doe', 'John', 'Smith')).toBe('John Doe')

      const russianIntl = new GeoIntl('ru-RU')
      expect(russianIntl.fullName('Иванов', 'Иван', 'Иванович')).toBe('Иванов Иванович Иван')
    })

    it('should abbreviate names when short=true and not output "undefined." when surname is undefined', () => {
      expect(intl.fullName('Doe', 'John', undefined, true)).toBe('J. Doe')

      const russianIntl = new GeoIntl('ru-RU')
      expect(russianIntl.fullName('Иванов', 'Иван', undefined, true)).toBe('Иванов И.')
      expect(russianIntl.fullName('Иванов', 'Иван', 'Иванович', true)).toBe('Иванов И. И.')
    })

    it('should not throw when first name is empty string and short=true', () => {
      expect(() => intl.fullName('Doe', '', undefined, true)).not.toThrow()
      expect(intl.fullName('Doe', '', undefined, true)).toBe(' Doe')
    })

    it('should support fsl and lf nameFormat variants without outputting "undefined."', () => {
      Geo.add('QQ', { language: 'qq', nameFormat: 'fsl' })
      const fslIntl = new GeoIntl('qq-QQ')
      expect(fslIntl.fullName('Doe', 'John', undefined, true)).toBe('J. Doe')
      expect(fslIntl.fullName('Doe', 'John', 'Middle', true)).toBe('J. M. Doe')

      Geo.add('WW', { language: 'ww', nameFormat: 'lf' })
      const lfIntl = new GeoIntl('ww-WW')
      expect(lfIntl.fullName('Doe', 'John', undefined, true)).toBe('Doe J.')
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

    it('currency should parse embedded currency code from string', () => {
      expect(intl.currency('100EUR')).toContain('€100.00')
    })

    it('currency with numberOnly returns only numeric value', () => {
      expect(intl.currency(10, 'USD', true)).toBe('10.00')
    })

    it('currency without currency code falls back to decimal formatting', () => {
      expect(intl.currency(1234.5)).toBe('1,234.5')
    })

    it('currencySymbol returns symbol or code string', () => {
      expect(intl.currencySymbol('EUR')).toBe('€')
      expect(intl.currencySymbol('USD', 'code')).toContain('USD')
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

    it('sizeFile auto-upgrades recursively from byte through petabyte', () => {
      expect(intl.sizeFile(1024, 'byte')).toContain('1,024 byte')
      expect(intl.sizeFile(1025, 'byte')).toContain('1 kB')
      expect(intl.sizeFile(1024 ** 2 + 1, 'byte')).toContain('1 MB')
      expect(intl.sizeFile(1024 ** 3 + 1, 'byte')).toContain('1 GB')
      expect(intl.sizeFile(1024 ** 4 + 1, 'byte')).toContain('1 TB')
      expect(intl.sizeFile(1024 ** 5 + 1, 'byte')).toContain('1 PB')
    })
  })

  describe('Pluralization', () => {
    const wordsList = 'один|два|несколько|много|остальное|ноль'
    const russianIntl = new GeoIntl('ru-RU')

    it('should select correct form for Russian plural (one, few, many, other)', () => {
      expect(russianIntl.plural(1, wordsList)).toContain('один')
      expect(russianIntl.plural(2, wordsList)).toContain('несколько')
      expect(russianIntl.plural(5, wordsList)).toContain('много')
      expect(russianIntl.plural(1.5, wordsList)).toContain('остальное')
    })

    it('should handle two-word English plural and single-word fallback', () => {
      expect(intl.plural(1, 'apple|apples')).toBe('1 apple')
      expect(intl.plural(5, 'apple|apples')).toBe('5 apples')
      expect(intl.plural(3, 'item')).toBe('3 item')
    })
  })

  describe('Date & Time', () => {
    const sampleDate = new Date(2025, 2, 7, 15, 30, 0) // March 7, 2025

    it('date formats as date by default and supports all GeoDate types and hour24', () => {
      expect(intl.date(sampleDate)).toBe('Mar 07, 2025')
      expect(intl.date(sampleDate, 'datetime', 'long', true)).toContain('15:30')
      expect(intl.date(sampleDate, 'year-month')).toContain('2025')
      expect(intl.date(sampleDate, 'day-month')).toContain('07')
    })

    it('time formats correct time', () => {
      expect(intl.time(sampleDate)).toContain('3:30')
    })

    it('month returns long month name', () => {
      expect(intl.month(sampleDate)).toBe('March')
    })

    it('weekday returns long weekday name', () => {
      expect(intl.weekday(sampleDate)).toBe('Friday')
    })

    it('months returns list of all 12 months without skipping February when system date is the 31st', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date(2025, 2, 31)) // March 31
      const list = intl.months()
      expect(list).toHaveLength(13)
      expect(list[1]?.label).toBe('January')
      expect(list[2]?.label).toBe('February')
      expect(list[3]?.label).toBe('March')
      expect(list[12]?.label).toBe('December')
    })

    it('weekdays returns list of all 7 days aligned with locale firstDay (Su, Mo, Sa)', () => {
      // en-US has firstDay = 'Su' (0)
      const usList = intl.weekdays()
      expect(usList).toHaveLength(8)
      expect(usList[1]).toEqual({ label: 'Sunday', value: 0 })
      expect(usList[7]).toEqual({ label: 'Saturday', value: 6 })

      // ru-RU has firstDay = 'Mo' (1)
      const russianIntl = new GeoIntl('ru-RU')
      const russianList = russianIntl.weekdays()
      expect(russianList[1]?.value).toBe(1) // Monday
      expect(russianList[7]?.value).toBe(0) // Sunday

      // Custom Saturday-first locale ('Sa' -> 6)
      Geo.add('EG', { firstDay: 'Sa' })
      const saturdayFirstIntl = new GeoIntl('ar-EG')
      const saturdayList = saturdayFirstIntl.weekdays()
      expect(saturdayList[1]?.value).toBe(6) // Saturday
      expect(saturdayList[2]?.value).toBe(0) // Sunday
      expect(saturdayList[7]?.value).toBe(5) // Friday
    })
  })

  describe('Relative Time', () => {
    it('relative formats seconds, minutes, hours, days, months, and years correctly', () => {
      const now = new Date(2025, 2, 7, 12, 0, 0)

      const inThirtySeconds = new Date(2025, 2, 7, 12, 0, 30)
      expect(intl.relative(inThirtySeconds, undefined, now)).toBe('in 30 seconds')

      const inTenMinutes = new Date(2025, 2, 7, 12, 10, 0)
      expect(intl.relative(inTenMinutes, undefined, now)).toBe('in 10 minutes')

      const inThreeHours = new Date(2025, 2, 7, 15, 0, 0)
      expect(intl.relative(inThreeHours, undefined, now)).toBe('in 3 hours')

      const inTwoDays = new Date(2025, 2, 9, 12, 0, 0)
      expect(intl.relative(inTwoDays, undefined, now)).toBe('in 2 days')

      const inTwoMonths = new Date(2025, 4, 10, 12, 0, 0)
      expect(intl.relative(inTwoMonths, undefined, now)).toBe('in 2 months')

      const inTwoYears = new Date(2027, 3, 7, 12, 0, 0)
      expect(intl.relative(inTwoYears, undefined, now)).toBe('in 2 years')
    })

    it('relativeByValue formats direct value with unit', () => {
      expect(intl.relativeByValue(-5, 'minute')).toBe('5 minutes ago')
      expect(intl.relativeByValue(3, 'hour', 'short')).toContain('3 hr.')
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
    it('sorts alphabetically per locale without mutating the input array', () => {
      const data = ['яблоко', 'арбуз', 'банан']
      const russianIntl = new GeoIntl('ru-RU')
      const sorted = russianIntl.sort(data)
      expect(sorted).toEqual(['арбуз', 'банан', 'яблоко'])
      expect(sorted).not.toBe(data)
      expect(data).toEqual(['яблоко', 'арбуз', 'банан'])
    })

    it('supports custom compareFn when sorting objects without mutating the input array', () => {
      const items = [{ label: 'Banana' }, { label: 'Apple' }]
      const sorted = intl.sort(items, (itemA, itemB) => [itemA.label, itemB.label])
      expect(sorted.map(item => item.label)).toEqual(['Apple', 'Banana'])
      expect(items.map(item => item.label)).toEqual(['Banana', 'Apple'])
    })
  })
})
