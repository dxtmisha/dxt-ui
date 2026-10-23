import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Datetime } from '../Datetime'
import { ErrorCenter } from '../ErrorCenter'

describe('Datetime', () => {
  let baseDate: Date

  beforeEach(() => {
    baseDate = new Date('2024-03-15T10:30:00Z')
    vi.useFakeTimers()
    vi.setSystemTime(baseDate)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Initialization', () => {
    it('should initialize with the current date if no date is provided', () => {
      const datetime = new Datetime()
      expect(datetime.getDate().getTime()).toBe(baseDate.getTime())
    })

    it('should initialize with the provided date string', () => {
      const datetime = new Datetime('2023-01-01 12:00:00')
      expect(datetime.getYear()).toBe(2023)
    })

    it('should initialize with the provided Date object', () => {
      const testDate = new Date('2023-06-15T08:00:00Z')
      const datetime = new Datetime(testDate)
      expect(datetime.getYear()).toBe(2023)
      expect(datetime.getMonth()).toBe(6)
      expect(datetime.getDay()).toBe(15)
    })

    it('should initialize with the provided timestamp', () => {
      const timestamp = 1672531200000 // 2023-01-01T00:00:00Z
      const datetime = new Datetime(timestamp)
      expect(datetime.getYear()).toBe(2023)
    })

    it('should report to ErrorCenter when initialized with an invalid date string', () => {
      const errorSpy = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
      new Datetime('not-a-valid-date')

      expect(errorSpy).toHaveBeenCalledWith({
        group: 'intl',
        code: 'invalid'
      })
    })
  })

  describe('Basic Getters', () => {
    it('should get year, month, day, hour, minute, second correctly', () => {
      const datetime = new Datetime(baseDate)
      expect(datetime.getYear()).toBe(baseDate.getFullYear())
      expect(datetime.getMonth()).toBe(baseDate.getMonth() + 1)
      expect(datetime.getDay()).toBe(baseDate.getDate())
      expect(datetime.getHour()).toBe(baseDate.getHours())
      expect(datetime.getMinute()).toBe(baseDate.getMinutes())
      expect(datetime.getSecond()).toBe(baseDate.getSeconds())
    })

    it('should return correct Date object', () => {
      const datetime = new Datetime(baseDate)
      expect(datetime.getDate()).toBeInstanceOf(Date)
      expect(datetime.getDate().getTime()).toBe(baseDate.getTime())
    })

    it('should return correct type', () => {
      const datetime = new Datetime(baseDate, 'datetime')
      expect(datetime.getType()).toBe('datetime')
    })

    it('should get hour24 flag correctly', () => {
      const datetime = new Datetime(baseDate)
      expect(datetime.getHour24()).toBe(false)

      datetime.setHour24(true)
      expect(datetime.getHour24()).toBe(true)
    })

    it('should detect hours format (12 or 24) for different locales', () => {
      const datetime24 = new Datetime(baseDate, 'date', 'ru-RU')
      expect(datetime24.getHoursType()).toBe('24')

      const datetime12 = new Datetime(baseDate, 'date', 'en-US')
      expect(datetime12.getHoursType()).toBe('12')
    })
  })

  describe('Time Zone Methods', () => {
    it('should get time zone offset correctly', () => {
      const datetime = new Datetime(baseDate)
      expect(typeof datetime.getTimeZoneOffset()).toBe('number')
      expect(datetime.getTimeZoneOffset()).toBe(baseDate.getTimezoneOffset())
    })

    it('should format negative, positive 2-digit, fractional, and zero offsets across all styles', () => {
      const datetime = new Datetime(baseDate, 'date', 'en-US')

      // UTC-5 (getTimezoneOffset returns +300)
      vi.spyOn(datetime, 'getTimeZoneOffset').mockReturnValue(300)
      expect(datetime.getTimeZone('minute')).toBe('300')
      expect(datetime.getTimeZone('hour')).toBe('-5')
      expect(datetime.getTimeZone('ISO8601')).toBe('-05:00')
      expect(datetime.getTimeZone('RFC')).toBe('-0500')
      expect(datetime.getTimeZone()).toBe('-05:00')

      // UTC+10 (getTimezoneOffset returns -600)
      vi.spyOn(datetime, 'getTimeZoneOffset').mockReturnValue(-600)
      expect(datetime.getTimeZone('minute')).toBe('-600')
      expect(datetime.getTimeZone('hour')).toBe('+10')
      expect(datetime.getTimeZone('ISO8601')).toBe('+10:00')
      expect(datetime.getTimeZone('RFC')).toBe('+1000')
      expect(datetime.getTimeZone()).toBe('+10:00')

      // UTC+5:45 (getTimezoneOffset returns -345)
      vi.spyOn(datetime, 'getTimeZoneOffset').mockReturnValue(-345)
      expect(datetime.getTimeZone('minute')).toBe('-345')
      expect(datetime.getTimeZone('hour')).toBe('+5')
      expect(datetime.getTimeZone('ISO8601')).toBe('+05:45')
      expect(datetime.getTimeZone('RFC')).toBe('+0545')
      expect(datetime.getTimeZone()).toBe('+05:45')

      // UTC+0 (getTimezoneOffset returns 0)
      vi.spyOn(datetime, 'getTimeZoneOffset').mockReturnValue(0)
      expect(datetime.getTimeZone('minute')).toBe('0')
      expect(datetime.getTimeZone('hour')).toBe('+0')
      expect(datetime.getTimeZone('ISO8601')).toBe('+00:00')
      expect(datetime.getTimeZone('RFC')).toBe('+0000')
      expect(datetime.getTimeZone()).toBe('+00:00')
    })
  })

  describe('First Day Code', () => {
    it('should return 1 for Monday, 0 for Sunday, and 6 for Saturday', () => {
      const datetime = new Datetime(baseDate)
      const intl = datetime.getIntl()

      vi.spyOn(intl, 'getFirstDay').mockReturnValue('Mo')
      expect(datetime.getFirstDayCode()).toBe(1)

      vi.spyOn(intl, 'getFirstDay').mockReturnValue('Su')
      expect(datetime.getFirstDayCode()).toBe(0)

      vi.spyOn(intl, 'getFirstDay').mockReturnValue('Sa')
      expect(datetime.getFirstDayCode()).toBe(6)
    })
  })

  describe('Locale Methods', () => {
    it('should format individual date and time parts', () => {
      const datetime = new Datetime(baseDate, 'date', 'en-US')

      const year = datetime.localeYear()
      expect(year).toBe('2024')

      const shortYear = datetime.localeYear('2-digit')
      expect(shortYear).toBe('24')

      const longMonth = datetime.localeMonth('long')
      expect(longMonth).toBe('March')

      const shortMonth = datetime.localeMonth('short')
      expect(shortMonth).toBe('Mar')

      const narrowMonth = datetime.localeMonth('narrow')
      expect(narrowMonth).toBe('M')

      const day = datetime.localeDay()
      expect(typeof day).toBe('string')
      expect(day.length).toBeGreaterThan(0)

      const hour = datetime.localeHour()
      expect(typeof hour).toBe('string')
      expect(hour.length).toBeGreaterThan(0)

      const minute = datetime.localeMinute()
      expect(typeof minute).toBe('string')
      expect(minute.length).toBeGreaterThan(0)

      const second = datetime.localeSecond()
      expect(typeof second).toBe('string')
      expect(second.length).toBeGreaterThan(0)
    })

    it('should format full date and respect locale changes via setCode', () => {
      const datetime = new Datetime('2024-06-15T10:30:00', 'full', 'en-US')
      const englishDate = datetime.locale('full')

      datetime.setCode('ru-RU')
      const russianDate = datetime.locale('full')

      expect(typeof englishDate).toBe('string')
      expect(typeof russianDate).toBe('string')
      expect(englishDate).not.toBe(russianDate)
    })
  })

  describe('Basic Setters', () => {
    it('should set date, year, month, day, hour, minute, second correctly and support chaining', () => {
      const datetime = new Datetime()

      expect(datetime.setDate('2025-05-10T14:45:30')).toBe(datetime)
      expect(datetime.getYear()).toBe(2025)

      expect(datetime.setYear(2026)).toBe(datetime)
      expect(datetime.getYear()).toBe(2026)

      expect(datetime.setMonth(5)).toBe(datetime)
      expect(datetime.getMonth()).toBe(5)

      expect(datetime.setDay(10)).toBe(datetime)
      expect(datetime.getDay()).toBe(10)

      expect(datetime.setHour(14)).toBe(datetime)
      expect(datetime.getHour()).toBe(14)

      expect(datetime.setMinute(45)).toBe(datetime)
      expect(datetime.getMinute()).toBe(45)

      expect(datetime.setSecond(30)).toBe(datetime)
      expect(datetime.getSecond()).toBe(30)
    })

    it('should set hour24, type, and code with chaining', () => {
      const datetime = new Datetime()

      expect(datetime.setHour24(true)).toBe(datetime)
      expect(datetime.getHour24()).toBe(true)

      expect(datetime.setHour24(false)).toBe(datetime)
      expect(datetime.getHour24()).toBe(false)

      expect(datetime.setType('time')).toBe(datetime)
      expect(datetime.getType()).toBe('time')

      expect(datetime.setCode('ru-RU')).toBe(datetime)
      expect(datetime.getIntl().getLocation()).toBe('ru-RU')
    })
  })

  describe('Move Methods', () => {
    it('should move by year, month, day, hour, minute, second', () => {
      const datetime = new Datetime(baseDate)

      const initialYear = datetime.getYear()
      datetime.moveByYear(2)
      expect(datetime.getYear()).toBe(initialYear + 2)

      const initialMonth = datetime.getMonth()
      datetime.moveByMonth(2)
      const expectedMonth = initialMonth + 2
      expect(datetime.getMonth()).toBe(expectedMonth > 12 ? expectedMonth % 12 || 12 : expectedMonth)

      const initialDay = datetime.getDay()
      datetime.moveByDay(5)
      expect(datetime.getDay()).toBe(initialDay + 5)

      const initialHour = datetime.getHour()
      datetime.moveByHour(3)
      expect(datetime.getHour()).toBe((initialHour + 3) % 24)

      const initialMinute = datetime.getMinute()
      datetime.moveByMinute(30)
      expect(datetime.getMinute()).toBe((initialMinute + 30) % 60)

      const initialSecond = datetime.getSecond()
      datetime.moveBySecond(15)
      expect(datetime.getSecond()).toBe((initialSecond + 15) % 60)
    })

    it('should move to the first and last day of the month', () => {
      const datetime = new Datetime('2024-03-15T12:00:00')

      datetime.moveDayFirst()
      expect(datetime.getDay()).toBe(1)

      datetime.moveDayLast()
      expect(datetime.getDay()).toBe(31)
    })

    it('should move to first and last month', () => {
      const datetime = new Datetime('2024-06-15T12:00:00')

      datetime.moveMonthFirst()
      expect(datetime.getMonth()).toBe(1)

      datetime.moveMonthLast()
      expect(datetime.getMonth()).toBe(12)
    })

    it('should move to next and previous month', () => {
      const datetime = new Datetime('2024-03-15T12:00:00')

      datetime.moveMonthNext()
      expect(datetime.getMonth()).toBe(4)
      expect(datetime.getDay()).toBe(1)

      datetime.moveMonthPrevious()
      expect(datetime.getMonth()).toBe(3)
      expect(datetime.getDay()).toBe(1)
    })

    it('should move to first day of week on Sunday when firstDay is Monday (moves back 6 days to previous Monday, not forward)', () => {
      // 2024-03-17 is Sunday; Monday of that week is 2024-03-11
      const sundayDatetime = new Datetime('2024-03-17T12:00:00', 'date', 'ru-RU')
      vi.spyOn(sundayDatetime.getIntl(), 'getFirstDay').mockReturnValue('Mo')

      sundayDatetime.moveWeekdayFirst()
      expect(sundayDatetime.getYear()).toBe(2024)
      expect(sundayDatetime.getMonth()).toBe(3)
      expect(sundayDatetime.getDay()).toBe(11)
    })

    it('should stay on Saturday when moving to first day of week on Saturday and firstDay is Saturday', () => {
      // 2024-03-16 is Saturday
      const saturdayDatetime = new Datetime('2024-03-16T12:00:00', 'date', 'ar-EG')
      vi.spyOn(saturdayDatetime.getIntl(), 'getFirstDay').mockReturnValue('Sa')

      saturdayDatetime.moveWeekdayFirst()
      expect(saturdayDatetime.getDay()).toBe(16)

      // 2024-03-15 is Friday; when firstDay is Saturday (6), previous Saturday is 2024-03-09
      const fridayDatetime = new Datetime('2024-03-15T12:00:00', 'date', 'ar-EG')
      vi.spyOn(fridayDatetime.getIntl(), 'getFirstDay').mockReturnValue('Sa')

      fridayDatetime.moveWeekdayFirst()
      expect(fridayDatetime.getDay()).toBe(9)
    })

    it('should move to last day of week accurately', () => {
      const fridayDatetime = new Datetime('2024-03-15T12:00:00', 'date', 'ru-RU')
      vi.spyOn(fridayDatetime.getIntl(), 'getFirstDay').mockReturnValue('Mo')

      fridayDatetime.moveWeekdayLast()
      expect(fridayDatetime.getDay()).toBe(17) // Sunday 2024-03-17
    })

    it('should move to next and previous week', () => {
      const datetimeNext = new Datetime('2024-03-15T12:00:00', 'date', 'ru-RU')
      vi.spyOn(datetimeNext.getIntl(), 'getFirstDay').mockReturnValue('Mo')
      datetimeNext.moveWeekdayNext()
      expect(datetimeNext.getDay()).toBe(18) // Monday of next week

      const datetimePrevious = new Datetime('2024-03-15T12:00:00', 'date', 'ru-RU')
      vi.spyOn(datetimePrevious.getIntl(), 'getFirstDay').mockReturnValue('Mo')
      datetimePrevious.moveWeekdayPrevious()
      expect(datetimePrevious.getDay()).toBe(4) // Monday of previous week
    })

    it('should move to first and last weekday of month', () => {
      const datetimeFirst = new Datetime('2024-06-15T12:00:00', 'date', 'ru-RU')
      vi.spyOn(datetimeFirst.getIntl(), 'getFirstDay').mockReturnValue('Mo')
      datetimeFirst.moveWeekdayFirstByMonth()
      // 2024-06-01 is Saturday; Monday of that week is 2024-05-27
      expect(datetimeFirst.getMonth()).toBe(5)
      expect(datetimeFirst.getDay()).toBe(27)

      const datetimeLast = new Datetime('2024-06-15T12:00:00', 'date', 'ru-RU')
      vi.spyOn(datetimeLast.getIntl(), 'getFirstDay').mockReturnValue('Mo')
      datetimeLast.moveWeekdayLastByMonth()
      // 2024-06-30 is Sunday; Sunday of that week is 2024-06-30
      expect(datetimeLast.getMonth()).toBe(6)
      expect(datetimeLast.getDay()).toBe(30)
    })

    it('should move to next and previous day', () => {
      const datetime = new Datetime('2024-03-15T12:00:00')

      datetime.moveDayNext()
      expect(datetime.getDay()).toBe(16)

      datetime.moveDayPrevious()
      expect(datetime.getDay()).toBe(15)
    })

    it('should handle hour/minute/second movements with overflow', () => {
      const datetimeOverflow = new Datetime('2024-06-15 23:59:59')
      datetimeOverflow.moveBySecond(2)
      expect(datetimeOverflow.getSecond()).toBe(1)
      expect(datetimeOverflow.getMinute()).toBe(0)
      expect(datetimeOverflow.getHour()).toBe(0)

      const datetimeUnderflow = new Datetime('2024-06-15 00:00:00')
      datetimeUnderflow.moveBySecond(-1)
      expect(datetimeUnderflow.getSecond()).toBe(59)
      expect(datetimeUnderflow.getMinute()).toBe(59)
      expect(datetimeUnderflow.getHour()).toBe(23)
    })
  })

  describe('Clone Methods', () => {
    it('should clone Date object', () => {
      const datetime = new Datetime(baseDate)
      const clonedDate = datetime.clone()

      expect(clonedDate).not.toBe(datetime.getDate())
      expect(clonedDate.getTime()).toBe(datetime.getDate().getTime())
    })

    it('should clone Datetime instance via cloneClass and preserve hour24, type, and code', () => {
      const datetime = new Datetime('2024-06-15T10:30:00', 'datetime', 'en-US')
      datetime.setHour24(true)

      const clonedDatetime = datetime.cloneClass()

      expect(clonedDatetime).not.toBe(datetime)
      expect(clonedDatetime.getDate().getTime()).toBe(datetime.getDate().getTime())
      expect(clonedDatetime.getType()).toBe('datetime')
      expect(clonedDatetime.getHour24()).toBe(true)
      expect(clonedDatetime.getIntl().getLocation()).toBe('en-US')
    })

    it('should clone and move to first/last month without mutating original', () => {
      const datetime = new Datetime('2024-06-15T12:00:00')

      const firstMonth = datetime.cloneMonthFirst()
      expect(firstMonth.getMonth()).toBe(1)
      expect(datetime.getMonth()).toBe(6)

      const lastMonth = datetime.cloneMonthLast()
      expect(lastMonth.getMonth()).toBe(12)
      expect(datetime.getMonth()).toBe(6)
    })

    it('should clone and move to next/previous month without mutating original', () => {
      const datetime = new Datetime('2024-03-15T12:00:00')

      const nextMonth = datetime.cloneMonthNext()
      expect(nextMonth.getMonth()).toBe(4)
      expect(nextMonth.getDay()).toBe(1)

      const previousMonth = datetime.cloneMonthPrevious()
      expect(previousMonth.getMonth()).toBe(2)
      expect(previousMonth.getDay()).toBe(1)
      expect(datetime.getMonth()).toBe(3)
    })

    it('should clone and move to first/last/next/previous day without mutating original', () => {
      const datetime = new Datetime('2024-03-15T12:00:00')

      const firstDay = datetime.cloneDayFirst()
      expect(firstDay.getDay()).toBe(1)
      expect(datetime.getDay()).toBe(15)

      const lastDay = datetime.cloneDayLast()
      expect(lastDay.getDay()).toBe(31)

      const nextDay = datetime.cloneDayNext()
      expect(nextDay.getDay()).toBe(16)

      const previousDay = datetime.cloneDayPrevious()
      expect(previousDay.getDay()).toBe(14)
    })

    it('should clone weekday methods without mutating original', () => {
      const datetime = new Datetime('2024-06-15T12:00:00') // Saturday

      const firstWeekday = datetime.cloneWeekdayFirst()
      const lastWeekday = datetime.cloneWeekdayLast()
      const nextWeek = datetime.cloneWeekdayNext()
      const previousWeek = datetime.cloneWeekdayPrevious()
      const firstWeekdayByMonth = datetime.cloneWeekdayFirstByMonth()
      const lastWeekdayByMonth = datetime.cloneWeekdayLastByMonth()

      expect(datetime.getDay()).toBe(15)
      expect(firstWeekday.getDate().getTime()).not.toBe(datetime.getDate().getTime())
      expect(lastWeekday.getDate().getTime()).not.toBe(datetime.getDate().getTime())
      expect(nextWeek.getDate().getTime()).not.toBe(datetime.getDate().getTime())
      expect(previousWeek.getDate().getTime()).not.toBe(datetime.getDate().getTime())
      expect(firstWeekdayByMonth.getMonth()).toBe(5)
      expect(lastWeekdayByMonth.getDate().getTime()).not.toBe(datetime.getDate().getTime())
    })
  })

  describe('Standard Format', () => {
    it('should format standard date, day-month, year-month, year, month, day, datetime, time, and hour-minute', () => {
      const datetime = new Datetime('2024-06-15T10:30:45')

      datetime.setType('date')
      expect(datetime.standard(false)).toBe('2024-06-15')

      datetime.setType('day-month')
      expect(datetime.standard(false)).toBe('2024-06-15')

      datetime.setType('year-month')
      expect(datetime.standard(false)).toBe('2024-06')

      datetime.setType('year')
      expect(datetime.standard(false)).toBe('2024-06-15')

      datetime.setType('month')
      expect(datetime.standard(false)).toBe('2024-06-15')

      datetime.setType('day')
      expect(datetime.standard(false)).toBe('2024-06-15')

      datetime.setType('datetime')
      expect(datetime.standard(false)).toBe('2024-06-15T10:30:45')

      datetime.setType('full')
      expect(datetime.standard(false)).toBe('2024-06-15T10:30:45')

      datetime.setType('time')
      expect(datetime.standard(false)).toBe('T10:30:45')

      datetime.setType('hour-minute')
      const hourMinuteFormatted = datetime.standard(false)
      expect(hourMinuteFormatted).toContain('T')
      expect(hourMinuteFormatted).toContain('10:30')
    })

    it('should include time zone by default when time part is present', () => {
      const datetime = new Datetime('2024-06-15T10:30:00', 'datetime')
      const withTimeZone = datetime.standard(true)
      const withoutTimeZone = datetime.standard(false)

      expect(withTimeZone.length).toBeGreaterThan(withoutTimeZone.length)
      expect(withTimeZone).toContain(withoutTimeZone)
    })
  })

  describe('Watch Functionality', () => {
    it('should call watch callback on updates with date, type, and hour24', () => {
      const datetime = new Datetime('2024-06-15T12:00:00')
      const watchCallback = vi.fn()

      datetime.setWatch(watchCallback)
      expect(watchCallback).not.toHaveBeenCalled()

      datetime.setYear(2025)
      expect(watchCallback).toHaveBeenCalledWith(
        datetime.getDate(),
        'date',
        false
      )

      datetime.setMonth(7)
      datetime.setDay(20)
      datetime.setType('datetime')
      datetime.setHour24(true)

      expect(watchCallback).toHaveBeenCalledTimes(5)
      expect(watchCallback).toHaveBeenLastCalledWith(
        datetime.getDate(),
        'datetime',
        true
      )
    })
  })

  describe('Edge Cases and Max Day', () => {
    it('should return correct max day for each month including leap years', () => {
      const january = new Datetime('2024-01-15T12:00:00')
      expect(january.getMaxDay()).toBe(31)

      const februaryLeap = new Datetime('2024-02-15T12:00:00')
      expect(februaryLeap.getMaxDay()).toBe(29)

      const februaryNonLeap = new Datetime('2023-02-15T12:00:00')
      expect(februaryNonLeap.getMaxDay()).toBe(28)

      const april = new Datetime('2024-04-15T12:00:00')
      expect(april.getMaxDay()).toBe(30)
    })

    it('should handle positive and negative month overflow across years', () => {
      const december = new Datetime('2024-12-15T12:00:00')
      december.moveByMonth(2)
      expect(december.getYear()).toBe(2025)
      expect(december.getMonth()).toBe(2)

      const march = new Datetime('2024-03-15T12:00:00')
      march.moveByMonth(-5)
      expect(march.getYear()).toBe(2023)
      expect(march.getMonth()).toBe(10)
    })

    it('should handle compact date strings in constructor', () => {
      const compactDate = new Datetime('20240315')
      expect(compactDate.getYear()).toBe(2024)
      expect(compactDate.getMonth()).toBe(3)
      expect(compactDate.getDay()).toBe(15)

      const yearMonthDate = new Datetime('2024-03')
      expect(yearMonthDate.getYear()).toBe(2024)
      expect(yearMonthDate.getMonth()).toBe(3)
    })
  })
})
