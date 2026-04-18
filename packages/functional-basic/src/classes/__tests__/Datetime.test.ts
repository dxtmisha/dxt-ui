import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Datetime } from '../Datetime'

describe('Datetime', () => {
  let dateObj: Date

  beforeEach(() => {
    // Fixed date for predictable outputs: 2024-03-15T10:30:00.000Z
    dateObj = new Date('2024-03-15T10:30:00Z')
    vi.useFakeTimers()
    vi.setSystemTime(dateObj)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Initialization', () => {
    it('should initialize with the current date if no date is provided', () => {
      const dt = new Datetime()
      expect(dt.getDate().getTime()).toBe(dateObj.getTime())
    })

    it('should initialize with the provided date string', () => {
      const dt = new Datetime('2023-01-01 12:00:00')
      expect(dt.getYear()).toBe(2023)
    })

    it('should initialize with the provided Date object', () => {
      const testDate = new Date('2023-06-15T08:00:00Z')
      const dt = new Datetime(testDate)
      expect(dt.getYear()).toBe(2023)
      expect(dt.getMonth()).toBe(6)
      expect(dt.getDay()).toBe(15)
    })

    it('should initialize with the provided timestamp', () => {
      const timestamp = 1672531200000 // 2023-01-01T00:00:00Z
      const dt = new Datetime(timestamp)
      expect(dt.getYear()).toBe(2023)
    })
  })

  describe('Basic Getters', () => {
    it('should get year, month, day, hour, minute, second correctly', () => {
      const dt = new Datetime(dateObj)
      expect(dt.getYear()).toBe(dateObj.getFullYear())
      expect(dt.getMonth()).toBe(dateObj.getMonth() + 1) // Month is 1-based
      expect(dt.getDay()).toBe(dateObj.getDate())
      expect(dt.getHour()).toBe(dateObj.getHours())
      expect(dt.getMinute()).toBe(dateObj.getMinutes())
      expect(dt.getSecond()).toBe(dateObj.getSeconds())
    })

    it('should return correct date object', () => {
      const dt = new Datetime(dateObj)
      expect(dt.getDate()).toBeInstanceOf(Date)
      expect(dt.getDate().getTime()).toBe(dateObj.getTime())
    })

    it('should return correct type', () => {
      const dt = new Datetime(dateObj, 'datetime')
      expect(dt.getType()).toBe('datetime')
    })

    it('should get hour24 flag correctly', () => {
      const dt = new Datetime(dateObj)
      expect(dt.getHour24()).toBe(false)

      dt.setHour24(true)
      expect(dt.getHour24()).toBe(true)
    })
  })

  describe('Time Zone Methods', () => {
    it('should get time zone offset correctly', () => {
      const dt = new Datetime(dateObj)
      expect(typeof dt.getTimeZoneOffset()).toBe('number')
    })

    it('should get time zone in different formats', () => {
      const dt = new Datetime(dateObj)

      const minuteFormat = dt.getTimeZone('minute')
      expect(typeof minuteFormat).toBe('string')

      const hourFormat = dt.getTimeZone('hour')
      expect(typeof hourFormat).toBe('string')

      const defaultFormat = dt.getTimeZone()
      expect(typeof defaultFormat).toBe('string')
      expect(defaultFormat).toContain(':')

      const rfcFormat = dt.getTimeZone('RFC')
      expect(typeof rfcFormat).toBe('string')
      expect(rfcFormat).toMatch(/^[+-]\d{4}$/)
    })
  })

  describe('Locale Methods', () => {
    it('should format date in different styles', () => {
      const dt = new Datetime(dateObj)

      const year = dt.localeYear()
      expect(typeof year).toBe('string')
      expect(year).toContain('2024')

      const month = dt.localeMonth('long')
      expect(typeof month).toBe('string')

      const day = dt.localeDay()
      expect(typeof day).toBe('string')

      const hour = dt.localeHour()
      expect(typeof hour).toBe('string')

      const minute = dt.localeMinute()
      expect(typeof minute).toBe('string')

      const second = dt.localeSecond()
      expect(typeof second).toBe('string')
    })

    it('should format full date', () => {
      const dt = new Datetime(dateObj, 'full')
      const formatted = dt.locale()
      expect(typeof formatted).toBe('string')
      expect(formatted.length).toBeGreaterThan(0)
    })
  })

  describe('Basic Setters', () => {
    it('should set year, month, day, hour, minute, second correctly', () => {
      const dt = new Datetime()
      dt.setYear(2025)
      expect(dt.getYear()).toBe(2025)

      dt.setMonth(5)
      expect(dt.getMonth()).toBe(5)

      dt.setDay(10)
      expect(dt.getDay()).toBe(10)

      dt.setHour(14)
      expect(dt.getHour()).toBe(14)

      dt.setMinute(45)
      expect(dt.getMinute()).toBe(45)

      dt.setSecond(30)
      expect(dt.getSecond()).toBe(30)
    })

    it('should set hour24 flag', () => {
      const dt = new Datetime()
      dt.setHour24(true)
      expect(dt.getHour24()).toBe(true)

      dt.setHour24(false)
      expect(dt.getHour24()).toBe(false)
    })

    it('should set type', () => {
      const dt = new Datetime()
      dt.setType('time')
      expect(dt.getType()).toBe('time')
    })

    it('should set code', () => {
      const dt = new Datetime()
      dt.setCode('ru-RU')
      // Code is set but affects internal locale formatting
      expect(dt.getIntl()).toBeDefined()
    })
  })

  describe('Move Methods', () => {
    it('should move by year, month, day, hour, minute, second', () => {
      const dt = new Datetime(dateObj)

      const initialYear = dt.getYear()
      dt.moveByYear(2)
      expect(dt.getYear()).toBe(initialYear + 2)

      const initialMonth = dt.getMonth()
      dt.moveByMonth(2)
      const expectedMonth = initialMonth + 2
      expect(dt.getMonth()).toBe(expectedMonth > 12 ? expectedMonth % 12 || 12 : expectedMonth)

      const initialDay = dt.getDay()
      dt.moveByDay(5)
      expect(dt.getDay()).toBe(initialDay + 5)

      const initialHour = dt.getHour()
      dt.moveByHour(3)
      expect(dt.getHour()).toBe((initialHour + 3) % 24)

      const initialMinute = dt.getMinute()
      dt.moveByMinute(30)
      expect(dt.getMinute()).toBe((initialMinute + 30) % 60)

      const initialSecond = dt.getSecond()
      dt.moveBySecond(15)
      expect(dt.getSecond()).toBe((initialSecond + 15) % 60)
    })

    it('should move to the first and last day of the month', () => {
      const dt = new Datetime(dateObj) // 2024-03-15

      dt.moveDayFirst()
      expect(dt.getDay()).toBe(1)

      dt.moveDayLast()
      // March has 31 days
      expect(dt.getDay()).toBe(31)
    })

    it('should move to first and last month', () => {
      const dt = new Datetime('2024-06-15')

      dt.moveMonthFirst()
      expect(dt.getMonth()).toBe(1)

      dt.moveMonthLast()
      expect(dt.getMonth()).toBe(12)
    })

    it('should move to next and previous month', () => {
      const dt = new Datetime('2024-03-15')

      dt.moveMonthNext()
      expect(dt.getMonth()).toBe(4)
      expect(dt.getDay()).toBe(1)

      dt.moveMonthPrevious()
      expect(dt.getMonth()).toBe(3)
      expect(dt.getDay()).toBe(1)
    })

    it('should move to first and last day of week', () => {
      const dt = new Datetime('2024-03-15') // Friday

      dt.moveWeekdayFirst()
      const weekdayFirst = dt.getFirstDayCode()
      expect([0, 1, 6]).toContain(weekdayFirst)

      dt.moveWeekdayLast()
      expect(dt.getDay()).toBeGreaterThan(0)
    })

    it('should move to next and previous week', () => {
      const dt = new Datetime('2024-03-15') // Friday

      dt.moveWeekdayNext()
      // Moves to first day of week, then +7 days
      expect(dt.getDay()).toBeGreaterThan(0)
      expect(dt.getDay()).toBeLessThanOrEqual(31)

      // Reset and test previous week
      const dt2 = new Datetime('2024-03-15')
      dt2.moveWeekdayPrevious()
      // Moves to first day of week, then -7 days
      expect(dt2.getMonth()).toBe(3) // Still in March
    })

    it('should move to next and previous day', () => {
      const dt = new Datetime('2024-03-15')

      dt.moveDayNext()
      expect(dt.getDay()).toBe(16)

      dt.moveDayPrevious()
      expect(dt.getDay()).toBe(15)
    })
  })

  describe('Clone Methods', () => {
    it('should clone Date object', () => {
      const dt = new Datetime(dateObj)
      const cloned = dt.clone()

      expect(cloned).not.toBe(dt.getDate())
      expect(cloned.getTime()).toBe(dt.getDate().getTime())
    })

    it('should clone Datetime object', () => {
      const dt = new Datetime(dateObj, 'datetime', 'en-US')
      const cloned = dt.cloneClass()

      expect(cloned).not.toBe(dt)
      expect(cloned.getDate().getTime()).toBe(dt.getDate().getTime())
      expect(cloned.getType()).toBe(dt.getType())
    })

    it('should clone and move to first/last month', () => {
      const dt = new Datetime('2024-06-15')

      const firstMonth = dt.cloneMonthFirst()
      expect(firstMonth.getMonth()).toBe(1)
      expect(dt.getMonth()).toBe(6) // Original should not change

      const lastMonth = dt.cloneMonthLast()
      expect(lastMonth.getMonth()).toBe(12)
    })

    it('should clone and move to next/previous month', () => {
      const dt = new Datetime('2024-03-15')

      const nextMonth = dt.cloneMonthNext()
      expect(nextMonth.getMonth()).toBe(4)
      expect(nextMonth.getDay()).toBe(1)

      const prevMonth = dt.cloneMonthPrevious()
      expect(prevMonth.getMonth()).toBe(2)
      expect(prevMonth.getDay()).toBe(1)
    })

    it('should clone and move to first/last day of month', () => {
      const dt = new Datetime('2024-03-15')

      const firstDay = dt.cloneDayFirst()
      expect(firstDay.getDay()).toBe(1)
      expect(dt.getDay()).toBe(15)

      const lastDay = dt.cloneDayLast()
      expect(lastDay.getDay()).toBe(31)
    })

    it('should clone and move to next/previous day', () => {
      const dt = new Datetime('2024-03-15')

      const nextDay = dt.cloneDayNext()
      expect(nextDay.getDay()).toBe(16)

      const prevDay = dt.cloneDayPrevious()
      expect(prevDay.getDay()).toBe(14)
    })
  })

  describe('Standard Format', () => {
    it('should format standard date and datetime string', () => {
      const dt = new Datetime(dateObj)
      dt.setType('date')
      const stdDate = dt.standard(false)
      expect(stdDate).toBe('2024-03-15')

      dt.setType('datetime')
      const stdDateTime = dt.standard(false)
      expect(stdDateTime).toContain('2024-03-15T')
    })

    it('should include time zone when requested', () => {
      const dt = new Datetime(dateObj)
      dt.setType('datetime')
      const withTimeZone = dt.standard(true)
      const withoutTimeZone = dt.standard(false)

      expect(withTimeZone.length).toBeGreaterThan(withoutTimeZone.length)
    })

    it('should format time only', () => {
      const dt = new Datetime(dateObj)
      dt.setType('time')
      const stdTime = dt.standard(false)
      expect(stdTime).toContain('T')
    })
  })

  describe('Utility Methods', () => {
    it('should get first day code', () => {
      const dt = new Datetime(dateObj)
      const firstDay = dt.getFirstDayCode()
      expect([0, 1, 6]).toContain(firstDay)
    })

    it('should get hours type', () => {
      const dt = new Datetime(dateObj)
      const hoursType = dt.getHoursType()
      expect(['12', '24']).toContain(hoursType)
    })

    it('should get intl object', () => {
      const dt = new Datetime(dateObj)
      const intl = dt.getIntl()
      expect(intl).toBeDefined()
    })
  })

  describe('Watch Functionality', () => {
    it('should call watch function on update', () => {
      const dt = new Datetime(dateObj)
      const watchFn = vi.fn()

      dt.setWatch(watchFn)
      dt.setYear(2025)

      expect(watchFn).toHaveBeenCalled()
    })
  })

  describe('Edge Cases', () => {
    it('should handle leap year correctly', () => {
      const dt = new Datetime('2024-02-15') // Leap year
      dt.moveDayLast()
      expect(dt.getDay()).toBe(29) // February has 29 days in leap year

      const dt2 = new Datetime('2023-02-15') // Non-leap year
      dt2.moveDayLast()
      expect(dt2.getDay()).toBe(28) // February has 28 days in non-leap year
    })

    it('should handle month overflow correctly', () => {
      const dt = new Datetime('2024-12-15')
      dt.moveByMonth(2)
      expect(dt.getYear()).toBe(2025)
      expect(dt.getMonth()).toBe(2)
    })

    it('should handle negative month movement', () => {
      const dt = new Datetime('2024-03-15')
      dt.moveByMonth(-5)
      expect(dt.getYear()).toBe(2023)
      expect(dt.getMonth()).toBe(10)
    })

    it('should handle different date formats in constructor', () => {
      const dt1 = new Datetime('2024-03-15')
      expect(dt1.getYear()).toBe(2024)

      const dt2 = new Datetime('20240315')
      expect(dt2.getYear()).toBe(2024)

      const dt3 = new Datetime('2024-03')
      expect(dt3.getYear()).toBe(2024)
      expect(dt3.getMonth()).toBe(3)
    })
  })
})
